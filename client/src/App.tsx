import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import Blog from "@/pages/blog";
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
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/blog" component={Blog} />
      
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
      
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
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
