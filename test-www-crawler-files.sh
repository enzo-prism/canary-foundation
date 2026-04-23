#!/bin/bash

set -euo pipefail

source "$(dirname "$0")/scripts/production-test-helpers.sh"

FAILURES=0

trap stop_production_server EXIT

echo "Testing Crawler Files on Both Domains"
echo "======================================"

echo "Building application..."
build_production_bundle > /dev/null

echo "Starting production server..."
start_production_server
BASE_URL="$TEST_BASE_URL"

declare -a hosts=("www.canaryfoundation.org" "canaryfoundation.org")
declare -a endpoints=("/robots.txt" "/sitemap.xml" "/sitemap-index.xml" "/news-sitemap.xml" "/llm.xml" "/ai.txt")

echo -e "\n1. Testing crawler endpoints on both domains:"
echo "---------------------------------------------"
for host in "${hosts[@]}"; do
  echo "${host}:"
  for endpoint in "${endpoints[@]}"; do
    status="$(curl -H "Host: ${host}" -s -o /dev/null -w "%{http_code}" "${BASE_URL}${endpoint}")"
    echo "  ${endpoint}: ${status}"
    if [[ "${status}" != "200" ]]; then
      echo "❌ ${endpoint} failed for ${host}"
      FAILURES=$((FAILURES + 1))
    fi
  done
done

echo -e "\n2. Testing www → apex redirect for a regular page:"
echo "--------------------------------------------------"
headers="$(curl -H "Host: www.canaryfoundation.org" -sSI "${BASE_URL}/about" | tr -d '\r')"
location="$(extract_header_value "${headers}" "location")"
echo "Location: ${location:-<missing>}"
if [[ "${location}" != "https://canaryfoundation.org/about/overview" ]]; then
  echo "❌ Unexpected canonical redirect target"
  FAILURES=$((FAILURES + 1))
else
  echo "✅ Canonical redirect target is correct"
fi

echo -e "\n3. Verifying no HTML in robots.txt:"
echo "------------------------------------"
content="$(curl -H "Host: www.canaryfoundation.org" -fsS "${BASE_URL}/robots.txt")"
if echo "${content}" | grep -q "<!DOCTYPE"; then
  echo "❌ HTML found in robots.txt"
  FAILURES=$((FAILURES + 1))
else
  echo "✅ No HTML in robots.txt"
fi

echo -e "\n======================================"
if [[ "${FAILURES}" -eq 0 ]]; then
  echo "✅ Test complete"
  echo "======================================"
  exit 0
fi

echo "❌ Test failed with ${FAILURES} issue(s)"
echo "======================================"
exit 1
