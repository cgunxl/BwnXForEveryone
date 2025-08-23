import { TrackedLink } from '@/components/TrackedLink'
import { ClientWrapper } from '@/components/ClientWrapper'
import { generateMetadata } from '@/lib/metadata'

export { generateMetadata }

export default function Home() {
  return (
    <>
      <ClientWrapper />
      
      <main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex flex-col items-center justify-center relative overflow-hidden pt-24">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>
        
        {/* Main Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          {/* BwnX Platform Text */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 animate-fade-in-left">
            BwnX Platform
          </h1>
          
          <p className="text-xl md:text-2xl text-white/70 mb-16 animate-fade-in-up">
            แพลตฟอร์มนวัตกรรมสำหรับอนาคต
          </p>
          
          {/* Start Button */}
          <div className="flex justify-center animate-fade-in-up">
            <TrackedLink 
              href="/dashboard" 
              eventName="start_button_click"
              className="group relative inline-block"
            >
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl scale-110 group-hover:scale-125 transition-all duration-500"></div>
                
                {/* Transparent border with gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-white/20 to-purple-500/30 rounded-3xl blur-sm"></div>
                
                {/* Main button */}
                <div className="relative bg-black/80 backdrop-blur-sm border border-white/20 rounded-3xl px-16 py-8 transition-all duration-300 group-hover:border-white/40 group-hover:scale-105 group-hover:bg-black/90 shadow-2xl">
                  <span className="text-2xl md:text-3xl font-bold text-white bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    เริ่มต้น
                  </span>
                  
                  {/* Arrow icon */}
                  <div className="absolute right-6 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-2">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
              </div>
            </TrackedLink>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 animate-float">
          <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full shadow-lg"></div>
        </div>
        
        {/* Additional floating elements */}
        <div className="absolute top-1/3 left-20 animate-float-delayed">
          <div className="w-2 h-2 bg-white/30 rounded-full"></div>
        </div>
        <div className="absolute bottom-1/3 right-20 animate-float-delayed-2">
          <div className="w-2 h-2 bg-white/20 rounded-full"></div>
        </div>
      </main>
    </>
  )
}
