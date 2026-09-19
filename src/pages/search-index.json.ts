import type { APIRoute } from 'astro';
import { CATEGORIE, TIPI } from '../site.config';
import { getArticoli, linkArticolo } from '../lib/utils';

export const GET: APIRoute = async () => {
  const articoli = await getArticoli();
  const indice = articoli.map((a) => ({
    t: a.data.title,
    d: a.data.description,
    u: linkArticolo(a),
    c: CATEGORIE[a.data.categoria].nome,
    tipo: TIPI[a.data.tipo].nome,
    k: a.data.tags.join(' '),
    data: a.data.date.toISOString().slice(0, 10),
  }));
  return new Response(JSON.stringify(indice), { headers: { 'Content-Type': 'application/json' } });
};
