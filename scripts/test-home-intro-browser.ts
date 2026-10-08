/**
 * Browser checks for the homepage intro. Requires a production build
 * (`npm run build`) unless BASE_URL already points at a running server.
 * Uses Playwright against system Chrome.
 *
 * HOME_INTRO_CASE=timing|catchup|reduced-motion|abort|timeout|nojs|error|late-load
 * runs a single case (used by the mutation proof).
 */
import assert from "node:assert/strict";
import { spawn, type ChildProcess } from "node:child_process";
import { createServer } from "node:net";
import { chromium, type Browser, type BrowserContext, type Page, type Route } from "playwright-core";
import {
  HOME_INTRO_CAPTION,
  HOME_INTRO_MAX_WAIT_MS,
  HOME_INTRO_PHOTO_ALONE_MS,
  HOME_INTRO_TITLE,
} from "../client/src/lib/home-intro.ts";

const IMAGE_ROUTE = "**/home-intro/**";
const CHROME = process.env.CHROME_PATH ?? "/usr/bin/google-chrome-stable";
const ONLY = process.env.HOME_INTRO_CASE;

type IntroState = {
  phase: string | null;
  imageState: string | null;
  titleOpacity: string | null;
  captionOpacity: string | null;
  title: string | null;
  caption: string | null;
};

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

async function startServer(): Promise<{ url: string; stop: () => Promise<void> }> {
  if (process.env.BASE_URL) {
    return { url: process.env.BASE_URL.replace(/\/$/, ""), stop: async () => {} };
  }

  const port = await freePort();
  const child: ChildProcess = spawn(process.execPath, ["dist/index.js"], {
    env: { ...process.env, NODE_ENV: "production", PORT: String(port) },
    stdio: ["ignore", "pipe", "pipe"],
  });
  let output = "";
  child.stdout?.on("data", (chunk) => { output += String(chunk); });
  child.stderr?.on("data", (chunk) => { output += String(chunk); });

  const url = `http://127.0.0.1:${port}`;
  const deadline = Date.now() + 20_000;
  while (Date.now() < deadline) {
    try {
      const response = await fetch(url, { redirect: "manual" });
      if (response.ok || response.status === 301) {
        return {
          url,
          stop: async () => {
            child.kill("SIGTERM");
          },
        };
      }
    } catch {
      if (child.exitCode !== null) {
        throw new Error(`Production server exited: ${output}`);
      }
    }
    await new Promise((resolve) => setTimeout(resolve, 150));
  }
  child.kill("SIGTERM");
  throw new Error(`Production server did not start: ${output}`);
}

async function introState(page: Page): Promise<IntroState> {
  return page.evaluate(() => {
    const section = document.querySelector("#home-intro");
    const title = document.querySelector(".home-intro-title");
    const caption = document.querySelector(".home-intro-caption");
    return {
      phase: section?.getAttribute("data-phase") ?? null,
      imageState: section?.getAttribute("data-image-state") ?? null,
      titleOpacity: title ? getComputedStyle(title).opacity : null,
      captionOpacity: caption ? getComputedStyle(caption).opacity : null,
      title: title?.textContent?.trim() ?? null,
      caption: caption?.textContent?.trim() ?? null,
    };
  });
}

async function waitForHydration(page: Page) {
  await page.waitForFunction(() => {
    const section = document.querySelector("#home-intro");
    return Boolean(section?.getAttribute("data-image-state"));
  }, undefined, { timeout: 15_000 });
}

async function readImageLoadMark(page: Page): Promise<number> {
  return page.evaluate(() => {
    const image = document.querySelector<HTMLImageElement>("#home-intro-photo, #home-intro img");
    const fromDataset = Number(image?.dataset.loadedAt);
    if (Number.isFinite(fromDataset) && fromDataset > 0) return fromDataset;
    if (typeof window.__homeIntroLoadedAt === "number") return window.__homeIntroLoadedAt;
    const resources = performance.getEntriesByType("resource") as PerformanceResourceTiming[];
    const match = [...resources].reverse().find((entry) => (
      entry.name.includes("/home-intro/canary-long-beach") && entry.responseEnd > 0
    ));
    return match?.responseEnd ?? 0;
  });
}

async function waitUntilElapsed(page: Page, loadMark: number, elapsedMs: number) {
  await page.waitForFunction(
    ({ mark, elapsed }) => performance.now() >= mark + elapsed,
    { mark: loadMark, elapsed: elapsedMs },
    { timeout: elapsedMs + 4_000 },
  );
}

async function waitForCopyVisibility(page: Page, titleVisible: boolean, captionVisible: boolean) {
  await page.waitForFunction(
    ({ wantTitle, wantCaption }) => {
      const title = document.querySelector(".home-intro-title");
      const caption = document.querySelector(".home-intro-caption");
      if (!title || !caption) return false;
      const titleOp = Number.parseFloat(getComputedStyle(title).opacity);
      const captionOp = Number.parseFloat(getComputedStyle(caption).opacity);
      return (wantTitle ? titleOp >= 0.95 : titleOp <= 0.05)
        && (wantCaption ? captionOp >= 0.95 : captionOp <= 0.05);
    },
    { wantTitle: titleVisible, wantCaption: captionVisible },
    { timeout: 2_000 },
  );
}

function interceptImages(page: Page, handler: (route: Route) => Promise<void> | void) {
  return page.route(IMAGE_ROUTE, handler);
}

function isHydrationEntry(url: string): boolean {
  try {
    const path = new URL(url).pathname;
    return path.endsWith("/src/main.tsx") || /\/assets\/.+\.m?js$/.test(path);
  } catch {
    return false;
  }
}

// Delay only the app entry so the image can fail or finish before React attaches.
// Uses fallback() so a more specific image abort/delay route still wins.
function delayHydrationScripts(page: Page, delayMs: number) {
  return page.route("**/*", async (route) => {
    if (!isHydrationEntry(route.request().url())) {
      await route.fallback();
      return;
    }
    await new Promise((resolve) => setTimeout(resolve, delayMs));
    await route.continue();
  });
}

async function withPage(
  browser: Browser,
  options: Parameters<Browser["newContext"]>[0],
  run: (page: Page, context: BrowserContext) => Promise<void>,
) {
  const context = await browser.newContext({
    viewport: { width: 1280, height: 800 },
    deviceScaleFactor: 1,
    ...options,
  });
  const page = await context.newPage();
  try {
    await run(page, context);
  } finally {
    await context.close();
  }
}

const cases: Record<string, (browser: Browser, url: string) => Promise<void>> = {
  async timing(browser, url) {
    await withPage(browser, { reducedMotion: "no-preference" }, async (page) => {
      const delayMs = 2_000;
      let releasedAt = 0;
      await interceptImages(page, async (route) => {
        await new Promise((resolve) => setTimeout(resolve, delayMs));
        releasedAt = releasedAt || Date.now();
        await route.continue();
      });
      await page.goto(url, { waitUntil: "domcontentloaded" });
      await waitForHydration(page);

      const beforeRelease = await introState(page);
      assert.equal(beforeRelease.phase, "photo", "delayed image must not advance before load");
      await waitForCopyVisibility(page, false, false);
      const hiddenBeforeRelease = await introState(page);
      assert.equal(hiddenBeforeRelease.phase, "photo", "JS visitors must not flash the title");
      assert.ok(Number.parseFloat(hiddenBeforeRelease.titleOpacity ?? "1") <= 0.05, "JS visitors must not flash the title");
      assert.ok(Number.parseFloat(hiddenBeforeRelease.captionOpacity ?? "1") <= 0.05, "JS visitors must not flash the caption");
      const loadedAtHydration = await page.evaluate(() => {
        const image = document.querySelector<HTMLImageElement>("#home-intro-photo, #home-intro img");
        return Boolean(image && image.complete && image.naturalWidth > 0);
      });
      assert.equal(loadedAtHydration, false, "hydration must beat the delayed image so timing is measured from load");

      await page.waitForFunction(() => {
        const image = document.querySelector<HTMLImageElement>("#home-intro-photo, #home-intro img");
        return Boolean(image && image.complete && image.naturalWidth > 0);
      }, undefined, { timeout: delayMs + 5_000 });
      assert.ok(releasedAt > 0, "image route must be intercepted");
      const wallLoadAt = Date.now();
      assert.ok(wallLoadAt - releasedAt < 2_500, "image decode should follow the delayed response");

      const remaining = HOME_INTRO_PHOTO_ALONE_MS - 1_200;
      const untilBeforeTitle = releasedAt + remaining - Date.now();
      if (untilBeforeTitle > 0) await page.waitForTimeout(untilBeforeTitle);
      const beforeTitle = await introState(page);
      assert.equal(beforeTitle.phase, "photo", "phase must stay photo until load+5s");
      assert.ok(Number.parseFloat(beforeTitle.titleOpacity ?? "1") <= 0.05);

      await page.waitForFunction((expected) => {
        return document.querySelector("#home-intro")?.getAttribute("data-phase") === expected;
      }, "title", { timeout: 2_500 });
      await waitForCopyVisibility(page, true, false);
      const afterTitle = await introState(page);
      assert.equal(afterTitle.phase, "title");
      assert.equal(afterTitle.title, HOME_INTRO_TITLE);
      assert.ok(Number.parseFloat(afterTitle.titleOpacity ?? "0") >= 0.95);
      assert.ok(Number.parseFloat(afterTitle.captionOpacity ?? "1") <= 0.05);
    });
  },

  async catchup(browser, url) {
    await withPage(browser, { reducedMotion: "no-preference" }, async (page) => {
      const scriptDelay = 2_000;
      await delayHydrationScripts(page, scriptDelay);
      const started = Date.now();
      await page.goto(url, { waitUntil: "domcontentloaded" });
      await waitForHydration(page);
      const hydratedAt = Date.now() - started;
      assert.ok(hydratedAt >= 1_400, `hydration scripts should be delayed (was ${hydratedAt}ms)`);

      const loadMark = await readImageLoadMark(page);
      assert.ok(loadMark < 1_500, `image should load before the delayed hydration (mark ${loadMark}ms)`);

      await waitUntilElapsed(page, loadMark, HOME_INTRO_PHOTO_ALONE_MS - 1_200);
      const beforeTitle = await introState(page);
      assert.equal(beforeTitle.phase, "photo", "catch-up must still wait until load+5s");

      await page.waitForFunction((expected) => {
        return document.querySelector("#home-intro")?.getAttribute("data-phase") === expected;
      }, "title", { timeout: 2_500 });
      await waitForCopyVisibility(page, true, false);
      const afterTitle = await introState(page);
      assert.equal(afterTitle.phase, "title", "phases must catch up from the real image load, not hydration");
      assert.ok(Number.parseFloat(afterTitle.titleOpacity ?? "0") >= 0.95);
    });
  },

  async "reduced-motion"(browser, url) {
    await withPage(browser, { reducedMotion: "reduce" }, async (page) => {
      await page.goto(url, { waitUntil: "domcontentloaded" });
      await waitForHydration(page);
      await page.waitForFunction((expected) => {
        return document.querySelector("#home-intro")?.getAttribute("data-phase") === expected;
      }, "hold", { timeout: 3_000 });
      await waitForCopyVisibility(page, true, true);
      const state = await introState(page);
      assert.equal(state.phase, "hold", "reduced motion JS must set the final phase");
      assert.ok(Number.parseFloat(state.titleOpacity ?? "0") >= 0.95);
      assert.ok(Number.parseFloat(state.captionOpacity ?? "0") >= 0.95);
      assert.equal(state.title, HOME_INTRO_TITLE);
      assert.equal(state.caption, HOME_INTRO_CAPTION);
    });
  },

  async abort(browser, url) {
    await withPage(browser, { reducedMotion: "no-preference" }, async (page) => {
      await interceptImages(page, (route) => route.abort());
      // Delay hydration so the abort lands before onError is attached.
      await delayHydrationScripts(page, 1_500);
      const started = Date.now();
      await page.goto(url, { waitUntil: "domcontentloaded" });
      await waitForHydration(page);
      await page.waitForFunction(() => {
        const section = document.querySelector("#home-intro");
        return section?.getAttribute("data-phase") === "hold"
          && section.getAttribute("data-image-state") === "failed";
      }, undefined, { timeout: 3_000 });
      const elapsed = Date.now() - started;
      await waitForCopyVisibility(page, true, true);
      const state = await introState(page);
      assert.ok(elapsed < HOME_INTRO_MAX_WAIT_MS, `pre-hydration abort should not wait the max-wait (${elapsed}ms)`);
      assert.equal(state.phase, "hold");
      assert.equal(state.imageState, "failed");
      assert.ok(Number.parseFloat(state.titleOpacity ?? "0") >= 0.95);
      assert.ok(Number.parseFloat(state.captionOpacity ?? "0") >= 0.95);
      assert.equal(state.title, HOME_INTRO_TITLE);
      await page.waitForFunction(() => {
        const image = document.querySelector("#home-intro-photo, #home-intro img");
        return Boolean(image) && Number.parseFloat(getComputedStyle(image as Element).opacity) <= 0.05;
      }, undefined, { timeout: 2_000 });
    });
  },

  async timeout(browser, url) {
    await withPage(browser, { reducedMotion: "no-preference" }, async (page) => {
      await interceptImages(page, async (route) => {
        await new Promise(() => {
          void route;
        });
      });
      const started = Date.now();
      await page.goto(url, { waitUntil: "domcontentloaded" });
      await waitForHydration(page);
      await page.waitForTimeout(6_000);
      const mid = await introState(page);
      assert.equal(mid.phase, "photo", "never-loading image must still be photo before max-wait");
      await page.waitForFunction((expected) => {
        return document.querySelector("#home-intro")?.getAttribute("data-image-state") === expected;
      }, "timeout", { timeout: HOME_INTRO_MAX_WAIT_MS });
      const elapsed = Date.now() - started;
      await waitForCopyVisibility(page, true, true);
      const state = await introState(page);
      assert.ok(elapsed >= 7_000 && elapsed < 11_000, `max-wait should fire near 8s (was ${elapsed}ms)`);
      assert.equal(state.phase, "hold");
      assert.equal(state.imageState, "timeout");
      assert.ok(Number.parseFloat(state.titleOpacity ?? "0") >= 0.95);
      assert.ok(Number.parseFloat(state.captionOpacity ?? "0") >= 0.95);
    });
  },

  async nojs(browser, url) {
    await withPage(browser, { javaScriptEnabled: false }, async (page) => {
      await page.goto(url, { waitUntil: "domcontentloaded" });
      const state = await introState(page);
      assert.equal(state.title, HOME_INTRO_TITLE);
      assert.equal(state.caption, HOME_INTRO_CAPTION);
      assert.equal(state.titleOpacity, "1", "no-JS visitors must see THE BEGINNING");
      assert.equal(state.captionOpacity, "1", "no-JS visitors must see the caption");
    });
  },

  async error(browser, url) {
    await withPage(browser, { reducedMotion: "no-preference" }, async (page) => {
      await interceptImages(page, async (route) => {
        await new Promise((resolve) => setTimeout(resolve, 1_200));
        await route.fulfill({ status: 404, body: "missing" });
      });
      await page.goto(url, { waitUntil: "domcontentloaded" });
      await waitForHydration(page);
      await page.waitForFunction((expected) => {
        return document.querySelector("#home-intro")?.getAttribute("data-image-state") === expected;
      }, "failed", { timeout: 4_000 });
      await waitForCopyVisibility(page, true, true);
      const state = await introState(page);
      assert.equal(state.phase, "hold", "post-hydration 404 must use onError to show the final frame");
      assert.equal(state.imageState, "failed");
      assert.ok(Number.parseFloat(state.titleOpacity ?? "0") >= 0.95);
    });
  },

  async "late-load"(browser, url) {
    await withPage(browser, { reducedMotion: "no-preference" }, async (page) => {
      const releaseAfterMs = 12_000;
      await interceptImages(page, async (route) => {
        await new Promise((resolve) => setTimeout(resolve, releaseAfterMs));
        await route.continue();
      });
      await page.goto(url, { waitUntil: "domcontentloaded" });
      await waitForHydration(page);
      await page.waitForFunction((expected) => {
        return document.querySelector("#home-intro")?.getAttribute("data-image-state") === expected;
      }, "timeout", { timeout: HOME_INTRO_MAX_WAIT_MS + 2_000 });
      await waitForCopyVisibility(page, true, true);
      const afterTimeout = await introState(page);
      assert.equal(afterTimeout.phase, "hold");
      assert.equal(afterTimeout.imageState, "timeout");

      const deadline = Date.now() + 8_000;
      while (Date.now() < deadline) {
        const mid = await introState(page);
        assert.notEqual(mid.phase, "photo", "late load must not replay the intro");
        assert.ok(Number.parseFloat(mid.titleOpacity ?? "0") >= 0.95, "title must stay visible after timeout");
        assert.ok(Number.parseFloat(mid.captionOpacity ?? "0") >= 0.95, "caption must stay visible after timeout");
        if (mid.imageState === "ready") break;
        await page.waitForTimeout(250);
      }

      await page.waitForFunction(() => {
        const image = document.querySelector<HTMLImageElement>("#home-intro-photo, #home-intro img");
        if (!image || !image.complete || image.naturalWidth === 0) return false;
        return Number.parseFloat(getComputedStyle(image).opacity) >= 0.95;
      }, undefined, { timeout: 5_000 });
      const afterLateLoad = await introState(page);
      assert.equal(afterLateLoad.phase, "hold", "phase stays hold after a late photo");
      assert.notEqual(afterLateLoad.phase, "photo");
      assert.equal(afterLateLoad.imageState, "ready");
      assert.ok(Number.parseFloat(afterLateLoad.titleOpacity ?? "0") >= 0.95);
      assert.ok(Number.parseFloat(afterLateLoad.captionOpacity ?? "0") >= 0.95);
    });
  },
};

async function main() {
  const { url, stop } = await startServer();
  const browser = await chromium.launch({
    executablePath: CHROME,
    args: ["--no-sandbox", "--disable-dev-shm-usage"],
  });

  try {
    const names = ONLY ? [ONLY] : Object.keys(cases);
    for (const name of names) {
      const run = cases[name];
      if (!run) throw new Error(`Unknown HOME_INTRO_CASE=${name}`);
      await run(browser, url);
      console.log(`  ok  ${name}`);
    }
    console.log("Homepage intro browser checks passed.");
  } finally {
    await browser.close();
    await stop();
  }
}

await main();
