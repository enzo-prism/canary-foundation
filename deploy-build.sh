#!/bin/bash

# Build the application
echo "Building application..."
npm run build

# Copy production server to dist
echo "Setting up production server..."
cp production-server.mjs dist/index.js

echo "Build complete! Ready for deployment."
echo "BUILD_DIR detected: dist/public"