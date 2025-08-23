import React from 'react'

export function HeroBwnx() {
  return (
    <div className="relative flex flex-col items-center justify-center select-none">
      {/* Wind dash effects above the word */}
      <div className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="block h-px w-24 bg-gradient-to-r from-white/0 via-white/70 to-white/0 blur-[0.5px] animate-wind-dash" style={{ animationDelay: '0s' }} />
        <span className="block h-[2px] w-16 bg-gradient-to-r from-white/0 via-white/80 to-white/0 blur-[0.5px] animate-wind-dash" style={{ animationDelay: '0.15s' }} />
        <span className="block h-px w-20 bg-gradient-to-r from-white/0 via-white/60 to-white/0 blur-[0.5px] animate-wind-dash" style={{ animationDelay: '0.3s' }} />
      </div>

      {/* Main word */}
      <h1 className="text-white font-extrabold tracking-wide text-6xl md:text-8xl lg:text-9xl animate-bwnx-intro">BwnX</h1>
    </div>
  )
}

export default HeroBwnx