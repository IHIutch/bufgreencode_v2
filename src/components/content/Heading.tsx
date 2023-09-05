'use client'

import { createElement } from 'react'

import { Link as LinkIcon } from 'lucide-react'
import {
  Tooltip,
  TooltipContent,
  TooltipPositioner,
  TooltipTrigger,
} from '@ark-ui/react'
import { animate, square } from 'styled-system/patterns'

import { type ContentHeading } from '@/types'

import { css, cx } from 'styled-system/css'

export default function Heading({ slug, level, children }: ContentHeading) {
  const headingEl = createElement(
    `h${level}`,
    {
      id: slug,
      className: css({
        mt: '0',
        scrollMarginTop: '16',
        lineHeight: 'tight',
        fontWeight: 'medium',
      }),
    },
    // { id: slug, className: 'mt-0 scroll-mt-24' },
    children,
  )
  const copyLinkToClipboard = () => {
    // setIsToolTipVisible(true)
    if (navigator.clipboard) {
      navigator.clipboard.writeText(
        `${window.location.origin}${window.location.pathname}#${slug}`,
      ).catch((error) => {
        console.error('Error copying text to clipboard:', error)
      })
    }
    else {
      console.error('Clipboard API is not available in this browser')
    }

    // setTimeout(() => {
    //   setIsToolTipVisible(false)
    // }, 800)
  }

  return (
    <div className={css({ mt: '2em' })}>
      <Tooltip
        open={false}
        positioning={{ placement: 'top' }}
        openDelay={0}
        closeOnPointerDown={false}
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
            cursor: 'pointer',
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
            className={cx(
              css({
                display: 'inline-flex',
                alignItems: 'center',
                rounded: 'md',

                px: '2',
                bg: 'gray.800',
                fontSize: 'xs',
                fontWeight: 'medium',
                color: 'white',
                zIndex: '10',
                position: 'relative',
                lineHeight: 'loose',
              }),
              animate({
                direction: 'enter',
                translateY: 'token(spacing.1)',
                opacity: '0',
              }),
            )}
            // className="rdx-tooltip inline-flex items-center rounded-md px-2 py-1 bg-gray-800 text-xs text-white"
          >
            Copy to clipboard
          </TooltipContent>
        </TooltipPositioner>
      </Tooltip>
      {headingEl}
    </div>
  )
}
