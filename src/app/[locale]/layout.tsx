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
    alternates: {
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
      },
    },
    other: {
      locale,
    },
  }
}

export default function LocaleLayout({ children }: Props) {
  return (
    <>
      <ClientWrapper />
      {children}
    </>
  )
}

