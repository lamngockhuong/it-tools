#!/usr/bin/env node

import process from 'node:process';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const CONFIG = {
  // Path to tools directory
  toolsDir: path.join(__dirname, '../src/tools'),
  // Path to sitemap output file
  outputPath: path.join(__dirname, '../public/sitemap.xml'),
  // Website base URL (can be overridden by env var)
  baseUrl: process.env.SITEMAP_BASE_URL || 'https://it-tools.khuong.dev',
  // Static pages
  staticPages: [
    { path: '/', priority: '1.0', changefreq: 'daily' },
    { path: '/about', priority: '0.8', changefreq: 'monthly' },
  ],
};

/**
 * Read and parse tool information from index.ts file
 */
async function parseToolFromFile(toolPath) {
  try {
    const content = await fs.readFile(toolPath, 'utf-8');

    // Extract path
    const pathMatch = content.match(/path:\s*['"`]([^'"`]+)['"`]/);
    if (!pathMatch) {
      return null;
    }

    // Extract category (optional)
    const categoryMatch = content.match(/category:\s*['"`]([^'"`]+)['"`]/);

    // Extract createdAt (optional)
    const createdAtMatch = content.match(/createdAt:\s*new\s+Date\(['"`]([^'"`]+)['"`]\)/);

    // Extract keywords (optional)
    const keywordsMatch = content.match(/keywords:\s*\[(.*?)\]/s);
    let keywords = [];
    if (keywordsMatch) {
      keywords = keywordsMatch[1]
        .split(',')
        .map(k => k.trim().replace(/['"`]/g, ''))
        .filter(k => k.length > 0);
    }

    return {
      path: pathMatch[1],
      category: categoryMatch ? categoryMatch[1] : 'Development',
      createdAt: createdAtMatch ? new Date(createdAtMatch[1]) : new Date(),
      keywords,
    };
  }
  catch (error) {
    console.warn(`Unable to read file ${toolPath}:`, error.message);
    return null;
  }
}

/**
 * Scan tools directory and get list of all tools
 */
async function getAllTools() {
  const tools = [];

  try {
    const entries = await fs.readdir(CONFIG.toolsDir, { withFileTypes: true });

    for (const entry of entries) {
      if (entry.isDirectory()) {
        const indexPath = path.join(CONFIG.toolsDir, entry.name, 'index.ts');

        try {
          await fs.access(indexPath);
          const tool = await parseToolFromFile(indexPath);

          if (tool) {
            tools.push({
              ...tool,
              folderName: entry.name,
            });
          }
        }
        catch (error) {
          // Skip if index.ts doesn't exist
          console.warn(`Skipping directory ${entry.name}: no index.ts file found`);
        }
      }
    }
  }
  catch (error) {
    console.error('Error reading tools directory:', error);
    process.exit(1);
  }

  return tools;
}

/**
 * Create XML for a URL
 */
function createUrlXml(url, lastmod, changefreq = 'weekly', priority = '0.8') {
  const lastmodStr = lastmod ? lastmod.toISOString().split('T')[0] : new Date().toISOString().split('T')[0];

  return `  <url>
    <loc>${CONFIG.baseUrl}${url}</loc>
    <lastmod>${lastmodStr}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

/**
 * Generate sitemap.xml content
 */
function generateSitemapXml(tools) {
  const urls = [];

  // Add static pages
  CONFIG.staticPages.forEach((page) => {
    urls.push(createUrlXml(page.path, new Date(), page.changefreq, page.priority));
  });

  // Add tools
  tools.forEach((tool) => {
    const priority = getPriorityByCategory(tool.category);
    const changefreq = getChangefreqByCategory(tool.category);
    urls.push(createUrlXml(tool.path, tool.createdAt, changefreq, priority));
  });

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>`;
}

/**
 * Determine priority based on category
 */
function getPriorityByCategory(category) {
  const priorities = {
    Development: '0.9',
    Converters: '0.8',
    Web: '0.8',
    Network: '0.7',
    Text: '0.7',
    Crypto: '0.7',
    Math: '0.6',
    Images: '0.6',
    JSON: '0.6',
    Cheatsheets: '0.5',
    Forensic: '0.5',
  };

  return priorities[category] || '0.6';
}

/**
 * Determine changefreq based on category
 */
function getChangefreqByCategory(category) {
  const frequencies = {
    Development: 'weekly',
    Converters: 'monthly',
    Web: 'weekly',
    Network: 'monthly',
    Text: 'monthly',
    Crypto: 'monthly',
    Math: 'monthly',
    Images: 'monthly',
    JSON: 'monthly',
    Cheatsheets: 'yearly',
    Forensic: 'monthly',
  };

  return frequencies[category] || 'monthly';
}

/**
 * Write sitemap.xml file
 */
async function writeSitemap(content) {
  try {
    await fs.writeFile(CONFIG.outputPath, content, 'utf-8');
    console.log(`✅ Sitemap generated successfully: ${CONFIG.outputPath}`);
  }
  catch (error) {
    console.error('❌ Error writing sitemap file:', error);
    process.exit(1);
  }
}

/**
 * Display statistics
 */
function showStats(tools) {
  console.log('\n📊 Sitemap statistics:');
  console.log(`   Total tools: ${tools.length}`);
  console.log(`   Total static pages: ${CONFIG.staticPages.length}`);
  console.log(`   Total URLs: ${tools.length + CONFIG.staticPages.length}`);

  // Statistics by category
  const categoryStats = tools.reduce((acc, tool) => {
    acc[tool.category] = (acc[tool.category] || 0) + 1;
    return acc;
  }, {});

  console.log('\n📈 Statistics by category:');
  Object.entries(categoryStats)
    .sort(([,a], [,b]) => b - a)
    .forEach(([category, count]) => {
      console.log(`   ${category}: ${count} tools`);
    });
}

/**
 * Main function
 */
async function main() {
  console.log('🚀 Starting sitemap.xml generation...');
  console.log(`🌐 Base URL: ${CONFIG.baseUrl}`);

  // Read tools list
  console.log('📖 Scanning tools directory...');
  const tools = await getAllTools();

  if (tools.length === 0) {
    console.warn('⚠️  No tools found!');
    process.exit(1);
  }

  // Sort tools by path
  tools.sort((a, b) => a.path.localeCompare(b.path));

  // Generate sitemap XML
  console.log('🔨 Generating sitemap content...');
  const sitemapContent = generateSitemapXml(tools);

  // Write file
  console.log('💾 Writing sitemap file...');
  await writeSitemap(sitemapContent);

  // Display statistics
  showStats(tools);

  console.log('\n✨ Completed!');
}

// Run script
main().catch((error) => {
  console.error('💥 Unexpected error:', error);
  process.exit(1);
});
