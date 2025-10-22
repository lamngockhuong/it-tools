#!/usr/bin/env node

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function getAllToolRoutes() {
  const toolsDir = path.join(__dirname, '../src/tools');
  const routes = ['/', '/about'];

  try {
    const entries = await fs.readdir(toolsDir, { withFileTypes: true });

    for (const entry of entries) {
      if (entry.isDirectory()) {
        const indexPath = path.join(toolsDir, entry.name, 'index.ts');

        try {
          const content = await fs.readFile(indexPath, 'utf-8');
          const pathMatch = content.match(/path:\s*['"`]([^'"`]+)['"`]/);

          if (pathMatch) {
            routes.push(pathMatch[1]);
          }
        }
        catch {
          // Skip if file doesn't exist
        }
      }
    }
  }
  catch (error) {
    console.error('Error reading tools directory:', error);
  }

  return routes;
}

async function createPrerenderConfig() {
  const routes = await getAllToolRoutes();

  const config = {
    routes,
    total: routes.length,
  };

  const outputPath = path.join(__dirname, '../prerender-routes.json');
  await fs.writeFile(outputPath, JSON.stringify(config, null, 2));

  console.log(`✅ Generated ${routes.length} routes for prerendering`);
  console.log(`📝 Routes saved to: ${outputPath}`);
}

createPrerenderConfig().catch(console.error);
