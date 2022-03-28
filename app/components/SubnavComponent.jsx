import React from 'react'
import { Link } from 'remix'
import GlobalNavComponent from './GlobalNavComponent'

export default function SubnavComponent() {
  return (
    <div className="flex flex-col bg-gray-200 flex-grow h-full">
      <div className="flex justify-between border-b">
        <div className="flex items-center h-10 flex-grow relative">
          <transition name="fade">
            <div className="pl-6 absolute truncate w-full" key={menuIsOpen}>
              <template v-if="menuIsOpen">
                <span className="text-xl">Menu</span>
              </template>
              <template v-else>
                <div v-if="activeIdx != null" className="flex truncate">
                  <div className="mr-2">
                    <span className="font-bold text-green-700">&sect;</span>
                  </div>
                  <div className="relative">
                    <transition name="animationType" appear>
                      <div className="absolute" key={activeIdx}>
                        <span>{mobileHeadingTitle}</span>
                      </div>
                    </transition>
                  </div>
                </div>
              </template>
            </div>
          </transition>
        </div>
        <div className="flex md:hidden">
          <button
            type="button"
            aria-label="Menu Toggle"
            className="flex px-6 h-full lg:hidden text-gray-700 focus:outline-none focus:text-gray-700"
            onClick={toggleMenu}
          >
            {/* <span className="block h-full w-6">
              <svg
                className="h-full w-full"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span> */}
          </button>
        </div>
      </div>
      <nav className="flex flex-grow flex-col justify-between">
        <div className="h-full overflow-auto">
          <div className="h-0">
            <GlobalNavComponent className="my-4" />
          </div>
        </div>
        <div className="flex justify-between border-t px-6 pt-2 mb-4">
          <Link className="p-2 text-gray-700 hover:text-gray-900">About</Link>
          <Link className="p-2 text-gray-700 hover:text-gray-900">
            Disclaimer
          </Link>
          <a
            className="flex items-center p-2 text-gray-700 hover:text-gray-900"
            href="https://github.com/IHIutch/bufgreencode_v2"
            target="_blank"
            rel="noreferrer"
          >
            <span className="mr-1">Github</span>
            <span>{/* <ExternalLinkIcon size="1x" /> */}</span>
          </a>
        </div>
      </nav>
    </div>
  )
}
