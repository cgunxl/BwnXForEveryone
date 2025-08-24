'use client'

import { useMemo, useState } from 'react'
import { getAllCategories } from '@/content/categories'
import { isLocale, type Locale, localizedPath } from '@/content/locales'
import { TrackedLink } from '@/components/TrackedLink'
import { usePathname } from 'next/navigation'

export function CategoriesList() {
	const pathname = usePathname()
	const detectedLocale: Locale = useMemo(() => {
		const seg = pathname?.split('/').filter(Boolean)[0]
		return (isLocale(seg) ? seg : 'th') as Locale
	}, [pathname])

	const categories = getAllCategories()
	const [open, setOpen] = useState<Record<string, boolean>>({})

	const toggle = (key: string) => setOpen((o) => ({ ...o, [key]: !o[key] }))

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
			{categories.map((cat) => (
				<section key={cat.key} className="rounded-xl border border-white/15 bg-white/5 p-4">
					<button
						onClick={() => toggle(cat.key)}
						className="w-full text-left flex items-center justify-between text-white mb-3"
						aria-expanded={!!open[cat.key]}
					>
						<span className="text-xl">{cat.emoji} {cat.label[detectedLocale] || cat.label.th || cat.label.en}</span>
						<svg className={`w-5 h-5 transition-transform ${open[cat.key] ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor" aria-hidden>
							<path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.08 1.04l-4.25 4.25a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd" />
						</svg>
					</button>
					{open[cat.key] && (
						<ul className="space-y-2">
							{cat.subcategories.map((sub) => (
								<li key={sub.key}>
									<TrackedLink
										href={localizedPath(detectedLocale, sub.key)}
										eventName={`menu_subcategory:${cat.key}:${sub.key}`}
										className="text-white/80 hover:text-white underline"
									>
										<span className="mr-1">{sub.emoji}</span>{sub.label[detectedLocale] || sub.label.th || sub.label.en}
									</TrackedLink>
								</li>
							))}
						</ul>
					)}
				</section>
			))}
		</div>
	)
}