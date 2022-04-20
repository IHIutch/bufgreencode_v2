import { NavLink, useLoaderData } from 'remix'
import groupBy from 'lodash/groupBy'
import * as Accordion from '@radix-ui/react-accordion'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import clsx from 'clsx'

export default function GlobalNavComponent() {
  const { articles } = useLoaderData()
  const [activeIdx, setActiveIdx] = useState([])

  const articleData = articles
    .map((a) => ({
      article: a.frontmatter.article,
      title: a.frontmatter.title,
      article_number: a.frontmatter.article_number,
      section_number: a.frontmatter.section_number,
      slug: a.slug,
    }))
    .sort((a, b) => {
      return a.article_number - b.article_number
    })
    .sort((a, b) => {
      return a.section_number - b.section_number
    })

  const groupedArticles = groupBy(articleData, 'article')

  return (
    <Accordion.Root asChild type="multiple" onValueChange={setActiveIdx}>
      <ul className="text-sm">
        {Object.keys(groupedArticles).map((article, idx) => (
          <Accordion.Item
            asChild
            key={idx}
            value={`content-${idx}`}
            className={clsx(
              'px-4 duration-200',
              activeIdx.includes(`content-${idx}`) ? 'bg-gray-100' : ''
            )}
          >
            <li>
              <Accordion.Trigger className="w-full text-left">
                <div className="flex items-center w-full text-gray-700 hover:text-gray-900">
                  <div className="grow px-2 py-1">
                    <span>
                      {groupedArticles[article][0].article_number}. {article}
                    </span>
                  </div>
                  <div>
                    <div
                      className={clsx(
                        'duration-200',
                        activeIdx.includes(`content-${idx}`)
                          ? 'rotate-180'
                          : 'rotate-0'
                      )}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </Accordion.Trigger>
              <Accordion.Content className="rdx-collapsible">
                <ul
                  className={clsx(
                    'pl-2',
                    'transition-all duration-200',
                    activeIdx.includes(`content-${idx}`)
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 -translate-y-4'
                  )}
                >
                  {groupedArticles[article].map((section, sIdx) => (
                    <li key={sIdx}>
                      <NavLink
                        to={`/${section.slug}`}
                        className="text-gray-700 hover:text-gray-900 max-w-full block truncate px-2 py-1"
                      >
                        {({ isActive }) => (
                          <span
                            className={clsx(
                              'truncate',
                              isActive ? 'text-gray-900 font-medium' : ''
                            )}
                          >
                            {section.article_number}.{section.section_number}{' '}
                            {section.title}
                          </span>
                        )}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </Accordion.Content>
            </li>
          </Accordion.Item>
        ))}
      </ul>
    </Accordion.Root>
  )
}
