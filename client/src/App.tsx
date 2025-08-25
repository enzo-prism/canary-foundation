import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect } from "react";
import { initGA } from "./lib/analytics";
import { useAnalytics } from "./hooks/use-analytics";
import Home from "@/pages/home";
import Blog from "@/pages/blog";
import BlogPost from "@/pages/blog-post";
import AboutOverview from "@/pages/about-overview";
import FoundersStory from "@/pages/founders-story";
import Staff from "@/pages/staff";
import BoardDirectors from "@/pages/board-directors";
import LeadershipCouncil from "@/pages/leadership-council";
import ScientificLeadership from "@/pages/scientific-leadership";
import Financials from "@/pages/financials";
import CanaryApproach from "@/pages/canary-approach";
import ApproachOverview from "@/pages/approach-overview";
import Collaborations from "@/pages/collaborations";
import Symposium from "@/pages/symposium";
import CanaryScience from "@/pages/canary-science";
import Science from "@/pages/science";
import Programs from "@/pages/programs";
import Centers from "@/pages/centers";
import Publications from "@/pages/publications";
import FundingByInvitation from "@/pages/funding-by-invitation";
import Imaging from "@/pages/imaging";
import Biomarkers from "@/pages/biomarkers";
// Tumor-specific pages
import TumorsOverview from "@/pages/tumors-overview";
import BreastCancer from "@/pages/breast-cancer";
import LungCancer from "@/pages/lung-cancer";
import OvarianCancer from "@/pages/ovarian-cancer";
import PancreaticCancer from "@/pages/pancreatic-cancer";
import ProstateCancer from "@/pages/prostate-cancer";
// Clinical Studies
import ClinicalProgress from "@/pages/clinical-progress";
import ClinicalStudies from "@/pages/clinical-studies";
// Stanford Center pages
import StanfordOverview from "@/pages/stanford-overview";
import StanfordForScientists from "@/pages/stanford-for-scientists";
import StanfordBiomarkers from "@/pages/stanford-biomarkers";
import StanfordImaging from "@/pages/stanford-imaging";
// FHCC
import FHCC from "@/pages/fhcc";
// Publications pages
import Fellowships from "@/pages/fellowships";
import SeedGrants from "@/pages/seed-grants";
import NotFound from "@/pages/not-found";

function Router() {
  // Track page views when routes change
  useAnalytics();
  return (
    <Switch>
      <Route path="/" component={Home} />
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
      <Route path="/science/funding-by-invitation" component={FundingByInvitation} />
      <Route path="/science/science/imaging" component={Imaging} />
      <Route path="/science/science/biomarkers" component={Biomarkers} />
      
      {/* Tumor-specific pages under Programs */}
      <Route path="/science/programs/tumors" component={TumorsOverview} />
      <Route path="/science/programs/tumors/breast" component={BreastCancer} />
      <Route path="/science/programs/tumors/lung" component={LungCancer} />
      <Route path="/science/programs/tumors/ovarian" component={OvarianCancer} />
      <Route path="/science/programs/tumors/pancreatic" component={PancreaticCancer} />
      <Route path="/science/programs/tumors/prostate" component={ProstateCancer} />
      
      {/* Clinical Progress and Studies under Programs */}
      <Route path="/science/programs/clinical-progress" component={ClinicalProgress} />
      <Route path="/science/programs/clinical-studies" component={ClinicalStudies} />
      
      {/* Stanford Center pages */}
      <Route path="/science/centers/stanford" component={StanfordOverview} />
      <Route path="/science/centers/stanford/for-scientists" component={StanfordForScientists} />
      <Route path="/science/centers/stanford/biomarkers" component={StanfordBiomarkers} />
      <Route path="/science/centers/stanford/imaging" component={StanfordImaging} />
      
      {/* FHCC page */}
      <Route path="/science/centers/fhcc" component={FHCC} />
      
      {/* Publications sub-pages */}
      <Route path="/science/publications/fellowships" component={Fellowships} />
      <Route path="/science/publications/seed-grants" component={SeedGrants} />
      
      <Route component={NotFound} />
    </Switch>
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
