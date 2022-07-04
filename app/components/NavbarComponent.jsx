import SearchComponent from './SearchComponent'
import { ExternalLink } from 'lucide-react'
import { Link } from '@remix-run/react'

export default function NavbarComponent() {
  return (
    <nav className="inset-x-0 flex h-16 flex-shrink-0 border-b border-gray-200 bg-white">
      <div className="relative mx-auto w-full max-w-screen-2xl">
        <div className="flex h-full items-center">
          <div className="h-full w-16 flex-shrink-0 md:w-40 lg:w-72 2xl:w-80 pl-4">
            <div className="flex h-full items-center">
              <Link to="/" className="block h-full w-full py-2 lg:mr-4">
                <img
                  src="/meta/bufgreencode-icon.svg"
                  alt="Buffalo Green Code"
                  className="h-full w-auto md:hidden"
                />
                <img
                  src="/meta/bufgreencode-logo.svg"
                  alt="Buffalo Green Code"
                  className="hidden h-full w-auto md:block"
                />
              </Link>
            </div>
          </div>
          <div className="h-full flex-1 px-4 md:px-8 md:block w-full xl:w-3/4">
            <div className="flex h-full w-full items-center py-2">
              {typeof document !== 'undefined' && <SearchComponent />}
            </div>
          </div>
          <div className="hidden h-full lg:w-72 2xl:w-80 flex-shrink-0 items-center text-sm font-medium md:flex pr-4">
            <Link
              to="/disclaimer"
              className="py-1 px-2 text-gray-700 hover:text-gray-900"
            >
              Disclaimer
            </Link>
            <a
              className="flex items-center py-1 px-2 text-gray-700 hover:text-gray-900"
              href="https://github.com/IHIutch/bufgreencode_v2"
              target="_blank"
              rel="noreferrer"
            >
              <span className="mr-1">Github</span>
              <span>
                <ExternalLink className="h-4 w-4" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
