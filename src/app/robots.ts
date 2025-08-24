import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
	const base = 'https://cgunxl.github.io/BwnXForEveryone'
	return {
		rules: {
			userAgent: '*',
			allow: '/',
			disallow: ['/api/', '/admin/'],
		},
		sitemap: [
			`${base}/sitemap.xml`,
			`${base}/th/sitemap.xml`,
			`${base}/en/sitemap.xml`,
			`${base}/ja/sitemap.xml`,
			`${base}/zh/sitemap.xml`,
			`${base}/es/sitemap.xml`,
			`${base}/pt/sitemap.xml`,
			`${base}/fr/sitemap.xml`,
			`${base}/de/sitemap.xml`,
			`${base}/ar/sitemap.xml`,
		],
	}
}