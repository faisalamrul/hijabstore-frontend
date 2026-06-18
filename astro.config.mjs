// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://faisalamrul.github.io',
  base: '/hijabstore-frontend',
  integrations: [
    sitemap({
      lastmod: new Date(),
      changefreq: 'weekly',
      priority: 0.8,
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});