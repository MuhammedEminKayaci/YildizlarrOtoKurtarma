# Fleet fotoğrafları buraya

Sohbette gönderdiğin 9 fotoğrafı bu klasöre koy. İki yöntemden biri:

**Yöntem A — Sıralı (en kolay):** Fotoğrafları sohbetteki sırayla şu adlarla kaydet:

| Dosya | Araç |
|------|------|
| `1.jpg` | Jaguar F-Pace (lacivert) |
| `2.jpg` | Ford Mustang Mach 1 |
| `3.jpg` | Mercedes SLC klasik (gümüş) |
| `4.jpg` | Mercedes E-Serisi (gümüş) |
| `5.jpg` | VW Passat (siyah) |
| `6.jpg` | BMW 5 Serisi (gün batımı) |
| `7.jpg` | Mercedes E-Serisi (beyaz, benzin istasyonu) |
| `8.jpg` | Mercedes S-Serisi klasik (siyah) |
| `9.jpg` | Porsche 911 Targa (kırmızı) |

**Yöntem B — Doğrudan ad:** Hedef adla kaydet, ör. `fleet-porsche-911-targa.jpg`.

**Hero görseli (opsiyonel):** En güçlü kareyi `hero.jpg` adıyla koy → `/images/hero/hero-fleet.jpg` üretilir.

Sonra proje kökünde:

```bash
npm i -D sharp      # bir kez
npm run images:fleet
```

Çıktı `.jpg` + `.webp` olarak `public/images/gallery/` altına yazılır ve site otomatik kullanır.
