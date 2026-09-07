import { Dialog, Portal } from '@ark-ui/react'
import * as React from 'react'
import { HamburgerIcon } from './hamburger-icon'

export default function MenuDrawer({
  children,
}: {
  children?: React.ReactNode
}) {
  return (
    <Dialog.Root modal={false} trapFocus={true}>
      <Dialog.Trigger
        className="group h-10 w-10 border border-gray-200 bg-gray-50 hover:bg-gray-100 rounded-md flex items-center justify-center transition-colors ease-in-out duration-200 cursor-pointer"
        aria-label="Menu"
      >
        <HamburgerIcon />
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop
          className="fixed inset-x-0 top-14 bottom-0 opacity-40 bg-black z-[3] motion-safe:data-[state=open]:animate-enter motion-safe:data-[state=closed]:animate-exit [--enter-opacity:0] [--exit-opacity:0]"
        />
        <Dialog.Positioner className="fixed inset-0 z-[3] flex">
          <Dialog.Content
            className="fixed bottom-0 top-14 right-0 bg-white w-96 motion-safe:data-[state=open]:animate-enter motion-safe:data-[state=closed]:animate-exit [--enter-translate-x:100%] [--exit-translate-x:100%]"
          >
            <div className="h-full flex flex-col">
              <Dialog.Title className="py-4 px-6 text-xl font-semibold border-b border-b-slate-200">
                Menu
              </Dialog.Title>
              <div className="py-2 overflow-y-auto flex-1">
                {children}
              </div>
              <div className="py-3 px-6 border-t border-t-slate-200">
                <div className="flex items-center justify-between -mx-2">
                  <div>
                    <a
                      href="/disclaimer"
                      className="px-2 py-2 text-gray-600 hover:text-gray-900 font-medium text-sm"
                    >
                      Disclaimer
                    </a>
                  </div>
                  <div>
                    <a
                      className="flex items-center px-2 py-2 text-gray-600 hover:text-gray-900 font-medium text-sm"
                      href="/report-an-issue"
                    >
                      <span className="mr-1">
                        Report an Issue
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  )
}
