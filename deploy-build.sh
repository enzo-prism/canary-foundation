#!/bin/bash

set -euo pipefail

echo "Building application..."
npm run build

echo "Generating crawl assets..."
node postbuild.js

echo "Build complete. Ready for deployment."
echo "BUILD_DIR detected: dist/public"
echo "Production server: dist/index.js"
