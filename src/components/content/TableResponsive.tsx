import type { ReactNode } from 'react'

export default function TableResponsive({ children }: { children: ReactNode }) {
  return (
    <div className="table-scroll table-bordered -mt-2 mb-4 max-w-full overflow-x-auto">
      {children}
    </div>
  )
}
