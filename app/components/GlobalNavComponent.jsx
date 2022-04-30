import { NavLink, useLoaderData, useMatches } from 'remix'
import groupBy from 'lodash/groupBy'
import * as Accordion from '@radix-ui/react-accordion'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import clsx from 'clsx'
import { slug } from 'github-slugger'

export default function GlobalNavComponent() {
  const { articles } = useLoaderData()

  const matches = useMatches()
  const currentArticle = matches?.[1]?.params?.article

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
  const defaultArticleIdx = Object.keys(groupedArticles).findIndex(
    (article) => slug(article) === currentArticle
  )
  const [activeIdx, setActiveIdx] = useState(
    defaultArticleIdx ? [`content-${defaultArticleIdx}`] : []
  )

  return (
    <Accordion.Root
      asChild
      type="multiple"
      defaultValue={activeIdx}
      onValueChange={setActiveIdx}
    >
      <ul className="text-sm px-2 py-1">
        {Object.keys(groupedArticles).map((article, idx) => (
          <Accordion.Item asChild key={idx} value={`content-${idx}`}>
            <li className="pb-1 'px-2'">
              <Accordion.Trigger className="w-full text-left">
                <div className="flex items-center w-full text-gray-600 hover:text-gray-900">
                  <div className="grow px-2 py-1">
                    <span className="font-medium">
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
              <Accordion.Content className="rdx-collapsible pl-3 py-1">
                <ul
                  className={clsx(
                    'pb-1 border-l border-gray-300',
                    'transition-all duration-200',
                    activeIdx.includes(`content-${idx}`)
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 -translate-y-4'
                  )}
                >
                  {groupedArticles[article].map((section, sIdx) => (
                    <li key={sIdx}>
                      <NavLink
                        className={clsx(
                          'block w-full text-gray-600 hover:text-gray-900 truncate py-1.5',
                          'transition-all duration-200 -ml-px'
                        )}
                        to={`/${section.slug}`}
                      >
                        {({ isActive }) => (
                          <div
                            className={clsx(
                              'px-2 border-l-2',
                              'transition-all duration-200',
                              isActive
                                ? 'border-green-700'
                                : 'border-transparent'
                            )}
                          >
                            <span
                              className={clsx(
                                'truncate',
                                isActive ? 'text-green-700' : ''
                              )}
                            >
                              {section.article_number}.{section.section_number}{' '}
                              {section.title}
                            </span>
                          </div>
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
