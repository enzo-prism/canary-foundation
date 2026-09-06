/** Run after npm run build; optional BASE_URL verifies production preload HTML. */
import assert from "node:assert/strict";
import { readFileSync, statSync } from "node:fs";
import { routeModuleIds, routeModuleId } from "../shared/route-module-ids";

const app = readFileSync("client/src/App.tsx", "utf8");
const modules = new Map([...app.matchAll(/const (\w+) = lazy\(\(\) => loadPage\("([^"]+)"\)\)/g)].map(match => [match[1], match[2]]));
const routePairs = [...app.matchAll(/<Route\s+path="([^"]+)"\s+component=\{(\w+)\}/g)].map(match => [match[1], modules.get(match[2])]);
assert.deepEqual(Object.fromEntries(routePairs), routeModuleIds, "Preload mapping must match every actual App route");
const manifest = JSON.parse(readFileSync("dist/public/.vite/manifest.json", "utf8"));
for (const moduleId of [...Object.values(routeModuleIds), routeModuleId("/missing")]) {
  assert.ok(manifest[moduleId]?.file, `Missing manifest module: ${moduleId}`);
}
const entry = manifest["index.html"];
const initial = readFileSync(`dist/public/${entry.file}`, "utf8");
assert.ok(!initial.includes("Announced on October 23rd"), "Article body must not be embedded in the critical app entry");
console.log(`Initial entry: ${statSync(`dist/public/${entry.file}`).size} bytes; gzip: ${statSync(`dist/public/${entry.file}.gz`).size} bytes.`);
if (process.env.BASE_URL) {
  for (const route of ["/", "/contact", "/blog/oral-history-caltech", "/missing"]) {
    const html = await (await fetch(new URL(route, process.env.BASE_URL))).text();
    const file = manifest[routeModuleId(route)].file;
    assert.ok(html.includes(`<link rel="modulepreload" crossorigin href="/${file}"`), `${route}: matching hydration preload`);
    if (route === "/") assert.ok(!/<link rel="modulepreload"[^>]*blog-posts/.test(html), "Home must not preload article bodies");
  }
}
console.log("Route loading checks passed.");
