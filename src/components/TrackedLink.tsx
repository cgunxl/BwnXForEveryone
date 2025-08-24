'use client'

import Link from 'next/link'
import { ReactNode } from 'react'

interface TrackedLinkProps {
  href: string
  eventName: string
  children: ReactNode
  className?: string
  onClick?: () => void
  locale?: string | false
  ariaLabel?: string
  prefetch?: boolean
  partner?: string
  linkId?: string
}

export function TrackedLink({ href, eventName, children, className, onClick, locale, ariaLabel, prefetch, partner, linkId }: TrackedLinkProps) {
  const handleClick = () => {
    // Track click event with GA4
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click', {
        event_category: 'engagement',
        event_label: eventName,
        event_action: 'click',
        page_path: window.location.pathname,
        page_title: document.title,
        page_location: window.location.href,
        link_url: href,
        link_text: typeof children === 'string' ? children : 'link',
        value: 1,
        // Custom parameters
        custom_parameter_1: eventName,
        custom_parameter_2: 'user_interaction'
      })
      
      if (eventName.startsWith('click_out')) {
        window.gtag('event', 'click_out', {
          partner: partner || 'unknown',
          link_id: linkId || href,
          country: (navigator.language || 'th-TH').split('-').pop(),
        })
      }
      
      // Track user engagement
      window.gtag('event', 'user_engagement', {
        event_category: 'engagement',
        event_label: eventName,
        engagement_time_msec: 1000,
        session_id: sessionStorage.getItem('ga_session_id') || 'unknown'
      })
    }
    
    // Call custom onClick if provided
    if (onClick) {
      onClick()
    }
  }

  const extraProps: Record<string, never> = {}
  if (eventName.startsWith('click_out')) {
    ;(extraProps as unknown as Record<string, string>)['data-partner'] = partner || 'unknown'
    ;(extraProps as unknown as Record<string, string>)['data-link-id'] = linkId || href
  }

  return (
    <Link href={href} className={className} onClick={handleClick} locale={locale} aria-label={ariaLabel} prefetch={prefetch} {...extraProps}>
      {children}
    </Link>
  )
}