// Elvora Global — screenshot aracı (macOS).
//   node screenshot.mjs http://localhost:3000
//   node screenshot.mjs http://localhost:3000 anasayfa
//   node screenshot.mjs http://localhost:3000 mobile     → 390px viewport
//
// Çıktı: ./temporary screenshots/screenshot-N[-label].png  (otomatik artar, asla üzerine yazmaz)
import { readdir, mkdir, glob } from 'node:fs/promises';
import { join } from 'node:path';
import { homedir } from 'node:os';
import puppeteer from 'puppeteer-core';

const SHOT_DIR = join(process.cwd(), 'temporary screenshots');

// CLAUDE.md Windows yolları listeliyor ama bu makine macOS.
// Chrome zaten puppeteer cache'inde — sürümü sabitlemek yerine glob ile çöz.
async function findChrome() {
  const pattern = '.cache/puppeteer/chrome/*/chrome-mac-*/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing';
  const found = [];
  for await (const entry of glob(pattern, { cwd: homedir() })) {
    found.push(join(homedir(), entry));
  }
  if (!found.length) {
    throw new Error(
      'Chrome bulunamadı. Kur:  npx @puppeteer/browsers install chrome@stable'
    );
  }
  return found.sort().at(-1); // en yeni sürüm
}

async function nextIndex() {
  await mkdir(SHOT_DIR, { recursive: true });
  const files = await readdir(SHOT_DIR);
  const nums = files
    .map((f) => /^screenshot-(\d+)/.exec(f))
    .filter(Boolean)
    .map((m) => Number(m[1]));
  return nums.length ? Math.max(...nums) + 1 : 1;
}

const url = process.argv[2] ?? 'http://localhost:3000';
const label = process.argv[3] ?? '';
const isMobile = /^mobile$/i.test(label);

const browser = await puppeteer.launch({
  executablePath: await findChrome(),
  headless: true,
  args: ['--no-sandbox', '--font-render-hinting=none', '--force-color-profile=srgb'],
});

try {
  const page = await browser.newPage();
  await page.setViewport({
    width: isMobile ? 390 : 1440,
    height: isMobile ? 844 : 900,
    deviceScaleFactor: 2,
    isMobile,
    hasTouch: isMobile,
  });

  const consoleErrors = [];
  page.on('console', (m) => { if (m.type() === 'error') consoleErrors.push(m.text()); });
  page.on('pageerror', (e) => consoleErrors.push(e.message));

  await page.goto(url, { waitUntil: 'networkidle2', timeout: 45_000 });

  // Web fontları yerine oturmadan çekmek yanlış metrik okumaya yol açar.
  // Not: document.fonts.ready bir FontFaceSet'e resolve olur — serialize
  // edilemez ve evaluate'i askıda bırakır. Boolean'a indirgemek şart.
  await page.evaluate(() => document.fonts.ready.then(() => true));

  // Scroll-reveal animasyonlarını tetikle, sonra başa dön.
  // KRİTİK: html'de scroll-behavior:smooth var — scrollTo animasyonlu olur ve
  // döngü sayfanın altına hiç ulaşmaz. Sweep boyunca 'auto'ya zorluyoruz.
  await page.evaluate(async () => {
    const root = document.documentElement;
    const prev = root.style.scrollBehavior;
    root.style.scrollBehavior = 'auto';

    const step = Math.round(window.innerHeight * 0.6);
    for (let y = 0; y < root.scrollHeight; y += step) {
      window.scrollTo(0, y);
      // Görseller eklendikten sonra 110ms yetmiyordu — reveal'lar açılmadan
      // sayfa taranıp bitiyordu.
      await new Promise((r) => setTimeout(r, 150));
    }
    // Alta gerçekten indiğimizi garanti et
    window.scrollTo(0, root.scrollHeight);
    await new Promise((r) => setTimeout(r, 220));
    window.scrollTo(0, 0);

    root.style.scrollBehavior = prev;
    // Reveal geçişleri (0.8s + kademeli gecikme) tamamlansın
    await new Promise((r) => setTimeout(r, 1700));
  });

  // Hâlâ açılmamış reveal öğesi varsa bu bir hatadır — sessizce geçme.
  const unrevealed = await page.evaluate(() =>
    [...document.querySelectorAll('.reveal')].filter((e) => !e.classList.contains('is-in')).length
  );

  const n = await nextIndex();
  const name = label ? `screenshot-${n}-${label}.png` : `screenshot-${n}.png`;
  const path = join(SHOT_DIR, name);

  await page.screenshot({ path, fullPage: true });

  // Yatay taşma, CLAUDE.md'nin responsive kuralının en sık ihlali — otomatik ölç.
  const overflow = await page.evaluate(() => ({
    doc: document.documentElement.scrollWidth,
    win: window.innerWidth,
  }));

  console.log(`✓ ${name}  (${isMobile ? 390 : 1440}px)`);
  if (unrevealed > 0) {
    console.warn(`⚠ ${unrevealed} reveal öğesi açılmadı — boş bölüm olarak çekildi.`);
  }
  if (overflow.doc > overflow.win + 1) {
    console.warn(`⚠ YATAY TAŞMA: içerik ${overflow.doc}px, viewport ${overflow.win}px`);
  }
  if (consoleErrors.length) {
    console.warn(`⚠ konsol hataları:\n  ${consoleErrors.join('\n  ')}`);
  }
} finally {
  await browser.close();
}
