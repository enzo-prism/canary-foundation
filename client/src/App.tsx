import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Suspense, lazy, useEffect } from "react";
import { initGA } from "./lib/analytics";
import { useAnalytics } from "./hooks/use-analytics";

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

const DEFAULT_METADATA = {
  title: "Canary Foundation - Early Cancer Detection Research",
  description:
    "Canary Foundation advances early cancer detection research through collaborative science, biomarker discovery, imaging innovation, and translational partnerships.",
};

const EXACT_ROUTE_METADATA: Record<string, { title: string; description: string }> = {
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

const PREFIX_ROUTE_METADATA = [
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

function setMetaDescription(content: string) {
  const existingTag = document.querySelector('meta[name="description"]');
  if (existingTag) {
    existingTag.setAttribute("content", content);
    return;
  }

  const metaTag = document.createElement("meta");
  metaTag.name = "description";
  metaTag.content = content;
  document.head.appendChild(metaTag);
}

function resolveRouteMetadata(location: string) {
  if (EXACT_ROUTE_METADATA[location]) {
    return EXACT_ROUTE_METADATA[location];
  }

  const matchedPrefix = PREFIX_ROUTE_METADATA.find(({ prefix }) =>
    location.startsWith(prefix),
  );
  return matchedPrefix?.metadata ?? DEFAULT_METADATA;
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
    const metadata = resolveRouteMetadata(location);
    document.title = metadata.title;
    setMetaDescription(metadata.description);
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
