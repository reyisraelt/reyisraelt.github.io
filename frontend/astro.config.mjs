// my-blog/frontend/astro.config.mjs

import { defineConfig } from 'astro/config';
import sanity from 'astro-sanity';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [sanity({
    projectId: '683k5u0w',
    dataset: 'production',
    apiVersion: '2023-02-08',
    useCdn: false
  }), tailwind()]
});