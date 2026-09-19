// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// SITE_URL e BASE_PATH arrivano dal workflow di GitHub Pages.
// Con un dominio personalizzato BASE_PATH resta vuoto e il sito vive nella root.
const site = process.env.SITE_URL || 'https://www.tastoreset.it';
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  integrations: [sitemap()],
  markdown: {
    shikiConfig: { theme: 'github-dark' },
  },
});
