#!/usr/bin/env node
// Post-build hook to generate crawl assets and compress files
console.log('Running post-build tasks...');

async function runPostBuild() {
  // Generate crawl assets
  const crawlModule = await import('./scripts/generate-crawl-assets.mjs');
  crawlModule.buildCrawlAssets();
  
  // Compress CSS and JS files
  const compressModule = await import('./scripts/compress-assets.mjs');
  await compressModule.compressAssets();
}

runPostBuild();