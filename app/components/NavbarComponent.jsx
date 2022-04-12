import { Link } from 'remix'
import SearchComponent from './SearchComponent'

export default function NavbarComponent() {
  return (
    <nav className="flex bg-white border-b border-gray-200 h-16 inset-x-0 flex-shrink-0">
      <div className="max-w-screen-2xl w-full relative mx-auto px-6">
        <div className="flex items-center -mx-6 h-full px-6">
          <div className="md:w-1/4 lg:w-1/6 pr-4 md:pr-6 lg:pr-8 h-full flex-shrink-0">
            <div className="flex items-center h-full">
              <Link to="/" className="block lg:mr-4 h-full">
                <img
                  src="/meta/bufgreencode-icon.svg"
                  alt="Buffalo Green Code"
                  className="h-full w-auto py-1 md:hidden"
                />
                <img
                  src="/meta/bufgreencode-logo.svg"
                  alt="Buffalo Green Code"
                  className="h-full w-auto py-1 hidden md:block"
                />
              </Link>
            </div>
          </div>
          <div className="md:block flex-grow md:px-4 h-full pl-4 md:pr-2">
            <div className="py-2 h-full w-full flex items-center">
              {typeof document !== 'undefined' && <SearchComponent />}
            </div>
          </div>
          <div className="px-6 h-full hidden md:flex items-center justify-end text-sm font-medium flex-shrink-0">
            <Link
              to="#"
              className="py-1 pr-2 text-gray-700 hover:text-gray-900"
            >
              About
            </Link>
            <Link
              to="#"
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
              <span>{/* <ExternalLinkIcon size="1x" /> */}</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
