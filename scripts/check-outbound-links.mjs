#!/usr/bin/env node

// Static checks run by default. Pass --network to verify discovered external
// URLs without requiring network access in the normal build/test path.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const sourceRoots = [path.join(rootDir, "client", "src"), path.join(rootDir, "client", "index.html")];
const externalUrls = new Set();
const failures = [];

function scan(target) {
  const stat = fs.statSync(target);
  if (stat.isDirectory()) {
    for (const entry of fs.readdirSync(target)) scan(path.join(target, entry));
    return;
  }
  if (!/\.(?:ts|tsx|html)$/.test(target)) return;

  const content = fs.readFileSync(target, "utf8");
  for (const match of content.matchAll(/https:\/\/[^\s"'`<>)}]+/g)) {
    const value = match[0].replace(/[.,;:]$/, "");
    if (
      !value.includes("${") &&
      !value.includes("www.w3.org/") &&
      !value.endsWith("-")
    ) {
      externalUrls.add(value);
    }
  }
  if (/smile\.amazon\.(?:com|org)/i.test(content)) {
    failures.push(`${path.relative(rootDir, target)} references retired AmazonSmile`);
  }
}

for (const sourceRoot of sourceRoots) scan(sourceRoot);

for (const value of externalUrls) {
  try {
    const parsed = new URL(value);
    if (parsed.protocol !== "https:") failures.push(`Non-HTTPS URL: ${value}`);
  } catch {
    failures.push(`Invalid URL: ${value}`);
  }
}

if (process.argv.includes("--network")) {
  for (const value of [...externalUrls].sort()) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 10_000);
    try {
      let response = await fetch(value, {
        method: "HEAD",
        redirect: "follow",
        signal: controller.signal,
        headers: { "User-Agent": "CanaryFoundationLinkChecker/1.0" },
      });
      if ([400, 405].includes(response.status)) {
        response = await fetch(value, {
          method: "GET",
          redirect: "follow",
          signal: controller.signal,
          headers: { "User-Agent": "CanaryFoundationLinkChecker/1.0" },
        });
      }
      if ([404, 410].includes(response.status)) failures.push(`${response.status}: ${value}`);
      else console.log(`${response.status} ${value}`);
    } catch (error) {
      console.warn(`WARN ${value}: ${error instanceof Error ? error.message : error}`);
    } finally {
      clearTimeout(timer);
    }
  }
}

if (failures.length > 0) {
  for (const failure of failures) console.error(`FAIL ${failure}`);
  process.exit(1);
}

console.log(`Checked ${externalUrls.size} external URL(s); no static integrity problems found.`);
