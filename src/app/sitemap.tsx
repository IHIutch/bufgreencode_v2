import { type MetadataRoute } from 'next'

import { allArticles } from 'contentlayer/generated'

export default function sitemap(): MetadataRoute.Sitemap {
  const urls = allArticles.map((a) => {
    return { url: `https://bufgreencode.com${a.slug}` }
  })

  return [
    {
      url: 'https://bufgreencode.com',
    },
    {
      url: 'https://bufgreencode.com/disclaimer',
    },
    ...urls,
  ]
}
