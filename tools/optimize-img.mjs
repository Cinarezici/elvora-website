// PNG'leri web için WebP'ye çevirir. Kullanım: node tools/optimize-img.mjs
import sharp from 'sharp';
import { readdir, stat } from 'node:fs/promises';
import { join, parse } from 'node:path';

const DIR = 'assets/img/konsept';
const WIDTHS = { '4:5': 1000, '3:2': 1600 };

const files = (await readdir(DIR)).filter((f) => f.endsWith('.png') && !f.startsWith('_'));
for (const f of files) {
  const { name } = parse(f);
  const src = join(DIR, f);
  const meta = await sharp(src).metadata();
  const target = meta.width > meta.height ? WIDTHS['3:2'] : WIDTHS['4:5'];
  const out = join(DIR, `${name}.webp`);
  await sharp(src).resize({ width: target, withoutEnlargement: true })
    .webp({ quality: 82 }).toFile(out);
  const a = (await stat(src)).size, b = (await stat(out)).size;
  console.log(`${name.padEnd(22)} ${(a/1048576).toFixed(1)}MB → ${(b/1024).toFixed(0)}KB  (${meta.width}×${meta.height} → ${target}w)`);
}
