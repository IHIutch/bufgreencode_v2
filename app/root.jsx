import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'remix'
import styles from '~/styles/main.css'

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
  return {
    charset: 'utf-8',
    title: 'Buffalo Green Code',
    viewport: 'width=device-width,initial-scale=1',
  }
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
