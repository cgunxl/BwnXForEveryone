'use client'

import { TrackedLink } from '@/components/TrackedLink'
import type { Locale } from '@/content/locales'

interface CompareCTAProps {
  locale: Locale
  slug: string
}

export function CompareCTA({ locale, slug }: CompareCTAProps) {
  const href = `/${locale}/compare/${slug}/`
  return (
    <TrackedLink
      href={href}
      eventName={`compare_click:${slug}`}
      className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white hover:bg-white/15"
    >
      เปรียบเทียบแนะนำ
    </TrackedLink>
  )
}

