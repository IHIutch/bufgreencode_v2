import fs from 'fs'
import { bundleMDX } from 'mdx-bundler'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'
import remarkToc from 'remark-toc'
import githubSlugger from 'github-slugger'

export async function getArticles() {
  const contentDir = `${__dirname}/articles`
  const contentPaths = fs.readdirSync(contentDir)

  const articlePaths = contentPaths.reduce((acc, path) => {
    const paths = fs.readdirSync(`${contentDir}/${path}`)
    return [
      ...acc,
      ...paths.map((p) => ({
        article: path,
        section: p,
      })),
    ]
  }, [])

  const articles = await Promise.all(
    articlePaths.map(async (path) => {
      const { code, frontmatter } = await bundleMDX({
        file: `${contentDir}/${path.article}/${path.section}`,
        cwd: `${contentDir}/${path.article}`,
      })

      return {
        code,
        frontmatter,
        slug: `${path.article}/${path.section}`
          .split('.')
          .slice(0, -1)
          .join('.'),
      }
    })
  )

  return articles
}

export async function getArticle({ article, section }) {
  try {
    const contentDir = `${__dirname}/articles`
    const { code, frontmatter, matter } = await bundleMDX({
      file: `${contentDir}/${article}/${section}.mdx`,
      cwd: `${contentDir}/${article}`,
      xdmOptions(options) {
        options.remarkPlugins = [
          ...(options.remarkPlugins ?? []),
          remarkGfm,
          [remarkToc, { tight: false, ordered: true }],
        ]
        options.rehypePlugins = [...(options.rehypePlugins ?? []), rehypeSlug]
        return options
      },
    })

    const slugger = new githubSlugger()

    const headings =
      matter && matter.content
        ? matter.content
            .split('\n')
            .filter((line) => line.match(/#{2,6}\s/))
            .map((line) => {
              const [, level, title] = line.match(/(#{2,6})\s(.*)/)
              return {
                level: level.length,
                title,
                anchor: slugger.slug(title),
              }
            })
        : []

    return {
      code,
      frontmatter,
      headings,
      slug: `${article}/${section}`.split('.').slice(0, -1).join('.'),
    }
  } catch (error) {
    return null
  }
}
