import { getAllCategories } from '@/content/categories'
import { isLocale, type Locale, localizedPath } from '@/content/locales'
import { TrackedLink } from '@/components/TrackedLink'

export const dynamic = 'force-static'
export const revalidate = 300

interface Props { params: { locale: string } }

export default function LocaleMainPage({ params }: Props) {
	const locale = (isLocale(params.locale) ? params.locale : 'th') as Locale
	const cats = getAllCategories()

	return (
		<main className="min-h-screen bg-black pt-24 px-6">
			<div className="max-w-5xl mx-auto">
				<h1 className="text-3xl md:text-4xl font-semibold text-white mb-6">หมวดหมู่</h1>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{cats.map(cat => (
						<section key={cat.key} className="rounded-xl border border-white/15 bg-white/5 p-4">
							<h2 className="text-xl text-white mb-3">{cat.emoji} {cat.label[locale] || cat.label.th || cat.label.en}</h2>
							<ul className="space-y-2">
								{cat.subcategories.map(sub => (
									<li key={sub.key}>
										<TrackedLink 
											href={localizedPath(locale, sub.key)} 
											eventName={`nav_subcategory:${cat.key}:${sub.key}`}
											className="text-white/80 hover:text-white underline"
										>
											<span className="mr-1">{sub.emoji}</span>{sub.label[locale] || sub.label.th || sub.label.en}
										</TrackedLink>
									</li>
								))}
							</ul>
						</section>
					))}
				</div>
			</div>
		</main>
	)
}