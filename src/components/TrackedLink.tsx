'use client'

import Link from 'next/link'
import { ReactNode, MouseEvent } from 'react'

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
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
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
        custom_parameter_2: 'user_interaction',
        transport_type: 'beacon',
      })
      
      if (eventName.startsWith('click_out')) {
        // Send click_out with beacon-friendly transport
        const payload = {
          event: 'click_out',
          partner: partner || 'unknown',
          link_id: linkId || href,
          country: (navigator.language || 'th-TH').split('-').pop(),
          transport_type: 'beacon',
        }
        window.gtag('event', 'click_out', payload)
      }
      
      // Track user engagement
      window.gtag('event', 'user_engagement', {
        event_category: 'engagement',
        event_label: eventName,
        engagement_time_msec: 1000,
        session_id: sessionStorage.getItem('ga_session_id') || 'unknown',
        transport_type: 'beacon',
      })
    }
    
    // Call custom onClick if provided
    if (onClick) {
      onClick()
    }

    // Force hard reload navigation after a very short delay to allow beacon dispatch
    e.preventDefault()
    setTimeout(() => {
      window.location.assign(href)
    }, 80)
  }

  const extraProps: Record<string, never> = {}
  if (eventName.startsWith('click_out')) {
    ;(extraProps as unknown as Record<string, string>)['data-partner'] = partner || 'unknown'
    ;(extraProps as unknown as Record<string, string>)['data-link-id'] = linkId || href
  }

  return (
    <Link href={href} className={className} onClick={handleClick} locale={locale} aria-label={ariaLabel} prefetch={false} {...extraProps}>
      {children}
    </Link>
  )
}