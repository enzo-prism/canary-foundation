#!/usr/bin/env node
// Test script to verify SEO improvements

const fs = require('fs');
const path = require('path');
const xml2js = require('xml2js');

const parser = new xml2js.Parser();

console.log('\n🔍 SEO Improvements Verification');
console.log('=====================================\n');

// Test files
const files = {
  sitemap: 'dist/public/sitemap.xml',
  newsSitemap: 'dist/public/news-sitemap.xml',
  llmSitemap: 'dist/public/llm.xml',
  sitemapIndex: 'dist/public/sitemap-index.xml',
  robots: 'dist/public/robots.txt',
  aiTxt: 'dist/public/ai.txt'
};

let testsPassed = 0;
let testsFailed = 0;

function pass(message) {
  console.log(`✅ ${message}`);
  testsPassed++;
}

function fail(message) {
  console.log(`❌ ${message}`);
  testsFailed++;
}

// Test 1: Check all files exist
console.log('📁 File Existence Tests:');
for (const [name, filepath] of Object.entries(files)) {
  if (fs.existsSync(filepath)) {
    pass(`${name} exists at ${filepath}`);
  } else {
    fail(`${name} missing at ${filepath}`);
  }
}

// Test 2: Parse and validate main sitemap
console.log('\n📋 Main Sitemap Analysis:');
if (fs.existsSync(files.sitemap)) {
  const sitemapContent = fs.readFileSync(files.sitemap, 'utf8');
  
  // Check for priority variety
  const priorities = sitemapContent.match(/<priority>([\d.]+)<\/priority>/g);
  if (priorities) {
    const uniquePriorities = [...new Set(priorities)];
    if (uniquePriorities.length > 3) {
      pass(`Priority hierarchy found: ${uniquePriorities.length} different priority levels`);
    } else {
      fail(`Insufficient priority variety: only ${uniquePriorities.length} levels`);
    }
  }
  
  // Check for changefreq variety
  const changefreqs = sitemapContent.match(/<changefreq>([^<]+)<\/changefreq>/g);
  if (changefreqs) {
    const uniqueFreqs = [...new Set(changefreqs)];
    if (uniqueFreqs.length > 2) {
      pass(`Change frequency variety: ${uniqueFreqs.length} different frequencies`);
    } else {
      fail(`Insufficient changefreq variety: only ${uniqueFreqs.length} frequencies`);
    }
  }
  
  // Check for blog posts
  const blogUrls = sitemapContent.match(/\/blog\/[^<]+/g);
  if (blogUrls && blogUrls.length > 5) {
    pass(`Blog posts included: ${blogUrls.length} individual blog URLs`);
  } else {
    fail(`Missing blog posts: only ${blogUrls ? blogUrls.length : 0} found`);
  }
}

// Test 3: Validate news sitemap
console.log('\n📰 News Sitemap Validation:');
if (fs.existsSync(files.newsSitemap)) {
  const newsContent = fs.readFileSync(files.newsSitemap, 'utf8');
  
  // Check for news namespace
  if (newsContent.includes('xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"')) {
    pass('News sitemap has correct namespace');
  } else {
    fail('News sitemap missing proper namespace');
  }
  
  // Check for news entries
  const newsEntries = newsContent.match(/<news:news>/g);
  if (newsEntries && newsEntries.length >= 5) {
    pass(`News entries found: ${newsEntries.length} articles`);
  } else {
    fail(`Insufficient news entries: ${newsEntries ? newsEntries.length : 0}`);
  }
}

// Test 4: Check robots.txt enhancements
console.log('\n🤖 Robots.txt Enhancements:');
if (fs.existsSync(files.robots)) {
  const robotsContent = fs.readFileSync(files.robots, 'utf8');
  
  // Check for AI crawlers
  const aiCrawlers = ['GPTBot', 'ChatGPT-User', 'anthropic-ai', 'Claude-Web'];
  let aiCrawlerCount = 0;
  aiCrawlers.forEach(crawler => {
    if (robotsContent.includes(`User-agent: ${crawler}`)) {
      aiCrawlerCount++;
    }
  });
  
  if (aiCrawlerCount >= 3) {
    pass(`AI crawler rules: ${aiCrawlerCount} AI crawlers configured`);
  } else {
    fail(`Missing AI crawler rules: only ${aiCrawlerCount} found`);
  }
  
  // Check for multiple sitemaps
  const sitemapRefs = robotsContent.match(/Sitemap:/g);
  if (sitemapRefs && sitemapRefs.length >= 3) {
    pass(`Multiple sitemaps referenced: ${sitemapRefs.length} sitemaps`);
  } else {
    fail(`Insufficient sitemap references: ${sitemapRefs ? sitemapRefs.length : 0}`);
  }
}

// Test 5: Validate AI instructions
console.log('\n🤖 AI Instructions (ai.txt):');
if (fs.existsSync(files.aiTxt)) {
  const aiContent = fs.readFileSync(files.aiTxt, 'utf8');
  
  if (aiContent.includes('Canary Foundation') && aiContent.includes('early detection')) {
    pass('AI instructions contain organization context');
  } else {
    fail('AI instructions missing context');
  }
  
  if (aiContent.includes('## About This Site') && aiContent.includes('## Key Sections')) {
    pass('AI instructions properly structured');
  } else {
    fail('AI instructions lack structure');
  }
}

// Test 6: Check sitemap index
console.log('\n📚 Sitemap Index:');
if (fs.existsSync(files.sitemapIndex)) {
  const indexContent = fs.readFileSync(files.sitemapIndex, 'utf8');
  
  const sitemapEntries = indexContent.match(/<sitemap>/g);
  if (sitemapEntries && sitemapEntries.length >= 3) {
    pass(`Sitemap index contains ${sitemapEntries.length} sitemaps`);
  } else {
    fail(`Sitemap index incomplete: ${sitemapEntries ? sitemapEntries.length : 0} entries`);
  }
}

// Summary
console.log('\n' + '='.repeat(50));
console.log('📊 TEST SUMMARY:');
console.log(`   Passed: ${testsPassed}`);
console.log(`   Failed: ${testsFailed}`);
console.log(`   Total:  ${testsPassed + testsFailed}`);
console.log('='.repeat(50));

if (testsFailed === 0) {
  console.log('\n🎉 All SEO improvements verified successfully!');
  process.exit(0);
} else {
  console.log('\n⚠️  Some tests failed. Please review the output above.');
  process.exit(1);
}