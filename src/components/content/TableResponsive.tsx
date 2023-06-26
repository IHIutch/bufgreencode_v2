import type { ReactNode } from 'react'

import { css } from 'styled-system/css'

export default function TableResponsive({ children }: { children: ReactNode }) {
  return (
    <div
      className={css({
        mt: '-2',
        mb: '4',
        maxWidth: 'full',
        overflowX: 'auto',
        '& table': {
          w: 'full',
          '& th': {
            whiteSpace: 'nowrap',
            borderBottomWidth: '2px',
            borderBottomColor: 'gray.200',
          },
          '& td': {
            whiteSpace: 'nowrap',
            borderTopWidth: '1px',
            borderTopColor: 'gray.200',
          },
        },
      })}
      // className="table-scroll table-bordered -mt-2 mb-4 max-w-full overflow-x-auto"
    >
      {children}
    </div>
  )
}
