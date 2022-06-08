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
    <aside className="hidden lg:w-1/4 xl:block">
      <div className="sticky top-0 h-screen overflow-y-auto pt-16">
        <div className="mt-8 pb-8 pr-4">
          <div className="mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
              On this Page
            </span>
          </div>
          <ul>
            {headings.map((heading, idx) => (
              <li
                key={idx}
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                <a href={`#${heading.anchor}`} className="block py-1.5">
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
