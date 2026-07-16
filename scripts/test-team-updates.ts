import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  publishedTeamUpdates,
} from "../client/src/data/team-updates";
import { privateTeamUpdateShells } from "../internal/team-update-shells";
import { EXACT_ROUTE_METADATA } from "../shared/seo";

const repositoryRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
);
const seoRoutes = JSON.parse(
  readFileSync(path.join(repositoryRoot, "seo/routes.json"), "utf8"),
) as { routes: string[] };

assert.deepEqual(
  publishedTeamUpdates.map((update) => update.id),
  ["ovarian-june-2026"],
  "Only the approved ovarian report may be public right now.",
);

assert.equal(
  new Set(publishedTeamUpdates.map((update) => update.route)).size,
  publishedTeamUpdates.length,
  "Published report routes must be unique.",
);

for (const update of publishedTeamUpdates) {
  assert.equal(update.status, "published");
  assert.equal(update.approvedForPublicUse, true);
  assert.ok(EXACT_ROUTE_METADATA[update.route], `${update.route} needs metadata.`);
  assert.ok(
    seoRoutes.routes.includes(update.route),
    `${update.route} needs a sitemap route.`,
  );
  assert.ok(
    existsSync(path.join(repositoryRoot, "client/public", update.evidence.image.src)),
    `${update.evidence.image.src} must exist.`,
  );
}

for (const update of privateTeamUpdateShells) {
  assert.equal(update.approvedForPublicUse, false);
  assert.deepEqual(
    Object.keys(update).sort(),
    ["approvedForPublicUse", "id", "status"],
    `${update.id} must remain a content-free private shell.`,
  );
}

const publicSource = publishedTeamUpdates
  .map((update) => JSON.stringify(update))
  .join("\n");
for (const confidentialOrSupersededTerm of ["CRABp2", "ORF1p", "165 cases"]) {
  assert.equal(
    publicSource.includes(confidentialOrSupersededTerm),
    false,
    `Public report data must not contain ${confidentialOrSupersededTerm}.`,
  );
}

console.log(
  `Team Update safety checks passed: ${publishedTeamUpdates.length} public report, ${
    privateTeamUpdateShells.length
  } content-free private shells.`,
);
