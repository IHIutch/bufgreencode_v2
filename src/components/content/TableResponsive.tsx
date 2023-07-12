import type { ReactNode } from 'react'

import { css } from 'styled-system/css'

export default function TableResponsive({ children }: { children: ReactNode }) {
  return (
    <div
      className={css({
        'mt': '-2',
        'mb': '4',
        'maxWidth': 'full',
        'overflowX': 'auto',
        '& table': {
          'w': 'full',
          'fontSize': 'sm',
          'lineHeight': 'relaxed',
          '& th': {
            'whiteSpace': 'nowrap',
            'borderBottomWidth': '2px',
            'borderBottomColor': 'gray.200',
            'p': '2.5',
            '&:first-of-type': {
              pl: '0',
            },
            '&:last-of-type': {
              pr: '0',
            },
          },
          '& td': {
            'whiteSpace': 'nowrap',
            'borderTopWidth': '1px',
            'borderTopColor': 'gray.200',
            'p': '2.5',
            '&:first-of-type': {
              pl: '0',
            },
            '&:last-of-type': {
              pr: '0',
            },
          },
        },
      })}
      // className="table-scroll table-bordered -mt-2 mb-4 max-w-full overflow-x-auto"
    >
      {children}
    </div>
  )
}
