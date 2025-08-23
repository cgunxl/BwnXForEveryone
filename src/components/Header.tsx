'use client'

interface HeaderProps {
  onMenuToggle: () => void
}

export function Header({ onMenuToggle }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/20">
      {/* Top Tab with lines */}
      <div className="h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
      
      {/* Main header content */}
      <div className="flex items-center justify-between px-6 py-4">
        {/* Left side - Menu button */}
        <button
          onClick={onMenuToggle}
          className="group relative p-3 rounded-lg border border-black/50 bg-black/30 hover:bg-black/50 transition-all duration-200"
        >
          <div className="flex flex-col space-y-1">
            <div className="w-6 h-0.5 bg-white transition-all duration-200 group-hover:bg-white/80"></div>
            <div className="w-6 h-0.5 bg-white transition-all duration-200 group-hover:bg-white/80"></div>
            <div className="w-6 h-0.5 bg-white transition-all duration-200 group-hover:bg-white/80"></div>
          </div>
        </button>
        
        {/* Center - Logo/Title */}
        <div className="flex-1 text-center">
          <h1 className="text-xl font-bold text-white">BwnX Platform</h1>
        </div>
        
        {/* Right side - Placeholder for future elements */}
        <div className="w-12"></div>
      </div>
    </header>
  )
}