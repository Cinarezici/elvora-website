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
  });

  /* ---------- Masaüstü "Çözümler" açılır menüsü ----------
     Görünürlük CSS sınıfıyla yönetiliyor (bkz. elvora.css .nav__dropdown),
     burada yalnız durum: tıkla aç/kapat, dışarı tıkla kapat, Esc kapat +
     odağı tetikleyiciye geri ver. */
  function navDropdown() {
    const dd = document.querySelector('.nav__dropdown');
    const trigger = dd?.querySelector('.nav__dropdown-trigger');
    if (!dd || !trigger) return;

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

  /* ---------- Mobil menü ---------- */
  function mobileNav() {
    const burger = document.querySelector('.burger');
    const panel = document.querySelector('.mobile-nav');
    if (!burger || !panel) return;

    const setOpen = (open) => {
      burger.setAttribute('aria-expanded', String(open));
      panel.hidden = !open;
    };

    setOpen(false);

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

    // Link tıklanınca kapat
    panel.addEventListener('click', (e) => {
      if (e.target.closest('a')) setOpen(false);
    });

    // Masaüstüne genişletilirse paneli sıfırla
    window.matchMedia('(min-width: 960px)').addEventListener('change', (m) => {
      if (m.matches) setOpen(false);
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
})();
