// Run with `npx tsx scripts/test-seo-metadata.ts`; no server or network required.
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import {
  EXACT_ROUTE_METADATA, SITE_ORIGIN, ORGANIZATION_ID, WEBSITE_ID,
  resolveRouteMetadata, buildOrganizationJsonLd, buildWebSiteJsonLd,
  buildWebPageJsonLd, buildArticleJsonLd, renderJsonLdScript,
} from "../shared/seo";

const { routes } = JSON.parse(readFileSync(new URL("../seo/routes.json", import.meta.url), "utf8"));
const staticRoutes: string[] = routes.filter((path: string) => !path.startsWith("/blog/"));
const titles = new Set<string>();
const descriptions = new Set<string>();
for (const path of staticRoutes) {
  assert.ok(EXACT_ROUTE_METADATA[path], `Missing exact metadata: ${path}`);
  const metadata = resolveRouteMetadata(`${path}?campaign=test#content`);
  assert.ok(!titles.has(metadata.title), `Duplicate title: ${path}`);
  assert.ok(!descriptions.has(metadata.description), `Duplicate description: ${path}`);
  titles.add(metadata.title);
  descriptions.add(metadata.description);
}
const organization = buildOrganizationJsonLd();
assert.equal(organization["@id"], ORGANIZATION_ID);
assert.equal(organization["@type"], "NGO");
assert.equal(organization.nonprofitStatus, "https://schema.org/Nonprofit501c3");
assert.equal(buildWebSiteJsonLd()["@id"], WEBSITE_ID);
const page = buildWebPageJsonLd({ title: "Contact", description: "Contact Canary", url: `${SITE_ORIGIN}/contact` });
assert.equal(page["@type"], "ContactPage");
assert.equal((page.publisher as Record<string, unknown>)["@id"], ORGANIZATION_ID);
const baseArticle = { headline: "Research", description: "Program report", url: `${SITE_ORIGIN}/blog/report` };
const teamArticle = buildArticleJsonLd({ ...baseArticle, author: "Canary Foundation Research Team" });
assert.equal((teamArticle.author as Record<string, unknown>)["@type"], "Organization");
const oralHistory = buildArticleJsonLd({ ...baseArticle, author: "Don Listwin", datePublished: "2026-02-19", dateModified: "2025-04-28" });
assert.equal((oralHistory.author as Record<string, unknown>)["@type"], "Person");
assert.equal(oralHistory.dateModified, undefined);
assert.equal(oralHistory.datePublished, "2026-02-19");
assert.equal(buildArticleJsonLd({ ...baseArticle, datePublished: "2025-01-01", dateModified: "2026-01-01" }).dateModified, "2026-01-01");
assert.ok(!renderJsonLdScript({ headline: "</script><script>alert(1)</script>" }).includes("<script>alert"));
console.log(`SEO metadata checks passed for ${staticRoutes.length} static routes, entity identity, author types, dates, and safe serialization.`);
