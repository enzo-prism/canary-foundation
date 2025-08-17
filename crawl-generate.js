#!/usr/bin/env node
// NPM script wrapper for crawl generation
import('./scripts/generate-crawl-assets.mjs').then(module => {
  module.buildCrawlAssets();
});