import { useState, useCallback } from 'react'
import { DocSearchModal } from '@docsearch/react'

export default function SearchComponent() {
  const [isOpen, setIsOpen] = useState(false)

  const onOpen = useCallback(() => {
    setIsOpen(true)
  }, [setIsOpen])

  const onClose = useCallback(() => {
    setIsOpen(false)
  }, [setIsOpen])

  return (
    <div className="h-full w-full">
      <button
        className="h-full w-full rounded-lg border bg-gray-100 px-4 py-2 text-left text-gray-500"
        onClick={onOpen}
      >
        Search the docs...
      </button>
      {isOpen && (
        <DocSearchModal
          appId="BH4D9OD16A"
          indexName="bufgreencode"
          apiKey="4f17115df3fa81ec5deb4173a60a749a"
          onClose={onClose}
          placeholder="Search the docs..."
          transformItems={(items) =>
            items
              .filter((i) => {
                return i.type !== 'lvl0'
              })
              .map((i) => {
                console.log(i)
                return { ...i, url: i.url.replace('/docs/', '/') }
              })
          }
        />
      )}
    </div>
  )
}
