import type { MarkdownHeading } from 'astro'
import type { MouseEvent } from 'react'
import { useEffect, useState } from 'react'

export default function PageToc({ headings }: { headings: MarkdownHeading[] }) {
  const [currentHeading, setCurrentHeading] = useState({
    slug: headings?.[0]?.slug || '',
    text: headings?.[0]?.text || '',
  })

  useEffect(() => {
    const setCurrent: IntersectionObserverCallback = (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          // const { id } = entry.target
          // if (id === onThisPageID) continue
          setCurrentHeading({
            slug: entry.target.id,
            text: entry.target.textContent || '',
          })

          break
        }
      }
    }

    const observerOptions: IntersectionObserverInit = {
      // Negative top margin accounts for `scroll-margin`.
      // Negative bottom margin means heading needs to be towards top of viewport to trigger intersection.
      rootMargin: '-100px 0% -66%',
      threshold: 1,
    }

    const headingsObserver = new IntersectionObserver(
      setCurrent,
      observerOptions,
    )

    // Observe all the headings in the main page content.
    document
      .querySelectorAll('.prose :is(h2,h3,h4,h5,h6)')
      .forEach(h => headingsObserver.observe(h))

    // Stop observing when the component is unmounted.
    return () => headingsObserver.disconnect()
  }, [])

  const onLinkClick = (e: MouseEvent) => {
    setCurrentHeading({
      slug: (e.currentTarget.getAttribute('href') || '').replace('#', ''),
      text: e.currentTarget.textContent || '',
    })
  }

  const isObservedSection = (slug: string) => currentHeading.slug === slug ? true : undefined

  return (
    <ul>
      {headings.map((heading, idx) => (
        <li
          key={idx}
          className="text-sm text-gray-600 hover:text-gray-900"
        >
          <a
            href={`#${heading.slug}`}
            onClick={onLinkClick}
            className="group block py-1.5"
            data-active={isObservedSection(heading.slug)}
          >
            <div className="border-l-2 border-transparent transition-colors ease-in-out duration-200 group-data-[active]:border-green-700">
              <div className="transition-transform ease-in-out duration-200 translate-x-0 group-data-[active]:translate-x-2">
                <span className="font-medium group-data-[active]:text-green-700">
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
