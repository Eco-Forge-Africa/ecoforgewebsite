import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
  <>
    <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm">
      <nav className="max-w-6xl mx-auto px-4 py-5 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition">
          <Image src="/Logo.png" alt="Eco Forge Africa" width={60} height={60} className="h-16 w-auto" />
          <span className="font-semibold text-lg text-slate-900 tracking-tight">
            Eco Forge Africa
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/about" className="text-sm font-medium text-slate-700 hover:text-primary transition">
            About
          </Link>
          <Link href="/programs" className="text-sm font-medium text-slate-700 hover:text-primary transition">
            Programs
          </Link>
          <Link href="/gallery" className="text-sm font-medium text-slate-700 hover:text-primary transition">
            Gallery
          </Link>
        
          <Link href="/team" className="text-sm font-medium text-slate-700 hover:text-primary transition">
            Team
          </Link>
          <Link href="/contact" className="text-sm font-medium text-slate-700 hover:text-primary transition">
            Contact
          </Link>
        </div>

        <Link href="/contact" className="hidden md:inline-flex px-6 py-2 rounded-lg bg-primary text-white text-sm font-medium hover:bg-primary/90 transition">
          Get Involved
        </Link>
      </nav>
    </header>
    <div className="h-24 md:h-28" />
  </>
  )
}
