import { glob } from 'astro/loaders'
import { defineCollection, z } from 'astro:content'

const articleCollection = defineCollection({
  loader: glob({ pattern: '**\/[^_]*.(md|mdx)', base: './src/data/articles' }),
  schema: z.object({
    title: z.string(),
    lead: z.string().optional(),
    article: z.string(),
    article_number: z.number(),
    section_number: z.number(),
  }),
})

export const collections = {
  articles: articleCollection,
}
