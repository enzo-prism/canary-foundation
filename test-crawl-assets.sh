#!/bin/bash

echo "Testing Crawl Assets Configuration..."
echo "======================================"

# Start the production server
echo "Starting production server..."
cd dist && timeout 10 node server.js > /dev/null 2>&1 &
SERVER_PID=$!
sleep 3

BASE_URL="http://localhost:3000"

echo -e "\n1. Testing robots.txt:"
echo "----------------------"
curl -sS $BASE_URL/robots.txt | head -n 20
echo ""
curl -I $BASE_URL/robots.txt 2>/dev/null | grep -E "^HTTP|Content-Type"

echo -e "\n2. Testing sitemap.xml:"
echo "-----------------------"
curl -I $BASE_URL/sitemap.xml 2>/dev/null | grep -E "^HTTP|Content-Type"
echo "First 10 lines:"
curl -sS $BASE_URL/sitemap.xml | head -10

echo -e "\n3. Testing llm.xml:"
echo "-------------------"
curl -I $BASE_URL/llm.xml 2>/dev/null | grep -E "^HTTP|Content-Type"
echo "First 10 lines:"
curl -sS $BASE_URL/llm.xml | head -10

echo -e "\n4. Testing ai.txt:"
echo "------------------"
curl -I $BASE_URL/ai.txt 2>/dev/null | grep -E "^HTTP|Content-Type"
curl -sS $BASE_URL/ai.txt | head

echo -e "\n5. Testing HEAD requests:"
echo "-------------------------"
echo "HEAD /sitemap.xml:"
curl -I -X HEAD $BASE_URL/sitemap.xml 2>/dev/null | grep "^HTTP"
echo "HEAD /robots.txt:"
curl -I -X HEAD $BASE_URL/robots.txt 2>/dev/null | grep "^HTTP"

echo -e "\n6. Testing Cache Headers:"
echo "-------------------------"
curl -I $BASE_URL/robots.txt 2>/dev/null | grep -E "Cache-Control|ETag"

# Kill the server
kill $SERVER_PID 2>/dev/null

echo -e "\n✅ Crawl asset tests complete!"