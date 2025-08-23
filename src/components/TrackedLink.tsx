'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

interface TrackedLinkProps {
  href: string
  eventName: string
  children: React.ReactNode
  className?: string
  [key: string]: any
}

export function TrackedLink({ href, eventName, children, className, ...props }: TrackedLinkProps) {
  const router = useRouter()

  const trackClick = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'click', {
        event_category: 'engagement',
        event_label: eventName,
        value: 1
      })
    }
  }

  const handleClick = (e: React.MouseEvent) => {
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