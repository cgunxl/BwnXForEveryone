'use client'

import { TrackedLink } from './TrackedLink'

interface SlideMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function SlideMenu({ isOpen, onClose }: SlideMenuProps) {
  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40"
          onClick={onClose}
        />
      )}
      
      {/* Slide Menu */}
      <div 
        className={`fixed top-0 left-0 w-full h-1/4 bg-black/95 backdrop-blur-md border-b border-white/20 transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/20">
            <h2 className="text-2xl font-bold text-white">สารบัญ</h2>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* Menu Content */}
          <div className="flex-1 p-6">
            <div className="space-y-4">
              {/* Development Status */}
              <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-lg p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></div>
                  <span className="text-yellow-400 font-semibold">กำลังพัฒนา</span>
                </div>
                <p className="text-white/70 text-sm mt-2">
                  ระบบกำลังอยู่ในขั้นตอนการพัฒนา กรุณารอสักครู่
                </p>
              </div>
              
              {/* Navigation Links */}
              <div className="space-y-2">
                <TrackedLink
                  href="/dashboard"
                  eventName="menu_dashboard_click"
                  className="block p-3 rounded-lg hover:bg-white/10 transition-colors text-white/80 hover:text-white"
                >
                  แดชบอร์ด
                </TrackedLink>
                
                <TrackedLink
                  href="/analytics"
                  eventName="menu_analytics_click"
                  className="block p-3 rounded-lg hover:bg-white/10 transition-colors text-white/80 hover:text-white"
                >
                  การวิเคราะห์
                </TrackedLink>
                
                <TrackedLink
                  href="/settings"
                  eventName="menu_settings_click"
                  className="block p-3 rounded-lg hover:bg-white/10 transition-colors text-white/80 hover:text-white"
                >
                  การตั้งค่า
                </TrackedLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}