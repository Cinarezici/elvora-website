import { readFileSync, writeFileSync } from 'node:fs';
const FILES = ['index.html','hakkimizda.html','iletisim.html','gizlilik.html',
  'cozumler/studio.html','cozumler/vision.html','cozumler/identity.html','cozumler/cvoptimizerai.html'];

// TODO: köşeli parantezli değerler gerçek bilgilerle değiştirilecek
const BLOCK = `
        <ul class="footer__contact">
          <li><a class="footer__link" href="mailto:merhaba@elvoraglobal.com">merhaba@elvoraglobal.com</a></li>
          <li><a class="footer__link" href="tel:+900000000000">+90 (000) 000 00 00</a></li>
          <li class="footer__fine">İstanbul, Türkiye</li>
        </ul>`;

for (const f of FILES) {
  let h = readFileSync(f, 'utf8');
  if (h.includes('footer__contact')) { console.log(`– ${f} (zaten var)`); continue; }
  const before = h;
  h = h.replace(/(<p class="body-text footer__blurb">[\s\S]*?<\/p>)/, `$1${BLOCK}`);
  if (h === before) { console.log(`✗ ${f} — footer bloğu bulunamadı`); continue; }
  writeFileSync(f, h);
  console.log(`✓ ${f}`);
}
