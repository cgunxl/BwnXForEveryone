import { ClientWrapper } from '@/components/ClientWrapper'
import { generateMetadata } from '@/lib/metadata'
import HeroBwnx from '@/components/HeroBwnx'

export { generateMetadata }

export default function Home() {
  return (
    <>
      <ClientWrapper />

      <main className="min-h-screen bg-black relative overflow-hidden">
        {/* BwnX hero positioned ~30% from top */}
        <div className="absolute top-[30vh] left-1/2 -translate-x-1/2 z-10">
          <HeroBwnx />
        </div>
      </main>
    </>
  )
}
