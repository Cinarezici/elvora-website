# Elvora Global — Bağımsız Site Değerlendirmesi ve Geliştirme Planı

*Hazırlanma: 25 Temmuz 2026 · Değerlendirilen sürüm: 6 sayfa, yay arka planlı, açılış ekranlı*

---

## 0. Yöntem

Siteyi iki şekilde inceledim: (1) beş farklı alıcı profilinin şapkasını takıp gezerek, (2) ölçülebilir sinyalleri tarayıcıdan otomatik çıkararak. Aşağıdaki tablo tahmin değil, canlı siteden ölçüldü.

| Sayfa | Görsel | Video | OG etiketi | Kanonik | JSON-LD | Kelime | mailto | tel |
|---|---|---|---|---|---|---|---|---|
| index | **0** | 0 | **0** | ✗ | 0 | 429 | **0** | **0** |
| studio | **0** | 0 | **0** | ✗ | 0 | 275 | 0 | 0 |
| vision | **0** | 0 | **0** | ✗ | 0 | 267 | 0 | 0 |
| identity | **0** | 0 | **0** | ✗ | 0 | 276 | 0 | 0 |
| hakkimizda | **0** | 0 | **0** | ✗ | 0 | 369 | 0 | 0 |
| iletisim | **0** | 0 | **0** | ✗ | 0 | 129 | 0 | 0 |

Ek bulgular: `robots.txt` 404 · `sitemap.xml` 404 · sosyal medya linki 0 · KVKK/gizlilik/çerez metni **yok** · formda onay kutusu **yok** · sitede tek bir sayısal iddia veya referans **yok**.

---

## 1. Hedef müşteri profilleri

Brief "sektör sınırı yok" diyor, ama modül içerikleri aslında beş net profili işaret ediyor. Sırayla her birinin şapkasını taktım.

### P1 — Pazaryeri satıcısı / e-ticaret operasyoncusu
**Kim:** Trendyol/Hepsiburada/Amazon'da 200–3000 SKU. Sahibi ya da e-ticaret müdürü karar veriyor.
**Derdi:** Ürün görselleri yetmiyor, çekim pahalı, platform standardı tutmuyor.
**Siteye girince ilk aradığı:** *Görsel başına kaç para? Kaç günde? Örnek göster.*
**Ne buluyor:** Üçünün hiçbiri yok. Vision sayfasında "çözünürlük artırma, arka plan temizleme" yazıyor ama **tek bir öncesi/sonrası görseli yok**.
**Sonuç:** 20 saniyede çıkar. Bu profil fiyat ve örnek görmeden form doldurmaz.

### P2 — Marka/pazarlama müdürü (orta ölçek, 50–500 kişi)
**Kim:** Bütçesi olan, ama üst yönetime gerekçe yazmak zorunda olan yönetici.
**Derdi:** Kampanya içeriği üretimi yavaş, ajans pahalı.
**Siteye girince ilk aradığı:** *Kimlerle çalıştınız? Vaka çalışması var mı? Ekip kim? Fatura kesiyor musunuz?*
**Ne buluyor:** Hiç referans yok, vaka yok, ekipten tek bir isim yok, şirket bilgisi yok.
**Sonuç:** Siteyi "henüz kurulmuş, riskli" diye etiketler. Bu profil için **kanıt yokluğu fiyattan daha büyük engel.**

### P3 — Yeni D2C markası / girişimci
**Kim:** Ürünü hazır, markası yok. Bütçe kısıtlı, acelesi var.
**Derdi:** Logodan içeriğe kadar her şey lazım, parça parça almak istemiyor.
**Siteye girince ilk aradığı:** *Paket var mı? Ne kadara başlar? Ne kadar sürer?*
**Ne buluyor:** "Sabit fiyat, scope kayması yok" cümlesi var — ama **rakam yok**. Süre yok.
**Sonuç:** Ekosistem anlatısı bu profile iyi hitap ediyor (tam ihtiyacı bu), ama fiyat aralığı olmadığı için "bize çok pahalı gelir" varsayıp çıkar. **Ekosistem mesajının en doğru alıcısı, fiyatsızlık yüzünden kaybedilen profil.**

### P4 — Ajans / white-label partner
**Kim:** Kapasitesi yetmeyen ajans, taşeron arıyor.
**Derdi:** Ölçek, gizlilik, birim fiyat.
**Siteye girince ilk aradığı:** *Kapasite ne? NDA imzalıyor musunuz? Birim fiyat listesi?*
**Ne buluyor:** Hiçbiri. Site "markalara" konuşuyor, ajanslara dair tek kelime yok.
**Sonuç:** Kendini muhatap görmez. Bu segment şu an tamamen kapsam dışı — bilinçli mi, kaza mı belirsiz.

### P5 — Kurumsal pazarlama / satın alma (büyük şirket)
**Kim:** Prosedürle çalışan kurumsal alıcı.
**Derdi:** Tedarikçi onayı, KVKK uyumu, sözleşme.
**Siteye girince ilk aradığı:** *Şirket unvanı, vergi no, adres, KVKK metni, veri işleme şartları.*
**Ne buluyor:** Hiçbiri. Sitede şirketin **hukuki varlığına dair tek bir kanıt yok**.
**Sonuç:** Tedarikçi formunu dolduramaz. Bu profil için site şu an kullanılamaz.

---

## 2. Kritik bulgu — sırayla en ağırı

### 🔴 K1. Görsel işi satan bir sitede tek bir görsel yok

Bu, diğer her şeyden önemli. Elvora üç şey satıyor: reklam içeriği üretimi, görsel iyileştirme, marka kimliği. Üçü de **tamamen görsel işler**. Site ise 6 sayfa, 0 görsel.

Alıcının kafasında kurulan cümle şu: *"Benim görsellerimi güzelleştireceğini söyleyen firma kendi sitesine bir görsel koymamış."* Bu bir eksiklik değil, **kendini çürüten bir kanıt**. Tipografi ne kadar iyi olursa olsun bunu kurtarmıyor.

Özellikle Vision sayfası: hizmetin tamamı "öncesi kötü → sonrası iyi" üzerine kurulu ve sayfada karşılaştırma yok. Bu sayfanın görselsiz hâli satılabilir değil.

### 🔴 K2. Form lead'leri sessizce çöpe atıyor — ve kullanıcıya yalan söylüyor

Form hiçbir yere göndermiyor (bunu siz seçtiniz, doğru bir başlangıç kararıydı). Ama başarı ekranındaki metni ben yazdım ve şöyle diyor:

> "Mesajınız iletildi. Formu okuyup size dönüyoruz — genelde bir iş günü içinde."

Bu cümle şu an **gerçek değil**. Site bugün yayına girerse her lead kaybolur, üstelik ziyaretçi mesajının ulaştığını sanarak bekler. Yayın öncesi ya backend bağlanmalı ya bu metin değişmeli. İkisinden biri olmadan yayına çıkmamalı.

### 🔴 K3. Hiçbir iletişim yolu yok

0 e-posta, 0 telefon, 0 adres, 0 sosyal hesap. Tek kanal, çalışmayan bir form. Türkiye B2B'de alıcının önemli bir kısmı **arayarak** başlar. Form dışında çıkış yolu olmaması, formu doldurmayan herkesi kaybetmek demek.

### 🔴 K4. KVKK yok — hukuki açık

Form ad, e-posta, şirket ve mesaj topluyor. Bu kişisel veri işlemedir. Sitede aydınlatma metni, gizlilik politikası, açık rıza kutusu ve çerez bildirimi **yok**. Bu hem uyum riski hem de kurumsal alıcı için anında eleme kriteri.

### 🟠 K5. Sıfır kanıt

Referans yok, vaka yok, müşteri logosu yok, ekip yok, sayı yok, sertifika yok. Hakkımızda sayfası tamamen soyut — "biz böyle düşünüyoruz" diyor, "biz şunu yaptık" demiyor.

Burada bilinçli bir karar var ve doğruydu: **uydurma rakam koymadım.** "200+ proje" yazmak kolaydı, yalan olurdu. Ama boş bırakmak da çözüm değil. Doğru cevap uydurmak değil, **gerçek kanıt toplamak**. Aşağıdaki planın en büyük iş kalemi bu.

### 🟠 K6. Fiyat sinyali sıfır

Rakam koymak zorunda değilsiniz, ama şu an **hiçbir çıpa** yok. Alıcı ya "çok pahalıdır" der ve gider, ya niteliksiz lead olarak gelir. İkisi de kötü. "X TL'den başlayan", "paket aralığı", hatta "bütçe aralığı seçtirme" bile mevcut durumdan iyi.

### 🟠 K7. "Global" adı ile Türkçe-only çelişkisi

Marka adı Elvora **Global**, wordmark'ta "GLOBAL" yazıyor, konumlandırma "sektör sınırı yok" diyor — site tek dil, Türkçe. Yurt dışından gelen biri hiçbir şey anlamıyor. Ya ad ya dil hizalanmalı.

### 🟡 K8. SEO altyapısı yok

`robots.txt` ve `sitemap.xml` 404. Kanonik etiket yok. JSON-LD yok. Sayfa başına 267–429 kelime — değerlendirme gerektiren bir satın alma için çok ince. Organik trafik beklenmemeli.

### 🟡 K9. Paylaşım önizlemesi yok

0 OG etiketi, 0 Twitter card. Link WhatsApp/LinkedIn'de paylaşıldığında çıplak URL görünüyor. **Görsel işi yapan bir markanın linkinin görselsiz paylaşılması** ayrıca ironik.

### 🟡 K10. Modül sayfaları birbirinin kopyası gibi okunuyor

Yapı tutarlılığı bilinçliydi ve doğru. Ama üç sayfa da aynı iskelet + aynı üç başlık ("Problem / Ne teslim ediyoruz? / Bu modül size uyar mı?") + aynı 4'lü kart gridi. Arka arkaya gezen biri "aynı sayfayı tekrar okuyorum" hissine kapılıyor. Tutarlılık ile monotonluk arasındaki çizgi burada monotonluk tarafına geçmiş.

---

## 3. Artılar — dürüstçe iyi olanlar

Bunlar korunmalı, plan bunları bozmamalı.

1. **Tipografi ve görsel dil güçlü.** Instrument Serif + Archivo + IBM Plex Mono kombinasyonu premium ve editorial duruyor, iki referansın grotesque hero'sundan ayrışıyor. Türkçe glifler kusursuz.
2. **Açılış ekranı ve yay motifi gerçek bir marka varlığı.** `E.` işareti + dönen vermilion yaylar akılda kalıyor ve iki yerde tutarlı tekrar ediyor. Bu, sitenin en özgün parçası.
3. **Bileşen tutarlılığı ölçülerek sağlanmış.** 6 sayfada buton, kart, form birebir aynı; CTA metni tek. Brief'in en net şartı karşılanmış.
4. **Copy dürüst ve problem-önce.** Şişirme yok, "lider ajans" yok, uydurma rakam yok. Bu, doldurulacak boşlukları bırakıyor ama zemin sağlam ve güvenilir.
5. **Ekosistem anlatısı net.** "Tek hizmet değil, birlikte çalışan modüller" mesajı 6 sayfada tutarlı; 4. kart ("Yeni modüller") büyüme hikâyesini görünür kılıyor.
6. **Teknik hijyen iyi.** Erişilebilirlik (klavye odağı, `prefers-reduced-motion`, skip link), responsive taşma yok, JS'siz çalışıyor, konsol temiz.
7. **Form UX'i kaliteli.** Türkçe hata mesajları, alan bazlı doğrulama, modül seçimi, "emin değilim" seçeneği — akış iyi tasarlanmış. Sadece arkası bağlı değil.

---

## 4. Hissiyat notları

Rakamla ölçülmeyen ama satın almayı belirleyen kısım.

**Site şu an "güzel bir manifesto" gibi hissettiriyor, "çalışan bir iş" gibi değil.** Ne söylediğine inanıyorsunuz, ama yaptığına dair hiçbir iz yok. Bir mimarın çizim yapmadan mimarlık felsefesi anlatması gibi.

**Soğuk ve mesafeli.** Koyu zemin + büyük serif + tek renk aksan = premium, ama aynı zamanda **insansız**. Sitede tek bir insan, yüz, isim, imza yok. "Aynı ekip devam ediyor" diyorsunuz ama o ekip kim? Bu, güven kurmayı zorlaştırıyor. iklipse'in sitesinde onlarca yüz ve isim var; oradan alınan estetik, oradaki insan katmanı olmadan alınmış.

**Kendinden emin ama kanıtsız — bu kombinasyon riskli.** "Markanızın AI ekosistemini kuruyoruz" çok iddialı bir cümle. İddia yükseldikçe kanıt ihtiyacı artar. Şu an iddia yüksek, kanıt sıfır; bu makas güvensizlik üretiyor.

**Ekosistem metaforu bir yerde alıcıyı yoruyor.** Üç modül + gelecek modüller + "hangisini seçeceğinizi bilmeniz gerekmiyor" — alıcı bir noktada "peki ben ne satın alıyorum?" diye soruyor. Soyutluk seviyesi, somut teslim listelerine rağmen biraz yüksek.

**Açılış ekranı iki ucu keskin.** İlk gelişte etkileyici. Ama her ana sayfa ziyaretinde 2.3 saniye bekletiyor. Modül sayfasından ana sayfaya dönen biri tekrar görüyor. Tekrar eden ziyaretçi için bu bir bedel.

---

## 5. Lead akışı — mevcut vs kurulması gereken

### Mevcut akış (kırık)

```
Ziyaretçi gelir
  ↓ 2.3s açılış ekranı bekler
  ↓ hero'yu okur — iddiayı anlar
  ↓ kanıt arar → YOK
  ↓ fiyat arar → YOK
  ↓ örnek iş arar → YOK
  ↓ telefon/e-posta arar → YOK
  ↓ (çoğu burada çıkar)
  ↓ form doldurur (5 alan, biri 20+ karakter zorunlu)
  ↓ "Mesajınız iletildi" görür
  ✗ HİÇBİR YERE GİTMEZ — lead kaybolur, ziyaretçi bekler
```

Tek çıkış kapısı var ve o kapı duvara açılıyor.

### Kurulması gereken akış (kademeli taahhüt)

Fikir: alıcıyı tek bir büyük adıma zorlamak yerine, hazır olduğu seviyede yakalamak.

```
GİRİŞ
  ├─ Organik/direkt → ana sayfa
  └─ Paylaşılan link → OG önizleme (görsel + başlık) → ana sayfa

İKNA (her adımda kanıt)
  ├─ hero: iddia + tek CTA
  ├─ ŞERİT: müşteri logoları (kanıt #1)
  ├─ problem bloğu
  ├─ çözüm kartları → modül sayfası
  ├─ VAKA ÇALIŞMALARI: 3 adet, öncesi/sonrası + rakam (kanıt #2)
  ├─ süreç + SÜRE ("ilk sürüm X günde")
  ├─ FİYAT ÇIPASI ("paketler X TL'den başlar")
  ├─ EKİP: yüz + isim + imza (kanıt #3)
  └─ SSS: en çok sorulan 6 soru (itiraz karşılama)

DÖNÜŞÜM — üç farklı sıcaklık için üç kapı
  ├─ SICAK  → WhatsApp / "hemen ara" (anında, sıfır sürtünme)
  ├─ ILIK   → kısa form: 3 alan (ad, e-posta, ne istiyorsun)
  │            + opsiyonel: bütçe aralığı, modül, takvim
  └─ SOĞUK  → "örnek işleri gör" / fiyat listesi PDF indir
               → e-posta karşılığı → nurture

TESLİM
  ├─ form → gerçek endpoint (e-posta + CRM)
  ├─ ziyaretçiye otomatik onay e-postası
  ├─ ekibe bildirim (e-posta/Slack)
  └─ teşekkür sayfası (/tesekkurler) → dönüşüm ölçülebilir olur

TAKİP
  ├─ 24 saat içinde insan yanıtı (sitede verilen söz)
  └─ yanıtlanmayan lead için hatırlatma
```

**Kritik tasarım kararı:** Şu an form 5 alan ve mesaj alanı minimum 20 karakter zorunlu. Bu, ciddi alıcıyı filtreliyor ama **kararsız alıcıyı da kaçırıyor**. Öneri: zorunlu alanı 3'e düşür (ad, e-posta, tek satır ihtiyaç), gerisini opsiyonel yap. Nitelik kaybını bütçe aralığı seçimi ile telafi et — bu hem niteler hem fiyat çıpası kurar.

---

## 6. Aşamalı plan

Sıra bilinçli: **önce yayına çıkabilir hâle getir, sonra inandırıcı yap, sonra sat, sonra büyüt.**

---

### FAZ 0 — Yayın engelleri (bunlar bitmeden site yayına çıkmamalı)

| # | İş | Neden | Dosya |
|---|---|---|---|
| 0.1 | Form endpoint'i bağla | Lead kaybı duruyor | `assets/elvora.js`, `iletisim.html` |
| 0.2 | Başarı metnini gerçeğe uydur | Yanlış beyan ortadan kalkar | `iletisim.html` |
| 0.3 | Teşekkür sayfası (`/tesekkurler.html`) | Dönüşüm ölçülebilir olur | yeni dosya |
| 0.4 | KVKK aydınlatma + gizlilik politikası | Hukuki zorunluluk | `gizlilik.html`, `kvkk.html` |
| 0.5 | Forma açık rıza kutusu + metin linki | Hukuki zorunluluk | `iletisim.html` |
| 0.6 | Çerez bildirimi (analytics eklenirse) | Hukuki zorunluluk | `assets/elvora.js` |
| 0.7 | Gerçek iletişim bilgisi: e-posta + telefon + şehir | Form dışı çıkış yolu | footer, `iletisim.html` |
| 0.8 | Şirket unvanı + vergi bilgisi footer'a | Kurumsal alıcı ön koşulu | footer (6 sayfa) |
| 0.9 | OG + Twitter etiketleri + paylaşım görseli | Link paylaşılabilir olur | 6 sayfa `<head>` |
| 0.10 | `robots.txt` + `sitemap.xml` + kanonik | Dizine girer | yeni + 6 sayfa |

**Not 0.1 için:** Backend istemiyorsanız Formspree/Basin/Web3Forms yeterli. `elvora.js` içinde bağlanacak yer zaten yorumla işaretli. Alternatif: `mailto:` fallback'i en azından footer'a koy.

**Faz 0 çıktısı:** Yasal olarak yayınlanabilir, lead kaybetmeyen, paylaşılabilir bir site.

---

### FAZ 1 — İnandırıcılık (en büyük iş kalemi)

Bu faz **içerik toplama** işi, kod işi değil. Kod tarafı hazır olacak, sizin malzeme üretmeniz gerekiyor.

| # | İş | Ayrıntı |
|---|---|---|
| 1.1 | **Vision için öncesi/sonrası galerisi** | En az 6 çift. Sürgülü karşılaştırma bileşeni. Bu, tek başına Vision sayfasını satılabilir yapar. |
| 1.2 | **Studio için iş örnekleri** | En az 8 görsel + 2 video. Kendi işiniz yoksa: kendi markanız için üretin, "iç proje" olarak sunun. |
| 1.3 | **Identity için kimlik sunumu** | 2–3 marka kimliği örneği: logo sistemi, palet, uygulama. |
| 1.4 | **3 vaka çalışması** | Yapı: müşteri/sektör → problem → ne yaptık → **rakam** → görsel. Rakam gerçek olmalı. |
| 1.5 | **Müşteri logo şeridi** | İzin alınmış gerçek logolar. Yoksa bu adımı atla — sahte logo koymak felakettir. |
| 1.6 | **Ekip bölümü** | En az kurucu: fotoğraf, isim, 2 cümle, LinkedIn. Sitenin "insansız" hissini bu kırar. |
| 1.7 | **2–3 gerçek müşteri yorumu** | İsim + şirket + fotoğraf. Anonim yorum kanıt sayılmaz. |
| 1.8 | Görsel altyapısı | `assets/img/`, WebP/AVIF, `loading="lazy"`, `width`/`height`, CLAUDE.md'deki gradient overlay + `mix-blend-multiply` kuralı |

**Malzeme yoksa ne yapılır:** En az bir modül için tam set üretin (öneri: Vision, çünkü öncesi/sonrası en hızlı üretilebilir ve en ikna edici). Diğer ikisini "yakında" ile bekletmek, boş bırakmaktan iyidir — ama üç modülü de boş bırakmak seçenek değil.

**Faz 1 çıktısı:** İddiaların arkasında kanıt olan bir site.

---

### FAZ 2 — Ticari netlik

| # | İş | Ayrıntı |
|---|---|---|
| 2.1 | Fiyat çıpası | Üç seviye: başlangıç / standart / özel. Net rakam veremiyorsanız "X–Y TL aralığı" veya "X TL'den başlar". |
| 2.2 | Süre taahhüdü | Her modül için "ilk sürüm N gün, teslim N hafta". Süre belirsizliği fiyat belirsizliği kadar kaçırtıyor. |
| 2.3 | SSS bölümü | 6–8 soru: fiyat nasıl belirlenir, kaç revizyon, telif kimde, AI kullanımını müşteriye söylüyor muyuz, ödeme koşulları, NDA. |
| 2.4 | Karşılaştırma tablosu | leftflow'daki gibi: Elvora vs freelancer vs ajans vs iç ekip. İtiraz karşılamada çok etkili. |
| 2.5 | Ajans/white-label bölümü | P4 profilini kapsama almak istiyorsanız. İstemiyorsanız bilinçli olarak dışarıda bırakın. |

**Faz 2 çıktısı:** Alıcının "bana uygun mu, ne kadar, ne zaman" sorularının cevaplandığı site.

---

### FAZ 3 — Dönüşüm optimizasyonu

| # | İş | Ayrıntı |
|---|---|---|
| 3.1 | Formu 3 zorunlu alana indir | ad, e-posta, tek satır ihtiyaç. Gerisi opsiyonel. |
| 3.2 | Bütçe aralığı seçimi ekle | Hem niteler hem fiyat çıpası kurar. |
| 3.3 | WhatsApp / hemen ara butonu | Sıcak lead için sıfır sürtünmeli kanal. |
| 3.4 | Modül bazlı CTA ön-doldurma | Studio sayfasından gelen formda modül otomatik "Studio" seçili gelsin. |
| 3.5 | Açılış ekranını oturumda bir kez göster | `sessionStorage`. Tekrar eden ziyaretçiyi 2.3s bekletmeyi bitirir. |
| 3.6 | Modül sayfalarına farklılık ver | K10 için: her modüle kendine özgü bir bölüm ekle (Vision→galeri, Studio→video, Identity→kimlik sunumu). Ortak bileşenler korunur, içerik ritmi değişir. |
| 3.7 | Analytics + dönüşüm hedefi | Plausible/GA4. Ölçmediğiniz şeyi iyileştiremezsiniz. |

**Faz 3 çıktısı:** Aynı trafikten daha fazla lead.

---

### FAZ 4 — Büyüme

| # | İş | Ayrıntı |
|---|---|---|
| 4.1 | İngilizce sürüm | "Global" adını hak etmek için. `/en/` altında ayrı dosyalar veya dil sözlüğü. Karar gerektirir. |
| 4.2 | Blog / içerik | SEO için. Sayfa başına 267 kelime ile organik gelmez. |
| 4.3 | JSON-LD şema | `Organization`, `Service`, `FAQPage`. Zengin sonuç için. |
| 4.4 | Performans + Lighthouse | Görseller eklendikten sonra ölçülmeli. Şu an görselsiz olduğu için hızlı — bu avantaj Faz 1'de riske girecek. |
| 4.5 | Yeni modül şablonu | 4. kart bir gün gerçek olacak. Modül sayfası şablonu hazır olsun. |

---

## 7. Öncelik özeti

Sadece üç şey yapacak vaktiniz varsa:

1. **Formu çalışır hâle getir** (Faz 0.1–0.3) — çünkü şu an her lead kayıp ve ziyaretçiye yanlış bilgi veriliyor.
2. **Vision için öncesi/sonrası galerisi** (Faz 1.1) — çünkü görsel iş satan bir sitede görsel olmaması en büyük çelişki, ve bu en hızlı kapatılabilen kanıt boşluğu.
3. **İletişim bilgisi + KVKK** (Faz 0.4–0.8) — çünkü biri hukuki zorunluluk, diğeri form dışı tek çıkış yolu.

---

## 8. Ne ölçülecek

| Metrik | Şu an | Hedef |
|---|---|---|
| Form gönderimi / ziyaret | ölçülemiyor (endpoint yok) | %2–4 |
| Ana sayfa → modül sayfası geçişi | ölçülemiyor | %25+ |
| Modül sayfası → form | ölçülemiyor | %8+ |
| Lead → görüşme | ölçülemiyor | %40+ |
| Sayfada kalma (ana sayfa) | ölçülemiyor | 45s+ |

İlk iş analytics kurmak; yukarıdaki hedefler kurulduktan sonra anlam kazanır.

---

## 9. Son not

Sitenin **zanaatı iyi, kanıtı yok.** Tasarım sistemi, tipografi, tutarlılık, erişilebilirlik — bunlar profesyonel seviyede ve üzerine inşa edilebilir sağlam bir zemin. Eksik olan şey kod değil, **içerik ve ticari netlik**.

Bu iyi haber: zor kısım (sistem kurmak) bitmiş durumda. Kalan iş çoğunlukla malzeme toplamak ve boşlukları gerçek bilgiyle doldurmak. Uydurma rakam koymadan gelmiş olmamız burada avantaj — doldurulacak yerler dürüstçe boş, yalanla dolu değil.
