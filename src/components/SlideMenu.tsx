'use client'

import { TrackedLink } from './TrackedLink'
import { CategoriesList } from './CategoriesList'
import { usePathname } from 'next/navigation'
import { isLocale, type Locale, localizedPath } from '@/content/locales'

interface SlideMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function SlideMenu({ isOpen, onClose }: SlideMenuProps) {
  const pathname = usePathname()
  const locale: Locale = (isLocale(pathname?.split('/').filter(Boolean)[0]) ? pathname?.split('/').filter(Boolean)[0] : 'th') as Locale

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40"
          onClick={onClose}
        />
      )}
      
      {/* Slide Menu - exactly 1/4 of screen height */}
      <div 
        className={`fixed top-0 left-0 w-full h-1/4 bg-black/95 backdrop-blur-md border-b border-white/20 transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/20">
            <h2 className="text-2xl font-bold text-white bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              สารบัญ
            </h2>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-white/10 transition-colors hover:scale-110"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* Menu Content */}
          <div className="flex-1 p-6 overflow-y-auto">
            <div className="space-y-4">
              {/* Navigation Links */}
              <div className="space-y-2">
                <TrackedLink
                  href={localizedPath(locale, 'main')}
                  eventName="menu_main_click"
                  className="block p-3 rounded-lg hover:bg-white/10 transition-all duration-200 text-white/80 hover:text-white hover:scale-105 border border-transparent hover:border-white/20"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>{locale === 'th' ? 'หมวดหมู่ทั้งหมด' : 'All Categories'}</span>
                  </div>
                </TrackedLink>
              </div>

              {/* Category listing */}
              <CategoriesList />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}