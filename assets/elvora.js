/* ============================================================
   ELVORA GLOBAL — paylaşılan davranışlar
   6 sayfanın tek script kaynağı.
   ============================================================ */
(() => {
  'use strict';

  // JS varsa reveal animasyonlarını etkinleştir (JS yoksa içerik görünür kalır)
  document.documentElement.classList.add('js');

  const ready = (fn) =>
    document.readyState === 'loading'
      ? document.addEventListener('DOMContentLoaded', fn, { once: true })
      : fn();

  const prefersReducedMotion = () =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const clampNum = (v, lo, hi) => Math.max(lo, Math.min(hi, v));

  // Perde varsa scroll'u hemen kilitle — ready'yi beklerse sayfa
  // açılış ekranının altında kayabiliyor.
  preloaderLock();

  ready(() => {
    stickyMasthead();
    mobileNav();
    navDropdown();
    scrollReveal();
    duplicateTicker();
    contactForm();
    compareSliders();
    smoothScroll();
    auraParallax();
    magneticButtons();
    cardSpotlight();
    countUpMetrics();
    pageTransitions();
    auraNetwork();
  });

  /* ---------- Masaüstü "Çözümler" açılır menüsü ----------
     Görünürlük CSS sınıfıyla yönetiliyor (bkz. elvora.css .nav__dropdown),
     burada yalnız durum: tıkla aç/kapat, dışarı tıkla kapat, Esc kapat +
     odağı tetikleyiciye geri ver. */
  function navDropdown() {
    // Sayfada birden fazla açılır menü olabilir (Çözümler, Endüstriler vb.) —
    // her biri kendi aç/kapa durumunu bağımsız yönetir.
    document.querySelectorAll('.nav__dropdown').forEach((dd) => {
      const trigger = dd.querySelector('.nav__dropdown-trigger');
      if (!trigger) return;

      const setOpen = (open) => {
        dd.classList.toggle('is-open', open);
        trigger.setAttribute('aria-expanded', String(open));
      };

      trigger.addEventListener('click', () => {
        setOpen(!dd.classList.contains('is-open'));
      });

      document.addEventListener('click', (e) => {
        if (dd.classList.contains('is-open') && !dd.contains(e.target)) setOpen(false);
      });

      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && dd.classList.contains('is-open')) {
          setOpen(false);
          trigger.focus();
        }
      });
    });
  }

  /* ---------- Öncesi/sonrası sürgüsü ----------
     Konum tek bir CSS değişkeninde (--pos); range hem fare hem klavye
     erişimini tek öğeden sağlıyor, ayrıca tuş desteği yazmaya gerek yok. */
  function compareSliders() {
    document.querySelectorAll('.compare').forEach((box) => {
      const range = box.querySelector('.compare__range');
      if (!range) return;
      const sync = () => box.style.setProperty('--pos', `${range.value}%`);
      range.addEventListener('input', sync);
      sync();
    });
  }

  /* ---------- Açılış ekranı ----------
     Perdeyi CSS animasyonu kaldırıyor (JS çökse bile site açılır).
     Buradaki iş yalnızca: scroll kilidi + bitince düğümü DOM'dan atmak. */
  function preloaderLock() {
    const el = document.getElementById('preloader');
    if (!el) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return; // CSS zaten display:none yapıyor

    document.documentElement.classList.add('is-loading');

    let cleared = false;
    const clear = () => {
      if (cleared) return;
      cleared = true;
      document.documentElement.classList.remove('is-loading');
      el.remove();
    };

    // Normal yol: kapanış animasyonu bitince temizle
    el.addEventListener('animationend', (e) => {
      if (e.animationName === 'preloader-out') clear();
    });

    // Emniyet: animasyon hiç tetiklenmezse (sekme arkaplandaysa,
    // animasyon desteklenmiyorsa) yine de kilidi aç.
    setTimeout(clear, 3200);
  }

  /* ---------- Sticky header: scroll'da kenar + koyulaşma ---------- */
  function stickyMasthead() {
    const bar = document.querySelector('.masthead');
    if (!bar) return;

    let queued = false;
    const sync = () => {
      bar.classList.toggle('is-stuck', window.scrollY > 12);
      queued = false;
    };
    sync();
    window.addEventListener(
      'scroll',
      () => {
        if (queued) return;
        queued = true;
        requestAnimationFrame(sync);
      },
      { passive: true }
    );
  }

  /* ---------- Mobil menü ----------
     Panel açılışı hidden→.is-open iki adımda yürür (CSS transition
     hidden'dan animasyon yapamaz): önce hidden kaldırılır, sonraki
     frame'de .is-open eklenir. Kapanışta transition bitince hidden geri
     gelir — bu yüzden zamanlayıcı CSS süresiyle eşleşiyor (550ms). */
  function mobileNav() {
    const burger = document.querySelector('.burger');
    const panel = document.querySelector('.mobile-nav');
    if (!burger || !panel) return;

    // Birden fazla akordeon grubu olabilir (Çözümler, Endüstriler vb.)
    const groups = Array.from(panel.querySelectorAll('.mobile-nav__group'));

    const closeSubmenu = () => {
      groups.forEach((group) => {
        group.classList.remove('is-open');
        group.querySelector('.mobile-nav__toggle')?.setAttribute('aria-expanded', 'false');
      });
    };

    let closeTimer;
    const setOpen = (open) => {
      burger.setAttribute('aria-expanded', String(open));
      // Panel artık sayfayı örten bir drawer — açıkken arkadaki içerik
      // kaymasın diye body kilitleniyor.
      document.body.classList.toggle('nav-open', open);
      window.clearTimeout(closeTimer);
      if (open) {
        panel.hidden = false;
        requestAnimationFrame(() => panel.classList.add('is-open'));
      } else {
        panel.classList.remove('is-open');
        closeSubmenu();
        closeTimer = window.setTimeout(() => { panel.hidden = true; }, 550);
      }
    };

    panel.hidden = true;
    burger.setAttribute('aria-expanded', 'false');

    burger.addEventListener('click', () => {
      setOpen(burger.getAttribute('aria-expanded') !== 'true');
    });

    // Esc ile kapat, odağı butona geri ver
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && burger.getAttribute('aria-expanded') === 'true') {
        setOpen(false);
        burger.focus();
      }
    });

    // Link tıklanınca ya da arkadaki karartılmış backdrop'a (panelin
    // kendisine, hiçbir alt öğeye değil) tıklanınca kapat
    panel.addEventListener('click', (e) => {
      if (e.target.closest('a')) setOpen(false);
      else if (e.target === panel) setOpen(false);
    });

    // Masaüstüne genişletilirse paneli sıfırla
    window.matchMedia('(min-width: 960px)').addEventListener('change', (m) => {
      if (m.matches) setOpen(false);
    });

    // Alt-akordeonlar (Çözümler, Endüstriler vb.) — her biri bağımsız
    groups.forEach((group) => {
      const subTrigger = group.querySelector('.mobile-nav__toggle');
      subTrigger?.addEventListener('click', () => {
        const isOpen = group.classList.toggle('is-open');
        subTrigger.setAttribute('aria-expanded', String(isOpen));
      });
    });
  }

  /* ---------- Scroll reveal ----------
     .rule ayıraçları da izlenir: kendileri görünür durur, yalnız üzerlerindeki
     vermilion iz görüş alanına girince çizilir. */
  function scrollReveal() {
    const items = document.querySelectorAll('.reveal, .rule');
    if (!items.length) return;

    // IntersectionObserver yoksa hepsini görünür yap
    if (!('IntersectionObserver' in window)) {
      items.forEach((el) => el.classList.add('is-in'));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          // Kardeşler arasında kademeli gecikme
          const group = entry.target.parentElement?.querySelectorAll(':scope > .reveal') ?? [];
          const idx = Array.prototype.indexOf.call(group, entry.target);
          entry.target.style.transitionDelay = `${Math.max(0, idx) * 70}ms`;
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        });
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.08 }
    );

    items.forEach((el) => io.observe(el));
  }

  /* ---------- Ticker: kesintisiz döngü için içeriği ikizle ---------- */
  function duplicateTicker() {
    document.querySelectorAll('.ticker__track').forEach((track) => {
      if (track.dataset.cloned === 'true') return;
      track.append(...Array.from(track.children).map((n) => n.cloneNode(true)));
      track.dataset.cloned = 'true';
      // Klonlar ekran okuyucuda tekrar okunmasın
      track.setAttribute('aria-hidden', 'true');
    });
  }

  /* ---------- İletişim formu: client-side doğrulama ---------- */
  function contactForm() {
    const form = document.querySelector('.form');
    if (!form) return;

    const success = document.querySelector('.form-success');

    const messages = {
      valueMissing: 'Bu alan zorunlu',
      typeMismatch: 'Geçerli bir e-posta girin',
      tooShort: 'Biraz daha ayrıntı verin',
    };

    const fieldOf = (input) => input.closest('.field');

    const errorFor = (input) => {
      if (input.type === 'checkbox' && input.validity.valueMissing) {
        return 'Devam etmek için onay gerekiyor';
      }
      if (input.validity.valueMissing) return messages.valueMissing;
      if (input.validity.typeMismatch) return messages.typeMismatch;
      if (input.validity.tooShort) return messages.tooShort;
      return 'Geçersiz değer';
    };

    const validate = (input) => {
      const field = fieldOf(input);
      if (!field) return true;
      const slot = field.querySelector('.field__error');
      const ok = input.checkValidity();

      field.classList.toggle('is-invalid', !ok);
      input.setAttribute('aria-invalid', String(!ok));
      if (slot) slot.textContent = ok ? '' : errorFor(input);
      return ok;
    };

    // KVKK onay kutusu da doğrulanmalı — .field__input sınıfı taşımıyor
    const inputs = Array.from(form.querySelectorAll('.field__input, .consent__box'));

    // Alandan çıkışta doğrula; hata varsa yazarken/işaretlerken temizle
    inputs.forEach((input) => {
      input.addEventListener('blur', () => validate(input));
      input.addEventListener('input', () => {
        if (fieldOf(input)?.classList.contains('is-invalid')) validate(input);
      });
      if (input.type === 'checkbox') {
        input.addEventListener('change', () => validate(input));
      }
    });

    const submitBtn = form.querySelector('button[type=submit]');
    if (submitBtn) submitBtn.dataset.label = submitBtn.innerHTML;
    const failBox = document.querySelector('.form-fail');

    const showFail = () => {
      if (!failBox) return;
      failBox.hidden = false;
      requestAnimationFrame(() => failBox.classList.add('is-shown'));
    };

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const results = inputs.map(validate);
      const firstBad = inputs[results.indexOf(false)];

      if (firstBad) {
        firstBad.focus();
        firstBad.scrollIntoView({ behavior: 'smooth', block: 'center' });
        return;
      }

      // ENDPOINT: form etiketindeki action'dan okunur (iletisim.html).
      // Boşsa gönderim yapılmaz — kullanıcıya "iletildi" demek yerine
      // dürüstçe hata gösterilir. Sessizce lead yutmaz.
      const endpoint = form.getAttribute('action');

      if (!endpoint || endpoint.includes('ENDPOINT_BURAYA')) {
        console.error('[Elvora] Form action tanımlı değil — gönderim yapılmadı.');
        showFail();
        return;
      }

      // textContent ile geri yazmak buton içindeki → okunu siliyordu;
      // özgün içeriği saklayıp aynen geri koyuyoruz.
      const busy = (on) => {
        if (!submitBtn) return;
        submitBtn.disabled = on;
        if (on) submitBtn.textContent = 'Gönderiliyor…';
        else submitBtn.innerHTML = submitBtn.dataset.label ?? submitBtn.innerHTML;
      };

      try {
        busy(true);
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { Accept: 'application/json' },
          body: new FormData(form),
        });

        if (!res.ok) {
          // Formspree hatayı JSON olarak döner — genel mesaj yerine onu göster
          let detail = `HTTP ${res.status}`;
          try {
            const body = await res.json();
            if (Array.isArray(body?.errors) && body.errors.length) {
              detail = body.errors.map((x) => x.message).join(' · ');
            }
          } catch { /* JSON değilse durumu kullan */ }
          throw new Error(detail);
        }

        // Başarı: teşekkür sayfası varsa oraya git (dönüşüm ölçümü için),
        // yoksa yerinde başarı bloğunu göster.
        const thanks = form.dataset.thanks;
        if (thanks) {
          window.location.assign(thanks);
          return;
        }
        form.hidden = true;
        if (success) {
          success.hidden = false;
          requestAnimationFrame(() => {
            success.classList.add('is-shown');
            success.setAttribute('tabindex', '-1');
            success.focus({ preventScroll: true });
          });
        }
      } catch (err) {
        console.error('[Elvora] Form gönderilemedi:', err.message);
        busy(false);
        showFail();
      }
    });
  }

  /* ---------- Inertia scroll (Lenis) ----------
     assets/vendor/lenis.min.js önce yüklendiyse global `Lenis` mevcut.
     Wrapper/content vermiyoruz — window/document.documentElement üzerinde
     native scroll semantiğini koruyan modda çalışır, window.scrollY ve
     IntersectionObserver bozulmadan işlemeye devam eder. */
  function smoothScroll() {
    if (prefersReducedMotion() || typeof Lenis === 'undefined') return;

    const lenis = new Lenis({ autoRaf: true });
    const HEADER_OFFSET = -96; // sabit masthead yüksekliği + boşluk

    document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach((link) => {
      link.addEventListener('click', (e) => {
        const target = document.querySelector(link.getAttribute('href'));
        if (!target) return;
        e.preventDefault();
        lenis.scrollTo(target, { offset: HEADER_OFFSET });
        // preventDefault, tarayıcının odağı hedefe taşıma varsayılan
        // davranışını da iptal ediyor — skip-link için elle geri veriyoruz.
        if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
        target.focus({ preventScroll: true });
      });
    });
  }

  /* ---------- Hero / CTA aura: scroll'a bağlı hafif parallax ---------- */
  function auraParallax() {
    if (prefersReducedMotion()) return;

    const fields = Array.from(document.querySelectorAll('.hero .aura__field, .cta-band .aura__field'))
      .map((field) => ({ field, host: field.closest('.hero, .cta-band') }))
      .filter((x) => x.host);
    if (!fields.length) return;

    let queued = false;
    const sync = () => {
      queued = false;
      fields.forEach(({ field, host }) => {
        const offset = clampNum(host.getBoundingClientRect().top * -0.08, -60, 60);
        field.style.setProperty('--parallax-y', `${offset.toFixed(1)}px`);
      });
    };
    sync();
    window.addEventListener(
      'scroll',
      () => {
        if (queued) return;
        queued = true;
        requestAnimationFrame(sync);
      },
      { passive: true }
    );
  }

  /* ---------- Hero aura: ağ/bağlantı katmanı ----------
     Sabit yay/nokta setine ek olarak "AI ekosistemi" mesajını somutlaştıran
     birbirine bağlı düğümler ekler — yalnız hero'da (CTA bandı sakin kalsın).
     Konumlar 1000x1000 viewBox'a göre hesaplanır, markup 9 sayfaya
     kopyalanmaz; elvora.css .aura__network/.aura__net-* animasyonu yürütür. */
  function auraNetwork() {
    if (prefersReducedMotion()) return;

    const svgs = document.querySelectorAll('.hero .aura__svg');
    if (!svgs.length) return;

    const SVG_NS = 'http://www.w3.org/2000/svg';
    const cx = 500;
    const cy = 500;
    const r = 345;
    const angles = [12, 95, 160, 235, 305];
    const links = [
      [0, 1], [1, 2], [2, 3], [3, 4], [4, 0],
      [0, 2], [1, 3],
    ];

    svgs.forEach((svg) => {
      const points = angles.map((deg) => {
        const rad = (deg * Math.PI) / 180;
        return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
      });

      const g = document.createElementNS(SVG_NS, 'g');
      g.setAttribute('class', 'aura__network');

      links.forEach(([a, b], i) => {
        const p1 = points[a];
        const p2 = points[b];
        const len = Math.hypot(p2.x - p1.x, p2.y - p1.y);
        const line = document.createElementNS(SVG_NS, 'line');
        line.setAttribute('class', 'aura__net-line');
        line.setAttribute('x1', p1.x.toFixed(1));
        line.setAttribute('y1', p1.y.toFixed(1));
        line.setAttribute('x2', p2.x.toFixed(1));
        line.setAttribute('y2', p2.y.toFixed(1));
        line.setAttribute('stroke-dasharray', len.toFixed(1));
        line.style.setProperty('--len', len.toFixed(1));
        line.style.animationDelay = `${(i * 0.65).toFixed(2)}s`;
        g.appendChild(line);
      });

      points.forEach((p, i) => {
        const node = document.createElementNS(SVG_NS, 'circle');
        node.setAttribute('class', 'aura__net-node');
        node.setAttribute('cx', p.x.toFixed(1));
        node.setAttribute('cy', p.y.toFixed(1));
        node.setAttribute('r', '3');
        node.style.animationDelay = `${(i * 0.5).toFixed(2)}s`;
        g.appendChild(node);
      });

      svg.appendChild(g);
    });
  }

  /* ---------- Manyetik butonlar ----------
     Yalnız pointer:fine (fare) cihazlarda. Kayıttan çıkışta inline transform
     silinir; .btn'nin kendi spring transition'ı normale döner. */
  function magneticButtons() {
    if (prefersReducedMotion() || !window.matchMedia('(pointer: fine)').matches) return;

    const strength = 0.35;
    const max = 10;

    document.querySelectorAll('.btn').forEach((btn) => {
      btn.addEventListener('mousemove', (e) => {
        const r = btn.getBoundingClientRect();
        const x = clampNum((e.clientX - r.left - r.width / 2) * strength, -max, max);
        const y = clampNum((e.clientY - r.top - r.height / 2) * strength, -max, max);
        btn.style.transform = `translate(${x.toFixed(1)}px, ${y.toFixed(1)}px)`;
      });
      btn.addEventListener('mouseleave', () => {
        btn.style.transform = '';
      });
    });
  }

  /* ---------- Kart / iş linki spotlight ----------
     İmleci takip eden ışık, --x/--y ile elvora.css'teki radial-gradient'e
     bağlanır. Görünürlük yalnız CSS hover ile açılır, burada yalnız konum. */
  function cardSpotlight() {
    if (prefersReducedMotion() || !window.matchMedia('(pointer: fine)').matches) return;

    document.querySelectorAll('.card, .work-link').forEach((el) => {
      let queued = false;
      let last = { x: 0, y: 0 };
      el.addEventListener('mousemove', (e) => {
        const r = el.getBoundingClientRect();
        last = { x: e.clientX - r.left, y: e.clientY - r.top };
        if (queued) return;
        queued = true;
        requestAnimationFrame(() => {
          el.style.setProperty('--x', `${last.x.toFixed(0)}px`);
          el.style.setProperty('--y', `${last.y.toFixed(0)}px`);
          queued = false;
        });
      });
    });
  }

  /* ---------- Metrik sayaçları ----------
     "20.313+", "132.412+", "6" gibi değerler görünüşe girince 0'dan sayar.
     "<30 sn" gibi öneki olanlar sayılmaz — semantik olarak anlamsız. */
  function countUpMetrics() {
    if (prefersReducedMotion() || !('IntersectionObserver' in window)) return;

    const nums = document.querySelectorAll('.metric__num');
    if (!nums.length) return;

    const animate = (el) => {
      const raw = el.textContent.trim();
      const match = raw.match(/^([^\d]*)([\d.,]+)(.*)$/);
      if (!match) return;
      const [, prefix, numPart, suffix] = match;
      if (prefix.includes('<')) return;

      const target = parseInt(numPart.replace(/[.,]/g, ''), 10);
      if (!Number.isFinite(target)) return;

      const duration = 1200;
      let start = null;
      const step = (ts) => {
        if (start === null) start = ts;
        const t = Math.min(1, (ts - start) / duration);
        const eased = 1 - (1 - t) ** 3;
        el.textContent = `${prefix}${Math.round(target * eased).toLocaleString('tr-TR')}${suffix}`;
        if (t < 1) requestAnimationFrame(step);
        else el.textContent = raw;
      };
      requestAnimationFrame(step);
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          animate(entry.target);
          io.unobserve(entry.target);
        });
      },
      { threshold: 0.4 }
    );
    nums.forEach((el) => io.observe(el));
  }

  /* ---------- Sayfa geçişi: dahili linklerde kısa örtü geçişi ----------
     Yalnız düz sol-tık + aynı origin + .html hedefli linkleri yakalar.
     Yeni sekme, mailto/tel, #-anchor ve harici linkler dokunulmadan kalır. */
  function pageTransitions() {
    if (prefersReducedMotion()) return;

    const overlay = document.createElement('div');
    overlay.className = 'page-fade';
    overlay.setAttribute('aria-hidden', 'true');
    document.body.appendChild(overlay);

    // bfcache'ten geri dönüşte örtü takılı kalmasın
    window.addEventListener('pageshow', (e) => {
      if (e.persisted) overlay.classList.remove('is-active');
    });

    document.addEventListener('click', (e) => {
      if (e.defaultPrevented || e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      const link = e.target.closest('a[href]');
      if (!link) return;
      if (link.target && link.target !== '_self') return;

      const href = link.getAttribute('href');
      if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) return;
      if (link.hasAttribute('download')) return;

      let url;
      try {
        url = new URL(href, window.location.href);
      } catch {
        return;
      }
      if (url.origin !== window.location.origin) return;

      e.preventDefault();
      overlay.classList.add('is-active');
      window.setTimeout(() => {
        window.location.href = url.href;
      }, 220);
    });
  }
})();
