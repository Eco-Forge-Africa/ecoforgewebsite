import Header from '@/components/header'
import Footer from '@/components/footer'

export default function MissionPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Header />
      <div className="pt-24 px-4">
        <div className="max-w-6xl mx-auto text-center py-20">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Mission</h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            This page is no longer needed because mission content lives on the homepage.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  )
}
