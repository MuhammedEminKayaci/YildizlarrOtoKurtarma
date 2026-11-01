// Mobil hız için: sitede kullanılan görsellerin 480/800 px WebP sürümlerini üretir.
// Çalıştırma: node scripts/make-responsive-images.mjs
import sharp from 'sharp';
import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs';
import { join, extname } from 'node:path';

const widths = [480, 800];
const refs = new Set();
function scan(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) scan(p);
    else for (const m of readFileSync(p, 'utf8').matchAll(/\/images\/[\w./-]+\.(?:jpe?g|png|webp)/g)) refs.add(m[0]);
  }
}
scan('src');

const bases = new Set();
for (const ref of refs) {
  if (ref.includes('/brand/') || /-(480|800)\.webp$/.test(ref)) continue;
  const webp = ref.replace(/\.(jpe?g|png)$/i, '.webp');
  bases.add(existsSync(join('public', webp)) ? webp : ref);
}

let made = 0;
for (const base of bases) {
  const file = join('public', base);
  if (!existsSync(file)) continue;
  const { width } = await sharp(file).metadata();
  const stem = file.slice(0, -extname(file).length);
  for (const w of widths) {
    const out = `${stem}-${w}.webp`;
    if (!width || width <= w || existsSync(out)) continue;
    await sharp(file).resize({ width: w }).webp({ quality: 72 }).toFile(out);
    made++;
  }
}
console.log(`images: ${bases.size}, variants created: ${made}`);
