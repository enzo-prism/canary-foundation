#!/bin/bash
# Verify SEO improvements in generated files

echo "================================================="
echo "🔍 SEO IMPROVEMENTS VERIFICATION"
echo "================================================="
echo ""

# Color codes
GREEN='\033[0;32m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Counters
PASSED=0
FAILED=0

# Function to check test result
check_test() {
    if [ $1 -eq 0 ]; then
        echo -e "${GREEN}✅ $2${NC}"
        ((PASSED++))
    else
        echo -e "${RED}❌ $2${NC}"
        ((FAILED++))
    fi
}

# Test 1: Check file existence
echo -e "${BLUE}📁 File Existence Tests:${NC}"
test -f dist/public/sitemap.xml
check_test $? "Main sitemap.xml exists"

test -f dist/public/news-sitemap.xml
check_test $? "News sitemap exists"

test -f dist/public/llm.xml
check_test $? "LLM/AI sitemap exists"

test -f dist/public/sitemap-index.xml
check_test $? "Sitemap index exists"

test -f dist/public/robots.txt
check_test $? "Enhanced robots.txt exists"

test -f dist/public/ai.txt
check_test $? "AI instructions file exists"

echo ""

# Test 2: Verify priority variety in sitemap
echo -e "${BLUE}📊 Priority Hierarchy Tests:${NC}"
PRIORITIES=$(grep -o '<priority>[^<]*</priority>' dist/public/sitemap.xml | sort -u | wc -l)
if [ $PRIORITIES -gt 3 ]; then
    echo -e "${GREEN}✅ Found $PRIORITIES different priority levels (expected > 3)${NC}"
    ((PASSED++))
else
    echo -e "${RED}❌ Only $PRIORITIES priority levels found (expected > 3)${NC}"
    ((FAILED++))
fi

# Check for priority 1.0 (home page)
grep -q '<priority>1.0</priority>' dist/public/sitemap.xml
check_test $? "Home page has priority 1.0"

# Check for priority 0.5 (blog posts)
grep -q '<priority>0.5</priority>' dist/public/sitemap.xml
check_test $? "Blog posts have priority 0.5"

echo ""

# Test 3: Verify changefreq variety
echo -e "${BLUE}📅 Change Frequency Tests:${NC}"
FREQS=$(grep -o '<changefreq>[^<]*</changefreq>' dist/public/sitemap.xml | sort -u | wc -l)
if [ $FREQS -gt 2 ]; then
    echo -e "${GREEN}✅ Found $FREQS different change frequencies (expected > 2)${NC}"
    ((PASSED++))
else
    echo -e "${RED}❌ Only $FREQS change frequencies found (expected > 2)${NC}"
    ((FAILED++))
fi

# Check for specific frequencies
grep -q '<changefreq>daily</changefreq>' dist/public/sitemap.xml
check_test $? "Daily frequency for home page"

grep -q '<changefreq>weekly</changefreq>' dist/public/sitemap.xml
check_test $? "Weekly frequency for blog"

grep -q '<changefreq>monthly</changefreq>' dist/public/sitemap.xml
check_test $? "Monthly frequency for blog posts"

echo ""

# Test 4: Verify blog posts in sitemap
echo -e "${BLUE}📝 Blog Post Inclusion Tests:${NC}"
BLOG_URLS=$(grep -c '/blog/[^<]*' dist/public/sitemap.xml)
if [ $BLOG_URLS -ge 7 ]; then
    echo -e "${GREEN}✅ Found $BLOG_URLS blog URLs (expected >= 7)${NC}"
    ((PASSED++))
else
    echo -e "${RED}❌ Only $BLOG_URLS blog URLs found (expected >= 7)${NC}"
    ((FAILED++))
fi

# Check for specific blog posts
grep -q 'don-listwin-award-2024' dist/public/sitemap.xml
check_test $? "2024 award post included"

grep -q 'edx24-conference' dist/public/sitemap.xml
check_test $? "EDx24 conference post included"

echo ""

# Test 5: Verify news sitemap
echo -e "${BLUE}📰 News Sitemap Tests:${NC}"
grep -q 'xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"' dist/public/news-sitemap.xml
check_test $? "News sitemap has correct namespace"

NEWS_ENTRIES=$(grep -c '<news:news>' dist/public/news-sitemap.xml)
if [ $NEWS_ENTRIES -ge 5 ]; then
    echo -e "${GREEN}✅ Found $NEWS_ENTRIES news entries (expected >= 5)${NC}"
    ((PASSED++))
else
    echo -e "${RED}❌ Only $NEWS_ENTRIES news entries found (expected >= 5)${NC}"
    ((FAILED++))
fi

echo ""

# Test 6: Verify AI crawler support
echo -e "${BLUE}🤖 AI Crawler Support Tests:${NC}"
grep -q 'User-agent: GPTBot' dist/public/robots.txt
check_test $? "GPTBot rules in robots.txt"

grep -q 'User-agent: ChatGPT-User' dist/public/robots.txt
check_test $? "ChatGPT-User rules in robots.txt"

grep -q 'User-agent: anthropic-ai' dist/public/robots.txt
check_test $? "Anthropic AI rules in robots.txt"

grep -q 'User-agent: Claude-Web' dist/public/robots.txt
check_test $? "Claude-Web rules in robots.txt"

echo ""

# Test 7: Verify multiple sitemaps in robots.txt
echo -e "${BLUE}🗺️ Sitemap References:${NC}"
SITEMAP_REFS=$(grep -c 'Sitemap:' dist/public/robots.txt)
if [ $SITEMAP_REFS -ge 4 ]; then
    echo -e "${GREEN}✅ Found $SITEMAP_REFS sitemap references (expected >= 4)${NC}"
    ((PASSED++))
else
    echo -e "${RED}❌ Only $SITEMAP_REFS sitemap references found (expected >= 4)${NC}"
    ((FAILED++))
fi

echo ""

# Test 8: Verify AI instructions file
echo -e "${BLUE}📄 AI Instructions Tests:${NC}"
grep -q 'Canary Foundation' dist/public/ai.txt
check_test $? "AI file contains organization name"

grep -q 'early detection' dist/public/ai.txt
check_test $? "AI file contains mission context"

grep -q '## Key Sections' dist/public/ai.txt
check_test $? "AI file has structured sections"

echo ""

# Test 9: File size analysis
echo -e "${BLUE}📏 File Size Analysis:${NC}"
SITEMAP_SIZE=$(wc -l < dist/public/sitemap.xml)
NEWS_SIZE=$(wc -l < dist/public/news-sitemap.xml)
LLM_SIZE=$(wc -l < dist/public/llm.xml)

echo "  Main sitemap: $SITEMAP_SIZE lines"
echo "  News sitemap: $NEWS_SIZE lines"
echo "  LLM sitemap: $LLM_SIZE lines"

echo ""
echo "================================================="
echo -e "${BLUE}📊 TEST SUMMARY:${NC}"
echo "================================================="
echo -e "  ${GREEN}Passed: $PASSED${NC}"
echo -e "  ${RED}Failed: $FAILED${NC}"
echo "  Total: $((PASSED + FAILED))"
echo ""

if [ $FAILED -eq 0 ]; then
    echo -e "${GREEN}🎉 All SEO improvements verified successfully!${NC}"
    echo ""
    echo "Key improvements implemented:"
    echo "  ✓ Dynamic priority hierarchy (1.0 to 0.5)"
    echo "  ✓ Realistic change frequencies per page type"
    echo "  ✓ Individual blog post pages included"
    echo "  ✓ Dedicated news sitemap for blog content"
    echo "  ✓ Enhanced LLM/AI sitemap with semantic hints"
    echo "  ✓ Comprehensive robots.txt with AI crawler rules"
    echo "  ✓ AI-specific instructions in ai.txt"
    exit 0
else
    echo -e "${RED}⚠️ Some tests failed. Please review the output above.${NC}"
    exit 1
fi