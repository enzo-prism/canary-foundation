#!/bin/bash
# Validate existing production crawl files; run npm run build first.
# Share the Node verifier so the two entrypoints cannot drift apart.
set -euo pipefail
cd "$(dirname "$0")"
exec node test-seo-improvements.js
