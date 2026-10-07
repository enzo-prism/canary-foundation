#!/bin/bash
# After a fresh build: SKIP_BUILD=1 bash test-redirects.sh
# Against production: BASE_URL=https://canaryfoundation.org bash test-redirects.sh
set -euo pipefail
source "$(dirname "$0")/scripts/production-test-helpers.sh"
if [[ -z "${BASE_URL:-}" ]]; then
  trap stop_production_server EXIT
  build_production_bundle >/dev/null
  start_production_server
  export BASE_URL="$TEST_BASE_URL"
fi
node --input-type=module <<'JS'
import assert from "node:assert/strict";
const base = process.env.BASE_URL;
const production = new URL(base).hostname === "canaryfoundation.org";
const retired = [
  ["/science/publications", "/science/overview"],
  ["/science/publications/fellowships", "/science/overview"],
  ["/science/publications/seed-grants", "/science/funding-by-invitation"],
  ["/approach/symposium", "/approach/overview"],
  ["/science/programs/tumors/breast", "/science/programs/tumors"],
  ["/canary-science/publications", "/science/overview"],
  ["/canary-science/publications/fellowships", "/science/overview"],
  ["/canary-science/publications/seed-grants", "/science/funding-by-invitation"],
  ["/canary-approach/canary-symposium", "/approach/overview"],
  ["/canary-science/programs/tumors/breast", "/science/programs/tumors"],
  ["/news", "/blog"],
];
const existing = [
  ["/about-canary/founders-story", "/oral-history"],
  ["/about-canary", "/about/overview"],
  ["/about-canary/staff", "/about/staff"],
  ["/canary-science/programs", "/science/programs"],
  ["/about-canary/board-of-directors", "/about/board-directors"],
  ["/canary-science", "/science/overview"],
  ["/canary-approach", "/approach/overview"],
  ["/news-blog", "/blog"],
  ["/take-action-2", "/donate"],
  ["/canary-science/programs/tumors/prostate", "/science/programs/tumors/prostate"],
];
const offline = [
  "/approach/collaborations", "/science/science", "/science/science/imaging", "/science/science/biomarkers",
  "/canary-approach/collaborations", "/canary-science/science", "/canary-science/science/imaging", "/canary-science/science/biomarkers",
];
let checks = 0;
function request(path, www) {
  return fetch(new URL(path, www && production ? "https://www.canaryfoundation.org" : base), {
    redirect: "manual",
    ...(!production && www ? {headers:{"x-forwarded-host":"www.canaryfoundation.org"}} : {}),
  });
}
for (const [route, target] of [...retired, ...existing]) {
  for (const suffix of ["", "/", "?utm_source=redirect-test&campaign=closeout", "/?utm_source=redirect-test&campaign=closeout"]) {
    const query = suffix.includes("?") ? suffix.slice(suffix.indexOf("?")) : "";
    for (const www of [false, true]) {
      const response = await request(route + suffix, www);
      assert.equal(response.status, 301, `${www ? "www" : "apex"}${route}${suffix}`);
      const location = response.headers.get("location");
      if (www) assert.equal(location, `https://canaryfoundation.org${target}${query}`, `${route}: absolute one-hop www redirect`);
      const destination = new URL(location, "https://canaryfoundation.org").href;
      assert.equal(destination, `https://canaryfoundation.org${target}${query}`, `${route}: one-hop destination/query`);
      checks++;
    }
  }
}
for (const target of new Set([...retired, ...existing].map(([,target]) => target))) {
  assert.equal((await request(target, false)).status, 200, `${target}: live destination`);
  checks++;
}
for (const route of offline) {
  for (const suffix of ["", "/", "?utm_source=redirect-test", "/?utm_source=redirect-test"]) {
    for (const www of [false,true]) {
      const response = await request(route + suffix, www);
      assert.equal(response.status, 404, `${route}: direct offline 404`);
      assert.equal(response.headers.get("location"), null, `${route}: no redirect`);
      assert.match(await response.text(), /name="robots" content="noindex, nofollow"/, `${route}: noindex`);
      checks++;
    }
  }
}
console.log(`PASS ${checks} checks: 11 retired mappings, existing aliases, live destinations, query preservation, one-hop www redirects, and all eight offline routes.`);
JS
