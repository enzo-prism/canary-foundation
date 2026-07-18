export interface PrivateTeamUpdateShell {
  id: "pancreas" | "q4-overview" | "ctuc";
  status: "pending";
  approvedForPublicUse: false;
}

// These shells intentionally contain no public title, summary, report facts,
// route, metadata, or assets. This module must never be imported by client/.
export const privateTeamUpdateShells: readonly PrivateTeamUpdateShell[] = [
  { id: "pancreas", status: "pending", approvedForPublicUse: false },
  { id: "q4-overview", status: "pending", approvedForPublicUse: false },
  { id: "ctuc", status: "pending", approvedForPublicUse: false },
];
