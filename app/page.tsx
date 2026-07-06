'use client'

import Header from '@/components/header'
import HeroSection from '@/components/hero-section'
import MissionVision from '@/components/mission-vision'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Header />
      <HeroSection />
      <MissionVision />
      <Footer />
    </main>
  )
}
