import { useScrollSpy } from '@/hooks/useScrollSpy'
import clsx from 'clsx'

export default function PageToc({ headings }: { headings: any[] }) {
  const activeId = useScrollSpy(
    [...(headings || [])].reverse().map((heading) => `[id="${heading.slug}"]`)
  )

  return (
    <ul>
      {headings.map((heading, idx) => (
        <li key={idx} className="text-sm text-gray-600 hover:text-gray-900">
          <a href={`#${heading.slug}`} className="block py-1.5">
            <div
              className={clsx(
                'border-l-2 transition-all duration-200',
                activeId === heading.slug
                  ? ' border-green-700'
                  : ' border-transparent'
              )}
            >
              <div
                className={clsx(
                  'transition-all duration-200',
                  activeId === heading.slug ? 'translate-x-2' : 'translate-x-0'
                )}
              >
                <span
                  className={clsx(
                    'font-medium',
                    activeId === heading.slug
                      ? 'text-green-700'
                      : 'text-gray-700'
                  )}
                >
                  {heading.text}
                </span>
              </div>
            </div>
          </a>
        </li>
      ))}
    </ul>
  )
}
