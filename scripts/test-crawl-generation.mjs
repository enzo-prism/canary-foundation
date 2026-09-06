// Run with node scripts/test-crawl-generation.mjs; no server or build required.
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import {
  buildCrawlAssets, collectCrawlUrls, generateSitemapXml,
  generateNewsSitemapXml, generateRobotsTxt,
} from "./generate-crawl-assets-enhanced.mjs";

const posts = [{
  slug: "recorded-interview", title: 'An interview & "research" <update>',
  date: "2025-04-28", publishedDate: "2026-02-19",
}];
const urls = collectCrawlUrls({ routes: ["/", "/blog"] }, posts);
assert.equal(urls.length, 3, "New articles must be discovered from content automatically");
assert.equal(urls.find((url) => url.path.startsWith("/blog/")).publishedDate, "2026-02-19");
assert.doesNotMatch(generateSitemapXml(urls), /lastmod|priority|changefreq/,
  "Build timestamps and speculative frequency/priority signals must not be emitted");
const datedUrls = collectCrawlUrls({ routes: ["/"], lastModified: { "/": "2026-01-03" } }, []);
assert.match(generateSitemapXml(datedUrls), /<lastmod>2026-01-03<\/lastmod>/);
assert.throws(() => collectCrawlUrls({ routes: ["/"], lastModified: { "/": "2026-02-30" } }, []));
assert.throws(() => collectCrawlUrls({ routes: ["/", "/"] }, []));
assert.throws(() => collectCrawlUrls({ routes: ["/blog/missing"] }, []));
for (const route of ["https://example.com", "/about/", "/?query=value", "/../admin", "/foo&bar"]) {
  assert.throws(() => collectCrawlUrls({ routes: [route] }, []));
}
const recentNews = generateNewsSitemapXml(urls, Date.parse("2026-02-20T00:00:00Z"));
assert.match(recentNews, /<news:publication_date>2026-02-19<\/news:publication_date>/);
assert.match(recentNews, /An interview &amp; &quot;research&quot; &lt;update&gt;/);
assert.doesNotMatch(generateNewsSitemapXml(urls, Date.parse("2026-02-22T00:00:00Z")), /<news:news>/);
assert.doesNotMatch(generateNewsSitemapXml(urls, Date.parse("2026-02-18T00:00:00Z")), /<news:news>/);
const robots = generateRobotsTxt();
assert.equal((robots.match(/User-agent:/g) || []).length, 1, "All crawlers must share exclusions");
assert.match(robots, /Disallow: \/api\//);
assert.doesNotMatch(robots, /Crawl-delay|Host:|\.json/);

const buildDir = fs.mkdtempSync(path.join(os.tmpdir(), "canary-crawl-"));
try {
  fs.writeFileSync(path.join(buildDir, "private-preview.html"), "Preview");
  const first = await buildCrawlAssets({ buildDir, now: Date.parse("2026-09-06T00:00:00Z") });
  assert.ok(first.urls.some((url) => url.path === "/blog/april-2026-science-meetings-stanford-ucsd"));
  assert.ok(first.urls.some((url) => url.path === "/science/programs/team-updates/ovarian-june-2026"));
  assert.ok(!first.urls.some((url) => url.path === "/private-preview"));
  assert.equal(first.llmXml, first.sitemapXml);
  assert.doesNotMatch(first.sitemapIndexXml, /lastmod/);
  assert.doesNotMatch(first.sitemapIndexXml, /news-sitemap|llm.xml/);
  const second = await buildCrawlAssets({ buildDir, now: Date.parse("2026-09-07T00:00:00Z") });
  assert.equal(second.sitemapXml, first.sitemapXml, "Deploy date must not change sitemap content");
  assert.equal(second.robotsTxt, first.robotsTxt);
} finally {
  fs.rmSync(buildDir, { recursive: true, force: true });
}
console.log("Crawl generation: discovery, dates, XML escaping, robots, and deterministic output passed.");
