// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
	site : process.env.URL  ?? 'https://SebasZwolf.github.io',
	base : process.env.BASE ?? '/demo-neomedica',
});