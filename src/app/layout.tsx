import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { GoogleAnalytics } from '@/components/GoogleAnalytics'
import { PageViewTracker } from '@/components/PageViewTracker'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BwnX Platform',
  description: 'BwnX Platform - Your innovative solution platform',
  keywords: 'BwnX, Platform, Innovation, Technology',
  authors: [{ name: 'BwnX Team' }],
  alternates: {
    canonical: 'https://cgunxl.github.io/BwnXForEveryone/',
    languages: {
      th: 'https://cgunxl.github.io/BwnXForEveryone/th/',
      en: 'https://cgunxl.github.io/BwnXForEveryone/en/',
      ja: 'https://cgunxl.github.io/BwnXForEveryone/ja/',
      zh: 'https://cgunxl.github.io/BwnXForEveryone/zh/',
      es: 'https://cgunxl.github.io/BwnXForEveryone/es/',
      pt: 'https://cgunxl.github.io/BwnXForEveryone/pt/',
      fr: 'https://cgunxl.github.io/BwnXForEveryone/fr/',
      de: 'https://cgunxl.github.io/BwnXForEveryone/de/',
      ar: 'https://cgunxl.github.io/BwnXForEveryone/ar/',
    },
  },
  openGraph: {
    title: 'BwnX Platform',
    description: 'BwnX Platform - Your innovative solution platform',
    type: 'website',
    locale: 'th_TH',
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
  metadataBase: new URL('https://cgunxl.github.io/BwnXForEveryone'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="th">
      <head>
        <GoogleAnalytics />
        <script type="application/ld+json" suppressHydrationWarning>
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'BwnX Platform',
            url: 'https://cgunxl.github.io/BwnXForEveryone/',
            inLanguage: ['th','en','ja','zh','es','pt','fr','de','ar'],
            potentialAction: {
              '@type': 'SearchAction',
              target: 'https://cgunxl.github.io/BwnXForEveryone/search?q={search_term_string}',
              'query-input': 'required name=search_term_string'
            }
          })}
        </script>
      </head>
      <body className={inter.className}>
        <PageViewTracker />
        {children}
      </body>
    </html>
  )
}
