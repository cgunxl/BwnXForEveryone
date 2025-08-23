import { TrackedLink } from '@/components/TrackedLink'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dashboard - BwnX Platform',
  description: 'Dashboard page for BwnX Platform',
}

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/10 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Welcome to BwnX Platform</h2>
            <p className="text-gray-300 mb-4">
              This is your dashboard where you can manage your platform activities.
            </p>
            <TrackedLink 
              href="/" 
              eventName="back_to_home"
              className="inline-block bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors"
            >
              กลับหน้าหลัก
            </TrackedLink>
          </div>
          
          <div className="bg-white/10 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Quick Actions</h2>
            <div className="space-y-3">
              <TrackedLink 
                href="/about" 
                eventName="navigate_to_about"
                className="block w-full bg-white/20 p-4 rounded-lg hover:bg-white/30 transition-colors text-center"
              >
                เกี่ยวกับเรา
              </TrackedLink>
              <TrackedLink 
                href="/contact" 
                eventName="navigate_to_contact"
                className="block w-full bg-white/20 p-4 rounded-lg hover:bg-white/30 transition-colors text-center"
              >
                ติดต่อเรา
              </TrackedLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}