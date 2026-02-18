// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// Documentação: https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [mdx(), sitemap()],
  site: 'https://anabottesi.com.br'
});