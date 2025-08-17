# Canary Foundation - Production Deployment Guide

## Build Configuration

**BUILD_DIR detected:** `dist/public`

## Deployment Commands

### Build Command
```
npm ci && npm run build && cp production-server.mjs dist/production-server.mjs && node postbuild.js
```

### Start Command  
```
cd dist && node production-server.mjs
```

## Production Server Features

✅ **HTTPS Enforcement** - Redirects all HTTP traffic to HTTPS via x-forwarded-proto header
✅ **Domain Canonicalization** - Redirects www.canaryfoundation.org to canaryfoundation.org (except crawler files)
✅ **Crawler File Support** - robots.txt, sitemap.xml, llm.xml, ai.txt served on both www and apex domains
✅ **Security Headers**:
  - Strict-Transport-Security: max-age=31536000; includeSubDomains
  - X-Content-Type-Options: nosniff
  - Referrer-Policy: strict-origin-when-cross-origin
  - X-Frame-Options: SAMEORIGIN
  - X-XSS-Protection: 1; mode=block

✅ **SPA Support** - Falls back to index.html for client-side routing
✅ **HEAD Request Support** - Returns 200 for all HEAD requests
✅ **Health Endpoints** - `/health` and `/status` return 200 OK
✅ **Robots.txt** - Dynamically serves SEO-friendly robots.txt
✅ **Static Asset Caching** - 1 year cache for assets, 1 hour for HTML
✅ **Compression** - Gzip compression enabled for all responses
✅ **Canonical Tag** - Added to HTML template: https://canaryfoundation.org/

## Verified Domains

- **Primary:** canaryfoundation.org  
- **Secondary:** www.canaryfoundation.org (redirects to primary)

## Testing Commands

### Local Testing
```bash
# Build the application
./deploy-build.sh

# Start the server locally
PORT=3000 npm start
```

### Acceptance Tests
```bash
# Test apex domain
curl -I https://canaryfoundation.org/

# Test www redirect
curl -I https://www.canaryfoundation.org/

# Test crawler user agents
curl -I -A "SiteAuditBot/1.0" https://canaryfoundation.org/
curl -I -A "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)" https://canaryfoundation.org/

# Test health endpoint
curl https://canaryfoundation.org/health

# Test robots.txt
curl https://canaryfoundation.org/robots.txt
```

## Security Scan

Run the security scanner in Replit Deployments after deployment to verify no HIGH/CRITICAL issues exist.

## Deployment Steps

1. Ensure all changes are committed
2. Navigate to Deployments tab
3. Update Build command: `npm ci && npm run build && cp production-server.mjs dist/index.js`
4. Update Start command: `npm start`
5. Deploy to Production
6. Run acceptance tests
7. Run security scan

## Rollback Procedure

If issues occur:
1. Use Replit's deployment rollback feature
2. Restore previous deployment version
3. Investigate issues in staging environment