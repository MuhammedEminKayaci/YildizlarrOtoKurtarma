# SEO Duzeltme Notlari ve Sonraki Adimlar

Bu dosya, mevcut iyilestirmelerin neyi duzelttigini ve yayindan sonra hangi kontrollerin yapilmasi gerektigini ozetler.

## Tamamlanan Kod Tarafi Duzeltmeler

- Eski `.html` URL'leri icin 301 yonlendirme katmani eklendi:
  - `public/_redirects`
  - `public/.htaccess`
  - `vercel.json`
- Canonical domain icin `https://www.yakindacekici.com/` standardi desteklendi.
- Statik varliklar icin cache header dosyasi eklendi:
  - `public/_headers`
- Buyuk gorsellerin optimize kopyalari uretildi:
  - `public/images/optimized/hero/hero-bg.jpg`
  - `public/images/optimized/stock/*`
  - `public/images/optimized/services/*`
  - `public/images/optimized/blog/*`
  - `public/images/optimized/districts/district-tow-truck.jpg`
- Site bilesenleri optimize gorsellere baglandi.
- OG gorseli SVG yerine optimize edilmis fotograf gorseline tasindi.
- Blog Article schema gorselleri ilgili blog kapak gorseline baglandi.
- Olmayan site ici arama icin uretilen `SearchAction` kaldirildi.
- Organization, WebSite, LocalBusiness ve Service catalog schema sinyalleri guclendirildi.
- Hakkimizda sayfasina seffaf hizmet yaklasimi bolumu eklendi.
- FAQ'a fiyat ve kapali otopark/dar sokak sorulari eklendi.
- Ana hizmetler icin detay sayfalari eklendi:
  - `/hizmetler/acil-oto-cekici/`
  - `/hizmetler/oto-kurtarma/`
  - `/hizmetler/yol-yardim/`
  - `/hizmetler/kaza-sonrasi-arac-cekimi/`
  - `/hizmetler/sehirlerarasi-arac-tasima/`
  - `/hizmetler/motosiklet-cekici/`
  - `/hizmetler/servis-otopark-arac-tasima/`
- Blog icerigi genisletildi:
  - `/blog/ankara-cekici-fiyatlari-neye-gore-degisir/`
  - `/blog/kapali-otoparktan-arac-cekimi-nasil-yapilir/`
  - `/blog/otomatik-vites-arac-cekiciye-nasil-yuklenir/`
  - `/blog/ankara-cevre-yolunda-arac-yolda-kalirsa-ne-yapilmali/`
  - `/blog/sanayiye-arac-tasima-sureci-nasil-ilerler/`
  - `/blog/kaza-sonrasi-sigorta-ve-cekici-sureci/`
- Yuksek oncelikli 8 ilce sayfasina bolgesel rehber ve hizmet ic link katmani eklendi:
  - Cankaya
  - Kecioren
  - Yenimahalle
  - Mamak
  - Etimesgut
  - Sincan
  - Altindag
  - Golbasi
- Merkez disi 6 onemli ilce sayfasina bolgesel rehber, hizmet ic linkleri ve ek FAQ katmani eklendi:
  - Polatli
  - Pursaklar
  - Kahramankazan
  - Cubuk
  - Akyurt
  - Elmadag
- Ankara cekici ana sayfasina hizmet niyeti bloklari, oncelikli ilce kisa yollari, hizmet katalog schema ve WebPage schema eklendi.
- Yuksek oncelikli 8 ilce sayfasina ilceye ozel ek FAQ sorulari eklendi ve FAQ schema ile ayni listeye baglandi.

## Yayindan Sonra Mutlaka Test Edilecek URL'ler

Asagidaki eski URL'ler 301 ile yeni URL'lere gitmelidir:

```text
https://www.yakindacekici.com/index.html -> /
https://www.yakindacekici.com/ankara.html -> /ankara-cekici/
https://www.yakindacekici.com/hakkimizda.html -> /hakkimizda/
https://www.yakindacekici.com/iletisim.html -> /iletisim/
https://www.yakindacekici.com/ankara-golbasi.html -> /ankara-cekici/golbasi/
https://www.yakindacekici.com/ankara-altindag.html -> /ankara-cekici/altindag/
https://www.yakindacekici.com/ankara-kalinic.html -> /ankara-cekici/kalecik/
```

Asagidaki URL'ler 200 donmelidir:

```text
https://www.yakindacekici.com/
https://www.yakindacekici.com/ankara-cekici/
https://www.yakindacekici.com/hizmetler/
https://www.yakindacekici.com/iletisim/
https://www.yakindacekici.com/blog/
https://www.yakindacekici.com/sitemap-index.xml
https://www.yakindacekici.com/robots.txt
```

## Dis Sistemlerde Yapilacaklar

Bu adimlar kodla otomatik tamamlanamaz; hosting, Search Console ve Google Business Profile erisimi gerekir.

- Yeni `dist` ciktisi canli sunucuya yuklenmeli.
- Eski canli dosyalarin yeni build ile degistiginden emin olunmali.
- Hosting panelinde `www` canonical domain ve HTTPS zorlamasi kontrol edilmeli.
- Google Search Console'da `sitemap-index.xml` yeniden gonderilmeli.
- Search Console URL Inspection ile ana sayfa, `/ankara-cekici/`, `/iletisim/` ve birkac ilce sayfasi test edilmeli.
- Google Business Profile web sitesi alani `https://www.yakindacekici.com/` olmalidir.
- Gercek musterilerden duzenli, tesviksiz yorum istenmelidir.
- Haftada 1-2 Google Business Profile paylasimi yapilabilir.

## Icerik Buyume Plani

Ilk ayda yeni sayfa patlatmak yerine index durumunu izlemek daha sagliklidir. Sonraki asamada su isler yapilabilir:

- Kalan uzak ilceler icin gelen talep verisine gore ek bolgesel rehber ve FAQ genisletmeleri.
- Gercek ekip/arac fotograflari geldikce stok gorsellerin degistirilmesi.
