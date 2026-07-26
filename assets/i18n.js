/* ============================================================
   ELVORA GLOBAL — TR/EN dil değiştirici

   Yaklaşım: markup'a data-i18n eklemek yerine, metin düğümlerini
   Türkçe karşılıklarıyla eşleştiren bir sözlük kullanılıyor. Böylece
   10 sayfanın HTML'ine dokunmadan çeviri yapılabiliyor ve yeni içerik
   eklendiğinde yalnızca sözlüğe satır eklemek yeterli oluyor.

   Kapsam dışı: gizlilik.html. Hukuki metnin makine çevirisi sorumsuzluk
   olur — o sayfa Türkçe kalıyor, İngilizce sürümü avukat onayıyla
   ayrıca hazırlanmalı.
   ============================================================ */
(() => {
  'use strict';

  const DICT = {
    /* ---- Navigasyon / header / footer ---- */
    'Hakkımızda': 'About',
    'İletişim': 'Contact',
    'Çözümler': 'Solutions',
    'Kurum': 'Company',
    'İçeriğe geç': 'Skip to content',
    'Ana menü': 'Main menu',
    'Mobil menü': 'Mobile menu',
    'Menüyü aç/kapat': 'Toggle menu',
    'Dil seçimi': 'Language',
    'Elvora Global — ana sayfa': 'Elvora Global — home',
    'Projenizi anlatın': 'Tell us about your project',
    'Çözümleri gör': 'See solutions',
    'Tüm modüller': 'All modules',
    'Detaylara bak': 'See details',
    'Elvora Studio': 'Elvora Studio',
    'Elvora Vision': 'Elvora Vision',
    'Elvora Identity': 'Elvora Identity',
    'Elvora Flow': 'Elvora Flow',
    'CV Optimizer AI': 'CV Optimizer AI',
    'KVKK & Gizlilik': 'Privacy & KVKK',
    'Organik içerik üretimini kişiye değil sisteme bağlıyoruz. AI akışları, reklam içeriği, görsel iyileştirme ve marka kimliği.':
      'We wire organic content production to a system, not to a person. AI pipelines, ad content, image enhancement and brand identity.',
    'İstanbul, Türkiye': 'Istanbul, Türkiye',
    '© 2026 Elvora Global': '© 2026 Elvora Global',
    'Modüler AI çözümleri': 'Modular AI solutions',
    'Ana sayfa': 'Home',
    'Ana sayfaya dön': 'Back to home',
    'Yukarı çık': 'Back to top',
    'Başlayalım': 'Let’s start',
    'İçeriğiniz kime bağlı?': 'Who is your content tied to?',
    'Sisteme bağlayalım.': 'Let’s tie it to a system.',
    'Kısa formu doldurun — şu an içeriği nasıl ürettiğinizi anlatın, hangi kısmın otomatikleşebileceğini birlikte çıkaralım.':
      'Fill in the short form — tell us how you produce content today and we’ll work out which part can be automated.',
    'Çözümler': 'Solutions',
    'Kendi ürünümüz': 'Our own product',

    /* ---- Ana sayfa ---- */
    'Elvora Global — İçerik otomasyonu ve AI sistemleri': 'Elvora Global — Content automation and AI systems',
    'Organik içerik üretimini kişiye değil sisteme bağlıyoruz. AI akışları, reklam içeriği, görsel iyileştirme ve marka kimliği — tek çatı altında.':
      'We wire organic content production to a system, not a person. AI pipelines, ad content, image enhancement and brand identity — under one roof.',
    'İçerik otomasyonu & AI sistemleri': 'Content automation & AI systems',
    'Ürün yapmak kolaylaştı.': 'Building a product got easy.',
    'Görünmek': 'Getting seen',
    'zorlaştı.': 'got hard.',
    'Artık herkes uygulama çıkarabiliyor. Tıkanan yer üretim değil, dikkat: organik içerik. Elvora bunu kişiye bağlı olmaktan çıkarıp çalışan bir sisteme bağlıyor.':
      'Anyone can ship an app now. The bottleneck isn’t building, it’s attention — organic content. Elvora takes that off one person’s shoulders and wires it into a working system.',
    'Artık herkes uygulama çıkarabiliyor. Tıkanan yer üretim değil, dikkat: organik içerik. Elvora bunu kişiye bağlı olmaktan çıkarıp':
      'Anyone can ship an app now. The bottleneck isn’t building, it’s attention — organic content. Elvora takes that off one person’s shoulders and wires it into',
    'çalışan bir sisteme': 'a working system',
    'bağlıyor.': '.',
    'Nasıl çalışır?': 'How it works',
    'Reklam içeriği': 'Ad content',
    'Görsel iyileştirme': 'Image enhancement',
    'Marka kimliği': 'Brand identity',
    'AI otomasyon': 'AI automation',
    'İçerik otomasyonu': 'Content automation',
    'Sektör sınırı yok': 'No industry limits',
    'Tüm markalar': 'All brands',

    '01 / Durum': '01 / Situation',
    'Darboğaz artık kod değil,': 'The bottleneck isn’t code any more —',
    'dikkat.': 'it’s attention.',
    'Vibe coding ile bir ürünü günler içinde ayağa kaldırmak mümkün. Sonuç: her hafta yüzlerce yeni uygulama, hepsi iyi, hepsi görünmez. Ayrışan taraf ürünü yapan değil, anlatabilen oluyor.':
      'With vibe coding you can stand a product up in days. The result: hundreds of new apps every week, all decent, all invisible. What separates you isn’t building the product — it’s being able to tell people about it.',
    'anlatabilen': 'being able to tell people',
    'Ama organik içerik hâlâ kişiye bağlı: birinin oturup çekmesi, yazması, yayınlaması gerekiyor. O kişi yoksa akış duruyor. Elvora bu işi bir kişiye değil sisteme bağlıyor — üretim, onay ve yayın tek akışta yürüyor.':
      'But organic content still depends on a person: someone has to shoot it, write it, publish it. If that person is away, the flow stops. Elvora wires this to a system rather than a person — production, approval and publishing run in one pipeline.',
    'sisteme': 'a system',

    '02 / Ana çözüm': '02 / Core solution',
    '02 / Çözümler': '02 / Solutions',
    'Markanızın': 'We’re building your',
    'AI ekosistemini': 'AI ecosystem',
    'kuruyoruz.': '.',
    'İçerik üretimini': 'We wire content production',
    'bağlıyoruz.': '.',
    'Elvora Flow — ana modül': 'Elvora Flow — core module',
    'Haftada bir kişinin yaptığı işi,': 'The work one person does weekly,',
    'her gün': 'every day',
    'yapan bir akış.': 'done by a pipeline.',
    'Fikirden yayına: konu havuzu çıkarılır, metin ve görsel üretilir, onayınıza düşer, kanallara gider. Siz sadece onaylarsınız — üretimin kendisi durmadan çalışır.':
      'From idea to publish: a topic pool is built, copy and visuals are produced, it lands for your approval, then goes out to your channels. You only approve — the production itself never stops.',
    'Kurulum 3–8 hafta': 'Live in 3–8 weeks',
    'Sabit kapsam ve fiyat': 'Fixed scope and price',
    '90 gün destek dahil': '90 days of support included',
    'Mevcut araçlarınıza bağlanır': 'Connects to your existing tools',
    'Flow’u incele': 'Explore Flow',
    'Akışınızı birlikte çıkaralım': 'Let’s map your flow together',
    'Destekleyen modüller': 'Supporting modules',
    'Akışın ürettiği içerik': 'What the pipeline produces',
    'boşlukta': 'doesn’t sit in',
    'durmaz.': 'a vacuum.',
    'Akışın besleneceği görsel ve video havuzu. Kampanya için yayına hazır içerik.':
      'The stills and video pool that feeds the pipeline. Publish-ready content for campaigns.',
    'Elinizdeki arşivi akışta kullanılabilir hale getirme. Çözünürlük, ışık, arka plan.':
      'Making your existing archive usable inside the pipeline. Resolution, light, background.',
    'Akışın uyacağı kural seti. Otomasyon ancak yazılı bir kimlik varsa tutarlı üretir.':
      'The rule set the pipeline follows. Automation only produces consistently when the identity is written down.',
    'Kampanya için görsel ve video üretimi. Konseptten teslime, yayına hazır reklam içeriği.':
      'Visual and video production for campaigns. From concept to delivery, ad content ready to publish.',
    'Elinizdeki görselleri kullanılabilir hale getirme. Çözünürlük, ışık, arka plan ve tutarlılık.':
      'Making the images you already have usable. Resolution, light, background and consistency.',
    'Markanın görsel dili ve kuralları. Logo, palet, tipografi ve uygulama rehberi.':
      'The brand’s visual language and rules. Logo, palette, typography and application guide.',
    'Tekrar eden işleri sisteme bağlama. Destek agent’ı, lead triyajı, rapor otomasyonu.':
      'Wiring repetitive work into a system. Support agent, lead triage, report automation.',

    '03 / Kanıt': '03 / Proof',
    'Anlatmak yerine': 'Instead of telling you,',
    'gösterelim.': 'let us show you.',
    'Gerçek ürün — yayında': 'Real product — live',
    'Kendi geliştirip yayına aldığımız AI ürünü. Müşteri işi değil — kurduğumuz ve işlettiğimiz sistem.':
      'An AI product we built and shipped ourselves. Not client work — a system we built and run.',
    'Kullanıcı': 'Users',
    'Optimize CV': 'CVs optimised',
    'ATS motoru': 'ATS engines',
    'Analiz': 'Analysis',
    'Ürünü ve ekranları gör': 'See the product and screens',
    'Konsept': 'Concept',
    'İç çalışma': 'Internal work',
    'MERIDIAN — sanal iç düzenleme': 'MERIDIAN — virtual staging',
    'NORDHAUS — katalog varyantı': 'NORDHAUS — catalogue variants',
    'ATELIER — lookbook varyasyonu': 'ATELIER — lookbook variation',
    'Emlak · Vision': 'Real estate · Vision',
    'Mobilya · Studio': 'Furniture · Studio',
    'Moda · Identity': 'Fashion · Identity',

    '04 / Süreç': '04 / Process',
    'Dört adımda net teslim.': 'Clear delivery in four steps.',
    'İçeriğin şu an nasıl üretildiğini ve nerede tıkandığını birlikte yazıyoruz. Tek görüşme.':
      'We write down together how content is produced today and where it stalls. One session.',
    'Devir': 'Handover',
    'Nasıl çalıştığı yazılı olarak teslim edilir. İlk 90 gün destek dahil, sonrası size kalır.':
      'How it works is handed over in writing. The first 90 days of support are included; after that it’s yours.',
    'Kapsam': 'Scope',
    'Teslim listesi, takvim ve fiyat tek belgede. Sonradan genişleyen kapsam yok.':
      'Deliverables, timeline and price in a single document. No scope creep later.',
    'Üretim': 'Production',
    'Teslim': 'Delivery',

    '05 / Yaklaşım': '05 / Approach',
    'Neden Elvora?': 'Why Elvora?',
    'Modüler': 'Modular',
    'Tek modülle başlayın, ihtiyaç büyüdükçe ekleyin. Baştan büyük paket almanız gerekmiyor.':
      'Start with one module and add more as the need grows. You don’t have to buy a big package up front.',
    'Sektörden bağımsız': 'Industry-agnostic',
    'Moda, mücevher, teknoloji, hizmet — modüller sektöre değil probleme göre kurulu.':
      'Fashion, jewellery, technology, services — the modules are built around problems, not industries.',
    'Tek ekip': 'One team',
    'Modüller arasında devir teslim yok. Aynı ekip, aynı marka bilgisiyle devam ediyor.':
      'No handovers between modules. The same team continues with the same brand knowledge.',
    'Sabit kapsam': 'Fixed scope',
    'Teslim listesi ve fiyat baştan belli. Süreç içinde büyüyen fatura yok.':
      'Deliverables and price are set from the start. No invoice that grows mid-project.',
    'AI + yönetim': 'AI + direction',
    'AI hızı veriyor, kreatif yönetim kararı veriyor. İkisi olmadan sonuç tutarsız oluyor.':
      'AI provides the speed, creative direction makes the calls. Without both, the result is inconsistent.',

    /* ---- Ortak modül sayfası başlıkları ---- */
    '01 / Problem': '01 / Problem',
    '02 / Gösterim': '02 / Showcase',
    '03 / Teslim': '03 / Deliverables',
    '04 / Kimler için': '04 / Who it’s for',
    'Ne teslim ediyoruz?': 'What do we deliver?',
    'Bu modül size uyar mı?': 'Is this module right for you?',
    'Konsept çalışma': 'Concept work',

    /* ---- Studio ---- */
    'Elvora Studio — Reklam içeriği | Elvora Global': 'Elvora Studio — Ad content | Elvora Global',
    'Kampanya için görsel ve video üretimi. Konseptten teslime, yayına hazır reklam içeriği — Elvora ekosisteminin üretim modülü.':
      'Visual and video production for campaigns. From concept to delivery — the production module of the Elvora ecosystem.',
    'Modül 01 — Elvora Studio': 'Module 01 — Elvora Studio',
    'Kampanya içeriğini': 'We produce your',
    'üretiyoruz.': 'campaign content.',
    'Görsel ve video — konseptten yayına hazır dosyaya kadar. Set kurmadan, aylara yayılmadan, kampanya takviminize yetişerek.':
      'Stills and video — from concept to publish-ready files. No set builds, no months of waiting, in time for your campaign calendar.',
    'İçerik üretimi kampanyadan': 'Content production lags',
    'yavaş': 'behind',
    'kalıyor.': 'the campaign.',
    'Bir kampanya fikri iki günde çıkıyor, görselleri altı haftada. Çekim takvimi, set, model, post-prodüksiyon — her adım bir sonrakini bekliyor. Kampanya yayına girdiğinde fikir çoktan soğumuş oluyor.':
      'A campaign idea takes two days; its visuals take six weeks. Shoot schedule, set, model, post-production — every step waits for the next. By the time the campaign goes live, the idea has gone cold.',
    'Studio bu zinciri kısaltıyor. Konsepti birlikte netleştiriyoruz, ilk sürümü günler içinde görüyorsunuz, revizyonu süreç içinde yapıyoruz. Set kurma maliyeti ve takvim baskısı ortadan kalkıyor.':
      'Studio shortens that chain. We settle the concept together, you see the first version within days, revisions happen as we go. Set costs and calendar pressure disappear.',
    'Tek çekim, sınırsız varyant.': 'One shoot, unlimited variants.',
    'NORDHAUS — katalog ölçeğinde varyant': 'NORDHAUS — variants at catalogue scale',
    'Bir koltuğun sekiz kumaş seçeneği varsa, sekiz ayrı çekim demek. Yüz üründe bu hesap tutmuyor. Ürünü bir kez kurup varyantları üretiyoruz — aynı açı, aynı ışık, aynı mekân.':
      'If an armchair comes in eight fabrics, that means eight separate shoots. At a hundred products the maths stops working. We set the product up once and generate the variants — same angle, same light, same space.',
    'Bouclé — Bej': 'Bouclé — Beige',
    'Kadife — Yeşil': 'Velvet — Green',
    'Yün — Antrasit': 'Wool — Charcoal',
    'Ürün görselleri': 'Product visuals',
    'Görsel': 'Stills',
    'Ürünün farklı açı, ortam ve kurgularda görselleri. Katalog ve reklam için ayrı setler.':
      'The product in different angles, settings and compositions. Separate sets for catalogue and advertising.',
    'Reklam videoları': 'Ad videos',
    'Video': 'Video',
    'Kısa format reklam ve tanıtım videoları. Platform oranlarına göre ayrı kurgular.':
      'Short-form ad and promo videos. Separate cuts for each platform ratio.',
    'Sosyal medya seti': 'Social media set',
    'Seri içerik': 'Series content',
    'Aylık yayın planına yetecek, birbiriyle tutarlı içerik paketi.':
      'A consistent content pack that covers a month of publishing.',
    'Kampanya konsepti': 'Campaign concept',
    'Yön': 'Direction',
    'Görsel dil, mesaj çerçevesi ve uygulama örnekleri — üretimden önceki karar katmanı.':
      'Visual language, message framing and application examples — the decision layer before production.',
    'Sürekli içerik': 'Ongoing content',
    'Her ay yayınlayacak içerik arayan, üretim hızına yetişemeyen markalar.':
      'Brands that need something to publish every month and can’t keep up with production.',
    'Ürün lansmanı': 'Product launch',
    'Yeni ürünü kısa sürede görselleştirip kampanyaya sokması gerekenler.':
      'Teams that need a new product visualised and in-campaign quickly.',
    'Çekim maliyeti': 'Shoot cost',
    'Set ve prodüksiyon bütçesi ürün adedine göre anlamsızlaşan kataloglar.':
      'Catalogues where set and production budgets stop making sense at scale.',
    'Çok kanal': 'Multi-channel',
    'Aynı kampanyayı farklı platform oranlarında yayınlaması gerekenler.':
      'Teams that need the same campaign in different platform ratios.',

    /* ---- Vision ---- */
    'Elvora Vision — Görsel iyileştirme | Elvora Global': 'Elvora Vision — Image enhancement | Elvora Global',
    'Elinizdeki görselleri kullanılabilir hale getirme. Çözünürlük, ışık, arka plan ve set tutarlılığı — Elvora ekosisteminin iyileştirme modülü.':
      'Making the images you already have usable. Resolution, light, background and set consistency — the enhancement module of the Elvora ecosystem.',
    'Modül 02 — Elvora Vision': 'Module 02 — Elvora Vision',
    'Elinizdeki görseli': 'We make your existing images',
    'kullanılır kılıyoruz.': 'usable.',
    'Arşivinizde görsel var ama yayınlanabilir durumda değil. Çözünürlük, ışık, arka plan ve set tutarlılığı — hepsini tek geçişte topluyoruz.':
      'You have images in the archive, but they’re not publishable. Resolution, light, background and set consistency — we handle them all in one pass.',
    'Görsel var, ama': 'Images exist, but they',
    'yayınlanamıyor.': 'can’t be published.',
    'Yıllar içinde birikmiş yüzlerce görsel: bir kısmı telefonla çekilmiş, bir kısmı eski bir çekimden kalmış, bir kısmının ışığı tutmuyor. Hepsi ürünü gösteriyor ama hiçbiri yan yana konulacak durumda değil.':
      'Hundreds of images piled up over the years: some shot on a phone, some left over from an old shoot, some with light that doesn’t hold. They all show the product, but none of them can sit side by side.',
    'Vision yeniden çekim yapmadan bu arşivi toparlıyor. Aynı ışık, aynı arka plan mantığı, aynı çözünürlük standardı. Elinizdeki malzeme yeniden kullanılabilir hale geliyor.':
      'Vision pulls that archive together without a reshoot. Same light, same background logic, same resolution standard. The material you already own becomes usable again.',
    'Sürgüyü çekin, farkı görün.': 'Drag the slider, see the difference.',
    'MERIDIAN — sanal iç düzenleme': 'MERIDIAN — virtual staging',
    'Boş daire ilanları ilgi çekmiyor: alıcı mekânı hayal edemiyor. Aynı fotoğrafı yeniden çekmeden döşenmiş hâline çeviriyoruz — duvar, zemin, pencere ve açı birebir aynı kalıyor.':
      'Empty-apartment listings don’t attract interest: buyers can’t picture the space. We turn the same photo into a furnished version without a reshoot — walls, floor, window and angle stay identical.',
    'Bu, tek bir daire için değil portföyün tamamı için yapılabilir: her ilan aynı görsel standarda oturur.':
      'This works for a whole portfolio, not just one apartment: every listing lands on the same visual standard.',
    'Öncesi': 'Before',
    'Sonrası': 'After',
    'Çözünürlük': 'Resolution',
    'Ölçek': 'Scale',
    'Küçük ve bozuk görselleri baskı ile web’de kullanılabilir ölçeğe çıkarma.':
      'Scaling small, degraded images up to print- and web-usable size.',
    'Arka plan': 'Background',
    'Ortam': 'Setting',
    'Dağınık arka planı temizleme veya ürünü yeni bir ortama yerleştirme.':
      'Cleaning up a cluttered background or placing the product in a new setting.',
    'Işık ve renk': 'Light and colour',
    'Düzeltme': 'Correction',
    'Renk sapmalarını ve ışık farklarını düzeltme. Ürünün gerçek rengine sadık kalma.':
      'Correcting colour casts and lighting differences, staying true to the product’s real colour.',
    'Set tutarlılığı': 'Set consistency',
    'Bütün': 'Whole',
    'Farklı zamanlarda çekilmiş görselleri tek bir görsel dile oturtma.':
      'Bringing images shot at different times into a single visual language.',
    'Geniş katalog': 'Large catalogue',
    'Yüzlerce ürünü olan, hepsini yeniden çektirmesi maliyetli markalar.':
      'Brands with hundreds of products, for which reshooting everything is costly.',
    'Pazaryeri': 'Marketplaces',
    'Platformların görsel standardını karşılaması gereken satıcılar.':
      'Sellers who must meet platform image standards.',
    'Eski arşiv': 'Old archive',
    'Elinde malzeme olan ama teknik olarak kullanamayan markalar.':
      'Brands that have material but can’t use it technically.',
    'Dağınık görünüm': 'Inconsistent look',
    'Görselleri yan yana geldiğinde birbirini tutmayan kataloglar.':
      'Catalogues whose images don’t hold together side by side.',

    /* ---- Identity ---- */
    'Elvora Identity — Marka kimliği | Elvora Global': 'Elvora Identity — Brand identity | Elvora Global',
    'Markanın görsel dili ve kuralları. Logo sistemi, renk paleti, tipografi ve uygulama rehberi — Elvora ekosisteminin kimlik modülü.':
      'The brand’s visual language and rules. Logo system, colour palette, typography and application guide — the identity module of the Elvora ecosystem.',
    'Modül 03 — Elvora Identity': 'Module 03 — Elvora Identity',
    'Markanın': 'We write the brand’s',
    'kurallarını': 'rules',
    'yazıyoruz.': '.',
    'Logo tek başına kimlik değil. Rengin, tipografinin ve düzenin nasıl kullanılacağı yazılı olmadan marka her elde başka görünür.':
      'A logo alone isn’t an identity. Unless it’s written down how colour, typography and layout are used, the brand looks different in every pair of hands.',
    'Marka her yerde': 'The brand looks',
    'başka': 'different',
    'görünüyor.': 'everywhere.',
    'Sitede bir renk, ambalajda başka bir ton, sosyal medyada üçüncü bir tipografi. Logo aynı ama etrafındaki hiçbir şey aynı değil. Her yeni tasarımcı işe kendi yorumuyla başlıyor.':
      'One colour on the site, another tone on the packaging, a third typeface on social. The logo is the same but nothing around it is. Every new designer starts with their own interpretation.',
    'Identity kararları bir kez alıp yazıya geçiriyor. Hangi renk nerede, hangi yazı tipi hangi ölçekte, logo hangi boşlukla duruyor — hepsi uygulanabilir bir rehberde.':
      'Identity makes the decisions once and writes them down. Which colour where, which typeface at which scale, how much space the logo needs — all in a guide people can actually apply.',
    'Kural, ölçekte işe yarar.': 'Rules prove themselves at scale.',
    'ATELIER — lookbook varyasyonu': 'ATELIER — lookbook variation',
    'Moda markalarında aynı ürün farklı aksesuarlarla, farklı kombinlerle sunuluyor. Her kombinasyon için yeni çekim yapmak hem pahalı hem yavaş — sezon geçiyor.':
      'Fashion brands present the same product with different accessories and different styling. Shooting each combination is expensive and slow — the season passes.',
    'Kimlik burada devreye giriyor: kadraj, ışık, mekân ve renk': 'Identity steps in here: framing, light, space and colour are fixed',
    'kural olarak': 'as rules',
    'sabitleniyor; değişen sadece ürün oluyor. Aşağıda aynı çekim, iki farklı kemer detayıyla.':
      '; only the product changes. Below, the same shot with two different belt details.',
    'Varyant A': 'Variant A',
    'Varyant B': 'Variant B',
    'Logo sistemi': 'Logo system',
    'İşaret': 'Mark',
    'Ana logo ve farklı ortamlar için yatay, dikey, tek renk varyantları.':
      'Primary logo plus horizontal, vertical and single-colour variants for different contexts.',
    'Renk paleti': 'Colour palette',
    'Renk': 'Colour',
    'Ana ve destek renkler, baskı ve ekran değerleriyle. Hangi renk nerede kullanılır.':
      'Primary and support colours with print and screen values. Which colour goes where.',
    'Tipografi': 'Typography',
    'Yazı': 'Type',
    'Başlık ve metin eşleşmesi, ölçek basamakları ve kullanım kuralları.':
      'Heading and body pairing, scale steps and usage rules.',
    'Uygulama rehberi': 'Application guide',
    'Kural': 'Rules',
    'Doğru ve yanlış kullanım örnekleri, hazır şablonlar. Ekibin tek başına uygulayabileceği kadar net.':
      'Correct and incorrect usage examples plus ready templates — clear enough for the team to apply on its own.',
    'Yeni marka': 'New brand',
    'Sıfırdan kurulan, görsel dilini baştan doğru oturtmak isteyenler.':
      'Brands starting from scratch that want the visual language right from day one.',
    'Yeniden konumlanma': 'Repositioning',
    'Hedef kitlesi veya ürünü değişen, görünümünü buna göre güncelleyecek markalar.':
      'Brands whose audience or product has changed and whose look needs to follow.',
    'Kural yokluğu': 'No rules',
    'Logosu olan ama nasıl kullanılacağı yazılı olmayan markalar.':
      'Brands that have a logo but no written rules for using it.',
    'Büyüyen ekip': 'Growing team',
    'Birden fazla kişinin tasarım ürettiği, tutarlılığı kaybeden yapılar.':
      'Organisations where several people produce design and consistency slips.',

    /* ---- Flow ---- */
    'Elvora Flow — AI otomasyon ve agent sistemleri | Elvora Global':
      'Elvora Flow — AI automation and agent systems | Elvora Global',
    'Tekrar eden işleri sistemle çözüyoruz: destek agent’ı, lead triyajı, içerik akışı, rapor otomasyonu. Sabit kapsam, 3-8 haftada canlı.':
      'We solve repetitive work with systems: support agent, lead triage, content flow, report automation. Fixed scope, live in 3–8 weeks.',
    'Modül 04 — Elvora Flow': 'Module 04 — Elvora Flow',
    'Aynı işi ikinci kez': 'Don’t do the same job',
    'elle yapmayın.': 'by hand twice.',
    'Gelen talebi sınıflandırmak, ürün açıklaması yazmak, haftalık raporu derlemek — bunlar her hafta tekrar eden işler. Bir kez sistem kurulur, sonra kendiliğinden çalışır.':
      'Classifying incoming requests, writing product descriptions, compiling the weekly report — these repeat every week. Build the system once and it runs on its own.',
    'Ekip, işin kendisine değil': 'The team spends its time on',
    'tekrarına': 'repetition',
    'gidiyor.': ', not the work itself.',
    'Formdan gelen talebi biri okuyup CRM’e giriyor. Yeni ürünün açıklamasını biri elle yazıyor. Ay sonu raporunu biri tablodan derliyor. Hiçbiri zor iş değil — ama hepsi her hafta tekrar ediyor ve kimsenin asıl işini yapmasına vakit kalmıyor.':
      'Someone reads the form submission and types it into the CRM. Someone writes the new product description by hand. Someone compiles the month-end report from a spreadsheet. None of it is hard — but all of it repeats every week, and nobody has time left for their actual job.',
    'Flow bu tekrarları alıp bir akışa bağlıyor. Fabrika otomasyonu değil, günlük operasyonun sıkışan yerleri: veri bir yerden alınır, işlenir, olması gereken yere yazılır. Kurulur, çalışır, siz sonucuna bakarsınız.':
      'Flow takes those repetitions and wires them into a pipeline. Not factory automation — the pinch points of daily operations: data is pulled from somewhere, processed, and written where it belongs. It gets built, it runs, you look at the results.',
    '02 / Sistemler': '02 / Systems',
    'Hazır kurduğumuz akışlar.': 'Flows we’ve already built.',
    'Destek agent’ı': 'Support agent',
    '7/24 yanıt': '24/7 replies',
    'Sık sorulanlar, sipariş durumu, kargo takibi. Web sitesi ve WhatsApp üzerinden. Cevaplayamadığını insana devrediyor.':
      'FAQs, order status, shipment tracking — on the website and WhatsApp. Hands over to a human whatever it can’t answer.',
    'Lead triyajı': 'Lead triage',
    'Form → CRM': 'Form → CRM',
    'Gelen talebi sınıflandırır, önceliklendirir, CRM’e yazar ve otomatik ilk yanıtı gönderir. Hiçbir talep gözden kaçmaz.':
      'Classifies and prioritises incoming requests, writes them to the CRM and sends the first reply automatically. Nothing slips through.',
    'İçerik akışı': 'Content flow',
    'Üret → yayınla': 'Produce → publish',
    'Ürün açıklaması, sosyal medya metni ve görsel varyantı tek akışta üretilir, onaya düşer, yayınlanır.':
      'Product description, social copy and image variant are produced in one flow, sent for approval, then published.',
    'Rapor otomasyonu': 'Report automation',
    'Haftalık özet': 'Weekly digest',
    'Satış, stok ve reklam verisini toplayıp okunabilir bir özete çevirir. Her pazartesi kutunuzda.':
      'Collects sales, stock and ad data and turns it into a readable summary. In your inbox every Monday.',
    'Katalog senkronu': 'Catalogue sync',
    'Sistemler arası': 'Across systems',
    'Stok ve fiyat bilgisini ERP, site ve pazaryeri arasında güncel tutar. Elle giriş ve tutarsızlık biter.':
      'Keeps stock and pricing in sync across ERP, site and marketplaces. Manual entry and mismatches stop.',
    'Özel akış': 'Custom flow',
    'Size özel': 'Bespoke',
    'Yukarıdakilere benzemeyen, tekrar eden bir işiniz varsa konuşalım. Kapsamı birlikte çıkarırız.':
      'If you have repetitive work that doesn’t look like the above, let’s talk. We’ll define the scope together.',
    '03 / Entegrasyon': '03 / Integration',
    'Kullandığınız araçlara bağlanır.': 'It connects to the tools you already use.',
    'Yeni bir yazılıma geçmenizi istemiyoruz. Akışlar hâlihazırda kullandığınız araçların üzerine kurulur — aşağıdakiler en sık bağladıklarımız, listesi bununla sınırlı değil.':
      'We don’t want you to switch software. Flows are built on top of the tools you already use — these are the ones we connect most often, and the list isn’t limited to them.',
    'Kapsam baştan belli, teslim tarihli.': 'Scope set up front, delivery dated.',
    'Akış çıkarma': 'Mapping the flow',
    'Hangi işin tekrar ettiğini ve haftada kaç saat gittiğini birlikte yazıyoruz. 1 görüşme.':
      'We write down together which work repeats and how many hours a week it costs. One session.',
    'Kapsam ve fiyat': 'Scope and price',
    'Ne kurulacağı, nereye bağlanacağı ve fiyatı tek belgede. Sonradan büyüyen kapsam yok.':
      'What gets built, what it connects to and what it costs — in one document. No scope creep later.',
    'Kurulum': 'Build',
    'Akış kurulur, sizin verinizle test edilir, üzerinden birlikte geçilir. Tipik olarak 3-8 hafta.':
      'The flow is built, tested with your own data and reviewed together. Typically 3–8 weeks.',
    'Devir ve destek': 'Handover and support',
    'Nasıl çalıştığı yazılı olarak teslim edilir. İlk 90 gün destek dahil.':
      'How it works is handed over in writing. The first 90 days of support are included.',
    '05 / Kimler için': '05 / Who it’s for',
    'Küçük ekip': 'Small team',
    'İşin çoğunu birkaç kişinin taşıdığı, herkesin operasyona boğulduğu yapılar.':
      'Organisations where a few people carry most of the work and everyone is buried in operations.',
    'Artan talep': 'Rising volume',
    'Gelen mesaj ve form sayısı büyüdükçe yanıt süresi uzayan markalar.':
      'Brands whose response times stretch as messages and form submissions grow.',
    'Dağınık veri': 'Scattered data',
    'Bilginin tabloda, mailde ve panelde ayrı ayrı durduğu, elle birleştirilen operasyonlar.':
      'Operations where information sits separately in spreadsheets, email and dashboards, merged by hand.',
    'Yazılım istemeyen': 'No new software',
    'Yeni bir sisteme geçmek istemeyen ama mevcut araçlarını daha verimli kullanmak isteyenler.':
      'Teams that don’t want to migrate systems but do want more out of the tools they have.',

    /* ---- CV Optimizer AI ---- */
    'CV Optimizer AI — kendi ürünümüz | Elvora Global': 'CV Optimizer AI — our own product | Elvora Global',
    'CV Optimizer AI, Elvora Global’in kendi geliştirip yayına aldığı AI ürünü. 20.000+ kullanıcı, 130.000+ optimize edilmiş CV, 6 ATS analiz motoru.':
      'CV Optimizer AI is an AI product Elvora Global built and shipped itself. 20,000+ users, 130,000+ optimised CVs, 6 ATS analysis engines.',
    'Kendi ürünümüz — yayında': 'Our own product — live',
    'Anlatmak yerine': 'Instead of telling you,',
    'yaptık.': 'we built it.',
    'CV Optimizer AI, Elvora Global’in sıfırdan geliştirip yayına aldığı bir AI ürünü. Bir müşteri işi değil — kendi kurduğumuz, kendi işlettiğimiz sistem. AI ile ne yapabildiğimizin en somut kanıtı.':
      'CV Optimizer AI is an AI product Elvora Global built from scratch and shipped. Not client work — a system we built and run ourselves. The most concrete proof of what we can do with AI.',
    'Ürünü canlı gör': 'See it live',
    '01 / Rakamlar': '01 / Numbers',
    'Çalışan bir ürün, çalışan sayılar.': 'A working product, working numbers.',
    'Kayıtlı kullanıcı': 'Registered users',
    'Optimize edilen CV': 'CVs optimised',
    'ATS analiz motoru': 'ATS analysis engines',
    'Analiz süresi': 'Analysis time',
    'Rakamlar cvoptimizerai.com üzerinde yayınlanan güncel verilerdir.':
      'Figures as published on cvoptimizerai.com.',
    '02 / Ürün': '02 / Product',
    'Ekranlar, mockup değil.': 'Real screens, not mockups.',
    'Canlı': 'Live',
    'Aşağıdakiler tasarım taslağı ya da üretilmiş görsel değil — şu anda yayında olan ürünün kendi ekranları.':
      'These aren’t design drafts or generated images — they’re the actual screens of the product that’s live right now.',
    'Ana ekran — içe aktar & puanla': 'Main screen — import & score',
    'ATS tarayıcı — 63 → 91': 'ATS scanner — 63 → 91',
    'Şablonlar — satır bazlı AI': 'Templates — inline AI',
    'Ürün ekranı': 'Product screen',
    'ATS: 63 → 91': 'ATS: 63 → 91',
    'Şablon + AI': 'Templates + AI',
    '03 / Problem': '03 / Problem',
    'CV’lerin çoğu insana': 'Most CVs never reach',
    'hiç ulaşmıyor.': 'a human at all.',
    'Başvuruların büyük kısmı ATS yazılımları tarafından, bir insan okumadan eleniyor. Aday neyi yanlış yaptığını bilmiyor: format mı, anahtar kelime mi, yapı mı? Geri bildirim yok, sadece sessizlik var.':
      'Most applications are filtered out by ATS software before a human reads them. The candidate never learns what went wrong: formatting, keywords, structure? There’s no feedback, only silence.',
    '04 / Sistem': '04 / System',
    'Üç adımda, saniyeler içinde.': 'Three steps, in seconds.',
    'Yükle': 'Upload',
    'PDF, düz metin ya da LinkedIn profili. Puanı görmek için üyelik gerekmiyor.':
      'PDF, plain text or a LinkedIn profile. No account needed to see your score.',
    'ATS puanını al': 'Get your ATS score',
    '100 üzerinden puan, neyin doğru olduğu ve seni eleyen her sorun — etkisine göre sıralanmış.':
      'A score out of 100, what you’re doing right, and every issue holding you back — ranked by impact.',
    'AI ile düzelt': 'Fix it with AI',
    'Tek tık ile CV yeniden yazılıyor: ATS uyumlu, anahtar kelimesi hedeflenmiş, başvuruya hazır.':
      'One click rewrites the CV: ATS-compatible, keyword-targeted, ready to apply.',
    'Link olarak gönder': 'Send it as a link',
    'LinkedIn notlarına dosya eklenemiyor. Paylaşılabilir tanıtım mektubu linki bu boşluğu kapatıyor.':
      'LinkedIn notes don’t take attachments. A shareable presentation-letter link closes that gap.',
    '05 / Sizin için anlamı': '05 / What it means for you',
    'Bu size ne söylüyor?': 'What does this tell you?',
    'Uçtan uca kurabiliyoruz': 'We can build end to end',
    'Arayüz, AI katmanı, ödeme, çok dillilik, altyapı — hepsi bizim. Slayt değil, yayında çalışan bir ürün.':
      'Interface, AI layer, payments, multi-language, infrastructure — all ours. Not a deck, a product running in production.',
    'Ölçekte çalışıyor': 'It works at scale',
    '130 binden fazla CV işlendi. Tek seferlik demo ile sürekli çalışan sistem arasındaki farkı biliyoruz.':
      'More than 130,000 CVs processed. We know the difference between a one-off demo and a system that keeps running.',
    'AI’ı ürüne gömüyoruz': 'We embed AI into the product',
    'AI burada bir özellik değil, ürünün kendisi. Aynı yaklaşımı markanızın tekrar eden probleminde de kuruyoruz.':
      'Here AI isn’t a feature, it’s the product itself. We apply the same approach to your brand’s recurring problem.',
    'Kendi paramızla test ettik': 'We tested it with our own money',
    'Riski önce kendi ürünümüzde aldık. Size önerdiğimiz yaklaşımı kendi üzerimizde denemiş oluyoruz.':
      'We took the risk on our own product first. We’ve tried the approach we recommend to you on ourselves.',

    /* ---- Hakkımızda ---- */
    'Hakkımızda — Elvora Global': 'About — Elvora Global',
    'Elvora Global tek hizmet satan bir ajans değil, birlikte çalışan modüllerden kurulu bir AI çözüm ekosistemi. Yaklaşımımız ve çalışma biçimimiz.':
      'Elvora Global isn’t an agency selling a single service — it’s an AI solution ecosystem built from modules that work together. Our approach and how we work.',
    'Ajans değil,': 'Not an agency —',
    'ekosistem.': 'an ecosystem.',
    'Elvora Global tek bir hizmeti satıp bitiren bir ajans değil. Birbirini tanıyan modüllerden kurulu, ihtiyaç büyüdükçe genişleyen bir sistem.':
      'Elvora Global isn’t an agency that sells one service and moves on. It’s a system built from modules that know each other and expands as the need grows.',
    '01 / Neden böyle kurduk': '01 / Why we built it this way',
    'Parça parça alınan iş, parça parça': 'Work bought piece by piece',
    'görünüyor.': 'looks like pieces.',
    'Markaların çoğu ihtiyacını tek tek satın alıyor: bir yerden görsel, başka bir yerden video, üçüncü bir yerden kimlik. Her tedarikçi işini yapıyor ama kimse diğerinin ne yaptığını bilmiyor. Ortaya çıkan şey bir marka değil, bir yığın.':
      'Most brands buy what they need one item at a time: visuals from one place, video from another, identity from a third. Every supplier does its job, but nobody knows what the others are doing. What comes out isn’t a brand, it’s a pile.',
    'Elvora’yı bunun tersi olarak kurduk. Her modül aynı sistemin parçası. Studio’da ürettiğimiz içerik Identity’de yazdığımız kurallara uyuyor, Vision’da düzelttiğimiz görseller aynı görsel dile oturuyor. Bir modülden diğerine geçmek yeniden başlamak anlamına gelmiyor.':
      'We built Elvora as the opposite. Every module is part of the same system. Content we produce in Studio follows the rules we wrote in Identity; images we fix in Vision land in the same visual language. Moving between modules doesn’t mean starting over.',
    '02 / Kurucu': '02 / Founder',
    'Arkasında kim var?': 'Who’s behind it?',
    'Founder': 'Founder',
    'Çınar Ezici': 'Çınar Ezici',
    'Elvora Global’i ve CV Optimizer AI’ı kuran isim. Odağı tek seferlik AI denemeleri değil, markanın tekrar eden problemini çözen ve çalışmaya devam eden sistemler kurmak.':
      'Founder of Elvora Global and CV Optimizer AI. His focus isn’t one-off AI experiments but systems that solve a brand’s recurring problem and keep running.',
    'Elvora’nın modüler yapısı da buradan çıktı: her işi sıfırdan başlatmak yerine, bir kez kurulan ve büyüdükçe genişleyen bir ekosistem.':
      'Elvora’s modular structure came out of that: instead of starting every job from zero, an ecosystem that’s built once and grows.',
    'Doğrudan yazın': 'Get in touch',
    '03 / Çalışma biçimi': '03 / How we work',
    'Nasıl çalışıyoruz?': 'How do we work?',
    'Problemle başla': 'Start with the problem',
    'Hangi paketi satacağımızla değil, neyi çözmeniz gerektiğiyle başlıyoruz. Bazen doğru cevap tek bir modül oluyor.':
      'We start with what you need to solve, not which package we can sell. Sometimes the right answer is a single module.',
    'Modüller belirli bir sektöre göre değil, tekrar eden problemlere göre kurulu. Moda da olabilirsiniz, sanayi de.':
      'The modules are built around recurring problems, not a specific industry. You could be in fashion or in manufacturing.',
    'Devir teslim yok': 'No handovers',
    'Modüller arasında geçerken markayı yeniden anlatmanız gerekmiyor. Bilgi sistemde kalıyor.':
      'Moving between modules doesn’t mean explaining the brand again. The knowledge stays in the system.',
    'Yazılı kapsam': 'Written scope',
    'Teslim listesi, takvim ve fiyat baştan belli. Süreç içinde büyüyen kapsam ve fatura yok.':
      'Deliverables, timeline and price are set from the start. No scope or invoice that grows mid-project.',
    'AI araç, karar değil': 'AI is a tool, not the decision',
    'AI hızı ve ölçeği veriyor. Neyin iyi olduğuna dair kararı kreatif yönetim veriyor. İkisi ayrılınca sonuç tutarsızlaşıyor.':
      'AI provides speed and scale. Creative direction decides what’s good. Separate the two and the result falls apart.',
    'Açık uçlu sistem': 'Open-ended system',
    'Üç modül bir bitiş noktası değil. Tekrar eden yeni bir ihtiyaç netleştikçe sisteme yeni modül ekliyoruz.':
      'The modules aren’t an end point. As a new recurring need becomes clear, we add a new module to the system.',
    '04 / Ekosistem': '04 / Ecosystem',
    'Şu an sistemde ne var?': 'What’s in the system today?',

    /* ---- İletişim / teşekkürler ---- */
    'İletişim — Elvora Global': 'Contact — Elvora Global',
    'Projenizi anlatın. Hangi modülle başlayacağınızı bilmeniz gerekmiyor — kısa formu doldurun, doğru modülü birlikte belirleyelim.':
      'Tell us about your project. You don’t need to know which module to start with — fill in the short form and we’ll work it out together.',
    'Ne yapmak istediğinizi': 'Tell us what you',
    'anlatın.': 'want to do.',
    'Hangi modülün gerektiğini bilmeniz gerekmiyor. Durumu yazın — doğru modülü birlikte belirleriz.':
      'You don’t need to know which module you need. Describe the situation and we’ll work out the right one together.',
    'Tek form': 'One form',
    'Tüm modüller aynı yerde': 'All modules meet',
    'buluşuyor.': 'in one place.',
    'Studio, Vision, Identity — hangisiyle ilgilendiğinizi seçin ya da emin değilim deyip geçin. Formu okuyup size dönüyoruz.':
      'Studio, Vision, Identity — pick the one you’re interested in, or just say you’re not sure. We read the form and get back to you.',
    'Ad Soyad': 'Full name',
    'Adınız ve soyadınız': 'Your first and last name',
    'E-posta': 'Email',
    'Şirket': 'Company',
    'Marka veya şirket adı': 'Brand or company name',
    'İlgilendiğiniz modül': 'Module you’re interested in',
    'Seçin': 'Select',
    'Elvora Studio — reklam içeriği': 'Elvora Studio — ad content',
    'Elvora Vision — görsel iyileştirme': 'Elvora Vision — image enhancement',
    'Elvora Identity — marka kimliği': 'Elvora Identity — brand identity',
    'Emin değilim — birlikte belirleyelim': 'Not sure — let’s work it out',
    'Ne yapmak istiyorsunuz?': 'What would you like to do?',
    'Durumu kısaca anlatın — elinizde ne var, neye ihtiyacınız var, takvim nedir.':
      'Describe the situation briefly — what you have, what you need, and your timeline.',
    'okudum; ad, e-posta ve mesaj bilgilerimin bana dönüş yapılması amacıyla işlenmesine onay veriyorum.':
      'and consent to my name, email and message being processed so you can reply to me.',
    'Aydınlatma metnini': 'I have read the privacy notice',
    'Zorunlu alanlar.': 'Required fields.',
    'Alındı': 'Received',
    'Teşekkürler.': 'Thank you.',
    'Mesajınız bize ulaştı. Formu okuyup size dönüyoruz — genelde bir iş günü içinde.':
      'Your message reached us. We’ll read it and get back to you — usually within one business day.',
    'Gönderilemedi': 'Not sent',
    'Bir aksilik oldu.': 'Something went wrong.',
    'Mesajınız': 'Your message',
    'iletilemedi': 'could not be sent',
    '. Lütfen doğrudan yazın:': '. Please write to us directly:',
    '— ya da birkaç dakika sonra tekrar deneyin.': '— or try again in a few minutes.',
    'Gönderiliyor…': 'Sending…',
    'Bu alan zorunlu': 'This field is required',
    'Geçerli bir e-posta girin': 'Enter a valid email address',
    'Biraz daha ayrıntı verin': 'Please add a little more detail',
    'Devam etmek için onay gerekiyor': 'Please tick the box to continue',
    'Geçersiz değer': 'Invalid value',
    'Teşekkürler — Elvora Global': 'Thank you — Elvora Global',
    'Mesajınız bize ulaştı. Bir iş günü içinde size dönüyoruz.':
      'Your message reached us. We’ll get back to you within one business day.',
    'Mesajınız bize ulaştı.': 'Your message reached us.',
    'Formu okuyup size dönüyoruz — genelde bir iş günü içinde. Acele bir durum varsa doğrudan yazabilirsiniz.':
      'We’ll read the form and get back to you — usually within one business day. If it’s urgent, write to us directly.',
    'Doğrudan yaz': 'Write directly',
    'Mesajınız': 'Your message',
    'bize ulaştı.': 'reached us.',
    '<30 sn': '<30 sec',
    'Bunu tek seferlik bir hizmet olarak değil,': 'We solved this not as a one-off service but as a',
    'sistem': 'system',
    'olarak çözdük: yükle, puanını gör, tek tıkla düzelt. Aynı mantık Elvora’nın modüllerinde de var — tekrar eden bir problemi elle değil, kurulmuş bir akışla çözmek.': ': upload, see your score, fix it in one click. The same logic runs through Elvora’s modules — solving a recurring problem with a built pipeline rather than by hand.',

    /* ---- Erişilebilirlik metinleri ---- */
    'Öncesi ve sonrası görselleri karşılaştırma sürgüsü': 'Before and after comparison slider',
    'Kemer varyantlarını karşılaştırma sürgüsü': 'Belt variant comparison slider',
    'Boş, döşenmemiş oturma odası — düzenleme öncesi': 'Empty, unfurnished living room — before staging',
    'Aynı oturma odası, sanal olarak döşenmiş hâli — düzenleme sonrası':
      'The same living room, virtually staged — after',
    'Bouclé kumaş kaplı koltuk, bej varyant': 'Armchair in bouclé fabric, beige variant',
    'Aynı koltuğun yeşil kadife varyantı': 'The same armchair in green velvet',
    'Aynı koltuğun antrasit yün varyantı': 'The same armchair in charcoal wool',
    'Siyah elbise, ilk kemer detayı varyantı': 'Black dress, first belt-detail variant',
    'Aynı elbise, ikinci kemer detayı varyantı': 'The same dress, second belt-detail variant',
    'Siyah elbise, kemer varyantı — lookbook çalışması': 'Black dress, belt variant — lookbook work',
    'Sanal olarak döşenmiş oturma odası': 'Virtually staged living room',
    'Yeşil kadife koltuk, varyant üretimi': 'Green velvet armchair, variant production',
    'CV Optimizer AI logosu': 'CV Optimizer AI logo',
    'CV Optimizer AI ana ekranı — CV yükleme ve ATS puanı':
      'CV Optimizer AI main screen — CV upload and ATS score',
    'CV Optimizer AI ana ekranı — CV yükleme ve ATS puanlama':
      'CV Optimizer AI main screen — CV upload and ATS scoring',
    'ATS tarayıcı: 63 puandan 91 puana çıkan CV karşılaştırması':
      'ATS scanner: a CV going from 63 to 91',
    'Şablon seçimi ve satır bazlı AI optimizasyon arayüzü':
      'Template picker and inline AI optimisation interface',
    'Şablon seçimi ve blok bazlı AI optimizasyon arayüzü':
      'Template picker and block-level AI optimisation interface',
    'Elvora Studio — reklam içeriği': 'Elvora Studio — ad content',
    'Elvora Vision — görsel iyileştirme': 'Elvora Vision — image enhancement',
    'Elvora Identity — marka kimliği': 'Elvora Identity — brand identity',
    'Elvora Flow — AI otomasyon': 'Elvora Flow — AI automation',
  };

  /* Aynı Türkçe cümle parçası farklı sayfalarda farklı İngilizce karşılık
     gerektirebiliyor (ör. "görünüyor." Identity'de "everywhere.",
     Hakkımızda'da "looks like pieces."). Sayfa bazlı geçersiz kılma
     küresel sözlükten önce bakılır. */
  const PAGE = {
    'identity.html': {
      'görünüyor.': 'everywhere.',
    },
    'hakkimizda.html': {
      'görünüyor.': 'looks like pieces.',
    },
  };

  /* Kesme/tırnak işaretleri kaynakta düz ('), sözlükte tipografik (’) olabiliyor.
     Eşleşmenin bunlara takılmaması için ikisi de tek forma indirgeniyor. */
  const norm = (s) =>
    s.replace(/[‘’ʼ`´]/g, "'")
     .replace(/[“”]/g, '"')
     .replace(/\s+/g, ' ')
     .trim();

  // Sözlük anahtarları da aynı normalleştirmeden geçirilip aranıyor
  const LOOKUP = Object.create(null);
  for (const [tr, en] of Object.entries(DICT)) LOOKUP[norm(tr)] = en;

  // Bu sayfaya özel karşılıklar küresel sözlüğün üzerine yazılır
  const here = location.pathname.split('/').pop() || 'index.html';
  for (const [tr, en] of Object.entries(PAGE[here] || {})) LOOKUP[norm(tr)] = en;

  const KEY = 'elvora-lang';

  /* Orijinal Türkçe metinler saklanır ki TR'ye dönüş kayıpsız olsun */
  const originals = new WeakMap();
  let attrStore = null;

  function textNodes() {
    const out = [];
    const w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(n) {
        if (!n.nodeValue || !n.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        const tag = n.parentElement?.tagName;
        if (tag === 'SCRIPT' || tag === 'STYLE') return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      },
    });
    let n;
    while ((n = w.nextNode())) out.push(n);
    return out;
  }

  const ATTRS = ['placeholder', 'aria-label', 'alt', 'title'];

  function collectAttrs() {
    const list = [];
    document.querySelectorAll('[placeholder],[aria-label],[alt],[title]').forEach((el) => {
      ATTRS.forEach((a) => {
        const v = el.getAttribute(a);
        if (v && v.trim()) list.push({ el, a, tr: v });
      });
    });
    return list;
  }

  function apply(lang) {
    const toEn = lang === 'en';

    // Metin düğümleri
    textNodes().forEach((node) => {
      if (!originals.has(node)) originals.set(node, node.nodeValue);
      const tr = originals.get(node);
      if (!toEn) { node.nodeValue = tr; return; }
      const en = LOOKUP[norm(tr)];
      if (en) {
        // Baştaki/sondaki boşluk korunur, yoksa kelimeler bitişir.
        // İstisna: karşılık noktalama ile başlıyorsa (bölünmüş başlıkların
        // son parçası gibi) baştaki boşluk atılır — "ecosystem ." olmasın.
        const lead = /^[.,;:!?]/.test(en) ? '' : tr.match(/^\s*/)[0];
        const tail = tr.match(/\s*$/)[0];
        node.nodeValue = lead + en + tail;
      }
    });

    // Öznitelikler
    if (!attrStore) attrStore = collectAttrs();
    attrStore.forEach(({ el, a, tr }) => {
      if (!toEn) { el.setAttribute(a, tr); return; }
      const en = LOOKUP[norm(tr)];
      if (en) el.setAttribute(a, en);
    });

    // Sayfa başlığı ve açıklaması
    if (!document.title.dataset) { /* noop */ }
    const t = document.querySelector('title');
    if (t) {
      if (!originals.has(t.firstChild) && t.firstChild) originals.set(t.firstChild, t.textContent);
      const trT = originals.get(t.firstChild) ?? t.textContent;
      t.textContent = toEn ? (LOOKUP[norm(trT)] ?? trT) : trT;
    }
    const d = document.querySelector('meta[name="description"]');
    if (d) {
      if (!d.dataset.tr) d.dataset.tr = d.content;
      d.content = toEn ? (LOOKUP[norm(d.dataset.tr)] ?? d.dataset.tr) : d.dataset.tr;
    }

    document.documentElement.lang = toEn ? 'en' : 'tr';
    document.querySelectorAll('.lang__btn').forEach((b) => {
      b.setAttribute('aria-pressed', String(b.dataset.lang === lang));
    });
    try { localStorage.setItem(KEY, lang); } catch { /* özel mod */ }
  }

  function init() {
    let saved = 'tr';
    try { saved = localStorage.getItem(KEY) || 'tr'; } catch { /* özel mod */ }
    if (saved === 'en') apply('en');
    else document.querySelectorAll('.lang__btn').forEach((b) => {
      b.setAttribute('aria-pressed', String(b.dataset.lang === 'tr'));
    });

    document.querySelectorAll('.lang__btn').forEach((b) => {
      b.addEventListener('click', () => apply(b.dataset.lang));
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else init();

  // Kapsama denetimi için sözlüğü dışarı aç
  window.__ELVORA_DICT__ = LOOKUP;
  window.__ELVORA_NORM__ = norm;
})();
