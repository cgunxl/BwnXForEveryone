import { MetadataRoute } from 'next'
import { isLocale, type Locale } from '@/content/locales'
import { getAllCategories } from '@/content/categories'
import { getAllSlugs } from '@/content/registry'

export const dynamic = 'force-static'

export function generateStaticParams() {
	return [
		{ locale: 'th' },
		{ locale: 'en' },
		{ locale: 'ja' },
		{ locale: 'zh' },
		{ locale: 'es' },
		{ locale: 'pt' },
		{ locale: 'fr' },
		{ locale: 'de' },
		{ locale: 'ar' },
	]
}

export default function sitemap(context?: { params?: { locale?: string } }): MetadataRoute.Sitemap {
	const loc = context?.params?.locale
	const locale = (isLocale(loc) ? loc : 'th') as Locale
	const origin = 'https://cgunxl.github.io'
	const basePath = '/BwnXForEveryone'
	const baseUrl = `${origin}${basePath}`

	const locales = ['th', 'en', 'ja', 'zh', 'es', 'pt', 'fr', 'de', 'ar'] as const
	const makeAlternates = (path: string) => {
		const languages: Record<string, string> = {}
		for (const l of locales) {
			languages[l] = `${baseUrl}/${l}/${path}`.replace(/\/\/+/, '/')
		}
		return { languages }
	}

	const entries: MetadataRoute.Sitemap = []

	// Main listing
	entries.push({
		url: `${baseUrl}/${locale}/main/`,
		lastModified: new Date(),
		changeFrequency: 'weekly',
		priority: 0.9,
		alternates: makeAlternates('main/'),
	})

	// Category index pages
	const cats = getAllCategories()
	for (const cat of cats) {
		entries.push({
			url: `${baseUrl}/${locale}/c/${cat.key}/`,
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.8,
			alternates: makeAlternates(`c/${cat.key}/`),
		})
	}

	// Content (slug) pages
	const items = getAllSlugs().filter((s) => s.locale === locale)
	for (const { slug } of items) {
		entries.push({
			url: `${baseUrl}/${locale}/${slug}/`,
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.7,
			alternates: makeAlternates(`${slug}/`),
		})
	}

	return entries
}