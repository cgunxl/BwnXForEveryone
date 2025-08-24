'use client'

import { useEffect, useState } from 'react'

export function NavigationOverlay() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleBeforeUnload = () => {
      setVisible(true)
    }

    const handleClick = (e: Event) => {
      const target = e.target as HTMLElement | null
      if (!target) return
      const anchor = target.closest('a') as HTMLAnchorElement | null
      if (!anchor) return
      if (anchor.target === '_blank') return
      if (anchor.hasAttribute('download')) return
      if (anchor.getAttribute('href')?.startsWith('#')) return
      setVisible(true)
    }

    window.addEventListener('beforeunload', handleBeforeUnload)
    document.addEventListener('click', handleClick, true)
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload)
      document.removeEventListener('click', handleClick, true)
    }
  }, [])

  if (!visible) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/30 backdrop-blur-sm">
      <div className="flex items-center gap-3 rounded-xl border border-white/20 bg-black/70 px-4 py-3">
        <div className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" aria-hidden />
        <span className="text-sm text-white/80">กำลังไปยังหน้าใหม่…</span>
      </div>
    </div>
  )
}

export default NavigationOverlay

