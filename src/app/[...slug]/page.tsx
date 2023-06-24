import React, { createElement } from 'react'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { notFound } from 'next/navigation'

import { allArticles } from 'contentlayer/generated'
import { type ContentHeading } from 'types'

import FigureImg from '@/components/content/FigureImg'
import TableResponsive from '@/components/content/TableResponsive'
import TableSmall from '@/components/content/TableSmall'
import PageToc from '@/components/PageToc'

export const generateStaticParams = async () =>
  allArticles.map((post) => ({ slug: post._raw.flattenedPath.split('/') }))

const mdxComponents = {
  Heading: ({ level, slug, children }: ContentHeading) => {
    const headingEl = createElement(
      `h${level}`,
      { id: slug, className: 'mt-0 scroll-mt-24' },
      children
    )
    return <div>{headingEl}</div>
  },
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
    <div className="flex">
      <div className="my-12 w-full px-4 md:px-8 xl:w-[calc(100%-20rem)]">
        <div className="max-w-prose xl:mx-auto">
          <h1 className="mb-2 text-5xl font-medium leading-tight">
            {article.title}
          </h1>
          {article.lead ? (
            <p className="text-lg text-gray-700">{article.lead}</p>
          ) : null}
          <div className="page-content prose">
            <MDXContent components={mdxComponents} />
          </div>
        </div>
      </div>
      <aside className="hidden shrink-0 lg:w-80 xl:block">
        {article.toc ? (
          <div className="fixed top-0 h-screen pt-16">
            <div className="h-full overflow-y-auto">
              <div className="my-12 pr-4">
                <div className="mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
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
