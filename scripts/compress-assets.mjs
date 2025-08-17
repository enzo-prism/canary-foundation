import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import zlib from 'zlib';
import { promisify } from 'util';

const gzip = promisify(zlib.gzip);
const brotli = promisify(zlib.brotliCompress);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');

const ASSETS_DIR = path.join(rootDir, 'dist', 'public', 'assets');

/**
 * Compress CSS and JS files
 */
async function compressAssets() {
  console.log('Pre-compressing assets for production...');
  
  if (!fs.existsSync(ASSETS_DIR)) {
    console.error(`Assets directory ${ASSETS_DIR} not found`);
    return;
  }
  
  const files = fs.readdirSync(ASSETS_DIR);
  let compressedCount = 0;
  
  for (const file of files) {
    if (file.endsWith('.js') || file.endsWith('.css')) {
      const filePath = path.join(ASSETS_DIR, file);
      const content = fs.readFileSync(filePath);
      const originalSize = content.length;
      
      // Create gzip version
      try {
        const gzipped = await gzip(content, { level: 9 });
        fs.writeFileSync(`${filePath}.gz`, gzipped);
        const gzipSize = gzipped.length;
        const gzipRatio = ((1 - gzipSize / originalSize) * 100).toFixed(1);
        console.log(`  ✓ ${file}: ${(originalSize/1024).toFixed(1)}KB → ${(gzipSize/1024).toFixed(1)}KB (${gzipRatio}% reduction)`);
        compressedCount++;
      } catch (error) {
        console.error(`  ✗ Failed to gzip ${file}:`, error.message);
      }
      
      // Create brotli version for modern browsers
      try {
        const brotlied = await brotli(content, {
          params: {
            [zlib.constants.BROTLI_PARAM_QUALITY]: 11
          }
        });
        fs.writeFileSync(`${filePath}.br`, brotlied);
      } catch (error) {
        // Brotli is optional, don't log errors
      }
    }
  }
  
  console.log(`\n✅ Pre-compressed ${compressedCount} assets`);
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  compressAssets();
}

export { compressAssets };