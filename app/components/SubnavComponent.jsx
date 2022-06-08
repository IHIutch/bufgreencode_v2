import React from 'react'
import { Link } from 'remix'
import GlobalNavComponent from './GlobalNavComponent'

export default function SubnavComponent() {
  return (
    <div className="flex h-full flex-grow flex-col bg-gray-200">
      <div className="flex justify-between border-b">
        <div className="relative flex h-10 flex-grow items-center">
          <transition name="fade">
            <div className="absolute w-full truncate pl-6" key={menuIsOpen}>
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
            className="flex h-full px-6 text-gray-700 focus:text-gray-700 focus:outline-none lg:hidden"
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
        <div className="mb-4 flex justify-between border-t px-6 pt-2">
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
