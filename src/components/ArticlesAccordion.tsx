'use client'

import { useState } from 'react'
import { type Route } from 'next'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { allArticles } from 'contentlayer/generated'
import groupBy from 'lodash/groupBy'
import { ChevronDown } from 'lucide-react'
import { animate, square } from 'styled-system/patterns'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@ark-ui/react'

import { css, cx } from 'styled-system/css'

export default function ArticlesAccordion() {
  const activeSlug = usePathname()
  const groupedArticles = groupBy(
    allArticles.sort(
      (a, b) =>
        a.article_number +
        a.section_number -
        (b.article_number + b.section_number)
    ),
    'article_number'
  )

  const activeArticle = allArticles.find((a) => a.slug === activeSlug)

  return (
    <Accordion
      multiple
      defaultValue={
        activeArticle ? [activeArticle?.article_number.toString()] : []
      }
    >
      <ul
        className={css({ px: '2', py: '1', fontSize: 'sm' })}
        // className="px-2 py-1 text-sm"
      >
        {Object.keys(groupedArticles).map((articleNum, idx) => (
          <AccordionItem key={idx} value={articleNum} className="group">
            {({ isOpen: _ }) => (
              <li
                className={css({
                  px: '2',
                  pb: '1',
                })}
                // className="px-2 pb-1"
              >
                <AccordionTrigger
                  className={css({
                    w: 'full',
                    textAlign: 'left',
                    cursor: 'pointer',
                  })}
                  // className="w-full text-left"
                >
                  <div
                    className={css({
                      display: 'flex',
                      w: 'full',
                      alignItems: 'center',
                      color: { base: 'gray.600', _hover: 'gray.900' },
                    })}
                    // className="flex w-full items-center text-gray-600 hover:text-gray-900"
                  >
                    <div
                      className={css({
                        flexGrow: '1',
                        px: '2',
                        py: '1',
                      })}
                      // className="grow px-2 py-1"
                    >
                      <span
                        className={css({
                          fontWeight: 'medium',
                        })}
                        // className="font-medium"
                      >
                        {groupedArticles[articleNum][0].article_number}.{' '}
                        {groupedArticles[articleNum][0].article}
                      </span>
                    </div>
                    <div>
                      <div
                        className={css({
                          transition: 'transform ease 0.2s',
                          transform: 'rotate(0)',
                          _groupExpanded: {
                            transform: 'rotate(180deg)',
                          },
                        })}
                        // className={clsx(
                        //   'duration-200',
                        //   isOpen ? 'rotate-180' : 'rotate-0'
                        // )}
                      >
                        <ChevronDown
                          className={square({ size: '4' })}
                          // className="h-4 w-4"
                        />
                      </div>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent
                  className={css({
                    overflow: 'hidden',
                    pt: '1',
                    pb: '2',
                    pl: '3',
                  })}
                  // className={
                  //   'overflow-hidden transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down py-1 pl-3'
                  // }
                >
                  <ul
                    className={cx(
                      css({
                        borderLeftWidth: '1px',
                        borderLeftColor: 'gray.300',
                      }),
                      animate({
                        direction: 'enter',
                        translateY: 'token(spacing.-2)',
                        opacity: '0.4',
                        duration: 'token(durations.normal)',
                      })
                    )}
                    // className={clsx(
                    //   'border-l border-gray-300 pb-1',
                    //   'transition-all duration-200',
                    //   isOpen
                    //     ? 'translate-y-0 opacity-100'
                    //     : '-translate-y-4 opacity-0'
                    // )}
                  >
                    {groupedArticles[articleNum].map((section, sIdx) => (
                      <li key={sIdx}>
                        <div
                          className={css({
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                            py: '1.5',
                            color: {
                              base: 'gray.600',
                              _hover: 'gray.900',
                            },
                            ml: '-1px',
                            transition: 'color ease 0.2s',
                          })}
                          // className="block w-full truncate py-1.5 text-gray-600 hover:text-gray-900 -ml-px transition-all duration-200"
                        >
                          <Link
                            href={`${section.slug}` as Route}
                            className={css({
                              display: 'block',
                              px: '2',
                              transition: 'color ease 0.2s',
                              borderLeftWidth: '2px',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                              whiteSpace: 'nowrap',
                              ...(activeSlug === section.slug
                                ? {
                                    borderColor: 'green.700',
                                    color: 'green.700',
                                  }
                                : {
                                    borderColor: 'transparent',
                                  }),
                            })}
                            // className={clsx(
                            //   'border-l-2 px-2',
                            //   'transition-all duration-200',
                            //   activeSlug === section.slug
                            //     ? 'border-green-700'
                            //     : 'border-transparent'
                            // )}
                          >
                            <span
                            // className={clsx(
                            //   'truncate',
                            //   activeSlug === section.slug
                            //     ? 'text-green-700'
                            //     : ''
                            // )}
                            >
                              {section.article_number}.{section.section_number}{' '}
                              {section.title}
                            </span>
                          </Link>
                        </div>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </li>
            )}
          </AccordionItem>
        ))}
      </ul>
    </Accordion>
  )
}
