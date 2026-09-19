import { getCollection, type CollectionEntry } from 'astro:content';

export type Articolo = CollectionEntry<'articoli'>;

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Aggiunge il base path (serve su GitHub Pages senza dominio). */
export function url(path = '/'): string {
  if (/^(https?:|mailto:|#)/.test(path)) return path;
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${BASE}${p}`;
}

export async function getArticoli(): Promise<Articolo[]> {
  const tutti = await getCollection('articoli', ({ data }) => !data.bozza);
  return tutti.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function linkArticolo(a: Articolo): string {
  return url(`/articoli/${a.id}/`);
}

export function copertina(a: Articolo): string {
  return url(`/covers/${a.id}.webp`);
}

const fmt = new Intl.DateTimeFormat('it-IT', { day: 'numeric', month: 'long', year: 'numeric' });
const fmtBreve = new Intl.DateTimeFormat('it-IT', { day: 'numeric', month: 'short' });

export function dataLunga(d: Date): string {
  return fmt.format(d);
}

export function dataBreve(d: Date): string {
  return fmtBreve.format(d);
}

export function minutiLettura(testo = ''): number {
  const parole = testo.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;
  return Math.max(2, Math.round(parole / 200));
}

export function correlati(tutti: Articolo[], a: Articolo, n = 3): Articolo[] {
  const punteggio = (b: Articolo) => {
    let p = 0;
    if (b.data.categoria === a.data.categoria) p += 2;
    if (b.data.tipo === a.data.tipo) p += 1;
    p += b.data.tags.filter((t) => a.data.tags.includes(t)).length * 2;
    return p;
  };
  return tutti
    .filter((b) => b.id !== a.id)
    .map((b) => ({ b, p: punteggio(b) }))
    .sort((x, y) => y.p - x.p || y.b.data.date.valueOf() - x.b.data.date.valueOf())
    .slice(0, n)
    .map((x) => x.b);
}
