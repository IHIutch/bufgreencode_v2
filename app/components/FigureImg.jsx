import React from 'react'

export default function FigureImg({ caption, children }) {
  return (
    <figure className="mb-4 not-prose">
      <div className="border rounded inline-flex p-1 w-full">{children}</div>
      {caption ? (
        <figcaption className="mt-1 text-sm text-gray-700">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  )
}
