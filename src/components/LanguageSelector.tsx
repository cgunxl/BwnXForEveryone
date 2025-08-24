"use client"

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

interface LangDef {
  code: string
  label: string
  flag: string
  href: string
}

const LANGS: LangDef[] = [
  { code: 'en', label: 'English', flag: 'https://flagcdn.com/w20/gb.png', href: '/en/' },
  { code: 'es', label: 'Español', flag: 'https://flagcdn.com/w20/es.png', href: '/es/' },
  { code: 'pt', label: 'Português', flag: 'https://flagcdn.com/w20/pt.png', href: '/pt/' },
  { code: 'de', label: 'Deutsch', flag: 'https://flagcdn.com/w20/de.png', href: '/de/' },
  { code: 'fr', label: 'Français', flag: 'https://flagcdn.com/w20/fr.png', href: '/fr/' },
  { code: 'ja', label: '日本語', flag: 'https://flagcdn.com/w20/jp.png', href: '/ja/' },
  { code: 'ko', label: '한국어', flag: 'https://flagcdn.com/w20/kr.png', href: '/ko/' },
  { code: 'zh', label: '中文', flag: 'https://flagcdn.com/w20/cn.png', href: '/zh/' },
  { code: 'ar', label: 'العربية', flag: 'https://flagcdn.com/w20/sa.png', href: '/ar/' },
  { code: 'th', label: 'ไทย', flag: 'https://flagcdn.com/w20/th.png', href: '/th/' },
]

export default function LanguageSelector() {
  const [open, setOpen] = useState(false)
  const [current, setCurrent] = useState('th')
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const lang = document.documentElement.lang?.toLowerCase() || 'th'
    setCurrent(lang)
  }, [])

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (!containerRef.current) return
      if (!containerRef.current.contains(e.target as Node)) setOpen(false)
    }
    function handleEsc(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('click', handleClick)
    document.addEventListener('keydown', handleEsc)
    return () => {
      document.removeEventListener('click', handleClick)
      document.removeEventListener('keydown', handleEsc)
    }
  }, [])

  const currentLang = LANGS.find(l => l.code === current) || LANGS[9]

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen(v => !v)}
        className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/10 hover:bg-white/15 transition-colors border border-white/10"
      >
        <img src={currentLang.flag} alt={current.toUpperCase()} className="w-5 h-3.5 rounded-[2px]" />
        <span className="text-white text-sm font-medium">{current.toUpperCase()}</span>
        <svg width="12" height="8" viewBox="0 0 12 8" className="text-white">
          <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </button>

      {open && (
        <div role="menu" aria-label="Language menu" className="absolute right-0 mt-2 w-56 rounded-xl border border-white/10 bg-black/95 backdrop-blur-md shadow-xl p-1">
          {LANGS.map(lang => (
            <Link
              key={lang.code}
              href={lang.href}
              role="menuitem"
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-white/90 hover:text-white hover:bg-white/10"
              onClick={() => setOpen(false)}
            >
              <img src={lang.flag} alt={lang.code.toUpperCase()} className="w-5 h-3.5 rounded-[2px]" />
              <span className="truncate">{lang.label}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}