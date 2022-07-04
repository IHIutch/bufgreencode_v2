import { Link } from '@remix-run/react'
import metadata from '~/data/metadata.json'

export default function DefaultLayout({ children }) {
  return (
    <div className="m-auto w-1/2">
      <nav className="mb-5 flex h-20 items-center justify-between">
        <strong>
          <Link className="py-1" to="/">
            {metadata.siteName}
          </Link>
        </strong>
        <nav className="nav">
          <Link className="py-1 pr-4" to="/">
            Home
          </Link>
          <Link className="py-1 pl-4" to="/about">
            About
          </Link>
        </nav>
      </nav>
      {children}
    </div>
  )
}
