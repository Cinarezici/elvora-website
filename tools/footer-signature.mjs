import { readFileSync, writeFileSync } from 'node:fs';

const FILES = ['index.html','hakkimizda.html','iletisim.html','gizlilik.html','tesekkurler.html',
  'cozumler/studio.html','cozumler/vision.html','cozumler/identity.html','cozumler/cvoptimizerai.html','cozumler/flow.html'];

const OLD = `    <div class="footer__base">
      <p class="footer__fine">© 2026 Elvora Global</p>
      <p class="footer__fine">Modüler AI çözümleri</p>
    </div>
  </div>
</footer>`;

const NEW = `    <div class="footer__base">
      <div class="footer__fine-group">
        <p class="footer__fine">© 2026 Elvora Global</p>
        <p class="footer__fine">Modüler AI çözümleri</p>
      </div>
      <a class="footer__top" href="#main">Yukarı çık <span aria-hidden="true">↑</span></a>
    </div>
  </div>

  <div class="footer__signature" aria-hidden="true">
    <span class="footer__signature-text">Elvora<span class="footer__signature-dot">.</span></span>
  </div>
</footer>`;

for (const f of FILES) {
  const h = readFileSync(f, 'utf8');
  const count = h.split(OLD).length - 1;
  if (count !== 1) {
    console.log(`✗ ${f} — beklenen 1 eşleşme, bulunan ${count}. Atlandı.`);
    continue;
  }
  writeFileSync(f, h.replace(OLD, NEW));
  console.log(`✓ ${f}`);
}
