import express, { type Express } from "express";
import fs from "fs";
import path from "path";
import { createServer as createViteServer, createLogger } from "vite";
import { type Server } from "http";
import viteConfig from "../vite.config";
import { nanoid } from "nanoid";
import {
  SITE_NAME,
  SITE_ORIGIN,
  NOT_FOUND_METADATA,
  resolveRouteMetadata,
  normalizeRoutePath,
  buildCanonicalUrl,
  buildWebPageJsonLd,
  buildArticleJsonLd,
  renderJsonLdScript,
  PAGE_JSONLD_ELEMENT_ID,
  type RouteMetadata,
} from "@shared/seo";
import { blogPosts } from "@/data/blog-posts";
import seoRoutes from "../seo/routes.json";

const viteLogger = createLogger();

function escapeHtmlAttribute(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

interface ResolvedPageSeo {
  metadata: RouteMetadata;
  canonicalUrl: string;
  jsonLdScript: string;
  isKnownRoute: boolean;
}

const KNOWN_STATIC_ROUTES = new Set([...seoRoutes.routes, "/take-action"]);

// Resolve title/description/canonical and JSON-LD for a request URL. Blog post
// detail pages get post-specific metadata + Article schema; every other route
// uses the shared static table + WebPage schema. Mirrors the client logic in
// client/src/App.tsx so server HTML and SPA navigation stay identical.
function resolvePageSeo(originalUrl: string): ResolvedPageSeo {
  const routePath = normalizeRoutePath(originalUrl);
  const canonicalUrl = buildCanonicalUrl(routePath);

  if (routePath.startsWith("/blog/")) {
    const slug = routePath.slice("/blog/".length);
    const post = blogPosts.find((entry) => entry.slug === slug);
    if (post) {
      return {
        metadata: {
          title: `${post.title} | ${SITE_NAME}`,
          description: post.excerpt,
        },
        canonicalUrl,
        jsonLdScript: renderJsonLdScript(
          buildArticleJsonLd({
            headline: post.title,
            description: post.excerpt,
            url: canonicalUrl,
            datePublished: post.publishedDate ?? post.date,
            dateModified: post.date,
            author: post.author,
            keywords: post.tags,
          }),
          PAGE_JSONLD_ELEMENT_ID,
        ),
        isKnownRoute: true,
      };
    }
  }

  const isKnownRoute = KNOWN_STATIC_ROUTES.has(routePath);
  const metadata = isKnownRoute
    ? resolveRouteMetadata(routePath)
    : NOT_FOUND_METADATA;
  return {
    metadata,
    canonicalUrl,
    jsonLdScript: renderJsonLdScript(
      buildWebPageJsonLd({
        title: metadata.title,
        description: metadata.description,
        url: canonicalUrl,
      }),
      PAGE_JSONLD_ELEMENT_ID,
    ),
    isKnownRoute,
  };
}

function injectSpaMetadata(originalUrl: string, html: string) {
  const { metadata, canonicalUrl, jsonLdScript, isKnownRoute } =
    resolvePageSeo(originalUrl);
  const escapedTitle = escapeHtmlAttribute(metadata.title);
  const escapedDescription = escapeHtmlAttribute(metadata.description);
  const escapedCanonical = escapeHtmlAttribute(canonicalUrl);

  const withMetadata = html
    .replace(/<title>.*?<\/title>/, `<title>${escapedTitle}</title>`)
    .replace(
      /<meta name="description" content="[^"]*"\s*\/>/,
      `<meta name="description" content="${escapedDescription}" />`,
    )
    .replace(
      /<meta property="og:title" content="[^"]*"\s*\/>/,
      `<meta property="og:title" content="${escapedTitle}" />`,
    )
    .replace(
      /<meta property="og:description" content="[^"]*"\s*\/>/,
      `<meta property="og:description" content="${escapedDescription}" />`,
    )
    .replace(
      /<meta property="og:url" content="[^"]*"\s*\/>/,
      `<meta property="og:url" content="${escapedCanonical}" />`,
    )
    .replace(
      /<meta property="og:image" content="[^"]*"\s*\/>/,
      `<meta property="og:image" content="${SITE_ORIGIN}/opengraph.png" />`,
    )
    .replace(
      /<meta name="twitter:title" content="[^"]*"\s*\/>/,
      `<meta name="twitter:title" content="${escapedTitle}" />`,
    )
    .replace(
      /<meta name="twitter:description" content="[^"]*"\s*\/>/,
      `<meta name="twitter:description" content="${escapedDescription}" />`,
    )
    .replace(
      /<meta name="twitter:image" content="[^"]*"\s*\/>/,
      `<meta name="twitter:image" content="${SITE_ORIGIN}/opengraph.png" />`,
    )
    .replace(
      /<link rel="canonical" href="[^"]*"\s*\/>/,
      `<link rel="canonical" href="${escapedCanonical}" />`,
    );

  const withRobots = isKnownRoute
    ? withMetadata
    : withMetadata.replace(
        /<\/head>/,
        '  <meta name="robots" content="noindex, nofollow" />\n  </head>',
      );

  // Inject the per-page JSON-LD immediately before </head>.
  return withRobots.replace(/<\/head>/, `  ${jsonLdScript}\n  </head>`);
}

// Remove dev-only artifacts from production HTML. The Replit dev banner loads an
// external script on every page; it is only useful in development.
function stripDevOnlyArtifacts(html: string) {
  return html
    .replace(/<!--[^>]*?replit script[\s\S]*?-->\s*/i, "")
    .replace(/<script[^>]*replit-dev-banner[^>]*><\/script>\s*/i, "");
}

export function log(message: string, source = "express") {
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  console.log(`${formattedTime} [${source}] ${message}`);
}

export async function setupVite(app: Express, server: Server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true as const,
  };

  const vite = await createViteServer({
    ...viteConfig,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      },
    },
    server: serverOptions,
    appType: "custom",
  });

  app.use(vite.middlewares);
  app.use("*", async (req, res, next) => {
    const url = req.originalUrl;

    try {
      const clientTemplate = path.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html",
      );

      // always reload the index.html file from disk incase it changes
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = injectSpaMetadata(url, template);
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`,
      );
      const page = await vite.transformIndexHtml(url, template);
      const { isKnownRoute } = resolvePageSeo(url);
      res
        .status(isKnownRoute ? 200 : 404)
        .set({
          "Content-Type": "text/html; charset=UTF-8",
          "Cache-Control": "no-cache, no-store, must-revalidate",
        })
        .end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e as Error);
      next(e);
    }
  });
}

export function serveStatic(app: Express) {
  const distPath = path.resolve(import.meta.dirname, "public");

  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  // Disable the automatic directory index so "/" flows through the catch-all
  // below and receives server-side metadata + JSON-LD injection like every
  // other route (otherwise express.static would serve raw index.html for "/").
  app.use(
    express.static(distPath, {
      index: false,
      setHeaders(res, filePath) {
        const relativePath = path
          .relative(distPath, filePath)
          .replaceAll(path.sep, "/");
        if (/^assets\/.+-[A-Za-z0-9_-]{8,}\./i.test(relativePath)) {
          res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
        } else if (path.extname(relativePath) === ".html") {
          res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
        } else {
          res.setHeader("Cache-Control", "public, max-age=3600");
        }
      },
    }),
  );

  // fall through to index.html if the file doesn't exist
  app.use("*", async (req, res, next) => {
    try {
      const indexPath = path.resolve(distPath, "index.html");
      const template = await fs.promises.readFile(indexPath, "utf-8");
      const { isKnownRoute } = resolvePageSeo(req.originalUrl);
      res
        .status(isKnownRoute ? 200 : 404)
        .set({
          "Content-Type": "text/html; charset=UTF-8",
          "Cache-Control": "no-cache, no-store, must-revalidate",
        })
        .end(stripDevOnlyArtifacts(injectSpaMetadata(req.originalUrl, template)));
    } catch (error) {
      next(error);
    }
  });
}
