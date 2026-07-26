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

    // Generate favicon.ico (16x16 and 32x32 combined)
    const ico32 = await sharp(svgFile)
      .png()
      .resize(32, 32)
      .toBuffer();

    fs.writeFileSync(path.join(outputDir, 'favicon.ico'), ico32);
    console.log('✓ favicon.ico (32x32)');

    console.log('\n✨ All favicons generated successfully!');
  } catch (error) {
    console.error('Error generating favicons:', error);
    process.exit(1);
  }
}

generateFavicons();
