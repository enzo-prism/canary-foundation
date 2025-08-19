#!/bin/bash
# Production build script that ensures sitemap generation

echo "🚀 Starting production build with sitemap generation..."

# Clean previous build
echo "Cleaning previous build..."
rm -rf dist

# Build frontend with Vite
echo "Building frontend with Vite..."
npx vite build

# Build server with esbuild
echo "Building server with esbuild..."
npx esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist

# CRITICAL: Generate sitemap and crawl assets
echo "Generating sitemap and crawl assets..."
node postbuild.js

# Copy production server to dist
echo "Copying production server..."
cp production-server.mjs dist/

# Copy generation script to dist for runtime generation
echo "Copying generation script for runtime..."
mkdir -p dist/scripts dist/seo
cp scripts/generate-crawl-assets-enhanced.mjs dist/scripts/
cp scripts/compress-assets.mjs dist/scripts/ 2>/dev/null || true
cp -r seo/* dist/seo/ 2>/dev/null || true

# Verify critical SEO files exist
echo ""
echo "Verifying SEO files..."
if [ -f "dist/public/sitemap.xml" ]; then
    echo "✅ sitemap.xml generated successfully ($(wc -l < dist/public/sitemap.xml) lines)"
else
    echo "❌ ERROR: sitemap.xml not found! Production will fail."
    exit 1
fi

if [ -f "dist/public/news-sitemap.xml" ]; then
    echo "✅ news-sitemap.xml generated successfully"
else
    echo "⚠️  Warning: news-sitemap.xml not found"
fi

if [ -f "dist/public/llm.xml" ]; then
    echo "✅ llm.xml generated successfully"
else
    echo "⚠️  Warning: llm.xml not found"
fi

if [ -f "dist/public/robots.txt" ]; then
    echo "✅ robots.txt generated successfully"
else
    echo "❌ ERROR: robots.txt not found! Production will fail."
    exit 1
fi

if [ -f "dist/public/ai.txt" ]; then
    echo "✅ ai.txt generated successfully"
else
    echo "⚠️  Warning: ai.txt not found"
fi

echo ""
echo "✅ Build complete! Ready for deployment."
echo ""
echo "SEO files generated in dist/public/:"
ls -lh dist/public/*.xml dist/public/*.txt 2>/dev/null | awk '{print "  - " $9 " (" $5 ")"}'
echo ""
echo "To deploy to production, use:"
echo "  cd dist && node production-server.mjs"