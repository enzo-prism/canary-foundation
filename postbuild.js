#!/usr/bin/env node
// Post-build hook to generate crawl assets
console.log('Running post-build crawl asset generation...');
import('./scripts/generate-crawl-assets.mjs').then(module => {
  module.buildCrawlAssets();
});