# brand_assets/

Bu klasör şu an boş. Gerçek marka varlıkları buraya konulacak.

Şu an sitede **yer tutan** değerler:

| Ne | Şu anki durum | Nereden değişir |
|---|---|---|
| Logo | Tipografik wordmark: `Elvora` + vermilion nokta + `GLOBAL` | `.wordmark` bloğu — 6 HTML dosyasının header ve footer'ında |
| Aksan rengi | `#E8442E` (hover `#F95338`, pressed `#8F2A1C`) | `assets/elvora.css` → `:root` içindeki `--vermilion*` token'ları |
| Favicon | `assets/favicon.svg` — üretilen geçici işaret | Aynı dosyayı değiştir, 6 sayfa da onu kullanıyor |
| Tipografi | Instrument Serif + Archivo + IBM Plex Mono (Google Fonts) | `:root` → `--font-display` / `--font-sans` / `--font-mono` |

## Buraya dosya eklerken

- **Logo** gelirse: SVG tercih edilir. `.wordmark` içeriğini `<img>` veya inline SVG ile değiştir; sınıfı koru, hover/focus halleri ona bağlı.
- **Renk paleti** gelirse: `--vermilion` token'larını gerçek değerlerle değiştir. Renk hiçbir yerde sabit yazılmadı, hepsi token üzerinden geliyor — tek noktadan değişir.
- **Kurumsal font** gelirse: `@font-face` ile `assets/` altından self-host et, `--font-*` token'larını güncelle, `index.html`'deki Google Fonts `<link>`'lerini kaldır.

> Türkçe içerik nedeniyle eklenecek her fontun `ğ ş ı İ ç ö ü Ğ Ş Ç Ö Ü` gliflerini içerdiği doğrulanmalı. Özellikle `İ` (noktalı büyük I) ve `ı` (noktasız küçük ı) çoğu ücretsiz fontta eksiktir.
