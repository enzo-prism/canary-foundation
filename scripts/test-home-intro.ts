/** Static checks for the homepage intro sequence. No server required. */
import assert from "node:assert/strict";
import { existsSync, readFileSync, statSync } from "node:fs";
import { resolve } from "node:path";
import {
  HOME_INTRO_CAPTION_MS,
  HOME_INTRO_MAX_WAIT_MS,
  HOME_INTRO_PHOTO_ALONE_MS,
  HOME_INTRO_TITLE_MS,
  homeIntroElapsedPhase,
  homeIntroRemainingMs,
} from "../client/src/lib/home-intro.ts";

const root = resolve(import.meta.dirname, "..");
const read = (path: string) => readFileSync(resolve(root, path), "utf8");

const introPath = "client/src/components/home/home-intro.tsx";
const timingPath = "client/src/lib/home-intro.ts";
const sourcePhotoPath = "attached_assets/canary-long-beach-april-2005.jpg";
const optimizedWebp = "client/public/home-intro/canary-long-beach-april-2005.webp";
const optimizedWebp960 = "client/public/home-intro/canary-long-beach-april-2005-960.webp";
const optimizedWebp1280 = "client/public/home-intro/canary-long-beach-april-2005-1280.webp";
const optimizedJpg = "client/public/home-intro/canary-long-beach-april-2005.jpg";

const intro = read(introPath);
const timing = read(timingPath);
const app = read("client/src/App.tsx");
const home = read("client/src/pages/home.tsx");
const seo = read("shared/seo.ts");
const server = read("server/vite.ts");
const financials = read("client/src/pages/financials.tsx");

for (const path of [sourcePhotoPath, optimizedWebp, optimizedWebp960, optimizedWebp1280, optimizedJpg]) {
  assert.equal(existsSync(resolve(root, path)), true, `${path} must be committed`);
  assert.equal(
    statSync(resolve(root, path)).size > 10_000,
    true,
    `${path} must be a real image, not an empty stub`,
  );
}

assert.match(timing, /HOME_INTRO_PHOTO_ALONE_MS = 5_000/, "0-5s photo-alone constant");
assert.match(timing, /HOME_INTRO_TITLE_MS = 3_000/, "5-8s title constant");
assert.match(timing, /HOME_INTRO_CAPTION_MS = 3_000/, "8-11s caption constant");
assert.match(timing, /HOME_INTRO_MAX_WAIT_MS = 8_000/, "8s max-wait fallback");
assert.match(timing, /HOME_INTRO_TITLE = "THE BEGINNING"/, "Title must match Don's wording");
assert.match(
  timing,
  /HOME_INTRO_CAPTION = "Canary Ovarian Cancer Team 2004"/,
  "Caption must match Don's wording",
);
assert.match(timing, /canary-long-beach-april-2005-1280\.webp/, "1280w WebP in srcset");
assert.match(timing, /canary-long-beach-april-2005\.jpg/, "Document the source photo");

assert.equal(homeIntroElapsedPhase(0), "photo");
assert.equal(homeIntroElapsedPhase(HOME_INTRO_PHOTO_ALONE_MS - 1), "photo");
assert.equal(homeIntroElapsedPhase(HOME_INTRO_PHOTO_ALONE_MS), "title");
assert.equal(homeIntroElapsedPhase(HOME_INTRO_PHOTO_ALONE_MS + HOME_INTRO_TITLE_MS), "caption");
assert.equal(
  homeIntroElapsedPhase(HOME_INTRO_PHOTO_ALONE_MS + HOME_INTRO_TITLE_MS + HOME_INTRO_CAPTION_MS),
  "hold",
);
assert.equal(homeIntroRemainingMs("photo", 2_000), 3_000);
assert.equal(homeIntroRemainingMs("hold", 20_000), null);
assert.equal(HOME_INTRO_MAX_WAIT_MS, 8_000);

assert.match(intro, /from "@\/lib\/home-intro"/, "Intro must use the shared timing constants");
assert.match(intro, /HOME_INTRO_TITLE/);
assert.match(intro, /HOME_INTRO_CAPTION/);
assert.match(intro, /prefers-reduced-motion: reduce/);
assert.match(intro, /naturalWidth === 0/);
assert.match(intro, /HOME_INTRO_MAX_WAIT_MS/);
assert.match(intro, /readHomeIntroImageLoadMark/);
assert.match(intro, /<noscript>/);
assert.match(intro, /home-intro-title[\s\S]*opacity:1!important/);
assert.match(intro, /onLoad=\{onLoad\}/);
assert.match(intro, /onError=\{onError\}/);
assert.match(intro, /dataset\.loadedAt|__homeIntroLoadedAt/);
assert.match(intro, /<p[\s\S]*\{HOME_INTRO_TITLE\}/);
assert.match(intro, /<p[\s\S]*\{HOME_INTRO_CAPTION\}/);
assert.doesNotMatch(intro, /role="dialog"|sessionStorage|document\.body\.style\.overflow/, "Intro is in-page, not a blocking overlay");
assert.doesNotMatch(intro, /trackClick|gtag|analytics/, "No new tracking on the intro");
assert.doesNotMatch(
  intro,
  /Don Listwin|Founder|Stopping Cancer Early|The Best Possible Investment/,
  "Intro must not add extra marketing copy",
);

assert.match(home, /import \{ HomeIntro \} from "@\/components\/home\/home-intro"/);
assert.match(home, /<HomeIntro \/>/);
assert.doesNotMatch(app, /HomeOpeningSplash|HomeIntro/, "Keep intro wiring on the homepage, not App");
assert.doesNotMatch(app, /home-opening-splash/, "Remove the blocking overlay splash");
assert.doesNotMatch(
  seo,
  /opening-splash|THE BEGINNING|home-intro/,
  "Intro must not change SEO metadata",
);
assert.match(server, /HOME_INTRO_IMAGE_WEBP/, "Homepage HTML must preload the intro photo");
assert.doesNotMatch(
  server,
  /preload[\s\S]{0,200}HOME_INTRO_IMAGE_WEBP_1280/,
  "Preload href stays the 1920 webp, not a 1280-only file",
);
assert.match(server, /rel="preload" as="image"/);
assert.match(server, /normalizeRoutePath\(originalUrl\) !== "\/"/, "Preload stays homepage-only");

assert.doesNotMatch(
  financials,
  /HOME_INTRO|THE BEGINNING|home-intro/,
  "Do not touch the Financials page",
);

console.log("Homepage intro static checks passed.");
