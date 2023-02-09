import fs from 'fs'
import { bundleMDX } from 'mdx-bundler'

const getHeadings = (node, sections = []) => {
  if (node?.name) {
    // 'Heading' is defined in markdoc/schema/heading.markdoc.js
    if (node.name.match('Heading')) {
      const title = node.children[0]

      if (typeof title === 'string') {
        sections.push({
          ...node.attributes,
          title,
        })
      }
    }

    if (node.children) {
      for (const child of node.children) {
        getHeadings(child, sections)
      }
    }
  }

  return sections
}

export async function getArticles() {
  const contentDir = process.cwd() + '/api/articles'
  const contentPaths = fs.readdirSync(contentDir)

  const articlePaths = contentPaths.reduce((acc, path) => {
    const paths = fs.readdirSync(`${contentDir}/${path}`)
    return acc.concat(
      paths.map((p) => ({
        fullPath: `${contentDir}/${path}/${p}`,
        slug: `${path}/${p}`.split('.').slice(0, -1).join('.'),
      }))
    )
  }, [])

  const articles = await Promise.all(
    articlePaths.map(async (ap) => {
      const result = await bundleMDX({
        file: ap.fullPath,
        cwd: process.cwd() + '/app/components',
      })

      const { frontmatter } = result

      return { ...frontmatter, slug: ap.slug }
    })
  )
  return articles
}

export async function getArticle({ article, section }) {
  try {
    const contentDir = process.cwd() + '/api/articles'
    const result = await bundleMDX({
      file: `${contentDir}/${article}/${section}.mdx`,
      cwd: process.cwd() + '/app/components',
    })

    const {
      code,
      matter: { content },
      frontmatter,
    } = result

    const headings = getHeadings(content)

    return { code, frontmatter, headings }
  } catch (error) {
    console.log(error)
    return null
  }
}
