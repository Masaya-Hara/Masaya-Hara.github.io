import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://masaya-hara.github.io/',
  output: 'static',
  integrations: [sitemap({ filter: (page) => !new URL(page).pathname.startsWith('/surfaces') })],
});
