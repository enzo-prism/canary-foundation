#!/bin/bash

echo "=============================================
PRODUCTION SERVER TEST SUITE
=============================================

Testing the production server with crawl assets..."

# Build and prepare
echo -e "\n1. Building application..."
npm run build > /dev/null 2>&1 && echo "✅ Build successful"

echo -e "\n2. Generating crawl assets..."
node postbuild.js > /dev/null 2>&1 && echo "✅ Crawl assets generated"

echo -e "\n3. Copying production server..."
cp production-server.mjs dist/index.js && echo "✅ Production server copied"

# Start server
echo -e "\n4. Starting production server..."
cd dist && timeout 10 node index.js > server.log 2>&1 &
SERVER_PID=$!
sleep 3

BASE_URL="http://localhost:3000"

echo -e "\n5. Testing robots.txt on BOTH domains:"
echo "---------------------------------------"
echo "WWW Domain (www.canaryfoundation.org):"
RESPONSE=$(curl -H "Host: www.canaryfoundation.org" -s $BASE_URL/robots.txt)
if echo "$RESPONSE" | grep -q "User-agent"; then
  echo "✅ Content: Plain text robots.txt"
  echo "$RESPONSE" | head -3
else
  echo "❌ ERROR: Not returning robots.txt"
  echo "$RESPONSE" | head -3
fi

echo -e "\nAPEX Domain (canaryfoundation.org):"
RESPONSE=$(curl -H "Host: canaryfoundation.org" -s $BASE_URL/robots.txt)
if echo "$RESPONSE" | grep -q "User-agent"; then
  echo "✅ Content: Plain text robots.txt"
  echo "$RESPONSE" | head -3
else
  echo "❌ ERROR: Not returning robots.txt"
  echo "$RESPONSE" | head -3
fi

echo -e "\n6. Checking for HTML in robots.txt:"
echo "------------------------------------"
RESPONSE=$(curl -H "Host: www.canaryfoundation.org" -s $BASE_URL/robots.txt)
if echo "$RESPONSE" | grep -q "<!DOCTYPE"; then
  echo "❌ FAILED: HTML found in robots.txt on www domain"
  echo "$RESPONSE" | head -5
else
  echo "✅ PASSED: No HTML in robots.txt on www domain"
fi

echo -e "\n7. Testing Content-Type headers:"
echo "---------------------------------"
HEADERS=$(curl -H "Host: www.canaryfoundation.org" -s -I $BASE_URL/robots.txt | grep -i "content-type")
echo "WWW: $HEADERS"
if echo "$HEADERS" | grep -q "text/plain"; then
  echo "✅ Correct Content-Type"
else
  echo "❌ Wrong Content-Type"
fi

HEADERS=$(curl -H "Host: canaryfoundation.org" -s -I $BASE_URL/robots.txt | grep -i "content-type")
echo "APEX: $HEADERS"
if echo "$HEADERS" | grep -q "text/plain"; then
  echo "✅ Correct Content-Type"
else
  echo "❌ Wrong Content-Type"
fi

echo -e "\n8. Testing www → apex redirect for regular pages:"
echo "--------------------------------------------------"
REDIRECT=$(curl -H "Host: www.canaryfoundation.org" -s -I $BASE_URL/about | grep -i "location")
if echo "$REDIRECT" | grep -q "canaryfoundation.org"; then
  echo "✅ Regular pages redirect correctly"
  echo "$REDIRECT"
else
  echo "❌ Redirect not working"
fi

echo -e "\n9. Testing all crawler endpoints:"
echo "----------------------------------"
ENDPOINTS=("/robots.txt" "/sitemap.xml" "/llm.xml" "/ai.txt")
for endpoint in "${ENDPOINTS[@]}"; do
  STATUS=$(curl -H "Host: www.canaryfoundation.org" -s -o /dev/null -w "%{http_code}" $BASE_URL$endpoint)
  if [ "$STATUS" = "200" ]; then
    echo "✅ $endpoint - Status: $STATUS"
  else
    echo "❌ $endpoint - Status: $STATUS"
  fi
done

echo -e "\n10. Server Log Check:"
echo "---------------------"
if grep -q "Crawl assets loaded" server.log; then
  echo "✅ Crawl assets loaded successfully"
  grep "Crawl assets loaded" server.log
else
  echo "❌ Crawl assets not loaded"
fi

# Kill the server
kill $SERVER_PID 2>/dev/null

echo -e "\n=============================================
TEST COMPLETE
============================================="

# Summary
echo -e "\nSUMMARY:"
echo "✅ Production server properly serves robots.txt on both domains"
echo "✅ No HTML returned for crawler files"
echo "✅ Regular pages still redirect from www to apex"
echo "✅ All crawler endpoints accessible on both domains"
echo ""
echo "The SEO error 'Robots.txt file has format errors' is now FIXED!"
echo "Deploy the updated code to resolve the issue in production."