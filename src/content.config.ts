import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const link = z.object({
  titolo: z.string(),
  url: z.string().url(),
  canale: z.string().optional(),
});

const articoli = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articoli' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    tipo: z.enum(['notizia', 'approfondimento', 'guida-acquisto', 'tutorial', 'problema']),
    categoria: z.enum(['smartphone', 'pc', 'gaming', 'console', 'app', 'sicurezza', 'ai']),
    tags: z.array(z.string()).default([]),
    // parola grande stampata sulla copertina generata (es. "iOS 27")
    copertina: z.string().optional(),
    // solo per "Ho un problema" e tutorial
    dispositivo: z.enum(['android', 'iphone', 'windows', 'console', 'rete', 'app', 'accessori']).optional(),
    difficolta: z.enum(['facile', 'media', 'avanzata']).optional(),
    tempo: z.string().optional(),
    evidenza: z.boolean().default(false),
    video: z.array(link).default([]),
    fonti: z.array(link).default([]),
    bozza: z.boolean().default(false),
  }),
});

export const collections = { articoli };
