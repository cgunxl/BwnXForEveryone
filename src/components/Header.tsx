'use client'

import { TrackedLink } from './TrackedLink'

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
        {/* Left: Burger button on all screens */}
        <button
          onClick={onMenuToggle}
          className="group relative p-2 rounded-xl border border-black/50 bg-black/40 hover:bg-black/60 transition-all duration-200 hover:scale-105"
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
          <TrackedLink href="/Contact" eventName="nav_contact_click" className="hover:text-white transition-colors">ติดต่อ</TrackedLink>
          <TrackedLink href="/blog/" eventName="nav_blog_click" className="hover:text-white transition-colors">บทความ</TrackedLink>
        </nav>

        {/* Center wide search bar for md+ screens */}
        <div className="hidden md:flex flex-1 justify-center px-6">
          <div className="relative w-full max-w-2xl">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M10 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16z" />
            </svg>
            <input
              type="text"
              placeholder="ค้นหา"
              className="w-full h-10 pl-10 pr-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/60 outline-none focus:border-white/40"
            />
          </div>
        </div>

        {/* Right: Language switcher */}
        <div className="ml-auto flex items-center gap-3">
          <div className="hidden md:flex items-center gap-2 text-white/80">
            <TrackedLink href="/th/" eventName="lang_th_click" className="hover:text-white text-xs">TH</TrackedLink>
            <TrackedLink href="/en/" eventName="lang_en_click" className="hover:text-white text-xs">EN</TrackedLink>
            <TrackedLink href="/ja/" eventName="lang_ja_click" className="hover:text-white text-xs">JA</TrackedLink>
            <TrackedLink href="/zh/" eventName="lang_zh_click" className="hover:text-white text-xs">ZH</TrackedLink>
            <TrackedLink href="/es/" eventName="lang_es_click" className="hover:text-white text-xs">ES</TrackedLink>
            <TrackedLink href="/pt/" eventName="lang_pt_click" className="hover:text-white text-xs">PT</TrackedLink>
            <TrackedLink href="/fr/" eventName="lang_fr_click" className="hover:text-white text-xs">FR</TrackedLink>
            <TrackedLink href="/de/" eventName="lang_de_click" className="hover:text-white text-xs">DE</TrackedLink>
            <TrackedLink href="/ar/" eventName="lang_ar_click" className="hover:text-white text-xs">AR</TrackedLink>
          </div>
        </div>
      </div>
    </header>
  )
}