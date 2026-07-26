import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { globSync } from 'glob';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const faviconLinks = `<link rel="icon" type="image/x-icon" href="assets/favicon.ico">
<link rel="icon" type="image/png" sizes="32x32" href="assets/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="assets/favicon-16x16.png">
<link rel="apple-touch-icon" href="assets/apple-touch-icon.png">
<link rel="manifest" href="manifest.json">
<meta name="theme-color" content="#e8442e">`;

const htmlFiles = globSync('**/*.html', {
  ignore: ['node_modules/**'],
  cwd: __dirname
});

for (const file of htmlFiles) {
  const filePath = path.join(__dirname, file);
  let content = fs.readFileSync(filePath, 'utf-8');

  // Remove old favicon link if exists
  content = content.replace(/<link rel="icon"[^>]*>/g, '');
  content = content.replace(/<link rel="apple-touch-icon"[^>]*>/g, '');
  content = content.replace(/<link rel="manifest"[^>]*>/g, '');
  content = content.replace(/<meta name="theme-color"[^>]*>/g, '');

  // Insert new favicon links after opening <head>
  const headRegex = /(<head[^>]*>)/;
  if (headRegex.test(content)) {
    content = content.replace(headRegex, `$1\n${faviconLinks}`);
    fs.writeFileSync(filePath, content);
    console.log(`✓ ${file}`);
  } else {
    console.log(`⚠ ${file} — no <head> found`);
  }
}

console.log('\n✨ All HTML files updated with favicon links!');
