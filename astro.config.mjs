// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://faisalamrul.github.io',
  base: '/hijabstore-frontend',
  vite: {
    plugins: [tailwindcss()],
  },
});