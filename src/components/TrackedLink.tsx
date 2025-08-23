'use client'

import Link from 'next/link'

interface TrackedLinkProps {
  href: string
  eventName: string
  children: React.ReactNode
  className?: string
  [key: string]: unknown
}

export function TrackedLink({ href, eventName, children, className, ...props }: TrackedLinkProps) {
  const trackClick = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click', {
        event_category: 'engagement',
        event_label: eventName,
        value: 1
      })
    }
  }

  const handleClick = () => {
    trackClick()
    // Let the default Link behavior handle navigation
  }

  return (
    <Link 
      href={href} 
      className={className} 
      onClick={handleClick}
      {...props}
    >
      {children}
    </Link>
  )
}