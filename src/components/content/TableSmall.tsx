import type { ReactNode } from 'react'

import { css } from 'styled-system/css'

export default function TableSmall({ children }: { children: ReactNode }) {
  return (
    <div
      className={css({
        'mt': '-2',
        'mb': '4',
        '& table': {
          'fontSize': 'sm',
          'lineHeight': 'relaxed',
          '& thead': {
            display: 'none',
          },
          '& th': {
            borderBottomWidth: '2px',
            borderBottomColor: 'gray.200',
          },
          '& td': {
            'p': '2.5',
            'borderTopWidth': '1px',
            'borderTopColor': 'gray.200',
            '&:first-of-type': {
              pl: '0',
            },
            '&:last-of-type': {
              pr: '0',
            },
          },
        },
      })}
      // className="table-bordered table-hidden-thead -mt-2 mb-4"
    >
      {children}
    </div>
  )
}
