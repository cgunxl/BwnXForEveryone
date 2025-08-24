import fs from 'fs'
import path from 'path'

export interface BlogFrontmatter {
  title: string
  description: string
  date: string
  lang?: string
  slug?: string
  tags?: string[]
}

export interface BlogPostData {
  frontmatter: BlogFrontmatter
  content: string
  slug: string
  lang: string
}

const BLOG_DIR = path.join(process.cwd(), 'src', 'content', 'blog')

function parseFrontmatter(raw: string): { frontmatter: BlogFrontmatter; content: string } {
  const fmMatch = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/)
  if (!fmMatch) {
    return { frontmatter: { title: '', description: '', date: new Date().toISOString() }, content: raw }
  }
  const fmBody = fmMatch[1]
  const content = fmMatch[2]
  const frontmatter: Partial<BlogFrontmatter> = {}
  for (const line of fmBody.split(/\r?\n/)) {
    const m = line.match(/^([A-Za-z0-9_\-]+):\s*(.*)$/)
    if (m) {
      const key = m[1]
      let value: string | string[] = m[2]
      if (value.startsWith('[') && value.endsWith(']')) {
        try { value = JSON.parse(value) as string[] } catch { /* ignore */ }
      }
      if (typeof value === 'string') {
        ;(frontmatter as Record<string, string>)[key] = value.replace(/^"|"$/g, '')
      } else {
        ;(frontmatter as Record<string, string[]>)[key] = value
      }
    }
  }
  const fm: BlogFrontmatter = {
    title: (frontmatter.title as string) || '',
    description: (frontmatter.description as string) || '',
    date: (frontmatter.date as string) || new Date().toISOString(),
    lang: frontmatter.lang as string | undefined,
    slug: frontmatter.slug as string | undefined,
    tags: (frontmatter.tags as string[]) || undefined,
  }
  return { frontmatter: fm, content }
}

export function getAllBlogPosts(): BlogPostData[] {
  if (!fs.existsSync(BLOG_DIR)) return []
  const files = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith('.md') || f.endsWith('.mdx'))
  const posts: BlogPostData[] = []
  for (const filename of files) {
    const filePath = path.join(BLOG_DIR, filename)
    const raw = fs.readFileSync(filePath, 'utf8')
    const { frontmatter, content } = parseFrontmatter(raw)
    const name = filename.replace(/\.(md|mdx)$/i, '')
    // naming format: lang--slug.md or slug.md
    let lang = 'th'
    let slug = name
    const parts = name.split('--')
    if (parts.length === 2) {
      lang = parts[0]
      slug = parts[1]
    }
    posts.push({ frontmatter: { ...frontmatter, slug, lang }, content, slug, lang })
  }
  return posts.sort((a, b) => (a.frontmatter.date > b.frontmatter.date ? -1 : 1))
}

export function getBlogPostBySlug(slug: string, lang: string = 'th'): BlogPostData | null {
  const candidates = [
    path.join(BLOG_DIR, `${lang}--${slug}.md`),
    path.join(BLOG_DIR, `${slug}.md`),
    path.join(BLOG_DIR, `${lang}--${slug}.mdx`),
    path.join(BLOG_DIR, `${slug}.mdx`),
  ]
  for (const p of candidates) {
    if (fs.existsSync(p)) {
      const raw = fs.readFileSync(p, 'utf8')
      const { frontmatter, content } = parseFrontmatter(raw)
      return { frontmatter: { ...frontmatter, slug, lang }, content, slug, lang }
    }
  }
  return null
}

export function getAllSlugsByLang(lang: string): string[] {
  return getAllBlogPosts().filter(p => p.lang === lang).map(p => p.slug)
}

