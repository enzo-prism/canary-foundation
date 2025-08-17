import express from 'express';
import compression from 'compression';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Detect build directory - when running from dist/, public is in same directory
const BUILD_DIR = process.env.BUILD_DIR || 'public';
const buildPath = __dirname.endsWith('/dist') ? join(__dirname, BUILD_DIR) : join(__dirname, 'dist', BUILD_DIR);

// Check if build directory exists
if (!fs.existsSync(buildPath)) {
  console.error(`Build directory ${buildPath} does not exist. Please run 'npm run build' first.`);
  process.exit(1);
}

// Enable compression
app.use(compression());

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

// Robots.txt
app.get('/robots.txt', (req, res) => {
  res.type('text/plain');
  res.send(`User-agent: *
Allow: /
Sitemap: https://canaryfoundation.org/sitemap.xml`);
});

// Sitemap.xml (if it exists in build)
app.get('/sitemap.xml', (req, res, next) => {
  const sitemapPath = join(buildPath, 'sitemap.xml');
  if (fs.existsSync(sitemapPath)) {
    res.type('application/xml');
    res.sendFile(sitemapPath);
  } else {
    next();
  }
});

// Serve static files with caching
app.use(express.static(buildPath, {
  etag: true,
  lastModified: true,
  setHeaders: (res, path) => {
    // Cache static assets for 1 year
    if (path.includes('/assets/')) {
      res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    } else {
      // Cache HTML for 1 hour
      res.setHeader('Cache-Control', 'public, max-age=3600');
    }
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