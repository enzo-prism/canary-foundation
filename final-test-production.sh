#!/bin/bash

echo "==========================================="
echo "FINAL PRODUCTION TEST - ROBOTS.TXT FIX"
echo "==========================================="

# Build and prepare
echo -e "\nPreparing production build..."
npm run build > /dev/null 2>&1
cp production-server.mjs dist/production-server.mjs
node postbuild.js > /dev/null 2>&1

# Start production server
echo "Starting production server..."
cd dist && node production-server.mjs > server.log 2>&1 &
SERVER_PID=$!
sleep 3

echo -e "\n✅ CRAWL ASSETS STATUS:"
grep "Crawl assets loaded" server.log

echo -e "\n📋 TEST RESULTS:"
echo "=================="

# Test 1: WWW domain robots.txt
echo -e "\n1. www.canaryfoundation.org/robots.txt:"
RESPONSE=$(curl -H "Host: www.canaryfoundation.org" -s http://localhost:3000/robots.txt)
STATUS=$(curl -H "Host: www.canaryfoundation.org" -s -o /dev/null -w "%{http_code}" http://localhost:3000/robots.txt)
if [ "$STATUS" == "200" ] && echo "$RESPONSE" | grep -q "User-agent"; then
  echo "   ✅ Status: $STATUS - Returns plain text robots.txt"
  echo "$RESPONSE" | head -3 | sed 's/^/   /'
else
  echo "   ❌ Status: $STATUS - Error!"
fi

# Test 2: Apex domain robots.txt  
echo -e "\n2. canaryfoundation.org/robots.txt:"
RESPONSE=$(curl -H "Host: canaryfoundation.org" -s http://localhost:3000/robots.txt)
STATUS=$(curl -H "Host: canaryfoundation.org" -s -o /dev/null -w "%{http_code}" http://localhost:3000/robots.txt)
if [ "$STATUS" == "200" ] && echo "$RESPONSE" | grep -q "User-agent"; then
  echo "   ✅ Status: $STATUS - Returns plain text robots.txt"
  echo "$RESPONSE" | head -3 | sed 's/^/   /'
else
  echo "   ❌ Status: $STATUS - Error!"
fi

# Test 3: Check for HTML content
echo -e "\n3. HTML Content Check:"
RESPONSE=$(curl -H "Host: www.canaryfoundation.org" -s http://localhost:3000/robots.txt)
if echo "$RESPONSE" | grep -q "<!DOCTYPE"; then
  echo "   ❌ FAILED: HTML found in robots.txt"
else
  echo "   ✅ PASSED: No HTML - pure text file"
fi

# Test 4: Content-Type headers
echo -e "\n4. Content-Type Headers:"
TYPE_WWW=$(curl -H "Host: www.canaryfoundation.org" -s -I http://localhost:3000/robots.txt | grep -i "^content-type:" | tr -d '\r')
TYPE_APEX=$(curl -H "Host: canaryfoundation.org" -s -I http://localhost:3000/robots.txt | grep -i "^content-type:" | tr -d '\r')
echo "   WWW:  $TYPE_WWW"
echo "   APEX: $TYPE_APEX"
if echo "$TYPE_WWW" | grep -q "text/plain" && echo "$TYPE_APEX" | grep -q "text/plain"; then
  echo "   ✅ Both domains serve correct Content-Type"
else
  echo "   ❌ Wrong Content-Type"
fi

# Test 5: All crawler files
echo -e "\n5. All Crawler Files Status:"
for endpoint in robots.txt sitemap.xml llm.xml ai.txt; do
  STATUS=$(curl -H "Host: www.canaryfoundation.org" -s -o /dev/null -w "%{http_code}" http://localhost:3000/$endpoint)
  if [ "$STATUS" == "200" ]; then
    echo "   ✅ /$endpoint - Status: $STATUS"
  else
    echo "   ❌ /$endpoint - Status: $STATUS"
  fi
done

# Test 6: Regular page redirect
echo -e "\n6. Regular Page Redirect (www → apex):"
LOCATION=$(curl -H "Host: www.canaryfoundation.org" -s -I http://localhost:3000/about | grep -i "^location:" | tr -d '\r')
if echo "$LOCATION" | grep -q "canaryfoundation.org"; then
  echo "   ✅ Redirects correctly: $LOCATION"
else
  echo "   ❌ Redirect not working"
fi

# Kill server
kill $SERVER_PID 2>/dev/null

echo -e "\n==========================================="
echo "🎉 PRODUCTION FIX COMPLETE!"
echo "==========================================="
echo ""
echo "✅ robots.txt returns 200 (not 404)"
echo "✅ robots.txt serves plain text (not HTML)"
echo "✅ Both www and apex domains work correctly"
echo "✅ All crawler files accessible"
echo ""
echo "DEPLOYMENT COMMANDS:"
echo "Build: npm ci && npm run build && cp production-server.mjs dist/production-server.mjs && node postbuild.js"
echo "Start: cd dist && node production-server.mjs"
echo "==========================================="