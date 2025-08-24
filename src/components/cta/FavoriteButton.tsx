'use client'

import { useState } from 'react'

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void
  }
}

interface FavoriteButtonProps {
  contentId: string
}

export function FavoriteButton({ contentId }: FavoriteButtonProps) {
  const [active, setActive] = useState(false)

  const toggle = () => {
    setActive((v) => !v)
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'favorite_add', {
        content_id: contentId,
        status: !active ? 'added' : 'removed',
      })
    }
  }

  return (
    <button
      onClick={toggle}
      aria-pressed={active}
      className={`px-4 py-2 rounded-lg border text-white transition-colors ${
        active
          ? 'bg-emerald-500/20 border-emerald-400'
          : 'bg-white/10 border-white/20 hover:bg-white/15'
      }`}
    >
      {active ? 'บันทึกแล้ว' : 'บันทึกไว้ดูภายหลัง'}
    </button>
  )
}

