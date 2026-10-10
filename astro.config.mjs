import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://cmykbilisim.com.tr',
  integrations: [sitemap()],
});
