import React from 'react'
import { type Metadata, type ResolvingMetadata } from 'next'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { notFound } from 'next/navigation'

import { allArticles } from 'contentlayer/generated'
import { customProse, prose } from 'styled-system/recipes'

import FigureImg from '@/components/content/FigureImg'
import Heading from '@/components/content/Heading'
import TableResponsive from '@/components/content/TableResponsive'
import TableSmall from '@/components/content/TableSmall'
import MobileToc from '@/components/MobileToc'
import PageToc from '@/components/PageToc'

import { css, cx } from 'styled-system/css'

export async function generateStaticParams() {
  return allArticles.map(post => ({ slug: post._raw.flattenedPath.split('/') }))
}

const mdxComponents = {
  Heading,
  TableSmall,
  TableResponsive,
  FigureImg,
  Sup: (props: any) => <sup {...props} />,
}

export async function generateMetadata(
  { params }: { params: { slug: string[] } },
  parent?: ResolvingMetadata,
): Promise<Metadata> {
  const article = allArticles.find((article) => {
    return article._raw.flattenedPath === params.slug.join('/')
  })

  if (!article) {
    return {
      title: '',
    }
  }

  const pageName = `${article.article_number}.${article.section_number} ${article.title}`
  const parentMeta = await parent

  return {
    title: pageName,
    openGraph: {
      siteName: parentMeta?.openGraph?.siteName,
      title: {
        absolute: pageName,
      },
      description: parentMeta?.openGraph?.description,
      images: parentMeta?.openGraph?.images || [],
      url: article.slug,
      locale: parentMeta?.openGraph?.locale,
    },
    twitter: {
      title: {
        absolute: pageName,
      },
      description: parentMeta?.twitter?.description || '',
      images: parentMeta?.twitter?.images || [],
      card: 'summary_large_image',
    },
  }
}

export default function Post({ params }: { params: { slug: string[] } }) {
  const article = allArticles.find((article) => {
    return article._raw.flattenedPath === params.slug.join('/')
  })
  if (!article)
    notFound()

  const MDXContent = useMDXComponent(article.body.code)

  return (
    <div
      className={css({
        display: 'flex',
        position: 'relative',
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
            mx: { base: 'auto', lg: '0', xl: 'auto' },
          })}
          // className="max-w-prose xl:mx-auto"
        >
          <div>
            <h1
              className={css({
                mb: '2',
                fontSize: { base: '4xl', sm: '5xl' },
                fontWeight: 'medium',
                letterSpacing: 'tight',
                lineHeight: 'tight',
              })}
              // className="mb-2 text-5xl font-medium leading-tight"
            >
              {article.article_number}.{article.section_number} {article.title}
            </h1>
            {article.lead
              ? (<p
                className={css({
                  fontSize: 'xl',
                  lineHeight: 'relaxed',
                  color: 'gray.600',
                })}
                // className="text-lg text-gray-700"
              >
                {article.lead}
              </p>)
              : null}
          </div>
          <MobileToc>
            <PageToc headings={article.toc} />
          </MobileToc>
          <div
            className={cx(prose(), customProse())}
            // className="page-content prose"
          >
            <MDXContent components={mdxComponents} />
          </div>
        </div>
      </div>
      {article.toc
        ? (<nav
          aria-labelledby="toc-heading"
          className={css({
            pos: 'fixed',
            top: '16',
            bottom: '0',
            right: '0',
            display: {
              base: 'none',
              xl: 'block',
            },
            flexShrink: '0',
            w: '80',
          })}
          // className="hidden shrink-0 lg:w-80 xl:block"
        >
          <div
            className={css({
              h: 'full',
              overflow: 'auto',
              py: '12',
              pr: '4',
            })}
            // className="fixed top-0 h-screen pt-16"
          >
            <div
              className={css({
                mb: '2',
              })}
              // className="mb-2"
            >
              <h3
                id="toc-heading"
                className={css({
                  fontSize: 'xs',
                  fontWeight: 'bold',
                  letterSpacing: 'wider',
                  color: 'gray.500',
                  textTransform: 'uppercase',
                })}
                // className="text-xs font-bold uppercase tracking-wider text-gray-500"
              >
                Page Contents
              </h3>
            </div>
            <PageToc headings={article.toc} />
          </div>
        </nav>)
        : null}
    </div>
  )
}
