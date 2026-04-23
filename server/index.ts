import express, { type Request, Response, NextFunction } from "express";
import compression from "compression";
import fs from "fs";
import path from "path";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";
import type { ListenOptions } from "net";
import type { Server } from "http";

const CRAWLER_ENDPOINTS = new Set([
  "/robots.txt",
  "/sitemap.xml",
  "/sitemap-index.xml",
  "/news-sitemap.xml",
  "/llm.xml",
  "/ai.txt",
]);

const PRECOMPRESSED_CONTENT_TYPES: Record<string, string> = {
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
};

// Legacy URL redirect mappings - MUST be defined early
const LEGACY_REDIRECTS: Record<string, string> = {
  '/about': '/about/overview',
  '/about/': '/about/overview',
  '/approach': '/approach/overview',
  '/approach/': '/approach/overview',
  '/science': '/science/overview',
  '/science/': '/science/overview',
  '/about/board-of-directors': '/about/board-directors',
  '/about/board-of-directors/': '/about/board-directors',
  '/about/our-mission': '/about/overview',
  '/about/our-mission/': '/about/overview',
  '/about/impact-success': '/about/overview',
  '/about/impact-success/': '/about/overview',
  '/science/programs/tumors/overview': '/science/programs/tumors',
  '/science/programs/tumors/overview/': '/science/programs/tumors',
  '/science/centers/stanford/overview': '/science/centers/stanford',
  '/science/centers/stanford/overview/': '/science/centers/stanford',
  '/science/centers/stanford/liquid-biopsy': '/science/centers/stanford',
  '/science/centers/stanford/liquid-biopsy/': '/science/centers/stanford',
  '/science/centers/stanford/cyclotron': '/science/centers/stanford',
  '/science/centers/stanford/cyclotron/': '/science/centers/stanford',
  '/science/centers/stanford/education': '/science/centers/stanford',
  '/science/centers/stanford/education/': '/science/centers/stanford',
  '/science/centers/fhcrc': '/science/centers/fhcc',
  '/science/centers/fhcrc/': '/science/centers/fhcc',
  '/about-canary': '/about/overview',
  '/about-canary/': '/about/overview',
  '/about-canary/founders-story': '/about/founders-story',
  '/about-canary/founders-story/': '/about/founders-story',
  '/about-canary/staff': '/about/staff',
  '/about-canary/staff/': '/about/staff',
  '/about-canary/board-of-directors': '/about/board-directors',
  '/about-canary/board-of-directors/': '/about/board-directors',
  '/about-canary/leadership-council': '/about/leadership-council',
  '/about-canary/leadership-council/': '/about/leadership-council',
  '/about-canary/scientific-leadership': '/about/scientific-leadership',
  '/about-canary/scientific-leadership/': '/about/scientific-leadership',
  '/about-canary/financials': '/about/financials',
  '/about-canary/financials/': '/about/financials',
  '/about-canary/our-mission': '/about/overview',
  '/about-canary/our-mission/': '/about/overview',
  '/about-canary/impact-success': '/about/overview',
  '/about-canary/impact-success/': '/about/overview',
  '/canary-science': '/science/overview',
  '/canary-science/': '/science/overview',
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
  '/canary-approach': '/approach/overview',
  '/canary-approach/': '/approach/overview',
  '/canary-approach/overview': '/approach/overview',
  '/canary-approach/overview/': '/approach/overview',
  '/canary-approach/collaborations': '/approach/collaborations',
  '/canary-approach/collaborations/': '/approach/collaborations',
  '/canary-approach/canary-symposium': '/approach/symposium',
  '/canary-approach/canary-symposium/': '/approach/symposium',
  '/news-blog': '/blog',
  '/news-blog/': '/blog',
  '/take-action-2': '/donate',
  '/take-action-2/': '/donate'
};

const app = express();
app.set("trust proxy", true);
app.use(
  compression({
    threshold: 0,
  }),
);

app.use((_, res, next) => {
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
  res.setHeader("X-Frame-Options", "SAMEORIGIN");
  res.setHeader("X-XSS-Protection", "1; mode=block");
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Canonicalize the public host while allowing crawler files on both domains.
app.use((req, res, next) => {
  const hostHeader = `${req.headers["x-forwarded-host"] || req.headers.host || ""}`
    .split(",")[0]
    .trim()
    .toLowerCase();
  const normalizedPath = req.path.toLowerCase();

  if (hostHeader === "www.canaryfoundation.org" && !CRAWLER_ENDPOINTS.has(req.path)) {
    const canonicalPath = LEGACY_REDIRECTS[normalizedPath] ?? req.path;
    const queryString = req.originalUrl.includes("?")
      ? `?${req.originalUrl.split("?")[1]}`
      : "";
    const canonicalUrl = `https://canaryfoundation.org${canonicalPath}${queryString}`;
    log(`[CANONICAL] ${hostHeader}${req.originalUrl} → ${canonicalUrl}`);
    return res.redirect(301, canonicalUrl);
  }

  next();
});

// Serve precompressed assets when they exist so production can use the .gz/.br
// files generated in postbuild instead of compressing every request on demand.
app.get(/\.(css|js)$/, (req, res, next) => {
  if (req.method !== "GET" && req.method !== "HEAD") {
    next();
    return;
  }

  const requestedPath = decodeURIComponent(req.path).replace(/^\/+/, "");
  const ext = path.extname(requestedPath);
  const contentType = PRECOMPRESSED_CONTENT_TYPES[ext];
  if (!contentType) {
    next();
    return;
  }

  const assetPath = path.resolve(import.meta.dirname, "public", requestedPath);
  const acceptEncoding = `${req.headers["accept-encoding"] || ""}`.toLowerCase();

  const sendCompressedAsset = (filePath: string, encoding: "br" | "gzip") => {
    res.setHeader("Content-Encoding", encoding);
    res.setHeader("Content-Type", contentType);
    res.setHeader("Vary", "Accept-Encoding");
    res.sendFile(filePath);
  };

  if (acceptEncoding.includes("br")) {
    const brotliPath = `${assetPath}.br`;
    if (fs.existsSync(brotliPath)) {
      sendCompressedAsset(brotliPath, "br");
      return;
    }
  }

  if (acceptEncoding.includes("gzip")) {
    const gzipPath = `${assetPath}.gz`;
    if (fs.existsSync(gzipPath)) {
      sendCompressedAsset(gzipPath, "gzip");
      return;
    }
  }

  next();
});

// Handle legacy URL redirects - MUST be the FIRST path middleware
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

  const DEFAULT_PORT = 5000;
  // Default to the shared tunnel port but allow overrides for local dev
  // so we can run alongside other services binding to 5000.
  let port = DEFAULT_PORT;
  const envPort = process.env.PORT;
  if (envPort) {
    const parsedPort = Number.parseInt(envPort, 10);
    if (!Number.isNaN(parsedPort) && parsedPort > 0) {
      port = parsedPort;
    } else {
      log(
        `[server] Invalid PORT value \"${envPort}\" supplied, falling back to ${DEFAULT_PORT}`,
      );
    }
  }
  const host = "0.0.0.0";

  const listenWithOptions = (targetServer: Server, options: ListenOptions) => {
    return new Promise<void>((resolve, reject) => {
      const handleError = (err: NodeJS.ErrnoException) => {
        targetServer.off("listening", handleListening);
        reject(err);
      };

      const handleListening = () => {
        targetServer.off("error", handleError);
        resolve();
      };

      targetServer.once("error", handleError);
      targetServer.once("listening", handleListening);
      targetServer.listen(options);
    });
  };

  const baseOptions: ListenOptions = { port, host };
  type ListenOptionsWithReusePort = ListenOptions & { reusePort?: boolean };
  const reusePortOptions: ListenOptionsWithReusePort = {
    ...baseOptions,
    reusePort: true,
  };
  const shouldFallback = (err: NodeJS.ErrnoException) =>
    err?.code === "ENOTSUP" ||
    err?.code === "EOPNOTSUPP" ||
    err?.code === "EINVAL" ||
    err?.code === "ERR_FEATURE_UNAVAILABLE_ON_PLATFORM";

  try {
    await listenWithOptions(server, reusePortOptions);
  } catch (err) {
    const errorWithCode = err as NodeJS.ErrnoException;
    if (shouldFallback(errorWithCode)) {
      log(
        "[server] reusePort not supported in this environment, retrying without it",
      );
      await listenWithOptions(server, baseOptions);
    } else {
      throw err;
    }
  }

  log(`serving on port ${port}`);
})();
