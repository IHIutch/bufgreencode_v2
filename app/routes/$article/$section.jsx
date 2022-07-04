import React, { createElement, useState } from 'react'
import { getArticle } from '~/models/articles.server'
import { getMetaTags } from '~/utils'
import PageToc from '~/components/PageToc'
import Markdoc from '@markdoc/markdoc'
import { useLoaderData } from '@remix-run/react'
import { json } from '@remix-run/node'
import * as Tooltip from '@radix-ui/react-tooltip'
import clsx from 'clsx'
import { Link } from 'lucide-react'
import TableSmall from '~/components/TableSmall'
import FigureImg from '~/components/FigureImg'
import TableResponsive from '~/components/TableResponsive'

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
          {Markdoc.renderers.react(content, React, {
            components: {
              Heading,
              TableSmall,
              FigureImg,
              TableResponsive,
            },
          })}
        </div>
      </div>
      <PageToc />
    </div>
  )
}

const Heading = ({ id, level, children }) => {
  const [isToolTipVisible, setIsToolTipVisible] = useState(false)
  const headingEl = createElement(`h${level}`, { id }, children)
  const copyLinkToClipboard = () => {
    setIsToolTipVisible(true)
    navigator.clipboard.writeText(
      `${window.location.origin}${window.location.pathname}#${id}`
    )
    setTimeout(() => {
      setIsToolTipVisible(false)
    }, 800)
  }

  return (
    <div>
      {headingEl}
      <Tooltip.Root open={isToolTipVisible}>
        <Tooltip.Trigger asChild>
          <button
            type="button"
            className="flex items-center font-semibold text-green-600 underline transition-colors hover:text-green-700"
            onClick={copyLinkToClipboard}
          >
            {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
            <Link className="h-4 w-4" />
            <div>
              <span className="ml-2">Copy Section Link</span>
            </div>
          </button>
        </Tooltip.Trigger>
        <Tooltip.Content
          className={clsx(
            'rdx-tooltip',
            'inline-flex items-center rounded-md px-3 py-1.5',
            'bg-gray-800 text-sm text-white'
          )}
        >
          Link Copied to Clipboard
        </Tooltip.Content>
      </Tooltip.Root>
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
