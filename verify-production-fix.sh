#!/bin/bash

echo "=========================================="
echo "VERIFYING PRODUCTION FIX FOR ROBOTS.TXT"
echo "=========================================="

# Clean build
echo -e "\n1. Building fresh..."
npm run build > /dev/null 2>&1

# Copy production server
echo "2. Copying production server..."
cp production-server.mjs dist/production-server.mjs

# Generate crawl assets
echo "3. Generating crawl assets..."
node postbuild.js > /dev/null 2>&1

# Start the CORRECT production server
echo "4. Starting production-server.mjs..."
cd dist && node production-server.mjs > server.log 2>&1 &
SERVER_PID=$!
sleep 3

# Test www domain robots.txt
echo -e "\n5. Testing www.canaryfoundation.org/robots.txt:"
echo "================================================"
RESPONSE=$(curl -H "Host: www.canaryfoundation.org" -s http://localhost:3000/robots.txt)

# Check for DOCTYPE (the error indicator)
if echo "$RESPONSE" | grep -q "<!DOCTYPE"; then
  echo "❌ CRITICAL ERROR: HTML found in robots.txt!"
  echo "First 5 lines of response:"
  echo "$RESPONSE" | head -5
  EXIT_CODE=1
else
  echo "✅ SUCCESS: No HTML found - returning plain text robots.txt"
  echo "First 5 lines of response:"
  echo "$RESPONSE" | head -5
  EXIT_CODE=0
fi

# Test content type
echo -e "\n6. Checking Content-Type header:"
CONTENT_TYPE=$(curl -H "Host: www.canaryfoundation.org" -s -I http://localhost:3000/robots.txt | grep -i "^content-type:")
echo "$CONTENT_TYPE"
if echo "$CONTENT_TYPE" | grep -q "text/plain"; then
  echo "✅ Correct Content-Type"
else
  echo "❌ Wrong Content-Type"
  EXIT_CODE=1
fi

# Check server logs
echo -e "\n7. Server logs:"
if grep -q "Crawl assets loaded" server.log; then
  echo "✅ Crawl assets loaded"
  grep "Crawl assets loaded" server.log
else
  echo "⚠️  Crawl assets not mentioned in logs (using fallback)"
fi

# Kill server
kill $SERVER_PID 2>/dev/null

echo -e "\n=========================================="
if [ $EXIT_CODE -eq 0 ]; then
  echo "✅ PRODUCTION FIX VERIFIED SUCCESSFULLY!"
  echo "The robots.txt SEO error is FIXED."
  echo ""
  echo "Deploy with these commands:"
  echo "  Build: npm ci && npm run build && cp production-server.mjs dist/production-server.mjs && node postbuild.js"
  echo "  Start: cd dist && node production-server.mjs"
else
  echo "❌ PRODUCTION FIX FAILED!"
  echo "The robots.txt is still returning HTML."
fi
echo "=========================================="

exit $EXIT_CODE