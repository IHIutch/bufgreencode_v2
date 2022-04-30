import clsx from 'clsx'
import { useTransition } from 'remix'
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
        {/* <div
          class={`fixed pt-16 inset-x-0 md:hidden z-10 transition-md overflow-hidden ${
            menuIsOpen ? "h-screen" : "h-26"
          }`}
        >
          <SubnavComponent
            menuIsOpen={menuIsOpen}
            activeHeading={activeHeading}
            activeIdx={activeIdx}
          />
        </div> */}
      </div>
      <div className="flex max-w-screen-2xl mx-auto">
        <div className="hidden md:block md:w-1/4 xl:w-1/5 2xl:w-1/6 fixed top-0 h-full pt-16 flex-shrink-0">
          <SidebarComponent />
        </div>
        <div className="pt-20 w-full md:pt-16 px-6 md:px-8 md:ml-1/4 xl:ml-1/5 2xl:ml-1/6">
          <div
            className={clsx(
              'flex',
              'transition-all duration-200 position-absolute w-full',
              isLoading ? 'opacity-0' : 'opacity-100'
            )}
          >
            <main className="my-12 w-full">{children}</main>
          </div>
        </div>
      </div>
    </div>
  )
}
