#!/bin/bash

echo "Testing Production Server Configuration..."
echo "========================================="

# Start the production server
echo "Starting production server..."
timeout 10 npm start > /dev/null 2>&1 &
SERVER_PID=$!
sleep 3

# Test 1: Basic response
echo -e "\n1. Testing basic response:"
curl -s -I http://localhost:3000/ | head -5

# Test 2: Health endpoint
echo -e "\n2. Testing health endpoint:"
curl -s http://localhost:3000/health

# Test 3: Status endpoint
echo -e "\n3. Testing status endpoint:"
curl -s http://localhost:3000/status

# Test 4: Robots.txt
echo -e "\n4. Testing robots.txt:"
curl -s http://localhost:3000/robots.txt

# Test 5: HEAD request
echo -e "\n5. Testing HEAD request:"
curl -s -I -X HEAD http://localhost:3000/about | head -5

# Test 6: SPA fallback
echo -e "\n6. Testing SPA fallback (deep route):"
curl -s -I http://localhost:3000/about/team/member | head -5

# Test 7: Security headers
echo -e "\n7. Checking security headers:"
curl -s -I http://localhost:3000/ | grep -E "(Strict-Transport-Security|X-Content-Type-Options|Referrer-Policy|X-Frame-Options|X-XSS-Protection)"

# Kill the server
kill $SERVER_PID 2>/dev/null

echo -e "\n✅ Server tests complete!"