'use client'

import { createElement, useState } from 'react'

import { Link as LinkIcon } from 'lucide-react'
import { square } from 'styled-system/patterns'

import { type ContentHeading } from '@/types'
import {
  Tooltip,
  TooltipContent,
  TooltipPositioner,
  TooltipTrigger,
} from '@ark-ui/react'

import { css } from 'styled-system/css'

export default function Heading({ slug, level, children }: ContentHeading) {
  const [isToolTipVisible, setIsToolTipVisible] = useState(false)
  const headingEl = createElement(
    `h${level}`,
    {
      id: slug,
      className: css({
        mt: '0',
        scrollMarginTop: '28',
        lineHeight: 'tight',
        fontWeight: 'semibold',
      }),
    },
    // { id: slug, className: 'mt-0 scroll-mt-24' },
    children
  )
  const copyLinkToClipboard = () => {
    setIsToolTipVisible(true)
    navigator.clipboard.writeText(
      `${window.location.origin}${window.location.pathname}#${slug}`
    )

    setTimeout(() => {
      setIsToolTipVisible(false)
    }, 800)
  }

  return (
    <div className={css({ mt: '2em' })}>
      <Tooltip
        open={isToolTipVisible}
        positioning={{ placement: 'top-center' }}
      >
        <TooltipTrigger
          className={css({
            mb: '1',
            display: 'flex',
            alignItems: 'center',
            fontSize: 'sm',
            fontWeight: 'semibold',
            color: {
              base: 'green.700',
              _hover: 'green.800',
            },
            textDecoration: 'underline',
            transition: 'color ease 0.2s',
          })}
          // className="mb-1 flex items-center text-sm font-semibold text-green-600 underline transition-colors hover:text-green-700"
          onClick={copyLinkToClipboard}
        >
          <LinkIcon
            strokeWidth="3"
            className={square({ size: '3.5' })}
            // className="h-[0.875rem] w-[0.875rem]"
          />
          <div>
            <span
              className={css({ ml: '1' })}
              // className="ml-1"
            >
              Share Section
            </span>
          </div>
        </TooltipTrigger>
        <TooltipPositioner>
          <TooltipContent
            className={css({
              display: 'inline-flex',
              alignItems: 'center',
              rounded: 'md',
              px: '2',
              py: '1',
              bg: 'gray.800',
              fontSize: 'sm',
              color: 'white',
            })}
            // className="rdx-tooltip inline-flex items-center rounded-md px-2 py-1 bg-gray-800 text-xs text-white"
          >
            Copied to clipboard
          </TooltipContent>
        </TooltipPositioner>
      </Tooltip>
      {headingEl}
    </div>
  )
}
