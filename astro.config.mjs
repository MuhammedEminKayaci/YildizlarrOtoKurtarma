import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.yakindacekici.com',
  output: 'static',
  integrations: [
    sitemap(),
    tailwind({
      applyBaseStyles: false
    })
  ]
});
