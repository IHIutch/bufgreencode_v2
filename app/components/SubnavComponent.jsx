import * as Collapsible from '@radix-ui/react-collapsible'
import { Link, useParams } from '@remix-run/react'
import { keyframes, styled } from '@stitches/react'
import { ExternalLink } from 'lucide-react'
import { useEffect, useState } from 'react'
import GlobalNavComponent from '~/components/GlobalNavComponent'

export default function SubnavComponent() {
  const { section } = useParams()
  const [isOpen, setIsOpen] = useState(false)
  const open = keyframes({
    from: { height: 0 },
    to: { height: 'calc(100vh - 6rem)' },
  })

  const close = keyframes({
    from: { height: 'calc(100vh - 6rem)' },
    to: { height: 0 },
  })

  const CollapsibleContent = styled(Collapsible.Content, {
    overflow: 'hidden',
    '&[data-state="open"]': {
      animation: `${open} 200ms ease-in-out forwards`,
    },
    '&[data-state="closed"]': {
      animation: `${close} 200ms ease-in-out forwards`,
    },
  })

  useEffect(() => {
    setIsOpen(false)
  }, [section])

  useEffect(() => {
    isOpen
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'auto')
  }, [isOpen])

  return (
    <div className="fixed inset-x-0 top-0 pt-16 md:hidden">
      <div className="flex flex-col bg-gray-100">
        <Collapsible.Root open={isOpen} onOpenChange={setIsOpen}>
          <div className="sticky top-0 z-10 flex h-10 justify-between border-b bg-gray-100">
            <Collapsible.Trigger asChild>
              <button
                type="button"
                aria-label="Menu Toggle"
                className="ml-auto px-4 text-gray-700 focus:text-gray-700"
              >
                <div className="w-6">
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
                </div>
              </button>
            </Collapsible.Trigger>
          </div>
          <CollapsibleContent>
            <nav className="z-0 flex h-full max-h-[calc(100vh-6rem)] flex-grow flex-col justify-between">
              <div className="h-full overflow-auto py-2">
                <GlobalNavComponent className="my-4" />
              </div>
              <div className="sticky bottom-0 z-10 flex justify-between border-t bg-gray-100 px-6 pt-2 pb-4">
                <Link
                  to="/disclaimer"
                  className="p-2 text-gray-700 hover:text-gray-900"
                >
                  Disclaimer
                </Link>
                <a
                  className="flex items-center p-2 text-gray-700 hover:text-gray-900"
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
            </nav>
          </CollapsibleContent>
        </Collapsible.Root>
      </div>
    </div>
  )
}
