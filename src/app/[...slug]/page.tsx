import React from 'react'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { notFound } from 'next/navigation'

import clsx from 'clsx'
import { allArticles } from 'contentlayer/generated'
import { customProse, prose } from 'styled-system/recipes'

import FigureImg from '@/components/content/FigureImg'
import Heading from '@/components/content/Heading'
import TableResponsive from '@/components/content/TableResponsive'
import TableSmall from '@/components/content/TableSmall'
import PageToc from '@/components/PageToc'

import { css } from 'styled-system/css'

export const generateStaticParams = async () =>
  allArticles.map((post) => ({ slug: post._raw.flattenedPath.split('/') }))

const mdxComponents = {
  Heading,
  TableSmall,
  TableResponsive,
  FigureImg,
  Sup: (props: any) => <sup {...props} />,
}

export default function Post({ params }: { params: { slug: string[] } }) {
  const article = allArticles.find((article) => {
    return article._raw.flattenedPath === params.slug.join('/')
  })
  if (!article) notFound()

  const MDXContent = useMDXComponent(article.body.code)

  return (
    <div
      className={css({
        display: 'flex',
      })}
      // className="flex"
    >
      <div
        className={css({
          my: '12',
          w: { base: 'full', xl: 'calc(100% - token(sizes.80))' },
          px: { base: '4', md: '8' },
        })}
        // className="my-12 w-full px-4 md:px-8 xl:w-[calc(100%-20rem)]"
      >
        <div
          className={css({
            maxW: 'prose',
            mx: { base: 'auto', md: '0', xl: 'auto' },
          })}
          // className="max-w-prose xl:mx-auto"
        >
          <h1
            className={css({
              mb: '2',
              fontSize: '5xl',
              fontWeight: 'medium',
              letterSpacing: 'tight',
            })}
            // className="mb-2 text-5xl font-medium leading-tight"
          >
            {article.article_number}.{article.section_number} {article.title}
          </h1>
          {article.lead ? (
            <p
              className={css({
                fontSize: 'xl',
                lineHeight: 'relaxed',
                color: 'gray.600',
              })}
              // className="text-lg text-gray-700"
            >
              {article.lead}
            </p>
          ) : null}
          <div
            className={clsx(prose(), customProse())}
            // className="page-content prose"
          >
            <MDXContent components={mdxComponents} />
          </div>
        </div>
      </div>
      <aside
        className={css({
          display: {
            base: 'none',
            xl: 'block',
          },
          flexShrink: '0',
          w: '80',
        })}
        // className="hidden shrink-0 lg:w-80 xl:block"
      >
        {article.toc ? (
          <div
            className={css({
              pos: 'fixed',
              top: '0',
              h: 'full',
              pt: '16',
            })}
            // className="fixed top-0 h-screen pt-16"
          >
            <div
              className={css({
                h: 'full',
                overflowY: 'auto',
              })}
              // className="h-full overflow-y-auto"
            >
              <div
                className={css({
                  my: '12',
                  pr: '4',
                })}
                // className="my-12 pr-4"
              >
                <div
                  className={css({
                    mb: '2',
                  })}
                  // className="mb-2"
                >
                  <span
                    className={css({
                      fontSize: 'xs',
                      fontWeight: 'bold',
                      letterSpacing: 'wider',
                      color: 'gray.500',
                      textTransform: 'uppercase',
                    })}
                    // className="text-xs font-bold uppercase tracking-wider text-gray-500"
                  >
                    On this Page
                  </span>
                </div>
                <PageToc headings={article.toc} />
              </div>
            </div>
          </div>
        ) : null}
      </aside>
    </div>
  )
}
