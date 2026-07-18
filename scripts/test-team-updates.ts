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
  ["prostate-july-2026", "ovarian-june-2026"],
  "Only the approved prostate and ovarian reports may be public right now.",
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
  if (update.evidence) {
    assert.ok(
      existsSync(path.join(repositoryRoot, "client/public", update.evidence.image.src)),
      `${update.evidence.image.src} must exist.`,
    );
  }
  assert.equal(
    update.sourcePdfDownloadApproved,
    false,
    "Source PDFs must remain private until download permission is explicit.",
  );
}

const prostateUpdate = publishedTeamUpdates.find(
  (update) => update.id === "prostate-july-2026",
);
assert.ok(prostateUpdate, "The approved July 2026 prostate update must exist.");
assert.equal(
  prostateUpdate.sourceFileName,
  "Canary Prostate Program July 2026_updated.pdf",
);
const prostateSource = JSON.stringify(prostateUpdate);
for (const approvedReportFact of [
  "2,500+",
  "65+",
  "$28M+",
  "500+",
  "1,000",
  "100-participant",
  "fall 2026",
]) {
  assert.equal(
    prostateSource.includes(approvedReportFact),
    true,
    `The prostate update must preserve approved report fact ${approvedReportFact}.`,
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
