# Görsel Varlık Rehberi

Bu projede görseller dış URL ile hotlink yapılmadan `public/images/` altında tutulmalıdır. Lisans durumu net olmayan stok görseller kullanılmamalı; gerçek operasyon görselleri eklenirken araç plakası, kişi yüzü ve özel alan görünürlüğü kontrol edilmelidir.

## Klasörler

- `public/images/brand/`: logo dosyaları
- `public/images/hero/`: ana sayfa ve güçlü landing görselleri
- `public/images/gallery/`: operasyon kareleri
- `public/images/districts/`: Ankara ve ilçe odaklı görseller
- `public/images/blog/`: blog kapak görselleri
- `public/images/stock/`: lisansı kontrol edilmiş yerel stok görseller
- `public/images/ui/`: küçük arayüz destek görselleri
- `public/images/optimized/`: production tarafında kullanılan hafif kopyalar

> Not: Orijinal görseller kalite arşivi olarak tutulabilir. Sayfa içi kullanımda ve schema/OG görsellerinde mümkün olduğunca `public/images/optimized/` altındaki dosyalar kullanılmalıdır.

## Önerilen Dosya Adları

- `public/images/stock/tow-truck-night.jpg`
- `public/images/stock/roadside-assistance.jpg`
- `public/images/stock/car-transport.jpg`
- `public/images/stock/ankara-road.jpg`
- `public/images/stock/support-operator.jpg`

## Aktif Media Mapping

Bu dosya adları `src/data/media.ts` içinde hazır bekler. Dosya fiziksel olarak yoksa `ResponsiveImage` kırık görsel basmaz, premium fallback gösterir.

### Marka

- `public/images/brand/logo-dark.png`: açık zemin header/footer logo
- `public/images/brand/logo-white.png`: koyu zemin footer logo

### Hero

- `public/images/hero/hero-tow-truck.png`: ana sayfa hero görseli
- `public/images/hero/hero-bg.jpg`: ikincil hero/arka plan görseli

### Hizmetler

- `public/images/services/acil-oto-cekici.jpg`: 7/24 Acil Oto Çekici kartı
- `public/images/services/oto-kurtarma.jpg`: Oto Kurtarma kartı
- `public/images/services/yol-yardim.jpg`: Acil Yol Yardım kartı
- `public/images/services/kaza-sonrasi-arac-cekimi.jpg`: Kaza Sonrası Araç Çekimi kartı
- `public/images/services/sehirlerarasi-arac-tasima.jpg`: Şehirlerarası Araç Taşıma kartı
- `public/images/services/motosiklet-cekici.jpg`: Motosiklet Çekici kartı
- `public/images/services/servis-otopark-tasima.jpg`: Servis / Otopark Araç Taşıma kartı

### İlçe

- `public/images/districts/ankara-cover.png`: mevcut ortak Ankara ilçe görseli
- `public/images/districts/district-tow-truck.jpg`: ileride ortak ilçe çekici görseli olarak kullanılabilir

### Blog Kapakları

- `public/images/blog/ankarada-arac-yolda-kalirsa-ne-yapilmali.jpg`
- `public/images/blog/cekici-cagirirken-konum-nasil-paylasilir.jpg`
- `public/images/blog/kaza-sonrasi-arac-cekimi-nasil-yapilir.jpg`
- `public/images/blog/oto-cekici-cagirmadan-once-bilinmesi-gerekenler.jpg`
- `public/images/blog/sehirlerarasi-arac-tasima-ne-zaman-gerekir.jpg`
- `public/images/blog/ankarada-gece-yolda-kalinca-ne-yapmali.jpg`

### Galeri

- `public/images/gallery/tow-truck-ankara-1.jpg`
- `public/images/gallery/tow-truck-ankara-2.jpg`
- `public/images/gallery/tow-truck-ankara-3.jpg`
- `public/images/gallery/tow-truck-ankara-4.jpg`
- `public/images/gallery/tow-truck-ankara-5.jpg`
- `public/images/gallery/tow-truck-ankara-6.jpg`
- `public/images/gallery/tow-truck-ankara-7.jpg`
- `public/images/gallery/tow-truck-ankara-8.jpg`

## Önerilen Oranlar

- Hero: `1600x1000` veya `1920x1080`
- Galeri: `1200x900`
- Blog cover: `1200x675`
- District cover: `1400x900`
- Logo: şeffaf PNG veya SVG, sabit oranlı

## Kullanım Standartları

- Hero görseli `src/data/media.ts` içinde `hero.primary` veya `heroPrimary` alanına bağlanmalıdır.
- Galeri görselleri `galleryImages` dizisinde tutulmalı, dosya yoksa `ResponsiveImage` premium fallback göstermelidir.
- Blog kapakları slug bazlı `blogCovers` mapping'i üzerinden kullanılır; dosya eksikse `ResponsiveImage` premium fallback gösterir.
- İlçe sayfalarında tek güçlü visual yeterlidir; her ilçe için zayıf stok görsel kullanmak yerine kaliteli ortak Ankara/çekici görseli tercih edilmelidir.
- Stock görseller yalnızca lisansı kontrol edildikten sonra `public/images/stock/` altına yerel dosya olarak eklenmelidir. Dış URL ile hotlink yapılmamalıdır.

## Format Notları

JPG/PNG dosyalarının yanında WebP ve AVIF varyantları üretilebilir. `src/data/media.ts` içinde `webp` ve `avif` alanları doldurulduğunda `ResponsiveImage` otomatik olarak modern formatları servis eder.

## Deploy Öncesi Kontrol

- Görsel yerel dosya mı?
- Alt metin doğal ve açıklayıcı mı?
- Hero görseli LCP adayıysa `priority` kullanılıyor mu?
- Offscreen görseller `loading="lazy"` ile mi geliyor?
- Width/height değerleri gerçek ölçülerle uyumlu mu?
- Görsel yoksa kırık `<img>` yerine premium fallback görünüyor mu?

## Stok Görsel Kaynak Kayıtları

- `/images/services/acil-oto-cekici.jpg`
  Source: Pexels
  Original URL: https://www.pexels.com/photo/a-car-on-a-tow-truck-17429097/
  License checked: yes
  Usage: service card - 7/24 Acil Oto Çekici

- `/images/services/oto-kurtarma.jpg`
  Source: Pexels
  Original URL: https://www.pexels.com/photo/a-tow-truck-crane-carrying-vintage-car-while-moving-on-the-road-8931961/
  License checked: yes
  Usage: service card - Oto Kurtarma

- `/images/services/yol-yardim.jpg`
  Source: Pexels
  Original URL: https://www.pexels.com/photo/a-man-having-car-problems-on-the-roadside-6078/
  License checked: yes
  Usage: service card - Acil Yol Yardım

- `/images/services/kaza-sonrasi-arac-cekimi.jpg`
  Source: Pexels
  Original URL: https://www.pexels.com/photo/man-fixing-car-by-roadside-on-a-rainy-day-28411660/
  License checked: yes
  Usage: service card - Kaza Sonrası Araç Çekimi

- `/images/services/sehirlerarasi-arac-tasima.jpg`
  Source: Pexels
  Original URL: https://www.pexels.com/photo/tow-truck-parked-outside-building-7781262/
  License checked: yes
  Usage: service card - Şehirlerarası Araç Taşıma

- `/images/services/motosiklet-cekici.jpg`
  Source: Pexels
  Original URL: https://www.pexels.com/photo/man-on-a-motorcycle-on-the-roadside-16271110/
  License checked: yes
  Usage: service card - Motosiklet Çekici

- `/images/services/servis-otopark-tasima.jpg`
  Source: Pexels
  Original URL: https://www.pexels.com/photo/a-man-checking-the-engine-of-a-car-8478222/
  License checked: yes
  Usage: service card - Servis / Otopark Araç Taşıma

- `/images/blog/ankarada-arac-yolda-kalirsa-ne-yapilmali.jpg`
  Source: Pexels
  Original URL: https://www.pexels.com/photo/a-man-checking-his-broken-car-8869195/
  License checked: yes
  Usage: blog cover

- `/images/blog/cekici-cagirirken-konum-nasil-paylasilir.jpg`
  Source: Pexels
  Original URL: https://www.pexels.com/photo/smartphone-displaying-gps-map-on-holder-inside-car-2996306/
  License checked: yes
  Usage: blog cover

- `/images/blog/kaza-sonrasi-arac-cekimi-nasil-yapilir.jpg`
  Source: Pexels
  Original URL: https://www.pexels.com/photo/man-fixing-car-by-roadside-on-a-rainy-day-28411660/
  License checked: yes
  Usage: blog cover

- `/images/blog/oto-cekici-cagirmadan-once-bilinmesi-gerekenler.jpg`
  Source: Pexels
  Original URL: https://www.pexels.com/photo/a-man-having-car-problems-on-the-roadside-6078/
  License checked: yes
  Usage: blog cover

- `/images/blog/sehirlerarasi-arac-tasima-ne-zaman-gerekir.jpg`
  Source: Pexels
  Original URL: https://www.pexels.com/photo/tow-truck-parked-outside-building-7781262/
  License checked: yes
  Usage: blog cover

- `/images/blog/ankarada-gece-yolda-kalinca-ne-yapmali.jpg`
  Source: Pexels
  Original URL: https://www.pexels.com/photo/9501442/
  License checked: yes
  Usage: blog cover

- `/images/districts/district-tow-truck.jpg`
  Source: Pexels
  Original URL: https://www.pexels.com/photo/red-tow-truck-in-urban-setting-on-rainy-day-28447796/
  License checked: yes
  Usage: district hero

- `/images/stock/tow-truck-night.jpg`
  Source: Pexels
  Original URL: https://www.pexels.com/photo/9501442/
  License checked: yes
  Usage: stock visual

- `/images/stock/roadside-assistance.jpg`
  Source: Pexels
  Original URL: https://www.pexels.com/photo/a-man-having-car-problems-on-the-roadside-6078/
  License checked: yes
  Usage: stock visual

- `/images/stock/car-transport.jpg`
  Source: Pexels
  Original URL: https://www.pexels.com/photo/a-tow-truck-crane-carrying-vintage-car-while-moving-on-the-road-8931961/
  License checked: yes
  Usage: stock visual

- `/images/stock/ankara-road.jpg`
  Source: Pexels
  Original URL: https://www.pexels.com/photo/29654659/
  License checked: yes
  Usage: stock visual

- `/images/stock/support-operator.jpg`
  Source: Pexels
  Original URL: https://www.pexels.com/photo/15949905/
  License checked: yes
  Usage: stock visual
