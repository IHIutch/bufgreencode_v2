import type { ReactNode } from 'react'

import { css } from 'styled-system/css'

export default function FigureImg({
  caption,
  children,
}: {
  caption?: string
  children: ReactNode
}) {
  return (
    <figure
      className={
        'not-prose ' +
        css({
          mb: '4',
        })
      }
      // className="not-prose mb-4"
    >
      <div
        className={css({
          display: 'inline-flex',
          w: 'full',
          rounded: 'md',
          borderWidth: '1px',
          borderColor: 'gray.200',
          p: '1',
          overflow: 'hidden',
        })}
        // className="inline-flex w-full rounded border p-1"
      >
        {children}
      </div>
      {caption ? (
        <figcaption
          className={css({
            mt: '1',
            fontSize: 'sm',
            color: 'gray.700',
          })}
          // className="mt-1 text-sm text-gray-700"
        >
          {caption}
        </figcaption>
      ) : null}
    </figure>
  )
}
