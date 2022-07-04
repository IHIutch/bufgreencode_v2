import { useTransition } from '@remix-run/react'
import clsx from 'clsx'
import NavbarComponent from '~/components/NavbarComponent'
import SidebarComponent from '~/components/SidebarComponent'
import SubnavComponent from '~/components/SubnavComponent'

export default function SidebarLayout({ children }) {
  const transition = useTransition()
  const isLoading = transition.state === 'loading'

  return (
    <div className="antialiased">
      <div className="fixed top-0 z-20 w-full">
        <NavbarComponent />
        <div
          class={`fixed pt-16 inset-x-0 md:hidden z-10 transition-md overflow-hidden ${
            menuIsOpen ? "h-screen" : "h-26"
          }`}
        >
          <SubnavComponent
            menuIsOpen={menuIsOpen}
            activeHeading={activeHeading}
            activeIdx={activeIdx}
          />
        </div>
      </div>
        <div className="mx-auto flex max-w-screen-2xl">
          <div className="fixed top-0 hidden h-full flex-shrink-0 pt-16 md:block md:w-72 2xl:w-80">
            <SidebarComponent />
          </div>
          <div className="w-full pt-20 md:ml-72 md:pt-16 2xl:ml-80">
            <div
              className={clsx(
                'flex',
                'position-absolute w-full transition-all duration-200',
                isLoading ? 'opacity-0' : 'opacity-100'
              )}
            >
              <main className="mt-12 w-full">{children}</main>
            </div>
          </div>
      </div>
    </div>
  )
}
