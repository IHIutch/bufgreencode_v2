import type { ComponentProps, ReactElement } from 'react'

export function HamburgerIcon(props: ComponentProps<'svg'>): ReactElement {
  return (
    <svg
      fill="none"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      stroke="currentColor"
      {...props}
      className="hamburger-icon"
    >
      <g className="group-data-[state=open]:rotate-45">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16"
          className="group-data-[state=open]:translate-y-1.5"
        />
      </g>
      <g className="group-data-[state=open]:-rotate-45">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 18h16"
          className="group-data-[state=open]:-translate-y-1.5"
        />
      </g>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 12h16"
        className="group-data-[state=open]:opacity-0"
      />
    </svg>
  )
}
