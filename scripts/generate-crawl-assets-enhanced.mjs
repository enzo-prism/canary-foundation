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

// Blog posts data for individual pages
const blogPosts = [
  { slug: 'don-listwin-award-2025-ruth-etzioni', date: '2025-11-01', category: 'Awards' },
  { slug: 'edx25-conference-portland-early-detection', date: '2025-11-01', category: 'Conference' },
  { slug: 'don-listwin-award-2024-antonis-antoniou', date: '2024-11-01', category: 'Awards' },
  { slug: 'edx24-conference-stanford-cancer-research', date: '2024-11-01', category: 'Conference' },
  { slug: 'edx23-conference-london-cancer-research', date: '2023-11-01', category: 'Conference' },
  { slug: 'don-listwin-award-2023-peter-sasieni', date: '2023-11-01', category: 'Awards' },
  { slug: 'canary-ovary-team-fallopian-tubes-study', date: '2023-11-01', category: 'Research' },
  { slug: 'edx22-conference-sold-out-ohsu-stanford', date: '2022-11-17', category: 'Conference' },
  { slug: 'don-listwin-award-2022-sudhir-srivastava', date: '2022-11-16', category: 'Awards' }
];

// Priority mapping for different page types
const PRIORITY_MAP = {
  home: 1.0,
  mainSection: 0.9,  // /about, /science, /approach, /blog
  importantSubpage: 0.8,  // /about/our-mission, /science/programs
  detailPage: 0.7,  // /science/programs/tumors/prostate
  deepSubpage: 0.6,  // /science/centers/stanford/cyclotron
  blogPost: 0.5,  // Individual blog posts
  utility: 0.3  // Contact, privacy, etc.
};

// Change frequency mapping
const CHANGEFREQ_MAP = {
  home: 'daily',
  blog: 'weekly',
  blogPost: 'monthly',
  news: 'weekly',
  program: 'monthly',
  about: 'yearly',
  static: 'yearly',
  contact: 'yearly'
};

/**
 * Determine priority based on URL path
 */
function getPriority(path) {
  if (path === '/' || path === '') return PRIORITY_MAP.home;
  
  const segments = path.split('/').filter(Boolean);
  const firstSegment = segments[0];
  
  // Main sections
  if (segments.length === 1) {
    if (['about', 'science', 'approach', 'blog'].includes(firstSegment)) {
      return PRIORITY_MAP.mainSection;
    }
    return PRIORITY_MAP.importantSubpage;
  }
  
  // Blog posts
  if (firstSegment === 'blog' && segments.length === 2) {
    return PRIORITY_MAP.blogPost;
  }
  
  // Important subpages
  if (segments.length === 2) {
    if (firstSegment === 'about' && ['our-mission', 'founders-story', 'board-of-directors'].includes(segments[1])) {
      return PRIORITY_MAP.importantSubpage;
    }
    if (firstSegment === 'science' && ['programs', 'overview', 'centers'].includes(segments[1])) {
      return PRIORITY_MAP.importantSubpage;
    }
    return PRIORITY_MAP.detailPage;
  }
  
  // Deep pages
  if (segments.length >= 3) {
    return segments.length > 3 ? PRIORITY_MAP.deepSubpage : PRIORITY_MAP.detailPage;
  }
  
  return PRIORITY_MAP.utility;
}

/**
 * Determine change frequency based on URL path
 */
function getChangeFreq(path) {
  if (path === '/' || path === '') return CHANGEFREQ_MAP.home;
  
  const segments = path.split('/').filter(Boolean);
  const firstSegment = segments[0];
  
  if (firstSegment === 'blog') {
    return segments.length === 1 ? CHANGEFREQ_MAP.blog : CHANGEFREQ_MAP.blogPost;
  }
  
  if (firstSegment === 'about') return CHANGEFREQ_MAP.about;
  if (firstSegment === 'contact') return CHANGEFREQ_MAP.contact;
  if (firstSegment === 'science') {
    if (segments.includes('programs')) return CHANGEFREQ_MAP.program;
    return CHANGEFREQ_MAP.monthly;
  }
  
  return CHANGEFREQ_MAP.static;
}

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
          lastmod: stat.mtime.toISOString().split('T')[0],
          priority: getPriority(urlPath),
          changefreq: getChangeFreq(urlPath)
        });
      }
    }
  }
  
  scanDir(buildPath);
  return urls;
}

/**
 * Load routes from seo/routes.json with enhanced metadata
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
            lastmod: today,
            priority: getPriority(route),
            changefreq: getChangeFreq(route)
          });
        }
      }
    } catch (err) {
      console.error('Error reading seo/routes.json:', err.message);
    }
  }
  
  // Add individual blog post pages
  for (const post of blogPosts) {
    urls.push({
      path: `/blog/${post.slug}`,
      lastmod: post.date,
      priority: PRIORITY_MAP.blogPost,
      changefreq: CHANGEFREQ_MAP.blogPost,
      isNews: true,
      category: post.category
    });
  }
  
  return urls;
}

/**
 * Merge and deduplicate URLs
 */
function mergeUrls(scanUrls, seoUrls) {
  const urlMap = new Map();
  
  // Add scanned URLs first
  for (const url of scanUrls) {
    urlMap.set(url.path, url);
  }
  
  // Add/override with SEO routes
  for (const url of seoUrls) {
    urlMap.set(url.path, url);
  }
  
  // Sort by priority (highest first), then by path
  return Array.from(urlMap.values()).sort((a, b) => {
    if (b.priority !== a.priority) {
      return b.priority - a.priority;
    }
    return a.path.localeCompare(b.path);
  });
}

/**
 * Generate enhanced sitemap XML
 */
function generateSitemapXml(urls) {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n';
  xml += '        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"\n';
  xml += '        xmlns:xhtml="http://www.w3.org/1999/xhtml">\n';
  
  for (const url of urls) {
    xml += '  <url>\n';
    xml += `    <loc>${SITE_ORIGIN}${url.path}</loc>\n`;
    xml += `    <lastmod>${url.lastmod}</lastmod>\n`;
    xml += `    <changefreq>${url.changefreq}</changefreq>\n`;
    xml += `    <priority>${url.priority.toFixed(1)}</priority>\n`;
    xml += '  </url>\n';
  }
  
  xml += '</urlset>';
  return xml;
}

/**
 * Generate news sitemap for blog posts
 */
function generateNewsSitemapXml(urls) {
  const newsUrls = urls.filter(url => url.isNews || url.path.startsWith('/blog/'));
  
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n';
  xml += '        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">\n';
  
  for (const url of newsUrls) {
    xml += '  <url>\n';
    xml += `    <loc>${SITE_ORIGIN}${url.path}</loc>\n`;
    xml += '    <news:news>\n';
    xml += '      <news:publication>\n';
    xml += '        <news:name>Canary Foundation</news:name>\n';
    xml += '        <news:language>en</news:language>\n';
    xml += '      </news:publication>\n';
    xml += `      <news:publication_date>${url.lastmod}</news:publication_date>\n`;
    xml += `      <news:title>${url.path.split('/').pop().replace(/-/g, ' ')}</news:title>\n`;
    if (url.category) {
      xml += `      <news:keywords>${url.category}, cancer research, early detection</news:keywords>\n`;
    }
    xml += '    </news:news>\n';
    xml += '  </url>\n';
  }
  
  xml += '</urlset>';
  return xml;
}

/**
 * Generate sitemap index XML
 */
function generateSitemapIndexXml(sitemaps) {
  const today = new Date().toISOString().split('T')[0];
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  for (const sitemap of sitemaps) {
    xml += '  <sitemap>\n';
    xml += `    <loc>${SITE_ORIGIN}/${sitemap}</loc>\n`;
    xml += `    <lastmod>${today}</lastmod>\n`;
    xml += '  </sitemap>\n';
  }
  
  xml += '</sitemapindex>';
  return xml;
}

/**
 * Generate enhanced LLM/AI sitemap with additional context
 */
function generateLLMSitemapXml(urls) {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<!-- Enhanced sitemap for AI/LLM crawlers with semantic metadata -->\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n';
  xml += '        xmlns:xhtml="http://www.w3.org/1999/xhtml">\n';
  
  // Only include important pages for AI understanding
  const aiUrls = urls.filter(url => url.priority >= 0.6);
  
  for (const url of aiUrls) {
    xml += '  <url>\n';
    xml += `    <loc>${SITE_ORIGIN}${url.path}</loc>\n`;
    xml += `    <lastmod>${url.lastmod}</lastmod>\n`;
    xml += `    <priority>${url.priority.toFixed(1)}</priority>\n`;
    
    // Add semantic hints based on path
    const segments = url.path.split('/').filter(Boolean);
    if (segments[0]) {
      xml += `    <!-- Section: ${segments[0]} -->\n`;
    }
    if (url.path.includes('program')) {
      xml += '    <!-- Type: Research Program -->\n';
    }
    if (url.path.includes('tumor')) {
      xml += '    <!-- Type: Cancer Research -->\n';
    }
    if (url.path.includes('blog')) {
      xml += '    <!-- Type: News/Updates -->\n';
    }
    
    xml += '  </url>\n';
  }
  
  xml += '</urlset>';
  return xml;
}

/**
 * Generate enhanced robots.txt
 */
function generateRobotsTxt() {
  return `# Canary Foundation Robots.txt
# Last updated: ${new Date().toISOString().split('T')[0]}

# Default - Allow all crawlers
User-agent: *
Allow: /
Crawl-delay: 1

# Search Engine Crawlers - No delay
User-agent: Googlebot
Allow: /
Crawl-delay: 0

User-agent: Bingbot
Allow: /
Crawl-delay: 0

# AI/LLM Crawlers
User-agent: GPTBot
Allow: /
Crawl-delay: 2

User-agent: ChatGPT-User
Allow: /
Crawl-delay: 2

User-agent: CCBot
Allow: /
Crawl-delay: 2

User-agent: anthropic-ai
Allow: /
Crawl-delay: 2

User-agent: Claude-Web
Allow: /
Crawl-delay: 2

# Disallow sensitive areas
User-agent: *
Disallow: /api/
Disallow: /admin/
Disallow: /*.json$
Disallow: /server/

# Sitemaps
Sitemap: ${SITE_ORIGIN}/sitemap-index.xml
Sitemap: ${SITE_ORIGIN}/sitemap.xml
Sitemap: ${SITE_ORIGIN}/news-sitemap.xml
Sitemap: ${SITE_ORIGIN}/llm.xml

# Host preference (for supporting crawlers)
Host: ${SITE_ORIGIN}`;
}

/**
 * Generate enhanced ai.txt for AI crawlers
 */
function generateAiTxt() {
  return `# AI/LLM Crawler Instructions for Canary Foundation
# Organization: Canary Foundation - Early Cancer Detection Research
# Domain: ${SITE_ORIGIN}
# Last Updated: ${new Date().toISOString()}

## About This Site
The Canary Foundation is the world's only non-profit organization solely dedicated to the early detection of cancer. 
Founded in 2004, we have invested over $100 million in research aimed at detecting cancer at its earliest, most treatable stages.

## Content Guidelines for AI
- This site contains scientific research information about cancer early detection
- All content is factual and based on peer-reviewed research
- The foundation focuses on 5 main cancer types: prostate, ovarian, pancreatic, lung, and breast
- We collaborate with Stanford, OHSU, and Cancer Research UK

## Key Sections
1. /science - Research programs and scientific breakthroughs
2. /about - Foundation history, mission, and leadership
3. /blog - Latest news and research updates
4. /approach - Our collaborative research methodology

## Crawling Instructions
User-agent: *
Allow: /
Preferred-crawl-rate: 2 pages per second
Sitemap: ${SITE_ORIGIN}/llm.xml

## Data Usage
- Content may be used for educational and informational purposes
- Please attribute information to "Canary Foundation"
- Medical information should not be used for diagnosis or treatment advice

## Contact
For questions about AI/LLM access: info@canaryfoundation.org`;
}

/**
 * Build all crawl assets and write to disk
 */
export function buildCrawlAssets() {
  const scanUrls = scanBuildDirectory();
  const seoUrls = loadSeoRoutes();
  const allUrls = mergeUrls(scanUrls, seoUrls);
  
  console.log(`\n🔍 Enhanced SEO Crawl Asset Generation`);
  console.log(`=======================================`);
  console.log(`  BUILD_DIR: ${BUILD_DIR}`);
  console.log(`  URLs from build scan: ${scanUrls.length}`);
  console.log(`  URLs from seo/routes.json: ${seoUrls.length}`);
  console.log(`  Total unique URLs: ${allUrls.length}`);
  console.log(`  Blog post pages added: ${blogPosts.length}`);
  
  // Analyze priority distribution
  const priorityGroups = {
    '1.0': allUrls.filter(u => u.priority === 1.0).length,
    '0.9': allUrls.filter(u => u.priority === 0.9).length,
    '0.8': allUrls.filter(u => u.priority === 0.8).length,
    '0.7': allUrls.filter(u => u.priority === 0.7).length,
    '0.6': allUrls.filter(u => u.priority === 0.6).length,
    '0.5': allUrls.filter(u => u.priority === 0.5).length,
    '< 0.5': allUrls.filter(u => u.priority < 0.5).length
  };
  
  console.log(`\n📊 Priority Distribution:`);
  Object.entries(priorityGroups).forEach(([priority, count]) => {
    if (count > 0) {
      console.log(`  Priority ${priority}: ${count} pages`);
    }
  });
  
  const result = {
    robotsTxt: generateRobotsTxt(),
    aiTxt: generateAiTxt(),
    urls: allUrls,
    scanCount: scanUrls.length,
    seoCount: seoUrls.length,
    totalCount: allUrls.length
  };
  
  // Build directory path
  const buildPath = path.join(rootDir, BUILD_DIR);
  
  // Ensure build directory exists
  if (!fs.existsSync(buildPath)) {
    fs.mkdirSync(buildPath, { recursive: true });
  }
  
  // Write robots.txt
  fs.writeFileSync(path.join(buildPath, 'robots.txt'), result.robotsTxt);
  console.log(`\n✅ Enhanced robots.txt written`);
  
  // Write ai.txt
  fs.writeFileSync(path.join(buildPath, 'ai.txt'), result.aiTxt);
  console.log(`✅ Enhanced ai.txt written`);
  
  // Generate main sitemap
  result.sitemapXml = generateSitemapXml(allUrls);
  fs.writeFileSync(path.join(buildPath, 'sitemap.xml'), result.sitemapXml);
  console.log(`✅ Main sitemap.xml written (${allUrls.length} URLs)`);
  
  // Generate news sitemap
  result.newsSitemapXml = generateNewsSitemapXml(allUrls);
  fs.writeFileSync(path.join(buildPath, 'news-sitemap.xml'), result.newsSitemapXml);
  const newsCount = allUrls.filter(u => u.isNews || u.path.startsWith('/blog/')).length;
  console.log(`✅ News sitemap written (${newsCount} articles)`);
  
  // Generate LLM sitemap
  result.llmXml = generateLLMSitemapXml(allUrls);
  fs.writeFileSync(path.join(buildPath, 'llm.xml'), result.llmXml);
  const aiCount = allUrls.filter(u => u.priority >= 0.6).length;
  console.log(`✅ LLM/AI sitemap written (${aiCount} important URLs)`);
  
  // Generate sitemap index
  const sitemaps = ['sitemap.xml', 'news-sitemap.xml', 'llm.xml'];
  result.sitemapIndexXml = generateSitemapIndexXml(sitemaps);
  fs.writeFileSync(path.join(buildPath, 'sitemap-index.xml'), result.sitemapIndexXml);
  console.log(`✅ Sitemap index written`);
  
  console.log(`\n🎉 All enhanced SEO assets generated successfully!`);
  console.log(`\n📈 SEO Improvements Applied:`);
  console.log(`  • Dynamic priority based on page importance`);
  console.log(`  • Realistic change frequencies per page type`);
  console.log(`  • Individual blog post pages included`);
  console.log(`  • News sitemap for better blog indexing`);
  console.log(`  • Enhanced LLM/AI sitemap with semantic hints`);
  console.log(`  • Comprehensive robots.txt with crawler instructions`);
  console.log(`  • AI-specific instructions in ai.txt`);
  
  return result;
}

// If run directly (not imported)
if (import.meta.url === `file://${process.argv[1]}`) {
  buildCrawlAssets();
}
