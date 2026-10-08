/**
 * Browser checks for the homepage intro. Requires a production build
 * (`npm run build`) unless BASE_URL already points at a running server.
 * Uses Playwright against system Chrome.
 *
 * HOME_INTRO_CASE=timing|catchup|reduced-motion|abort|timeout|nojs|error|late-load|timeout-race|remount|srcset-switch|corrupt|zero-width-complete|timer-ready-branch
 * runs a single case (used by the mutation proof).
 */
import assert from "node:assert/strict";
import { spawn, type ChildProcess } from "node:child_process";
import { createServer } from "node:net";
import { chromium, type Browser, type BrowserContext, type Page, type Route } from "playwright-core";
import {
  HOME_INTRO_CAPTION,
  HOME_INTRO_CAPTION_MS,
  HOME_INTRO_MAX_WAIT_MS,
  HOME_INTRO_PHOTO_ALONE_MS,
  HOME_INTRO_TITLE,
  HOME_INTRO_TITLE_MS,
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
  // SSR already paints data-image-state="pending". Wait for the client
  // effect that arms (or skips) the 8s max-wait so timer-relative cases
  // do not start from before React mounts.
  await page.waitForFunction(() => {
    const wait = document.querySelector("#home-intro")?.getAttribute("data-max-wait");
    return wait === "armed" || wait === "skipped";
  }, undefined, { timeout: 15_000 });
}

async function readMaxWaitArmMark(page: Page): Promise<number> {
  return page.evaluate(() => {
    const section = document.querySelector("#home-intro");
    const at = Number(section?.getAttribute("data-max-wait-at"));
    return Number.isFinite(at) && at > 0 ? at : performance.now();
  });
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

async function waitPastMaxWait(page: Page) {
  const armMark = await readMaxWaitArmMark(page);
  await waitUntilElapsed(page, armMark, HOME_INTRO_MAX_WAIT_MS + 500);
}

function stubImageDecode(page: Page, naturalWidth: number) {
  // String evaluate so tsx/esbuild cannot inject a __name helper into the page.
  const width = JSON.stringify(naturalWidth);
  return page.evaluate(`(() => {
    const image = document.querySelector("#home-intro-photo, #home-intro img");
    if (!image) throw new Error("intro photo missing");
    const width = ${width};
    Object.defineProperty(image, "complete", { configurable: true, get: () => true });
    Object.defineProperty(image, "naturalWidth", { configurable: true, get: () => width });
    Object.defineProperty(image, "naturalHeight", { configurable: true, get: () => (width > 0 ? 1 : 0) });
  })()`);
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
      await waitPastMaxWait(page);
      const afterMaxWait = await introState(page);
      assert.equal(afterMaxWait.imageState, "failed", "failed must not flip to timeout at 8s");
      const hiddenAfterMaxWait = await page.evaluate(() => {
        const image = document.querySelector("#home-intro-photo, #home-intro img");
        return image ? Number.parseFloat(getComputedStyle(image).opacity) <= 0.05 : false;
      });
      assert.equal(hiddenAfterMaxWait, true, "failed photo must stay hidden past 8s");
    });
  },

  async timeout(browser, url) {
    await withPage(browser, { reducedMotion: "no-preference" }, async (page) => {
      await interceptImages(page, async (route) => {
        await new Promise(() => {
          void route;
        });
      });
      await page.goto(url, { waitUntil: "domcontentloaded" });
      await waitForHydration(page);
      const armMark = await readMaxWaitArmMark(page);
      await waitUntilElapsed(page, armMark, 6_000);
      const mid = await introState(page);
      assert.equal(mid.phase, "photo", "never-loading image must still be photo before max-wait");
      await page.waitForFunction((expected) => {
        return document.querySelector("#home-intro")?.getAttribute("data-image-state") === expected;
      }, "timeout", { timeout: HOME_INTRO_MAX_WAIT_MS });
      const elapsed = await page.evaluate((mark) => performance.now() - mark, armMark);
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
      await waitPastMaxWait(page);
      const afterMaxWait = await introState(page);
      assert.equal(afterMaxWait.imageState, "failed", "failed must not flip to timeout at 8s");
      const hiddenAfterMaxWait = await page.evaluate(() => {
        const image = document.querySelector("#home-intro-photo, #home-intro img");
        return image ? Number.parseFloat(getComputedStyle(image).opacity) <= 0.05 : false;
      });
      assert.equal(hiddenAfterMaxWait, true, "failed photo must stay hidden past 8s");
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

  async "timeout-race"(browser, url) {
    await withPage(browser, { reducedMotion: "no-preference" }, async (page) => {
      // 1x1 PNG so decode is instant once the 7.99s hold lifts.
      const tinyPng = Buffer.from(
        "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==",
        "base64",
      );
      let release!: () => void;
      const held = new Promise<void>((resolveRelease) => {
        release = resolveRelease;
      });
      await interceptImages(page, async (route) => {
        await held;
        await route.fulfill({ status: 200, contentType: "image/png", body: tinyPng });
      });
      await page.goto(url, { waitUntil: "domcontentloaded" });
      await waitForHydration(page);
      const armMark = await readMaxWaitArmMark(page);

      await waitUntilElapsed(page, armMark, HOME_INTRO_MAX_WAIT_MS - 500);
      release();

      await waitUntilElapsed(page, armMark, HOME_INTRO_MAX_WAIT_MS + 300);

      await page.waitForFunction(() => {
        const section = document.querySelector("#home-intro");
        const image = document.querySelector<HTMLImageElement>("#home-intro-photo, #home-intro img");
        if (!section || !image || !image.complete || image.naturalWidth === 0) return false;
        const opacity = Number.parseFloat(getComputedStyle(image).opacity);
        return section.getAttribute("data-image-state") === "ready" && opacity >= 0.95;
      }, undefined, { timeout: 4_000 });

      const state = await introState(page);
      assert.equal(state.imageState, "ready", "a decoded photo at the 8s boundary must be ready, not timeout");
      assert.equal(state.phase, "photo", "boundary load must start the sequence, not jump to the timeout hold");
      const photoHidden = await page.evaluate(() => {
        const image = document.querySelector<HTMLImageElement>("#home-intro-photo, #home-intro img");
        return image ? Number.parseFloat(getComputedStyle(image).opacity) <= 0.05 : true;
      });
      assert.equal(photoHidden, false, "timeout must not leave a decoded photo at opacity 0");
    });
  },

  async remount(browser, url) {
    await withPage(browser, { reducedMotion: "no-preference" }, async (page) => {
      await page.goto(url, { waitUntil: "domcontentloaded" });
      await waitForHydration(page);
      await page.waitForFunction((expected) => {
        return document.querySelector("#home-intro")?.getAttribute("data-phase") === expected;
      }, "title", { timeout: HOME_INTRO_PHOTO_ALONE_MS + 3_000 });
      await waitForCopyVisibility(page, true, false);

      await page.locator("header a[href='/contact']").click();
      await page.waitForFunction(() => !document.querySelector("#home-intro"), undefined, { timeout: 10_000 });

      await page.locator("header a[href='/']").first().click();
      await waitForHydration(page);
      await page.waitForFunction(() => {
        const image = document.querySelector<HTMLImageElement>("#home-intro-photo, #home-intro img");
        return Boolean(image && image.complete && image.naturalWidth > 0);
      }, undefined, { timeout: 10_000 });

      const remountMark = await page.evaluate(() => performance.now());
      const justBack = await introState(page);
      assert.equal(justBack.phase, "photo", "SPA remount must restart at photo, not catch up the first visit");
      assert.equal(justBack.imageState, "ready");

      await waitUntilElapsed(page, remountMark, HOME_INTRO_PHOTO_ALONE_MS - 1_200);
      const beforeTitle = await introState(page);
      assert.equal(beforeTitle.phase, "photo", "remount must wait a fresh +5s");

      await page.waitForFunction((expected) => {
        return document.querySelector("#home-intro")?.getAttribute("data-phase") === expected;
      }, "title", { timeout: 2_500 });
      await waitForCopyVisibility(page, true, false);
      const afterTitle = await introState(page);
      assert.equal(afterTitle.phase, "title");

      await waitUntilElapsed(page, remountMark, HOME_INTRO_PHOTO_ALONE_MS + HOME_INTRO_TITLE_MS - 1_200);
      const beforeCaption = await introState(page);
      assert.equal(beforeCaption.phase, "title", "remount must wait a fresh +8s");

      await page.waitForFunction((expected) => {
        return document.querySelector("#home-intro")?.getAttribute("data-phase") === expected;
      }, "caption", { timeout: 2_500 });
      await waitForCopyVisibility(page, true, true);
      const afterCaption = await introState(page);
      assert.equal(afterCaption.phase, "caption");

      await waitUntilElapsed(
        page,
        remountMark,
        HOME_INTRO_PHOTO_ALONE_MS + HOME_INTRO_TITLE_MS + HOME_INTRO_CAPTION_MS - 1_200,
      );
      const beforeHold = await introState(page);
      assert.equal(beforeHold.phase, "caption", "remount must wait a fresh +11s");

      await page.waitForFunction((expected) => {
        return document.querySelector("#home-intro")?.getAttribute("data-phase") === expected;
      }, "hold", { timeout: 2_500 });
      const afterHold = await introState(page);
      assert.equal(afterHold.phase, "hold");
      assert.equal(afterHold.title, HOME_INTRO_TITLE);
      assert.equal(afterHold.caption, HOME_INTRO_CAPTION);
    });
  },

  async "srcset-switch"(browser, url) {
    await withPage(browser, {
      viewport: { width: 1100, height: 800 },
      deviceScaleFactor: 1,
      reducedMotion: "no-preference",
    }, async (page) => {
      let largeHeld = 0;
      await interceptImages(page, async (route) => {
        const path = new URL(route.request().url()).pathname;
        const isLarge = path.endsWith("/home-intro/canary-long-beach-april-2005.webp");
        if (isLarge) {
          largeHeld += 1;
          await new Promise((resolveWait) => setTimeout(resolveWait, 9_000));
        }
        await route.continue();
      });
      await page.goto(url, { waitUntil: "domcontentloaded" });
      await waitForHydration(page);
      await page.waitForFunction(() => {
        const section = document.querySelector("#home-intro");
        const image = document.querySelector<HTMLImageElement>("#home-intro-photo, #home-intro img");
        return section?.getAttribute("data-image-state") === "ready"
          && Boolean(image && image.complete && image.naturalWidth > 0);
      }, undefined, { timeout: 8_000 });
      const loadMark = await readImageLoadMark(page);
      const armMark = await readMaxWaitArmMark(page);
      const startedAt = Date.now();

      await page.waitForTimeout(Math.max(0, 2_000 - (Date.now() - startedAt)));
      await page.setViewportSize({ width: 1800, height: 800 });

      await waitUntilElapsed(page, Math.max(loadMark, armMark), HOME_INTRO_MAX_WAIT_MS + 400);

      const mid = await introState(page);
      assert.notEqual(mid.imageState, "timeout", "a srcset switch must not trip the 8s max-wait");
      assert.equal(mid.imageState, "ready");
      const photoHidden = await page.evaluate(() => {
        const image = document.querySelector<HTMLImageElement>("#home-intro-photo, #home-intro img");
        return image ? Number.parseFloat(getComputedStyle(image).opacity) <= 0.05 : true;
      });
      assert.equal(photoHidden, false, "photo must stay visible while a larger srcset candidate is in flight");
      assert.ok(largeHeld > 0, "the 1920w candidate must be requested after the resize");

      await page.waitForFunction((expected) => {
        return document.querySelector("#home-intro")?.getAttribute("data-phase") === expected;
      }, "hold", { timeout: HOME_INTRO_PHOTO_ALONE_MS + HOME_INTRO_TITLE_MS + HOME_INTRO_CAPTION_MS + 3_000 });
      await waitForCopyVisibility(page, true, true);
      const afterHold = await introState(page);
      assert.equal(afterHold.phase, "hold", "sequence must finish from the first load, not restart");
      assert.equal(afterHold.imageState, "ready");
      assert.equal(afterHold.title, HOME_INTRO_TITLE);
      assert.equal(afterHold.caption, HOME_INTRO_CAPTION);
    });
  },

  async corrupt(browser, url) {
    await withPage(browser, { reducedMotion: "no-preference" }, async (page) => {
      await interceptImages(page, async (route) => {
        await route.fulfill({
          status: 200,
          contentType: "image/jpeg",
          body: Buffer.from("not-a-jpeg"),
        });
      });
      await page.goto(url, { waitUntil: "domcontentloaded" });
      await waitForHydration(page);
      await page.waitForFunction(() => {
        const section = document.querySelector("#home-intro");
        const state = section?.getAttribute("data-image-state");
        return state === "failed" || state === "timeout";
      }, undefined, { timeout: 4_000 });
      await waitForCopyVisibility(page, true, true);
      await waitPastMaxWait(page);
      const later = await introState(page);
      assert.notEqual(later.imageState, "ready", "a corrupt body must not be treated as a decoded photo");
      assert.equal(later.imageState, "failed", "failed must not flip to timeout at 8s");
      const hidden = await page.evaluate(() => {
        const image = document.querySelector("#home-intro-photo, #home-intro img");
        return image ? Number.parseFloat(getComputedStyle(image).opacity) <= 0.05 : false;
      });
      assert.equal(hidden, true, "corrupt photo must stay hidden past 8s with no broken icon");
      assert.equal(later.phase, "hold");
    });
  },

  async "zero-width-complete"(browser, url) {
    await withPage(browser, { reducedMotion: "no-preference" }, async (page) => {
      await interceptImages(page, async (route) => {
        await new Promise(() => {
          void route;
        });
      });
      await page.goto(url, { waitUntil: "domcontentloaded" });
      await waitForHydration(page);
      await stubImageDecode(page, 0);
      await waitPastMaxWait(page);
      const later = await introState(page);
      assert.notEqual(later.imageState, "ready", "complete with naturalWidth 0 must not be treated as decoded");
      assert.equal(later.imageState, "timeout", "timer must time out when decode never produced pixels");
      await page.waitForFunction(() => {
        const image = document.querySelector("#home-intro-photo, #home-intro img");
        return Boolean(image) && Number.parseFloat(getComputedStyle(image as Element).opacity) <= 0.05;
      }, undefined, { timeout: 2_000 });
      const hidden = await page.evaluate(() => {
        const image = document.querySelector("#home-intro-photo, #home-intro img");
        return image ? Number.parseFloat(getComputedStyle(image).opacity) <= 0.05 : false;
      });
      assert.equal(hidden, true, "zero-width complete photo must stay hidden");
      assert.equal(later.phase, "hold");
    });
  },

  async "timer-ready-branch"(browser, url) {
    await withPage(browser, { reducedMotion: "no-preference" }, async (page) => {
      await interceptImages(page, async (route) => {
        await new Promise(() => {
          void route;
        });
      });
      await page.goto(url, { waitUntil: "domcontentloaded" });
      await waitForHydration(page);
      // Image is complete with pixels, but React never got a load event.
      // The 8s timer's ready-branch is the only path that can mark ready.
      await stubImageDecode(page, 1);
      await waitPastMaxWait(page);
      const state = await introState(page);
      assert.equal(state.imageState, "ready", "a decoded photo at the 8s timer must be marked ready");
      assert.equal(state.phase, "photo", "timer ready-branch must start the sequence, not jump to hold");
      const photoHidden = await page.evaluate(() => {
        const image = document.querySelector<HTMLImageElement>("#home-intro-photo, #home-intro img");
        return image ? Number.parseFloat(getComputedStyle(image).opacity) <= 0.05 : true;
      });
      assert.equal(photoHidden, false, "timeout must not hide a photo the timer treated as decoded");
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
