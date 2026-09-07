import type { CollectionEntry } from 'astro:content'
import type { TransitionBeforeSwapEvent } from 'astro:transitions/client'
import { Accordion } from '@ark-ui/react'
import groupBy from 'lodash/groupBy'
import * as React from 'react'

type ArticlesType = Pick<CollectionEntry<'articles'>, 'data' | 'id'>

export default function ArticlesAccordion({
  articles,
  activePath,
}: {
  articles: ArticlesType[]
  activePath: string
}) {
  const [localActivePath, setLocalActivePath] = React.useState(activePath)
  const groupedArticles = groupBy(
    articles.sort(
      (a, b) =>
        a.data.article_number
        + a.data.section_number
        - (b.data.article_number + b.data.section_number),
    ),
    'data.article_number',
  )

  const activeArticle = articles.find(a => `/${a.id}` === localActivePath)
  const activeArticleNum = activeArticle?.data.article_number.toString()

  React.useEffect(() => {
    document.addEventListener('astro:before-swap', (e: TransitionBeforeSwapEvent) => {
      setLocalActivePath(e.to.pathname)
    })
  }, [])

  return (
    <div>

      <Accordion.Root
        multiple
        defaultValue={activeArticleNum ? [activeArticleNum] : []}
      >
        <ul className="px-2 py-1 text-sm">
          {Object.keys(groupedArticles).map((articleNum, idx) => (
            <Accordion.Item key={idx} value={articleNum} className="group">
              <li className="px-2 pb-1">
                <Accordion.ItemTrigger className="w-full text-left cursor-pointer">
                  <div className="flex w-full items-center text-gray-600 hover:text-gray-900">
                    <div className="flex-grow px-2 py-1">
                      <span className="font-medium">
                        {groupedArticles[articleNum][0].data.article_number}
                        .
                        {' '}
                        {groupedArticles[articleNum][0].data.article}
                      </span>
                    </div>
                    <div>
                      <div className="transition-transform ease-in-out duration-200 rotate-0 group-data-[state=open]:rotate-180">
                        <span className="icon-[lucide--chevron-down] size-4" />
                      </div>
                    </div>
                  </div>
                </Accordion.ItemTrigger>
                <Accordion.ItemContent className="grid pl-3 motion-safe:transition-[grid-template-rows,padding-top,padding-bottom] motion-safe:duration-200 motion-safe:ease-in-out grid-rows-[0fr] group-data-[state=open]:grid-rows-[1fr] group-data-[state=open]:pt-1 group-data-[state=open]:pb-2">
                  <ul className="overflow-hidden">
                    {groupedArticles[articleNum].map((section, sIdx) => (
                      <li
                        key={sIdx}
                        className="border-l border-l-gray-300"
                      >
                        <div className="overflow-hidden text-ellipsis whitespace-nowrap py-1.5 text-gray-600 hover:text-gray-900 -ml-px transition-colors ease-in-out duration-200">
                          <a
                            href={`/${section.id}`}
                            aria-current={
                              localActivePath === `/${section.id}`
                                ? 'page'
                                : undefined
                            }
                            className="block px-2 transition-colors ease-in-out duration-200 border-l-2 overflow-hidden text-ellipsis whitespace-nowrap border-transparent aria-[current=page]:border-green-700 aria-[current=page]:text-green-700"
                          >
                            <span>
                              {section.data.article_number}
                              .
                              {section.data.section_number}
                              {' '}
                              {section.data.title}
                            </span>
                          </a>
                        </div>
                      </li>
                    ))}
                  </ul>
                </Accordion.ItemContent>
              </li>
            </Accordion.Item>
          ))}
        </ul>
      </Accordion.Root>
    </div>
  )
}
