import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { build } from "esbuild";

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SITE_ORIGIN = "https://canaryfoundation.org";
const GOOGLE_NEWS_MAX_AGE_MS = 2 * 24 * 60 * 60 * 1000;

function escapeXml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&apos;",
  })[character]);
}

// Read the same typed content consumed by the website, including publication
// dates that differ from an event/recording date. Do not maintain a second catalog.
async function loadBlogPosts() {
  const result = await build({
    absWorkingDir: rootDir,
    entryPoints: ["client/src/data/blog-posts.ts"],
    bundle: true,
    platform: "node",
    format: "esm",
    write: false,
    tsconfig: "tsconfig.json",
  });
  const module = await import(`data:text/javascript;base64,${Buffer.from(result.outputFiles[0].text).toString("base64")}`);
  return module.blogPosts;
}

export function collectCrawlUrls(manifest, posts) {
  if (!Array.isArray(manifest.routes) || !manifest.routes.length) {
    throw new Error("seo/routes.json must contain a nonempty routes array");
  }
  const seen = new Set();
  const postByPath = new Map(posts.map((post) => [`/blog/${post.slug}`, post]));
  for (const route of manifest.routes) {
    if (typeof route !== "string" || !/^\/(?:[a-z0-9-]+(?:\/[a-z0-9-]+)*)?$/.test(route)) {
      throw new Error(`Invalid canonical sitemap route: ${route}`);
    }
    if (seen.has(route)) throw new Error(`Duplicate sitemap route: ${route}`);
    if (route.startsWith("/blog/") && !postByPath.has(route)) {
      throw new Error(`Sitemap blog route has no article: ${route}`);
    }
    seen.add(route);
  }
  // Content additions are discovered automatically, even before the static route
  // manifest changes. Unknown built HTML files are deliberately not crawl targets.
  for (const route of postByPath.keys()) seen.add(route);
  return [...seen].sort().map((route) => {
    const post = postByPath.get(route);
    const lastmod = manifest.lastModified?.[route];
    // No file mtimes, deploy dates, or guessed publication dates as lastmod.
    // Editors may supply the date of a substantive content update in the manifest.
    if (lastmod && (!/^\d{4}-\d{2}-\d{2}$/.test(lastmod) ||
        !Number.isFinite(Date.parse(lastmod)) || new Date(lastmod).toISOString().slice(0, 10) !== lastmod)) {
      throw new Error(`Invalid content lastModified date for ${route}: ${lastmod}`);
    }
    return {
      path: route,
      ...(lastmod ? { lastmod } : {}),
      ...(post ? { title: post.title, publishedDate: post.publishedDate ?? post.date } : {}),
    };
  });
}

export function generateSitemapXml(urls) {
  return '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    urls.map((url) => `  <url>\n    <loc>${escapeXml(SITE_ORIGIN + url.path)}</loc>\n` +
      (url.lastmod ? `    <lastmod>${escapeXml(url.lastmod)}</lastmod>\n` : "") +
      "  </url>\n").join("") + "</urlset>\n";
}

export function generateNewsSitemapXml(urls, now = Date.now()) {
  const newsUrls = urls.filter((url) => {
    if (!url.publishedDate) return false;
    const publishedAt = Date.parse(`${url.publishedDate}T00:00:00Z`);
    const age = now - publishedAt;
    return Number.isFinite(publishedAt) && age >= 0 && age <= GOOGLE_NEWS_MAX_AGE_MS;
  });
  if (newsUrls.length > 1000) throw new Error("News sitemap exceeds the 1,000 article limit");
  return '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">\n' +
    newsUrls.map((url) => `  <url>\n    <loc>${escapeXml(SITE_ORIGIN + url.path)}</loc>\n` +
      "    <news:news>\n      <news:publication>\n" +
      "        <news:name>Canary Foundation</news:name>\n        <news:language>en</news:language>\n" +
      "      </news:publication>\n" +
      `      <news:publication_date>${escapeXml(url.publishedDate)}</news:publication_date>\n` +
      `      <news:title>${escapeXml(url.title)}</news:title>\n` +
      "    </news:news>\n  </url>\n").join("") + "</urlset>\n";
}

export function generateRobotsTxt() {
  // A single group applies the same rules to search and AI crawlers. Specific
  // user-agent groups would supersede these exclusions, not inherit them.
  return `# Canary Foundation Robots.txt
User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/
Disallow: /server/

Sitemap: ${SITE_ORIGIN}/sitemap-index.xml
`;
}

function generateAiTxt() {
  // Legacy informational resource, not a supported indexing or permission protocol.
  return `# Canary Foundation

Canary Foundation is a nonprofit organization supporting research into early cancer detection.
This file is a guide to public website content. Crawl access is described in /robots.txt.

## Foundation
- Mission and history: ${SITE_ORIGIN}/about/overview
- Leadership: ${SITE_ORIGIN}/about/scientific-leadership
- Financial information: ${SITE_ORIGIN}/about/financials

## Research and updates
- Research approach: ${SITE_ORIGIN}/approach/overview
- Cancer research programs: ${SITE_ORIGIN}/science/programs
- Research team updates: ${SITE_ORIGIN}/science/programs/team-updates
- Foundation news and articles: ${SITE_ORIGIN}/blog

Use linked pages and their cited sources for context and dates. Research updates do not establish that a test is available for routine screening.

Sitemap: ${SITE_ORIGIN}/sitemap.xml
Contact: ${SITE_ORIGIN}/contact
`;
}

export async function buildCrawlAssets({ buildDir = process.env.BUILD_DIR || "dist/public", now = Date.now() } = {}) {
  const manifest = JSON.parse(fs.readFileSync(path.join(rootDir, "seo/routes.json"), "utf8"));
  const urls = collectCrawlUrls(manifest, await loadBlogPosts());
  if (urls.length > 50000) throw new Error("Sitemap exceeds 50,000 URLs; split it before publishing");
  const sitemapXml = generateSitemapXml(urls);
  const newsSitemapXml = generateNewsSitemapXml(urls, now);
  const sitemaps = ["sitemap.xml"];
  // Retain the legacy endpoint, but do not advertise an empty news sitemap.
  if (newsSitemapXml.includes("<news:news>")) sitemaps.push("news-sitemap.xml");
  const sitemapIndexXml = '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    sitemaps.map((file) => `  <sitemap><loc>${SITE_ORIGIN}/${file}</loc></sitemap>\n`).join("") +
    "</sitemapindex>\n";
  const result = {
    urls, totalCount: urls.length, sitemapXml, newsSitemapXml, sitemapIndexXml,
    robotsTxt: generateRobotsTxt(), aiTxt: generateAiTxt(),
    // Keep existing inbound links working; this is an ordinary sitemap alias.
    llmXml: sitemapXml,
  };
  const buildPath = path.resolve(rootDir, buildDir);
  fs.mkdirSync(buildPath, { recursive: true });
  for (const [file, contents] of Object.entries({
    "robots.txt": result.robotsTxt,
    "ai.txt": result.aiTxt,
    "sitemap.xml": sitemapXml,
    "news-sitemap.xml": newsSitemapXml,
    "sitemap-index.xml": sitemapIndexXml,
    "llm.xml": result.llmXml,
  })) fs.writeFileSync(path.join(buildPath, file), contents);
  console.log(`Generated crawl assets for ${urls.length} canonical routes.`);
  return result;
}

if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) {
  await buildCrawlAssets();
}
