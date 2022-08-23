import { getArticles } from '~/models/articles.server'

export const loader = async () => {
  const articles = await getArticles()
  if (!articles) {
    // Fathom.trackGoal() TODO: track 404's
    throw new Response('Not Found', {
      status: 404,
    })
  }

  const mappedArticles = articles.map((a) => {
    return `<url>
    <loc>https://bufgreencode.com/${a.slug}</loc>
    </url>`
  })

  const content = `
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${mappedArticles.join('')}
    </urlset>
    `
  // Return the response with the content, a status 200 message, and the appropriate headers for an XML page
  return new Response(content, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'xml-version': '1.0',
      encoding: 'UTF-8',
    },
  })
}
