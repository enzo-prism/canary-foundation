import express from 'express';
import compression from 'compression';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';
import crypto from 'crypto';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Configure compression FIRST before any other middleware
app.use(compression({
  threshold: 0, // Compress everything
  level: 6, // Balanced compression level
  filter: (req, res) => {
    // Compress everything except images
    if (req.headers['x-no-compression']) {
      return false;
    }
    return true;
  }
}));

// Simple path detection - when in dist/, public is right there
const buildPath = join(__dirname, 'public');

// Check if build directory exists
if (!fs.existsSync(buildPath)) {
  console.error(`Build directory ${buildPath} does not exist. Please run 'npm run build' first.`);
  process.exit(1);
}

console.log(`Using build directory: ${buildPath}`);

// CRITICAL FIX: Generate minimal sitemap if none exists
function generateMinimalSitemap() {
  const sitemapPath = join(buildPath, 'sitemap.xml');
  const robotsPath = join(buildPath, 'robots.txt');
  
  if (!fs.existsSync(sitemapPath)) {
    console.log('⚠️  Sitemap not found, generating minimal version...');
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://canaryfoundation.org/</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://canaryfoundation.org/about</loc>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://canaryfoundation.org/about/our-mission</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://canaryfoundation.org/about/founders-story</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://canaryfoundation.org/about/impact-success</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://canaryfoundation.org/science</loc>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://canaryfoundation.org/science/programs</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://canaryfoundation.org/approach</loc>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://canaryfoundation.org/blog</loc>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
</urlset>`;
    fs.writeFileSync(sitemapPath, sitemap, 'utf-8');
    console.log('✅ Minimal sitemap.xml generated');
  }
  
  if (!fs.existsSync(robotsPath)) {
    const robots = `User-agent: *
Allow: /
Sitemap: https://canaryfoundation.org/sitemap.xml
Sitemap: https://www.canaryfoundation.org/sitemap.xml

# Search engine crawlers
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

# AI/LLM crawlers
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: CCBot
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: Claude-Web
Allow: /`;
    fs.writeFileSync(robotsPath, robots, 'utf-8');
    console.log('✅ robots.txt generated');
  }
}

// Generate sitemap if needed
generateMinimalSitemap();

// Load crawl assets on startup
let crawlAssets = loadCrawlAssets();

function loadCrawlAssets() {
  const assets = {
    robotsTxt: null,
    sitemapXml: null,
    sitemapIndexXml: null,
    llmXml: null,
    aiTxt: null,
    sitemapParts: []
  };
  
  // Try to load from build directory
  try {
    const robotsPath = join(buildPath, 'robots.txt');
    if (fs.existsSync(robotsPath)) {
      assets.robotsTxt = fs.readFileSync(robotsPath, 'utf-8');
    }
    
    const sitemapPath = join(buildPath, 'sitemap.xml');
    if (fs.existsSync(sitemapPath)) {
      assets.sitemapXml = fs.readFileSync(sitemapPath, 'utf-8');
    }
    
    const sitemapIndexPath = join(buildPath, 'sitemap-index.xml');
    if (fs.existsSync(sitemapIndexPath)) {
      assets.sitemapIndexXml = fs.readFileSync(sitemapIndexPath, 'utf-8');
    }
    
    const llmPath = join(buildPath, 'llm.xml');
    if (fs.existsSync(llmPath)) {
      assets.llmXml = fs.readFileSync(llmPath, 'utf-8');
    }
    
    const aiPath = join(buildPath, 'ai.txt');
    if (fs.existsSync(aiPath)) {
      assets.aiTxt = fs.readFileSync(aiPath, 'utf-8');
    }
    
    console.log('Crawl assets loaded:', {
      robotsTxt: !!assets.robotsTxt,
      sitemapXml: !!assets.sitemapXml,
      sitemapIndexXml: !!assets.sitemapIndexXml,
      llmXml: !!assets.llmXml,
      aiTxt: !!assets.aiTxt,
      sitemapParts: assets.sitemapParts.length
    });
  } catch (error) {
    console.error('Error loading crawl assets:', error);
  }
  
  return assets;
}

// Helper to generate ETag
function generateETag(content) {
  return `"${crypto.createHash('md5').update(content).digest('hex')}"`;
}

// Legacy URL redirect mappings
const LEGACY_REDIRECTS = {
  '/about-canary': '/about',
  '/about-canary/': '/about',
  '/about-canary/founders-story': '/about/founders-story',
  '/about-canary/founders-story/': '/about/founders-story',
  '/about-canary/staff': '/about/staff',
  '/about-canary/staff/': '/about/staff',
  '/about-canary/board-of-directors': '/about/board-of-directors',
  '/about-canary/board-of-directors/': '/about/board-of-directors',
  '/canary-science': '/science',
  '/canary-science/': '/science',
  '/canary-science/programs': '/science/programs',
  '/canary-science/programs/': '/science/programs',
};

// Redirect middleware - MUST be before any static serving
app.use((req, res, next) => {
  const redirect = LEGACY_REDIRECTS[req.path];
  if (redirect) {
    console.log(`Redirecting ${req.path} to ${redirect}`);
    return res.redirect(301, redirect);
  }
  next();
});

// Security headers
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  next();
});

// Health check endpoints
app.get('/health', (req, res) => {
  res.status(200).send('ok');
});

app.get('/status', (req, res) => {
  res.status(200).send('ok');
});

// Robots.txt - MUST be before static middleware
app.get('/robots.txt', (req, res) => {
  res.type('text/plain; charset=utf-8');
  res.setHeader('Cache-Control', 'public, max-age=3600');
  res.setHeader('X-Robots-Tag', 'all');
  if (crawlAssets.robotsTxt) {
    res.setHeader('ETag', generateETag(crawlAssets.robotsTxt));
    res.send(crawlAssets.robotsTxt);
  } else {
    res.status(404).send('Robots.txt not found');
  }
});

// Sitemap.xml
app.get('/sitemap.xml', (req, res) => {
  if (crawlAssets.sitemapXml) {
    res.type('application/xml; charset=utf-8');
    res.setHeader('Cache-Control', 'public, max-age=3600');
    res.setHeader('ETag', generateETag(crawlAssets.sitemapXml));
    res.send(crawlAssets.sitemapXml);
  } else {
    // Fallback to file system
    const sitemapPath = join(buildPath, 'sitemap.xml');
    if (fs.existsSync(sitemapPath)) {
      res.type('application/xml; charset=utf-8');
      res.sendFile(sitemapPath);
    } else {
      res.status(404).send('Sitemap not found');
    }
  }
});

// Serve static files
app.use(express.static(buildPath, {
  maxAge: '1y',
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('.html')) {
      res.setHeader('Cache-Control', 'public, max-age=3600');
    }
  }
}));

// SPA fallback - serve index.html for all routes
app.get('*', (req, res) => {
  const indexPath = join(buildPath, 'index.html');
  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    res.status(404).send('Application not found');
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Serving static files from: ${buildPath}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});