#!/bin/bash

# Build the application
echo "Building application..."
npm run build

# Copy production server to dist (rename to avoid conflict)
echo "Setting up production server..."
cp production-server.mjs dist/production-server.mjs

# Generate crawl assets
echo "Generating crawl assets..."
node postbuild.js

echo "Build complete! Ready for deployment."
echo "BUILD_DIR detected: dist/public"
echo "Production server: dist/production-server.mjs"