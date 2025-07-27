import preact from '@astrojs/preact'
import { defineConfig } from 'astro/config'
import astrobook from 'astrobook'

// https://astro.build/config
export default defineConfig({
  server: {
    port: 4306,
  },

  integrations: [
    preact(),
    astrobook({ directory: 'src/stories', subpath: '/docs/components' }),
  ],
})
