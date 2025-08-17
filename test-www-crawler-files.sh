#!/bin/bash

echo "Testing Crawler Files on Both Domains"
echo "======================================"

# Start the production server
cd dist && timeout 10 node server.js > /dev/null 2>&1 &
SERVER_PID=$!
sleep 3

echo -e "\n1. Testing robots.txt on WWW domain:"
echo "-------------------------------------"
curl -H "Host: www.canaryfoundation.org" -s -I http://localhost:3000/robots.txt | grep -E "^HTTP|Content-Type"
curl -H "Host: www.canaryfoundation.org" -s http://localhost:3000/robots.txt | head -3

echo -e "\n2. Testing robots.txt on APEX domain:"
echo "--------------------------------------"
curl -H "Host: canaryfoundation.org" -s -I http://localhost:3000/robots.txt | grep -E "^HTTP|Content-Type"
curl -H "Host: canaryfoundation.org" -s http://localhost:3000/robots.txt | head -3

echo -e "\n3. Testing sitemap.xml on WWW domain:"
echo "--------------------------------------"
curl -H "Host: www.canaryfoundation.org" -s -I http://localhost:3000/sitemap.xml | grep -E "^HTTP|Content-Type"

echo -e "\n4. Testing sitemap.xml on APEX domain:"
echo "---------------------------------------"
curl -H "Host: canaryfoundation.org" -s -I http://localhost:3000/sitemap.xml | grep -E "^HTTP|Content-Type"

echo -e "\n5. Testing regular page redirect (www → apex):"
echo "------------------------------------------------"
curl -H "Host: www.canaryfoundation.org" -s -I http://localhost:3000/about | grep -E "^HTTP|Location"

echo -e "\n6. Verifying no HTML in robots.txt:"
echo "------------------------------------"
CONTENT=$(curl -H "Host: www.canaryfoundation.org" -s http://localhost:3000/robots.txt)
if echo "$CONTENT" | grep -q "<!DOCTYPE"; then
  echo "❌ FAILED: HTML found in robots.txt"
else
  echo "✅ PASSED: No HTML in robots.txt"
fi

# Kill the server
kill $SERVER_PID 2>/dev/null

echo -e "\n✅ Test complete!"