import { writeFile } from 'node:fs/promises'
import { redirects } from '../src/redirects.mjs'

/**
 * Astro's static build renders each redirect as a meta-refresh HTML page.
 * Cloudflare Workers static assets can do better: a `_redirects` file at the
 * root of the assets directory produces real HTTP redirects. This integration
 * writes that file from the same map Astro uses, so the two cannot drift.
 *
 * @see https://developers.cloudflare.com/workers/static-assets/redirects/
 */
export function cloudflareRedirects() {
  return {
    name: 'cloudflare-redirects',
    hooks: {
      'astro:build:done': async ({ dir, logger }) => {
        const lines = Object.entries(redirects).map(
          ([from, to]) => `${from} ${to} 301`,
        )
        await writeFile(new URL('_redirects', dir), `${lines.join('\n')}\n`)
        logger.info(`\`_redirects\` created at \`dist\` (${lines.length} rules)`)
      },
    },
  }
}
