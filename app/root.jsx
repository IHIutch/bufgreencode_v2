import mainStyle from '~/styles/main.css'
import hamburgerStyle from '~/styles/hamburgers.css'
import { getMetaTags } from '~/utils'
import SidebarLayout from '~/layouts/SidebarLayout'
import { getArticles } from '~/models/articles.server'
import { json } from '@remix-run/node'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'

export function links() {
  return [
    { rel: 'stylesheet', href: mainStyle },
    { rel: 'stylesheet', href: hamburgerStyle },
    {
      rel: 'preconnect',
      href: 'https://BH4D9OD16A-dsn.algolia.net',
      crossOrigin: 'true',
    },
  ]
}

export function meta() {
  const metaTags = getMetaTags({})
  return {
    charset: 'utf-8',
    viewport: 'width=device-width,initial-scale=1',
    ...metaTags,
    'google-site-verification': '2uJ6hXsUDukLmTfNK7Y7jCmnaqyiLptsVDmZ2Ct7Zzk',
    'Content-Security-Policy': {
      httpEquiv: 'Content-Security-Policy',
      content: 'script-src vitals.vercel-insights.com',
    },
  }
}

export const loader = async () => {
  const articles = await getArticles()
  if (!articles) {
    // Fathom.trackGoal() TODO: track 404's
    throw new Response('Not Found', {
      status: 404,
    })
  }

  const mappedArticles = articles
    .map((a) => ({
      ...a,
      articleTitle: a.frontmatter.article,
      sectionTitle: a.frontmatter.title,
      articleNumber: a.frontmatter.article_number,
      sectionNumber: a.frontmatter.section_number,
      slug: a.slug,
      articleSlug: a.articleSlug,
    }))
    .sort((a, b) => {
      return a.articleNumber - b.articleNumber
    })
    .sort((a, b) => {
      return a.sectionNumber - b.sectionNumber
    })

  // This is necessary for exposing client side env vars with Remix. Read: https://remix.run/docs/en/v1/guides/envvars
  const ENV = {
    ALGOLIA_APP_ID: process.env.ALGOLIA_APP_ID,
    ALGOLIA_INDEX_NAME: process.env.ALGOLIA_INDEX_NAME,
    ALGOLIA_API_KEY: process.env.ALGOLIA_API_KEY,
  }

  return json({ articles: mappedArticles, ENV })
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <SidebarLayout>
          <Outlet />
        </SidebarLayout>
        <ScrollRestoration />

        {process.env.NODE_ENV === 'production' ? (
          <>
            <script defer src="/va/script.js" />
            <script
              src="https://delightful-cat.bufgreencode.com/script.js"
              data-site="HWWXLVYL"
              defer
            />
          </>
        ) : null}
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
