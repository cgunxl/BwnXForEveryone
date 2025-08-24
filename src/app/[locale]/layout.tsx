import type { Metadata } from 'next'
import { ClientWrapper } from '@/components/ClientWrapper'
import { isLocale } from '@/content/locales'

export const dynamic = 'force-static'

type Props = { children: React.ReactNode; params: { locale: string } }

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

export function generateMetadata({ params }: Props): Metadata {
  const locale = isLocale(params.locale) ? params.locale : 'th'
  return {
    title: {
      default: 'BwnX Platform',
      template: '%s | BwnX',
    },
    metadataBase: new URL('https://cgunxl.github.io/BwnXForEveryone'),
    alternates: {
      canonical: `https://cgunxl.github.io/BwnXForEveryone/${locale}/`,
      languages: {
        th: `/th/`,
        en: `/en/`,
        ja: `/ja/`,
        zh: `/zh/`,
        es: `/es/`,
        pt: `/pt/`,
        fr: `/fr/`,
        de: `/de/`,
        ar: `/ar/`,
        'x-default': `/en/`,
      },
    },
    openGraph: {
      type: 'website',
      locale: locale === 'th' ? 'th_TH' : locale + '_' + locale.toUpperCase(),
      url: `https://cgunxl.github.io/BwnXForEveryone/${locale}/`,
      siteName: 'BwnX Platform',
    },
    other: {
      locale,
    },
  }
}

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  // We do not need to await params here for rendering wrapper
  return (
    <>
      <ClientWrapper />
      {children}
    </>
  )
}

