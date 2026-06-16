#!/usr/bin/env node
/**
 * Fleet foto optimizasyonu
 * --------------------------------------------------------------
 * Orijinal fotoğrafları  public/images/gallery/_raw/  klasörüne koyun,
 * ardından şu komutu çalıştırın:
 *
 *     npm run images:fleet
 *
 * Çıktı: galeri için optimize edilmiş .jpg + .webp dosyaları
 *        public/images/gallery/  altına yazılır (media.ts ile birebir uyumlu).
 *
 * Dosya isimlendirme — iki yöntemden biri:
 *  A) Sohbette gönderdiğiniz sırayla 1.jpg ... 9.jpg olarak kaydedin
 *     (aşağıdaki ORDER eşlemesi otomatik uygular).
 *  B) Doğrudan hedef isimle kaydedin: ör. fleet-porsche-911-targa.jpg
 *
 * Hero görseli istersen:  _raw/hero.jpg  koyun → /images/hero/hero-fleet.jpg üretilir.
 *
 * Gereksinim:  npm i -D sharp   (bir kez)
 */
import { readdir, mkdir, access } from 'node:fs/promises';
import { join, extname, basename } from 'node:path';
import { fileURLToPath } from 'node:url';

let sharp;
try {
  sharp = (await import('sharp')).default;
} catch {
  console.error('\n[!] "sharp" bulunamadı. Önce kurun:  npm i -D sharp\n');
  process.exit(1);
}

const ROOT    = join(fileURLToPath(import.meta.url), '..', '..');
const RAW_DIR = join(ROOT, 'public/images/gallery/_raw');
const OUT_DIR = join(ROOT, 'public/images/gallery');
const HERO_DIR = join(ROOT, 'public/images/hero');

// Sohbet sırasına göre 1..9 -> hedef dosya adı eşlemesi
const ORDER = {
  '1': 'fleet-jaguar-f-pace',
  '2': 'fleet-ford-mustang-mach1',
  '3': 'fleet-mercedes-slc-klasik',
  '4': 'fleet-mercedes-e-serisi',
  '5': 'fleet-vw-passat',
  '6': 'fleet-bmw-5-serisi',
  '7': 'fleet-mercedes-e-beyaz',
  '8': 'fleet-mercedes-s-klasik',
  '9': 'fleet-porsche-911-targa'
};
const VALID_SLOTS = new Set(Object.values(ORDER));
const EXT = new Set(['.jpg', '.jpeg', '.png', '.webp', '.heic', '.heif']);

const GALLERY_W = 1200, GALLERY_H = 900;   // 4:3
const HERO_W = 1920, HERO_H = 1080;        // 16:9

async function exists(p) { try { await access(p); return true; } catch { return false; } }

async function emit(input, slot, w, h, outDir) {
  await mkdir(outDir, { recursive: true });
  const pipeline = sharp(input).rotate().resize(w, h, { fit: 'cover', position: 'attention' });
  await pipeline.clone().jpeg({ quality: 82, mozjpeg: true }).toFile(join(outDir, `${slot}.jpg`));
  await pipeline.clone().webp({ quality: 80 }).toFile(join(outDir, `${slot}.webp`));
  console.log(`  ✓ ${slot}.jpg + .webp  (${w}x${h})`);
}

async function run() {
  if (!(await exists(RAW_DIR))) {
    console.error(`[!] Klasör yok: ${RAW_DIR}\n    Önce fotoğrafları buraya koyun.`);
    process.exit(1);
  }
  const files = (await readdir(RAW_DIR)).filter(f => EXT.has(extname(f).toLowerCase()));
  if (files.length === 0) {
    console.error(`[!] ${RAW_DIR} içinde görsel bulunamadı.`);
    process.exit(1);
  }

  console.log(`\nGaleri görselleri (${OUT_DIR}):`);
  let done = 0;
  for (const f of files) {
    const name = basename(f, extname(f));
    if (name.toLowerCase() === 'hero') continue;
    let slot = null;
    if (VALID_SLOTS.has(name)) slot = name;       // doğrudan hedef ad
    else if (ORDER[name]) slot = ORDER[name];     // 1..9 sıralı ad
    if (!slot) { console.log(`  – atlandı: ${f} (eşleşme yok)`); continue; }
    await emit(join(RAW_DIR, f), slot, GALLERY_W, GALLERY_H, OUT_DIR);
    done++;
  }

  const heroSrc = files.find(f => basename(f, extname(f)).toLowerCase() === 'hero');
  if (heroSrc) {
    console.log(`\nHero görseli (${HERO_DIR}):`);
    await mkdir(HERO_DIR, { recursive: true });
    await sharp(join(RAW_DIR, heroSrc)).rotate().resize(HERO_W, HERO_H, { fit: 'cover', position: 'attention' })
      .jpeg({ quality: 84, mozjpeg: true }).toFile(join(HERO_DIR, 'hero-fleet.jpg'));
    console.log('  ✓ hero-fleet.jpg  (1920x1080)');
    console.log('  → Hero.astro içindeki heroImage değerini /images/hero/hero-fleet.jpg yapın.');
  }

  console.log(`\nTamam: ${done} galeri görseli üretildi.\n`);
}

run().catch(e => { console.error(e); process.exit(1); });
