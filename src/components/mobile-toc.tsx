import type { ReactNode } from 'react'
import { Accordion } from '@ark-ui/react'

export default function MobileToc({ children }: { children: ReactNode }) {
  return (
    <div className="block xl:hidden mt-8 mb-12">
      <Accordion.Root
        collapsible={true}
        defaultValue={['one']}
        className="w-full rounded-lg border border-gray-200 bg-gray-50"
      >
        <Accordion.Item value="one" className="group">
          <Accordion.ItemTrigger className="flex w-full items-center justify-between cursor-pointer h-10 px-4 text-left rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors ease-in-out duration-200">
            <div className="flex items-center">
              <span className="icon-[lucide--list-ordered] size-6" />
              <div className="ml-2">
                <span className="text-gray-700 font-semibold text-sm">
                  Page Contents
                </span>
              </div>
            </div>
            <div className="transition-transform ease-in-out duration-200 rotate-0 group-data-[state=open]:rotate-180">
              <span className="icon-[lucide--chevron-down] size-5" />
            </div>
          </Accordion.ItemTrigger>
          <Accordion.ItemContent className="grid px-4 motion-safe:transition-[grid-template-rows,padding-top,padding-bottom] motion-safe:ease-in-out motion-safe:duration-200 grid-rows-[0fr] group-data-[state=open]:grid-rows-[1fr] group-data-[state=open]:pt-1 group-data-[state=open]:pb-2">
            <div className="overflow-hidden">
              {children}
            </div>
          </Accordion.ItemContent>
        </Accordion.Item>
      </Accordion.Root>
    </div>
  )
}
