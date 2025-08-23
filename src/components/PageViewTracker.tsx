'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void
  }
}

export function PageViewTracker() {
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag) {
      // Track page view for SPA navigation
      window.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX', {
        page_path: pathname,
        page_title: document.title,
        page_location: window.location.href,
        page_category: getPageCategory(pathname)
      })
      
      // Send custom page_view event
      window.gtag('event', 'page_view', {
        page_path: pathname,
        page_title: document.title,
        page_location: window.location.href,
        page_category: getPageCategory(pathname),
        event_category: 'navigation',
        event_label: pathname
      })
      
      // Track user session
      const sessionId = getSessionId()
      window.gtag('set', 'user_id', sessionId)
      
      // Track user properties
      window.gtag('set', 'user_properties', {
        user_type: 'visitor',
        page_views: getPageViewCount(),
        last_visit: new Date().toISOString()
      })
    }
  }, [pathname])

  // Helper function to get page category
  const getPageCategory = (path: string) => {
    if (path === '/') return 'home'
    if (path.startsWith('/dashboard')) return 'dashboard'
    if (path.startsWith('/analytics')) return 'analytics'
    if (path.startsWith('/settings')) return 'settings'
    return 'other'
  }

  // Helper function to get or create session ID
  const getSessionId = () => {
    let sessionId = sessionStorage.getItem('ga_session_id')
    if (!sessionId) {
      sessionId = 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9)
      sessionStorage.setItem('ga_session_id', sessionId)
    }
    return sessionId
  }

  // Helper function to get page view count
  const getPageViewCount = () => {
    const count = parseInt(sessionStorage.getItem('ga_page_views') || '0')
    const newCount = count + 1
    sessionStorage.setItem('ga_page_views', newCount.toString())
    return newCount
  }

  return null
}