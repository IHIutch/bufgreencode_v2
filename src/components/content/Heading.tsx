'use client'

import { createElement } from 'react'

import { Link as LinkIcon } from 'lucide-react'
import {
  Portal,
  Tooltip,
  TooltipContent,
  TooltipPositioner,
  TooltipTrigger,
} from '@ark-ui/react'
import { trackGoal } from 'fathom-client'
import { square } from 'styled-system/patterns'

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

      // @ts-ignore: Temporary until fathom-client is updated
      window?.fathom?.trackEvent(`#${slug}`)
    }
    else {
      console.error('Clipboard API is not available in this browser')

      // @ts-ignore: Temporary until fathom-client is updated
      window?.fathom?.trackEvent(`(fail) #${slug} `)
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
        <Portal>
          <TooltipPositioner>
            <TooltipContent
              className={cx(
                css({
                  'alignItems': 'center',
                  'rounded': 'md',
                  'px': '2',
                  'bg': 'gray.800',
                  'fontSize': 'xs',
                  'fontWeight': 'medium',
                  'color': 'white',
                  'zIndex': '10',
                  'position': 'relative',
                  'lineHeight': 'loose',
                  '&[data-state=open]': { animation: 'tooltipFadeIn 0.1s ease-out, tooltipSlideIn 0.15s ease-out' },
                  '&[data-state=closed]': { animation: 'tooltipFadeOut 0.1s ease-in, tooltipSlideOut 0.1s ease-in' },
                }),
              )}
            // className="rdx-tooltip inline-flex items-center rounded-md px-2 py-1 bg-gray-800 text-xs text-white"
            >
              Copy to clipboard
            </TooltipContent>
          </TooltipPositioner>
        </Portal>
      </Tooltip>
      {headingEl}
    </div>
  )
}
