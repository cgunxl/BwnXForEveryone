import type { Metadata } from 'next'
import { isLocale, type Locale, localizedPath } from '@/content/locales'
import { CategoriesList } from '@/components/CategoriesList'

export const dynamic = 'force-static'
export const revalidate = 300

interface Props { params: { locale: string } }

export function generateMetadata({ params }: Props): Metadata {
	const locale = (isLocale(params.locale) ? params.locale : 'th') as Locale
	return {
		title: locale === 'th' ? 'หมวดหมู่' : 'Categories',
		alternates: {
			languages: {
				th: localizedPath('th', 'main'),
				en: localizedPath('en', 'main'),
				ja: localizedPath('ja', 'main'),
				zh: localizedPath('zh', 'main'),
				es: localizedPath('es', 'main'),
				pt: localizedPath('pt', 'main'),
				fr: localizedPath('fr', 'main'),
				de: localizedPath('de', 'main'),
				ar: localizedPath('ar', 'main'),
			},
		},
	}
}

export default function MainPage({ params }: Props) {
	const locale = (isLocale(params.locale) ? params.locale : 'th') as Locale
	return (
		<main className="min-h-screen bg-black pt-24 px-6">
			<div className="max-w-5xl mx-auto">
				<h1 className="text-3xl md:text-4xl font-semibold text-white mb-6">{locale === 'th' ? 'หมวดหมู่' : 'Categories'}</h1>
				<CategoriesList />
			</div>
		</main>
	)
}