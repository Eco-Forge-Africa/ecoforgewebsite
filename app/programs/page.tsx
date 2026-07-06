import Header from '@/components/header'
import ProgramsShowcase from '@/components/programs-showcase'
import Footer from '@/components/footer'

export default function ProgramsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Header />
      <ProgramsShowcase />
      <Footer />
    </main>
  )
}
