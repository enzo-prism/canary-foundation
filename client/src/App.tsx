import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Suspense, lazy, useEffect, useState, useRef } from "react";
import HomeOpeningSplash from "@/components/home-opening-splash";
import { initGA } from "./lib/analytics";
import { useAnalytics } from "./hooks/use-analytics";
import { normalizeRoutePath, PAGE_JSONLD_ELEMENT_ID } from "@shared/seo";
import { routeModuleId } from "@shared/route-module-ids";

const pageModules: Record<string, () => Promise<{ default: React.ComponentType }>> = {
  "src/pages/home.tsx": () => import("@/pages/home"),
  "src/pages/contact.tsx": () => import("@/pages/contact"),
  "src/pages/donate.tsx": () => import("@/pages/donate"),
  "src/pages/blog.tsx": () => import("@/pages/blog"),
  "src/pages/blog-post.tsx": () => import("@/pages/blog-post"),
  "src/pages/about-overview.tsx": () => import("@/pages/about-overview"),
  "src/pages/founders-story.tsx": () => import("@/pages/founders-story"),
  "src/pages/staff.tsx": () => import("@/pages/staff"),
  "src/pages/board-directors.tsx": () => import("@/pages/board-directors"),
  "src/pages/leadership-council.tsx": () => import("@/pages/leadership-council"),
  "src/pages/scientific-leadership.tsx": () => import("@/pages/scientific-leadership"),
  "src/pages/financials.tsx": () => import("@/pages/financials"),
  "src/pages/awards.tsx": () => import("@/pages/awards"),
  "src/pages/awards-listwin.tsx": () => import("@/pages/awards-listwin"),
  "src/pages/awards-gambhir.tsx": () => import("@/pages/awards-gambhir"),
  "src/pages/approach-overview.tsx": () => import("@/pages/approach-overview"),
  "src/pages/canary-science.tsx": () => import("@/pages/canary-science"),
  "src/pages/programs.tsx": () => import("@/pages/programs"),
  "src/pages/team-updates.tsx": () => import("@/pages/team-updates"),
  "src/pages/team-updates/ovarian-june-2026.tsx": () => import("@/pages/team-updates/ovarian-june-2026"),
  "src/pages/team-updates/prostate-july-2026.tsx": () => import("@/pages/team-updates/prostate-july-2026"),
  "src/pages/team-updates/pancreas-july-2026.tsx": () => import("@/pages/team-updates/pancreas-july-2026"),
  "src/pages/centers.tsx": () => import("@/pages/centers"),
  "src/pages/funding-by-invitation.tsx": () => import("@/pages/funding-by-invitation"),
  "src/pages/tumors-overview.tsx": () => import("@/pages/tumors-overview"),
  "src/pages/lung-cancer.tsx": () => import("@/pages/lung-cancer"),
  "src/pages/ovarian-cancer.tsx": () => import("@/pages/ovarian-cancer"),
  "src/pages/pancreatic-cancer.tsx": () => import("@/pages/pancreatic-cancer"),
  "src/pages/prostate-cancer.tsx": () => import("@/pages/prostate-cancer"),
  "src/pages/clinical-progress.tsx": () => import("@/pages/clinical-progress"),
  "src/pages/clinical-studies.tsx": () => import("@/pages/clinical-studies"),
  "src/pages/stanford-overview.tsx": () => import("@/pages/stanford-overview"),
  "src/pages/stanford-for-scientists.tsx": () => import("@/pages/stanford-for-scientists"),
  "src/pages/stanford-biomarkers.tsx": () => import("@/pages/stanford-biomarkers"),
  "src/pages/stanford-imaging.tsx": () => import("@/pages/stanford-imaging"),
  "src/pages/fhcc.tsx": () => import("@/pages/fhcc"),
  "src/pages/not-found.tsx": () => import("@/pages/not-found"),
};
function loadPage(moduleId: string) {
  return pageModules[moduleId]();
}

const Home = lazy(() => loadPage("src/pages/home.tsx"));
const Contact = lazy(() => loadPage("src/pages/contact.tsx"));
const Donate = lazy(() => loadPage("src/pages/donate.tsx"));
const Blog = lazy(() => loadPage("src/pages/blog.tsx"));
const BlogPost = lazy(() => loadPage("src/pages/blog-post.tsx"));
const AboutOverview = lazy(() => loadPage("src/pages/about-overview.tsx"));
const FoundersStory = lazy(() => loadPage("src/pages/founders-story.tsx"));
const Staff = lazy(() => loadPage("src/pages/staff.tsx"));
const BoardDirectors = lazy(() => loadPage("src/pages/board-directors.tsx"));
const LeadershipCouncil = lazy(() => loadPage("src/pages/leadership-council.tsx"));
const ScientificLeadership = lazy(() => loadPage("src/pages/scientific-leadership.tsx"));
const Financials = lazy(() => loadPage("src/pages/financials.tsx"));
const Awards = lazy(() => loadPage("src/pages/awards.tsx"));
const AwardsListwin = lazy(() => loadPage("src/pages/awards-listwin.tsx"));
const AwardsGambhir = lazy(() => loadPage("src/pages/awards-gambhir.tsx"));
const ApproachOverview = lazy(() => loadPage("src/pages/approach-overview.tsx"));
const CanaryScience = lazy(() => loadPage("src/pages/canary-science.tsx"));
const Programs = lazy(() => loadPage("src/pages/programs.tsx"));
const TeamUpdates = lazy(() => loadPage("src/pages/team-updates.tsx"));
const OvarianJune2026TeamUpdate = lazy(() => loadPage("src/pages/team-updates/ovarian-june-2026.tsx"));
const ProstateJuly2026TeamUpdate = lazy(() => loadPage("src/pages/team-updates/prostate-july-2026.tsx"));
const PancreasJuly2026TeamUpdate = lazy(() => loadPage("src/pages/team-updates/pancreas-july-2026.tsx"));
const Centers = lazy(() => loadPage("src/pages/centers.tsx"));
const FundingByInvitation = lazy(() => loadPage("src/pages/funding-by-invitation.tsx"));
const TumorsOverview = lazy(() => loadPage("src/pages/tumors-overview.tsx"));
const LungCancer = lazy(() => loadPage("src/pages/lung-cancer.tsx"));
const OvarianCancer = lazy(() => loadPage("src/pages/ovarian-cancer.tsx"));
const PancreaticCancer = lazy(() => loadPage("src/pages/pancreatic-cancer.tsx"));
const ProstateCancer = lazy(() => loadPage("src/pages/prostate-cancer.tsx"));
const ClinicalProgress = lazy(() => loadPage("src/pages/clinical-progress.tsx"));
const ClinicalStudies = lazy(() => loadPage("src/pages/clinical-studies.tsx"));
const StanfordOverview = lazy(() => loadPage("src/pages/stanford-overview.tsx"));
const StanfordForScientists = lazy(() => loadPage("src/pages/stanford-for-scientists.tsx"));
const StanfordBiomarkers = lazy(() => loadPage("src/pages/stanford-biomarkers.tsx"));
const StanfordImaging = lazy(() => loadPage("src/pages/stanford-imaging.tsx"));
const FHCC = lazy(() => loadPage("src/pages/fhcc.tsx"));
const NotFound = lazy(() => loadPage("src/pages/not-found.tsx"));

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

function RouteLoadingFallback() {
  return (
    <div className="min-h-screen bg-[#fcfbf7]" role="status" aria-live="polite" aria-busy="true">
      <span className="sr-only">Loading page…</span>
      <div aria-hidden="true">
        <div className="border-b border-slate-200/70 bg-white">
          <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6 lg:px-8">
            <div className="h-9 w-36 rounded bg-slate-200/70" />
            <div className="hidden gap-7 md:flex">
              {[0, 1, 2].map(item => <div key={item} className="h-3 w-16 rounded bg-slate-200/60" />)}
            </div>
            <div className="h-10 w-24 rounded-full bg-[#e9bc32]/25" />
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="mb-8 h-3 w-28 rounded bg-slate-200/70" />
          <div className="h-10 w-3/4 max-w-xl rounded bg-slate-200/70 md:h-14" />
          <div className="mt-4 h-10 w-1/2 max-w-md rounded bg-slate-200/70 md:h-14" />
          <div className="mt-9 h-3 w-4/5 max-w-lg rounded bg-slate-200/50" />
          <div className="mt-3 h-3 w-3/5 max-w-md rounded bg-slate-200/50" />
        </div>
      </div>
    </div>
  );
}

function Router() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  // Track page views when routes change
  const [location] = useLocation();
  useAnalytics();
  const initialLocation = useRef(location);
  const hasNavigated = useRef(false);

  useEffect(() => {
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } }).connection;
    if (connection?.saveData || /(^|-)2g$/.test(connection?.effectiveType ?? "")) return;
    const prefetched = new Set<string>();
    const prefetch = (event: Event) => {
      const link = (event.target as Element)?.closest?.("a[href]");
      if (!link || link.hasAttribute("download")) return;
      const url = new URL(link.getAttribute("href")!, window.location.href);
      if (url.origin !== window.location.origin || url.pathname === location) return;
      const moduleId = routeModuleId(normalizeRoutePath(url.pathname));
      if (prefetched.has(moduleId)) return;
      prefetched.add(moduleId);
      void loadPage(moduleId).catch(() => prefetched.delete(moduleId));
    };
    document.addEventListener("pointerover", prefetch, { passive: true });
    document.addEventListener("focusin", prefetch);
    return () => {
      document.removeEventListener("pointerover", prefetch);
      document.removeEventListener("focusin", prefetch);
    };
  }, [location]);

  useEffect(() => {
    // Initial metadata is already rendered by the server. Keep the article
    // content dependency out of the critical hydration bundle.
    if (!hasNavigated.current && location === initialLocation.current) return;
    hasNavigated.current = true;
    let cancelled = false;
    void import("@shared/page-seo").then(({ resolvePageSeo }) => {
      if (cancelled) return;
      const { metadata, canonicalUrl, jsonLd, ogType, isKnownRoute } = resolvePageSeo(location);
      document.title = metadata.title;
      setMetaTag("property", "og:type", ogType);
      setMetaDescription(metadata.description);
      setMetaTag("property", "og:title", metadata.title);
      setMetaTag("property", "og:description", metadata.description);
      setMetaTag("name", "twitter:title", metadata.title);
      setMetaTag("name", "twitter:description", metadata.description);
      setCanonicalUrl(canonicalUrl);
      setRobotsDirective(isKnownRoute);
      upsertJsonLd(jsonLd);
    });
    return () => { cancelled = true; };
  }, [location]);

  return (
    <>
      {mounted && normalizeRoutePath(location) === "/" ? <HomeOpeningSplash /> : null}
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
        <Route path="/about/awards" component={Awards} />
        <Route path="/about/awards/listwin" component={AwardsListwin} />
        <Route path="/about/awards/gambhir" component={AwardsGambhir} />

        {/* Canary Approach pages */}
        <Route path="/approach/overview" component={ApproachOverview} />

        {/* Canary Science pages */}
        <Route path="/science/overview" component={CanaryScience} />
        <Route path="/science/programs" component={Programs} />
        <Route path="/science/programs/team-updates" component={TeamUpdates} />
        <Route
          path="/science/programs/team-updates/ovarian-june-2026"
          component={OvarianJune2026TeamUpdate}
        />
        <Route
          path="/science/programs/team-updates/prostate-july-2026"
          component={ProstateJuly2026TeamUpdate}
        />
        <Route
          path="/science/programs/team-updates/pancreas-july-2026"
          component={PancreasJuly2026TeamUpdate}
        />
        <Route path="/science/centers" component={Centers} />
        <Route
          path="/science/funding-by-invitation"
          component={FundingByInvitation}
        />

        {/* Tumor-specific pages under Programs */}
        <Route path="/science/programs/tumors" component={TumorsOverview} />
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

        <Route component={NotFound} />
      </Switch>
      </Suspense>
    </>
  );
}

function App({ queryClientInstance = queryClient }: { queryClientInstance?: QueryClient }) {
  // Initialize Google Analytics when app loads
  useEffect(() => {
    initGA();
  }, []);

  return (
    <QueryClientProvider client={queryClientInstance}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
