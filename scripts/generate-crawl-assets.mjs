import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');

// Configuration
const SITE_ORIGIN = 'https://canaryfoundation.org';
const BUILD_DIR = process.env.BUILD_DIR || 'dist/public';
const SEO_ROUTES_FILE = path.join(rootDir, 'seo', 'routes.json');
const MAX_URLS_PER_SITEMAP = 50000;

/**
 * Scan build directory for HTML files and convert to URLs
 */
function scanBuildDirectory() {
  const buildPath = path.join(rootDir, BUILD_DIR);
  const urls = [];
  
  if (!fs.existsSync(buildPath)) {
    console.warn(`Build directory ${buildPath} not found`);
    return urls;
  }

  function scanDir(dir, basePath = '') {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'assets') {
        scanDir(fullPath, path.join(basePath, item));
      } else if (stat.isFile() && item.endsWith('.html')) {
        // Skip service worker, 404, and other special pages
        if (item === '404.html' || item === 'sw.html' || item === 'offline.html') {
          continue;
        }
        
        // Convert file path to URL path
        let urlPath = basePath;
        if (item === 'index.html') {
          urlPath = basePath || '/';
        } else {
          urlPath = path.join(basePath, item.replace('.html', ''));
        }
        
        // Ensure path starts with /
        if (!urlPath.startsWith('/')) {
          urlPath = '/' + urlPath;
        }
        
        urls.push({
          path: urlPath,
          lastmod: stat.mtime.toISOString().split('T')[0]
        });
      }
    }
  }
  
  scanDir(buildPath);
  return urls;
}

/**
 * Load routes from seo/routes.json
 */
function loadSeoRoutes() {
  const urls = [];
  
  if (fs.existsSync(SEO_ROUTES_FILE)) {
    try {
      const data = JSON.parse(fs.readFileSync(SEO_ROUTES_FILE, 'utf8'));
      const today = new Date().toISOString().split('T')[0];
      
      for (const route of data.routes || []) {
        if (route && route.startsWith('/')) {
          urls.push({
            path: route,
            lastmod: today
          });
        }
      }
    } catch (err) {
      console.error('Error reading seo/routes.json:', err.message);
    }
  }
  
  return urls;
}

/**
 * Merge and deduplicate URLs
 */
function mergeUrls(scanUrls, seoUrls) {
  const urlMap = new Map();
  
  // Add scanned URLs first (they have file-based lastmod)
  for (const url of scanUrls) {
    urlMap.set(url.path, url);
  }
  
  // Add SEO routes (will override if duplicate)
  for (const url of seoUrls) {
    if (!urlMap.has(url.path)) {
      urlMap.set(url.path, url);
    }
  }
  
  // Sort by path
  return Array.from(urlMap.values()).sort((a, b) => a.path.localeCompare(b.path));
}

/**
 * Generate sitemap XML
 */
function generateSitemapXml(urls) {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  for (const url of urls) {
    xml += '  <url>\n';
    xml += `    <loc>${SITE_ORIGIN}${url.path}</loc>\n`;
    xml += `    <lastmod>${url.lastmod}</lastmod>\n`;
    xml += '    <changefreq>weekly</changefreq>\n';
    xml += '    <priority>0.8</priority>\n';
    xml += '  </url>\n';
  }
  
  xml += '</urlset>';
  return xml;
}

/**
 * Generate sitemap index XML
 */
function generateSitemapIndexXml(sitemapCount) {
  const today = new Date().toISOString().split('T')[0];
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  for (let i = 1; i <= sitemapCount; i++) {
    xml += '  <sitemap>\n';
    xml += `    <loc>${SITE_ORIGIN}/sitemap-${i}.xml</loc>\n`;
    xml += `    <lastmod>${today}</lastmod>\n`;
    xml += '  </sitemap>\n';
  }
  
  xml += '</sitemapindex>';
  return xml;
}

/**
 * Generate robots.txt
 */
function generateRobotsTxt() {
  return `User-agent: *
Allow: /
Sitemap: ${SITE_ORIGIN}/sitemap.xml
Sitemap: ${SITE_ORIGIN}/llm.xml`;
}

/**
 * Generate ai.txt
 */
function generateAiTxt() {
  return `User-agent: *
Allow: /
Sitemap: ${SITE_ORIGIN}/llm.xml`;
}

/**
 * Build all crawl assets
 */
export function buildCrawlAssets() {
  const scanUrls = scanBuildDirectory();
  const seoUrls = loadSeoRoutes();
  const allUrls = mergeUrls(scanUrls, seoUrls);
  
  console.log(`Crawl Asset Generation Summary:`);
  console.log(`  BUILD_DIR: ${BUILD_DIR}`);
  console.log(`  URLs from build scan: ${scanUrls.length}`);
  console.log(`  URLs from seo/routes.json: ${seoUrls.length}`);
  console.log(`  Total unique URLs: ${allUrls.length}`);
  
  const result = {
    robotsTxt: generateRobotsTxt(),
    aiTxt: generateAiTxt(),
    urls: allUrls,
    scanCount: scanUrls.length,
    seoCount: seoUrls.length,
    totalCount: allUrls.length
  };
  
  // Check if we need to shard the sitemap
  if (allUrls.length > MAX_URLS_PER_SITEMAP) {
    const sitemapParts = [];
    const chunks = [];
    
    for (let i = 0; i < allUrls.length; i += MAX_URLS_PER_SITEMAP) {
      chunks.push(allUrls.slice(i, i + MAX_URLS_PER_SITEMAP));
    }
    
    chunks.forEach((chunk, index) => {
      sitemapParts.push({
        name: `sitemap-${index + 1}.xml`,
        xml: generateSitemapXml(chunk)
      });
    });
    
    result.sitemapIndexXml = generateSitemapIndexXml(sitemapParts.length);
    result.sitemapParts = sitemapParts;
    console.log(`  Sitemap shards created: ${sitemapParts.length}`);
  } else {
    result.sitemapXml = generateSitemapXml(allUrls);
    result.llmXml = generateSitemapXml(allUrls); // LLM XML is same as sitemap
    console.log(`  Single sitemap generated (no sharding needed)`);
  }
  
  return result;
}

// If run directly (not imported)
if (import.meta.url === `file://${process.argv[1]}`) {
  buildCrawlAssets();
}