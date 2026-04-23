#!/bin/bash

set -euo pipefail

source "$(dirname "$0")/scripts/production-test-helpers.sh"

FAILURES=0
SERVER_LOG="dist/server.log"

trap stop_production_server EXIT

echo "============================================="
echo "PRODUCTION SERVER TEST SUITE"
echo "============================================="
echo ""
echo "Testing the built production server with crawl assets..."

echo -e "\n1. Building application..."
build_production_bundle > /dev/null
echo "✅ Build successful"

echo -e "\n2. Starting production server..."
start_production_server "$SERVER_LOG"
BASE_URL="$TEST_BASE_URL"
echo "✅ Server ready on ${BASE_URL}"

echo -e "\n3. Testing robots.txt on BOTH domains:"
echo "---------------------------------------"
for host in "www.canaryfoundation.org" "canaryfoundation.org"; do
  response="$(curl -H "Host: ${host}" -fsS "${BASE_URL}/robots.txt")"
  echo "${host}:"
  echo "${response}" | head -3
  if echo "${response}" | grep -qi "user-agent"; then
    echo "✅ Content looks correct"
  else
    echo "❌ robots.txt did not return crawler directives"
    FAILURES=$((FAILURES + 1))
  fi
done

echo -e "\n4. Checking for HTML in robots.txt:"
echo "------------------------------------"
response="$(curl -H "Host: www.canaryfoundation.org" -fsS "${BASE_URL}/robots.txt")"
if echo "${response}" | grep -q "<!DOCTYPE"; then
  echo "❌ HTML found in robots.txt on www domain"
  FAILURES=$((FAILURES + 1))
else
  echo "✅ No HTML in robots.txt on www domain"
fi

echo -e "\n5. Testing Content-Type headers:"
echo "---------------------------------"
for host in "www.canaryfoundation.org" "canaryfoundation.org"; do
  headers="$(curl -H "Host: ${host}" -sSI "${BASE_URL}/robots.txt" | tr -d '\r')"
  echo "${host}:"
  echo "${headers}" | grep -i "^content-type:" || true
  if echo "${headers}" | grep -qi "^content-type: text/plain"; then
    echo "✅ Correct Content-Type"
  else
    echo "❌ Wrong Content-Type"
    FAILURES=$((FAILURES + 1))
  fi
done

echo -e "\n6. Testing www → apex redirect for regular pages:"
echo "--------------------------------------------------"
redirect="$(curl -H "Host: www.canaryfoundation.org" -sSI "${BASE_URL}/about" | tr -d '\r')"
location="$(extract_header_value "${redirect}" "location")"
if [[ "${location}" == "https://canaryfoundation.org/about/overview" ]]; then
  echo "✅ Regular pages redirect correctly"
  echo "Location: ${location}"
else
  echo "❌ Unexpected redirect target: ${location:-<missing>}"
  FAILURES=$((FAILURES + 1))
fi

echo -e "\n7. Testing all crawler endpoints:"
echo "----------------------------------"
declare -a endpoints=(
  "/robots.txt"
  "/sitemap.xml"
  "/sitemap-index.xml"
  "/news-sitemap.xml"
  "/llm.xml"
  "/ai.txt"
)

for endpoint in "${endpoints[@]}"; do
  status="$(curl -H "Host: www.canaryfoundation.org" -s -o /dev/null -w "%{http_code}" "${BASE_URL}${endpoint}")"
  if [[ "${status}" == "200" ]]; then
    echo "✅ ${endpoint} - Status: ${status}"
  else
    echo "❌ ${endpoint} - Status: ${status}"
    FAILURES=$((FAILURES + 1))
  fi
done

echo -e "\n8. Server Log Check:"
echo "---------------------"
if grep -q "serving on port ${TEST_PORT}" "${SERVER_LOG}"; then
  echo "✅ Production server started successfully"
  grep "serving on port ${TEST_PORT}" "${SERVER_LOG}"
else
  echo "❌ Production server did not log a clean startup"
  FAILURES=$((FAILURES + 1))
fi

echo -e "\n============================================="
if [[ "${FAILURES}" -eq 0 ]]; then
  echo "✅ TEST COMPLETE - all checks passed"
  echo "============================================="
  exit 0
fi

echo "❌ TEST COMPLETE - ${FAILURES} check(s) failed"
echo "============================================="
exit 1
