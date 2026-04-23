#!/bin/bash

set -euo pipefail

source "$(dirname "$0")/scripts/production-test-helpers.sh"

# Test script to verify legacy URL redirects are working

echo "================================================="
echo "🔄 TESTING LEGACY URL REDIRECTS"
echo "================================================="
echo ""

# Color codes
GREEN='\033[0;32m'
RED='\033[0;31m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Counter
PASSED=0
FAILED=0

trap stop_production_server EXIT

echo "Preparing production build..."
build_production_bundle > /dev/null

echo "Starting production server..."
start_production_server
BASE_URL="$TEST_BASE_URL"

# Function to test redirect
test_redirect() {
    local OLD_PATH=$1
    local EXPECTED_PATH=$2
    local DESCRIPTION=$3
    
    echo -e "${BLUE}Testing: $DESCRIPTION${NC}"
    echo "  Old URL: $OLD_PATH"
    echo "  Expected redirect to: $EXPECTED_PATH"
    
    HEADERS=$(curl -sSI "${BASE_URL}${OLD_PATH}" | tr -d '\r')
    HTTP_CODE=$(echo "${HEADERS}" | awk 'NR==1 {print $2}')
    
    if [ "$HTTP_CODE" = "301" ]; then
        LOCATION=$(extract_header_value "${HEADERS}" "location")
        if [[ "$LOCATION" == "${EXPECTED_PATH}" ]]; then
            echo -e "  ${GREEN}✅ PASS: 301 redirect to $LOCATION${NC}"
            ((PASSED++))
        else
            echo -e "  ${RED}❌ FAIL: Got $LOCATION instead of $EXPECTED_PATH${NC}"
            ((FAILED++))
        fi
    elif [ "$HTTP_CODE" = "200" ]; then
        # If we get 200, it might be the SPA handling it client-side
        echo -e "  ${YELLOW}⚠️  WARNING: Got 200 OK (may be SPA client-side routing)${NC}"
        ((FAILED++))
    else
        echo -e "  ${RED}❌ FAIL: HTTP $HTTP_CODE (expected 301)${NC}"
        ((FAILED++))
    fi
    echo ""
}

echo -e "${BLUE}📋 Testing Critical Legacy URLs from User Request:${NC}"
echo "================================================="

# Test the specific URLs the user mentioned
test_redirect "/about-canary/founders-story/" "/about/founders-story" "Founder's Story Page"
test_redirect "/about-canary/" "/about/overview" "About Canary Main Page"
test_redirect "/about-canary/staff/" "/about/staff" "Staff Page"
test_redirect "/canary-science/programs/" "/science/programs" "Science Programs Page"
test_redirect "/about-canary/board-of-directors/" "/about/board-directors" "Board of Directors Page"

echo -e "${BLUE}📋 Testing Additional Legacy URLs:${NC}"
echo "================================================="

# Test without trailing slashes
test_redirect "/about-canary/founders-story" "/about/founders-story" "Founder's Story (no slash)"
test_redirect "/about-canary" "/about/overview" "About Canary (no slash)"
test_redirect "/about-canary/staff" "/about/staff" "Staff (no slash)"
test_redirect "/canary-science/programs" "/science/programs" "Programs (no slash)"
test_redirect "/about-canary/board-of-directors" "/about/board-directors" "Board (no slash)"

# Test other important legacy URLs
test_redirect "/canary-science" "/science/overview" "Science Main Page"
test_redirect "/canary-approach" "/approach/overview" "Approach Main Page"
test_redirect "/news-blog" "/blog" "News Blog Page"
test_redirect "/take-action-2" "/donate" "Take Action Page"

# Test deep nested URLs
test_redirect "/canary-science/programs/tumors/prostate/" "/science/programs/tumors/prostate" "Prostate Cancer Page"
test_redirect "/canary-science/science/imaging/" "/science/science/imaging" "Imaging Science Page"

echo -e "${BLUE}📋 Testing Query String Preservation:${NC}"
echo "================================================="
test_redirect "/about-canary/founders-story?utm_source=test" "/about/founders-story?utm_source=test" "Founder's Story query params"

echo ""
echo "================================================="
echo -e "${BLUE}📊 TEST SUMMARY:${NC}"
echo "================================================="
echo -e "  ${GREEN}Passed: $PASSED${NC}"
echo -e "  ${RED}Failed: $FAILED${NC}"
echo "  Total: $((PASSED + FAILED))"
echo ""

if [ $FAILED -eq 0 ]; then
    echo -e "${GREEN}🎉 All redirect tests passed!${NC}"
    echo ""
    echo "✅ Legacy URLs are properly redirecting to new URLs"
    echo "✅ 301 permanent redirects maintain SEO value"
    echo "✅ Query parameters are preserved during redirects"
    exit 0
else
    echo -e "${RED}⚠️ Some redirect tests failed.${NC}"
    echo ""
    echo "Please ensure:"
    echo "1. The production bundle was built successfully"
    echo "2. Redirect middleware is properly configured"
    echo "3. Redirects are returning 301 status codes"
    exit 1
fi
