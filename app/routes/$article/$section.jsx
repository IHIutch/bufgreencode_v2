import { json, useLoaderData } from 'remix'
import { getArticle, getArticles } from '~/models/articles.server'
import { getMDXComponent } from 'mdx-bundler/client'
import { useMemo } from 'react'
import SidebarLayout from '~/layouts/SidebarLayout'

export default function Post() {
  const {
    content: { code, frontmatter, slug, headings },
  } = useLoaderData()
  const Component = useMemo(() => getMDXComponent(code), [code])

  return (
    <SidebarLayout headings={headings}>
      <div className="w-100 max-w-prose mx-auto">
        <h1 className="text-5xl mb-2 leading-tight">{frontmatter.title}</h1>
        {frontmatter.lead ? (
          <p className="text-gray-700 font-medium">{frontmatter.lead}</p>
        ) : null}
        <div className="page-content prose">
          <Component />
        </div>
      </div>
    </SidebarLayout>
  )
}

export const loader = async ({ params }) => {
  const { article, section } = params
  const content = await getArticle({ article, section })
  const articles = await getArticles()

  if (!content || !articles) {
    throw new Response('Not Found', {
      status: 404,
    })
  }

  return json({ content, articles })
}
