import * as DocSearch from '@docsearch/react' // https://github.com/algolia/docsearch/pull/2117#issuecomment-1793855627
import { PUBLIC_ALGOLIA_API_KEY, PUBLIC_ALGOLIA_APP_ID, PUBLIC_ALGOLIA_INDEX_NAME } from 'astro:env/client'
import { useState } from 'react'
import '@docsearch/css/dist/style.css'

const Hit: DocSearch.DocSearchProps['hitComponent'] = ({ hit, children }) => {
  return (
    <a
      href={hit.url}
      //   'DocSearch-Hit--Result': hit?.__is_result?.(),
      //   // 'DocSearch-Hit--Parent': hit.__is_parent?.(),
      //   // 'DocSearch-Hit--Child': hit.__is_child?.(),
      //   'DocSearch-Hit--FirstChild': hit.__is_first?.(),
      //   'DocSearch-Hit--LastChild': hit.__is_last?.(),
      // })}
    >
      {children}
    </a>
  )
}

export default function SearchComponent() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        className="h-10 lg:h-12 flex-grow rounded-lg border border-gray-200 bg-gray-50 hover:bg-gray-100 px-4 text-left text-gray-500 transition-colors ease-in-out duration-200 cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <div className="flex items-center">
          <span className="icon-[lucide--search] size-4" />
          <span className="ml-2 sm:hidden">
            Search...
          </span>
          <span className="ml-2 hidden sm:inline">
            Search the Green Code...
          </span>
        </div>
      </button>
      {isOpen
        ? (
            <DocSearch.DocSearchModal
              onAskAiToggle={() => false}
              initialScrollY={window.scrollY}
              appId={PUBLIC_ALGOLIA_APP_ID}
              indices={[PUBLIC_ALGOLIA_INDEX_NAME]}
              apiKey={PUBLIC_ALGOLIA_API_KEY}
              onClose={() => setIsOpen(false)}
              placeholder="Search the Green Code..."
              hitComponent={Hit}
              transformItems={(items) => {
                return items.map((item, index) => {
                  const a = document.createElement('a')
                  a.href = item.url

                  if (item.hierarchy?.lvl0)
                    item.hierarchy.lvl0 = item.hierarchy.lvl0.replace(/&amp;/g, '&')

                  if (item._highlightResult?.hierarchy?.lvl0?.value) {
                    item._highlightResult.hierarchy.lvl0.value
                      = item._highlightResult.hierarchy.lvl0.value.replace(
                        /&amp;/g,
                        '&',
                      )
                  }

                  return {
                    ...item,
                    url: `${a.pathname}${a.hash}`,
                    __is_result: () => true,
                    // __is_parent: () =>
                    //   item.type === 'lvl1' && items.length > 1 && index === 0,
                    // __is_child: () =>
                    //   item.type !== 'lvl1' &&
                    //   items.length > 1 &&
                    //   items[0].type === 'lvl1' &&
                    //   index !== 0,
                    __is_first: () => index === 1,
                    __is_last: () => index === items.length - 1 && index !== 0,
                  }
                })
              }}
            />
          )
        : null}
    </>
  )
}
