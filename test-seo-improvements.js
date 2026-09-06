#!/usr/bin/env node
// Validate existing production crawl assets. Run npm run build first.
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { build } from "esbuild";

const root = path.dirname(fileURLToPath(import.meta.url));
const read = (file) => fs.readFileSync(path.join(root, file), "utf8");
const origin = "https://canaryfoundation.org";
const manifest = JSON.parse(read("seo/routes.json"));
const bundle = await build({
  absWorkingDir: root, entryPoints: ["client/src/data/blog-posts.ts"],
  bundle: true, platform: "node", format: "esm", write: false, tsconfig: "tsconfig.json",
});
const { blogPosts } = await import(`data:text/javascript;base64,${Buffer.from(bundle.outputFiles[0].text).toString("base64")}`);
const xmlEscape = (value) => String(value).replace(/[&<>"']/g, (character) => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&apos;",
})[character]);
const locations = (xml) => [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
const files = Object.fromEntries([
  "sitemap.xml", "news-sitemap.xml", "llm.xml", "sitemap-index.xml", "robots.txt", "ai.txt",
].map((file) => [file, read(`dist/public/${file}`)]));
let failures = 0;
function check(name, verify) {
  try { verify(); console.log(`PASS: ${name}`); }
  catch (error) { failures++; console.error(`FAIL: ${name}\n${error.message}`); }
}

check("Main sitemap discovers every canonical route and article, without duplicates", () => {
  const expected = [...new Set([...manifest.routes, ...blogPosts.map((post) => `/blog/${post.slug}`)])]
    .map((route) => origin + route).sort();
  assert.deepEqual(locations(files["sitemap.xml"]).sort(), expected);
  assert.match(files["sitemap.xml"], /xmlns="http:\/\/www.sitemaps.org\/schemas\/sitemap\/0.9"/);
  assert.ok(expected.length <= 50000);
});
check("Only documented substantive update dates appear as lastmod", () => {
  for (const [, entry] of files["sitemap.xml"].matchAll(/<url>([\s\S]*?)<\/url>/g)) {
    const route = locations(entry)[0].slice(origin.length);
    const lastmod = entry.match(/<lastmod>([^<]+)<\/lastmod>/)?.[1];
    assert.equal(lastmod, manifest.lastModified?.[route], route);
  }
  assert.doesNotMatch(files["sitemap-index.xml"], /<lastmod>/);
});
check("News sitemap contains only actual articles published in the last two days", () => {
  const xml = files["news-sitemap.xml"];
  assert.match(xml, /xmlns:news="http:\/\/www.google.com\/schemas\/sitemap-news\/0.9"/);
  const entries = [...xml.matchAll(/<url>([\s\S]*?)<\/url>/g)];
  assert.ok(entries.length <= 1000);
  assert.equal(new Set(locations(xml)).size, entries.length);
  for (const [, entry] of entries) {
    const url = locations(entry)[0];
    const post = blogPosts.find((item) => origin + `/blog/${item.slug}` === url);
    assert.ok(post, `Unknown news article: ${url}`);
    const published = entry.match(/<news:publication_date>([^<]+)<\/news:publication_date>/)?.[1];
    assert.equal(published, post.publishedDate ?? post.date);
    const age = Date.now() - Date.parse(`${published}T00:00:00Z`);
    assert.ok(age >= 0 && age <= 2 * 24 * 60 * 60 * 1000, `Stale or future news article: ${url}`);
    assert.ok(entry.includes(`<news:title>${xmlEscape(post.title)}</news:title>`));
  }
  // An empty sitemap is valid when there have been no recent publications.
});
check("Robots rules allow public content and apply exclusions equally to all crawlers", () => {
  const robots = files["robots.txt"];
  const agents = [...robots.matchAll(/^User-agent:\s*(.+)$/gm)].map((match) => match[1]);
  assert.deepEqual(agents, ["*"]);
  assert.match(robots, /^Allow: \/$/m);
  for (const excluded of ["/api/", "/admin/", "/server/"]) {
    assert.ok(robots.includes(`Disallow: ${excluded}`));
  }
  assert.match(robots, /^Sitemap: https:\/\/canaryfoundation.org\/sitemap-index.xml$/m);
  assert.doesNotMatch(robots, /Crawl-delay:|Host:/);
});
check("Sitemap index advertises main sitemap and only nonempty news", () => {
  const expected = [origin + "/sitemap.xml"];
  if (files["news-sitemap.xml"].includes("<news:news>")) expected.push(origin + "/news-sitemap.xml");
  assert.deepEqual(locations(files["sitemap-index.xml"]), expected);
  assert.match(files["sitemap-index.xml"], /<sitemapindex\s/);
  for (const url of expected) assert.ok(fs.existsSync(path.join(root, "dist/public", new URL(url).pathname)));
});
check("Legacy discovery resources preserve usable canonical links", () => {
  assert.equal(files["llm.xml"], files["sitemap.xml"]);
  const guide = files["ai.txt"];
  assert.match(guide, /Canary Foundation/);
  assert.match(guide, /early (?:cancer )?detection/i);
  assert.match(guide, /\/robots\.txt/);
  const known = new Set([...locations(files["sitemap.xml"]), origin + "/sitemap.xml"]);
  const linked = [...guide.matchAll(/https:\/\/canaryfoundation\.org\/[^\s]+/g)].map((match) => match[0]);
  assert.ok(linked.length > 0);
  for (const url of linked) assert.ok(known.has(url), `Guide links to a noncanonical page: ${url}`);
  assert.doesNotMatch(guide, /All content is factual and based on peer-reviewed research|Preferred-crawl-rate/);
});
console.log(`${6 - failures}/6 production crawl checks passed.`);
process.exitCode = failures ? 1 : 0;
