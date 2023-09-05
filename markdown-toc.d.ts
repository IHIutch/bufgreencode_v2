import { TocItemProps } from "@/types"

declare module 'markdown-toc' {
  type TocOptions = {
    append?: string
    filter?: Function
    slugify?: Function
    bullets?: string | Array<string>
    maxdepth?: number
    firsth1?: boolean
  }
  export default function toc(
    str: string,
    options?: TocOptions,
  ): {
    json: Array<TocItemProps>
  }
}
