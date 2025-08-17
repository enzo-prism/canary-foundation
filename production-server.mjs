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

// Detect build directory - when running from dist/, public is in same directory
const BUILD_DIR = process.env.BUILD_DIR || 'public';
const buildPath = __dirname.endsWith('/dist') ? join(__dirname, BUILD_DIR) : join(__dirname, 'dist', BUILD_DIR);

// Check if build directory exists
if (!fs.existsSync(buildPath)) {
  console.error(`Build directory ${buildPath} does not exist. Please run 'npm run build' first.`);
  process.exit(1);
}

// Load crawl assets on startup
let crawlAssets = loadCrawlAssets();

function loadCrawlAssets() {
  const crawlAssetFiles = [
    'robots.txt',
    'sitemap.xml',
    'sitemap-index.xml',
    'llm.xml',
    'ai.txt'
  ];
  
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
    
    // Load sitemap parts if they exist
    const files = fs.readdirSync(buildPath);
    files.forEach(file => {
      if (file.match(/^sitemap-\d+\.xml$/)) {
        const content = fs.readFileSync(join(buildPath, file), 'utf-8');
        assets.sitemapParts.push({ name: file, xml: content });
      }
    });
    
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
  
  // If no robots.txt found, use fallback
  if (!assets.robotsTxt) {
    assets.robotsTxt = `User-agent: *
Allow: /
Sitemap: https://canaryfoundation.org/sitemap.xml
Sitemap: https://canaryfoundation.org/llm.xml`;
  }
  
  return assets;
}

// Helper to generate ETag
function generateETag(content) {
  return `"${crypto.createHash('md5').update(content).digest('hex')}"`;
}

// Force HTTPS redirect
app.use((req, res, next) => {
  const proto = req.headers['x-forwarded-proto'];
  if (proto && proto !== 'https') {
    return res.redirect(301, `https://${req.headers.host}${req.url}`);
  }
  next();
});

// Canonicalize domain (www → apex) - but allow crawler files on both domains
app.use((req, res, next) => {
  const host = req.headers.host;
  const crawlerPaths = ['/robots.txt', '/sitemap.xml', '/sitemap-index.xml', '/llm.xml', '/ai.txt'];
  
  // Don't redirect crawler files - serve them on both domains
  if (host === 'www.canaryfoundation.org' && !crawlerPaths.some(path => req.url.startsWith(path))) {
    return res.redirect(301, `https://canaryfoundation.org${req.url}`);
  }
  next();
});

// Security headers
app.use((req, res, next) => {
  res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
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

// Robots.txt - MUST be before static middleware and SPA fallback
app.get('/robots.txt', (req, res) => {
  res.type('text/plain; charset=utf-8');
  res.setHeader('Cache-Control', 'public, max-age=3600');
  res.setHeader('X-Robots-Tag', 'all');
  if (crawlAssets.robotsTxt) {
    res.setHeader('ETag', generateETag(crawlAssets.robotsTxt));
  }
  res.send(crawlAssets.robotsTxt);
});

// Sitemap.xml
app.get('/sitemap.xml', (req, res, next) => {
  if (crawlAssets.sitemapXml) {
    res.type('application/xml; charset=utf-8');
    res.setHeader('Cache-Control', 'public, max-age=3600');
    res.setHeader('ETag', generateETag(crawlAssets.sitemapXml));
    res.send(crawlAssets.sitemapXml);
  } else if (crawlAssets.sitemapIndexXml) {
    // If we have an index, redirect to it
    res.redirect(301, '/sitemap-index.xml');
  } else {
    // Try static file fallback
    const sitemapPath = join(buildPath, 'sitemap.xml');
    if (fs.existsSync(sitemapPath)) {
      res.type('application/xml');
      res.sendFile(sitemapPath);
    } else {
      next();
    }
  }
});

// Sitemap index
app.get('/sitemap-index.xml', (req, res, next) => {
  if (crawlAssets.sitemapIndexXml) {
    res.type('application/xml; charset=utf-8');
    res.setHeader('Cache-Control', 'public, max-age=3600');
    res.setHeader('ETag', generateETag(crawlAssets.sitemapIndexXml));
    res.send(crawlAssets.sitemapIndexXml);
  } else {
    next();
  }
});

// Sitemap shards
app.get('/sitemap-:id.xml', (req, res, next) => {
  if (crawlAssets.sitemapParts) {
    const shard = crawlAssets.sitemapParts.find(p => p.name === `sitemap-${req.params.id}.xml`);
    if (shard) {
      res.type('application/xml; charset=utf-8');
      res.setHeader('Cache-Control', 'public, max-age=3600');
      res.setHeader('ETag', generateETag(shard.xml));
      res.send(shard.xml);
      return;
    }
  }
  next();
});

// LLM sitemap
app.get('/llm.xml', (req, res, next) => {
  if (crawlAssets.llmXml) {
    res.type('application/xml; charset=utf-8');
    res.setHeader('Cache-Control', 'public, max-age=3600');
    res.setHeader('ETag', generateETag(crawlAssets.llmXml));
    res.send(crawlAssets.llmXml);
  } else {
    next();
  }
});

// AI.txt
app.get('/ai.txt', (req, res, next) => {
  if (crawlAssets.aiTxt) {
    res.type('text/plain; charset=utf-8');
    res.setHeader('Cache-Control', 'public, max-age=3600');
    res.setHeader('ETag', generateETag(crawlAssets.aiTxt));
    res.send(crawlAssets.aiTxt);
  } else {
    next();
  }
});

// Middleware to serve pre-compressed files
app.get('*.js', (req, res, next) => {
  const acceptEncoding = req.headers['accept-encoding'] || '';
  const filePath = join(buildPath, req.path);
  
  // Try brotli first (best compression)
  if (acceptEncoding.includes('br') && fs.existsSync(`${filePath}.br`)) {
    req.url = req.url + '.br';
    res.set('Content-Encoding', 'br');
    res.set('Content-Type', 'application/javascript; charset=utf-8');
    next();
  }
  // Then try gzip
  else if (acceptEncoding.includes('gzip') && fs.existsSync(`${filePath}.gz`)) {
    req.url = req.url + '.gz';
    res.set('Content-Encoding', 'gzip');
    res.set('Content-Type', 'application/javascript; charset=utf-8');
    next();
  }
  // Fallback to uncompressed
  else {
    next();
  }
});

app.get('*.css', (req, res, next) => {
  const acceptEncoding = req.headers['accept-encoding'] || '';
  const filePath = join(buildPath, req.path);
  
  // Try brotli first (best compression)
  if (acceptEncoding.includes('br') && fs.existsSync(`${filePath}.br`)) {
    req.url = req.url + '.br';
    res.set('Content-Encoding', 'br');
    res.set('Content-Type', 'text/css; charset=utf-8');
    next();
  }
  // Then try gzip
  else if (acceptEncoding.includes('gzip') && fs.existsSync(`${filePath}.gz`)) {
    req.url = req.url + '.gz';
    res.set('Content-Encoding', 'gzip');
    res.set('Content-Type', 'text/css; charset=utf-8');
    next();
  }
  // Fallback to uncompressed
  else {
    next();
  }
});

// Serve static files with caching
app.use(express.static(buildPath, {
  etag: true,
  lastModified: true,
  setHeaders: (res, path) => {
    // Don't set Content-Type for pre-compressed files (already set above)
    if (!path.endsWith('.gz') && !path.endsWith('.br')) {
      if (path.endsWith('.js')) {
        res.setHeader('Content-Type', 'application/javascript; charset=utf-8');
      } else if (path.endsWith('.css')) {
        res.setHeader('Content-Type', 'text/css; charset=utf-8');
      }
    }
    
    // Cache static assets for 1 year
    if (path.includes('/assets/')) {
      res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    } else {
      // Cache HTML for 1 hour
      res.setHeader('Cache-Control', 'public, max-age=3600');
    }
    
    // Add Vary header for compression negotiation
    res.setHeader('Vary', 'Accept-Encoding');
  }
}));

// HEAD request handler for all routes
app.head('*', (req, res) => {
  res.status(200).end();
});

// SPA fallback - serve index.html for all other routes
app.get('*', (req, res) => {
  const indexPath = join(buildPath, 'index.html');
  
  // Check if index.html exists
  if (!fs.existsSync(indexPath)) {
    return res.status(500).send('index.html not found');
  }
  
  // Set appropriate headers for HTML
  res.setHeader('Cache-Control', 'public, max-age=3600');
  res.sendFile(indexPath);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Serving static files from: ${buildPath}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});