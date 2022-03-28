import React from 'react'

export default function FigureImg({ caption, children }) {
  return (
    <figure className="mb-4">
      <div className="border rounded inline-flex p-1">{children}</div>
      <template v-if="caption">
        <figcaption className="mt-1 text-sm text-gray-700">
          {caption}
        </figcaption>
      </template>
    </figure>
  )
}
