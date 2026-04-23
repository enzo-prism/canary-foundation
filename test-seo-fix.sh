#!/bin/bash

set -euo pipefail

source "$(dirname "$0")/scripts/production-test-helpers.sh"

FAILURES=0

trap stop_production_server EXIT

echo "================================"
echo "SEO COMPRESSION FIX TEST"
echo "================================"

echo "Building project..."
build_production_bundle > /dev/null

JS_FILE="$(basename "$(find dist/public/assets -maxdepth 1 -name 'index-*.js' | head -1)")"
CSS_FILE="$(basename "$(find dist/public/assets -maxdepth 1 -name 'index-*.css' | head -1)")"

if [[ -z "${JS_FILE}" || -z "${CSS_FILE}" ]]; then
  echo "❌ Could not locate built JS/CSS assets."
  exit 1
fi

start_production_server "dist/server.log"
BASE_URL="$TEST_BASE_URL"

echo -e "\nCompression test results:"
echo "=========================="

test_asset_compression() {
  local filename="$1"
  local label="$2"
  local original_size
  local headers
  local encoding
  local compressed_path
  local compressed_size

  original_size="$(stat -f%z "dist/public/assets/${filename}")"
  headers="$(curl -H "Accept-Encoding: gzip, br" -sSI "${BASE_URL}/assets/${filename}" | tr -d '\r')"
  encoding="$(extract_header_value "${headers}" "content-encoding")"

  echo "${label} (${filename})"
  echo "  Original: $((original_size / 1024))KB"

  if [[ -n "${encoding}" ]]; then
    if [[ "${encoding}" == "br" ]]; then
      compressed_path="dist/public/assets/${filename}.br"
    else
      compressed_path="dist/public/assets/${filename}.gz"
    fi

    compressed_size="$(stat -f%z "${compressed_path}")"
    reduction=$((100 - (compressed_size * 100 / original_size)))
    echo "  Compressed: $((compressed_size / 1024))KB (${encoding})"
    echo "  ✅ Reduction: ${reduction}%"
  else
    echo "  ❌ Asset was not served with pre-compression"
    FAILURES=$((FAILURES + 1))
  fi
}

test_asset_compression "${JS_FILE}" "JavaScript"
test_asset_compression "${CSS_FILE}" "CSS"

echo -e "\nEncoding support:"
echo "------------------"
if curl -H "Accept-Encoding: br" -sSI "${BASE_URL}/assets/${JS_FILE}" | grep -q "Content-Encoding: br"; then
  echo "✅ Brotli supported"
else
  echo "❌ Brotli not supported"
  FAILURES=$((FAILURES + 1))
fi

if curl -H "Accept-Encoding: gzip" -sSI "${BASE_URL}/assets/${JS_FILE}" | grep -q "Content-Encoding: gzip"; then
  echo "✅ Gzip supported"
else
  echo "❌ Gzip not supported"
  FAILURES=$((FAILURES + 1))
fi

echo -e "\nPre-compressed files:"
echo "----------------------"
compression_count="$(find dist/public/assets -maxdepth 1 \( -name '*.gz' -o -name '*.br' \) | wc -l | tr -d ' ')"
find dist/public/assets -maxdepth 1 \( -name '*.gz' -o -name '*.br' \) -exec ls -lh {} \; | awk '{print "  " $9 ": " $5}'
if [[ "${compression_count}" -lt 2 ]]; then
  echo "❌ Missing pre-compressed build artifacts"
  FAILURES=$((FAILURES + 1))
fi

echo -e "\n================================"
if [[ "${FAILURES}" -eq 0 ]]; then
  echo "✅ Compression checks passed"
  echo "================================"
  exit 0
fi

echo "❌ Compression checks failed with ${FAILURES} issue(s)"
echo "================================"
exit 1
