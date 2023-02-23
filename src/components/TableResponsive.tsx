import type { ReactElement } from 'react'

export default function TableResponsive({
  children,
}: {
  children: ReactElement
}) {
  return (
    <div className="table-scroll table-bordered mb-4 -mt-2 max-w-full overflow-x-auto">
      {children}
    </div>
  )
}
