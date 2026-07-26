/* Elvora logo animasyonu → GIF
   frame.html'i puppeteer ile t=0..1 arası kare kare çeker, gifenc ile kodlar.

   Kullanım:  node tools/logo-anim/build-gif.mjs
   Çıktı:     assets/img/elvora-logo.gif  (+ ilk kare PNG fallback)

   Tasarım kararları:
   - İlk kare zaten okunur bir logo (istemci GIF oynatmazsa da anlamlı).
   - Son kare uzun bekler → imzada sürekli dönen GIF sinir bozucu olmasın.
   - Palet küçük (siyah + vermilion + kemik) → dosya küçük kalır.
*/
import puppeteer from 'puppeteer-core';
// gifenc CommonJS olarak yayınlanıyor — adlandırılmış import çalışmıyor
import gifenc from 'gifenc';
const { GIFEncoder, quantize, applyPalette } = gifenc;
import { glob, writeFile, mkdir } from 'node:fs/promises';
import { homedir } from 'node:os';
import { join, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import sharp from 'sharp';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = join(HERE, '..', '..');

const SIZE = 200;        // GIF kenar uzunluğu (1:1)
const RENDER = 400;      // 2x çekip küçültüyoruz → kenarlar temiz
const FRAMES = 34;       // hareket karesi
const FPS = 20;
const HOLD_MS = 2600;    // son karenin bekleme süresi

async function findChrome() {
  const out = [];
  for await (const e of glob('.cache/puppeteer/chrome/*/chrome-mac-*/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing', { cwd: homedir() })) {
    out.push(join(homedir(), e));
  }
  if (!out.length) throw new Error('Chrome bulunamadı');
  return out.sort().at(-1);
}

const browser = await puppeteer.launch({
  executablePath: await findChrome(),
  headless: true,
  args: ['--no-sandbox', '--force-color-profile=srgb', '--font-render-hinting=none'],
});

try {
  const page = await browser.newPage();
  await page.setViewport({ width: RENDER, height: RENDER, deviceScaleFactor: 1 });
  await page.goto(pathToFileURL(join(HERE, 'frame.html')).href, { waitUntil: 'networkidle0' });
  await page.evaluate(() => document.fonts.ready.then(() => true));

  // Kareleri topla
  const rgbaFrames = [];
  for (let i = 0; i < FRAMES; i++) {
    const t = i / (FRAMES - 1);
    await page.evaluate((tt) => window.renderFrame(tt), t);
    const png = await page.screenshot({ type: 'png' });
    const { data } = await sharp(png)
      .resize(SIZE, SIZE, { kernel: 'lanczos3' })
      .ensureAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true });
    rgbaFrames.push(new Uint8ClampedArray(data));
    if (i === 0) {
      await mkdir(join(ROOT, 'assets', 'img'), { recursive: true });
      await sharp(png).resize(SIZE, SIZE, { kernel: 'lanczos3' }).png()
        .toFile(join(ROOT, 'assets', 'img', 'elvora-logo-ilkkare.png'));
    }
  }

  // Ortak palet: tüm karelerden örnekleyip tek palet çıkar → titreme olmaz
  const sample = new Uint8ClampedArray(rgbaFrames.length * SIZE * 4);
  rgbaFrames.forEach((f, i) => sample.set(f.subarray(0, SIZE * 4), i * SIZE * 4));
  const palette = quantize(sample, 48, { format: 'rgb565' });

  const gif = GIFEncoder();
  rgbaFrames.forEach((frame, i) => {
    const index = applyPalette(frame, palette, 'rgb565');
    const last = i === rgbaFrames.length - 1;
    gif.writeFrame(index, SIZE, SIZE, {
      palette: i === 0 ? palette : undefined,
      delay: last ? HOLD_MS : Math.round(1000 / FPS),
    });
  });
  gif.finish();

  const out = join(ROOT, 'assets', 'img', 'elvora-logo.gif');
  await writeFile(out, gif.bytes());

  const kb = (gif.bytes().length / 1024).toFixed(1);
  console.log(`✓ ${SIZE}×${SIZE}px · ${FRAMES} kare · ${kb} KB`);
  console.log(`  toplam süre: ${((FRAMES - 1) / FPS).toFixed(2)}s hareket + ${(HOLD_MS / 1000).toFixed(1)}s bekleme`);
  console.log(`  → assets/img/elvora-logo.gif`);
} finally {
  await browser.close();
}
