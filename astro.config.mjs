// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

// Documentação: https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  adapter: vercel(),
  
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [mdx(), sitemap()],
  site: 'https://anabottesi.com.br'
});