# bufgreencode.com

A readable, searchable version of the Buffalo Green Code (the City of Buffalo's
Unified Development Ordinance), built with [Astro](https://astro.build) and
deployed to [Cloudflare Workers](https://developers.cloudflare.com/workers/).

## Requirements

- Node.js 22+
- [pnpm](https://pnpm.io) (via Corepack: `corepack enable`)

## Commands

| Command        | Action                                                         |
| :------------- | :------------------------------------------------------------- |
| `pnpm install` | Install dependencies                                           |
| `pnpm dev`     | Astro dev server at `localhost:4321`                           |
| `pnpm build`   | Type-check and build the static site to `./dist/`              |
| `pnpm preview` | Build, then serve `./dist/` through Workers via `wrangler dev` |
| `pnpm deploy`  | Build and deploy to Cloudflare Workers                         |
| `pnpm lint`    | Lint with ESLint                                               |

Use `pnpm dev` for day-to-day work. Use `pnpm preview` when you want to verify
behavior that comes from the Workers runtime rather than Astro — 404 handling,
trailing slashes, redirects, and asset headers.

## Architecture

The site is fully static (`output: 'static'` in `astro.config.mjs`); there are no
SSR routes, API endpoints, or server islands. It is therefore served by
[Workers Static Assets](https://developers.cloudflare.com/workers/static-assets/)
with **no Worker script and no Astro adapter** — `wrangler.jsonc` simply points
`assets.directory` at `./dist`.

If SSR is ever needed, add `@astrojs/cloudflare` back as the adapter, set
`output: 'server'`, and add a `main` entry to `wrangler.jsonc`.

Search is powered by Algolia DocSearch. The public Algolia credentials are
declared in the `env.schema` block of `astro.config.mjs` and are inlined into the
client bundle at build time, so no runtime secrets or bindings are required.

### URL shape

`trailingSlash: 'never'` (Astro) is paired with `html_handling:
"drop-trailing-slash"` (Wrangler). Together they keep the non-trailing-slash URLs
the site has always used: `/uses/principal-uses` serves 200, the trailing-slash
form redirects to it, and canonical tags and the sitemap emit the same form. Both
settings must change together.

### Redirects and headers

Legacy `/article/N/N-M` URLs live in `src/redirects.mjs`. That map feeds two
consumers, so they cannot drift:

- Astro's `redirects` config, used by `astro dev` and the static build.
- `scripts/write-redirects.mjs`, a build integration that emits `dist/_redirects`
  so Cloudflare serves real 301s rather than Astro's meta-refresh fallback pages.

`public/_headers` marks content-hashed `/_astro/*` files immutable; Workers
static assets otherwise defaults everything to `max-age=0, must-revalidate`.

`public/.assetsignore` keeps Wrangler-reserved filenames (`_worker.js`,
`_routes.json`) from being uploaded as static assets.

## Deployment

Deploys run through **Cloudflare Workers Builds**: pushes to `main` are built and
deployed by Cloudflare automatically.

One-time dashboard setup (Workers & Pages → the `bufgreencode` Worker → Settings
→ Build):

1. Connect this GitHub repository.
2. Build command: `pnpm run build`
3. Deploy command: `npx wrangler deploy`
4. Root directory: `/`
5. Production branch: `main`

Non-production branches produce preview deployments.

To deploy from your machine instead, run `pnpm deploy` after
`npx wrangler login`.
