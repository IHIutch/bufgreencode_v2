import { useState } from 'react'
import { DocSearchModal } from '@docsearch/react'
import { Loader, Search } from 'lucide-react'
import { useHydrated } from 'remix-utils'
import clsx from 'clsx'

export default function SearchComponent() {
  const [isOpen, setIsOpen] = useState(false)
  let isHydrated = useHydrated()

  return (
    <div className="h-full w-full">
      <button
        className={clsx(
          isHydrated ? 'bg-gray-100' : 'cursor-not-allowed bg-gray-300',
          'h-full w-full rounded-lg border px-4 py-2 text-left text-gray-500 transition-colors'
        )}
        onClick={() => setIsOpen(true)}
        disabled={!isHydrated}
      >
        <div className="flex items-center">
          {isHydrated ? (
            <Search className="h-4 w-4" />
          ) : (
            <Loader className="h-4 w-4 animate-spin" />
          )}
          <span className="ml-2">Search the docs...</span>
        </div>
      </button>
      {isOpen && isHydrated ? (
        <DocSearchModal
          initialScrollY={window.scrollY}
          appId="BH4D9OD16A"
          indexName="bufgreencode"
          apiKey="4f17115df3fa81ec5deb4173a60a749a"
          onClose={() => setIsOpen(false)}
          placeholder="Search the docs..."
          transformItems={(items) =>
            items
              .filter((i) => {
                return i.type !== 'lvl0'
              })
              .map((i) => {
                // console.log(i)
                return { ...i, url: i.url.replace('/docs/', '/') }
              })
          }
        />
      ) : null}
    </div>
  )
}
