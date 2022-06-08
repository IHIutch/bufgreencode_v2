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
      <div className="mx-auto flex max-w-screen-2xl">
        <div className="fixed top-0 hidden h-full flex-shrink-0 pt-16 md:block md:w-1/4 xl:w-1/5 2xl:w-1/6">
          <SidebarComponent />
        </div>
        <div className="w-full px-6 pt-20 md:ml-1/4 md:px-8 md:pt-16 xl:ml-1/5 2xl:ml-1/6">
          <div
            className={clsx(
              'flex',
              'position-absolute w-full transition-all duration-200',
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
