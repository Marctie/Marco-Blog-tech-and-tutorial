import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { SITE, CATEGORIE } from '../site.config';
import { getArticoli, linkArticolo } from '../lib/utils';

export async function GET(context: APIContext) {
  const articoli = await getArticoli();
  return rss({
    title: SITE.name,
    description: SITE.description,
    site: context.site!,
    items: articoli.slice(0, 50).map((a) => ({
      title: a.data.title,
      description: a.data.description,
      pubDate: a.data.date,
      link: linkArticolo(a),
      categories: [CATEGORIE[a.data.categoria].nome, ...a.data.tags],
    })),
    customData: '<language>it-it</language>',
  });
}
