import { MetadataRoute } from 'next'
import { getAllBlogPosts } from '@/lib/content'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = 'https://cgunxl.github.io'
  const basePath = '/BwnXForEveryone'
  const baseUrl = `${origin}${basePath}`

  const locales = ['th', 'en', 'ja', 'zh', 'es', 'pt', 'fr', 'de', 'ar'] as const

  const makeAlternates = (path: string) => {
    const languages: Record<string, string> = {}
    for (const locale of locales) {
      languages[locale] = `${baseUrl}/${locale}/${path}`.replace(/\/\/+/, '/')
    }
    return { languages }
  }

  const items: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
      alternates: makeAlternates(''),
    },
    {
      url: `${baseUrl}/dashboard/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
      alternates: makeAlternates('dashboard/'),
    },
  ]

  // Blog posts (Thai only for now)
  const posts = getAllBlogPosts().filter(p => p.lang === 'th')
  for (const post of posts) {
    items.push({
      url: `${baseUrl}/blog/${post.slug}/`,
      lastModified: new Date(post.frontmatter.date || new Date()),
      changeFrequency: 'weekly',
      priority: 0.7,
    })
  }

  return items
}