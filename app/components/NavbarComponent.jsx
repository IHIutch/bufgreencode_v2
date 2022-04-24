import { Link } from 'remix'
import SearchComponent from './SearchComponent'
import { ExternalLink } from 'lucide-react'

export default function NavbarComponent() {
  return (
    <nav className="flex bg-white border-b border-gray-200 h-16 inset-x-0 flex-shrink-0">
      <div className="max-w-screen-2xl w-full relative mx-auto px-6">
        <div className="flex items-center -mx-6 h-full px-6">
          <div className="w-16 md:w-1/4 lg:w-1/6 pr-4 md:pr-6 lg:pr-8 h-full flex-shrink-0">
            <div className="flex items-center h-full">
              <Link to="/" className="block lg:mr-4 h-full w-full py-2">
                <img
                  src="/meta/bufgreencode-icon.svg"
                  alt="Buffalo Green Code"
                  className="h-full w-auto md:hidden"
                />
                <img
                  src="/meta/bufgreencode-logo.svg"
                  alt="Buffalo Green Code"
                  className="h-full w-auto hidden md:block"
                />
              </Link>
            </div>
          </div>
          <div className="md:block md:px-4 h-full px-2 lg:px-4 flex-1">
            <div className="py-2 h-full w-full flex items-center">
              {typeof document !== 'undefined' && <SearchComponent />}
            </div>
          </div>
          <div className="w-1/6 h-full hidden md:flex items-center text-sm font-medium flex-shrink-0">
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
