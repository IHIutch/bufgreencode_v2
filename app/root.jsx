import styles from '~/styles/main.css'
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
    { rel: 'stylesheet', href: styles },
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
  }
}

export const loader = async () => {
  const articles = await getArticles()
  if (!articles) {
    throw new Response('Not Found', {
      status: 404,
    })
  }

  return json({ articles })
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
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
