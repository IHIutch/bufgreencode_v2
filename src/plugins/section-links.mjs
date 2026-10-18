import { readdir, readFile } from 'node:fs/promises'
import { basename } from 'node:path'
import { createSatteriMarkdownProcessor } from '@astrojs/markdown-satteri'
import { parseFrontmatter } from 'astro/markdown'

export async function createSectionLinks() {
  const directory = new URL('../content/articles/', import.meta.url)
  const sections = new Map()
  const renderer = await createSatteriMarkdownProcessor({ syntaxHighlight: false })

  // Index at startup using the same heading IDs Astro generates for the site.
  for (const file of (await readdir(directory, { recursive: true })).sort()) {
    if (!/\.mdx?$/.test(file) || basename(file).startsWith('_'))
      continue

    const { content, frontmatter } = parseFrontmatter(await readFile(new URL(file, directory), 'utf8'))
    const url = `/${file.replace(/\.mdx?$/, '')}/`
    sections.set(`${frontmatter.article_number}.${frontmatter.section_number}`, url)

    const { metadata } = await renderer.render(content, { frontmatter })
    for (const heading of metadata.headings) {
      const number = heading.text.match(/^(\d+(?:\.\d+)+)\s/)?.[1]
      if (number)
        sections.set(number, `${url}#${heading.slug}`)
    }
  }

  return {
    name: 'section-links',
    element: {
      filter: ['a'],
      visit(node, context) {
        const href = node.properties.href
        // Markdown can percent-encode the section sign in the destination.
        const target = typeof href === 'string' ? href.match(/^(?:§|%C2%A7)(.*)$/i)?.[1] : undefined
        if (target === undefined)
          return

        const url = sections.get(target)
        if (!url)
          throw new Error(`Unknown section link "§${target}" in ${context.fileURL?.pathname ?? 'Markdown'}`)

        context.setProperty(node, 'href', url)
      },
    },
  }
}
