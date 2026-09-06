/** Run against a running development or production server:
 * BASE_URL=http://localhost:5000 npm run test:ssr
 * Checks initial HTTP HTML; no browser or JavaScript execution is involved.
 */
import assert from "node:assert/strict";
import routes from "../seo/routes.json";
import { resolvePageSeo } from "../shared/page-seo";

const base = process.env.BASE_URL ?? "http://localhost:5000";
const escapeHtml = (text: string) => text.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
const linkGraph = new Map<string, Set<string>>();
for (const route of [...routes.routes, "/missing-ssr-test", "/blog/missing-ssr-test"]) {
  const expected = resolvePageSeo(route);
  const response = await fetch(new URL(route, base));
  assert.equal(response.status, expected.isKnownRoute ? 200 : 404, route);
  const html = await response.text();
  assert.ok(html.includes(`<title>${escapeHtml(expected.metadata.title)}</title>`), `${route}: title`);
  assert.ok(html.includes(`<meta property="og:type" content="${expected.ogType}"`), `${route}: Open Graph type`);
  const body = html.split('<div id="root">')[1];
  assert.ok(body && body.includes("<nav") && body.includes("<h1"), `${route}: full initial page body`);
  assert.ok(!html.includes("<!--ssr-outlet-->") && !body.includes("Loading Canary Foundation..."), `${route}: no empty/loading shell`);
  assert.equal([...body.matchAll(/<h1\b/g)].length, 1, `${route}: one primary heading`);
  const links = new Set<string>();
  for (const match of body.matchAll(/<a\b[^>]*href="([^"]+)"/g)) {
    const href = match[1].replaceAll("&amp;", "&");
    const target = new URL(href, "https://canaryfoundation.org" + route);
    if (target.origin === "https://canaryfoundation.org") links.add(target.pathname.replace(/\/+$/, "") || "/");
  }
  linkGraph.set(route, links);
  for (const id of ["page-jsonld", "organization-jsonld", "website-jsonld"]) {
    const script = html.match(new RegExp(`<script[^>]*id="${id}"[^>]*>([\\s\\S]*?)</script>`));
    assert.ok(script, `${route}: ${id}`);
    assert.doesNotThrow(() => JSON.parse(script[1]), `${route}: valid ${id}`);
  }
  if (!expected.isKnownRoute) assert.ok(html.includes('content="noindex, nofollow"'), `${route}: noindex`);
}
console.log(`Verified full initial HTML, metadata and schema for ${routes.routes.length} public routes plus two 404s.`);

for (const [route, destination] of [["/index.html", "/"], ["/take-action", "/donate"], ["/contact/", "/contact"]]) {
  const response = await fetch(new URL(`${route}?utm_source=ssr-test`, base), { redirect: "manual" });
  assert.equal(response.status, 301, `${route}: permanent canonical redirect`);
  assert.equal(response.headers.get("location"), `${destination}?utm_source=ssr-test`);
}
const www = await fetch(new URL("/take-action/?utm_source=ssr-test", base), {
  redirect: "manual", headers: { "x-forwarded-host": "www.canaryfoundation.org" },
});
assert.equal(www.status, 301);
assert.equal(www.headers.get("location"), "https://canaryfoundation.org/donate?utm_source=ssr-test", "host, alias and trailing slash canonicalize in one hop");
console.log("Verified canonical redirects and query preservation.");

const reached = new Set<string>();
const pending = ["/"];
while (pending.length) {
  const route = pending.pop()!;
  if (reached.has(route)) continue;
  reached.add(route);
  for (const link of linkGraph.get(route) ?? []) if (!reached.has(link)) pending.push(link);
}
assert.deepEqual(routes.routes.filter(route => !reached.has(route)), [], "Every public page must be reachable from homepage HTML links");
console.log("Verified a single H1 per page and complete crawlable internal link reachability.");
