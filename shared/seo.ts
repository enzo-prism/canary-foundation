// Single source of truth for route metadata and structured data (JSON-LD).
//
// Consumed by BOTH the Express server (server/vite.ts) for server-rendered
// HTML and the client router (client/src/App.tsx) for SPA navigation, so the
// title/description/canonical/OG tags and JSON-LD that crawlers see in the
// initial HTML stay identical to what users get after hydration.

export interface RouteMetadata {
  title: string;
  description: string;
}

export const SITE_ORIGIN = "https://canaryfoundation.org";
export const SITE_NAME = "Canary Foundation";

export const DEFAULT_METADATA: RouteMetadata = {
  title: "Canary Foundation - Early Cancer Detection Research",
  description:
    "Canary Foundation advances early cancer detection research through collaborative science, biomarker discovery, imaging innovation, and translational partnerships.",
};

export const NOT_FOUND_METADATA: RouteMetadata = {
  title: "Page Not Found | Canary Foundation",
  description:
    "The requested page could not be found. Explore Canary Foundation's work in early cancer detection research.",
};

export const EXACT_ROUTE_METADATA: Record<string, RouteMetadata> = {
  "/": DEFAULT_METADATA,
  "/contact": {
    title: "Contact Canary Foundation | Canary Foundation",
    description:
      "Get in touch with Canary Foundation about early cancer detection research, partnerships, and ways to support the mission.",
  },
  "/donate": {
    title: "Support Canary Foundation | Canary Foundation",
    description:
      "Support Canary Foundation's mission to detect cancer early and fund the science that makes earlier diagnosis possible.",
  },
  "/take-action": {
    title: "Support Canary Foundation | Canary Foundation",
    description:
      "Support Canary Foundation's mission to detect cancer early and fund the science that makes earlier diagnosis possible.",
  },
  "/blog": {
    title: "Canary Foundation Blog | Canary Foundation",
    description:
      "Read the latest research updates, oral histories, and stories from Canary Foundation.",
  },
  "/about/overview": {
    title: "About Canary Foundation | Canary Foundation",
    description:
      "Learn about Canary Foundation's mission, history, and commitment to earlier cancer detection.",
  },
  "/about/founders-story": {
    title: "Don Listwin | Founder's Story & Oral History | Canary Foundation",
    description:
      "Explore Don Listwin's founder story, oral history, and the personal journey that shaped Canary Foundation.",
  },
  "/about/staff": {
    title: "Canary Foundation Staff | Canary Foundation",
    description:
      "Meet the Canary Foundation team supporting early cancer detection research and philanthropic partnerships.",
  },
  "/about/board-directors": {
    title: "Board of Directors | Canary Foundation",
    description:
      "Meet the Canary Foundation board of directors guiding the organization and its mission.",
  },
  "/about/leadership-council": {
    title: "Leadership Council | Canary Foundation",
    description:
      "Meet the leadership council supporting Canary Foundation's strategy, partnerships, and growth.",
  },
  "/about/scientific-leadership": {
    title: "Scientific Leadership | Canary Foundation",
    description:
      "Learn about the scientific leaders helping shape Canary Foundation's approach to early cancer detection.",
  },
  "/about/financials": {
    title: "Financials | Canary Foundation",
    description:
      "Review Canary Foundation financial information and organizational stewardship.",
  },
  "/approach/overview": {
    title: "Canary Approach | Canary Foundation",
    description:
      "Learn how Canary Foundation approaches early cancer detection through collaborative science, biomarkers, and imaging.",
  },
  "/approach/collaborations": {
    title: "Collaborations | Canary Foundation",
    description:
      "Explore the collaborations and partnerships that help Canary Foundation accelerate early detection research.",
  },
  "/approach/symposium": {
    title: "Canary Symposium | Canary Foundation",
    description:
      "Learn about the Canary Symposium and how it brings researchers together around early cancer detection.",
  },
  "/science/overview": {
    title: "Canary Science | Canary Foundation",
    description:
      "Explore the science behind Canary Foundation's work in early cancer detection.",
  },
  "/science/science": {
    title: "Scientific Focus Areas | Canary Foundation",
    description:
      "Explore the scientific foundations behind Canary Foundation's early detection strategy.",
  },
  "/science/programs": {
    title: "Research Programs | Canary Foundation",
    description:
      "Explore Canary Foundation research programs across tumor types, clinical studies, and translational science.",
  },
  "/science/programs/team-updates": {
    title: "Team Updates | Canary Foundation",
    description:
      "Read current Canary Foundation team updates for ovarian, prostate, and pancreatic early cancer detection programs.",
  },
  "/science/programs/team-updates/ovarian-june-2026": {
    title: "Ovarian Cancer Team Update, June 2026 | Canary Foundation",
    description:
      "Read the approved June 2026 update from the Canary Foundation Ovarian Cancer Team on earlier detection and prevention research.",
  },
  "/science/centers": {
    title: "Research Centers | Canary Foundation",
    description:
      "Learn about the research centers and institutions advancing Canary Foundation's mission.",
  },
  "/science/publications": {
    title: "Publications | Canary Foundation",
    description:
      "Read publications and research outputs supported by Canary Foundation.",
  },
  "/science/funding-by-invitation": {
    title: "Funding By Invitation | Canary Foundation",
    description:
      "Learn about invitation-based funding opportunities connected to Canary Foundation science.",
  },
};

export interface PrefixRouteMetadata {
  prefix: string;
  metadata: RouteMetadata;
}

export const PREFIX_ROUTE_METADATA: PrefixRouteMetadata[] = [
  {
    prefix: "/blog/",
    metadata: EXACT_ROUTE_METADATA["/blog"],
  },
  {
    prefix: "/about/",
    metadata: EXACT_ROUTE_METADATA["/about/overview"],
  },
  {
    prefix: "/approach/",
    metadata: EXACT_ROUTE_METADATA["/approach/overview"],
  },
  {
    prefix: "/science/programs/tumors/",
    metadata: {
      title: "Tumor Programs | Canary Foundation",
      description:
        "Explore tumor-focused early detection programs supported by Canary Foundation.",
    },
  },
  {
    prefix: "/science/programs/",
    metadata: EXACT_ROUTE_METADATA["/science/programs"],
  },
  {
    prefix: "/science/centers/stanford",
    metadata: {
      title: "Canary Center at Stanford | Canary Foundation",
      description:
        "Learn about the Canary Center at Stanford and the translational research happening there.",
    },
  },
  {
    prefix: "/science/centers/",
    metadata: EXACT_ROUTE_METADATA["/science/centers"],
  },
  {
    prefix: "/science/publications/",
    metadata: EXACT_ROUTE_METADATA["/science/publications"],
  },
  {
    prefix: "/science/",
    metadata: EXACT_ROUTE_METADATA["/science/overview"],
  },
];

/** Strip query/hash and trailing slashes; "/" stays "/". */
export function normalizeRoutePath(pathOrUrl: string): string {
  const pathname = pathOrUrl.split("?")[0].split("#")[0] || "/";
  if (pathname === "/") {
    return "/";
  }
  return pathname.replace(/\/+$/, "") || "/";
}

export function buildCanonicalUrl(pathOrUrl: string): string {
  const normalized = normalizeRoutePath(pathOrUrl);
  return `${SITE_ORIGIN}${normalized === "/" ? "/" : normalized}`;
}

/** Resolve metadata for any static route via exact match, then prefix match. */
export function resolveRouteMetadata(pathOrUrl: string): RouteMetadata {
  const path = normalizeRoutePath(pathOrUrl);
  if (EXACT_ROUTE_METADATA[path]) {
    return EXACT_ROUTE_METADATA[path];
  }
  const matchedPrefix = PREFIX_ROUTE_METADATA.find(({ prefix }) =>
    path.startsWith(prefix),
  );
  return matchedPrefix?.metadata ?? DEFAULT_METADATA;
}

// ---------------------------------------------------------------------------
// JSON-LD structured data
// ---------------------------------------------------------------------------

/** Sitewide Organization schema. Also embedded statically in client/index.html. */
export function buildOrganizationJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": ["NGO", "MedicalOrganization"],
    name: SITE_NAME,
    alternateName: "Canary Foundation for Early Cancer Detection",
    url: `${SITE_ORIGIN}/`,
    logo: `${SITE_ORIGIN}/favicon.webp`,
    image: `${SITE_ORIGIN}/opengraph.png`,
    description:
      "Canary Foundation is a nonprofit dedicated solely to the early detection of cancer, funding collaborative research in biomarkers, imaging, and translational science since 2004.",
    foundingDate: "2004",
    taxID: "65-1230251",
    nonprofitStatus: "Nonprofit501c3",
    medicalSpecialty: "Oncologic",
    knowsAbout: [
      "Early cancer detection",
      "Cancer biomarkers",
      "Molecular imaging",
      "Ovarian cancer",
      "Prostate cancer",
      "Pancreatic cancer",
      "Lung cancer",
      "Breast cancer",
    ],
  };
}

export interface PageJsonLdInput {
  title: string;
  description: string;
  url: string;
}

/** Per-page WebPage schema for non-article routes. */
export function buildWebPageJsonLd({
  title,
  description,
  url,
}: PageJsonLdInput): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url,
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: `${SITE_ORIGIN}/`,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: `${SITE_ORIGIN}/`,
    },
  };
}

export interface ArticleJsonLdInput {
  headline: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
  author?: string;
  image?: string;
  keywords?: string[];
}

/** Per-post Article schema for /blog/:slug routes. */
export function buildArticleJsonLd({
  headline,
  description,
  url,
  datePublished,
  dateModified,
  author,
  image,
  keywords,
}: ArticleJsonLdInput): Record<string, unknown> {
  const jsonLd: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    image: image ?? `${SITE_ORIGIN}/opengraph.png`,
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_ORIGIN}/favicon.webp`,
      },
    },
  };

  if (datePublished) jsonLd.datePublished = datePublished;
  jsonLd.dateModified = dateModified ?? datePublished ?? undefined;
  if (author) jsonLd.author = { "@type": "Person", name: author };
  if (keywords && keywords.length > 0) jsonLd.keywords = keywords.join(", ");

  return jsonLd;
}

/**
 * Serialize a JSON-LD object into a script tag string, escaping `<` so the
 * payload can never break out of the <script> element.
 */
export function renderJsonLdScript(
  data: Record<string, unknown>,
  id?: string,
): string {
  const json = JSON.stringify(data).replace(/</g, "\\u003c");
  const idAttr = id ? ` id="${id}"` : "";
  return `<script type="application/ld+json"${idAttr}>${json}</script>`;
}

/** DOM id used for the swappable per-page JSON-LD script (server + client). */
export const PAGE_JSONLD_ELEMENT_ID = "page-jsonld";
