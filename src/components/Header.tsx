'use client'

import { TrackedLink } from './TrackedLink'
import LanguageSelector from './LanguageSelector'

interface HeaderProps {
  onMenuToggle: () => void
}

export function Header({ onMenuToggle }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/20">
      {/* Top Tab with multiple lines */}
      <div className="h-2 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
      <div className="h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      <div className="h-0.5 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      {/* Main header content */}
      <div className="relative flex items-center px-6 py-3">
        {/* Left: Burger button on small screens */}
        <button
          onClick={onMenuToggle}
          className="md:hidden group relative p-2 rounded-xl border border-black/50 bg-black/40 hover:bg-black/60 transition-all duration-200 hover:scale-105"
          aria-label="เปิดเมนู"
        >
          <div className="flex flex-col space-y-1.5">
            <div className="w-5 h-0.5 bg-white transition-all duration-200 group-hover:bg-white/90"></div>
            <div className="w-5 h-0.5 bg-white transition-all duration-200 group-hover:bg-white/90"></div>
            <div className="w-5 h-0.5 bg-white transition-all duration-200 group-hover:bg-white/90"></div>
          </div>
          <div className="absolute inset-0 bg-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
        </button>

        {/* Center: Nav links (80% brightness) */}
        <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-6 text-white/80">
          <TrackedLink href="/" eventName="nav_home_click" className="hover:text-white transition-colors">หน้าหลัก</TrackedLink>
          <TrackedLink href="/products" eventName="nav_products_click" className="hover:text-white transition-colors">สินค้า</TrackedLink>
          <TrackedLink href="/contact" eventName="nav_contact_click" className="hover:text-white transition-colors">ติดต่อ</TrackedLink>
        </nav>

        {/* Right: Search button + language selector */}
        <div className="ml-auto flex items-center gap-3">
          <button
            type="button"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black font-medium hover:bg-white/90 transition-colors"
            aria-label="ค้นหา"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M10 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16z" />
            </svg>
            <span>ค้นหา</span>
          </button>
          <LanguageSelector />
        </div>
      </div>
    </header>
  )
}