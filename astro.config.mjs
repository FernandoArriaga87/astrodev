// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: "https://github.com/FernandoArriaga87/astrodev",
  base: "astrodev",
  integrations: [tailwind()]
});