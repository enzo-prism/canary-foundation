#!/bin/bash

set -euo pipefail

source "$(dirname "$0")/scripts/production-test-helpers.sh"

FAILURES=0

trap stop_production_server EXIT

echo "Testing Crawl Assets Configuration..."
echo "======================================"

echo "Building application..."
build_production_bundle > /dev/null

echo "Starting production server..."
start_production_server
BASE_URL="$TEST_BASE_URL"

declare -a assets=(
  "robots.txt:text/plain:# Canary Foundation Robots.txt"
  "sitemap.xml:application/xml:<urlset"
  "sitemap-index.xml:application/xml:<sitemapindex"
  "news-sitemap.xml:application/xml:<urlset"
  "llm.xml:application/xml:<urlset"
  "ai.txt:text/plain:Sitemap: https://canaryfoundation.org/llm.xml"
)

echo -e "\n1. Validating crawl asset responses:"
echo "------------------------------------"
for asset in "${assets[@]}"; do
  path="${asset%%:*}"
  remainder="${asset#*:}"
  expected_type="${remainder%%:*}"
  expected_snippet="${remainder#*:}"

  headers="$(curl -sSI "${BASE_URL}/${path}" | tr -d '\r')"
  body="$(curl -fsS "${BASE_URL}/${path}")"
  status="$(echo "${headers}" | awk 'NR==1 {print $2}')"
  type_header="$(extract_header_value "${headers}" "content-type")"

  echo "/${path}: ${status} ${type_header}"

  if [[ "${status}" != "200" ]]; then
    echo "❌ Unexpected status for /${path}"
    FAILURES=$((FAILURES + 1))
  fi

  if [[ "${type_header}" != "${expected_type}"* ]]; then
    echo "❌ Unexpected content type for /${path}"
    FAILURES=$((FAILURES + 1))
  fi

  if ! echo "${body}" | grep -q "${expected_snippet}"; then
    echo "❌ Body for /${path} is missing the expected content snippet"
    FAILURES=$((FAILURES + 1))
  fi
done

echo -e "\n2. Testing HEAD requests:"
echo "-------------------------"
for path in "robots.txt" "sitemap.xml" "sitemap-index.xml" "news-sitemap.xml"; do
  status="$(curl -sS -I -X HEAD -o /dev/null -w "%{http_code}" "${BASE_URL}/${path}")"
  echo "HEAD /${path}: ${status}"
  if [[ "${status}" != "200" ]]; then
    echo "❌ HEAD request failed for /${path}"
    FAILURES=$((FAILURES + 1))
  fi
done

echo -e "\n3. Testing cache validators:"
echo "----------------------------"
headers="$(curl -sSI "${BASE_URL}/robots.txt" | tr -d '\r')"
if echo "${headers}" | grep -Eq "Cache-Control|ETag"; then
  echo "✅ Cache validators present on robots.txt"
else
  echo "❌ No Cache-Control or ETag header found on robots.txt"
  FAILURES=$((FAILURES + 1))
fi

echo -e "\n======================================"
if [[ "${FAILURES}" -eq 0 ]]; then
  echo "✅ Crawl asset tests complete"
  echo "======================================"
  exit 0
fi

echo "❌ Crawl asset tests failed with ${FAILURES} issue(s)"
echo "======================================"
exit 1
