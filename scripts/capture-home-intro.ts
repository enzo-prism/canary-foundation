/**
 * Recapture homepage intro frames and a short desktop video.
 * Requires a production build unless BASE_URL is set.
 *
 * OUT_DIR=/opt/cursor/artifacts/home-intro tsx scripts/capture-home-intro.ts
 */
import { spawn, type ChildProcess } from "node:child_process";
import { mkdirSync, writeFileSync } from "node:fs";
import { createServer } from "node:net";
import { join } from "node:path";
import { chromium, type Page } from "playwright-core";

const CHROME = process.env.CHROME_PATH ?? "/usr/bin/google-chrome-stable";
const OUT_DIR = process.env.OUT_DIR ?? "/opt/cursor/artifacts/home-intro";
const PREFIX = process.env.CAPTURE_PREFIX ?? "home_intro_v3";

async function freePort(): Promise<number> {
  return await new Promise((resolve, reject) => {
    const server = createServer();
    server.listen(0, "127.0.0.1", () => {
      const address = server.address();
      if (!address || typeof address === "string") {
        server.close();
        reject(new Error("Could not allocate a port"));
        return;
      }
      const { port } = address;
      server.close(() => resolve(port));
    });
    server.on("error", reject);
  });
}

async function startServer(): Promise<{ url: string; stop: () => void }> {
  if (process.env.BASE_URL) {
    return { url: process.env.BASE_URL.replace(/\/$/, ""), stop: () => {} };
  }
  const port = await freePort();
  const child: ChildProcess = spawn(process.execPath, ["dist/index.js"], {
    env: { ...process.env, NODE_ENV: "production", PORT: String(port) },
    stdio: ["ignore", "pipe", "pipe"],
  });
  const url = `http://127.0.0.1:${port}`;
  const deadline = Date.now() + 20_000;
  while (Date.now() < deadline) {
    try {
      const response = await fetch(url, { redirect: "manual" });
      if (response.ok || response.status === 301) {
        return { url, stop: () => { child.kill("SIGTERM"); } };
      }
    } catch {
      if (child.exitCode !== null) throw new Error("Production server exited");
    }
    await new Promise((resolve) => setTimeout(resolve, 150));
  }
  child.kill("SIGTERM");
  throw new Error("Production server did not start");
}

async function waitForImage(page: Page) {
  await page.waitForFunction(() => {
    const image = document.querySelector<HTMLImageElement>("#home-intro-photo, #home-intro img");
    return Boolean(image && image.complete && image.naturalWidth > 0);
  }, undefined, { timeout: 15_000 });
}

async function waitForLoadElapsed(page: Page, elapsedMs: number) {
  await page.waitForFunction(
    (elapsed) => {
      const image = document.querySelector<HTMLImageElement>("#home-intro-photo, #home-intro img");
      const fromDataset = Number(image?.dataset.loadedAt);
      const mark = Number.isFinite(fromDataset) && fromDataset > 0
        ? fromDataset
        : (window.__homeIntroLoadedAt ?? 0);
      return performance.now() >= mark + elapsed;
    },
    elapsedMs,
    { timeout: elapsedMs + 5_000 },
  );
}

async function main() {
  mkdirSync(OUT_DIR, { recursive: true });
  const { url, stop } = await startServer();
  const browser = await chromium.launch({
    executablePath: CHROME,
    args: ["--no-sandbox", "--disable-dev-shm-usage"],
  });

  try {
    for (const [width, height, label] of [[1280, 800, "1280"], [390, 844, "390"]] as const) {
      const context = await browser.newContext({
        viewport: { width, height },
        deviceScaleFactor: 1,
        reducedMotion: "no-preference",
      });
      const page = await context.newPage();
      await page.goto(url, { waitUntil: "domcontentloaded" });
      await waitForImage(page);
      await waitForLoadElapsed(page, 0);
      await page.screenshot({ path: join(OUT_DIR, `${PREFIX}_${label}_0s_photo.png`) });
      await waitForLoadElapsed(page, 6_000);
      await page.screenshot({ path: join(OUT_DIR, `${PREFIX}_${label}_6s_title.png`) });
      await waitForLoadElapsed(page, 9_000);
      await page.screenshot({ path: join(OUT_DIR, `${PREFIX}_${label}_9s_caption.png`) });
      await waitForLoadElapsed(page, 12_000);
      await page.screenshot({ path: join(OUT_DIR, `${PREFIX}_${label}_12s_hold.png`) });
      await context.close();
    }

    const failContext = await browser.newContext({
      viewport: { width: 1280, height: 800 },
      reducedMotion: "no-preference",
    });
    const failPage = await failContext.newPage();
    await failPage.route("**/home-intro/**", (route) => route.abort());
    await failPage.goto(url, { waitUntil: "domcontentloaded" });
    await failPage.waitForFunction(() => {
      const section = document.querySelector("#home-intro");
      const title = document.querySelector(".home-intro-title");
      return section?.getAttribute("data-phase") === "hold"
        && title
        && Number.parseFloat(getComputedStyle(title).opacity) >= 0.95;
    }, undefined, { timeout: 5_000 });
    await failPage.screenshot({ path: join(OUT_DIR, `${PREFIX}_1280_failure_final.png`) });
    await failContext.close();

    const lateContext = await browser.newContext({
      viewport: { width: 1280, height: 800 },
      deviceScaleFactor: 1,
      reducedMotion: "no-preference",
    });
    const latePage = await lateContext.newPage();
    const lateStarted = Date.now();
    await latePage.route("**/home-intro/**", async (route) => {
      await new Promise((resolveWait) => setTimeout(resolveWait, 8_200));
      await route.continue();
    });
    await latePage.goto(url, { waitUntil: "domcontentloaded" });
    await latePage.waitForFunction(() => {
      const section = document.querySelector("#home-intro");
      const title = document.querySelector(".home-intro-title");
      const caption = document.querySelector(".home-intro-caption");
      return section?.getAttribute("data-phase") === "hold"
        && title
        && caption
        && Number.parseFloat(getComputedStyle(title).opacity) >= 0.95
        && Number.parseFloat(getComputedStyle(caption).opacity) >= 0.95;
    }, undefined, { timeout: 12_000 });
    const untilNine = 9_000 - (Date.now() - lateStarted);
    if (untilNine > 0) await latePage.waitForTimeout(untilNine);
    await latePage.screenshot({ path: join(OUT_DIR, `${PREFIX}_1280_late_load_9s.png`) });
    await lateContext.close();

    const noJsContext = await browser.newContext({
      viewport: { width: 1280, height: 800 },
      javaScriptEnabled: false,
    });
    const noJsPage = await noJsContext.newPage();
    await noJsPage.goto(url, { waitUntil: "load" });
    await noJsPage.waitForFunction(() => {
      const title = document.querySelector(".home-intro-title");
      const image = document.querySelector<HTMLImageElement>("#home-intro-photo, #home-intro img");
      return Boolean(
        title
        && Number.parseFloat(getComputedStyle(title).opacity) >= 0.95
        && image
        && image.complete
        && image.naturalWidth > 0,
      );
    }, undefined, { timeout: 15_000 });
    await noJsPage.screenshot({ path: join(OUT_DIR, `${PREFIX}_1280_nojs_final.png`) });
    await noJsContext.close();

    const videoContext = await browser.newContext({
      viewport: { width: 1280, height: 800 },
      deviceScaleFactor: 1,
      reducedMotion: "no-preference",
    });
    const videoPage = await videoContext.newPage();
    await videoPage.goto(url, { waitUntil: "domcontentloaded" });
    await waitForImage(videoPage);
    const frameDir = join(OUT_DIR, `${PREFIX}_frames`);
    mkdirSync(frameDir, { recursive: true });
    const list: string[] = [];
    for (let i = 0; i <= 24; i += 1) {
      await waitForLoadElapsed(videoPage, i * 500);
      const file = join(frameDir, `frame_${String(i).padStart(2, "0")}.png`);
      await videoPage.screenshot({ path: file });
      list.push(`file '${file}'`);
      list.push("duration 0.5");
    }
    list.push(`file '${join(frameDir, "frame_24.png")}'`);
    const concatPath = join(frameDir, "concat.txt");
    writeFileSync(concatPath, `${list.join("\n")}\n`);
    await videoContext.close();

    const mp4 = join(OUT_DIR, `${PREFIX}_desktop_sequence_1280.mp4`);
    const webm = join(OUT_DIR, `${PREFIX}_desktop_sequence_1280.webm`);
    const ffmpegMp4 = spawn("ffmpeg", [
      "-y", "-f", "concat", "-safe", "0", "-i", concatPath,
      "-vf", "fps=2,format=yuv420p", "-c:v", "libx264", mp4,
    ], { stdio: "inherit" });
    await new Promise<void>((resolve, reject) => {
      ffmpegMp4.on("exit", (code) => (code === 0 ? resolve() : reject(new Error(`ffmpeg mp4 ${code}`))));
    });
    const ffmpegWebm = spawn("ffmpeg", [
      "-y", "-f", "concat", "-safe", "0", "-i", concatPath,
      "-vf", "fps=2", "-c:v", "libvpx-vp9", "-b:v", "1M", webm,
    ], { stdio: "inherit" });
    await new Promise<void>((resolve, reject) => {
      ffmpegWebm.on("exit", (code) => (code === 0 ? resolve() : reject(new Error(`ffmpeg webm ${code}`))));
    });

    console.log(`Wrote frames and video to ${OUT_DIR}`);
  } finally {
    await browser.close();
    stop();
  }
}

await main();
