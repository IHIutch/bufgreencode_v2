import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import toc from 'markdown-toc'
import remarkGfm from 'remark-gfm'

import { withTableOfContents } from './remark/withTableOfContents.mjs'

export const Article = defineDocumentType(() => ({
  name: 'Article',
  filePathPattern: '**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true,
    },
    article: {
      type: 'string',
      required: true,
    },
    lead: {
      type: 'string',
      required: false,
    },
    article_number: {
      type: 'number',
      required: true,
    },
    section_number: {
      type: 'number',
      required: true,
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (post) => {
        return `/${post._raw.flattenedPath}`
      },
    },
    toc: {
      type: 'json',
      resolve: doc => toc(doc.body.raw, { maxdepth: 3 }).json,
    },
  },
}))

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Article],
  mdx: {
    remarkPlugins: [remarkGfm, withTableOfContents],
  },
})
