import { SITE_NAME, NOT_FOUND_METADATA, resolveRouteMetadata, normalizeRoutePath,
  buildCanonicalUrl, buildWebPageJsonLd, buildArticleJsonLd } from "./seo";
import { blogPosts } from "../client/src/data/blog-posts";
import seoRoutes from "../seo/routes.json";

const KNOWN_STATIC_ROUTES = new Set([...seoRoutes.routes, "/take-action"]);

// Shared by initial server responses and subsequent browser navigation.
export function resolvePageSeo(originalUrl: string) {
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
        jsonLd: (
          buildArticleJsonLd({
            headline: post.title,
            description: post.excerpt,
            url: canonicalUrl,
            datePublished: post.publishedDate ?? post.date,
            dateModified: post.date,
            author: post.author,
            keywords: post.tags,
          })
        ),
        ogType: "article",
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
    jsonLd: (
      buildWebPageJsonLd({
        title: metadata.title,
        description: metadata.description,
        url: canonicalUrl,
      })
    ),
    ogType: "website",
    isKnownRoute,
  };
}

