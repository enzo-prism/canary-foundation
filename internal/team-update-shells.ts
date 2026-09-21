export interface PrivateTeamUpdateShell {
  id: "q4-overview" | "ctuc";
  status: "pending";
  approvedForPublicUse: false;
}

// These shells intentionally contain no public title, summary, report facts,
// route, metadata, or assets. This module must never be imported by client/.
// Editorial intake and release checklist: docs/q4-ctuc-readiness-2026-09-20.md.
export const privateTeamUpdateShells: readonly PrivateTeamUpdateShell[] = [
  { id: "q4-overview", status: "pending", approvedForPublicUse: false },
  { id: "ctuc", status: "pending", approvedForPublicUse: false },
];
