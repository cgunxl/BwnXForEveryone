import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getAllSlugs, getItem } from '@/content/registry'
import { isLocale, type Locale } from '@/content/locales'
import { CompareCTA } from '@/components/cta/CompareCTA'
import { FavoriteButton } from '@/components/cta/FavoriteButton'
import { TrackedLink } from '@/components/TrackedLink'

export const revalidate = 300 // ISR: 5 minutes
export const dynamic = 'force-static'

type Props = { params: { locale: string; slug: string } }

export async function generateStaticParams() {
  return getAllSlugs().map(({ locale, slug }) => ({ locale, slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = (isLocale(params.locale) ? params.locale : 'th') as Locale
  const item = getItem(locale, params.slug)
  if (!item) return {}
  return {
    title: item.title,
    description: item.summary,
    alternates: {
      languages: {
        th: `/th/${item.slug}/`,
        en: `/en/${item.slug}/`,
        ja: `/ja/${item.slug}/`,
        zh: `/zh/${item.slug}/`,
        es: `/es/${item.slug}/`,
        pt: `/pt/${item.slug}/`,
        fr: `/fr/${item.slug}/`,
        de: `/de/${item.slug}/`,
        ar: `/ar/${item.slug}/`,
      },
    },
  }
}

export default async function ContentPage({ params }: Props) {
  const locale = (isLocale(params.locale) ? params.locale : 'th') as Locale
  const item = getItem(locale, params.slug)
  if (!item) return notFound()

  return (
    <main className="min-h-screen bg-black pt-28 px-6">
      <article className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-semibold text-white mb-3">{item.title}</h1>
        <p className="text-white/70 mb-6">{item.summary}</p>

        <div className="flex items-center gap-3 mb-8">
          <CompareCTA locale={locale} slug={item.slug} />
          <FavoriteButton contentId={`${locale}:${item.slug}`} />
        </div>

        <div className="space-y-4 text-white/80 leading-7">
          <p>
            หน้านี้เป็นตัวอย่างคอนเทนต์สำหรับหลายภาษาและรองรับการทำ SEO ที่ดีด้วยโครงสร้าง URL แบบ
            <code className="mx-1">/{`{locale}`}/{`{slug}`}/</code> พร้อม <code className="mx-1">hreflang</code> และ
            การทำ ISR เพื่ออัปเดตข้อมูลอัตโนมัติ
          </p>
          <p>
            ลองคลิกออกไปพาร์ทเนอร์ตัวอย่างได้ที่
            <TrackedLink
              className="underline ml-1"
              href={`https://example.com/?ref=bwnx&link_id=${item.slug}`}
              eventName={`click_out:${item.slug}`}
            >
              ลิงก์พาร์ทเนอร์
            </TrackedLink>
          </p>
        </div>
      </article>
    </main>
  )
}

