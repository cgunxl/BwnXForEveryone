import { Locale, locales } from './locales'

export type CategoryKey =
  | 'apps'
  | 'channel'
  | 'fanpage'
  | 'product'
  | 'news'
  | 'advice'
  | 'location'
  | 'make-money'
  | 'movies'
  | 'education'
  | 'food'
  | 'real-estate'
  | 'jobs-abroad'
  | 'concerts'
  | 'finance-events'

export interface ContentItem {
  slug: string
  title: string
  summary: string
  category: CategoryKey
  locale: Locale
}

// Minimal seed content to enable SSG across locales
const seeds: Array<Omit<ContentItem, 'locale'>> = [
  { slug: 'smart-travel-booking', title: 'Smart Travel & Booking', summary: 'จองตั๋ว เที่ยวแบบฉลาด เปรียบเทียบราคาง่าย', category: 'apps' },
  { slug: 'career-freelance-hub', title: 'Career & Freelance Hub', summary: 'รวมแพลตฟอร์มหางานและฟรีแลนซ์', category: 'apps' },
  { slug: 'ai-tools-finance-apps', title: 'AI Tools & Finance Apps', summary: 'รวมเครื่องมือ AI และแอปการเงินยอดนิยม', category: 'apps' },
  { slug: 'investment-trading-channels', title: 'Investment & Trading Channels', summary: 'ติดตามช่องลงทุนและเทรดที่เชื่อถือได้', category: 'channel' },
  { slug: 'affiliate-passive-income', title: 'Affiliate & Passive Income', summary: 'แนวทางทำรายได้แบบยั่งยืน', category: 'make-money' },
  { slug: 'vpn-safe-web', title: 'Safe Web & VPN Solutions', summary: 'ปลอดภัยและเป็นส่วนตัวบนโลกออนไลน์', category: 'apps' },
]

export const contentRegistry: ContentItem[] = locales.flatMap((locale) =>
  seeds.map((seed) => ({ ...seed, locale })),
)

export function getLocales(): Locale[] {
  return [...locales]
}

export function getAllByLocale(locale: Locale): ContentItem[] {
  return contentRegistry.filter((c) => c.locale === locale)
}

export function getItem(locale: Locale, slug: string): ContentItem | undefined {
  return contentRegistry.find((c) => c.locale === locale && c.slug === slug)
}

export function getAllSlugs(): Array<{ locale: Locale; slug: string; category: CategoryKey }> {
  return contentRegistry.map(({ locale, slug, category }) => ({ locale, slug, category }))
}

