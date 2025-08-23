'use client'

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
      <div className="flex items-center justify-between px-6 py-4">
        {/* Left side - Menu button */}
        <button
          onClick={onMenuToggle}
          className="group relative p-3 rounded-xl border border-black/50 bg-black/40 hover:bg-black/60 transition-all duration-200 hover:scale-105"
        >
          <div className="flex flex-col space-y-1.5">
            <div className="w-6 h-0.5 bg-white transition-all duration-200 group-hover:bg-white/90"></div>
            <div className="w-6 h-0.5 bg-white transition-all duration-200 group-hover:bg-white/90"></div>
            <div className="w-6 h-0.5 bg-white transition-all duration-200 group-hover:bg-white/90"></div>
          </div>
          
          {/* Hover effect */}
          <div className="absolute inset-0 bg-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
        </button>
        
        {/* Center - Logo/Title */}
        <div className="flex-1 text-center">
          <h1 className="text-xl font-bold text-white bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            BwnX Platform
          </h1>
        </div>
        
        {/* Right side - Placeholder for future elements */}
        <div className="w-12"></div>
      </div>
    </header>
  )
}