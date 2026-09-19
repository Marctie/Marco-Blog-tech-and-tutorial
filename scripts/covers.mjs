// Genera le copertine degli articoli (public/covers/<slug>.webp)
// e le immagini di anteprima social (public/og/<slug>.jpg).
// Rigenera solo quelle mancanti; usa --tutte per rifarle tutte.
import { readdir, readFile, mkdir, access } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';
import { ICONE } from '../src/lib/icone.mjs';
import { CATEGORIE, TIPI, SITE } from '../src/site.config.ts';

const ROOT = path.resolve(import.meta.dirname, '..');
const DIR_ARTICOLI = path.join(ROOT, 'src/content/articoli');
const DIR_COVERS = path.join(ROOT, 'public/covers');
const DIR_OG = path.join(ROOT, 'public/og');
const tutte = process.argv.includes('--tutte');

const FONT = "'Segoe UI', 'Inter', 'DejaVu Sans', Arial, sans-serif";

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function frontmatter(testo) {
  const m = testo.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  const dati = {};
  if (!m) return dati;
  for (const riga of m[1].split(/\r?\n/)) {
    const r = riga.match(/^(\w+):\s*(.*)$/);
    if (!r) continue;
    let v = r[2].trim();
    // valore tra virgolette (con eventuale commento dopo) oppure valore semplice
    const q = v.match(/^"((?:[^"\\]|\\.)*)"/) ?? v.match(/^'((?:[^']|'')*)'/);
    if (q) v = q[1].replace(/''/g, "'").replace(/\\"/g, '"');
    else v = v.replace(/\s+#.*$/, '');
    dati[r[1]] = v;
  }
  return dati;
}

// numero pseudo-casuale stabile a partire dallo slug
function seme(str) {
  let h = 2166136261;
  for (const c of str) h = Math.imul(h ^ c.charCodeAt(0), 16777619);
  return () => {
    h = Math.imul(h ^ (h >>> 15), 2246822507);
    h = Math.imul(h ^ (h >>> 13), 3266489909);
    return ((h ^= h >>> 16) >>> 0) / 4294967296;
  };
}

function sfondo(w, h, colore, rnd) {
  const x1 = 55 + rnd() * 40;
  const y1 = rnd() * 60;
  const x2 = rnd() * 35;
  const y2 = 60 + rnd() * 40;
  const secondo = ['#18d6c4', '#7c5cff', '#ff6b9d'][Math.floor(rnd() * 3)];
  let puntini = '';
  for (let y = 30; y < h; y += 36) {
    for (let x = 30; x < w; x += 36) puntini += `<circle cx="${x}" cy="${y}" r="1.4"/>`;
  }
  // qualche forma geometrica per variare
  let forme = '';
  for (let i = 0; i < 3; i++) {
    const cx = rnd() * w;
    const cy = rnd() * h;
    const r = 60 + rnd() * 140;
    forme += `<circle cx="${cx.toFixed(0)}" cy="${cy.toFixed(0)}" r="${r.toFixed(0)}" fill="none" stroke="#fff" stroke-opacity="${(0.05 + rnd() * 0.06).toFixed(2)}" stroke-width="2"/>`;
  }
  return `
  <defs>
    <radialGradient id="g1" cx="${x1}%" cy="${y1}%" r="75%">
      <stop offset="0" stop-color="${colore}" stop-opacity=".95"/>
      <stop offset="1" stop-color="${colore}" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="g2" cx="${x2}%" cy="${y2}%" r="60%">
      <stop offset="0" stop-color="${secondo}" stop-opacity=".55"/>
      <stop offset="1" stop-color="${secondo}" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="fade" x1="0" y1="0" x2="0" y2="1">
      <stop offset=".35" stop-color="#0b0b12" stop-opacity="0"/>
      <stop offset="1" stop-color="#0b0b12" stop-opacity=".75"/>
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#101019"/>
  <rect width="${w}" height="${h}" fill="url(#g1)"/>
  <rect width="${w}" height="${h}" fill="url(#g2)"/>
  <g fill="#fff" fill-opacity=".07">${puntini}</g>
  ${forme}`;
}

function icona(nome, x, y, scala, opacita) {
  return `<g transform="translate(${x} ${y}) scale(${scala})" fill="none" stroke="#fff" stroke-opacity="${opacita}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${ICONE[nome] ?? ICONE.spark}</g>`;
}

function pill(testo, x, y, colore) {
  const t = testo.toUpperCase();
  const larg = t.length * 13.5 + 48;
  return `<g transform="translate(${x} ${y})">
    <rect width="${larg}" height="44" rx="22" fill="#0b0b12" fill-opacity=".55" stroke="#fff" stroke-opacity=".18"/>
    <circle cx="24" cy="22" r="6" fill="${colore}"/>
    <text x="38" y="29" font-family="${FONT}" font-size="19" font-weight="700" letter-spacing="2" fill="#fff">${esc(t)}</text>
  </g>`;
}

function marchio(x, y) {
  return `<text x="${x}" y="${y}" text-anchor="end" font-family="${FONT}" font-size="24" font-weight="700" fill="#fff" fill-opacity=".85">${esc(SITE.name)}</text>`;
}

function a_capo(testo, maxCar) {
  const parole = testo.split(/\s+/);
  const righe = [];
  let riga = '';
  for (const p of parole) {
    if ((riga + ' ' + p).trim().length > maxCar && riga) {
      righe.push(riga);
      riga = p;
    } else riga = (riga + ' ' + p).trim();
  }
  if (riga) righe.push(riga);
  return righe;
}

function svgCopertina(d, slug) {
  const w = 1200, h = 675;
  const cat = CATEGORIE[d.categoria] ?? CATEGORIE.pc;
  const rnd = seme(slug);
  const parola = d.copertina || cat.breve;
  const size = parola.length > 12 ? 92 : parola.length > 8 ? 116 : 138;
  const tipo = d.tipo === 'notizia' ? cat.breve : TIPI[d.tipo]?.nome ?? '';
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  ${sfondo(w, h, cat.colore, rnd)}
  ${icona(cat.icona, 720, 90, 17, 0.2)}
  <rect width="${w}" height="${h}" fill="url(#fade)"/>
  ${pill(tipo, 56, 52, cat.colore)}
  <text x="56" y="${h - 76}" font-family="${FONT}" font-size="${size}" font-weight="800" letter-spacing="-3" fill="#fff">${esc(parola)}</text>
  ${marchio(w - 56, h - 44)}
</svg>`;
}

function svgOg(d, slug) {
  const w = 1200, h = 630;
  const cat = CATEGORIE[d.categoria] ?? CATEGORIE.pc;
  const rnd = seme(slug);
  const righe = a_capo(d.title ?? SITE.name, 30).slice(0, 4);
  const fs = righe.length > 3 ? 58 : 66;
  const y0 = h - 110 - (righe.length - 1) * (fs + 8);
  const tipo = d.tipo === 'notizia' ? cat.nome : TIPI[d.tipo]?.nome ?? cat.nome;
  const testo = righe
    .map((r, i) => `<text x="64" y="${y0 + i * (fs + 8)}" font-family="${FONT}" font-size="${fs}" font-weight="800" letter-spacing="-1.5" fill="#fff">${esc(r)}</text>`)
    .join('');
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  ${sfondo(w, h, cat.colore, rnd)}
  ${icona(cat.icona, 820, 40, 14, 0.16)}
  <rect width="${w}" height="${h}" fill="#0b0b12" fill-opacity=".35"/>
  ${pill(tipo, 64, 56, cat.colore)}
  ${testo}
  ${marchio(w - 64, h - 48)}
</svg>`;
}

function svgDefault() {
  const w = 1200, h = 630;
  const rnd = seme('tastoreset');
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  ${sfondo(w, h, '#7c5cff', rnd)}
  <text x="64" y="330" font-family="${FONT}" font-size="104" font-weight="800" letter-spacing="-3" fill="#fff">${esc(SITE.name)}</text>
  <text x="68" y="400" font-family="${FONT}" font-size="34" font-weight="600" fill="#fff" fill-opacity=".85">${esc(SITE.tagline)}</text>
</svg>`;
}

const esiste = (p) => access(p).then(() => true, () => false);

await mkdir(DIR_COVERS, { recursive: true });
await mkdir(DIR_OG, { recursive: true });

const file = (await readdir(DIR_ARTICOLI)).filter((f) => f.endsWith('.md'));
let fatte = 0;
for (const f of file) {
  const slug = f.replace(/\.md$/, '');
  const cover = path.join(DIR_COVERS, `${slug}.webp`);
  const og = path.join(DIR_OG, `${slug}.jpg`);
  if (!tutte && (await esiste(cover)) && (await esiste(og))) continue;
  const d = frontmatter(await readFile(path.join(DIR_ARTICOLI, f), 'utf8'));
  await sharp(Buffer.from(svgCopertina(d, slug))).webp({ quality: 82 }).toFile(cover);
  await sharp(Buffer.from(svgOg(d, slug))).jpeg({ quality: 84, mozjpeg: true }).toFile(og);
  fatte++;
}
const def = path.join(DIR_OG, 'default.jpg');
if (tutte || !(await esiste(def))) await sharp(Buffer.from(svgDefault())).jpeg({ quality: 88, mozjpeg: true }).toFile(def);
console.log(`Copertine generate: ${fatte} (articoli totali: ${file.length})`);
