'use client'

import { type MouseEvent, useEffect, useState } from 'react'
import Link from 'next/link'

import { type TocHeading } from '@/types'

import { css } from 'styled-system/css'

export default function PageToc({ headings }: { headings?: TocHeading[] }) {
  const [currentHeading, setCurrentHeading] = useState({
    slug: headings?.[0]?.slug || '',
    text: headings?.[0]?.content || '',
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

  const isObservedSection = (slug: string) => currentHeading.slug === slug

  return (
    <ul>
      {headings
        ? headings.map((heading, idx) => (
            <li
              key={idx}
              className={css({
                fontSize: 'sm',
                color: {
                  base: 'gray.600',
                  _hover: 'gray.900',
                },
              })}
              // className="text-sm text-gray-600 hover:text-gray-900"
            >
              <Link
                replace={true}
                href={{ hash: heading.slug }}
                onClick={onLinkClick}
                className={css({
                  display: 'block',
                  py: '1.5',
                })}
                // className="block py-1.5"
              >
                <div
                  className={css({
                    borderLeftWidth: '2px',
                    borderLeftColor: isObservedSection(heading.slug)
                      ? 'green.700'
                      : 'transparent',
                    transition: 'border-color ease 0.2s',
                  })}
                  // className={clsx(
                  //   'border-l-2 transition-all duration-200',
                  //   currentHeading.slug === heading.slug
                  //     ? 'border-green-700'
                  //     : 'border-transparent'
                  // )}
                >
                  <div
                    className={css({
                      transition: 'all ease 0.2s',
                      transform: isObservedSection(heading.slug)
                        ? 'translateX(token(sizes.2))'
                        : 'translateX(0)',
                    })}
                    // className={clsx(
                    //   'transition-all duration-200',
                    //   currentHeading.slug === heading.slug
                    //     ? 'translate-x-2'
                    //     : 'translate-x-0'
                    // )}
                  >
                    <span
                      className={css({
                        fontWeight: 'medium',
                        color: isObservedSection(heading.slug)
                          ? 'green.700'
                          : undefined,
                      })}
                      // className={clsx(
                      //   'font-medium',
                      //   currentHeading.slug === heading.slug
                      //     ? 'text-green-700'
                      //     : 'text-gray-700'
                      // )}
                    >
                      {heading.content}
                    </span>
                  </div>
                </div>
              </Link>
            </li>
        ))
        : null}
    </ul>
  )
}
