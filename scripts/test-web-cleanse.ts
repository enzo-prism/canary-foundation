import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const read = (path: string) => readFileSync(resolve(root, path), "utf8");

const app = read("client/src/App.tsx");
const header = read("client/src/components/header.tsx");
const footer = read("client/src/components/footer.tsx");
const routes = read("seo/routes.json");
const server = read("server/index.ts");
const leadership = read("client/src/pages/scientific-leadership.tsx");
const programs = read("client/src/pages/programs.tsx");
const tumors = read("client/src/pages/tumors-overview.tsx");
const publicSurfaces = [app, header, footer, routes].join("\n");

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

for (const staleName of [
  "Lee Hartwell",
  "Nicole Urban",
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

console.log("Web cleanse route and leadership checks passed.");
