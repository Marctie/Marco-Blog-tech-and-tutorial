// Crea un nuovo articolo con il frontmatter già pronto.
// Uso: npm run nuovo -- "Titolo dell'articolo" [tipo] [categoria]
//   tipo: notizia | approfondimento | guida-acquisto | tutorial | problema
//   categoria: smartphone | pc | gaming | console | app | sicurezza | ai
import { writeFile, access } from 'node:fs/promises';
import path from 'node:path';

const [titolo, tipo = 'notizia', categoria = 'smartphone'] = process.argv.slice(2);
if (!titolo) {
  console.error('Uso: npm run nuovo -- "Titolo dell\'articolo" [tipo] [categoria]');
  process.exit(1);
}

const slug = titolo
  .toLowerCase()
  .normalize('NFD')
  .replace(/[̀-ͯ]/g, '')
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/^-|-$/g, '')
  .slice(0, 80);

const oggi = new Date().toISOString().slice(0, 10);
const file = path.resolve(import.meta.dirname, '../src/content/articoli', `${slug}.md`);

try {
  await access(file);
  console.error(`Esiste già: ${file}`);
  process.exit(1);
} catch {}

const extra =
  tipo === 'problema' || tipo === 'tutorial'
    ? `dispositivo: android   # android | iphone | windows | console | rete | app | accessori
difficolta: facile     # facile | media | avanzata
tempo: "10 minuti"
`
    : '';

const contenuto = `---
title: "${titolo.replace(/"/g, '\\"')}"
description: "Una frase che riassume l'articolo e invoglia a leggerlo."
date: ${oggi}
tipo: ${tipo}
categoria: ${categoria}
tags: []
copertina: "Parola chiave"   # testo grande stampato sulla copertina
${extra}fonti: []
#  - titolo: "Nome della fonte"
#    url: "https://..."
video: []
#  - titolo: "Descrizione del video o del canale"
#    url: "https://www.youtube.com/@canale"
#    canale: "Nome canale"
---

Apertura che aggancia il lettore.

## Primo punto

Testo.

## Secondo punto

Testo.

> Una frase da mettere in evidenza.
`;

await writeFile(file, contenuto, 'utf8');
console.log(`Creato: src/content/articoli/${slug}.md`);
console.log('La copertina verrà generata automaticamente alla prossima build (o con: npm run covers).');
