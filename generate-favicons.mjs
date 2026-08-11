import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const svgFile = './assets/favicon.svg';
const outputDir = './assets';

// Favicon sizes and names
const favicons = [
  { size: 16, name: 'favicon-16x16.png' },
  { size: 32, name: 'favicon-32x32.png' },
  { size: 180, name: 'apple-touch-icon.png' },
  { size: 192, name: 'android-chrome-192x192.png' },
  { size: 512, name: 'android-chrome-512x512.png' },
];

// PNG'leri gömerek ICONDIR + ICONDIRENTRY başlıklarını elle paketler
// (bkz. MS-ICO spec). Her görüntü ham bir PNG dosyası olarak saklanır —
// ayrı bir BMP dönüşümüne gerek yok, tüm modern tarayıcılar destekliyor.
function buildIco(images) {
  const headerSize = 6 + images.length * 16;
  let offset = headerSize;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type: icon
  header.writeUInt16LE(images.length, 4);

  const entries = [];
  const datas = [];
  for (const { size, png } of images) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(size >= 256 ? 0 : size, 0); // width (0 = 256px)
    entry.writeUInt8(size >= 256 ? 0 : size, 1); // height
    entry.writeUInt8(0, 2); // color palette
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // color planes
    entry.writeUInt16LE(32, 6); // bits per pixel
    entry.writeUInt32LE(png.length, 8); // image data size
    entry.writeUInt32LE(offset, 12); // offset from file start
    offset += png.length;
    entries.push(entry);
    datas.push(png);
  }

  return Buffer.concat([header, ...entries, ...datas]);
}

async function generateFavicons() {
  try {
    console.log('Generating favicons from SVG...');

    for (const favicon of favicons) {
      const outputPath = path.join(outputDir, favicon.name);
      await sharp(svgFile)
        .png()
        .resize(favicon.size, favicon.size)
        .toFile(outputPath);
      console.log(`✓ ${favicon.name} (${favicon.size}x${favicon.size})`);
    }

    // favicon.ico: gerçek ICO konteyneri, içine 16x16 + 32x32 PNG gömülü
    // (Vista+ / tüm modern tarayıcılar bunu destekliyor). Önceki sürüm
    // sadece bir PNG'yi ".ico" olarak yeniden adlandırıyordu — bazı
    // tarayıcılar/sekme önizlemeleri gerçek ICO imzası bekleyip bunu
    // reddediyor, sekmede ikon boş kalıyordu.
    const png16 = await sharp(svgFile).png().resize(16, 16).toBuffer();
    const png32 = await sharp(svgFile).png().resize(32, 32).toBuffer();
    const ico = buildIco([
      { size: 16, png: png16 },
      { size: 32, png: png32 },
    ]);

    fs.writeFileSync(path.join(outputDir, 'favicon.ico'), ico);
    fs.writeFileSync('./favicon.ico', ico);
    console.log('✓ favicon.ico (16x16 + 32x32, gerçek ICO formatı)');

    console.log('\n✨ All favicons generated successfully!');
  } catch (error) {
    console.error('Error generating favicons:', error);
    process.exit(1);
  }
}

generateFavicons();
