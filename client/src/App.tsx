import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Suspense, lazy, useEffect } from "react";
import { initGA } from "./lib/analytics";
import { useAnalytics } from "./hooks/use-analytics";
import {
  resolveRouteMetadata,
  NOT_FOUND_METADATA,
  normalizeRoutePath,
  buildCanonicalUrl,
  buildWebPageJsonLd,
  buildArticleJsonLd,
  PAGE_JSONLD_ELEMENT_ID,
} from "@shared/seo";
import { blogPosts } from "@/data/blog-posts";
import seoRoutes from "../../seo/routes.json";

const KNOWN_CLIENT_STATIC_ROUTES = new Set([...seoRoutes.routes, "/take-action"]);

const Home = lazy(() => import("@/pages/home"));
const Contact = lazy(() => import("@/pages/contact"));
const Donate = lazy(() => import("@/pages/donate"));
const Blog = lazy(() => import("@/pages/blog"));
const BlogPost = lazy(() => import("@/pages/blog-post"));
const AboutOverview = lazy(() => import("@/pages/about-overview"));
const FoundersStory = lazy(() => import("@/pages/founders-story"));
const Staff = lazy(() => import("@/pages/staff"));
const BoardDirectors = lazy(() => import("@/pages/board-directors"));
const LeadershipCouncil = lazy(() => import("@/pages/leadership-council"));
const ScientificLeadership = lazy(() => import("@/pages/scientific-leadership"));
const Financials = lazy(() => import("@/pages/financials"));
const ApproachOverview = lazy(() => import("@/pages/approach-overview"));
const Collaborations = lazy(() => import("@/pages/collaborations"));
const Symposium = lazy(() => import("@/pages/symposium"));
const CanaryScience = lazy(() => import("@/pages/canary-science"));
const Science = lazy(() => import("@/pages/science"));
const Programs = lazy(() => import("@/pages/programs"));
const TeamUpdates = lazy(() => import("@/pages/team-updates"));
const OvarianJune2026TeamUpdate = lazy(
  () => import("@/pages/team-updates/ovarian-june-2026"),
);
const Centers = lazy(() => import("@/pages/centers"));
const Publications = lazy(() => import("@/pages/publications"));
const FundingByInvitation = lazy(() => import("@/pages/funding-by-invitation"));
const Imaging = lazy(() => import("@/pages/imaging"));
const Biomarkers = lazy(() => import("@/pages/biomarkers"));
const TumorsOverview = lazy(() => import("@/pages/tumors-overview"));
const BreastCancer = lazy(() => import("@/pages/breast-cancer"));
const LungCancer = lazy(() => import("@/pages/lung-cancer"));
const OvarianCancer = lazy(() => import("@/pages/ovarian-cancer"));
const PancreaticCancer = lazy(() => import("@/pages/pancreatic-cancer"));
const ProstateCancer = lazy(() => import("@/pages/prostate-cancer"));
const ClinicalProgress = lazy(() => import("@/pages/clinical-progress"));
const ClinicalStudies = lazy(() => import("@/pages/clinical-studies"));
const StanfordOverview = lazy(() => import("@/pages/stanford-overview"));
const StanfordForScientists = lazy(() => import("@/pages/stanford-for-scientists"));
const StanfordBiomarkers = lazy(() => import("@/pages/stanford-biomarkers"));
const StanfordImaging = lazy(() => import("@/pages/stanford-imaging"));
const FHCC = lazy(() => import("@/pages/fhcc"));
const Fellowships = lazy(() => import("@/pages/fellowships"));
const SeedGrants = lazy(() => import("@/pages/seed-grants"));
const NotFound = lazy(() => import("@/pages/not-found"));

function setMetaDescription(content: string) {
  setMetaTag("name", "description", content);
}

function setMetaTag(attribute: "name" | "property", key: string, content: string) {
  const existingTag = document.querySelector(`meta[${attribute}="${key}"]`);
  if (existingTag) {
    existingTag.setAttribute("content", content);
    return;
  }

  const metaTag = document.createElement("meta");
  metaTag.setAttribute(attribute, key);
  metaTag.content = content;
  document.head.appendChild(metaTag);
}

function setCanonicalUrl(canonicalUrl: string) {
  let canonicalTag = document.querySelector<HTMLLinkElement>(
    'link[rel="canonical"]',
  );

  if (!canonicalTag) {
    canonicalTag = document.createElement("link");
    canonicalTag.rel = "canonical";
    document.head.appendChild(canonicalTag);
  }

  canonicalTag.href = canonicalUrl;
  setMetaTag("property", "og:url", canonicalUrl);
}

function upsertJsonLd(data: Record<string, unknown>) {
  let script = document.querySelector<HTMLScriptElement>(
    `script#${PAGE_JSONLD_ELEMENT_ID}`,
  );

  if (!script) {
    script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = PAGE_JSONLD_ELEMENT_ID;
    document.head.appendChild(script);
  }

  script.textContent = JSON.stringify(data);
}

function setRobotsDirective(isKnownRoute: boolean) {
  const existingTag = document.querySelector<HTMLMetaElement>(
    'meta[name="robots"]',
  );

  if (isKnownRoute) {
    existingTag?.remove();
    return;
  }

  setMetaTag("name", "robots", "noindex, nofollow");
}

// Mirrors resolvePageSeo() in server/vite.ts so SPA navigation produces the
// same title/description/canonical/JSON-LD that the server rendered into the
// initial HTML. Route metadata and JSON-LD builders are shared via @shared/seo.
function resolveClientPageSeo(location: string) {
  const routePath = normalizeRoutePath(location);
  const canonicalUrl = buildCanonicalUrl(routePath);

  if (routePath.startsWith("/blog/")) {
    const slug = routePath.slice("/blog/".length);
    const post = blogPosts.find((entry) => entry.slug === slug);
    if (post) {
      return {
        metadata: {
          title: `${post.title} | Canary Foundation`,
          description: post.excerpt,
        },
        canonicalUrl,
        jsonLd: buildArticleJsonLd({
          headline: post.title,
          description: post.excerpt,
          url: canonicalUrl,
          datePublished: post.publishedDate ?? post.date,
          dateModified: post.date,
          author: post.author,
          keywords: post.tags,
        }),
        isKnownRoute: true,
      };
    }
  }

  const isKnownRoute = KNOWN_CLIENT_STATIC_ROUTES.has(routePath);
  const metadata = isKnownRoute
    ? resolveRouteMetadata(routePath)
    : NOT_FOUND_METADATA;
  return {
    metadata,
    canonicalUrl,
    jsonLd: buildWebPageJsonLd({
      title: metadata.title,
      description: metadata.description,
      url: canonicalUrl,
    }),
    isKnownRoute,
  };
}

function RouteLoadingFallback() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-6 text-center text-sm font-medium text-slate-700">
      Loading Canary Foundation...
    </div>
  );
}

function Router() {
  // Track page views when routes change
  const [location] = useLocation();
  useAnalytics();

  useEffect(() => {
    const { metadata, canonicalUrl, jsonLd, isKnownRoute } =
      resolveClientPageSeo(location);
    document.title = metadata.title;
    setMetaDescription(metadata.description);
    setMetaTag("property", "og:title", metadata.title);
    setMetaTag("property", "og:description", metadata.description);
    setMetaTag("name", "twitter:title", metadata.title);
    setMetaTag("name", "twitter:description", metadata.description);
    setCanonicalUrl(canonicalUrl);
    setRobotsDirective(isKnownRoute);
    upsertJsonLd(jsonLd);
  }, [location]);

  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/donate" component={Donate} />
        <Route path="/take-action" component={Donate} />
        <Route path="/blog" component={Blog} />
        <Route path="/blog/:slug" component={BlogPost} />

        {/* About Canary pages */}
        <Route path="/about/overview" component={AboutOverview} />
        <Route path="/about/founders-story" component={FoundersStory} />
        <Route path="/about/staff" component={Staff} />
        <Route path="/about/board-directors" component={BoardDirectors} />
        <Route path="/about/leadership-council" component={LeadershipCouncil} />
        <Route path="/about/scientific-leadership" component={ScientificLeadership} />
        <Route path="/about/financials" component={Financials} />

        {/* Canary Approach pages */}
        <Route path="/approach/overview" component={ApproachOverview} />
        <Route path="/approach/collaborations" component={Collaborations} />
        <Route path="/approach/symposium" component={Symposium} />

        {/* Canary Science pages */}
        <Route path="/science/overview" component={CanaryScience} />
        <Route path="/science/science" component={Science} />
        <Route path="/science/programs" component={Programs} />
        <Route path="/science/programs/team-updates" component={TeamUpdates} />
        <Route
          path="/science/programs/team-updates/ovarian-june-2026"
          component={OvarianJune2026TeamUpdate}
        />
        <Route path="/science/centers" component={Centers} />
        <Route path="/science/publications" component={Publications} />
        <Route
          path="/science/funding-by-invitation"
          component={FundingByInvitation}
        />
        <Route path="/science/science/imaging" component={Imaging} />
        <Route path="/science/science/biomarkers" component={Biomarkers} />

        {/* Tumor-specific pages under Programs */}
        <Route path="/science/programs/tumors" component={TumorsOverview} />
        <Route path="/science/programs/tumors/breast" component={BreastCancer} />
        <Route path="/science/programs/tumors/lung" component={LungCancer} />
        <Route
          path="/science/programs/tumors/ovarian"
          component={OvarianCancer}
        />
        <Route
          path="/science/programs/tumors/pancreatic"
          component={PancreaticCancer}
        />
        <Route
          path="/science/programs/tumors/prostate"
          component={ProstateCancer}
        />

        {/* Clinical Progress and Studies under Programs */}
        <Route
          path="/science/programs/clinical-progress"
          component={ClinicalProgress}
        />
        <Route
          path="/science/programs/clinical-studies"
          component={ClinicalStudies}
        />

        {/* Stanford Center pages */}
        <Route path="/science/centers/stanford" component={StanfordOverview} />
        <Route
          path="/science/centers/stanford/for-scientists"
          component={StanfordForScientists}
        />
        <Route
          path="/science/centers/stanford/biomarkers"
          component={StanfordBiomarkers}
        />
        <Route
          path="/science/centers/stanford/imaging"
          component={StanfordImaging}
        />

        {/* FHCC page */}
        <Route path="/science/centers/fhcc" component={FHCC} />

        {/* Publications sub-pages */}
        <Route
          path="/science/publications/fellowships"
          component={Fellowships}
        />
        <Route path="/science/publications/seed-grants" component={SeedGrants} />

        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  // Initialize Google Analytics when app loads
  useEffect(() => {
    initGA();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
