import clsx from 'clsx'
import { useLoaderData } from 'remix'
import { useScrollSpy } from '~/hooks/useScrollSpy'

export default function PageToc() {
  const {
    content: { headings },
  } = useLoaderData()

  const activeId = useScrollSpy(
    [...(headings || [])].reverse().map((heading) => `[id="${heading.anchor}"]`)
  )

  return headings && headings.length > 0 ? (
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
                <a href={`#${heading.anchor}`} className="py-1.5 block">
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
  ) : null
}
