import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { GoogleAnalytics } from '@/components/GoogleAnalytics'
import { PageViewTracker } from '@/components/PageViewTracker'
import { PostHogProvider } from '@/components/PostHogProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BwnX Platform',
  description: 'BwnX Platform - Your innovative solution platform',
  keywords: 'BwnX, Platform, Innovation, Technology',
  authors: [{ name: 'BwnX Team' }],
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
      </head>
      <body className={inter.className}>
        <PageViewTracker />
        <PostHogProvider />
        {children}
      </body>
    </html>
  )
}
