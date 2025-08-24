import { MetadataRoute } from 'next'
import { getAllSlugs } from '@/content/registry'

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

	const staticEntries: MetadataRoute.Sitemap = [
		{
			url: baseUrl,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 1,
			alternates: makeAlternates(''),
		},
		{
			url: `${baseUrl}/th/main/`,
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.9,
			alternates: makeAlternates('main/'),
		},
	]

	// expand locale content slugs
	const items = getAllSlugs() as Array<{ locale: string; slug: string }>
	for (const { slug } of items.filter((v, i, a) => a.findIndex(x => x.slug === v.slug) === i)) {
		staticEntries.push({
			url: `${baseUrl}/th/${slug}/`,
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.7,
			alternates: makeAlternates(`${slug}/`),
		})
	}

	return staticEntries
}