#!/bin/bash

set -euo pipefail

source "$(dirname "$0")/scripts/production-test-helpers.sh"

EXIT_CODE=0

trap stop_production_server EXIT

echo "=========================================="
echo "VERIFYING PRODUCTION FIX FOR ROBOTS.TXT"
echo "=========================================="

echo -e "\n1. Building fresh..."
build_production_bundle > /dev/null

echo "2. Starting dist/index.js..."
start_production_server "dist/server.log"
BASE_URL="$TEST_BASE_URL"

echo -e "\n3. Testing www.canaryfoundation.org/robots.txt:"
echo "================================================"
response="$(curl -H "Host: www.canaryfoundation.org" -fsS "${BASE_URL}/robots.txt")"

if echo "${response}" | grep -q "<!DOCTYPE"; then
  echo "❌ CRITICAL ERROR: HTML found in robots.txt!"
  echo "First 5 lines of response:"
  echo "${response}" | head -5
  EXIT_CODE=1
else
  echo "✅ SUCCESS: No HTML found - returning plain text robots.txt"
  echo "First 5 lines of response:"
  echo "${response}" | head -5
fi

echo -e "\n4. Checking Content-Type header:"
content_type="$(extract_header_value "$(curl -H "Host: www.canaryfoundation.org" -sSI "${BASE_URL}/robots.txt" | tr -d '\r')" "content-type")"
echo "Content-Type: ${content_type}"
if [[ "${content_type}" == text/plain* ]]; then
  echo "✅ Correct Content-Type"
else
  echo "❌ Wrong Content-Type"
  EXIT_CODE=1
fi

echo -e "\n5. Server logs:"
if grep -q "serving on port ${TEST_PORT}" dist/server.log; then
  echo "✅ Production server started"
  grep "serving on port ${TEST_PORT}" dist/server.log
else
  echo "❌ Expected startup log not found"
  EXIT_CODE=1
fi

echo -e "\n=========================================="
if [[ "${EXIT_CODE}" -eq 0 ]]; then
  echo "✅ PRODUCTION FIX VERIFIED SUCCESSFULLY!"
  echo "The robots.txt SEO error is fixed."
  echo ""
  echo "Deploy with these commands:"
  echo "  Build: npm ci && npm run build && node postbuild.js"
  echo "  Start: npm run start"
else
  echo "❌ PRODUCTION FIX FAILED!"
  echo "The robots.txt response is still incorrect."
fi
echo "=========================================="

exit "${EXIT_CODE}"
