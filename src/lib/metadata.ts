import { Metadata } from 'next'

const BASE_ORIGIN = 'https://cgunxl.github.io'
const BASE_PATH = '/BwnXForEveryone'
const BASE_URL = `${BASE_ORIGIN}${BASE_PATH}`

export function generateMetadata(): Metadata {
  return {
    title: 'BwnX Platform',
    description: 'BwnX Platform - Your innovative solution platform',
    keywords: 'BwnX, Platform, Innovation, Technology',
    authors: [{ name: 'BwnX Team' }],
    openGraph: {
      title: 'BwnX Platform',
      description: 'BwnX Platform - Your innovative solution platform',
      type: 'website',
      locale: 'th_TH',
      url: BASE_URL,
      siteName: 'BwnX Platform',
      images: [
        {
          url: `${BASE_PATH}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: 'BwnX Platform',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'BwnX Platform',
      description: 'BwnX Platform - Your innovative solution platform',
      images: [`${BASE_PATH}/og-image.jpg`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: BASE_URL,
      languages: {
        th: `${BASE_URL}/th/`,
        en: `${BASE_URL}/en/`,
        ja: `${BASE_URL}/ja/`,
        zh: `${BASE_URL}/zh/`,
        es: `${BASE_URL}/es/`,
        pt: `${BASE_URL}/pt/`,
        fr: `${BASE_URL}/fr/`,
        de: `${BASE_URL}/de/`,
        ar: `${BASE_URL}/ar/`,
      },
    },
  }
}