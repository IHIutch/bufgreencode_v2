import * as Collapsible from '@radix-ui/react-collapsible'
import { Link, useParams } from '@remix-run/react'
import clsx from 'clsx'
import { ExternalLink } from 'lucide-react'
import { useEffect, useState } from 'react'
import GlobalNavComponent from '~/components/GlobalNavComponent'

export default function SubnavComponent() {
  const { section } = useParams()
  const [isOpen, setIsOpen] = useState(false)

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
            <div className="ml-auto text-gray-700 focus:text-gray-700">
              <Collapsible.Trigger asChild>
                <button
                  type="button"
                  aria-label="Menu Toggle"
                  className={clsx(
                    { 'is-active': isOpen },
                    'hamburger hamburger--squeeze !flex h-full items-center'
                  )}
                >
                  <div className="hamburger-box">
                    <span className="hamburger-inner" />
                  </div>
                </button>
              </Collapsible.Trigger>
            </div>
          </div>
          <Collapsible.Content className="overflow-hidden transition-all data-[state=open]:animate-collapsable-down data-[state=closed]:animate-collapsable-up">
            <nav className="z-0 flex h-full max-h-[calc(100vh-6.5rem)] flex-grow flex-col justify-between">
              <div className="h-full overflow-y-auto">
                <div class="py-2">
                  <GlobalNavComponent className="my-4" />
                </div>
              </div>
              <div className="sticky bottom-0 z-10 flex justify-between border-t bg-gray-100 px-6 pt-2 pb-4">
                <Link
                  prefetch="intent"
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
                  <span className="mr-1">Source Code</span>
                  <span>
                    <ExternalLink className="h-4 w-4" />
                  </span>
                </a>
              </div>
            </nav>
          </Collapsible.Content>
        </Collapsible.Root>
      </div>
    </div>
  )
}
