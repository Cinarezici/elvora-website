// Tüm sayfalara OG/Twitter/kanonik ekler, footer'ı günceller.
import { readFileSync, writeFileSync } from 'node:fs';

const SITE = 'https://elvoraglobal.com';
const PAGES = {
  'index.html':                    { path: '/',                              depth: 0 },
  'hakkimizda.html':               { path: '/hakkimizda.html',               depth: 0 },
  'iletisim.html':                 { path: '/iletisim.html',                 depth: 0 },
  'gizlilik.html':                 { path: '/gizlilik.html',                 depth: 0 },
  'tesekkurler.html':              { path: '/tesekkurler.html',              depth: 0 },
  'cozumler/studio.html':          { path: '/cozumler/studio.html',          depth: 1 },
  'cozumler/vision.html':          { path: '/cozumler/vision.html',          depth: 1 },
  'cozumler/identity.html':        { path: '/cozumler/identity.html',        depth: 1 },
  'cozumler/flow.html':            { path: '/cozumler/flow.html',            depth: 1 },
  'cozumler/cvoptimizerai.html':   { path: '/cozumler/cvoptimizerai.html',   depth: 1 },
};

const pick = (html, re) => (html.match(re)?.[1] ?? '').trim();

for (const [file, meta] of Object.entries(PAGES)) {
  let html = readFileSync(file, 'utf8');
  const title = pick(html, /<title>([\s\S]*?)<\/title>/);
  const desc = pick(html, /<meta name="description" content="([\s\S]*?)">/);
  const up = '../'.repeat(meta.depth);

  // Eski OG/kanonik bloğunu temizle (idempotent olsun)
  html = html.replace(/\n?\s*<!-- OG -->[\s\S]*?<!-- \/OG -->/g, '');
  html = html.replace(/\n\s*<link rel="canonical"[^>]*>/g, '');

  const og = `
<!-- OG -->
<link rel="canonical" href="${SITE}${meta.path}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Elvora Global">
<meta property="og:locale" content="tr_TR">
<meta property="og:url" content="${SITE}${meta.path}">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${desc}">
<meta property="og:image" content="${SITE}/assets/img/og-elvora.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="Elvora Global — markanızın AI ekosistemini kuruyoruz">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${title}">
<meta name="twitter:description" content="${desc}">
<meta name="twitter:image" content="${SITE}/assets/img/og-elvora.png">
<!-- /OG -->`;

  html = html.replace(/(<link rel="icon"[^>]*>)/, `$1${og}`);

  // Footer: Çözümler sütununa CVOptimizerAI, Kurum sütununa yasal + iletişim
  html = html.replace(
    /(<a class="footer__link" href="[^"]*identity\.html">Elvora Identity<\/a>)(?!\s*\n\s*<a class="footer__link"[^>]*cvoptimizerai)/,
    `$1\n        <a class="footer__link" href="${up}cozumler/cvoptimizerai.html">CV Optimizer AI</a>`
  );
  html = html.replace(
    /(<a class="footer__link" href="[^"]*iletisim\.html">İletişim<\/a>)(?!\s*\n\s*<a class="footer__link"[^>]*gizlilik)/,
    `$1\n        <a class="footer__link" href="${up}gizlilik.html">KVKK &amp; Gizlilik</a>`
  );

  writeFileSync(file, html);
  console.log(`✓ ${file.padEnd(30)} og+kanonik+footer`);
}

// robots.txt + sitemap.xml
writeFileSync('robots.txt', `User-agent: *
Allow: /
Disallow: /tesekkurler.html

Sitemap: ${SITE}/sitemap.xml
`);

const today = '2026-07-25';
const urls = Object.values(PAGES)
  .filter((p) => p.path !== '/tesekkurler.html')
  .map((p) => `  <url>\n    <loc>${SITE}${p.path}</loc>\n    <lastmod>${today}</lastmod>\n  </url>`)
  .join('\n');
writeFileSync('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`);
console.log('✓ robots.txt + sitemap.xml');
