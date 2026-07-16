#!/bin/bash

# Builds and exercises production-only HTTP behavior: route status, security
# headers, caching, contact abuse controls, and crawler metadata.
set -euo pipefail

source "$(dirname "$0")/production-test-helpers.sh"

FAILURES=0
trap stop_production_server EXIT

expect_status() {
  local expected="$1"
  local method="$2"
  local path="$3"
  shift 3
  local actual
  actual="$(curl -sS -o /tmp/canary-platform-response -w "%{http_code}" -X "$method" "$@" "${TEST_BASE_URL}${path}")"
  if [[ "$actual" != "$expected" ]]; then
    echo "FAIL: ${method} ${path} returned ${actual}, expected ${expected}"
    FAILURES=$((FAILURES + 1))
  else
    echo "PASS: ${method} ${path} returned ${actual}"
  fi
}

if [[ "${SKIP_BUILD:-0}" != "1" ]]; then
  echo "Building the production bundle..."
  build_production_bundle >/tmp/canary-platform-build.log
fi
start_production_server "dist/platform-hardening-server.log"

expect_status 200 GET "/contact"
expect_status 404 GET "/this-route-does-not-exist"
if ! grep -q 'name="robots" content="noindex, nofollow"' /tmp/canary-platform-response; then
  echo "FAIL: unknown route is missing noindex metadata"
  FAILURES=$((FAILURES + 1))
fi

expect_status 404 GET "/api/unknown"
if ! grep -q '"error":"Not found"' /tmp/canary-platform-response; then
  echo "FAIL: unknown API route did not return JSON not-found response"
  FAILURES=$((FAILURES + 1))
fi

headers="$(curl -sSI "${TEST_BASE_URL}/contact" | tr -d '\r')"
for header in permissions-policy content-security-policy-report-only x-content-type-options referrer-policy; do
  if ! echo "$headers" | grep -qi "^${header}:"; then
    echo "FAIL: /contact is missing ${header}"
    FAILURES=$((FAILURES + 1))
  fi
done
if ! echo "$headers" | grep -qi '^cache-control:.*no-cache.*no-store'; then
  echo "FAIL: HTML is not marked fresh/no-store"
  FAILURES=$((FAILURES + 1))
fi

if ! grep -q 'property="og:image" content="https://canaryfoundation.org/opengraph.png"' /tmp/canary-platform-response; then
  curl -fsS "${TEST_BASE_URL}/contact" >/tmp/canary-platform-response
fi
if ! grep -q 'property="og:image" content="https://canaryfoundation.org/opengraph.png"' /tmp/canary-platform-response; then
  echo "FAIL: server HTML does not use an absolute OpenGraph image"
  FAILURES=$((FAILURES + 1))
fi

asset="$(find dist/public/assets -maxdepth 1 -type f \( -name '*.js' -o -name '*.css' \) | head -n 1)"
if [[ -n "$asset" ]]; then
  asset_headers="$(curl -sSI "${TEST_BASE_URL}/assets/$(basename "$asset")" | tr -d '\r')"
  if ! echo "$asset_headers" | grep -qi '^cache-control:.*max-age=31536000.*immutable'; then
    echo "FAIL: hashed asset is missing immutable caching"
    FAILURES=$((FAILURES + 1))
  fi
fi

valid_payload='{"name":"Website Test","email":"test@example.com","subject":"Website question","message":"This is a valid website test message."}'
expect_status 202 POST "/api/contact" \
  -H 'Content-Type: application/json' -H 'X-Forwarded-For: 198.51.100.10' \
  --data "$valid_payload"
if ! grep -q '"persisted":false' /tmp/canary-platform-response; then
  echo "FAIL: non-durable contact response is not explicit"
  FAILURES=$((FAILURES + 1))
fi

honeypot_payload='{"name":"Bot","email":"bot@example.com","subject":"Spam message","message":"This should never be retained.","website":"https://spam.example"}'
expect_status 202 POST "/api/contact" \
  -H 'Content-Type: application/json' -H 'X-Forwarded-For: 198.51.100.11' \
  --data "$honeypot_payload"

invalid_payload='{"name":"","email":"not-an-email","subject":"","message":"short"}'
expect_status 400 POST "/api/contact" \
  -H 'Content-Type: application/json' -H 'X-Forwarded-For: 198.51.100.12' \
  --data "$invalid_payload"

for request_number in 1 2 3 4 5; do
  expect_status 202 POST "/api/contact" \
    -H 'Content-Type: application/json' -H 'X-Forwarded-For: 198.51.100.13' \
    --data "$honeypot_payload"
done
expect_status 429 POST "/api/contact" \
  -H 'Content-Type: application/json' -H 'X-Forwarded-For: 198.51.100.13' \
  --data "$honeypot_payload"

node --input-type=module <<'EOF'
import fs from "node:fs";

const xml = fs.readFileSync("dist/public/news-sitemap.xml", "utf8");
const dates = [...xml.matchAll(/<news:publication_date>([^<]+)<\/news:publication_date>/g)]
  .map((match) => Date.parse(`${match[1]}T00:00:00Z`));
const now = Date.now();
const tooOld = dates.filter((date) => now - date > 2 * 24 * 60 * 60 * 1000);
if (tooOld.length > 0) {
  console.error("FAIL: Google News sitemap contains articles older than two days");
  process.exit(1);
}
console.log(`PASS: Google News sitemap has ${dates.length} recent eligible article(s)`);
EOF

if [[ "$FAILURES" -ne 0 ]]; then
  echo "Platform hardening tests failed: ${FAILURES}"
  exit 1
fi

echo "Platform hardening tests passed"
