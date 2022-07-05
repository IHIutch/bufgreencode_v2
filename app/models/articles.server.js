import fs from 'fs'
import Markdoc from '@markdoc/markdoc'
import yaml from 'js-yaml'
import { heading } from '~/markdoc/schema/heading.markdoc'

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
  const contentDir = `${__dirname}/articles`
  const contentPaths = fs.readdirSync(contentDir)

  const articlePaths = contentPaths.reduce((acc, path) => {
    const paths = fs.readdirSync(`${contentDir}/${path}`)
    return [
      ...acc,
      ...paths.map((p) => {
        return {
          article: path,
          section: p.split('.').slice(0, -1).join('.'),
        }
      }),
    ]
  }, [])

  const articles = await Promise.all(
    articlePaths.map(async (path) => {
      const source = fs.readFileSync(
        `${contentDir}/${path.article}/${path.section}.mdx`,
        'utf8',
        (err, data) => {
          if (err) {
            console.error(err)
            return
          }
          return data
        }
      )

      const ast = Markdoc.parse(source)
      const frontmatter = ast.attributes.frontmatter
        ? yaml.load(ast.attributes.frontmatter)
        : {}

      return {
        frontmatter,
        slug: `${path.article}/${path.section}`,
        articleSlug: path.article,
      }
    })
  )

  return articles
}

export async function getArticle({ article, section }) {
  try {
    const contentDir = `${__dirname}/articles`
    const source = fs.readFileSync(
      `${contentDir}/${article}/${section}.mdx`,
      'utf8',
      (err, data) => {
        if (err) {
          console.error(err)
          return
        }
        return data
      }
    )

    const ast = Markdoc.parse(source)
    const frontmatter = ast.attributes.frontmatter
      ? yaml.load(ast.attributes.frontmatter)
      : {}

    const content = Markdoc.transform(ast, {
      tags: {
        tableSmall: {
          render: 'TableSmall',
        },
        figureImg: {
          render: 'FigureImg',
          attributes: {
            caption: {
              type: 'String',
            },
          },
        },
        tableResponsive: {
          render: 'TableResponsive',
        },
        sup: {
          render: 'Sup',
        },
      },
      nodes: {
        heading,
      },
    })
    const headings = getHeadings(content)

    return { content, frontmatter, headings }
  } catch (error) {
    console.log(error)
    return null
  }
}
