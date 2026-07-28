import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const read = (path: string) => readFileSync(resolve(root, path), "utf8");

const app = read("client/src/App.tsx");
const header = read("client/src/components/header.tsx");
const footer = read("client/src/components/footer.tsx");
const routes = read("seo/routes.json");
const routeMetadata = read("shared/seo.ts");
const server = read("server/index.ts");
const leadership = read("client/src/pages/scientific-leadership.tsx");
const blogPosts = read("client/src/data/blog-posts.ts");
const home = read("client/src/pages/home.tsx");
const crawlGenerator = read("scripts/generate-crawl-assets-enhanced.mjs");
const programs = read("client/src/pages/programs.tsx");
const tumors = read("client/src/pages/tumors-overview.tsx");
const donate = read("client/src/pages/donate.tsx");
const hiddenImaging = read("client/src/pages/imaging.tsx");
const stanfordOverview = read("client/src/pages/stanford-overview.tsx");
const stanfordImaging = read("client/src/pages/stanford-imaging.tsx");
const publicSurfaces = [app, header, footer, routes, routeMetadata].join("\n");

const removedRoutes = [
  "/science/publications",
  "/science/publications/fellowships",
  "/science/publications/seed-grants",
  "/approach/symposium",
  "/science/programs/tumors/breast",
  "/approach/collaborations",
  "/science/science",
  "/science/science/imaging",
  "/science/science/biomarkers",
];

for (const route of removedRoutes) {
  assert.equal(
    publicSurfaces.includes(route),
    false,
    `${route} must not remain routed, linked, or indexed`,
  );
  assert.equal(
    server.includes(`"${route}"`),
    true,
    `${route} must be explicitly protected from canonical redirect hops`,
  );
}

const expectedLeaders = [
  "Joseph DeSimone",
  "Garry Gold",
  "Walter Park",
  "Ronny Drapkin",
  "Charles Drescher",
  "Daniel Lin",
  "Peter Nelson",
  "Ahmed El Kaffas",
];

for (const leader of expectedLeaders) {
  assert.match(leadership, new RegExp(leader), `${leader} must appear on Scientific Leadership`);
}

const expectedFoundingAdvisors = [
  "Leland H. (Lee) Hartwell",
  "Sanjiv (Sam) Gambhir",
  "Samir Hanash",
  "Frank McCormick",
  "Nicole Urban",
  "Patrick Brown",
  "Peter Laird",
  "Andrew Berlin",
  "Martin McIntosh",
];

for (const advisor of expectedFoundingAdvisors) {
  assert.equal(
    leadership.includes(advisor),
    true,
    `${advisor} must appear under Founding Scientific Advisors`,
  );
}

assert.match(leadership, /Founding Scientific Advisors/);
assert.match(leadership, /https:\/\/tul\.ucsd\.edu\/team\/1/);
assert.match(leadership, /https:\/\/lairdlab\.vai\.org\//);
assert.match(
  leadership,
  /https:\/\/www\.fredhutch\.org\/en\/news\/center-news\/2010\/08\/Arnold-Canary-Foundation\.html/,
);
assert.match(
  leadership,
  /https:\/\/www\.draper\.com\/media-center\/news-releases\/detail\/23157\/canary-foundation-awards-gift-to-draper-to-improve-cancer-detection-hasten-treatment/,
);
assert.doesNotMatch(leadership, /midoceanpartners\.com/);
assert.match(
  leadership,
  /Founding Scientific Advisor links provide institutional, memorial, or\s+historical context/,
);
assert.doesNotMatch(
  leadership,
  /Leadership affiliations and profile links reflect current institutional information/,
);

const foundingAdvisorsSource = leadership.slice(
  leadership.indexOf("const foundingScientificAdvisors"),
  leadership.indexOf("export default function ScientificLeadership"),
);
assert.doesNotMatch(
  foundingAdvisorsSource,
  /\baffiliation\s*:/,
  "Founding advisors must remain name-and-link only, without affiliations",
);

for (const staleName of [
  "Sam Seiden",
  "Mary Thompson",
  "James Chen",
  "Anna Rodriguez",
]) {
  assert.equal(
    leadership.includes(staleName),
    false,
    `${staleName} must not remain on Scientific Leadership`,
  );
}

assert.match(programs, /Our Focus: 4 Cancer Types/);
assert.match(programs, />4<\/h3>/);
assert.doesNotMatch(programs, /Dr\. Sanjiv|Sanjiv \(Sam\) Gambhir/);
assert.doesNotMatch(tumors, /Dr\. Sanjiv|Sanjiv \(Sam\) Gambhir/);
assert.match(programs, /Sanjiv Sam Gambhir/);
assert.match(tumors, /Sanjiv Sam Gambhir/);
assert.doesNotMatch(
  [donate, hiddenImaging].join("\n"),
  /Our imaging projects are led by a world-renowned expert|He is Chair|Sam is guiding|leading the science initiatives/,
);
assert.match(donate, /Founding Director.*former Chair/);
assert.doesNotMatch(
  [donate, stanfordOverview, stanfordImaging].join("\n"),
  /Dr\. Sanjiv|Sanjiv \(Sam\) Gambhir|Sanjiv ["']Sam["'] Gambhir/,
);

const aprilMeetingsSlug = "april-2026-science-meetings-stanford-ucsd";
for (const surface of [blogPosts, home, routes, routeMetadata, crawlGenerator]) {
  assert.equal(
    surface.includes(aprilMeetingsSlug),
    true,
    `${aprilMeetingsSlug} must remain connected across content, homepage, SEO, and crawl discovery`,
  );
}

const aprilMeetingsPost = blogPosts.slice(
  blogPosts.indexOf(`slug: "${aprilMeetingsSlug}"`),
);
assert.match(aprilMeetingsPost, /author: "Therese Quinlan"/);
assert.match(aprilMeetingsPost, /In April 2026/);
assert.match(aprilMeetingsPost, /Canary Center Symposium/);
assert.match(aprilMeetingsPost, /University of California San Diego/);
assert.match(aprilMeetingsPost, /https:\/\/radweb\.su\.domains\/canary\/symposium\//);
assert.doesNotMatch(
  aprilMeetingsPost,
  /\b(?:BRCA|PASS|PATROL|STIC)\b/,
  "The April meetings article must not duplicate detailed ovarian or prostate updates",
);

console.log("Web cleanse route, leadership, and April meetings checks passed.");
