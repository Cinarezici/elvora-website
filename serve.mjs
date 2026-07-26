// Elvora Global — bağımlılıksız statik sunucu.
// Proje kökünü http://localhost:3000 adresinde servis eder.
//   node serve.mjs
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, join, normalize, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const ROOT = dirname(fileURLToPath(import.meta.url));
const PORT = Number(process.env.PORT ?? 3000);

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.gif': 'image/gif',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
  '.txt': 'text/plain; charset=utf-8',
};

async function resolveFile(urlPath) {
  // Dizin dışına çıkma girişimlerini engelle.
  const decoded = decodeURIComponent(urlPath.split('?')[0].split('#')[0]);
  const safe = normalize(decoded).replace(/^(\.\.[/\\])+/, '');
  let target = join(ROOT, safe);
  if (!target.startsWith(ROOT + sep) && target !== ROOT) return null;

  const candidates = [];
  try {
    const info = await stat(target);
    if (info.isDirectory()) {
      candidates.push(join(target, 'index.html'));
    } else {
      candidates.push(target);
    }
  } catch {
    // Uzantısız yol → .html dene, sonra /index.html dene.
    if (!extname(target)) {
      candidates.push(`${target}.html`, join(target, 'index.html'));
    } else {
      candidates.push(target);
    }
  }

  for (const candidate of candidates) {
    try {
      const info = await stat(candidate);
      if (info.isFile()) return candidate;
    } catch { /* sıradakini dene */ }
  }
  return null;
}

const server = createServer(async (req, res) => {
  const file = await resolveFile(req.url ?? '/');

  if (!file) {
    res.writeHead(404, { 'Content-Type': MIME['.html'] });
    res.end('<!doctype html><meta charset="utf-8"><title>404</title><p>Bulunamadı.</p>');
    console.log(`404  ${req.url}`);
    return;
  }

  try {
    const body = await readFile(file);
    res.writeHead(200, {
      'Content-Type': MIME[extname(file).toLowerCase()] ?? 'application/octet-stream',
      // Geliştirme sırasında screenshot'ların bayat içerik yakalamasını engeller.
      'Cache-Control': 'no-store, must-revalidate',
    });
    res.end(body);
    console.log(`200  ${req.url}`);
  } catch (err) {
    res.writeHead(500, { 'Content-Type': MIME['.html'] });
    res.end('<!doctype html><meta charset="utf-8"><title>500</title><p>Sunucu hatası.</p>');
    console.error(`500  ${req.url} — ${err.message}`);
  }
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`Port ${PORT} kullanımda — sunucu zaten çalışıyor olabilir. İkinci bir örnek başlatma.`);
    process.exit(1);
  }
  throw err;
});

server.listen(PORT, () => {
  console.log(`Elvora → http://localhost:${PORT}`);
});
