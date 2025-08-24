import type { Metadata } from 'next'
import { isLocale, type Locale, localizedPath } from '@/content/locales'
import { getCategoryByKey, getSubcategoryLabel } from '@/content/categories'
import type { CategoryKey } from '@/content/registry'
import { TrackedLink } from '@/components/TrackedLink'

export const dynamic = 'force-static'
export const revalidate = 300

interface Props { params: { locale: string; category: CategoryKey } }

export async function generateStaticParams() {
	const cats: CategoryKey[] = ['apps','channel','fanpage','product','news','advice','location','make-money','movies','education','food','real-estate','jobs-abroad']
	const locales: Locale[] = ['th','en','ja','zh','es','pt','fr','de','ar']
	return cats.flatMap((c) => locales.map((l) => ({ locale: l, category: c })))
}

export function generateMetadata({ params }: Props): Metadata {
	const locale = (isLocale(params.locale) ? params.locale : 'th') as Locale
	const cat = getCategoryByKey(params.category)
	const title = cat ? `${cat.emoji} ${(cat.label[locale] || cat.label.th || cat.label.en)}` : 'Category'
	return {
		title,
		alternates: {
			languages: {
				th: localizedPath('th', 'c', params.category),
				en: localizedPath('en', 'c', params.category),
				ja: localizedPath('ja', 'c', params.category),
				zh: localizedPath('zh', 'c', params.category),
				es: localizedPath('es', 'c', params.category),
				pt: localizedPath('pt', 'c', params.category),
				fr: localizedPath('fr', 'c', params.category),
				de: localizedPath('de', 'c', params.category),
				ar: localizedPath('ar', 'c', params.category),
			},
		},
	}
}

export default function CategoryPage({ params }: Props) {
	const locale = (isLocale(params.locale) ? params.locale : 'th') as Locale
	const cat = getCategoryByKey(params.category)
	if (!cat) return null
	return (
		<main className="min-h-screen bg-black pt-24 px-6">
			<div className="max-w-4xl mx-auto">
				<h1 className="text-3xl md:text-4xl font-semibold text-white mb-6">{cat.emoji} {cat.label[locale] || cat.label.th || cat.label.en}</h1>
				<ul className="space-y-3">
					{cat.subcategories.map((sub) => (
						<li key={sub.key}>
							<TrackedLink
								href={localizedPath(locale, sub.key)}
								eventName={`category_subcategory:${params.category}:${sub.key}`}
								className="text-white/80 hover:text-white underline"
							>
								<span className="mr-1">{sub.emoji}</span>{getSubcategoryLabel(sub.key, params.category, locale)}
							</TrackedLink>
						</li>
					))}
				</ul>
			</div>
		</main>
	)
}