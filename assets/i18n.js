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
    'Hizmetler': 'Services',
    'Workflow Otomasyonu': 'Workflow Automation',
    'AI Otomasyon': 'AI Automation',
    'Özel AI Çözümleri': 'Custom AI Solutions',
    'B2B Satış Otomasyonu': 'B2B Sales Automation',
    'İçerik Üretimi': 'Content Creation',
    'Kurumsal Web Sitesi': 'Corporate Website',
    'E-ticaret Webshop': 'E-commerce Webshop',
    'Kurum': 'Company',
    'İçeriğe geç': 'Skip to content',
    'Ana menü': 'Main menu',
    'Mobil menü': 'Mobile menu',
    'Menüyü aç/kapat': 'Toggle menu',
    'Dil seçimi': 'Language',
    'Elvora Global — ana sayfa': 'Elvora Global — home',
    'Projenizi anlatın': 'Tell us about your project',
    'İşlerimizi görün': 'See our work',
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
    'İzmir, Türkiye': 'Izmir, Türkiye',
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
    'Darboğaz artık yapmak değil,': 'The bottleneck isn’t building any more —',
    'sürdürmek.': 'it’s sustaining it.',
    'Bugün hemen her marka aynı noktada tıkanıyor: doğru ürünü, doğru içeriği ya da doğru kampanyayı ortaya çıkarmak eskisi kadar zor değil. Zor olan, bunu her hafta aynı kalitede':
      'Nearly every brand hits the same wall today: getting the right product, content or campaign out the door isn’t as hard as it used to be. What’s hard is',
    'tekrar edebilmek': 'repeating that',
    '— destek yanıtından içerik üretimine, rapor derlemeden stok takibine kadar.':
      'at the same quality every week — from support replies to content production, report compiling to stock tracking.',
    'Elvora bu tekrar eden işi bir kişiye değil, bir': 'Elvora wires that repetitive work into a',
    'bağlıyor. Hangi modülde çalışırsak çalışalım — Flow, Studio, Vision ya da Identity — aynı prensiple ilerliyoruz: kapsamı netleştirir, sistemi kurar, çalışır durumda bırakırız.':
      ', not a person. Whichever module we’re working in — Flow, Studio, Vision or Identity — we follow the same principle: clarify the scope, build the system, leave it running.',
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
    'Kendi geliştirip yayına aldığımız AI ürünü — kurduğumuz ve her gün işlettiğimiz gerçek sistem.':
      'An AI product we built and shipped ourselves — a real system we built and run every day.',
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
    'CV Optimizer AI, Elvora Global\'in sıfırdan geliştirip yayına aldığı bir AI ürünü — kendi kurduğumuz, kendi işlettiğimiz, canlıda çalışan bir sistem. AI ile ne yapabildiğimizin en somut kanıtı.':
      'CV Optimizer AI is an AI product Elvora Global built from scratch and shipped — a system we built, run, and keep live ourselves. The most concrete proof of what we can do with AI.',
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
    'Elvora Global\'i ve CV Optimizer AI\'ı kuran isim. Odağı tek seferlik AI denemeleri değil, markanın tekrar eden problemini çözen ve çalışmaya devam eden sistemler kurmak.':
      'Founder of Elvora Global and CV Optimizer AI. His focus isn’t one-off AI experiments but systems that solve a brand’s recurring problem and keep running.',
    'Elvora\'nın modüler yapısı da buradan çıktı: her işi sıfırdan başlatmak yerine, bir kez kurulan ve büyüdükçe genişleyen bir ekosistem.':
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

    /* ---- Danışmanlık (nav/footer/genel) ---- */
    'Danışmanlık': 'Advisory',

    /* ---- Ana sayfa: hero stat şeridi ---- */
    'Modüler çözüm': 'Modular solutions',
    'Canlı SaaS ürünü': 'Live SaaS product',
    '90 gün': '90 days',
    'Teslim sonrası destek': 'Post-delivery support',
    'İzmir': 'Izmir',
    'Merkez ofis': 'Head office',

    /* ---- Ana sayfa: 02 / Sistemler (homepage öne çıkarma) + numaraların kayması ---- */
    'Bugün': 'Today,',
    'altı sistem çalıştırıyoruz.': 'we’re running six systems.',
    'Bunlar konsept değil — kurup canlıya aldığımız, test edilmiş sistem paketleri. Kapsam baştan belli, fiyat baştan belli.':
      'These aren’t concepts — they’re tested system packages we’ve built and shipped ourselves. Scope fixed upfront, price fixed upfront.',
    'Tüm Flow sistemlerini incele': 'Browse all Flow systems',
    '03 / İki hat': '03 / Two tracks',
    '05 / Yaklaşım': '05 / Approach',
    '06 / Süreç': '06 / Process',
    '07 / Kurucu': '07 / Founder',
    '08 / Başlarken': '08 / Getting started',
    '09 / Son Yazılar': '09 / Latest posts',

    /* ---- Ana sayfa: 09 / Son Yazılar ---- */
    'Yakında yayınlayacaklarımız.': 'What we’ll publish soon.',
    'Son yazılarımız.': 'Our latest posts.',
    'Blog\'a git': 'Go to blog',
    'Yakında': 'Coming soon',
    'AI otomasyonu bir ajansı nasıl değiştirir?': 'How AI automation changes an agency',
    'İçerik üretimini sisteme bağlamanın 3 yolu': '3 ways to tie content production to a system',
    'Marka kimliğinde tutarlılığı AI ile korumak': 'Keeping brand identity consistent with AI',
    'Marka Sistemleri': 'Brand Systems',

    /* ---- Ana sayfa: 02 / İki hat ---- */
    '02 / İki hat': '02 / Two tracks',
    'Önce strateji,': 'Strategy first,',
    'sonra teslim.': 'then delivery.',
    'Yol haritanız netse doğrudan kurulum ve uygulamayla başlarız. Netleşmemişse önce Danışmanlık hattından geçip neyin, ne sırayla yapılacağını birlikte çıkarırız.':
      'If your roadmap is already clear, we go straight to setup and delivery. If it isn’t, we first go through Advisory to work out together what needs doing, and in what order.',
    'A — Danışmanlık': 'A — Advisory',
    'Yol haritası, karar desteği,': 'Roadmap, decision support,',
    'yönetim kurulu sunumu.': 'and a board presentation.',
    '3 aylık sabit kapsamlı paketlerle şirketinize özel AI ve otomasyon stratejisi çıkarıyoruz: süreç envanteri, pilot proje tanımları, bütçe modeli. Uygulama bu hatta dahil değil — amaç önce':
      'We build a 3-month, fixed-scope AI and automation strategy tailored to your company: process inventory, pilot project definitions, a budget model. Implementation isn’t part of this track — the goal here is first to clarify',
    'ne yapılacağını': 'what needs doing',
    'netleştirmek.': '.',
    'Danışmanlık paketleri': 'Advisory packages',
    'B — Elvora Flow / ana modül': 'B — Elvora Flow / core module',
    'Test edilmiş sistem paketleri: destek agent\'ı, lead triyajı, içerik akışı ve daha fazlası. Kapsam baştan belli, üretim durmadan çalışır.':
      'Tested system packages: support agent, lead triage, content pipeline and more. Scope is fixed upfront, production never stops.',
    'Kurulum 4–16 hafta': 'Live in 4–16 weeks',

    /* ---- Ana sayfa: 05 / Yaklaşım karşılaştırma tablosu ---- */
    'Çoğu marka yanlış teslimat modelini seçer ve bunun bedelini kaybolan zamanla öder. Elvora alternatiflere karşı şöyle duruyor.':
      'Most brands pick the wrong delivery model and pay for it in lost time. Here’s how Elvora compares to the alternatives.',
    'Büyük ajans': 'Large agency',
    'İç ekip işe alımı': 'In-house hire',
    'Kendin yap': 'DIY',
    'Tek modülle başlama': 'Start with one module',
    'Sektörden bağımsız uzmanlık': 'Industry-agnostic expertise',
    'Modüller arası devir teslim yok': 'No handover between modules',
    'Sabit kapsam, sabit fiyat': 'Fixed scope, fixed price',
    'AI hızı + kreatif yönetim birlikte': 'AI speed + creative direction together',
    '90 gün teslim sonrası destek': '90 days of post-delivery support',
    'Evet': 'Yes',
    'Bazen': 'Sometimes',
    'Hayır': 'No',

    /* ---- Ana sayfa: 06 / Başlarken ---- */
    '06 / Başlarken': '06 / Getting started',
    'Size hangisi uyar?': 'Which one fits you?',
    'Yol haritamız henüz net değil': 'Our roadmap isn’t clear yet',
    'Önce stratejiyi netleştirelim.': 'Let’s clarify the strategy first.',
    'Danışmanlık paketlerinden biriyle 12 hafta içinde yol haritanızı ve pilot projelerinizi çıkarıyoruz.':
      'With one of the Advisory packages we map out your roadmap and pilot projects within 12 weeks.',
    'Danışmanlığı incele': 'Explore Advisory',
    'Ne istediğimizi biliyoruz': 'We know what we want',
    'Doğrudan kuruluma geçelim.': 'Let’s go straight to setup.',
    'Flow, Studio, Vision ve Identity\'de hazır sistem paketleri var. 4–16 haftada canlıya alır, sonra aylık operasyonu biz yürütürüz.':
      'Flow, Studio, Vision and Identity all have ready-made system packages. We go live in 4–16 weeks, then run the monthly operation.',

    /* ---- cozumler/flow.html: fiyatlandırma + destek seviyeleri ---- */
    '4–6 hafta': '4–6 weeks',
    '5–7 hafta': '5–7 weeks',
    '6–8 hafta': '6–8 weeks',
    '8–16 hafta': '8–16 weeks',
    'Fiyatlar başlangıç seviyesidir; kapsam görüşmesinden sonra sabitlenir. Süreç boyunca büyüyen fatura yok.':
      'Prices are starting points; they’re fixed after the scope call. No invoice that grows during the process.',
    '02B / Teslim sonrası': '02B / After delivery',
    'Kurulum bitince destek bitmiyor.': 'Support doesn’t end when setup does.',
    'Temel': 'Basic',
    'Standart': 'Standard',
    'Dahil': 'Included',
    '+Aylık': '+Monthly',
    'Aylık bakım ve hata düzeltme': 'Monthly maintenance and bug fixes',
    'Üç ayda bir sistem sağlık kontrolü': 'Quarterly system health check',
    'E-posta destek hattı': 'Email support line',
    'Temel paketin tamamı': 'Everything in Basic',
    'Ayda 10 saat geliştirme kapasitesi': '10 hours of monthly development capacity',
    'Haftalık durum görüşmesi': 'Weekly status call',
    'Prompt ve akış güncellemeleri': 'Prompt and workflow updates',
    'Standart paketin tamamı': 'Everything in Standard',
    '4 saatlik yanıt süresi garantisi': '4-hour response time guarantee',
    'Üç ayda bir mimari gözden geçirme': 'Quarterly architecture review',
    'Öncelikli destek hattı': 'Priority support line',

    /* ---- danismanlik.html ---- */
    'Danışmanlık — AI ve otomasyon stratejisi | Elvora Global': 'Advisory — AI and automation strategy | Elvora Global',
    'Uygulamaya geçmeden önce yol haritanızı çıkarıyoruz: süreç envanteri, AI fırsat analizi, pilot proje tanımları ve yönetim kurulu sunumu. Sabit kapsam, 12 hafta.':
      'We map your roadmap before implementation: process inventory, AI opportunity analysis, pilot project definitions and a board presentation. Fixed scope, 12 weeks.',
    'AI işine başlamadan önce': 'Before you start your AI initiative,',
    'ne yapacağınızı netleştirin.': 'get clear on what to do.',
    '01 / Ana paketler': '01 / Main packages',
    'Üç paket,': 'Three packages,',
    'tek fiyat modeli.': 'one pricing model.',
    'AI & Otomasyon Yol Haritası': 'AI & Automation Roadmap',
    '50M TL+ ciro için': 'For 50M TL+ revenue',
    '12 hafta': '12 weeks',
    '6 atölye · 12 görüşme': '6 workshops · 12 sessions',
    'Süreç envanteri ve teknoloji haritası': 'Process inventory and technology map',
    'AI fırsat analizi, araç/tedarikçi önerisi': 'AI opportunity analysis, tool/vendor recommendations',
    '3 pilot proje tanımı (PRD)': '3 pilot project definitions (PRD)',
    '18 aylık yol haritası ve bütçe modeli': '18-month roadmap and budget model',
    '90 dakikalık yönetim kurulu sunumu': '90-minute board presentation',
    'Otomasyon Stratejisi': 'Automation Strategy',
    '10M TL+ ciro için': 'For 10M TL+ revenue',
    '4 atölye · 10 görüşme': '4 workshops · 10 sessions',
    'Süreç haritalama ve zaman analizi': 'Process mapping and time analysis',
    'ROI hesaplaması, SaaS vs. kendi altyapın kararı': 'ROI calculation, SaaS vs. self-hosted decision',
    'Workflow mimarisi': 'Workflow architecture',
    'Ekip eğitim planı': 'Team training plan',
    'İçerik & Marka Stratejisi': 'Content & Brand Strategy',
    'İçerik hacmi büyüyen markalar için': 'For brands with growing content volume',
    '6 atölye · 12 görüşme ': '6 workshops · 12 sessions ',
    'İçerik ve marka denetimi': 'Content and brand audit',
    'Marka kimliği sistemi tasarımı': 'Brand identity system design',
    'Görsel üretim hattı ve araç seçimi': 'Visual production pipeline and tool selection',
    'Maliyet ve kapasite analizi': 'Cost and capacity analysis',
    '18 aylık yol haritası ve yönetim sunumu': '18-month roadmap and management presentation',
    '02 / Kısa format': '02 / Short format',
    'Tam pakete hazır değilseniz.': 'Not ready for the full package yet.',
    'Strateji Çalıştayı': 'Strategy Workshop',
    '1 gün': '1 day',
    'Ekiple bir günlük yoğun çalıştay — önceliklerinizi ve olası ilk adımları netleştirir, sonraki paket için zemin hazırlar.':
      'A one-day intensive workshop with your team — clarifies priorities and possible first steps, and lays the ground for the next package.',
    'Hızlı Teşhis': 'Quick Diagnostic',
    '2 hafta': '2 weeks',
    'Mevcut süreçlerinize hızlı bir dışarıdan bakış — nerede zaman kaybettiğinizi ve en hızlı kazanımın nerede olduğunu gösterir.':
      'A fast outside look at your current processes — shows where you’re losing time and where the quickest wins are.',
    'Mentorluk Retainer': 'Mentorship Retainer',
    'CEO / CTO için, min. 3 ay': 'For CEO/CTO, min. 3 months',
    '$2.500/ay': '$2,500/mo',
    'Düzenli görüşmelerle karar anlarında yanınızda oluruz — AI ve otomasyon yatırımlarında ikinci bir göz.':
      'Through regular calls we’re there at decision points — a second pair of eyes on your AI and automation investments.',
    'Sabit kapsam, sabit fiyat: saatlik faturalama yok, kapsam baştan belgelenir, fiyat şirket büyüklüğüne göre netleşir.':
      'Fixed scope, fixed price: no hourly billing, scope is documented upfront, price is set based on company size.',
    '03 / Süreç': '03 / Process',
    '4 adımda teslim.': 'Delivered in 4 steps.',
    'Teşhis çağrısı': 'Diagnostic call',
    '30 dakika, ücretsiz. Satış odaklı değil — sorununuzu netleştirmek içindir.':
      '30 minutes, free. Not a sales call — it’s to clarify your problem.',
    'Kickoff ve keşif': 'Kickoff and discovery',
    '1–4. haftalar. Süreçler ve veriler incelenir, ara rapor teslim edilir.':
      'Weeks 1–4. Processes and data are reviewed, an interim report is delivered.',
    'Strateji ve yol haritası': 'Strategy and roadmap',
    '5–8. haftalar. Öneriler şekillenir, yönetim kurulu sunumu hazırlanır.':
      'Weeks 5–8. Recommendations take shape, the board presentation is prepared.',
    'Teslim ve sunum': 'Delivery and presentation',
    '9–12. haftalar. Son belgeler ve 30-60-90 günlük eylem planı teslim edilir.':
      'Weeks 9–12. Final documents and a 30-60-90 day action plan are delivered.',
    '04 / Sık sorulanlar': '04 / FAQ',
    'Merak edilenler.': 'Common questions.',
    'Her firma büyüklüğüne uygun mu?': 'Is this right for every company size?',
    'Paketler orta ve büyük ölçekli şirketler için tasarlandı. Daha küçük ekipler için Hızlı Teşhis veya Strateji Çalıştayı genelde doğru başlangıç noktası oluyor.':
      'The packages are designed for mid-size and large companies. For smaller teams, Quick Diagnostic or Strategy Workshop is usually the right starting point.',
    'Fiyat neden bir aralık değil, "+" ile gösteriliyor?': 'Why is the price shown with a “+” instead of a range?',
    'Gösterilen rakam başlangıç fiyatıdır. Teşhis çağrısından sonra şirketinizin büyüklüğüne ve kapsamına göre net fiyat tek belgede sabitlenir — süreç içinde değişmez.':
      'The figure shown is the starting price. After the diagnostic call, the exact price is fixed in a single document based on your company’s size and scope — it doesn’t change during the process.',
    'Sonuç garantisi veriyor musunuz?': 'Do you guarantee results?',
    'Teslim ettiğimiz şey yazılı bir strateji ve yol haritasıdır — bunun uygulanması ve getirisi şirket içi kararlara bağlı. Teslimlerin kapsamı ve kalitesi baştan yazılı olarak belirlenir.':
      'What we deliver is a written strategy and roadmap — implementing it and its return depend on decisions inside your company. The scope and quality of deliverables are defined in writing upfront.',
    'Verilerimiz güvende mi?': 'Is our data safe?',
    'Süreç boyunca paylaşılan bilgiler gizlilik sözleşmesi kapsamında tutulur ve yalnızca bu proje için kullanılır.':
      'Information shared during the process is covered by a confidentiality agreement and used only for this project.',
    'Strateji bittikten sonra uygulamayı da siz mi yapıyorsunuz?': 'Do you also implement the strategy afterwards?',
    'İsterseniz evet — yol haritasında çıkan pilot projeleri Elvora Flow, Studio, Vision veya Identity üzerinden uygularız. Zorunlu değil; belgeyle başka bir ekibe de devredebilirsiniz.':
      'If you’d like, yes — we implement the pilot projects from the roadmap through Elvora Flow, Studio, Vision or Identity. It’s not required; you can hand the document to another team instead.',
    'Ödeme koşulları nasıl?': 'What are the payment terms?',
    '%40 kickoff\'ta, %30 teslimin ortasında, %30 final teslimde — üç taksit, baştan belli.':
      '40% at kickoff, 30% at the midpoint, 30% at final delivery — three instalments, agreed upfront.',
    'İlk değerlendirme ücretsiz': 'First assessment is free',
    '30 dakikalık teşhis çağrısıyla': 'Let’s start with a 30-minute diagnostic call',
    'başlayalım.': '.',
    'Satış odaklı bir görüşme değil — durumunuzu anlatın, doğru paketin hangisi olduğunu birlikte netleştirelim.':
      'Not a sales call — tell us your situation and we’ll work out together which package is right.',

    /* ---- blog.html ---- */
    'AI otomasyonu, içerik üretimi ve marka sistemleri üzerine — sistem kurarken öğrendiklerimizi yazıyoruz.':
      'On AI automation, content production and brand systems — what we learn as we build these systems.',
    'Sistem kurarken': 'What we learn',
    'öğrendiklerimiz.': 'building systems.',
    'AI otomasyonu, içerik üretimi ve marka sistemleri üzerine — kendi kurduğumuz sistemlerden çıkardığımız gerçek gözlemler.':
      'On AI automation, content production and brand systems — real observations from the systems we build ourselves.',
    'Yazıyı oku': 'Read the article',
    '4 dk okuma · 22 Temmuz 2026': '4 min read · July 22, 2026',
    '4 dk okuma · 29 Temmuz 2026': '4 min read · July 29, 2026',
    '5 dk okuma · 4 Ağustos 2026': '5 min read · August 4, 2026',
    'AI otomasyonu bir ajansı nasıl değiştirir? — yazıyı oku': 'How AI automation changes an agency — read the article',
    'İçerik üretimini sisteme bağlamanın 3 yolu — yazıyı oku': '3 ways to tie content production to a system — read the article',
    'Marka kimliğinde tutarlılığı AI ile korumak — yazıyı oku': 'Keeping brand identity consistent with AI — read the article',

    /* ---- iletisim.html: select seçenekleri ---- */
    'Danışmanlık — AI & otomasyon stratejisi': 'Advisory — AI & automation strategy',
    'Elvora Flow — AI otomasyon': 'Elvora Flow — AI automation',

    /* ---- Ana sayfa: İki Hat sadeleştirme + bölüm renumaralama ---- */
    'Yol haritası,': 'Roadmap,',
    'karar desteği.': 'decision support.',
    '3 aylık sabit kapsamlı paketlerle özel bir AI ve otomasyon stratejisi çıkarıyoruz. Uygulama bu hatta dahil değil — amaç önce':
      'We build a 3-month, fixed-scope AI and automation strategy. Implementation isn’t part of this track — the goal here is first to clarify',
    'Her gün': 'A pipeline that runs',
    'kendi kendine': 'itself,',
    'çalışan bir akış.': 'every day.',
    'Test edilmiş sistem paketleri: destek agent\'ı, lead triyajı, içerik akışı ve daha fazlası. Kapsam baştan belli, 4–16 haftada canlıya alınır.':
      'Tested system packages: support agent, lead triage, content pipeline and more. Scope is fixed upfront, live in 4–16 weeks.',
    '03 / Modüller': '03 / Modules',
    '04 / Kanıt': '04 / Proof',
    '05 / Süreç': '05 / Process',
    '06 / Yaklaşım': '06 / Approach',
    '07 / Başlarken': '07 / Getting started',

    /* ---- cozumler/flow-*.html: sistem detay sayfaları ---- */
    'Neler dahil?': 'What’s included?',
    'Tüm Flow sistemleri': 'All Flow systems',
    'Elvora Flow — Sistem 01': 'Elvora Flow — System 01',
    'Sık sorulanları, sipariş durumunu ve kargo takibini otomatik yanıtlayan bir destek hattı. Web sitesi ve WhatsApp üzerinden çalışır, cevaplayamadığını insana devreder.':
      'A support line that automatically answers FAQs, order status and shipment tracking. Runs through your website and WhatsApp, and hands off to a human when it can\'t answer.',
    'Destek Agent\'ı — Elvora Flow | Elvora Global': 'Support Agent — Elvora Flow | Elvora Global',
    'Destek Agent\'ı': 'Support Agent',
    'Destek Agent\'ı sizin için mi?': 'Is Support Agent right for you?',
    'Web sitesi canlı sohbet + WhatsApp entegrasyonu': 'Website live chat + WhatsApp integration',
    'Şirket dokümanlarınız üzerinde RAG tabanlı yanıtlama':
      'RAG-based answers over your own documents',
    'Sipariş durumu ve kargo takibi sorgulama': 'Order status and shipment tracking lookups',
    'Çok dilli yanıt desteği': 'Multilingual response support',
    'Duygu analizi ve öncelik etiketleme': 'Sentiment analysis and priority tagging',
    'Kalite ve yanıt süresi paneli': 'Quality and response-time dashboard',
    'Elvora Flow — Sistem 02': 'Elvora Flow — System 02',
    'Gelen formu okuyup sınıflandıran, önceliklendiren ve CRM\'e yazan bir sistem. İlk yanıt otomatik gider, ekip yalnızca sıcak lead\'lere odaklanır.':
      'A system that reads incoming forms, classifies and prioritises them, and writes them to your CRM. The first reply goes out automatically, so the team only focuses on hot leads.',
    'Lead Triyajı — Elvora Flow | Elvora Global': 'Lead Triage — Elvora Flow | Elvora Global',
    'Lead Triyajı': 'Lead Triage',
    'Lead Triyajı sizin için mi?': 'Is Lead Triage right for you?',
    'Form ve gelen kutusu verisinden lead çıkarımı': 'Lead extraction from forms and inbox data',
    'İdeal müşteri profiline göre önceliklendirme':
      'Prioritisation against your ideal customer profile',
    'Kişiselleştirilmiş otomatik ilk yanıt': 'Personalised automatic first reply',
    'CRM\'e çift yönlü senkron': 'Two-way CRM sync',
    'Takvim ve görüşme planlama entegrasyonu': 'Calendar and meeting-scheduling integration',
    'Haftalık pipeline raporu': 'Weekly pipeline report',
    'Elvora Flow — Sistem 03': 'Elvora Flow — System 03',
    'Ürün açıklaması, sosyal medya metni ve görsel varyantını tek akışta üreten, onaya düşüren ve yayınlayan bir sistem.':
      'A system that produces product copy, social posts and visual variants in one pipeline, routes them for approval, and publishes them.',
    'İçerik Akışı — Elvora Flow | Elvora Global': 'Content Pipeline — Elvora Flow | Elvora Global',
    'İçerik Akışı': 'Content Pipeline',
    'İçerik Akışı sizin için mi?': 'Is Content Pipeline right for you?',
    'Marka tonu ve stil kılavuzu eğitimi': 'Brand tone and style-guide training',
    'Blog, sosyal medya ve e-posta formatları': 'Blog, social media and email formats',
    'Görsel ve kapak görseli üretimi': 'Visual and cover-image generation',
    'Yayın takvimi ve otomatik zamanlama': 'Publishing calendar and automatic scheduling',
    'SEO analizi ve anahtar kelime önerisi': 'SEO analysis and keyword suggestions',
    'Aylık performans raporu': 'Monthly performance report',
    'Elvora Flow — Sistem 04': 'Elvora Flow — System 04',
    'Satış, stok ve reklam verisini toplayıp haftalık okunabilir bir özete çeviren sistem. Her pazartesi kutunuzda.':
      'A system that collects sales, inventory and ad data and turns it into a readable weekly summary. In your inbox every Monday.',
    'Rapor Otomasyonu — Elvora Flow | Elvora Global':
      'Report Automation — Elvora Flow | Elvora Global',
    'Rapor Otomasyonu': 'Report Automation',
    'Rapor Otomasyonu sizin için mi?': 'Is Report Automation right for you?',
    'Fatura ve makbuzlardan OCR ile veri çıkarımı': 'OCR data extraction from invoices and receipts',
    'Gider kategorileme': 'Expense categorisation',
    'Sipariş ve stok senkronu': 'Order and inventory sync',
    'Logo / Netsis / Mikro / ERP entegrasyonu': 'Logo / Netsis / Mikro / ERP integration',
    'Anomali tespiti': 'Anomaly detection',
    'Denetim kaydı (audit log)': 'Audit log',
    'Elvora Flow — Sistem 05': 'Elvora Flow — System 05',
    'Stok ve fiyat bilgisini ERP, site ve pazaryeri arasında güncel tutan sistem.':
      'A system that keeps stock and price data in sync across your ERP, website and marketplaces.',
    'Katalog Senkronu — Elvora Flow | Elvora Global': 'Catalog Sync — Elvora Flow | Elvora Global',
    'Katalog Senkronu': 'Catalog Sync',
    'Katalog Senkronu sizin için mi?': 'Is Catalog Sync right for you?',
    '300+ araç entegrasyonu': '300+ tool integrations',
    '2.000+ hazır workflow şablonu': '2,000+ ready-made workflow templates',
    'Prompt tabanlı yeni workflow oluşturma': 'Prompt-based workflow creation',
    'Onay adımları': 'Approval steps',
    'Hata takibi ve bildirim': 'Error tracking and alerts',
    'Ekibe devir desteği': 'Team handover support',
    'Elvora Flow — Sistem 06': 'Elvora Flow — System 06',

    /* ---- cozumler/flow-*.html: 01/Sorun (problem-farkındalık) bölümü + numara kayması ---- */
    '01 / Sorun': '01 / The problem',
    '02 / Kapsam': '02 / Scope',
    '03 / Teslim sonrası': '03 / After delivery',
    'Sistem canlıya alındığında iş bitmiyor — hangi seviyede devam edeceğinize siz karar verirsiniz.':
      'The work isn’t done once the system goes live — you decide which level you continue at.',
    'Bu bende de var, konuşalım': 'This sounds familiar, let’s talk',
    'Aşağıdakilerin hepsi kapsamda': 'Everything below is included',
    '— ekstra ücret yok, sürpriz yok.': '— no extra fees, no surprises.',
    'Satış, stok ve reklam verisinin otomatik toplanması': 'Automatic collection of sales, stock and ad data',
    'Kaynaklar arası veri birleştirme ve temizleme': 'Merging and cleaning data across sources',
    'Haftalık okunabilir özet raporu': 'A readable weekly summary report',
    'E-posta ile otomatik teslim': 'Automatic delivery by email',
    'Anomali ve sapma tespiti': 'Anomaly and deviation detection',
    'Geçmiş dönemlerle karşılaştırmalı görünüm': 'Comparative view against past periods',
    'ERP, site ve pazaryeri arasında çift yönlü senkron': 'Two-way sync between ERP, website and marketplaces',
    'Stok ve fiyat güncellemelerinin otomatik yayılması': 'Automatic propagation of stock and price updates',
    'Ürün eşleştirme ve SKU eşlemesi': 'Product matching and SKU mapping',
    'Tutarsızlık ve hata bildirimi': 'Inconsistency and error alerts',
    'Çoklu pazaryeri desteği (Trendyol, Hepsiburada, Shopify vb.)': 'Multi-marketplace support (Trendyol, Hepsiburada, Shopify, etc.)',
    'Senkron geçmişi ve denetim kaydı': 'Sync history and audit log',
    'Mesai bitince,': 'When office hours end,',
    'müşteri beklemede kalıyor.': 'the customer is left waiting.',
    'Sipariş nerede, kargo ne zaman gelir, iade nasıl yapılır — bu sorular gün boyu, farklı kanallardan tekrar tekrar geliyor. Ekibiniz her defasında aynı cevabı yazıyor; o sırada gerçek bir sorunla ilgilenen müşteri sırada bekliyor.': 'Where’s my order, when does the shipment arrive, how do I return this — the same questions come in over and over, all day, from every channel. Your team writes the same answer each time, while a customer with a real problem waits in the queue.',
    'Mesai saatleri dışında gelen mesaj ise ertesi güne kalıyor. O gecikme müşteride “ilgilenilmiyorum” hissi bırakıyor — üstelik fark etmeden kaybettiğiniz bir satış da olabilir.': 'A message that arrives outside office hours waits until the next day. That delay leaves the customer feeling ignored — and it may be a sale you’re losing without even noticing.',
    'Elvora Flow — Sistem 01 çözüyor': 'Elvora Flow — System 01 solves it',
    'Sorular otomatik yanıtlanır, gerçek sorunlar insana düşer.': 'Questions get answered automatically, real problems go to a human.',
    'Destek agent\'ı sık sorulanları, sipariş durumunu ve kargo takibini 7/24 karşılar; cevaplayamadığını olduğu gibi ekibinize devreder.': 'The support agent handles FAQs, order status and shipment tracking 24/7 — and hands over whatever it can’t answer, as-is, to your team.',
    'İyi bir talep,': 'A good lead',
    'soğuyana kadar bekliyor.': 'waits until it goes cold.',
    'Form doldurulduğunda bildirim gidiyor ama kimse hemen bakmıyor; WhatsApp\'tan gelen mesaj başka bir kişiye, Instagram\'dan geleni ise kimse görmüyor. Talep hangi kanaldan geldiyse oradan takip ediliyor — ama hiçbiri tek bir yerde toplanmıyor.': 'A notification goes out when the form is submitted, but nobody looks right away; the WhatsApp message goes to someone else, and nobody sees the one from Instagram. Each lead gets followed up through whatever channel it arrived on — but none of it lands in one place.',
    'Bu arada satın almaya en yakın müşteri ile sadece bilgi almak isteyen aynı sırada bekliyor. Kim öncelikli, kim değil — bunu genelde kimse bilmiyor, en deneyimli satış temsilcisi bile.': 'Meanwhile, the customer closest to buying waits in the same queue as someone just asking for information. Who’s a priority and who isn’t — usually nobody knows, not even your most experienced salesperson.',
    'Elvora Flow — Sistem 02 çözüyor': 'Elvora Flow — System 02 solves it',
    'Her talep aynı anda sınıflandırılır ve önceliklendirilir.': 'Every lead is classified and prioritised the moment it arrives.',
    'Lead triyajı gelen talebi kanaldan bağımsız toplar, önceliklendirir, CRM\'e yazar ve ilk yanıtı otomatik gönderir.': 'Lead triage collects every request regardless of channel, prioritises it, writes it to the CRM and sends the first reply automatically.',
    'O kişi izne çıkınca,': 'The moment that one person',
    'akış duruyor.': 'takes leave, the pipeline stops.',
    'Ürün açıklaması, sosyal medya metni, görsel varyantı — hepsi tek bir kişinin masasından geçiyor. O kişi yoğunsa yayın gecikir, izinliyse tamamen durur.': 'Product descriptions, social copy, image variants — all of it passes through one person’s desk. When they’re busy, publishing slips; when they’re on leave, it stops entirely.',
    'Düzensiz yayın, algoritmanın sizi daha az göstermesi demek. Sorun içerik kalitesi değil — üretimin tek bir kişiye bağlı olması.': 'Irregular publishing means the algorithm shows you less. The problem isn’t content quality — it’s that production depends on a single person.',
    'Elvora Flow — Sistem 03 çözüyor': 'Elvora Flow — System 03 solves it',
    'Üretim bir kişiye değil, bir akışa bağlanır.': 'Production is wired to a pipeline, not a person.',
    'İçerik akışı; açıklama, metin ve görsel varyantını tek seferde üretir, onaya düşürür, yayınlar.': 'The content pipeline produces the description, copy and image variant in one pass, sends it for approval, and publishes it.',
    'Karar,': 'The decision',
    'raporu bekliyor.': 'is waiting on the report.',
    'Satış, stok ve reklam verisi üç farklı yerde duruyor. Pazartesi sabahı biri oturup bunları tek tabloda birleştiriyor — saatler sürüyor, bazen bir hücre yanlış kopyalanıyor.': 'Sales, stock and ad data live in three different places. Every Monday morning, someone sits down to merge them into one table — it takes hours, and sometimes a cell gets copied wrong.',
    'O rapor hazır olana kadar hangi ürünün tükendiğini, hangi kampanyanın para yaktığını kimse net bilmiyor. Karar, veri değil raporun kendisini bekliyor.': 'Until that report is ready, nobody knows for certain what’s out of stock or which campaign is burning money. The decision isn’t waiting on data — it’s waiting on the report itself.',
    'Elvora Flow — Sistem 04 çözüyor': 'Elvora Flow — System 04 solves it',
    'Veri kendiliğinden toplanır, özet kendiliğinden çıkar.': 'Data collects itself, the summary writes itself.',
    'Rapor otomasyonu satış, stok ve reklam verisini toplayıp okunabilir bir özete çevirir — her pazartesi kutunuzda.': 'Report automation gathers sales, stock and ad data and turns it into a readable summary — in your inbox every Monday.',
    'Sitede stokta,': 'In stock on the website,',
    'depoda yok.': 'not in the warehouse.',
    'Fiyatı ERP\'de güncellediniz, ama sitede eski fiyat görünüyor. Depoda tükenen ürün pazaryerinde hâlâ satılabilir görünüyor — sipariş geliyor, karşılayamıyorsunuz.': 'You updated the price in the ERP, but the website still shows the old one. A product that’s sold out in the warehouse still shows as available on the marketplace — the order comes in, and you can’t fulfil it.',
    'Bu tutarsızlıklar elle takip edilemeyecek kadar sık oluyor. Her yanlış fiyat ya da stok bilgisi, ya kaybedilen bir satış ya da iptal edilmesi gereken bir sipariş demek.': 'These mismatches happen too often to track by hand. Every wrong price or stock figure is either a lost sale or an order you have to cancel.',
    'Elvora Flow — Sistem 05 çözüyor': 'Elvora Flow — System 05 solves it',
    'Stok ve fiyat, tüm kanallarda aynı anda güncel kalır.': 'Stock and price stay current across every channel, at the same time.',
    'Katalog senkronu; ERP, site ve pazaryeri arasında stok ve fiyat bilgisini otomatik günceller.': 'Catalogue sync automatically updates stock and pricing across the ERP, website and marketplaces.',
    'Sizin işiniz,': 'Your process',
    'kalıba uymuyor.': 'doesn’t fit the mould.',
    'Yukarıdaki beş sistem çoğu işletmenin tekrar eden problemini karşılıyor. Ama sizin sürecinizin kendine has bir adımı olabilir — belirli bir onay zinciri, özel bir entegrasyon, sektörünüze özgü bir kontrol noktası.': 'The five systems above cover the repetitive problems most businesses share. But your process might have a step of its own — a specific approval chain, a custom integration, a control point unique to your industry.',
    'Bu tür işler genelde bir Excel dosyasında, birkaç kişinin hafızasında ya da elle yürütülen bir adımda yaşıyor — o kişi izinliyken ya da dosya bozulduğunda süreç tamamen duruyor.': 'Work like that usually lives in a spreadsheet, in a few people’s memory, or in a manual step — and the whole process stalls the moment that person is away or the file breaks.',
    'Elvora Flow — Sistem 06 çözüyor': 'Elvora Flow — System 06 solves it',
    'Kalıba uymayan süreç, sizin için kurulur.': 'A process that doesn’t fit the mould gets built for you.',
    'Özel akış; yukarıdakilere benzemeyen, tekrar eden bir işiniz varsa kapsamı birlikte çıkarıp sizin için kurar.': 'Custom flow: if you have a repetitive process that doesn’t match the systems above, we work out the scope together and build it for you.',
    'Sistem 01': 'System 01',
    'Sistem 02': 'System 02',
    'Sistem 03': 'System 03',
    'Sistem 04': 'System 04',
    'Sistem 05': 'System 05',
    'Sistem 06': 'System 06',
    'Yukarıdakilere benzemeyen, tekrar eden bir işiniz için sıfırdan tasarlanan özel sistem.':
      'A custom system designed from scratch for a recurring job that doesn\'t match any of the above.',
    'Özel Akış — Elvora Flow | Elvora Global': 'Custom Flow — Elvora Flow | Elvora Global',
    'Özel Akış': 'Custom Flow',
    'Özel Akış sizin için mi?': 'Is Custom Flow right for you?',
    'Sektöre özel agent tasarımı': 'Industry-specific agent design',
    'ERP / CRM entegrasyonu': 'ERP / CRM integration',
    'Şirket dokümanlarınız üzerinde RAG sistemi': 'RAG system over your own documents',
    'İnce ayarlı (fine-tuned) modeller': 'Fine-tuned models',
    'Özel panel ve raporlama': 'Custom dashboard and reporting',
    'Bulut veya kendi sunucunuzda çalıştırma seçeneği': 'Cloud or self-hosted deployment option',
    'Her mesaja,': 'A reply to every message,',
    '7/24': 'around the clock',
    'yanıt.': '.',
    'Hiçbir talep': 'No inquiry',
    'gözden kaçmaz.': 'falls through the cracks.',
    'Üretimden yayına,': 'From production to publish,',
    'tek akış.': 'one pipeline.',
    'Veri dağınık,': 'The data is scattered,',
    'özet net.': 'the summary isn’t.',
    'Elle giriş ve': 'Manual entry and',
    'tutarsızlık biter.': 'mismatches end here.',
    'Listede yoksa,': 'Not on the list?',
    'sıfırdan kurarız.': 'We build it from scratch.',

    /* ---- Ana sayfa round 2: koyu/açık ritim, Endüstriler, karşılaştırma ---- */
    '03 / Kanıt': '03 / Proof',
    '04 / Endüstriler': '04 / Industries',
    'Sektörden bağımsız,': 'Industry-agnostic,',
    'probleme bağlı.': 'problem-bound.',
    'Moda': 'Fashion',
    'Mobilya': 'Furniture',
    'Emlak': 'Real estate',
    'E-ticaret': 'E-commerce',
    'Perakende': 'Retail',
    'Kurumsal hizmet': 'Corporate services',
    'Sezonluk kampanya görselleri, ürün çekimleri ve marka kimliğini tek elden, haftalar değil günler içinde üretin.':
      'Produce seasonal campaign visuals, product shots and brand identity from one place — in days, not weeks.',
    'Katalog ve reklam içeriğini stüdyo çekimine gerek kalmadan, ürün görsellerinizden üretin.':
      'Produce catalogue and ad content straight from your product photos, no studio shoot required.',
    'İlan görsellerini profesyonel kalitede iyileştirin — boş oda, kötü ışık ve düşük çözünürlük sorununu ortadan kaldırın.':
      'Upgrade listing photos to professional quality — fix empty rooms, poor lighting and low resolution.',
    'Sipariş takibi, destek yanıtları ve stok senkronunu otomatik akışlara bağlayın — ekibiniz tekrar eden işe değil büyümeye odaklansın.':
      'Wire order tracking, support replies and stock sync into automated pipelines — your team focuses on growth, not repetition.',
    'Kampanya içeriği ve şube/kanal bazlı stok-fiyat senkronunu tek sistemden yönetin.':
      'Manage campaign content and branch/channel-level stock-price sync from a single system.',
    'Ekibinizin AI ve otomasyon konusunda doğru yol haritasını çizin, ekip içi okuryazarlığı eğitimle destekleyin.':
      'Chart the right AI and automation roadmap for your team, and back it up with in-house training.',

    /* ---- Round 3: Kurum İçi, Projeler, Endüstriler, nav ---- */
    'Kültür': 'Culture',
    'Kurum İçi': 'In-House',
    'Projeler': 'Projects',
    'Endüstriler': 'Industries',
    'Tüm sektörleri ve modülleri gör': 'See all industries and modules',
    'Kurum İçi — Ekibinize AI eğitimi | Elvora Global':
      'In-House — AI training for your team | Elvora Global',
    'Ekibinize AI öğretmiyoruz, uyguluyoruz. Rol bazlı, uygulamalı AI ve otomasyon eğitimi — Çınar Ezici tarafından bizzat verilir.':
      'We don’t teach AI to your team, we implement it. Role-based, applied AI and automation training — delivered personally by Çınar Ezici.',
    'Ekibinize AI': 'We don’t teach AI',
    'öğretmiyoruz, uyguluyoruz.': 'to your team — we implement it.',
    'Şube müdüründen C-level\'a, ekibinizin AI\'ı günlük işine güvenle katmasını sağlayan uygulamalı programlar. Başarı ölçütü katılım değil — gerçek dönüşüm.':
      'Applied programmes — from branch managers to the C-level — that let your team confidently bring AI into daily work. Success isn’t measured by attendance, but by real transformation.',
    'Programı incele': 'Explore the programme',
    '01 / Neden önemli': '01 / Why it matters',
    'Eğitim veriliyor,': 'Training gets delivered,',
    'uygulanmıyor.': 'not applied.',
    'Uygulanmayan eğitim': 'Training that isn’t applied',
    'Rol bazlı, göreve odaklı eğitimle ilk günden kullanıma geçiliyor — genel geçer sunum değil.':
      'Role-based, task-focused training gets used from day one — not a generic slide deck.',
    'Kontrolsüz kullanım': 'Uncontrolled usage',
    'KVKK uyumlu güvenli kullanım çerçevesi ve gölge AI kullanımının yönetimi eğitimin bir parçası.':
      'A KVKK-compliant safe-usage framework and shadow-AI management are part of the training.',
    'Ölçülemeyen getiri': 'Unmeasurable return',
    'Eğitim öncesi/sonrası ölçüm ve KPI paneliyle somut bir getiri resmi çıkıyor.':
      'Before/after measurement and a KPI dashboard produce a concrete picture of return.',
    'Pilotta takılan denemeler': 'Pilots stuck in place',
    'Pilottan ölçeğe geçiş desteğiyle denemeler rafta kalmıyor.':
      'With pilot-to-scale support, experiments don’t end up shelved.',
    'Bilgi birkaç kişide kalıyor': 'Knowledge stuck with a few people',
    'Kurum içi "AI temsilcisi" ekibi geliştirilerek bilgi kalıcı hale geliyor.':
      'An in-house "AI champion" team is developed so the knowledge stays for good.',
    'Yüzeysel eğitim': 'Surface-level training',
    'n8n ve gerçek otomasyon araçlarıyla, demo değil çalışan çıktı üretiliyor.':
      'With n8n and real automation tools, participants produce working output, not a demo.',
    '02 / Program': '02 / Programme',
    'AI & Otomasyon Okuryazarlığı': 'AI & Automation Literacy',
    'Tek program, tam kapsam': 'One programme, full scope',
    'Ekibinizi': 'It makes your team',
    'AI\'da güvenli hale getirir.': 'confident with AI.',
    'Çalışanların ve yöneticilerin AI\'ı günlük işe güvenli ve verimli şekilde katmasını sağlayan uygulamalı eğitim. Kapsam bir bankanın tüm şube müdürlerinden bir departmanın çekirdek ekibine kadar değişebilir.':
      'Applied training that lets employees and managers bring AI into daily work safely and efficiently. Scope can range from every branch manager at a bank to one department’s core team.',
    'Yönetici brifingi, tam gün atölye, 2-3 günlük kohort veya toplu rollout':
      'Executive briefing, full-day workshop, 2-3 day cohort, or mass rollout',
    'Role özel prompt kılavuzu + dijital tamamlama sertifikası':
      'Role-specific prompt playbook + digital completion certificate',
    'KVKK uyumlu güvenli kullanım modülü': 'KVKK-compliant safe-usage module',
    'Programı konuşalım': 'Let’s talk about the programme',
    '03 / Metodoloji': '03 / Methodology',
    'Beş disiplinli adım.': 'Five disciplined steps.',
    'İhtiyaç analizi': 'Needs analysis',
    '45 dakikalık keşif: KPI eşleştirme, yetkinlik boşlukları, role özel senaryolar.':
      'A 45-minute discovery: KPI mapping, competency gaps, role-specific scenarios.',
    'Özelleştirme': 'Customisation',
    'Sektöre ve role özel örnek olaylar, prompt kütüphanesi, alıştırmalar.':
      'Industry- and role-specific case studies, prompt library, exercises.',
    'Uygulamalı eğitim': 'Applied training',
    'Canlı demo, gerçek görevler, araç kurulumu — katılımcılar kendi çıktısını üretir.':
      'Live demos, real tasks, tool setup — participants produce their own output.',
    'Eylem planı': 'Action plan',
    '30-60-90 günlük uygulama görevleri, öncesi/sonrası ölçüm, sertifika.':
      '30-60-90 day implementation tasks, before/after measurement, certificate.',
    'Takip & mentorluk': 'Follow-up & mentorship',
    'İsteğe bağlı retainer — KPI takibi, ileri atölyeler, sürekli iyileştirme.':
      'Optional retainer — KPI tracking, advanced workshops, continuous improvement.',
    '04 / Müfredat': '04 / Curriculum',
    'Yedi modül, sektöre göre uyarlanır.': 'Seven modules, adapted by sector.',
    'Temeller & zihniyet': 'Foundations & mindset',
    'AI\'ın yapabildikleri/yapamadıkları, halüsinasyon, güven sınırları.':
      'What AI can and can’t do, hallucination, trust boundaries.',
    'Etkili prompt & bağlam': 'Effective prompting & context',
    'Role özel şablonlar ve kurumsal çerçeveler.':
      'Role-specific templates and corporate frameworks.',
    'Günlük iş akışları': 'Daily workflows',
    'E-posta, rapor, özet, sunum, analiz, toplantı notu.':
      'Email, reports, summaries, presentations, analysis, meeting notes.',
    'Departman uygulamaları': 'Departmental applications',
    'Satış, pazarlama, İK, finans, operasyon senaryoları.':
      'Sales, marketing, HR, finance, operations scenarios.',
    'Güvenlik, etik & uyum': 'Security, ethics & compliance',
    'KVKK, veri gizliliği, gölge AI kullanımının yönetimi.':
      'KVKK, data privacy, shadow-AI management.',
    'Araç turu': 'Tools tour',
    'ChatGPT / Claude / Gemini ve kurumsal araçlar; doğru araç seçimi.':
      'ChatGPT / Claude / Gemini and enterprise tools; choosing the right one.',
    '05 / Format': '05 / Format',
    'Bir brifingden kuruma yayılan eğitime.': 'From one briefing to organisation-wide training.',
    'Format': 'Format',
    'Süre': 'Duration',
    'Keşif görüşmesi': 'Discovery call',
    '45 dk · ücretsiz': '45 min · free',
    'AI olgunluk ön değerlendirmesi': 'AI-maturity pre-assessment',
    'Yönetim brifingi': 'Executive briefing',
    '2–3 saat': '2–3 hours',
    'Yönetim ekibi': 'Executive team',
    'Atölye': 'Workshop',
    'Departman': 'Department',
    'Kohort': 'Cohort',
    '2–3 gün': '2–3 days',
    'Çekirdek ekip, herkes kendi otomasyonunu kurar':
      'Core team, everyone builds their own automation',
    'Kurumsal rollout': 'Enterprise rollout',
    'Özel takvim': 'Custom schedule',
    'Çoklu departman / lokasyon': 'Multiple departments / locations',
    'Fiyatlandırma kurumun büyüklüğüne ve kapsamına göre netleşir — sürpriz maliyet yok.':
      'Pricing is set based on your organisation’s size and scope — no surprise costs.',
    '06 / Sık sorulanlar': '06 / FAQ',
    'Yerinde mi, online mi?': 'On-site or online?',
    'İkisi de mümkün — yerinde atölye, online oturum ya da hibrit. Toplu rollout için tekrarlayan online oturumlar tercih edilir.':
      'Both work — on-site workshops, online sessions, or hybrid. Mass rollout favours repeated online sessions.',
    'Kaç kişiye kadar?': 'How many people?',
    'Tam gün atölyeler grup başına en fazla 25 kişi; daha büyük kohortlar çoklu grup halinde planlanır.':
      'Full-day workshops are capped at 25 people per group; larger cohorts are run as multiple groups.',
    'Veri güvenliği nasıl sağlanıyor?': 'How is data security handled?',
    'KVKK uyumlu güvenli kullanım çerçevesi ve gölge AI risk yönetimi müfredatın ayrı bir modülü.':
      'A KVKK-compliant safe-usage framework and shadow-AI risk management are a dedicated curriculum module.',
    'Eğitim sonrası ne oluyor?': 'What happens after the training?',
    'Çıktılar (prompt kılavuzu, sertifika, olgunluk raporu) kurumda kalır. İsteğe bağlı retainer ile uygulama ve KPI takibi devam eder.':
      'The outputs (playbook, certificate, maturity report) stay with your organisation. An optional retainer continues implementation and KPI tracking.',
    'Ekibiniz için doğru programı': 'Let’s design the right programme',
    'birlikte tasarlayalım.': 'for your team together.',
    'Formu doldurun — kurumunuzun AI olgunluğunu değerlendirip doğru formatı önerelim, taahhüt gerektirmez.':
      'Fill in the form — we’ll assess your organisation’s AI maturity and recommend the right format, no obligation.',
    'Gerçek ürünümüz ve konsept çalışmalarımız: hangi modülü nerede kullandığımızı açıkça işaretledik.':
      'Our real product and our concept work: we’ve clearly marked which module we used where.',
    'Bir gerçek ürünümüz, birkaç konsept çalışmamız var. Hangisinin gerçek, hangisinin konsept olduğunu gizlemiyoruz — her kartta açıkça işaretli, ve hangi modülü kullandığımız net.':
      'We have one real product and a handful of concept pieces. We don’t hide which is which — every card is clearly labelled, and the module we used is explicit.',
    '01 / Gerçek ürün': '01 / Real product',
    'Yayında olan tek proje.': 'The one project that’s live.',
    '02 / Konsept çalışmalar': '02 / Concept work',
    'Konsept aşamasında,': 'At concept stage,',
    'sonucu kanıtlanmış.': 'with a proven outcome.',
    'Konsept marka': 'Concept brand',
    'Problem:': 'Problem:',
    'Boş/gerçek dışı görünen ilan fotoğrafları alıcının ilgisini ilk saniyede kaybediyor; sahne kurmak için pahalı fiziksel staging gerekiyor.':
      'Empty, lifeless listing photos lose the buyer’s interest in the first second; staging a room for real means expensive physical setup.',
    'Yaklaşım:': 'Approach:',
    'Elvora Vision\'ın sanal iç düzenleme sistemi kuruldu — boş mekân fotoğrafları saniyeler içinde döşenmiş, satışa hazır görsellere dönüşüyor.':
      'Elvora Vision’s virtual staging system was built — empty-room photos turn into furnished, sale-ready images within seconds.',
    'Beklenen sonuç:': 'Expected outcome:',
    'İlan başına staging maliyetinin ortadan kalkması, yayına çıkış süresinin günlerden dakikalara inmesi.':
      'Staging cost per listing disappears, and time-to-publish drops from days to minutes.',
    'Her renk/kumaş varyantı için ayrı bir stüdyo çekimi gerekiyor; katalog büyüdükçe çekim maliyeti ve takvimi orantısız büyüyor.':
      'Every colour/fabric variant needs its own studio shoot; as the catalogue grows, shoot cost and schedule grow out of proportion.',
    'Elvora Studio\'nun varyant üretim sistemi kuruldu — tek bir gerçek çekimden renk/kumaş varyantları otomatik üretiliyor.':
      'Elvora Studio’s variant-generation system was built — colour/fabric variants are produced automatically from a single real shoot.',
    'Çekim sayısının belirgin şekilde azalması, yeni varyantın kataloğa girme süresinin kısalması.':
      'A clear drop in the number of shoots, and a shorter time for a new variant to reach the catalogue.',
    'Lookbook her sezon yeniden çekim istiyor; tek bir ürünün renk/detay varyasyonu bile ayrı prodüksiyon günü demek.':
      'The lookbook demands a reshoot every season; even a single colour/detail variation means another production day.',
    'Elvora Identity\'nin görsel varyasyon sistemi kuruldu — tek çekimden çoklu kombin/detay varyasyonu üretiliyor.':
      'Elvora Identity’s visual-variation system was built — multiple outfit/detail variations are produced from a single shoot.',
    'Sezonluk prodüksiyon yükünün azalması, lookbook\'un güncel kalma hızının artması.':
      'A lighter seasonal production load, and a lookbook that stays current faster.',
    'Sipariş ve stok verisi ERP, site ve pazaryeri arasında elle senkronlanıyor; ekip zamanının önemli kısmı veri karşılaştırmaya gidiyor.':
      'Order and stock data is synced by hand across the ERP, website and marketplaces; a large share of the team’s time goes into reconciling data.',
    'Elvora Flow\'un katalog senkronu sistemi kurgulandı — stok/fiyat güncellemeleri otomatik akıyor, tutarsızlıklar anlık işaretleniyor.':
      'Elvora Flow’s catalogue-sync system was designed — stock/price updates flow automatically, and mismatches are flagged instantly.',
    'Elle kontrol ihtiyacının büyük ölçüde azalması, ekibin veri karşılaştırmak yerine büyümeye odaklanabilmesi.':
      'A large reduction in manual checking, freeing the team to focus on growth instead of reconciling data.',
    'E-ticaret · Flow': 'E-commerce · Flow',
    'Sizin durumunuza benzer': 'Does a situation like',
    'bir konsept var mı?': 'yours come up here?',
    'Formu doldurun, durumunuzu anlatın — 24 saat içinde dönelim.':
      'Fill in the form and tell us your situation — we’ll get back to you within 24 hours.',
    'Sektörden bağımsız, probleme bağlı. Elvora\'nın modülleri hangi sektörde hangi problemi çözüyor.':
      'Industry-agnostic, problem-bound. Which Elvora module solves which problem, in which industry.',
    'Modüller belirli bir sektöre göre kurulmadı — tekrar eden probleme göre kuruldu. Aşağıda, hangi sektörde hangi modülün devreye girdiğini görebilirsiniz.':
      'The modules weren’t built around a specific industry — they were built around a recurring problem. Below you can see which module applies in which industry.',
    '01 / Sektörler': '01 / Industries',
    'Altı alan,': 'Six areas,',
    'dört modül.': 'four modules.',
    'Listenizde olmayan bir sektörden misiniz? Modüller probleme göre kurulu — sektörünüz burada olmasa da konuşmaya değer.':
      'Not seeing your industry on the list? The modules are built around the problem — even if your industry isn’t here, it’s worth talking.',
    'Sektörünüz için': 'Let’s find the right module',
    'doğru modülü bulalım.': 'for your industry.',
    /* ---- endustriler/*.html: sektör detay sayfaları ---- */
    'Kurumsal Hizmet': 'Corporate Services',
    'Moda — Endüstriler | Elvora Global': 'Fashion — Industries | Elvora Global',
    'Koleksiyon her sezon': 'Collections shouldn’t need',
    'yeniden çekilmesin.': 'a reshoot every season.',
    'Marka kimliğinden kampanya görseline, moda markalarının tekrar eden iki problemine iki modülle çözüm üretiyoruz.':
      'From brand identity to campaign visuals — two modules solving two recurring problems for fashion brands.',
    'Moda için': 'For fashion:',
    'Marka kimliği dağınık': 'Brand identity is scattered',
    'Logo, palet, tipografi farklı yerlerde farklı uygulanıyor. Identity modülü yazılı bir kural seti kurar — her üretim aynı görsel dile oturur.':
      'Logo, palette and typography get applied differently in different places. The Identity module writes down a rule set — every output lands in the same visual language.',
    'Her varyant yeniden çekim istiyor': 'Every variant needs a reshoot',
    'Aynı ürünün farklı renk/kombin varyantı için yeniden fotoğraf çekmek pahalı ve yavaş. Studio modülü mevcut çekimden varyant üretir.':
      'Reshooting the same product in a different colour or outfit is expensive and slow. The Studio module produces variants from an existing shoot.',
    'Mobilya — Endüstriler | Elvora Global': 'Furniture — Industries | Elvora Global',
    'Her kumaş varyantı için': 'No reshoot needed',
    'yeniden çekim yok.': 'for every fabric variant.',
    'Mobilya markalarında aynı ürün farklı kumaş/renk seçenekleriyle satılıyor — her biri için ayrı çekim yapmak yerine mevcut görselden varyant üretiyoruz.':
      'Furniture brands sell the same product in different fabric/colour options — instead of a separate shoot for each, we generate variants from the existing image.',
    'Mobilya için': 'For furniture:',
    'Katalog varyantı maliyetli': 'Catalogue variants are costly',
    'Bir koltuğun 8 farklı kumaş seçeneği varsa, 8 ayrı çekim yerine tek çekimden 8 varyant üretilir.':
      'If a sofa has 8 fabric options, instead of 8 separate shoots, 8 variants are produced from one.',
    'Emlak — Endüstriler | Elvora Global': 'Real Estate — Industries | Elvora Global',
    'Boş daire,': 'An empty flat,',
    'dolu görünsün.': 'made to look furnished.',
    'Boş bir dairenin satış/kirası, döşenmiş bir daireden daha zor. Sanal iç düzenleme, fiziksel staging maliyeti olmadan aynı etkiyi üretir.':
      'An empty flat is harder to sell or rent than a furnished one. Virtual staging produces the same effect without the cost of physical staging.',
    'Emlak için': 'For real estate:',
    'Boş dairenin satışı zor': 'Empty flats are hard to sell',
    'Fiziksel mobilya kiralamak pahalı ve yavaş. Vision modülü boş odayı sanal olarak döşer — gerçekçi, hızlı, tekrar kullanılabilir.':
      'Renting physical furniture is expensive and slow. The Vision module stages the empty room virtually — realistic, fast, reusable.',
    'E-ticaret — Endüstriler | Elvora Global': 'E-commerce — Industries | Elvora Global',
    'Stok verisi dağınık,': 'Stock data is scattered,',
    'sistem tek.': 'the system isn’t.',
    'Sipariş, stok ve müşteri talebi genelde birden fazla sistemde yaşıyor. Flow bunları tek akışa bağlar.':
      'Orders, stock and customer requests usually live across several systems. Flow wires them into one pipeline.',
    'E-ticaret için': 'For e-commerce:',
    'Katalog senkronu elle yapılıyor': 'Catalogue sync is done by hand',
    'Stok ve fiyat bilgisi ERP, site ve pazaryeri arasında elle güncelleniyor — Flow bunu otomatik senkronlar.':
      'Stock and price data is updated by hand across the ERP, website and marketplaces — Flow syncs it automatically.',
    'Destek talepleri yanıtsız kalıyor': 'Support requests go unanswered',
    'Sipariş durumu ve kargo takibi soruları 7/24 otomatik yanıtlanır, karmaşık olan insana devredilir.':
      'Order-status and shipment-tracking questions get answered automatically around the clock, with complex ones handed off to a person.',
    'Sipariş ve stok verisi ERP, site ve pazaryeri arasında elle senkronlanıyordu. Elvora Flow\'un katalog senkronu sistemi kurgulandı — güncellemeler otomatik akıyor, tutarsızlıklar anlık işaretleniyor.':
      'Order and stock data used to be synced by hand across the ERP, website and marketplaces. Elvora Flow’s catalogue-sync system was designed — updates now flow automatically, and mismatches are flagged instantly.',
    'Perakende — Endüstriler | Elvora Global': 'Retail — Industries | Elvora Global',
    'Rapor beklemeyin,': 'Don’t wait on the report —',
    'pazartesi kutunuzda olsun.': 'have it in your inbox by Monday.',
    'Perakende operasyonunda satış ve stok verisini bir araya getirmek genelde birinin haftasını alıyor. Flow bunu otomatikleştirir, Studio kampanya içeriğini besler.':
      'Pulling sales and stock data together usually costs someone a week in retail operations. Flow automates it, and Studio feeds the campaign content.',
    'Perakende için': 'For retail:',
    'Haftalık raporlar elle hazırlanıyor': 'Weekly reports are put together by hand',
    'Satış, stok ve reklam verisi toplanıp okunabilir bir özete çevrilir — her pazartesi otomatik.':
      'Sales, stock and ad data is collected and turned into a readable summary — automatically, every Monday.',
    'Kampanya görseli yetişmiyor': 'Campaign visuals don’t keep up',
    'Sezonluk kampanya için görsel/video üretimi konseptten teslime hızlanır.':
      'Visual and video production for seasonal campaigns speeds up from concept to delivery.',
    'Kurumsal Hizmet — Endüstriler | Elvora Global':
      'Corporate Services — Industries | Elvora Global',
    'sonra ekip yetkinliği.': 'then team capability.',
    'Kurumsal hizmet şirketlerinde AI\'ın nereye kurulacağı ve ekibin nasıl kullanacağı iki ayrı problem — ikisini de tek çatı altında çözüyoruz.':
      'At corporate service firms, where AI gets deployed and how the team uses it are two separate problems — we solve both under one roof.',
    'Kurumsal Hizmet için': 'For corporate services:',
    'Yol haritası belirsiz': 'The roadmap is unclear',
    'Süreç envanteri ve AI fırsat analiziyle nereden başlanacağı netleşir.':
      'A process inventory and AI opportunity analysis clarify where to start.',
    'Ekip AI\'ı güvenle kullanmıyor': 'The team isn’t confident using AI',
    'Rol bazlı, uygulamalı eğitimle ekip günlük işine güvenle AI katar.':
      'Role-based, applied training lets the team bring AI into daily work with confidence.',
    '01 / Çözdüğümüz problemler': '01 / Problems we solve',
    '02 / Örnek': '02 / Example',
    'Tüm sektörler': 'All industries',
    'doğru modülü konuşalım.': 'let’s talk about the right module.',
    'Projeyi gör': 'See the project',

    /* ---- Ana sayfa: leftflow düzenine hizalama (Yaklaşım taşındı, Kurucu eklendi) ---- */
    '04 / Yaklaşım': '04 / Approach',
    'AI\'ı doğru kuran': 'The model that builds AI',
    'model.': 'the right way.',
    '06 / Kurucu': '06 / Founder',
    'Daha fazla': 'More',
    'Tüm projeleri gör': 'See all projects',
    'Nasıl çözüyoruz?': 'How do we solve it?',

    /* ---- EN kapsam denetimi: gerçek DOM metin düğümü kırılımına göre
       eksik/hatalı eşleşen girişler (round 5) ---- */

    /* Paylaşılan CTA bandı başlığı — birçok sayfada <span> ile bölünüyor,
       eski tek-parça çeviri hiç eşleşmiyordu. */
    'Hangi modülle başlayacağınızı': 'You don’t need to know',
    'bilmeniz gerekmiyor.': 'which module you need.',
    'Kısa formu doldurun — ne yapmak istediğinizi anlatın, doğru modülü birlikte belirleyelim.':
      'Fill in the short form — tell us what you want to do, and we’ll work out the right module together.',

    /* index.html — 01/Durum paragrafları, <strong> ile bölünüyor */
    'Vibe coding ile bir ürünü günler içinde ayağa kaldırmak mümkün. Sonuç: her hafta yüzlerce yeni uygulama, hepsi iyi, hepsi görünmez. Ayrışan taraf ürünü yapan değil,':
      'With vibe coding you can stand a product up in days. The result: hundreds of new apps every week, all decent, all invisible. What separates you isn’t building it — it’s',
    'Ama organik içerik hâlâ kişiye bağlı: birinin oturup çekmesi, yazması, yayınlaması gerekiyor. O kişi yoksa akış duruyor. Elvora bu işi bir kişiye değil':
      'But organic content still depends on one person: someone has to shoot it, write it, publish it. If that person is unavailable, the flow stops. Elvora ties this not to a person, but to',
    'bağlıyor — üretim, onay ve yayın tek akışta yürüyor.':
      '— production, approval and publishing all run in a single flow.',

    /* danismanlik.html — hero lede'nin <strong>'dan sonraki parçası eksikti */
    'netleştirmek. Hazır olduğunuzda Flow ve diğer modüllerle uygularız.':
      'first. Once you’re ready, we implement it through Flow and the other modules.',
    '3 workflow PRD\'si': '3 workflow PRDs',

    /* cozumler/flow-*.html — 6 sistem detay sayfası ortak etiketleri */
    '01 / Kapsam': '01 / Scope',
    '02 / Teslim sonrası': '02 / After delivery',
    'sizin için mi?': 'right for you?',
    '← Özel akış': '← Custom flow',
    'Özel akış →': 'Custom flow →',
    '← Lead triyajı': '← Lead triage',
    'Lead triyajı →': 'Lead triage →',
    '← Destek agent\'ı': '← Support agent',
    'Destek agent\'ı →': 'Support agent →',
    '← İçerik akışı': '← Content flow',
    'İçerik akışı →': 'Content flow →',
    '← Rapor otomasyonu': '← Report automation',
    'Rapor otomasyonu →': 'Report automation →',
    '← Katalog senkronu': '← Catalogue sync',
    'Katalog senkronu →': 'Catalogue sync →',

    /* endustriler/*.html — hero etiketleri ve modül alt yazıları */
    'Endüstriler — Moda': 'Industries — Fashion',
    'Endüstriler — Mobilya': 'Industries — Furniture',
    'Endüstriler — Emlak': 'Industries — Real Estate',
    'Endüstriler — E-ticaret': 'Industries — E-commerce',
    'Endüstriler — Perakende': 'Industries — Retail',
    'Endüstriler — Kurumsal Hizmet': 'Industries — Corporate Services',
    'Danışmanlık · Kurum İçi.': 'Advisory · In-House.',
    'Danışmanlık · Kurum İçi': 'Advisory · In-House',

    /* cozumler/flow-*.html — kapanış CTA'sının lede'i (ortak) */
    'Kısa formu doldurun — durumunuzu anlatın, kapsamı birlikte netleştirelim.':
      'Fill in the short form — tell us your situation, and we’ll narrow down the scope together.',
    /* endustriler/*.html — kapanış CTA'sının lede'i (ortak) */
    'Kısa formu doldurun — durumunuzu anlatın, doğru modülü birlikte belirleyelim.':
      'Fill in the short form — tell us your situation, and we’ll work out the right module together.',

    /* danismanlik.html — hero lede'nin <strong>'dan önceki parçası eksikti */
    '3 aylık sabit kapsamlı strateji paketleri: süreç envanteri, AI fırsat analizi ve yönetim kurulu sunumuyla biten bir yol haritası. Uygulama bu hatta dahil değil — burada amaç':
      'Fixed-scope, 3-month strategy packages ending in a roadmap with process inventory, AI opportunity analysis and a board presentation. Implementation isn’t part of this track — the goal here is to clarify',

    /* index.html — 01/Durum ilk paragrafın <strong>'dan sonraki son parçası unutulmuştu */
    'oluyor.': '.',

    /* index.html — Süreç adımı: kaynakta yarım çizgi (–) kullanılıyor, eski
       girişte kısa çizgi (-) vardı, hiç eşleşmiyordu. */
    'Akış kurulur, sizin verinizle test edilir, üzerinden birlikte geçilir. Tipik olarak 3–8 hafta.':
      'The pipeline is set up, tested with your own data, and walked through together. Typically 3–8 weeks.',

    /* ---- hizmetler/*.html: 7 yeni hizmet sayfası — ortak etiketler ---- */
    'Hizmet': 'Service',
    '04 / Teknoloji': '04 / Technology',
    'Neler yapıyoruz?': 'What do we do?',
    'Kullandığımız araçlar.': 'The tools we use.',
    'Elvora Flow çözüyor': 'Elvora Flow solves it',
    'Elvora çözüyor': 'Elvora solves it',

    /* ---- hizmetler/workflow-otomasyonu.html ---- */
    'İşiniz nasıl akıyor,': 'How your work flows,',
    'biz onu sisteme bağlıyoruz.': 'we wire it into a system.',
    'n8n, Make ve özel entegrasyonlarla iş süreçlerinizi birbirine bağlıyor, otomatikleştiriyor ve büyüdükçe bozulmayacak şekilde kuruyoruz.':
      'We connect your business processes with n8n, Make and custom integrations, automate them, and build them to hold up as you grow.',
    'Elvora Flow\'u incele': 'Explore Elvora Flow',
    'Aynı veri,': 'The same data,',
    'üç farklı yere elle giriliyor.': 'gets entered by hand in three different places.',
    'Sipariş sistemi, CRM, muhasebe — hepsi ayrı adalar. Bir bilgi değiştiğinde biri oturup üç yere de elle işlemesi gerekiyor; kimse hangisinin güncel olduğundan emin olamıyor.':
      'Order system, CRM, accounting — all separate islands. When one piece of information changes, someone has to sit down and enter it in all three by hand; nobody’s sure which one is current.',
    'Tetikleyici tabanlı bir aksiyon (yeni sipariş geldiğinde otomatik bildirim, stok azalınca otomatik uyarı gibi) kurulmadığı için her şey birinin fark edip harekete geçmesine bağlı kalıyor.':
      'Without a trigger-based action in place — an automatic alert on a new order, a warning when stock runs low — everything depends on someone noticing and stepping in.',
    'Tek akış, tek doğru kaynak.': 'One pipeline, one source of truth.',
    'Araçlarınız birbirine konuşur, veri tek noktadan akar; insan yalnızca istisnalarda devreye girer.':
      'Your tools talk to each other, data flows from a single point, and a person only steps in for the exceptions.',
    'Süreç haritalama': 'Process mapping',
    'Verinin nereden nereye, hangi adımlardan geçerek aktığını çıkarıyoruz — kurulumdan önce netleşiyor.':
      'We map where the data comes from, where it goes, and which steps it passes through — clarified before we build anything.',
    'Araç entegrasyonu': 'Tool integration',
    'CRM, e-posta, takvim, muhasebe — kullandığınız araçları birbirine bağlıyoruz.':
      'CRM, email, calendar, accounting — we connect the tools you already use to each other.',
    'Tetikleyici tabanlı otomasyon': 'Trigger-based automation',
    'Bir şey değiştiğinde sistem otomatik harekete geçer — beklemek yok.':
      'When something changes, the system acts automatically — no waiting around.',
    'Hata & istisna yönetimi': 'Error & exception handling',
    'Akış bir yerde takılırsa sessizce kaybolmaz — işaretlenir, ekibe bildirilir.':
      'If the flow gets stuck somewhere, it doesn’t vanish quietly — it gets flagged and the team is notified.',
    'Raporlama & görünürlük': 'Reporting & visibility',
    'Akışın ne yaptığını görebilirsiniz — kara kutu değil.':
      'You can see what the pipeline is doing — it’s not a black box.',
    'Bakım & büyütme': 'Maintenance & growth',
    'İş büyüdükçe akış da büyür — sıfırdan kurmadan yeni adım ekleriz.':
      'As the business grows, the pipeline grows with it — we add new steps without rebuilding from scratch.',
    'Verinin şu an nasıl aktığını ve nerede tıkandığını birlikte yazıyoruz. Tek görüşme.':
      'We write down together how the data flows today and where it stalls. One session.',

    /* ---- hizmetler/ai-otomasyon.html ---- */
    'Karar veren otomasyon,': 'Automation that decides,',
    'sadece çalışan otomasyon değil.': 'not just automation that runs.',
    'Araçları birbirine bağlamak yetmiyor; akışın içinde kim önce cevaplanacak, hangi talep insana gidecek gibi kararlar da var. Elvora\'nın AI otomasyonu bu kararları modele veriyor — sınıflandırır, önceliklendirir, gerektiğinde devreder.':
      'Connecting tools isn’t enough — inside the flow there are decisions too: who gets answered first, which request goes to a person. Elvora’s AI automation hands those decisions to the model — it classifies, prioritises, and hands off when needed.',
    'Destek agent\'ını incele': 'Explore Support Agent',
    'Akış hızlı,': 'The pipeline is fast,',
    'karar hâlâ yavaş.': 'the decision is still slow.',
    'Otomasyon kurulmuş, tetikleyiciler çalışıyor, veri doğru yere gidiyor — ama akışın ortasında hâlâ bir insan bekliyor. "Bu talep acil mi?", "Bu lead\'i kim arasın?", "Bu mesaja ne cevap verilmeli?" soruları geldiğinde sistem duruyor, birinin ekrana bakıp karar vermesi gerekiyor.':
      'The automation is built, the triggers fire, data goes where it should — but a person is still waiting in the middle of the flow. When questions like "Is this urgent?", "Who should call this lead?", "What should the reply say?" come up, the system stops and someone has to look at the screen and decide.',
    'Sonuç: gece gelen bir destek talebi sabaha kadar bekliyor, sıcak bir lead soğuyana kadar kimse fark etmiyor, öncelik sırası kimin o an müsait olduğuna göre şekilleniyor. Otomasyonun hızı, karar noktasında insan hızına geriliyor.':
      'The result: a support request that comes in overnight waits until morning, a hot lead goes cold before anyone notices, and the priority order depends on who happens to be free at the time. The automation’s speed drops back to human speed right at the decision point.',
    'Sistem sadece taşımaz, karar verir.': 'The system doesn’t just move data — it decides.',
    'Elvora Flow\'daki sistemler yalnızca veri taşımaz, sınıflandırır ve önceliklendirir — destek agent\'ı ve lead triyajı bunun kanıtı.':
      'The systems inside Elvora Flow don’t just move data — they classify and prioritise it. Support Agent and Lead Triage are the proof.',
    'Sınıflandırma modelleri': 'Classification models',
    'Gelen talebi, mesajı ya da lead\'i kategorisine ve aciliyetine göre otomatik ayırıyoruz — elle etiketleme yok.':
      'We automatically sort incoming requests, messages or leads by category and urgency — no manual tagging.',
    'Otonom yanıt üretimi': 'Autonomous reply generation',
    'Sık tekrarlanan sorulara ve standart taleplere sistem kendi cevabını üretip gönderiyor, insan sadece istisnalarda giriyor.':
      'For frequently repeated questions and standard requests, the system writes and sends its own reply — a person only steps in for exceptions.',
    'Önceliklendirme mantığı': 'Prioritisation logic',
    'Hangi işin önce ele alınacağına dair kuralları modele öğretiyoruz — sıcak lead soğumadan, acil talep beklemeden öne çıkıyor.':
      'We teach the model the rules for what gets handled first — a hot lead surfaces before it cools, an urgent request before it waits.',
    'İnsan-devir noktaları': 'Human hand-off points',
    'Modelin emin olmadığı ya da riskli gördüğü her durum için net bir devir kuralı tanımlıyoruz — sessizce yanlış karar verilmiyor.':
      'For every case the model is unsure about or flags as risky, we define a clear hand-off rule — no wrong decision slips through quietly.',
    'Model seçimi & güvenlik': 'Model selection & safety',
    'İşe uygun modeli seçiyor, prompt\'ları ve erişimi sınırlıyoruz — hız kadar kontrol de kurulumun parçası.':
      'We pick the right model for the job and limit prompts and access — control is as much a part of the build as speed.',
    'Sürekli iyileştirme': 'Continuous improvement',
    'Gerçek kararları izleyip modelin nerede yanıldığını görüyor, prompt ve kuralları buna göre güncelliyoruz.':
      'We track real decisions, see where the model gets it wrong, and update prompts and rules accordingly.',
    'Karar noktalarını haritalama': 'Mapping decision points',
    'Akışın neresinde hâlâ bir insanın karar verdiğini birlikte çıkarıyoruz — hangisi modele devredilebilir, hangisi devredilemez.':
      'We map together where a person is still making the call in the flow — which decisions can go to the model, and which can’t.',
    'Model/prompt tasarımı': 'Model / prompt design',
    'Karar mantığını modele öğretiyoruz — sınıflandırma kuralları, prompt\'lar ve devir eşikleri birlikte netleşiyor.':
      'We teach the decision logic to the model — classification rules, prompts and hand-off thresholds are settled together.',
    'Test & devreye alma': 'Test & rollout',
    'Gerçek verinizle test ediyor, yanlış kararları düzeltiyor, sonra canlıya alıyoruz. Tipik olarak 3–8 hafta.':
      'We test with your real data, correct wrong decisions, then go live. Typically 3–8 weeks.',
    'İzleme & iyileştirme': 'Monitoring & improvement',
    'Model kararlarını görünür kılıyor, zaman içinde doğruluğunu artırıyoruz. İlk 90 gün destek dahil.':
      'We make the model’s decisions visible and improve their accuracy over time. The first 90 days of support are included.',
    'CRM entegrasyonları': 'CRM integrations',
    'Prompt orkestrasyonu': 'Prompt orchestration',

    /* ---- hizmetler/ozel-ai-cozumleri.html ---- */
    'Hazır kalıba sığmayan problemin,': 'A problem that doesn’t fit a template,',
    'hazır kalıba sığmayan çözümü.': 'a solution that doesn’t either.',
    'Standart SaaS araçları ortalama kullanıcı için tasarlanır — sizin iş akışınız için değil. Elvora, rafta duran bir ürünü size zorla uydurmak yerine, sıfırdan sadece sizin süreciniz için çalışan sistemler kurar.':
      'Standard SaaS tools are designed for the average user — not for your workflow. Instead of forcing an off-the-shelf product to fit you, Elvora builds systems from scratch that work only for your process.',
    'Özel akışı incele': 'Explore Custom Flow',
    'Araç size uymuyorsa,': 'If the tool doesn’t fit you,',
    'siz araca uymaya başlarsınız.': 'you start fitting the tool.',
    'Hazır SaaS araçları sizin iş akışınıza değil, ortalama kullanıcıya göre tasarlanmış. Ekibiniz her gün o farkı kapatmak için ekstra tıklama, ekstra tablo, ekstra "aslında biz böyle yapmıyoruz ama" alışkanlığı biriktiriyor.':
      'Off-the-shelf SaaS tools are built for the average user, not for your workflow. Every day your team accumulates extra clicks, extra spreadsheets, extra "that\'s not really how we do it, but" habits to close the gap.',
    'Zamanla süreç, aracın izin verdiği şekle bükülüyor — aracın süreciniz için bükülmesi gerekirken. Sonuçta kimse yazılımın neden böyle çalıştığını hatırlamıyor, sadece etrafından dolaşmayı öğreniyor.':
      'Over time the process bends into whatever shape the tool allows — when it should be the tool bending to fit your process. Eventually nobody remembers why the software works the way it does; they just learn to work around it.',
    'Özel akış — sıfırdan sizin süreciniz için kurulan sistem.': 'Custom flow — a system built from scratch for your process.',
    'Bu, tam olarak Elvora Flow\'un "Özel akış" sisteminin yaptığı iş: hazır şablon değil, sizin operasyonunuza göre baştan tasarlanmış bir mimari.':
      'This is exactly what Elvora Flow’s "Custom flow" system does: not a ready-made template, but an architecture designed from the ground up around your operation.',
    'İşin gerçek akışını, istisnalarını ve darboğazlarını saha görüşmeleriyle çıkarıyoruz — varsayımla değil.':
      'We map the real flow of the work, its exceptions and bottlenecks, through on-the-ground conversations — not assumptions.',
    'Mimari tasarım': 'Architecture design',
    'Sistemi büyüdükçe bozulmayacak şekilde tasarlıyoruz; her modül tek başına anlaşılır ve değiştirilebilir kalıyor.':
      'We design the system so it doesn’t break as it grows; every module stays understandable and replaceable on its own.',
    'Özel entegrasyonlar': 'Custom integrations',
    'Kullandığınız araçlar arasında hazır konnektör yoksa kendimiz kuruyoruz — API\'ler bunun için var.':
      'If there’s no ready-made connector between the tools you use, we build one ourselves — that’s what APIs are for.',
    'Veri güvenliği': 'Data security',
    'Hassas veri akışlarını yetkilendirme ve şifreleme katmanlarıyla kuruyoruz; erişim her zaman izlenebilir.':
      'We build sensitive data flows with authorisation and encryption layers; access is always traceable.',
    'Ölçeklenebilirlik': 'Scalability',
    'Bugün on kayıt işleyen sistem, yarın on bin kayıt geldiğinde de aynı güvenle çalışır.':
      'A system that processes ten records today works with the same reliability when ten thousand arrive tomorrow.',
    'Devir & dokümantasyon': 'Handover & documentation',
    'Sistem nasıl çalışıyor, nasıl genişletilir — hepsi yazılı olarak ekibinize teslim edilir.':
      'How the system works, how it’s extended — all of it is handed over to your team in writing.',
    'Süreci baştan sona birlikte anlatıyoruz — kimse aracı dinlemiyor, işi dinliyoruz.':
      'We walk through the whole process together, start to finish — nobody’s listening to the tool, we’re listening to the work.',
    'Mimari & kapsam': 'Architecture & scope',
    'Sistemin nasıl kurulacağı, hangi parçalardan oluşacağı ve takvimi tek belgede netleşiyor.':
      'How the system will be built, what it’s made of, and the timeline are all settled in a single document.',
    'Geliştirme & test': 'Development & testing',
    'Sistem gerçek verinizle kurulur ve test edilir; sürpriz olmadan devreye alınır.':
      'The system is built and tested with your real data, then rolled out without surprises.',
    'Devreye alma': 'Rollout',
    'Ekibiniz sistemi canlıda kullanmaya başlar; ilk dönem yakından destek veriyoruz.':
      'Your team starts using the system live; we stay closely involved through the first stretch.',
    'API entegrasyonları': 'API integrations',
    'Özel veritabanı çözümleri': 'Custom database solutions',

    /* ---- hizmetler/b2b-satis-otomasyonu.html ---- */
    'Sıcak lead soğumadan,': 'Before a hot lead goes cold,',
    'doğru kişiye ulaşsın.': 'get it to the right person.',
    'Farklı kanallardan gelen talepleri otomatik sınıflandırıp önceliklendiren, CRM\'e yazan ve ilk yanıtı gönderen bir sistem kuruyoruz — satış ekibiniz yalnızca sıcak lead\'lere odaklanır.':
      'We build a system that automatically classifies and prioritises requests from every channel, writes them to your CRM, and sends the first reply — your sales team focuses only on hot leads.',
    '$6.500+': '$6,500+',
    'Lead triyajını incele': 'Explore Lead Triage',
    'Talepler her yerden geliyor,': 'Requests come in from everywhere,',
    'önceliği kimse bilmiyor.': 'and nobody knows the priority.',
    'Form, WhatsApp, Instagram DM, telefon — talepler farklı kanallardan geliyor ve her biri ayrı bir kişi tarafından takip ediliyor. Hiçbiri tek bir yerde birleşmiyor, hatta hangi talebin ne zaman geldiği bile net değil.':
      'Form, WhatsApp, Instagram DM, phone — requests come in through different channels, each followed up by a different person. None of it comes together in one place; it’s not even clear when a given request arrived.',
    'Satın almaya hazır bir müşteri ile sadece bilgi toplayan biri aynı sırada bekliyor. Kim önce aranmalı sorusunun cevabını genelde deneyim ve refleks belirliyor — yazılı, tutarlı bir kural değil.':
      'A customer ready to buy waits in the same queue as someone just gathering information. Who gets called first is usually decided by instinct and experience — not a written, consistent rule.',
    'Bu otomasyonu Elvora Flow\'un Lead Triyajı sistemi kurar ve işletir — kanaldan bağımsız toplama, önceliklendirme, CRM senkronu ve otomatik ilk yanıt tek pakette.':
      'Elvora Flow’s Lead Triage system builds and runs this automation — channel-agnostic collection, prioritisation, CRM sync and an automatic first reply, all in one package.',
    'Çok kanallı lead toplama': 'Multi-channel lead collection',
    'Form, WhatsApp, Instagram ve e-posta üzerinden gelen talepleri tek bir akışta topluyoruz — hiçbir kanal gözden kaçmıyor.':
      'We collect requests from forms, WhatsApp, Instagram and email into a single flow — no channel gets missed.',
    'Otomatik sınıflandırma': 'Automatic classification',
    'Gelen her talep içeriğine göre otomatik olarak etiketlenir ve doğru kategoriye yönlendirilir.':
      'Every incoming request is tagged automatically based on its content and routed to the right category.',
    'Önceliklendirme': 'Prioritisation',
    'İdeal müşteri profiline ve satın alma sinyaline göre hangi talebin önce ele alınacağı otomatik belirlenir.':
      'Which request gets handled first is decided automatically, based on your ideal customer profile and buying signals.',
    'CRM senkronu': 'CRM sync',
    'Lead bilgisi elle girilmeden CRM\'inize çift yönlü olarak yazılır, tekrarlanan kayıt oluşmaz.':
      'Lead data is written to your CRM two-way, without manual entry — no duplicate records.',
    'Otomatik ilk yanıt': 'Automatic first reply',
    'Talep geldiği anda kişiselleştirilmiş bir ilk yanıt gönderilir, müşteri beklemede kalmaz.':
      'A personalised first reply goes out the moment a request arrives — the customer never waits.',
    'Pipeline raporlama': 'Pipeline reporting',
    'Hangi kanaldan kaç lead geldiği ve ne kadarının dönüştüğü haftalık olarak raporlanır.':
      'How many leads came from which channel, and how many converted, is reported every week.',
    'Kanal haritalama': 'Channel mapping',
    'Talebin hangi kanallardan geldiğini ve şu an nasıl takip edildiğini birlikte çıkarıyoruz. Tek görüşme.':
      'We map together which channels requests come from and how they’re tracked today. One session.',
    'Kriter & kapsam': 'Criteria & scope',
    'Önceliklendirme kuralları, hedef CRM ve teslim kapsamı tek belgede netleşiyor. Sonradan genişleyen kapsam yok.':
      'Prioritisation rules, target CRM and delivery scope are settled in a single document. No scope creep later.',
    'Kurulum & test': 'Build & test',
    'Otomasyon kurulur, gerçek verinizle test edilir, üzerinden birlikte geçilir. Tipik olarak 5–7 hafta.':
      'The automation is built, tested with your real data and reviewed together. Typically 5–7 weeks.',
    'Sistem nasıl çalışıyor, yazılı olarak teslim edilir. İlk 90 gün destek dahil, sonrası size kalır.':
      'How the system works is handed over in writing. The first 90 days of support are included; after that it’s yours.',

    /* ---- hizmetler/icerik-uretimi.html ---- */
    'İçerik bir kişiye değil,': 'Content shouldn’t depend on one person —',
    'bir sisteme bağlı olsun.': 'it should depend on a system.',
    'Strateji, üretim, yayın ve analiz — içerik sürecinizin her adımını AI destekli bir sistemle kuruyor, tek kişiye bağımlılığı ortadan kaldırıyoruz.':
      'Strategy, production, publishing and analysis — we build every step of your content process with an AI-backed system, removing the dependency on any one person.',
    'Elvora Studio\'yu incele': 'Explore Elvora Studio',
    'O kişi izinliyse,': 'If that one person is away,',
    'içerik de izinli oluyor.': 'so is your content.',
    'İçerik üretimi tek bir kişiye bağlı — metni o yazıyor, görseli o hazırlıyor, yayını o yapıyor. O kişi izinli ya da hastaysa üretim tamamen duruyor, takvim boş kalıyor.':
      'Content production depends on one person — they write the copy, prepare the visuals, do the publishing. If that person is on leave or sick, production stops completely and the calendar sits empty.',
    'Bir kişi hastalanınca içerik değil, marka sesi de duruyor demek. Sorun yaratıcılık eksikliği değil — üretimin bir sisteme değil bir bireye bağlı olması.':
      'When one person gets sick, it’s not just content that stops — the brand’s voice does too. The problem isn’t a lack of creativity, it’s that production depends on an individual instead of a system.',
    'İçerik akışı üretimi sistematikleştirir, Studio reklam içeriğini ölçekler.': 'Content flow systematises production, Studio scales your ad content.',
    'İki sistem birlikte çalışır: İçerik akışı organik üretimi hiç durmayan bir hatta bağlar, Elvora Studio reklam içeriğini insan olmadan ölçekler.':
      'Two systems work together: Content flow wires organic production into a pipeline that never stops, and Elvora Studio scales your ad content without a person behind every piece.',
    'İçerik stratejisi': 'Content strategy',
    'Hangi konu, hangi kanalda, hangi sıklıkta yayınlanacağını markanızın hedefine göre çıkarıyoruz.':
      'We work out which topic, on which channel, at what frequency — based on your brand’s goals.',
    'Otomatik üretim akışı': 'Automated production flow',
    'Metin, görsel ve video taslakları elle değil, kurulu bir akıştan üretilir — kimse boş sayfayla başlamaz.':
      'Copy, image and video drafts come from a built pipeline, not by hand — nobody starts from a blank page.',
    'Marka sesi tutarlılığı': 'Brand voice consistency',
    'Sistem marka tonunuzu öğrenir, kim üretirse üretsin çıktı aynı sesle konuşur.':
      'The system learns your brand’s tone, so no matter who produces it, the output speaks with the same voice.',
    'Reklam içeriği üretimi': 'Ad content production',
    'Elvora Studio ile reklam varyantlarını hızlıca çoğaltıp test edilebilir hale getiriyoruz.':
      'With Elvora Studio we quickly multiply ad variants and make them test-ready.',
    'Yayın takvimi otomasyonu': 'Publishing calendar automation',
    'Onaylanan içerik otomatik zamanlanır, yayın günü kimsenin hatırlamasına bağlı kalmaz.':
      'Approved content gets scheduled automatically — publish day doesn’t depend on anyone remembering.',
    'Performans analizi': 'Performance analysis',
    'Hangi içerik işe yarıyor görünür hale gelir, bir sonraki üretim buna göre şekillenir.':
      'What’s working becomes visible, and the next round of production is shaped by it.',
    'Strateji': 'Strategy',
    'Marka sesini, hedef kitleyi ve kanalları birlikte netleştiriyoruz. Tek görüşme.':
      'We clarify your brand voice, target audience and channels together. One session.',
    'İçerik akışı ve Studio devreye girer; metin, görsel ve reklam varyantı üretilir.':
      'Content flow and Studio kick in — copy, visuals and ad variants get produced.',
    'Yayınlama': 'Publishing',
    'Onaylanan içerik takvime göre otomatik yayınlanır — kimse elle paylaşmaz.':
      'Approved content publishes automatically on schedule — nobody posts it by hand.',
    'Performans raporlanır, bir sonraki üretim döngüsü bu veriyle güncellenir.':
      'Performance gets reported, and the next production cycle updates based on that data.',
    'Görsel/video üretim araçları': 'Visual/video production tools',
    'Sosyal medya zamanlama araçları': 'Social media scheduling tools',

    /* ---- hizmetler/kurumsal-web-sitesi.html ---- */
    'Hızlı, doğru kurulmuş,': 'Fast, properly built,',
    'sizi temsil eden bir kurumsal site.': 'a corporate site that represents you.',
    'Markanızı doğru yansıtan, hızlı yüklenen ve kolayca güncellenebilen bir kurumsal web sitesini haftalar içinde canlıya alıyoruz.':
      'We take a corporate website that truly reflects your brand, loads fast and updates easily, live within weeks.',
    'Site markayı yansıtmıyor,': 'The site doesn’t reflect the brand,',
    've aylarca sürüyor.': 'and it takes months.',
    'Kurumsal sitenin markayı yansıtması, hızlı yüklenmesi ve güncel kalması gerekiyor ama çoğu ajans bunu aylarca sürdürüyor. Brief toplanır, tasarım turları uzar, geliştirme klasik bir yazılım projesine döner — bu sırada rakipler zaten yayında.':
      'A corporate site needs to reflect the brand, load fast and stay current — but most agencies stretch that out for months. The brief gets gathered, design rounds drag on, development turns into a classic software project — and meanwhile your competitors are already live.',
    'Sonuçta ortaya çıkan da çoğu zaman bir şablonun rengi değiştirilmiş hali oluyor. Site canlıya alındıktan sonra kimse dokunmuyor; içerik eskiyor, sayfa hızı düşüyor, marka birkaç yıl önceki haliyle donup kalıyor.':
      'What comes out the other end is usually a template with the colours swapped. Once the site goes live, nobody touches it again; content goes stale, page speed drops, and the brand freezes in whatever shape it was a few years ago.',
    'Elvora — kurumsal site kurulumu': 'Elvora — corporate site build',
    'Haftalar içinde canlıda, markanıza özel.': 'Live within weeks, built around your brand.',
    'AI destekli tasarım ve geliştirme süreciyle, aylar süren klasik ajans sürecini haftalara indiriyoruz.':
      'With an AI-assisted design and development process, we cut a classic months-long agency process down to weeks.',
    'Marka odaklı tasarım': 'Brand-first design',
    'Hazır şablon değil, marka kimliğinizden çıkan bir tasarım dili — renk, tipografi ve düzen markanıza özel kurgulanır.':
      'Not a ready-made template — a design language drawn from your brand identity. Colour, typography and layout are all built around you.',
    'Hızlı geliştirme': 'Fast development',
    'AI destekli geliştirme akışıyla klasik yazılım sürecinin haftalarını günlere indiriyoruz.':
      'With an AI-assisted development flow, we turn weeks of a classic software process into days.',
    'Mobil & performans optimizasyonu': 'Mobile & performance optimisation',
    'Site her ekranda düzgün görünür ve hızlı açılır — ziyaretçi beklemeden içeriğe ulaşır.':
      'The site looks right on every screen and loads fast — visitors reach the content without waiting.',
    'SEO temelleri': 'SEO fundamentals',
    'Başlık yapısı, meta veriler ve site hızı gibi temel SEO gereksinimleri kurulumdan itibaren doğru kurulur.':
      'Fundamentals like heading structure, meta data and site speed are set up correctly from day one.',
    'İçerik yönetimi kurulumu': 'Content management setup',
    'Metin ve görselleri geliştiriciye ihtiyaç duymadan siz güncelleyebilirsiniz.':
      'You can update text and images yourself, without needing a developer.',
    'Site canlıya alındıktan sonra da eskimeden kalması için düzenli bakım ve güncelleme sağlıyoruz.':
      'We provide ongoing maintenance and updates so the site doesn’t go stale after launch.',
    'Keşif & içerik envanteri': 'Discovery & content inventory',
    'Markanızı, hedef kitlenizi ve mevcut içeriklerinizi birlikte çıkarıyoruz. Tek görüşme.':
      'We map your brand, target audience and existing content together. One session.',
    'Tasarım': 'Design',
    'Marka kimliğinize özel sayfa tasarımları hazırlanır, onayınızla ilerlenir.':
      'Page designs are prepared around your brand identity, and we move forward with your approval.',
    'Geliştirme': 'Development',
    'Onaylanan tasarım hızlı, hafif ve mobil uyumlu bir siteye dönüştürülür.':
      'The approved design is turned into a fast, lightweight, mobile-friendly site.',
    'Yayına alma & devir': 'Launch & handover',
    'Site canlıya alınır, içerik yönetim kurulumu size gösterilir. İlk 90 gün destek dahil, sonrası size kalır.':
      'The site goes live and we walk you through the content management setup. The first 90 days of support are included; after that it’s yours.',
    'Kullandığımız yaklaşım.': 'The approach we use.',
    'Statik/hafif framework': 'Static/lightweight framework',
    'AI destekli copywriting': 'AI-assisted copywriting',
    'Performans optimizasyonu': 'Performance optimisation',
    'Mobil öncelikli tasarım': 'Mobile-first design',
    'Kurumsal web siteniz': 'A corporate website —',
    'mi gerekiyor?': 'is that what you need?',

    /* ---- hizmetler/e-ticaret-webshop.html ---- */
    'Ürünleriniz için,': 'For your products,',
    'satmaya hazır bir mağaza.': 'a store that’s ready to sell.',
    'Ürün kataloğunuzu satışa çıkaracak bir mağazaya ihtiyacınız var — platform seçiminden ödeme entegrasyonuna kadar sıfırdan kuruyoruz. Bu sayfa mevcut bir mağazayı büyütmek için değil, sıfırdan bir mağaza kurmak için.':
      'You need a store to put your product catalogue up for sale — we build it from scratch, from choosing the platform to integrating payments. This page is about building a store from zero, not growing an existing one.',
    'Katalog senkronu ile devamını görün': 'See what comes next with Catalogue sync',
    'Ürünleriniz hazır,': 'Your products are ready,',
    'mağazanız değil.': 'your store isn’t.',
    'Ürün sayısı arttıkça Excel tabloları, WhatsApp siparişleri ve Instagram DM\'leri yetmemeye başlıyor. Hangi üründe kaç adet kaldığını, hangi fiyatın hangi kampanyada geçerli olduğunu takip etmek tek kişinin hafızasına kalıyor.':
      'As the product count grows, spreadsheets, WhatsApp orders and Instagram DMs stop being enough. Tracking how many units are left of which product, and which price applies to which campaign, ends up living in one person’s memory.',
    'Mağaza kurmak ise ayrı bir proje gibi duruyor: platform seçimi, ödeme altyapısı, kargo entegrasyonu, tasarım — hepsi birbirinden kopuk kararlar gibi görünüyor ve çoğu zaman hiç başlanamıyor.':
      'Setting up a store feels like a separate project of its own: platform choice, payment infrastructure, shipping integration, design — they all look like disconnected decisions, and most of the time nobody ever starts.',
    'Elvora — mağaza kurulumu': 'Elvora — store build',
    'Mağazayı kuruyoruz; büyüdükçe Katalog senkronu ile stok/fiyat otomasyonuna geçilebilir.':
      'We build the store; as it grows, you can move to stock/price automation with Catalogue sync.',
    'Shopify ya da WooCommerce üzerinde satışa hazır bir mağaza kuruyoruz — ürünler, ödeme, kargo, tasarım tek elden. Kataloğunuz büyüdükçe Elvora Flow\'un':
      'We build a sale-ready store on Shopify or WooCommerce — products, payments, shipping and design, all from one place. As your catalogue grows, you can automate stock and price tracking with Elvora Flow\'s',
    'modülüyle stok ve fiyat takibini otomatikleştirebilirsiniz.': 'module.',
    'Mağaza kurulumu (Shopify/WooCommerce)': 'Store setup (Shopify/WooCommerce)',
    'Markanıza uygun altyapıyı seçip mağazayı sıfırdan Shopify ya da WooCommerce üzerinde kuruyoruz.':
      'We choose the right infrastructure for your brand and build the store from scratch on Shopify or WooCommerce.',
    'Ürün kataloğu yapılandırma': 'Product catalogue setup',
    'Ürünlerinizi kategori, varyant ve görsellerle birlikte mağazaya doğru yapıda taşıyoruz.':
      'We move your products into the store in the right structure, with categories, variants and images.',
    'Ödeme & kargo entegrasyonu': 'Payment & shipping integration',
    'iyzico, Stripe gibi ödeme sağlayıcılarını ve kargo firmalarınızı mağazaya bağlıyoruz.':
      'We connect payment providers like iyzico and Stripe, and your shipping carriers, to the store.',
    'Tasarım & marka uyumu': 'Design & brand alignment',
    'Mağazanın görünümünü marka kimliğinize göre kuruyoruz — hazır şablon değil, size uyan bir vitrin.':
      'We build the store’s look around your brand identity — not a ready-made template, a storefront that fits you.',
    'Stok/fiyat senkron hazırlığı': 'Stock/price sync readiness',
    'Mağazayı, ileride Katalog senkronu ile otomatik stok/fiyat güncellemesine geçişe hazır şekilde yapılandırıyoruz.':
      'We configure the store so it’s ready to move to automatic stock/price updates with Catalogue sync later on.',
    'Lansman & devir': 'Launch & handover',
    'Test siparişleriyle her adımı doğrulayıp mağazayı yayına alıyoruz, kullanımını size devrediyoruz.':
      'We verify every step with test orders, launch the store, and hand its operation over to you.',
    'Keşif & platform seçimi': 'Discovery & platform choice',
    'İhtiyaçlarınızı ve ürün kataloğunuzu birlikte değerlendirip Shopify/WooCommerce arasında doğru platformu seçiyoruz.':
      'We review your needs and product catalogue together and choose the right platform between Shopify and WooCommerce.',
    'Seçilen platform üzerinde mağazanın temel altyapısı, sayfaları ve entegrasyonları kuruluyor.':
      'The store’s core infrastructure, pages and integrations are built on the platform you chose.',
    'Katalog & entegrasyon': 'Catalogue & integration',
    'Ürünler, ödeme ve kargo entegrasyonları mağazaya işleniyor, uçtan uca test ediliyor.':
      'Products, payment and shipping integrations are built into the store and tested end to end.',
    'Lansman': 'Launch',
    'Mağaza yayına alınır, kullanımı ekibinize devredilir. İlk destek dahildir.':
      'The store goes live and its operation is handed over to your team. Initial support is included.',
    'Kargo entegrasyonları': 'Shipping integrations',
    'E-ticaret mağazanız': 'An e-commerce store —',
    'mı gerekiyor?': 'is that what you need?',
    'Kısa formu doldurun — ürünlerinizi ve ihtiyacınızı anlatın, kapsamı birlikte netleştirelim.':
      'Fill in the short form — tell us about your products and your needs, and we’ll narrow down the scope together.',

    /* ---- blog/*.html: ortak öğeler ---- */
    'İlgili yazılar': 'Related articles',
    'Tüm yazılar': 'All articles',
    'Blog listesine dön': 'Back to the blog list',
    'Tüm yazılar — Blog': 'All articles — Blog',
    '← Blog\'a dön': '← Back to blog',
    '4 dk okuma': '4 min read',
    '5 dk okuma': '5 min read',
    '22 Temmuz 2026': 'July 22, 2026',
    '29 Temmuz 2026': 'July 29, 2026',
    '4 Ağustos 2026': 'August 4, 2026',
    'İçerik akışını incele': 'Explore the content flow',
    'Elvora Identity\'yi incele': 'Explore Elvora Identity',

    /* ---- blog/ai-otomasyonu-ajansi-nasil-degistirir.html ---- */
    'AI otomasyonu bir ajansı nasıl değiştirir? — Elvora Global Blog': 'How AI automation changes an agency — Elvora Global Blog',
    'Ajans operasyonunda otomasyon nerede başlar, tekrarlayan kararların gizli maliyeti nedir ve Elvora Flow\'un istisna bazlı yaklaşımı bir ajans için ne anlama gelir.':
      'Where automation starts in agency operations, the hidden cost of repeated decisions, and what Elvora Flow’s exception-based approach means for an agency.',
    'AI otomasyonu bir ajansı': 'How AI automation',
    'nasıl değiştirir?': 'changes an agency',
    'Ajans operasyonunda otomasyon nerede başlar?': 'Where does automation start in agency operations?',
    'Otomasyon, bir işin tetikleyici bir olaya bağlı olarak insan müdahalesi olmadan tamamlanmasıdır. Form dolduğunda otomatik bir e-posta gitmesi, sipariş durumu değiştiğinde CRM\'in güncellenmesi, bir içerik onaylandığında yayına girmesi — bunların hepsi aynı mantığa dayanıyor: kural net olduğu sürece insanın devrede olmasına gerek yok. Ajans operasyonunda otomasyon da tam burada başlıyor — insanın karar verdiği değil, kuralın karar verdiği, insanın yalnızca istisnada devreye girdiği noktada.':
      'Automation is a task completing without human intervention, triggered by an event. An automatic email when a form is submitted, a CRM record updating when order status changes, content going live once it’s approved — these all rest on the same logic: as long as the rule is clear, a human doesn’t need to be involved. Automation in agency operations starts exactly here — where the rule decides, not the person, and the person only steps in on the exception.',
    'Bir ajansın günlük işleyişinde bu tür kurallı işler sanılandan çok fazla. Gelen bir teklif talebinin hangi ekibe yönlendirileceği, bir müşteri mesajının hangi öncelikte cevaplanacağı, bir içeriğin hangi onay adımından geçeceği — bunların büyük kısmı aslında sabit bir mantığa göre işliyor. Sorun kuralın olmaması değil; bu kuralın her seferinde elle, yeniden uygulanması.':
      'An agency’s day-to-day work has far more rule-based tasks than it seems. Which team a proposal request goes to, what priority a client message gets, which approval step a piece of content passes through — most of this actually runs on a fixed logic. The problem isn’t the absence of a rule; it’s that the rule gets applied by hand, over and over.',
    'Bu ayrım önemli çünkü otomasyonu yanlış yere kurmak, hiç kurmamaktan daha maliyetli olabiliyor. Gerçekten değerlendirme gerektiren bir kararı — örneğin bir teklifin fiyatlandırma stratejisini — otomatikleştirmeye çalışmak işe yaramıyor, çünkü orada insanın deneyimi asıl değeri oluşturuyor. Otomasyonun karşılığını verdiği yer, kararın kendisi değil, kararın':
      'This distinction matters, because putting automation in the wrong place can cost more than not automating at all. Trying to automate a decision that genuinely needs judgment — a proposal’s pricing strategy, say — doesn’t work, because that’s where human experience creates the real value. Automation pays off not on the decision itself, but on its',
    'tekrarı': 'repetition',
    'Tekrarlayan kararların gizli maliyeti': 'The hidden cost of repeated decisions',
    'Bu tekrar eden kararların maliyeti faturada görünmüyor, ama gerçek. Bir destek talebinin hangi kategoriye girdiğine karar vermek, bir lead\'in sıcak mı soğuk mu olduğunu değerlendirmek, bir içeriğin marka tonuna uyup uymadığını kontrol etmek — bunların her biri tek başına birkaç dakika sürüyor gibi görünür. Ama gün boyunca defalarca tekrarlandığında, ekibin en deneyimli üyelerinin zamanının önemli bir bölümünü yiyor.':
      'The cost of these repeated decisions doesn’t show up on an invoice, but it’s real. Deciding which category a support request falls into, judging whether a lead is hot or cold, checking whether a piece of content matches the brand tone — each one looks like it takes a few minutes on its own. Repeated all day, though, it eats up a significant share of your most experienced people’s time.',
    'Asıl sorun bu kararların zor olması değil, sık olması. Senior bir çalışanın stratejik işe ayırması gereken zaman, aynı sınıflandırma sorusuna tekrar tekrar cevap vermekle geçiyor. Bunun iki sonucu oluyor: gerçekten öncelikli işler gecikiyor, ve tekrarlayan iş yükü altında kalite düşüyor — çünkü aynı dikkat her seferinde verilemiyor.':
      'The real issue isn’t that these decisions are hard — it’s that they’re frequent. Time a senior employee should spend on strategic work goes instead into answering the same classification question again and again. Two things follow: genuinely urgent work gets delayed, and quality drops under the repeated load, because the same attention can’t be given every single time.',
    'Bu maliyet ayrıca görünmez bir şekilde büyüyor, çünkü hiçbir tek karar tek başına önemli görünmüyor. Bir müşteri talebini önceliklendirmek, bir içeriği tona göre onaylamak — hiçbiri "büyük" bir iş değil. Ama bu küçük kararların toplamı, ekibin haftalık kapasitesinin büyük bir kısmını, fark edilmeden, en kritik olmayan işe ayırıyor.':
      'This cost also grows invisibly, because no single decision looks important on its own. Prioritising a client request, approving a piece of content for tone — neither is a “big” task. But the sum of these small decisions quietly claims a large share of the team’s weekly capacity for work that isn’t the most critical.',
    'Elvora Flow\'un yaklaşımı: istisna bazlı otomasyon': 'Elvora Flow’s approach: exception-based automation',
    'Elvora Flow bu tekrarı ortadan kaldırmak için kurulu birkaç sistemi bir arada çalıştırıyor.':
      'Elvora Flow runs several built systems together to remove this repetition.',
    'sık sorulanları, sipariş durumunu ve kargo takibini otomatik yanıtlıyor; cevaplayamadığı durumu olduğu gibi insana devrediyor.':
      'answers FAQs, order status and shipment tracking automatically, and hands over whatever it can’t answer, as-is, to a person.',
    'gelen talebi hangi kanaldan geldiğine bakmaksızın topluyor, önceliklendiriyor, CRM\'e yazıyor ve ilk yanıtı otomatik gönderiyor — ekip yalnızca sıcak lead\'e odaklanıyor.':
      'collects incoming requests regardless of which channel they came from, prioritises them, writes them to the CRM and sends the first reply automatically — the team focuses only on the hot leads.',
    'ise ürün açıklaması, sosyal medya metni ve görsel varyantını tek seferde üretip onaya düşürüyor, onaylandığında yayınlıyor.':
      'produces the product description, social copy and image variant in one pass, sends it for approval, and publishes it once approved.',
    'Üçünün ortak noktası aynı: karar kuralı önceden tanımlanıyor, sistem bu kurala göre otomatik işliyor, insan yalnızca kuralın kapsamadığı istisnada devreye giriyor. Bu, insanı işten çıkarmak değil — insanı doğru işe geri koymak.':
      'All three share the same logic: the decision rule is defined upfront, the system runs on it automatically, and the person only steps in on the exception the rule doesn’t cover. This isn’t about removing the person — it’s about putting them back on the right work.',
    'Pratikte bu, ekibin gününün başlangıç noktasını değiştiriyor. Boş bir gelen kutusu ve sınıflandırılmamış bir talep listesiyle güne başlamak yerine, ekip zaten önceliklendirilmiş, zaten bağlamı çıkarılmış bir listeyle çalışıyor. Karar hâlâ insanın — sistem sadece hazırlığı yapıyor.':
      'In practice, this changes where the team’s day starts. Instead of starting with an empty inbox and an unsorted list of requests, the team works from a list that’s already prioritised, already given context. The decision is still the person’s — the system just does the prep.',
    'Bir ajans için pratik başlangıç noktası': 'A practical starting point for an agency',
    'Bir ajans için otomasyona başlamanın en güvenli yolu, doğrudan bir sistem satın almak değil, önce süreci haritalamaktır: hangi iş ne sıklıkla tekrar ediyor, kim yapıyor, ne kadar sürüyor. Bu harita çıkınca hangi sistemin öncelik olduğu genelde kendiliğinden netleşiyor.':
      'The safest way for an agency to start with automation isn’t to buy a system outright — it’s to map the process first: which task repeats, how often, who does it, how long it takes. Once that map exists, which system should come first usually becomes obvious on its own.',
    'Elvora\'nın kurulum süreci de bu mantığa göre işliyor. İlk adımda birlikte akış çıkarılıyor — hangi işin tekrar ettiği ve haftada kaç saat gittiği netleşiyor; bu genelde tek bir görüşmeyle ortaya çıkıyor. İkinci adımda kapsam ve fiyat tek belgede sabitleniyor, sonradan büyüyen kapsam olmuyor. Üçüncü adımda sistem kurulup gerçek veriyle test ediliyor — kurulum tipik olarak birkaç hafta sürüyor. Dördüncü adımda nasıl çalıştığı yazılı olarak devrediliyor, ilk 90 gün destek dahil oluyor.':
      'Elvora’s delivery process follows this same logic. In the first step, we map the workflow together — which task repeats and how many hours a week it takes, usually surfacing in a single call. In the second, scope and price are fixed in a single document, so scope never creeps later. In the third, the system is built and tested against your real data — delivery typically takes a few weeks. In the fourth, how it works is handed over in writing, with support included for the first 90 days.',
    'Bu sırayı takip etmenin nedeni basit: bir ajans hangi sistemin gerçekten gerekli olduğunu, kapsamı önce görmeden bilemiyor. Akış çıkarma adımı, "otomasyon istiyoruz" gibi genel bir talebi, "şu üç işlem haftada şu kadar saat alıyor" gibi somut bir listeye dönüştürüyor. Karar bu listeden sonra çok daha kolay veriliyor.':
      'The reason for this order is simple: an agency can’t know which system it genuinely needs without seeing the scope first. The workflow-mapping step turns a vague request like “we want automation” into a concrete list like “these three tasks take this many hours a week.” The decision is much easier once that list exists.',
    'Ajansınızda hangi işin tekrar ettiğini biliyorsanız, bir sonraki adım kolay: projenizi anlatın, birlikte kapsamı netleştirelim.':
      'If you already know which task repeats in your agency, the next step is easy: tell us about your project, and we’ll narrow down the scope together.',
    'Ajansınız için': 'Which system is right',
    'doğru sistem hangisi?': 'for your agency?',

    /* ---- blog/icerik-uretimini-sisteme-baglamanin-3-yolu.html ---- */
    'İçerik üretimini sisteme bağlamanın 3 yolu — Elvora Global Blog': '3 ways to tie content production to a system — Elvora Global Blog',
    'İçerik üretimi neden tek bir kişiye bağlı kalır ve üretimi akışa, görsel üretimini ölçeğe, onay sürecini otomasyona bağlamanın 3 pratik yolu.':
      'Why content production stays tied to one person, and 3 practical ways to tie production to a flow, scale image production, and automate the approval process.',
    'İçerik üretimini sisteme': '3 ways to tie content production',
    'bağlamanın 3 yolu': 'to a system',
    'İçerik üretimi neden tek bir kişiye bağlı kalır?': 'Why does content production stay tied to one person?',
    'İçerik üretimi çoğu markada tek bir kişinin — ya da tek bir küçük ekibin — masasından geçen bir zincirdir. Ürün açıklaması, sosyal medya metni, görsel varyant, onay, yayın — her adım bir öncekinin bitmesini bekler ve genelde aynı kişi ya da aynı küçük grup bu adımların çoğundan sorumludur. Bu, iş hızlı ilerlerken fark edilmez. Ama o kişi izne çıktığında, yoğun bir haftaya girdiğinde ya da işten ayrıldığında zincir kırılır — üretim yavaşlamaz, tamamen durur.':
      'In most brands, content production is a chain that runs through one person — or one small team. Product description, social copy, image variant, approval, publish — each step waits for the last one to finish, and usually the same person or small group is responsible for most of them. This goes unnoticed while things move fast. But when that person takes leave, hits a busy week, or leaves the company, the chain breaks — production doesn’t slow down, it stops entirely.',
    'Bu tek-nokta-hata bir tercih değil, genelde büyümenin yan etkisidir: içerik ihtiyacı arttıkça iş, elde olan en hızlı kişiye yığılır. Sorun kişinin yetkinliği değil — üretimin bir sisteme değil bir kişiye bağlı olmasıdır. Düzensiz yayın da sonuçsuz kalmıyor; algoritmalar tutarsız yayın yapan hesapları daha az gösteriyor, dolayısıyla gecikme yalnızca iç bir aksaklık değil, dışarıdan da görünür bir kayıp haline geliyor.':
      'This single point of failure isn’t a choice — it’s usually a side effect of growth: as the need for content grows, the work piles onto whoever is fastest. The problem isn’t that person’s skill — it’s that production is tied to a person, not a system. Irregular publishing isn’t consequence-free either; algorithms show accounts with inconsistent output less, so the delay becomes a loss visible from the outside, not just an internal hiccup.',
    'Bu noktada yaygın tepki, ikinci bir kişi eklemek oluyor — yedek bir yazar, yedek bir tasarımcı. Bu geçici olarak işe yarasa da sorunu çözmüyor, sadece tek nokta sayısını ikiye çıkarıyor. İki kişi de aynı anda meşgulse veya ikisi de aynı bilgiye erişemiyorsa, zincir yine kırılıyor. Kalıcı çözüm kişi eklemek değil, üretimin dayandığı bilgiyi ve süreci kişiden bağımsız hale getirmek.':
      'The common response at this point is to add a second person — a backup writer, a backup designer. That helps temporarily, but doesn’t solve the problem — it just doubles the number of single points of failure. If both people are busy at once, or neither can access the same information, the chain breaks again. The lasting fix isn’t adding people — it’s making the information and process production depends on independent of any one person.',
    'Yol 1 — Üretimi akışa bağlamak': 'Way 1 — Tie production to a flow',
    'İlk yol, üretimi tek bir kişinin elinden çıkarıp tanımlı bir akışa bağlamaktır. Elvora Flow\'un içerik akışı sistemi tam bunu yapıyor: ürün açıklaması, sosyal medya metni ve görsel varyantını tek seferde üretiyor, onaya düşürüyor, onaylandığında yayınlıyor. Marka tonu ve stil kılavuzu sisteme baştan öğretiliyor; blog, sosyal medya ve e-posta formatları aynı akıştan çıkıyor.':
      'The first way is to take production out of one person’s hands and tie it to a defined flow. Elvora Flow’s content flow system does exactly this: it produces the product description, social copy and image variant in one pass, sends it for approval, and publishes it once approved. The brand tone and style guide are taught to the system upfront; blog, social and email formats all come out of the same flow.',
    'Bunun pratik sonucu şu: kişi izne çıksa da akış durmuyor, çünkü üretim artık o kişinin hafızasında ya da kişisel dosyalarında değil, tanımlı bir sistemde. Yeni bir ekip üyesi işe başladığında da aynı kurallardan yürüyor — üretim kişiden kişiye devredilen bir bilgi değil, sistemin kendisi oluyor.':
      'The practical result: the flow doesn’t stop even if the person takes leave, because production no longer lives in that person’s memory or personal files — it lives in a defined system. A new team member starts from the same rules, too — production is no longer knowledge handed from person to person, it’s the system itself.',
    'Bu aynı zamanda kalite tutarlılığını da artırıyor. Her metin aynı marka tonu tanımından geçtiği için, kimin o hafta üretim yaptığı okuyucu tarafında fark edilmiyor — sonuç her seferinde aynı standarda dayanıyor.':
      'This also raises quality consistency. Because every piece of copy passes through the same brand-tone definition, it doesn’t show on the reader’s end who produced it that week — the result rests on the same standard every time.',
    'Yol 2 — Görsel üretimi ölçeklendirmek': 'Way 2 — Scale image production',
    'İkinci yol, görsel üretimin kendisini darboğaz olmaktan çıkarmaktır. Bir ürünün birden fazla varyantı olduğunda — farklı renk, farklı kumaş, farklı kombinasyon — geleneksel yöntem her varyant için ayrı çekim yapmaktır; ürün sayısı arttıkça bu hesap tutmuyor. Çekim takvimi, set, post-prodüksiyon — her adım bir öncekini bekliyor ve kampanya yayına girdiğinde fikir çoktan soğumuş oluyor.':
      'The second way is to stop image production itself being the bottleneck. When a product has several variants — different colour, different fabric, different combination — the traditional method is a separate shoot for each variant; the maths stops working as the product count grows. Shoot schedule, set, post-production — each step waits on the last, and by the time the campaign goes live, the idea has already gone cold.',
    'Elvora Studio bu zinciri kısaltıyor: ürünü bir kez kurup aynı açı, aynı ışık, aynı mekânda varyantları üretiyor. Set kurma maliyeti ve çekim takvimi baskısı ortadan kalkıyor, konsept netleştikten sonra ilk sürüm günler içinde görülebiliyor — revizyon da süreç içinde yapılıyor.':
      'Elvora Studio shortens this chain: it sets the product up once and produces the variants in the same angle, the same light, the same setting. Set costs and shoot-schedule pressure disappear, and once the concept is settled, the first version can be seen within days — revisions happen along the way too.',
    'Bunun katalog ölçeğindeki etkisi büyük: bir ürünün sekiz renk seçeneği varsa, geleneksel yöntemde bu sekiz ayrı çekim demek. Yüz üründe bu hesap hiç tutmuyor. Ürünü bir kez kurup varyantları üretmek, ürün sayısı büyüdükçe asıl farkı yaratan adım oluyor.':
      'The effect at catalogue scale is significant: if a product has eight colour options, the traditional method means eight separate shoots. That maths simply doesn’t work across a hundred products. Setting the product up once and producing the variants is the step that makes the real difference as the product count grows.',
    'Yol 3 — Onay ve yayın sürecini otomatikleştirmek': 'Way 3 — Automate the approval and publishing process',
    'Üçüncü yol, üretilen içeriğin onaydan yayına giden yolunu otomatikleştirmektir. İçerik akışı sistemi, oluşturduğu her parçayı tanımlı bir onay adımına düşürüyor; onaylandığında yayın takvimine göre otomatik zamanlanıyor. Bu, n8n tabanlı bir orkestrasyon katmanıyla çalışıyor — içerik hangi platforma, ne zaman gideceğine dair kural bir kez tanımlanıyor, sonrasında tekrar elle müdahale gerekmiyor.':
      'The third way is to automate the path from approval to publish for every piece of content produced. The content flow system routes every piece it creates through a defined approval step; once approved, it’s scheduled automatically against the publishing calendar. This runs on an n8n-based orchestration layer — the rule for which platform content goes to, and when, is defined once, and no manual intervention is needed after that.',
    'Bu üç yolun ortak noktası, yazının başında tarif edilen soruna geri dönüyor: içerik üretimi bir kişinin takvimine değil, tanımlı bir sisteme bağlı olduğunda, o kişi izne çıktığında da yayın takvimi aynı hızda devam ediyor. Üretim artık kişiye değil, akışa emanet.':
      'What these three ways have in common loops back to the problem described at the start: when content production is tied to a defined system rather than one person’s calendar, the publishing calendar keeps the same pace even when that person is away. Production is now entrusted to the flow, not the person.',
    'İçerik üretiminizi': 'Shall we tie your content production',
    'sisteme mi bağlasak?': 'to a system?',

    /* ---- blog/marka-kimliginde-tutarliligi-ai-ile-korumak.html ---- */
    'Marka kimliğinde tutarlılığı AI ile korumak — Elvora Global Blog': 'Keeping brand identity consistent with AI — Elvora Global Blog',
    'Marka tutarlılığı AI çağında neden daha kırılgan, tutarsızlık nerede sızıyor ve Elvora Identity\'nin yaklaşımıyla kontrolü kaybetmeden ölçeklenmek nasıl mümkün.':
      'Why brand consistency is more fragile in the age of AI, where inconsistency leaks in, and how Elvora Identity’s approach makes it possible to scale without losing control.',
    'Marka kimliğinde tutarlılığı': 'Keeping brand identity consistent',
    'AI ile korumak': 'with AI',
    'Marka tutarlılığı neden AI çağında daha kırılgan?': 'Why is brand consistency more fragile in the age of AI?',
    'Marka tutarlılığı her zaman zor bir disiplindi, ama AI araçlarının içerik üretimine girmesiyle bu zorluk katlanarak arttı. Daha önce bir markanın görsel dilini birkaç tasarımcı ve birkaç onaylı şablon belirliyordu; şimdi aynı marka adına metin, görsel ve video üreten kanal sayısı, format sayısı ve bunu üreten elin sayısı çok daha fazla. Her yeni araç, her yeni ekip üyesi, markanın görsel diline kendi yorumunu katma ihtimalini artırıyor — ve bu sapma, üretim hızı arttıkça daha hızlı birikiyor.':
      'Brand consistency was always a hard discipline, but it got exponentially harder once AI tools entered content production. A brand’s visual language used to be set by a few designers and a few approved templates; now the number of channels, formats and hands producing text, image and video on that brand’s behalf is far greater. Every new tool, every new team member, raises the odds of adding their own reading of the brand’s visual language — and that drift compounds faster as production speed increases.',
    'Bu kırılganlık bir tercih meselesi değil, hızın doğal sonucu. Üretim ne kadar hızlı ve ne kadar çok kanaldan yapılırsa, aynı kararın her seferinde aynı şekilde verilmesi o kadar zorlaşıyor — çünkü karar artık tek bir kişinin hafızasında değil, birden fazla aracın ve kişinin ayrı ayrı yorumunda yaşıyor.':
      'This fragility isn’t a matter of choice — it’s the natural result of speed. The faster and more channels production runs across, the harder it gets for the same decision to be made the same way every time — because the decision no longer lives in one person’s memory, but in the separate interpretations of multiple tools and people.',
    'Eskiden bir markanın kimliğini korumak, birkaç kişinin doğru bilgiye sahip olmasıyla mümkündü. Şimdi üretim zinciri o kadar uzadı ki, bilgiyi birkaç kişinin hafızasında tutmak yeterli değil — çünkü zincirin her halkasında farklı bir araç veya farklı bir ekip üyesi var, ve her biri kendi varsayımıyla çalışıyor.':
      'Protecting a brand’s identity used to be possible as long as a few people held the right information. Now the production chain has stretched so far that keeping that knowledge in a few people’s heads isn’t enough — because a different tool or a different team member sits at every link in the chain, each working from its own assumptions.',
    'Tutarsızlığın nerede sızdığı': 'Where inconsistency leaks in',
    'Tutarsızlık genelde büyük bir hatadan değil, küçük kaymaların birikmesinden doğar. Sitede kullanılan bir renk tonu ambalajda hafifçe farklı çıkar; sosyal medyada üçüncü bir tipografi kullanılır. Logo aynı kalır ama etrafındaki her şey — kadraj, ışık, renk sıcaklığı, yazı hiyerarşisi — küçük küçük kayar. Her yeni tasarımcı ya da her yeni AI aracı işe kendi varsayılan yorumuyla başladığında, bu kaymalar birbirine eklenir ve marka zamanla "aynı ama farklı" görünmeye başlar.':
      'Inconsistency is usually born not from one big mistake, but from small drifts accumulating. A colour tone used on the site turns out slightly different on packaging; social media uses a third typeface. The logo stays the same, but everything around it — framing, light, colour temperature, type hierarchy — drifts little by little. Every time a new designer or a new AI tool starts work with its own default interpretation, these drifts stack up, and the brand gradually starts to look “the same, but different.”',
    'Bu sızıntının tehlikeli tarafı, hiçbir tek üretimin tek başına "yanlış" olmaması. Her parça kendi içinde makul görünür. Sorun ancak yan yana konduğunda görünür hale gelir — ve o zaman fark edilmesi de, düzeltilmesi de çok daha maliyetli olur.':
      'What makes this leak dangerous is that no single piece looks “wrong” on its own — each one seems reasonable in isolation. The problem only becomes visible once they’re placed side by side — and by then, both noticing it and fixing it cost far more.',
    'Bu yüzden tutarlılığı sağlamanın en zayıf yolu, çıktıları sonradan denetlemektir. Denetim her zaman geriden gelir; kaymayı üretimden sonra yakalar, üretimden önce değil. Kalıcı çözüm, kaymanın oluşabileceği noktayı — kararın verildiği anı — baştan sabitlemektir.':
      'That’s why the weakest way to enforce consistency is reviewing output after the fact. Review always lags behind — it catches drift after production, not before it. The lasting fix is to fix the point where drift can occur — the moment the decision is made — from the start.',
    'Elvora Identity\'nin yaklaşımı': 'Elvora Identity’s approach',
    'Elvora Identity bu kaymayı, kararları bir kez alıp uygulanabilir bir sisteme yazarak engelliyor. Hangi renk nerede kullanılır, hangi yazı tipi hangi ölçekte durur, logo hangi boşlukla yerleşir — bunların hepsi net kurallara bağlanıyor. Kural, tekil bir tasarımdan daha güçlü çalışıyor çünkü ölçekte tekrar edilebiliyor: aynı ürün farklı kombinasyonlarla sunulacaksa, değişen yalnızca ürün oluyor — kadraj, ışık, mekân ve renk sabit kalıyor.':
      'Elvora Identity prevents this drift by making the decisions once and writing them into an actionable system. Which colour goes where, which typeface sits at which scale, how much space surrounds the logo — all of it is tied to clear rules. A rule works stronger than a one-off design because it can be repeated at scale: if the same product is shown in different combinations, only the product changes — framing, light, setting and colour stay fixed.',
    'Teslimat logo sistemi, renk paleti, tipografi ve uygulama rehberinden oluşuyor. Logo sistemi ana logonun yatay, dikey ve tek renk varyantlarını kapsıyor; renk paleti ana ve destek renkleri baskı ve ekran değerleriyle birlikte tanımlıyor; tipografi başlık ve metin eşleşmesini, ölçek basamaklarını netleştiriyor. Uygulama rehberi ise doğru ve yanlış kullanım örnekleriyle, ekibin dışarıdan yardım almadan da doğru kararı verebileceği kadar net yazılıyor.':
      'The deliverable consists of a logo system, colour palette, typography and an application guide. The logo system covers horizontal, vertical and single-colour variants of the main logo; the colour palette defines primary and support colours with print and screen values; typography settles the heading-and-body pairing and the scale steps. The application guide is written clear enough — with right and wrong examples — that the team can make the right call without outside help.',
    'Kontrolü kaybetmeden ölçeklenmek': 'Scaling without losing control',
    'Bir markanın kimliğini korurken büyümesinin yolu, her yeni içeriği elle denetlemek değil, marka kılavuzunu üretim sisteminin kendisine kodlamaktır. Kural üretim akışının içine yazıldığında, kimin ürettiğinden bağımsız olarak aynı çıktı kalitesi tekrarlanır — denetim insanın hafızasına değil, sistemin kendisine dayanır.':
      'The way for a brand to grow while protecting its identity isn’t to manually review every new piece of content — it’s to code the brand guide into the production system itself. Once the rule is written into the production flow, the same output quality repeats regardless of who produced it — review no longer rests on a person’s memory, but on the system itself.',
    'Bu, denetimi ortadan kaldırmak anlamına gelmiyor; denetimin yerini değiştiriyor. İnsan artık her tekil çıktıyı baştan kontrol etmek yerine, kuralın kendisinin doğru tanımlandığından emin oluyor — bir kere doğru yazılan kural, sonrasında binlerce kez doğru uygulanıyor.':
      'This doesn’t remove review — it relocates it. Instead of checking every single output from scratch, a person now makes sure the rule itself is defined correctly — a rule written correctly once gets applied correctly thousands of times after that.',
    'Marka kimliğinizin hangi noktalarda kaydığından emin değilseniz, bunu birlikte netleştirebiliriz — danışmanlık hattımızdan sorununuzu tanımlayabilir, ya da doğrudan projenizi anlatabilirsiniz.':
      'If you’re not sure where your brand identity is drifting, we can work it out together — define the problem through our Advisory track, or tell us about your project directly.',
    'Marka kimliğiniz': 'Is your brand identity',
    'tutarlı mı?': 'consistent?',

    /* ---- hizmetler/*.html: "Kimin için?" persona bölümü ---- */
    'Kimin için?': 'Who is this for?',
    'Elvora\'nın çözdüğü nokta:': 'Where Elvora fixes it:',

    'Operasyon müdürü · 10-30 kişilik ekip': 'Operations manager · 10-30 person team',
    'Aynı siparişi üç kez yazan operasyon müdürü.': 'The operations manager typing the same order three times.',
    'Sipariş sistemi, CRM ve muhasebe birbirinden kopuk üç ada. Her gün aynı sipariş bilgisi elle üç yere giriliyor; bir hata fark edildiğinde üçünü karşılaştırıp doğrusunu bulmak saatler alıyor.':
      'The order system, CRM and accounting are three disconnected islands. The same order data gets typed into all three by hand, every day; when something doesn’t match, comparing all three to find the right version takes hours.',
    'Aynı verinin tekrar tekrar elle girilmesi hem zaman kaybettiriyor hem de üç sistemin birbiriyle tutarsız kalma riskini büyütüyor.':
      'Re-entering the same data by hand wastes time and raises the risk of the three systems drifting out of sync with each other.',
    'Workflow otomasyonu üç aracı birbirine bağlar, bilgi tek noktadan akar; operasyon müdürü yalnızca istisnai durumlarda müdahale eder.':
      'Workflow automation connects the three tools; data flows from one source, and the operations manager only steps in for exceptions.',

    'Müşteri hizmetleri / satış operasyon yöneticisi': 'Customer support / sales operations manager',
    'Mesai bitince biriken destek talepleri ve lead\'ler.': 'Support tickets and leads that pile up after hours.',
    'Gün içinde gelen destek talepleri ve satış lead\'leri sıraya giriyor ama kimin önce bakacağı belli değil. Mesai dışı gelenler ertesi güne kalıyor, öncelik çoğu zaman "kim ilk fark ederse" mantığıyla şekilleniyor.':
      'Support tickets and sales leads queue up all day with no clear owner for who looks at what first. Anything that arrives after hours waits until the next day — priority usually comes down to whoever notices first.',
    'Talepler ve lead\'ler bir insanın fark etmesine bağlı kaldığı için önceliklendirme tutarsız ve gecikmeli oluyor.':
      'Because prioritisation depends on someone happening to notice, it ends up inconsistent and delayed.',
    'AI destek agent\'ı ve karar noktası otomasyonu talepleri okur, sınıflandırır ve önceliklendirir; insan yalnızca karmaşık ya da istisnai durumlarda devreye girer.':
      'An AI support agent and decision-point automation read, classify and prioritise incoming requests; a person only steps in for complex or exceptional cases.',

    'Kendine özgü süreci olan operasyon/ürün sahibi': 'Owner of a process that doesn’t fit a standard tool',
    'Hazır SaaS\'a sığmayan bir süreci olan ekip.': 'A team whose process doesn’t fit off-the-shelf SaaS.',
    'Onay, hesaplama ya da eşleştirme mantığı standart araçların kalıbına girmiyor. Zapier veya genel amaçlı AI araçları denenmiş ama süreç her seferinde bu araçların sınırlarına takılıyor, elle yama gerekiyor.':
      'Their approval, calculation or matching logic doesn’t fit standard tool patterns. They’ve tried Zapier or general-purpose AI tools, but the process keeps hitting those tools’ limits and needs a manual patch every time.',
    'Süreç hazır araçların modeline uymadığı için otomasyon yarım kalıyor, insan müdahalesi devam ediyor.':
      'Because the process doesn’t fit any off-the-shelf tool’s model, automation stays half-finished and manual intervention continues.',
    'Elvora sürecin kendi mantığına özel bir sistem kurar — hazır bir araç değil, tam o süreç için baştan tasarlanmış bir çözüm.':
      'Elvora builds a system around the process’s own logic — not an off-the-shelf tool, but a solution designed from scratch for that exact process.',

    'B2B satış müdürü · çok kanallı talep akışı': 'B2B sales manager · multi-channel request flow',
    'Web formu, WhatsApp, e-posta — hangi lead sıcak?': 'Web form, WhatsApp, email — which lead is hot?',
    'Talepler web formundan, WhatsApp\'tan ve e-postadan aynı anda geliyor, satış ekibi bunları elle sıraya koyup önceliklendiriyor. Bazen gerçekten sıcak bir lead geç fark edildiği için soğuyor.':
      'Requests arrive from the web form, WhatsApp and email all at once, and the sales team manually queues and prioritises them. Sometimes a genuinely hot lead cools off simply because it was noticed too late.',
    'Kanallar arasında elle önceliklendirme yapıldığı için sıcak lead\'ler zamanında yakalanamıyor.':
      'Because prioritisation across channels is done by hand, hot leads don’t get caught in time.',
    'Elvora\'nın Lead Triyajı sistemi gelen talebi otomatik sınıflandırır, önceliklendirir, CRM\'e yazar ve ilk yanıtı otomatik gönderir.':
      'Elvora’s Lead Triage system automatically classifies and prioritises incoming requests, logs them to the CRM, and sends the first reply automatically.',

    'Pazarlama sorumlusu · tek kişilik içerik ekibi': 'Marketing lead · one-person content team',
    'İçerik üretimi tek bir kişinin takvimine bağlı.': 'Content production runs on one person’s calendar.',
    'Ürün açıklaması, sosyal medya metni, görsel varyantı hep aynı kişiden geçiyor. O kişi izinliyken ya da yoğunken yayın takvimi aksıyor, üretim birikip tıkanıyor.':
      'Product descriptions, social copy, visual variants — it all passes through the same person. When they’re out or overloaded, the publishing calendar slips and production backs up.',
    'Üretim bir sisteme değil tek bir bireye bağlı olduğu için o kişi olmadan yayın takvimi duruyor.':
      'Because production depends on one individual rather than a system, the publishing calendar stalls without them.',
    'Elvora\'nın İçerik akışı sistemi ve Elvora Studio üretimi bir kişiye değil sisteme bağlar, takvim kimseye bağımlı kalmadan işlemeye devam eder.':
      'Elvora’s Content Flow system and Elvora Studio tie production to a system, not a person — the calendar keeps moving without depending on anyone.',

    'Büyüyen şirket kurucusu / pazarlama sorumlusu': 'Founder / marketing lead at a growing company',
    'Yıllar önce yapılmış siteyle B2B görüşmesine girmek.': 'Walking into a B2B meeting with a site built years ago.',
    'Şirket büyüyor ama sitesi yıllar önce bir şablonla kurulmuş; mobilde bozuk görünüyor ve güncel konumlandırmayı yansıtmıyor. Yatırımcı ya da kurumsal müşteri görüşmesi öncesi siteyi göstermekten çekiniliyor.':
      'The company has grown, but its site was built years ago from a template; it looks broken on mobile and doesn’t reflect where the company stands today. Before an investor or enterprise-client meeting, showing the site feels risky.',
    'Eskimiş ve mobilde bozuk bir site, büyüyen şirketin güvenilirliğini görüşme masasında zayıflatıyor.':
      'An outdated, mobile-broken site undercuts a growing company’s credibility at the negotiating table.',
    'Elvora hızlı, markaya uygun, mobil öncelikli bir kurumsal site kurar; kapsam ve takvim baştan nettir.':
      'Elvora builds a fast, on-brand, mobile-first corporate site — scope and timeline are clear from day one.',

    'Marka sahibi · pazaryerine/DM\'e bağımlı satış': 'Brand owner · sales dependent on marketplaces/DMs',
    'Instagram DM\'i ve pazaryeri komisyonu arasında sıkışan marka.': 'A brand stuck between Instagram DMs and marketplace commissions.',
    'Fiziksel ya da toptan satışı olan ama kendi online mağazası olmayan bir marka sahibi için satışlar Instagram DM\'i veya pazaryeri üzerinden yürüyor. Ödeme ve checkout süreci üzerinde kontrol yok, komisyon marjı yiyor.':
      'For a brand owner with physical or wholesale sales but no online store of their own, sales run through Instagram DMs or a marketplace. There’s no control over payment or checkout, and commission eats into the margin.',
    'Kendi mağazası olmadığı için marka hem komisyon kaybediyor hem de müşteri deneyimi üzerindeki kontrolünü kaybediyor.':
      'Without their own store, the brand loses both commission and control over the customer experience.',
    'Elvora sıfırdan bir webshop kurar — Shopify veya WooCommerce, ödeme ve kargo entegrasyonuyla birlikte — marka kendi mağazasının sahibi olur.':
      'Elvora builds a webshop from scratch — Shopify or WooCommerce, with payment and shipping integration — so the brand owns its own store.',
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
