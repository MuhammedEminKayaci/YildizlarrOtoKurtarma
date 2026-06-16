# Deploy Sonrası SEO ve Kalite Kontrol Listesi

Bu doküman, Yıldızlar Oto Kurtarma sitesini yayına aldıktan sonra teknik SEO, dönüşüm ve performans kontrollerini düzenli şekilde yapmak için hazırlanmıştır.

## Deploy Öncesi Son Komutlar

```bash
npm install
ASTRO_TELEMETRY_DISABLED=1 npm run build
npm run preview
```

Deploy öncesinde build hatasız tamamlanmalı, `dist/robots.txt`, `dist/sitemap-index.xml` ve `dist/sitemap-0.xml` dosyaları kontrol edilmelidir.

## Domain Yönlendirme Kontrolü

- Ana domain: `https://www.yakindacekici.com/`
- Tüm trafik tek canonical domaine yönlenmelidir.
- `http://`, `https://yakindacekici.com/` ve varsa eski domain varyasyonları `https://www.yakindacekici.com/` adresine 301 ile yönlenmelidir.
- Eski `.html` URL'ler yeni temiz URL'lere 301 ile yönlenmelidir. Örnek: `/ankara-golbasi.html` -> `/ankara-cekici/golbasi/`.

## HTTPS Kontrolü

- SSL sertifikası aktif olmalıdır.
- HTTP istekleri HTTPS’e yönlenmelidir.
- Tarayıcıda güvenlik uyarısı olmamalıdır.

## www / non-www Yönlendirme Kontrolü

- Canonical standart `www` olarak belirlendi.
- `https://yakindacekici.com/` adresi `https://www.yakindacekici.com/` adresine yönlenmelidir.
- Sitemap ve canonical URL’leri `www` ile uyumlu kalmalıdır.

## robots.txt Kontrolü

Yayından sonra şu adres açılmalıdır:

```text
https://www.yakindacekici.com/robots.txt
```

Beklenen içerik:

```text
User-agent: *
Allow: /

Sitemap: https://www.yakindacekici.com/sitemap-index.xml
```

## sitemap-index.xml Kontrolü

Yayından sonra şu adres açılmalıdır:

```text
https://www.yakindacekici.com/sitemap-index.xml
```

Sitemap index içinde `sitemap-0.xml` görünmelidir. `sitemap-0.xml` içinde ana sayfa, hizmetler, Ankara çekici, ilçe sayfaları, blog ve iletişim URL’leri bulunmalıdır.

## Google Search Console Kurulumu

- Domain property veya URL prefix property kurulmalıdır.
- DNS doğrulaması mümkünse domain property tercih edilmelidir.
- Site sahibi ve geliştirici erişimleri ayrı yönetilmelidir.

## Search Console Sitemap Gönderimi

Search Console içinde sitemap olarak şu URL gönderilmelidir:

```text
https://www.yakindacekici.com/sitemap-index.xml
```

Sitemap göndermek index garantisi vermez. Google’a URL keşfi için güçlü bir sinyal sağlar, ancak tarama ve indexleme Google’ın değerlendirmesine bağlıdır.

## URL Inspection ile Test Edilecek İlk URL’ler

URL Inspection aracıyla ilk etapta şu sayfalar test edilmelidir:

```text
https://www.yakindacekici.com/
https://www.yakindacekici.com/ankara-cekici/
https://www.yakindacekici.com/hizmetler/
https://www.yakindacekici.com/iletisim/
https://www.yakindacekici.com/blog/
https://www.yakindacekici.com/ankara-cekici/cankaya/
https://www.yakindacekici.com/blog/ankarada-arac-yolda-kalirsa-ne-yapilmali/
```

URL Inspection ile önemli URL’ler tek tek test edilebilir. Canlı URL testi, Google’ın sayfayı görebildiğini ve render edebildiğini kontrol etmek için kullanılmalıdır.

## Google Business Profile Web Sitesi Bağlantısı

- Web sitesi alanına `https://www.yakindacekici.com/` girilmelidir.
- Profil adı gerçek marka adıyla uyumlu olmalıdır: `Yıldızlar Oto Kurtarma`.
- Sahte marka eki, anahtar kelime doldurma veya gerçek dışı lokasyon ifadesi eklenmemelidir.

## Google Business Profile Hizmet Alanı Kontrolü

- Hizmet alanı Ankara ve gerçekten hizmet verilen ilçelerle sınırlı olmalıdır.
- Gerçek olmayan hizmet alanı eklenmemelidir.
- Fiziksel adres görünürlüğü, işletmenin gerçek çalışma modeline göre ayarlanmalıdır.
- Sahte adres, sanal ofis veya doğrulanmamış konum bilgisi kullanılmamalıdır.

## İlk 30 Gün SEO Takip Planı

- Haftada 2 kez Search Console Pages raporu kontrol edilmelidir.
- Indexlenen ve keşfedilen URL’ler izlenmelidir.
- 404, soft 404, yönlendirme hatası veya canonical uyuşmazlığı varsa not alınmalıdır.
- İlk ayda yeni sayfa eklemek yerine mevcut sayfaların taranması ve index durumunun oturması beklenmelidir.

## İlk 30 Gün Google Business Profile Paylaşım Planı

- Haftada 1-2 kez gerçek hizmet kapsamını anlatan kısa paylaşım yapılabilir.
- Paylaşımlar abartılı hız, fiyat veya sıralama iddiası içermemelidir.
- Görsel kullanılacaksa gerçek ekip, araç veya hizmet görseli tercih edilmelidir.
- Stok ve yanıltıcı görsellerden kaçınılmalıdır.

## İlk 30 Gün Yorum İsteme Stratejisi

- Sadece gerçek müşterilerden yorum istenmelidir.
- Yorum karşılığında indirim, hediye veya teşvik sunulmamalıdır.
- Sahte yorum, tanıdık yorumu veya hizmet alınmadan yazılmış değerlendirme kullanılmamalıdır.
- Yorum talebi sade olmalıdır: hizmet sonrası deneyimlerini dürüstçe paylaşmaları istenebilir.

## PageSpeed Insights Test Adımları

1. `https://pagespeed.web.dev/` adresinde ana sayfayı test edin.
2. Mobil sonuçları öncelikli değerlendirin.
3. Şu URL’leri ayrıca test edin:
   - `/ankara-cekici/`
   - `/iletisim/`
   - `/blog/`
   - önemli bir ilçe sayfası
4. LCP, INP ve CLS değerlerini not alın.
5. Görsel ekleme sonrası testleri tekrar edin.
6. LCP görselinin `/images/optimized/` altından geldiği kontrol edilmelidir.

## Lighthouse Mobil Test Adımları

1. Production preview veya canlı site üzerinde Chrome DevTools açın.
2. Lighthouse panelinde Mobile modunu seçin.
3. Performance, Accessibility, Best Practices ve SEO raporlarını çalıştırın.
4. LCP öğesinin beklenen hero veya ana içerik alanı olup olmadığını kontrol edin.
5. CLS uyarısı varsa görsel boyutları, sticky CTA ve font yükleme davranışı incelenmelidir.

## Search Console Coverage / Pages Raporu Takip Notları

- `Indexed`, `Discovered - currently not indexed`, `Crawled - currently not indexed` durumları izlenmelidir.
- Yeni sitelerde index süreci zaman alabilir.
- Gereksiz URL parametresi, non-www URL veya HTTP URL görülürse yönlendirme ve canonical kontrol edilmelidir.

## Search Console Enhancements / Structured Data Takip Notları

- Breadcrumb, FAQ, Article ve diğer uygun enhancement raporları takip edilmelidir.
- Uyarılar sayfa içeriğiyle schema uyumsuzluğundan kaynaklanıyorsa schema güncellenmelidir.
- JSON-LD içinde kullanıcıya görünmeyen sahte yorum, puan veya konum bilgisi eklenmemelidir.

## Dönüşüm Kontrolü: Telefon, WhatsApp, Mailto

Yayından sonra mobil ve masaüstünde şu bağlantılar test edilmelidir:

- Header `Hemen Ara`
- Mobil sticky `Hemen Ara`
- Mobil sticky `WhatsApp`
- İletişim sayfası telefon linki
- İletişim sayfası WhatsApp linki
- Footer telefon linki
- Footer e-posta linki

Beklenen formatlar:

```text
tel:+905378994818
https://wa.me/905378994818
mailto:yildizlarotokurtarma@gmail.com
```
