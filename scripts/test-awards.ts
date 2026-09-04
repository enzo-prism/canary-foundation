import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  AWARDS_HUB_INTRO,
  AWARDS_NOMINATIONS_NOTE,
  GAMBHIR_ABOUT_PARAGRAPHS,
  GAMBHIR_AWARD_NAME,
  LISTWIN_ABOUT_PARAGRAPHS,
  LISTWIN_ANNOUNCEMENT_PARAGRAPHS,
  LISTWIN_AWARD_NAME,
  LISTWIN_PHOTO_ALT,
} from "../client/src/data/awards";
import { EXACT_ROUTE_METADATA } from "../shared/seo";

const repositoryRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
);
const read = (relativePath: string) =>
  readFileSync(path.join(repositoryRoot, relativePath), "utf8");

const seoRoutes = JSON.parse(read("seo/routes.json")) as { routes: string[] };
const app = read("client/src/App.tsx");
const header = read("client/src/components/header.tsx");
const listwinPage = read("client/src/pages/awards-listwin.tsx");
const gambhirPage = read("client/src/pages/awards-gambhir.tsx");
const hubPage = read("client/src/pages/awards.tsx");

const awardRoutes = [
  "/about/awards",
  "/about/awards/listwin",
  "/about/awards/gambhir",
];

for (const route of awardRoutes) {
  assert.ok(app.includes(`path="${route}"`), `${route} must be routed.`);
  assert.ok(seoRoutes.routes.includes(route), `${route} must be in seo/routes.json.`);
  assert.ok(EXACT_ROUTE_METADATA[route], `${route} needs unique SEO metadata.`);
}

assert.match(header, /name: "Awards"/);
assert.match(header, /path: "\/about\/awards"/);
assert.match(header, /path: "\/about\/awards\/listwin"/);
assert.match(header, /path: "\/about\/awards\/gambhir"/);

const awardsData = read("client/src/data/awards.ts");
assert.equal(awardsData.includes(AWARDS_HUB_INTRO), true);
assert.equal(hubPage.includes("AWARDS_HUB_INTRO"), true);
assert.equal(listwinPage.includes("LISTWIN_AWARD_NAME"), true);
assert.equal(gambhirPage.includes("GAMBHIR_AWARD_NAME"), true);

for (const paragraph of [
  ...LISTWIN_ABOUT_PARAGRAPHS,
  ...LISTWIN_ANNOUNCEMENT_PARAGRAPHS,
  ...GAMBHIR_ABOUT_PARAGRAPHS,
]) {
  assert.equal(
    awardsData.includes(paragraph),
    true,
    "Award copy must stay verbatim in client/src/data/awards.ts",
  );
}

assert.equal(awardsData.includes(LISTWIN_AWARD_NAME), true);
assert.equal(awardsData.includes(GAMBHIR_AWARD_NAME), true);
assert.equal(awardsData.includes(AWARDS_NOMINATIONS_NOTE), true);
assert.match(read("client/src/components/footer.tsx"), /href="\/about\/awards"/);
assert.doesNotMatch(
  EXACT_ROUTE_METADATA["/about/awards/listwin"].title,
  /20\d{2}/,
  "Listwin SEO title must not invent an award year.",
);

assert.doesNotMatch(
  listwinPage,
  /<(h1|h2)[^>]*>[^<]*20(2[0-9]|1[0-9])/,
  "Listwin headings must not invent an award year.",
);

assert.equal(LISTWIN_PHOTO_ALT.includes("inaugural"), true);
assert.ok(
  existsSync(path.join(repositoryRoot, "attached_assets/lisa-newcomb-listwin-award.webp")),
  "Optimized Listwin recipient webp must exist.",
);
assert.ok(
  existsSync(path.join(repositoryRoot, "attached_assets/lisa-newcomb-listwin-award.jpg")),
  "Optimized Listwin recipient jpg fallback must exist.",
);

assert.match(listwinPage, /lisa-newcomb-listwin-award\.webp/);
assert.match(listwinPage, /lisa-newcomb-listwin-award\.jpg/);
assert.match(gambhirPage, /AWARDS_NOMINATIONS_NOTE/);

console.log("Awards route, copy, SEO, and photo checks passed.");
