#!/bin/bash

set -euo pipefail

# Production build script that ensures crawl asset generation

echo "🚀 Starting production build with crawl asset generation..."

echo "Cleaning previous build..."
rm -rf dist

echo "Building application..."
npm run build

echo "Generating sitemap and crawl assets..."
node postbuild.js

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
echo "  npm run start"
