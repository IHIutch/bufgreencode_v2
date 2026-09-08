import mdx from '@astrojs/mdx'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig, envField } from 'astro/config'
import { cloudflareRedirects } from './scripts/write-redirects.mjs'
import { redirects } from './src/redirects.mjs'

// https://astro.build/config
export default defineConfig({
  site: 'https://bufgreencode.com',
  // Match the URL shape all internal links and the previous host used, and
  // pair with `html_handling: 'drop-trailing-slash'` in wrangler.jsonc.
  trailingSlash: 'never',
  integrations: [mdx(), react(), sitemap(), cloudflareRedirects()],

  experimental: {
    contentIntellisense: true,
  },

  env: {
    schema: {
      PUBLIC_ALGOLIA_API_KEY: envField.string({
        context: 'client',
        access: 'public',
        default: '7925494f60a828f6fc5c4bf370b7649f',
      }),
      PUBLIC_ALGOLIA_APP_ID: envField.string({
        context: 'client',
        access: 'public',
        default: 'SJLG109BKU',
      }),
      PUBLIC_ALGOLIA_INDEX_NAME: envField.string({
        context: 'client',
        access: 'public',
        default: 'bufgreencode',
      }),
    },
  },

  redirects,

  vite: {
    plugins: [tailwindcss()],
  },

  output: 'static',
})
