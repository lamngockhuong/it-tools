#!/bin/bash

# Build and Prerender for GitHub Pages Deployment
# This script builds the app locally with full prerendering
# Output goes to prerendered/ folder (not dist/)
# The prerendered/ folder is committed to git for deployment

set -e  # Exit on error

echo "🚀 Starting local build with prerendering..."
echo ""

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Step 1: Generate routes
echo -e "${BLUE}📝 Step 1: Generating routes...${NC}"
pnpm script:generate:routes
echo ""

# Step 2: Generate sitemap
echo -e "${BLUE}🗺️  Step 2: Generating sitemap...${NC}"
export SITEMAP_BASE_URL="https://it-tools.khuong.dev"
pnpm script:generate:sitemap
echo ""

# Step 3: Build application
echo -e "${BLUE}🔨 Step 3: Building application...${NC}"
pnpm build
echo ""

# Step 4: Copy assets
echo -e "${BLUE}📦 Step 4: Copying assets...${NC}"
cp dist/index.html dist/404.html
cp public/sitemap.xml dist/sitemap.xml
if [ -f "public/robots.txt" ]; then
  cp public/robots.txt dist/robots.txt
fi
echo ""

# Step 5: Start preview server in background
echo -e "${BLUE}🌐 Step 5: Starting preview server...${NC}"
pnpm preview &
PREVIEW_PID=$!

# Wait for server to start
sleep 5

# Step 6: Run prerendering
echo -e "${BLUE}✨ Step 6: Prerendering pages...${NC}"
echo ""

# Check if server is running
if curl -f --connect-timeout 5 --max-time 10 http://localhost:4173 > /dev/null 2>&1; then
  echo -e "${GREEN}✅ Preview server is running${NC}"
  echo ""

  # Ask for prerender options
  echo -e "${YELLOW}How many pages do you want to prerender?${NC}"
  echo "  1. All pages (~377 pages, ~8-10 minutes)"
  echo "  2. Top 100 pages (~3-5 minutes)"
  echo "  3. Top 50 pages (~2-3 minutes)"
  echo "  4. Top 25 pages (~1-2 minutes)"
  echo "  5. Skip prerendering (just SPA)"
  echo ""
  read -p "Enter choice (1-5): " choice

  case $choice in
    1)
      echo -e "${BLUE}Prerendering all pages...${NC}"
      export PRERENDER_MAX_PAGES=0
      export PRERENDER_CONCURRENCY=8
      ;;
    2)
      echo -e "${BLUE}Prerendering top 100 pages...${NC}"
      export PRERENDER_MAX_PAGES=100
      export PRERENDER_CONCURRENCY=10
      ;;
    3)
      echo -e "${BLUE}Prerendering top 50 pages...${NC}"
      export PRERENDER_MAX_PAGES=50
      export PRERENDER_CONCURRENCY=10
      ;;
    4)
      echo -e "${BLUE}Prerendering top 25 pages...${NC}"
      export PRERENDER_MAX_PAGES=25
      export PRERENDER_CONCURRENCY=8
      ;;
    5)
      echo -e "${YELLOW}Skipping prerendering...${NC}"
      kill $PREVIEW_PID || true
      echo ""
      echo -e "${GREEN}✅ Build completed (SPA mode)${NC}"
      echo ""

      # Copy dist to prerendered for deployment
      echo -e "${BLUE}📦 Copying dist/ to prerendered/ for deployment...${NC}"
      rm -rf prerendered/*
      cp -r dist/* prerendered/

      echo ""
      echo -e "${YELLOW}📋 Next steps:${NC}"
      echo "  1. git add prerendered/"
      echo "  2. git commit -m 'chore: build for deployment'"
      echo "  3. git push"
      echo "  4. Run 'Deploy Pre-built Files' workflow on GitHub"
      echo ""
      exit 0
      ;;
    *)
      echo -e "${RED}Invalid choice. Using top 100 pages as default.${NC}"
      export PRERENDER_MAX_PAGES=100
      export PRERENDER_CONCURRENCY=15
      ;;
  esac

  # Run prerender (output to dist/ by default)
  pnpm prerender

  # Kill preview server
  kill $PREVIEW_PID || true

  echo ""
  echo -e "${BLUE}📦 Step 7: Copying dist/ to prerendered/ for deployment...${NC}"
  rm -rf prerendered/*
  cp -r dist/* prerendered/

  echo ""
  echo -e "${GREEN}✅ Build and prerender completed successfully!${NC}"
  echo ""
  echo -e "${BLUE}📊 Build Statistics:${NC}"
  echo "  - Build output: dist/ (gitignored)"
  echo "  - Deployment folder: prerendered/ (tracked in git)"
  echo "  - Total size: $(du -sh prerendered/ | cut -f1)"
  echo "  - Files count: $(find prerendered -type f | wc -l)"
  echo ""
  echo -e "${YELLOW}📋 Next steps:${NC}"
  echo "  1. Review the prerendered/ folder"
  echo "  2. git add prerendered/"
  echo "  3. git commit -m 'chore: build with prerendering for deployment'"
  echo "  4. git push"
  echo "  5. Run 'Deploy Pre-built Files' workflow on GitHub Actions"
  echo ""
  echo -e "${BLUE}💡 Tips:${NC}"
  echo "  - dist/ remains gitignored (not committed)"
  echo "  - prerendered/ is a copy of dist/ for deployment"
  echo "  - GitHub Actions will deploy from prerendered/ folder"
  echo ""
else
  echo -e "${RED}❌ Preview server failed to start${NC}"
  kill $PREVIEW_PID || true
  exit 1
fi
