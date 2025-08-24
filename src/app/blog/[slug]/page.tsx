import { notFound } from 'next/navigation'
import { getAllSlugsByLang, getBlogPostBySlug } from '@/lib/content'

export const dynamic = 'force-static'

export function generateStaticParams() {
  const slugs = getAllSlugsByLang('th')
  return slugs.map(slug => ({ slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug, 'th')
  if (!post) return { title: 'ไม่พบบทความ' }
  return {
    title: `${post.frontmatter.title} | BwnX`,
    description: post.frontmatter.description,
    alternates: {
      canonical: `/blog/${post.slug}/`,
    },
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      type: 'article',
    },
  }
}

function renderMarkdown(md: string) {
  // Minimal MD renderer for strong, headings, lists, paragraphs
  const lines = md.split(/\r?\n/)
  const html: string[] = []
  for (const line of lines) {
    if (/^#\s+/.test(line)) {
      html.push(`<h1>${line.replace(/^#\s+/, '')}</h1>`) ; continue
    }
    if (/^##\s+/.test(line)) {
      html.push(`<h2>${line.replace(/^##\s+/, '')}</h2>`) ; continue
    }
    if (/^\*\s+/.test(line)) {
      html.push(`<li>${line.replace(/^\*\s+/, '')}</li>`) ; continue
    }
    if (line.trim() === '') { html.push('') ; continue }
    const text = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1<\/strong>')
    html.push(`<p>${text}</p>`)
  }
  // wrap <li> into <ul>
  const combined = html
    .join('\n')
    .replace(/(?:^|\n)(<li>[\s\S]*?<\/li>(?:\n<li>[\s\S]*?<\/li>)*)/g, (m) => `\n<ul>\n${m}\n<\/ul>`)
  return combined
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug, 'th')
  if (!post) return notFound()
  const html = renderMarkdown(post.content)
  return (
    <main className="mx-auto max-w-3xl px-6 py-24 prose prose-invert prose-headings:scroll-mt-24">
      <article>
        <h1>{post.frontmatter.title}</h1>
        {post.frontmatter.description && (
          <p className="lead text-white/80">{post.frontmatter.description}</p>
        )}
        <div className="text-xs text-white/60 mb-8">เผยแพร่ {new Date(post.frontmatter.date).toLocaleDateString('th-TH')}</div>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    </main>
  )
}

