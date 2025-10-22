#!/usr/bin/env node

import fs from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const CONFIG = {
  baseUrl: process.env.PRERENDER_BASE_URL || 'http://localhost:4173', // Vite preview server
  outputDir: process.env.PRERENDER_OUTPUT_DIR
    ? path.join(__dirname, '..', process.env.PRERENDER_OUTPUT_DIR)
    : path.join(__dirname, '../dist'),
  concurrency: Number.parseInt(process.env.PRERENDER_CONCURRENCY || '10', 10), // Number of pages to render in parallel
  waitTime: Number.parseInt(process.env.PRERENDER_WAIT_TIME || '1500', 10), // Wait time for JavaScript to load (reduced from 3000ms)
  maxPages: Number.parseInt(process.env.PRERENDER_MAX_PAGES || '0', 10), // Max pages to render (0 = all)
};

/**
 * Load routes from prerender-routes.json
 */
async function loadRoutes() {
  try {
    const routesPath = path.join(__dirname, '../prerender-routes.json');
    const routesData = await fs.readFile(routesPath, 'utf-8');
    const { routes } = JSON.parse(routesData);

    // Limit routes if maxPages is set
    if (CONFIG.maxPages > 0 && routes.length > CONFIG.maxPages) {
      console.log(`⚠️  Limiting to ${CONFIG.maxPages} pages (out of ${routes.length})`);
      return routes.slice(0, CONFIG.maxPages);
    }

    return routes;
  }
  catch (error) {
    console.error('❌ Failed to load routes:', error.message);
    console.log('💡 Run "pnpm script:generate:routes" first');
    process.exit(1);
  }
}

/**
 * Render a single page
 */
async function renderPage(browser, route) {
  const page = await browser.newPage();

  try {
    // Set viewport for consistent rendering
    await page.setViewport({ width: 1200, height: 800 });

    const url = `${CONFIG.baseUrl}${route}`;
    console.log(`🔄 Rendering: ${route}`);

    // Navigate to page with reduced timeout
    await page.goto(url, {
      waitUntil: 'networkidle2', // Changed from networkidle0 for faster completion
      timeout: 30000, // Increased back to 30000ms for reliability
    });

    // Wait for Vue app to fully render with reduced timeout
    try {
      await page.waitForSelector('[data-app]', { timeout: 5000 }); // Reduced from 10000ms
    }
    catch (error) {
      // If data-app selector not found, wait for body to be ready
      await page.waitForSelector('body', { timeout: 5000 }); // Reduced from 10000ms
    }

    // Use modern Puppeteer delay method
    await new Promise(resolve => setTimeout(resolve, CONFIG.waitTime));

    // Get rendered HTML
    const html = await page.content();

    // Clean up the HTML for SEO
    const cleanedHtml = html
      // Remove dev scripts and hot reload
      .replace(/<script[^>]*vite[^>]*>[\s\S]*?<\/script>/gi, '')
      .replace(/<script[^>]*@vite[^>]*>[\s\S]*?<\/script>/gi, '')
      // Fix base URLs
      .replace(/http:\/\/localhost:\d+/g, process.env.SITEMAP_BASE_URL || 'https://it-tools.khuong.dev')
      // Add prerender meta tag
      .replace(
        '<head>',
        '<head>\n  <meta name="prerender-status" content="200">\n  <meta name="generator" content="IT-Tools Prerenderer">',
      );

    // Determine output path
    const outputPath = route === '/'
      ? path.join(CONFIG.outputDir, 'index.html')
      : path.join(CONFIG.outputDir, route.slice(1), 'index.html');

    // Create directory if needed
    const outputDirectory = path.dirname(outputPath);
    await fs.mkdir(outputDirectory, { recursive: true });

    // Write HTML file
    await fs.writeFile(outputPath, cleanedHtml);

    console.log(`✅ Rendered: ${route} -> ${path.relative(CONFIG.outputDir, outputPath)}`);

    return { route, success: true };
  }
  catch (error) {
    console.error(`❌ Failed to render ${route}:`, error.message);
    return { route, success: false, error: error.message };
  }
  finally {
    await page.close();
  }
}

/**
 * Render all pages with concurrency control
 */
async function renderAllPages(routes) {
  const browser = await puppeteer.launch({
    headless: 'new', // Use new headless mode
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-extensions',
      '--disable-gpu',
      '--no-first-run',
      '--no-zygote',
      '--single-process', // Required for some environments
    ],
  });

  const results = [];
  const chunks = [];

  // Split routes into chunks for concurrency
  for (let i = 0; i < routes.length; i += CONFIG.concurrency) {
    chunks.push(routes.slice(i, i + CONFIG.concurrency));
  }

  for (const [chunkIndex, chunk] of chunks.entries()) {
    console.log(`\n📦 Processing chunk ${chunkIndex + 1}/${chunks.length} (${chunk.length} pages)`);

    const chunkPromises = chunk.map(route => renderPage(browser, route));
    const chunkResults = await Promise.all(chunkPromises);

    results.push(...chunkResults);
  }

  await browser.close();
  return results;
}

/**
 * Check if preview server is running
 */
async function checkPreviewServer() {
  try {
    // Use a more robust check with timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);

    const response = await fetch(CONFIG.baseUrl, {
      signal: controller.signal,
      headers: {
        'User-Agent': 'IT-Tools-Prerenderer/1.0',
      },
    });

    clearTimeout(timeoutId);
    return response.ok;
  }
  catch (error) {
    console.log(`Server check failed: ${error.message}`);
    return false;
  }
}

/**
 * Main function
 */
async function main() {
  console.log('🚀 Starting prerendering process...\n');

  // Check if preview server is running
  const serverRunning = await checkPreviewServer();
  if (!serverRunning) {
    console.error(`❌ Preview server not running at ${CONFIG.baseUrl}`);
    console.log('💡 Run "pnpm preview" in another terminal first');
    process.exit(1);
  }

  console.log(`✅ Preview server is running at ${CONFIG.baseUrl}`);

  // Load routes
  const routes = await loadRoutes();
  console.log(`📄 Found ${routes.length} routes to render\n`);

  // Start rendering
  const startTime = Date.now();
  const results = await renderAllPages(routes);
  const endTime = Date.now();

  // Summary
  const successful = results.filter(r => r.success).length;
  const failed = results.filter(r => !r.success).length;

  console.log('\n📊 Prerendering Summary:');
  console.log(`✅ Successful: ${successful}`);
  console.log(`❌ Failed: ${failed}`);
  console.log(`⏱️  Time: ${Math.round((endTime - startTime) / 1000)}s`);

  if (failed > 0) {
    console.log('\n❌ Failed routes:');
    results
      .filter(r => !r.success)
      .forEach(r => console.log(`  - ${r.route}: ${r.error}`));
  }

  console.log(`\n🎉 Prerendering complete! Output: ${CONFIG.outputDir}`);
}

main().catch(console.error);
