import { TrackedLink } from '@/components/TrackedLink'
import { generateMetadata } from '@/lib/metadata'

export { generateMetadata }

export default function Home() {
  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent"></div>
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 text-center px-6">
        {/* BwnX Platform Text */}
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-16 animate-fade-in-left">
          BwnX Platform
        </h1>
        
        {/* Start Button */}
        <div className="flex justify-center">
          <TrackedLink 
            href="/dashboard" 
            eventName="start_button_click"
            className="group relative inline-block"
          >
            <div className="relative">
              {/* Transparent border */}
              <div className="absolute inset-0 bg-white/20 rounded-2xl blur-sm"></div>
              
              {/* Main button */}
              <div className="relative bg-black border-2 border-white/30 rounded-2xl px-12 py-6 transition-all duration-300 group-hover:border-white/50 group-hover:scale-105">
                <span className="text-2xl md:text-3xl font-semibold text-white">
                  เริ่มต้น
                </span>
              </div>
            </div>
          </TrackedLink>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-2 h-2 bg-white/30 rounded-full"></div>
      </div>
    </main>
  )
}
