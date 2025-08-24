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
  | 'law'
  | 'insurance'
  | 'finance'
  | 'medical-specialty'

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
  // High CPC new seeds
  { slug: 'best-dui-lawyers', title: 'DUIs: หา/เปรียบเทียบทนาย', summary: 'ทรัพยากรและลิงก์ติดต่อทนายความ DUI', category: 'law' },
  { slug: 'mesothelioma-lawsuits', title: 'Mesothelioma: สิทธิ์ฟ้องร้อง', summary: 'ข้อมูลและทรัพยากรสำหรับผู้ป่วยและครอบครัว', category: 'law' },
  { slug: 'compare-auto-insurance', title: 'เปรียบเทียบประกันรถ', summary: 'สำรวจแผนและราคาแบบรวดเร็ว', category: 'insurance' },
  { slug: 'best-credit-cards', title: 'บัตรเครดิตน่าสนใจ', summary: 'สิทธิประโยชน์ โบนัส และค่าธรรมเนียม', category: 'finance' },
  { slug: 'mortgage-rates-guide', title: 'ดอกเบี้ยบ้านล่าสุด', summary: 'เปรียบเทียบเรตสินเชื่อบ้าน', category: 'finance' },
  { slug: 'cosmetic-surgery-clinics', title: 'คลินิกศัลยกรรมแนะนำ', summary: 'สำรวจรีวิวและตัวเลือกชั้นนำ', category: 'medical-specialty' },
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

