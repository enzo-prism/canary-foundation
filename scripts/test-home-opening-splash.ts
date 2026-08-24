import assert from "node:assert/strict";
import { existsSync, readFileSync, statSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const read = (path: string) => readFileSync(resolve(root, path), "utf8");

const splashPath = "client/src/components/home-opening-splash.tsx";
const photoPath = "attached_assets/canary-long-beach-april-2005.jpg";
const splash = read(splashPath);
const app = read("client/src/App.tsx");
const home = read("client/src/pages/home.tsx");
const seo = read("shared/seo.ts");

assert.equal(existsSync(resolve(root, photoPath)), true, `${photoPath} must be committed`);
assert.equal(
  statSync(resolve(root, photoPath)).size > 10_000,
  true,
  `${photoPath} must be a real JPEG, not an empty stub`,
);

assert.match(splash, /THE BEGINNING\./, "Splash title must match Don's wording");
assert.match(splash, /canary-long-beach-april-2005\.jpg/);
assert.match(splash, /sessionStorage/);
assert.match(splash, /HOME_OPENING_SPLASH_HOLD_MS = 6000/);
assert.match(splash, /HOME_OPENING_SPLASH_FADE_MS = 500/);
assert.match(splash, /Escape/);
assert.match(splash, /onClick=\{dismiss\}/);
assert.match(splash, /prefers-reduced-motion: reduce/);
assert.match(splash, /object-cover/);
assert.match(splash, /fixed inset-0/);
assert.doesNotMatch(
  splash,
  /Don Listwin|Founder/,
  "Splash must not include the email signature byline",
);
assert.doesNotMatch(
  splash,
  /Stopping Cancer Early|The Best Possible Investment|NEED SPLASH/,
  "Splash must not add extra marketing copy",
);

assert.match(app, /import HomeOpeningSplash from "@\/components\/home-opening-splash"/);
assert.match(
  app,
  /normalizeRoutePath\(location\) === "\/" \? <HomeOpeningSplash \/>/,
  "Splash must mount only on the homepage route",
);
assert.doesNotMatch(home, /HomeOpeningSplash/, "Keep splash wiring in App.tsx, not Home");
assert.doesNotMatch(
  seo,
  /opening-splash|THE BEGINNING/,
  "Splash must stay client-only and must not change SEO metadata",
);

console.log("Home opening splash checks passed.");
