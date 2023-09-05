export interface ContentHeading {
  level: number
  slug: string
  children: React.ReactNode
}

export interface TocItemProps {
  slug: string
  content: string
  lvl: number
}
