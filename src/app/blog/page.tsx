import Link from 'next/link'
import { getAllBlogPosts } from '@/lib/content'

export const dynamic = 'force-static'

export const metadata = {
  title: 'บทความ SEO | BwnX',
  description: 'รวมบทความกลยุทธ์ SEO และการสร้างรายได้จากโฆษณา CPC สูง',
}

export default function BlogIndexPage() {
  const posts = getAllBlogPosts().filter(p => p.lang === 'th')
  return (
    <main className="mx-auto max-w-3xl px-6 py-24 text-white">
      <h1 className="text-3xl font-bold mb-6">บทความ</h1>
      <ul className="space-y-6">
        {posts.map(post => (
          <li key={`${post.lang}-${post.slug}`} className="border border-white/10 rounded-lg p-4 hover:bg-white/5">
            <Link href={`/blog/${post.slug}/`} className="text-xl font-semibold hover:underline">
              {post.frontmatter.title || post.slug}
            </Link>
            <p className="text-white/80 mt-1">{post.frontmatter.description}</p>
            <div className="text-xs text-white/60 mt-2">{new Date(post.frontmatter.date).toLocaleDateString('th-TH')}</div>
          </li>
        ))}
      </ul>
    </main>
  )
}

