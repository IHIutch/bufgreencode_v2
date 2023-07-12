export interface TocHeading {
  slug: string
  content: string
}

export interface ContentHeading {
  level: number
  slug: string
  children: React.ReactNode
}
