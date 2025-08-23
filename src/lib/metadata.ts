import { Metadata } from 'next'

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
      url: 'https://bwnx-platform.com',
      siteName: 'BwnX Platform',
      images: [
        {
          url: '/og-image.jpg',
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
      images: ['/og-image.jpg'],
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
      canonical: 'https://bwnx-platform.com',
    },
  }
}