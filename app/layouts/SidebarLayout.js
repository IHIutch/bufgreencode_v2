import clsx from 'clsx'
import { useMatches, useTransition } from 'remix'
import NavbarComponent from '~/components/NavbarComponent'
import SidebarComponent from '~/components/SidebarComponent'
import SubnavComponent from '~/components/SubnavComponent'
import { useScrollSpy } from '~/hooks/useScrollSpy'

export default function SidebarLayout({ headings, children }) {
  const matches = useMatches()
  const route = matches[1]
  const transition = useTransition()
  const isLoading = transition.state === 'loading'

  const activeId = useScrollSpy(
    [...(headings || [])].reverse().map((heading) => `[id="${heading.anchor}"]`)
  )

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
            <div className="my-12 w-full">
              <main className="w-full">{children}</main>
            </div>
            {headings && headings.length > 0 ? (
              <aside className="hidden xl:block lg:w-1/4">
                <div className="sticky h-screen overflow-y-auto top-0 pt-16">
                  <div className="mt-8 pb-8 pr-4">
                    <div className="mb-2">
                      <span className="uppercase font-bold text-gray-500 text-xs tracking-wider">
                        On this Page
                      </span>
                    </div>
                    <ul>
                      {headings.map((heading, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-gray-600 hover:text-gray-900"
                        >
                          <a
                            href={`#${heading.anchor}`}
                            className="py-1.5 block"
                          >
                            <div
                              className={clsx(
                                'border-l-2 transition-all duration-200',
                                activeId === heading.anchor
                                  ? ' border-green-700'
                                  : ' border-transparent'
                              )}
                            >
                              <div
                                className={clsx(
                                  'transition-all duration-200',
                                  activeId === heading.anchor
                                    ? 'translate-x-2'
                                    : 'translate-x-0'
                                )}
                              >
                                <span
                                  className={
                                    activeId === heading.anchor
                                      ? 'text-green-700'
                                      : 'text-gray-700'
                                  }
                                >
                                  {heading.title}
                                </span>
                              </div>
                            </div>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </aside>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  )
}
