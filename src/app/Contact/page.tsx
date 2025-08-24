import { ClientWrapper } from '@/components/ClientWrapper'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact - BwnX Platform',
  description: 'ติดต่อทีมงาน BwnX Platform ผ่านโซเชียลต่าง ๆ',
}

export default function ContactPage() {
  return (
    <>
      <ClientWrapper />
      <main className="min-h-screen bg-black pt-24 px-6">
        <section className="max-w-xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6 text-gradient">ติดต่อ</h1>
          <p className="text-white/70 mb-10">เชื่อมต่อกับเราได้ผ่านช่องทางต่อไปนี้</p>

          <div className="flex flex-col items-stretch gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-xl border border-white/15 hover:border-white/30 bg-white/5 hover:bg-white/10 transition-colors"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="text-blue-500">
                <path d="M22 12.06C22 6.48 17.52 2 11.94 2S1.88 6.48 1.88 12.06c0 5 3.66 9.14 8.44 9.94v-7.03H7.9v-2.9h2.42V9.41c0-2.4 1.43-3.73 3.62-3.73 1.05 0 2.15.19 2.15.19v2.36h-1.21c-1.2 0-1.57.74-1.57 1.5v1.8h2.67l-.43 2.9h-2.24v7.03c4.78-.8 8.44-4.94 8.44-9.94z"/>
              </svg>
              <span className="text-lg">Facebook</span>
            </a>

            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-xl border border-white/15 hover:border-white/30 bg-white/5 hover:bg-white/10 transition-colors"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="text-pink-500">
                <path d="M21 8.5a6.5 6.5 0 0 1-4.39-1.7v6.52a5.82 5.82 0 1 1-5.82-5.82c.33 0 .66.03.97.09v2.7a3.14 3.14 0 1 0 2.1 2.98V2h2.75c.3 2.62 2.38 4.7 5 5v1.5Z"/>
              </svg>
              <span className="text-lg">TikTok</span>
            </a>

            <a
              href="mailto:contact@bwnx.example"
              className="flex items-center gap-3 p-4 rounded-xl border border-white/15 hover:border-white/30 bg-white/5 hover:bg-white/10 transition-colors"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="text-emerald-400">
                <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8V6l8 5 8-5v2Z"/>
              </svg>
              <span className="text-lg">Email</span>
            </a>

            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-xl border border-white/15 hover:border-white/30 bg-white/5 hover:bg-white/10 transition-colors"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="text-red-500">
                <path d="M21.8 8.2a3 3 0 0 0-2.1-2.1C18 5.6 12 5.6 12 5.6s-6 0-7.7.5A3 3 0 0 0 2.2 8.2 31.5 31.5 0 0 0 1.7 12a31.5 31.5 0 0 0 .5 3.8 3 3 0 0 0 2.1 2.1c1.7.5 7.7.5 7.7.5s6 0 7.7-.5a3 3 0 0 0 2.1-2.1c.5-1.7.5-3.8.5-3.8s0-2.1-.5-3.8ZM10 14.6V9.4L14.6 12 10 14.6Z"/>
              </svg>
              <span className="text-lg">YouTube</span>
            </a>
          </div>
        </section>
      </main>
    </>
  )
}