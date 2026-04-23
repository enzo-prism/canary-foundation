#!/bin/bash

set -euo pipefail

source "$(dirname "$0")/scripts/production-test-helpers.sh"

FAILURES=0

trap stop_production_server EXIT

echo "==========================================="
echo "FINAL PRODUCTION TEST - CRAWLER FILES"
echo "==========================================="

echo -e "\nPreparing production build..."
build_production_bundle > /dev/null

echo "Starting production server..."
start_production_server "dist/server.log"
BASE_URL="$TEST_BASE_URL"

echo -e "\n✅ SERVER STATUS:"
grep "serving on port ${TEST_PORT}" dist/server.log || {
  echo "❌ Startup log missing"
  FAILURES=$((FAILURES + 1))
}

echo -e "\n📋 TEST RESULTS:"
echo "=================="

for host in "www.canaryfoundation.org" "canaryfoundation.org"; do
  echo -e "\n${host}/robots.txt:"
  response="$(curl -H "Host: ${host}" -fsS "${BASE_URL}/robots.txt")"
  status="$(curl -H "Host: ${host}" -s -o /dev/null -w "%{http_code}" "${BASE_URL}/robots.txt")"
  if [[ "${status}" == "200" ]] && echo "${response}" | grep -qi "user-agent"; then
    echo "   ✅ Status: ${status} - Returns plain text robots.txt"
    echo "${response}" | head -3 | sed 's/^/   /'
  else
    echo "   ❌ Status: ${status} - Error"
    FAILURES=$((FAILURES + 1))
  fi
done

echo -e "\nHTML Content Check:"
response="$(curl -H "Host: www.canaryfoundation.org" -fsS "${BASE_URL}/robots.txt")"
if echo "${response}" | grep -q "<!DOCTYPE"; then
  echo "   ❌ HTML found in robots.txt"
  FAILURES=$((FAILURES + 1))
else
  echo "   ✅ No HTML - pure text file"
fi

echo -e "\nContent-Type Headers:"
type_www="$(extract_header_value "$(curl -H "Host: www.canaryfoundation.org" -sSI "${BASE_URL}/robots.txt" | tr -d '\r')" "content-type")"
type_apex="$(extract_header_value "$(curl -H "Host: canaryfoundation.org" -sSI "${BASE_URL}/robots.txt" | tr -d '\r')" "content-type")"
echo "   WWW:  ${type_www}"
echo "   APEX: ${type_apex}"
if [[ "${type_www}" == text/plain* && "${type_apex}" == text/plain* ]]; then
  echo "   ✅ Both domains serve correct Content-Type"
else
  echo "   ❌ Wrong Content-Type"
  FAILURES=$((FAILURES + 1))
fi

echo -e "\nAll crawler files status:"
for endpoint in robots.txt sitemap.xml sitemap-index.xml news-sitemap.xml llm.xml ai.txt; do
  status="$(curl -H "Host: www.canaryfoundation.org" -s -o /dev/null -w "%{http_code}" "${BASE_URL}/${endpoint}")"
  if [[ "${status}" == "200" ]]; then
    echo "   ✅ /${endpoint} - Status: ${status}"
  else
    echo "   ❌ /${endpoint} - Status: ${status}"
    FAILURES=$((FAILURES + 1))
  fi
done

echo -e "\nRegular Page Redirect (www → apex):"
location="$(extract_header_value "$(curl -H "Host: www.canaryfoundation.org" -sSI "${BASE_URL}/about" | tr -d '\r')" "location")"
if [[ "${location}" == "https://canaryfoundation.org/about/overview" ]]; then
  echo "   ✅ Redirects correctly: ${location}"
else
  echo "   ❌ Redirect target was ${location:-<missing>}"
  FAILURES=$((FAILURES + 1))
fi

echo -e "\n==========================================="
if [[ "${FAILURES}" -eq 0 ]]; then
  echo "✅ PRODUCTION CHECK COMPLETE"
  echo "==========================================="
  echo "Build: npm ci && npm run build && node postbuild.js"
  echo "Start: npm run start"
  exit 0
fi

echo "❌ PRODUCTION CHECK FAILED WITH ${FAILURES} ISSUE(S)"
echo "==========================================="
exit 1
