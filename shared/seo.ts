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
export const ORGANIZATION_ID = `${SITE_ORIGIN}/#organization`;
export const WEBSITE_ID = `${SITE_ORIGIN}/#website`;

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
    title: "Contact Canary Foundation",
    description:
      "Get in touch with Canary Foundation about early cancer detection research, partnerships, and ways to support the mission.",
  },
  "/donate": {
    title: "Donate to Early Cancer Detection | Canary Foundation",
    description:
      "Support Canary Foundation's mission to detect cancer early and fund the science that makes earlier diagnosis possible.",
  },
  "/take-action": {
    title: "Donate to Early Cancer Detection | Canary Foundation",
    description:
      "Support Canary Foundation's mission to detect cancer early and fund the science that makes earlier diagnosis possible.",
  },
  "/blog": {
    title: "Early Cancer Detection News & Research | Canary Foundation",
    description:
      "Read the latest research updates, oral histories, and stories from Canary Foundation.",
  },
  "/blog/april-2026-science-meetings-stanford-ucsd": {
    title: "April 2026 Science Meetings | Canary Foundation",
    description:
      "Canary Foundation researchers and institutional leaders gathered at Stanford and UC San Diego to advance early detection, imaging, and translational ultrasound.",
  },
  "/about/overview": {
    title: "About Canary Foundation | Early Cancer Detection Nonprofit",
    description:
      "Learn about Canary Foundation's mission, history, and commitment to earlier cancer detection.",
  },
  "/about/founders-story": {
    title: "Don Listwin | Founder's Story & Oral History | Canary Foundation",
    description:
      "Explore Don Listwin's founder story, oral history, and the personal journey that shaped Canary Foundation.",
  },
  "/about/staff": {
    title: "Our Staff | Canary Foundation",
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
  "/about/awards": {
    title: "Awards | Canary Foundation",
    description:
      "Canary Foundation presents two annual awards recognizing outstanding service/support and scientific research in cancer early detection. Nominations are open for future years.",
  },
  "/about/awards/listwin": {
    title: "Don Listwin Award | Canary Foundation",
    description:
      "The Don Listwin Award for Outstanding Service/Support for Cancer Early Detection recognizes sustained or singular contributions to the field. Lisa Newcomb, PhD, is the inaugural recipient.",
  },
  "/about/awards/gambhir": {
    title: "Sanjiv “Sam” Gambhir Memorial Award | Canary Foundation",
    description:
      "The Sanjiv “Sam” Gambhir Memorial Award for Cancer Early Detection recognizes outstanding sustained commitment or a singular scientific research achievement. Nominations are open for future years.",
  },
  "/approach/overview": {
    title: "Canary Approach | Canary Foundation",
    description:
      "Learn how Canary Foundation approaches early cancer detection through collaborative science, biomarkers, and imaging.",
  },
  "/science/overview": {
    title: "Canary Science | Canary Foundation",
    description:
      "Explore the science behind Canary Foundation's work in early cancer detection.",
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
      "Read the June 2026 update from the Canary Foundation Ovarian Cancer Team on earlier detection and prevention research.",
  },
  "/science/programs/team-updates/prostate-july-2026": {
    title: "Prostate Cancer Team Update, July 2026 | Canary Foundation",
    description:
      "Read the July 2026 Canary Foundation Prostate Cancer Team update on active surveillance, inherited-risk screening, imaging, and patient tools.",
  },
  "/science/programs/team-updates/pancreas-july-2026": {
    title: "Pancreas Cancer Team Update, July 2026 | Canary Foundation",
    description:
      "Read the July 2026 Canary Foundation Pancreas Cancer Team update on high-risk cohorts, portable ultrasound screening, cyst biomarkers, and blood-test evaluation.",
  },
  "/science/programs/tumors/prostate": {
    title: "Prostate Cancer Research | Canary Foundation",
    description:
      "Explore Canary Foundation prostate cancer research, including PASS, PATROL, advanced imaging, and patient-centered care tools.",
  },
  "/science/centers": {
    title: "Research Centers | Canary Foundation",
    description:
      "Learn about the research centers and institutions advancing Canary Foundation's mission.",
  },
  "/science/programs/tumors": {
    title: "Cancer Research by Tumor Type | Canary Foundation",
    description:
      "Explore Canary Foundation research into earlier detection of lung, ovarian, pancreatic, and prostate cancers through biomarkers and imaging.",
  },
  "/science/programs/tumors/lung": {
    title: "Lung Cancer Early Detection Research | Canary Foundation",
    description:
      "Learn about Canary Foundation lung cancer research into blood biomarkers, exosomes, and imaging to help distinguish benign from malignant lung nodules.",
  },
  "/science/programs/tumors/ovarian": {
    title: "Ovarian Cancer Early Detection Research | Canary Foundation",
    description:
      "Explore Canary Foundation ovarian cancer research in biomarkers, fallopian tube biology, and prevention, and read the latest ovarian team update.",
  },
  "/science/programs/tumors/pancreatic": {
    title: "Pancreatic Cancer Early Detection Research | Canary Foundation",
    description:
      "Explore Canary Foundation pancreatic cancer research in biomarkers, molecular imaging, and point-of-care ultrasound for earlier detection.",
  },
  "/science/programs/clinical-progress": {
    title: "Early Detection: Clinical Research Progress | Canary Foundation",
    description:
      "Follow Canary Foundation research from laboratory discovery to clinical studies, including biomarkers, imaging, and prostate cancer active surveillance.",
  },
  "/science/programs/clinical-studies": {
    title: "Early Cancer Detection Clinical Studies | Canary Foundation",
    description:
      "Explore clinical studies supported by Canary Foundation, including prostate cancer active surveillance and research into biomarkers and imaging.",
  },
  "/science/centers/stanford": {
    title: "Canary Center at Stanford | Canary Foundation",
    description:
      "Explore the Canary Center at Stanford, where scientists collaborate on biomarkers, molecular imaging, and translating early cancer detection research.",
  },
  "/science/centers/stanford/for-scientists": {
    title: "For Scientists: Canary Center at Stanford | Canary Foundation",
    description:
      "Find research resources, collaboration information, and contacts for scientists interested in early cancer detection at the Canary Center at Stanford.",
  },
  "/science/centers/stanford/biomarkers": {
    title: "Stanford Cancer Biomarker Research | Canary Foundation",
    description:
      "Learn how Canary Center at Stanford researchers study proteins, genetic signals, and other biomarkers to advance early cancer detection.",
  },
  "/science/centers/stanford/imaging": {
    title: "Stanford Cancer Imaging Research | Canary Foundation",
    description:
      "Explore molecular imaging research at the Canary Center at Stanford, including ultrasound and technologies designed to reveal cancer earlier.",
  },
  "/science/centers/fhcc": {
    title: "Fred Hutch Cancer Center Partnership | Canary Foundation",
    description:
      "Learn about Canary Foundation’s partnership with Fred Hutch Cancer Center in cancer biomarkers, early detection, and prostate cancer active surveillance.",
  },
  "/science/funding-by-invitation": {
    title: "Funding By Invitation | Canary Foundation",
    description:
      "Canary Foundation funds research by invitation only. Learn about the research award process, scientific review, and strategic early detection priorities.",
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
    "@type": "NGO",
    "@id": ORGANIZATION_ID,
    name: SITE_NAME,
    alternateName: "Canary Foundation for Early Cancer Detection",
    url: `${SITE_ORIGIN}/`,
    logo: `${SITE_ORIGIN}/favicon.webp`,
    image: `${SITE_ORIGIN}/opengraph.png`,
    description:
      "Canary Foundation is a nonprofit dedicated solely to the early detection of cancer, funding collaborative research in biomarkers, imaging, and translational science since 2004.",
    foundingDate: "2004",
    taxID: "65-1230251",
    nonprofitStatus: "https://schema.org/Nonprofit501c3",
    founder: {
      "@type": "Person",
      name: "Don Listwin",
      url: `${SITE_ORIGIN}/about/founders-story`,
    },
    email: "info@canaryfoundation.org",
    address: {
      "@type": "PostalAddress",
      postOfficeBoxNumber: "620134",
      addressLocality: "Woodside",
      addressRegion: "CA",
      postalCode: "94062-9991",
      addressCountry: "US",
    },
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

/** Stable site identity shared by every page and article. No nonexistent search action. */
export function buildWebSiteJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: SITE_NAME,
    url: `${SITE_ORIGIN}/`,
    inLanguage: "en-US",
    publisher: { "@id": ORGANIZATION_ID },
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
    "@type": url === `${SITE_ORIGIN}/contact` ? "ContactPage"
      : url === `${SITE_ORIGIN}/about/overview` ? "AboutPage" : "WebPage",
    "@id": `${url}#webpage`,
    inLanguage: "en-US",
    name: title,
    description,
    url,
    isPartOf: {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      name: SITE_NAME,
      url: `${SITE_ORIGIN}/`,
    },
    publisher: {
      "@type": "Organization",
      "@id": ORGANIZATION_ID,
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
    "@id": `${url}#article`,
    inLanguage: "en-US",
    isPartOf: { "@id": WEBSITE_ID },
    headline,
    description,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    image: image ?? `${SITE_ORIGIN}/opengraph.png`,
    publisher: {
      "@type": "Organization",
      "@id": ORGANIZATION_ID,
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_ORIGIN}/favicon.webp`,
      },
    },
  };

  if (datePublished) jsonLd.datePublished = datePublished;
  // A recording/event date is not an article modification date. Never emit a
  // modification before publication (the oral history has both date concepts).
  if (dateModified && (!datePublished || dateModified >= datePublished)) {
    jsonLd.dateModified = dateModified;
  }
  if (author) {
    const isOrganization = author === SITE_NAME || author.startsWith(`${SITE_NAME} `);
    jsonLd.author = {
      "@type": isOrganization ? "Organization" : "Person",
      name: author,
      ...(author === SITE_NAME ? { "@id": ORGANIZATION_ID, url: `${SITE_ORIGIN}/` } : {}),
      ...(author === "Don Listwin" ? { url: `${SITE_ORIGIN}/about/founders-story` } : {}),
    };
  }
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
