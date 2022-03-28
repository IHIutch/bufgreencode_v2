import React from 'react'

export default function TableResponsive({ children }) {
  return (
    <div className="table-scroll table-bordered max-w-full overflow-x-auto mb-4 -mt-2">
      {children}
    </div>
  )
}
