import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";

// Legacy URL redirect mappings - MUST be defined early
const LEGACY_REDIRECTS: Record<string, string> = {
  '/about-canary': '/about',
  '/about-canary/': '/about',
  '/about-canary/founders-story': '/about/founders-story',
  '/about-canary/founders-story/': '/about/founders-story',
  '/about-canary/staff': '/about/staff',
  '/about-canary/staff/': '/about/staff',
  '/about-canary/board-of-directors': '/about/board-of-directors',
  '/about-canary/board-of-directors/': '/about/board-of-directors',
  '/about-canary/leadership-council': '/about/leadership-council',
  '/about-canary/leadership-council/': '/about/leadership-council',
  '/about-canary/scientific-leadership': '/about/scientific-leadership',
  '/about-canary/scientific-leadership/': '/about/scientific-leadership',
  '/about-canary/financials': '/about/financials',
  '/about-canary/financials/': '/about/financials',
  '/about-canary/our-mission': '/about/our-mission',
  '/about-canary/our-mission/': '/about/our-mission',
  '/about-canary/impact-success': '/about/impact-success',
  '/about-canary/impact-success/': '/about/impact-success',
  '/canary-science': '/science',
  '/canary-science/': '/science',
  '/canary-science/programs': '/science/programs',
  '/canary-science/programs/': '/science/programs',
  '/canary-science/centers': '/science/centers',
  '/canary-science/centers/': '/science/centers',
  '/canary-science/publications': '/science/publications',
  '/canary-science/publications/': '/science/publications',
  '/canary-science/funding-by-invitation': '/science/funding-by-invitation',
  '/canary-science/funding-by-invitation/': '/science/funding-by-invitation',
  '/canary-science/programs/tumors': '/science/programs/tumors',
  '/canary-science/programs/tumors/': '/science/programs/tumors',
  '/canary-science/programs/tumors/prostate': '/science/programs/tumors/prostate',
  '/canary-science/programs/tumors/prostate/': '/science/programs/tumors/prostate',
  '/canary-science/programs/tumors/ovarian': '/science/programs/tumors/ovarian',
  '/canary-science/programs/tumors/ovarian/': '/science/programs/tumors/ovarian',
  '/canary-science/programs/tumors/pancreatic': '/science/programs/tumors/pancreatic',
  '/canary-science/programs/tumors/pancreatic/': '/science/programs/tumors/pancreatic',
  '/canary-science/programs/tumors/lung': '/science/programs/tumors/lung',
  '/canary-science/programs/tumors/lung/': '/science/programs/tumors/lung',
  '/canary-science/programs/tumors/breast': '/science/programs/tumors/breast',
  '/canary-science/programs/tumors/breast/': '/science/programs/tumors/breast',
  '/canary-science/science': '/science/science',
  '/canary-science/science/': '/science/science',
  '/canary-science/science/imaging': '/science/science/imaging',
  '/canary-science/science/imaging/': '/science/science/imaging',
  '/canary-science/science/biomarkers': '/science/science/biomarkers',
  '/canary-science/science/biomarkers/': '/science/science/biomarkers',
  '/canary-approach': '/approach',
  '/canary-approach/': '/approach',
  '/canary-approach/overview': '/approach/overview',
  '/canary-approach/overview/': '/approach/overview',
  '/canary-approach/collaborations': '/approach/collaborations',
  '/canary-approach/collaborations/': '/approach/collaborations',
  '/canary-approach/canary-symposium': '/approach/canary-symposium',
  '/canary-approach/canary-symposium/': '/approach/canary-symposium',
  '/news-blog': '/blog',
  '/news-blog/': '/blog',
  '/take-action-2': '/contact',
  '/take-action-2/': '/contact'
};

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Handle legacy URL redirects - MUST be the FIRST middleware
app.use((req, res, next) => {
  const path = req.path.toLowerCase();
  
  // Check if this is a legacy URL that needs redirecting
  if (LEGACY_REDIRECTS[path]) {
    const newPath = LEGACY_REDIRECTS[path];
    const queryString = req.originalUrl.includes('?') ? req.originalUrl.split('?')[1] : '';
    const redirectUrl = queryString ? `${newPath}?${queryString}` : newPath;
    
    log(`[REDIRECT] Legacy URL: ${path} → ${newPath}`);
    return res.redirect(301, redirectUrl);
  }
  
  next();
});

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  const server = await registerRoutes(app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    throw err;
  });

  // importantly only setup vite in development and after
  // setting up all the other routes so the catch-all route
  // doesn't interfere with the other routes
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  // ALWAYS serve the app on port 5000
  // this serves both the API and the client.
  // It is the only port that is not firewalled.
  const port = 5000;
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true,
  }, () => {
    log(`serving on port ${port}`);
  });
})();
