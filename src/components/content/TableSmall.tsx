import type { ReactNode } from 'react'

export default function TableSmall({ children }: { children: ReactNode }) {
  return (
    <div className="table-bordered table-hidden-thead -mt-2 mb-4">
      {children}
    </div>
  )
}
