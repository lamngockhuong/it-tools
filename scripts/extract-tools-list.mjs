import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const toolsDir = path.join(__dirname, '../src/tools');

async function extractToolsList() {
  const tools = [];
  const entries = await fs.readdir(toolsDir, { withFileTypes: true });

  for (const entry of entries) {
    if (entry.isDirectory()) {
      const indexPath = path.join(toolsDir, entry.name, 'index.ts');
      try {
        const content = await fs.readFile(indexPath, 'utf-8');

        // Extract basic info from the tool definition
        const pathMatch = content.match(/path:\s*['"`]([^'"`]+)['"`]/);
        const categoryMatch = content.match(/category:\s*['"`]([^'"`]+)['"`]/);
        const npmMatch = content.match(/npmPackages:\s*\[(.*?)\]/s);

        const tool = {
          folder: entry.name,
          path: pathMatch ? pathMatch[1] : '',
          category: categoryMatch ? categoryMatch[1] : 'Unknown',
          hasNpmDeps: !!npmMatch,
        };

        tools.push(tool);
      } catch (error) {
        // Skip if index.ts doesn't exist
      }
    }
  }

  return tools.sort((a, b) => a.category.localeCompare(b.category) || a.folder.localeCompare(b.folder));
}

const tools = await extractToolsList();

// Group by category
const byCategory = tools.reduce((acc, tool) => {
  if (!acc[tool.category]) {
    acc[tool.category] = [];
  }
  acc[tool.category].push(tool);
  return acc;
}, {});

// Generate markdown
let markdown = `# Danh sách Tools trong IT-Tools

Tổng số: **${tools.length} tools**

*Tự động tạo từ source code vào ${new Date().toISOString().split('T')[0]}*

## Thống kê theo category

`;

const categories = Object.keys(byCategory).sort();
for (const category of categories) {
  markdown += `- **${category}**: ${byCategory[category].length} tools\n`;
}

markdown += '\n## Chi tiết theo Category\n\n';

for (const category of categories) {
  markdown += `### ${category} (${byCategory[category].length} tools)\n\n`;
  markdown += '| Tool Name | Path | External Deps |\n';
  markdown += '|-----------|------|---------------|\n';

  for (const tool of byCategory[category]) {
    const deps = tool.hasNpmDeps ? '✅' : '❌';
    markdown += `| ${tool.folder} | \`${tool.path}\` | ${deps} |\n`;
  }

  markdown += '\n';
}

markdown += '\n## Danh sách đầy đủ (Alphabetical)\n\n';
markdown += '| # | Tool Name | Category | Path | External Deps |\n';
markdown += '|---|-----------|----------|------|---------------|\n';

const sortedTools = [...tools].sort((a, b) => a.folder.localeCompare(b.folder));
sortedTools.forEach((tool, index) => {
  const deps = tool.hasNpmDeps ? '✅' : '❌';
  markdown += `| ${index + 1} | ${tool.folder} | ${tool.category} | \`${tool.path}\` | ${deps} |\n`;
});

markdown += '\n---\n\n';
markdown += '## Giải thích\n\n';
markdown += '- **External Deps**: Tools có sử dụng thư viện npm bên ngoài (✅) hoặc chỉ dùng built-in APIs (❌)\n';
markdown += '- Tất cả tools đều chạy trên client-side (browser)\n';
markdown += '- Chỉ có 3 tools cần gọi external APIs: my-ip, dnsbl-checker, iana-whois-checker\n';

// Write to file
const outputPath = path.join(__dirname, '../docs/tools-list.md');
await fs.writeFile(outputPath, markdown, 'utf-8');

console.log(`✅ Đã tạo file: ${outputPath}`);
console.log(`📊 Tổng số tools: ${tools.length}`);
console.log(`📁 Số categories: ${categories.length}`);
