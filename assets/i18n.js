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
    'Şu anda çalışan': 'Six systems',
    'altı sistem.': 'running right now.',
    'Bunlar konsept değil — kurup canlıya aldığımız, test edilmiş sistem paketleri. Kapsam baştan belli, fiyat baştan belli.':
      'These aren’t concepts — they’re tested system packages we’ve built and shipped ourselves. Scope fixed upfront, price fixed upfront.',
    'Tüm Flow sistemlerini incele': 'Browse all Flow systems',
    '03 / İki hat': '03 / Two tracks',
    '05 / Yaklaşım': '05 / Approach',
    '06 / Süreç': '06 / Process',
    '07 / Kurucu': '07 / Founder',
    '08 / Başlarken': '08 / Getting started',

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
    'Elvora Global blogu yakında yayında. AI otomasyonu, içerik üretimi ve marka sistemleri üzerine yazılar.':
      'The Elvora Global blog is coming soon. Articles on AI automation, content production and brand systems.',
    'Yazılar': 'Posts',
    'yakında.': 'coming soon.',
    'AI otomasyonu, içerik üretimi ve marka sistemleri üzerine yazılarımızı burada yayınlayacağız. Şu an hazırlanıyor — bu arada projenizi doğrudan bize anlatabilirsiniz.':
      'We’ll publish articles on AI automation, content production and brand systems here. It’s in the works — in the meantime you can tell us about your project directly.',

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
    'Temel, Standart ve Premium destek seviyeleriyle devam ediyoruz — bakım, geliştirme kapasitesi ve yanıt süresi kapsamına göre değişir.':
      'We continue with Basic, Standard and Premium support levels — they vary by maintenance, development capacity and response time.',
    'Destek seviyelerine bak': 'See support levels',
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
    'Henüz müşteri işi değil,': 'Not client work yet,',
    'kanıtlanmış fikir.': 'a proven idea.',
    'Konsept marka': 'Concept brand',
    'Problem:': 'Problem:',
    'Sipariş ve stok verisi ERP, site ve pazaryeri arasında elle senkronlanıyor; ekip zamanının önemli kısmı veri karşılaştırmaya gidiyor.':
      'Order and stock data is synced by hand across the ERP, website and marketplaces; a large share of the team’s time goes into reconciling data.',
    'Yaklaşım:': 'Approach:',
    'Elvora Flow\'un katalog senkronu sistemi kurgulandı — stok/fiyat güncellemeleri otomatik akıyor, tutarsızlıklar anlık işaretleniyor.':
      'Elvora Flow’s catalogue-sync system was designed — stock/price updates flow automatically, and mismatches are flagged instantly.',
    'Beklenen sonuç:': 'Expected outcome:',
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
