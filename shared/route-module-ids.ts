// Route module IDs used to preload the exact Vite entry needed for hydration.
export const routeModuleIds: Record<string, string> = {
  "/": "src/pages/home.tsx",
  "/contact": "src/pages/contact.tsx",
  "/donate": "src/pages/donate.tsx",
  "/take-action": "src/pages/donate.tsx",
  "/blog": "src/pages/blog.tsx",
  "/blog/:slug": "src/pages/blog-post.tsx",
  "/about/overview": "src/pages/about-overview.tsx",
  "/about/founders-story": "src/pages/founders-story.tsx",
  "/about/staff": "src/pages/staff.tsx",
  "/about/board-directors": "src/pages/board-directors.tsx",
  "/about/leadership-council": "src/pages/leadership-council.tsx",
  "/about/scientific-leadership": "src/pages/scientific-leadership.tsx",
  "/about/financials": "src/pages/financials.tsx",
  "/about/awards": "src/pages/awards.tsx",
  "/about/awards/listwin": "src/pages/awards-listwin.tsx",
  "/about/awards/gambhir": "src/pages/awards-gambhir.tsx",
  "/approach/overview": "src/pages/approach-overview.tsx",
  "/science/overview": "src/pages/canary-science.tsx",
  "/science/programs": "src/pages/programs.tsx",
  "/science/programs/team-updates": "src/pages/team-updates.tsx",
  "/science/programs/team-updates/ovarian-june-2026": "src/pages/team-updates/ovarian-june-2026.tsx",
  "/science/programs/team-updates/prostate-july-2026": "src/pages/team-updates/prostate-july-2026.tsx",
  "/science/programs/team-updates/pancreas-july-2026": "src/pages/team-updates/pancreas-july-2026.tsx",
  "/science/centers": "src/pages/centers.tsx",
  "/science/funding-by-invitation": "src/pages/funding-by-invitation.tsx",
  "/science/programs/tumors": "src/pages/tumors-overview.tsx",
  "/science/programs/tumors/lung": "src/pages/lung-cancer.tsx",
  "/science/programs/tumors/ovarian": "src/pages/ovarian-cancer.tsx",
  "/science/programs/tumors/pancreatic": "src/pages/pancreatic-cancer.tsx",
  "/science/programs/tumors/prostate": "src/pages/prostate-cancer.tsx",
  "/science/programs/clinical-progress": "src/pages/clinical-progress.tsx",
  "/science/programs/clinical-studies": "src/pages/clinical-studies.tsx",
  "/science/centers/stanford": "src/pages/stanford-overview.tsx",
  "/science/centers/stanford/for-scientists": "src/pages/stanford-for-scientists.tsx",
  "/science/centers/stanford/biomarkers": "src/pages/stanford-biomarkers.tsx",
  "/science/centers/stanford/imaging": "src/pages/stanford-imaging.tsx",
  "/science/centers/fhcc": "src/pages/fhcc.tsx"
};

export function routeModuleId(pathname: string): string {
  return routeModuleIds[pathname] ?? (pathname.startsWith("/blog/") ? routeModuleIds["/blog/:slug"] : "src/pages/not-found.tsx");
}
