# Performans ve Görsel Kullanım Kontrol Listesi

Bu doküman, Yıldızlar Oto Kurtarma sitesine gerçek çekici, araç, ekip ve hizmet görselleri eklenirken performansın ve teknik SEO yapısının korunması için hazırlanmıştır.

## Görseller Nasıl Eklenecek?

- Görseller `public/images/` altındaki ilgili klasöre eklenmelidir.
- Aynı görselin JPG, WebP ve mümkünse AVIF versiyonları hazırlanmalıdır.
- Görsel bilgisi `src/data/media.ts` içinde merkezi olarak tanımlanmalıdır.
- Sayfalarda doğrudan `<img>` yazmak yerine `ResponsiveImage.astro` componenti kullanılmalıdır.
- Her görsel için `width`, `height` ve doğal bir `alt` metni zorunludur.

## Hero Görseli Nasıl Seçilecek?

- Hero görseli gerçek hizmeti göstermelidir: çekici aracı, araç taşıma süreci veya ekipman.
- Karanlık, bulanık, stok hissi veren ya da markayı göstermeyen görseller kullanılmamalıdır.
- Hero görseli LCP adayı olabileceği için `priority: true`, `loading="eager"` ve `fetchpriority="high"` ile kullanılmalıdır.
- Hero alanında layout shift oluşmaması için sabit aspect-ratio veya `width`/`height` değerleri korunmalıdır.

## Hangi Görseller Lazy, Hangileri Eager?

- İlk ekranda görünen hero görseli: `eager`.
- Sayfanın altındaki hizmet, blog, ilçe veya destek görselleri: `lazy`.
- Blog kartları ve liste görselleri genellikle `lazy` olmalıdır.
- Logo, icon ve küçük SVG dosyaları kritik değilse lazy davranışına gerek yoktur.

## Alt Metin Nasıl Yazılacak?

- Alt metin görselde gerçekten görünen şeyi anlatmalıdır.
- Anahtar kelime doldurma yapılmamalıdır.
- Örnek iyi kullanım: `Ankara oto çekici hizmeti için çekici aracına yüklenen binek araç`.
- Örnek kötü kullanım: `Ankara çekici en iyi çekici ucuz çekici hızlı çekici`.

## WebP/AVIF Dosya İsimlendirme Standardı

- Aynı görsel aynı taban adıyla saklanmalıdır.
- Örnek:
  - `tow-truck-ankara.jpg`
  - `tow-truck-ankara.webp`
  - `tow-truck-ankara.avif`
- Türkçe karakter, boşluk ve büyük harf kullanılmamalıdır.
- Klasör önerisi:
  - `public/images/hero/`
  - `public/images/services/`
  - `public/images/districts/`
  - `public/images/blog/`
  - `public/images/ui/`

## Lighthouse Test Adımları

1. Production build alın: `ASTRO_TELEMETRY_DISABLED=1 npm run build`
2. Preview başlatın: `npm run preview`
3. Chrome DevTools Lighthouse panelinde mobil test çalıştırın.
4. Performance, Accessibility, Best Practices ve SEO skorlarını kontrol edin.
5. LCP öğesinin beklenen hero alanı olup olmadığını inceleyin.
6. CLS uyarısı varsa görsel boyutları ve sticky CTA alanını kontrol edin.

## PageSpeed Insights Test Adımları

1. Site yayına alındıktan sonra PageSpeed Insights üzerinde ana sayfayı test edin.
2. `/ankara-cekici/`, önemli ilçe sayfaları ve `/blog/` ayrıca test edilmelidir.
3. Mobil sonuçlarda LCP, INP ve CLS değerleri takip edilmelidir.
4. Büyük görsel, render-blocking kaynak veya kullanılmayan JS uyarıları incelenmelidir.

## Search Console Core Web Vitals Notları

- Yayından sonra Search Console Core Web Vitals raporu düzenli izlenmelidir.
- URL grupları ayrı değerlendirilmelidir: ana sayfa, ilçe sayfaları, blog sayfaları.
- Sorunlu URL grubu varsa önce şablon componentleri kontrol edilmelidir.
- Görsel ekleme sonrası LCP ve CLS değişimleri özellikle takip edilmelidir.

## Deploy Öncesi Kontrol Listesi

- Build başarılı mı?
- Sitemap güncel mi?
- robots.txt doğru sitemap URL’sini gösteriyor mu?
- Görsellerin `width` ve `height` değerleri doğru mu?
- Hero görseli eager, offscreen görseller lazy mi?
- Alt metinler doğal ve açıklayıcı mı?
- Header ve mobil CTA tıklanabilir mi?
- İç linklerde 404 var mı?
- Her sayfada tek H1 korunuyor mu?
- JSON-LD scriptleri geçerli JSON olarak render oluyor mu?
