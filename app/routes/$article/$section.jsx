import React from 'react'
import { getArticle } from '~/models/articles.server'
import { getMetaTags } from '~/utils'
import PageToc from '~/components/PageToc'
import Markdoc from '@markdoc/markdoc'
import { useLoaderData } from '@remix-run/react'
import { json } from '@remix-run/node'

export default function Post() {
  const { content, frontmatter } = useLoaderData()

  return (
    <div className="flex">
      <div className="mx-auto w-full max-w-prose lg:w-3/4">
        <h1 className="mb-2 text-5xl font-medium leading-tight">
          {frontmatter.title}
        </h1>
        {frontmatter.lead ? (
          <p className="font-medium text-gray-700">{frontmatter.lead}</p>
        ) : null}
        <div className="page-content prose">
          {Markdoc.renderers.react(content, React)}
        </div>
      </div>
      <PageToc />
    </div>
  )
}

export function meta({ data, location }) {
  const pageTitle = data?.content?.frontmatter?.title || ''
  const pathname = location?.pathname || ''
  const metaTags = getMetaTags({
    pageTitle,
    pathname,
  })

  return { ...metaTags }
}

export const loader = async ({ params }) => {
  const { article, section } = params
  const content = await getArticle({ article, section })

  if (!content) {
    throw new Response('Not Found', {
      status: 404,
    })
  }

  return json(content)
}
