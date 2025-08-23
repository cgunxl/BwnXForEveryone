'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

export function PageViewTracker() {
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX', {
        page_path: pathname,
        page_title: document.title,
        page_location: window.location.href,
      })
    }
  }, [pathname])

  return null
}