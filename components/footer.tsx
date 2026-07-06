import Image from 'next/image'

export default function Footer() {
  const socialLinks = [
    { name: 'Facebook', url: 'https://www.facebook.com/share/17dNecL6Td/', icon: 'f' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/company/ecoforgeafrica/', icon: 'in' },
    { name: 'Twitter', url: 'https://x.com/EcoForgeAfrica', icon: 'x' },
    { name: 'Instagram', url: 'https://www.instagram.com/ecoforgeafrica?igsh=MThrc3V5YnBkem9heg==', icon: 'ig' },
    { name: 'WhatsApp', url: 'https://wa.me/2348134443046', icon: 'wa' }
  ]

  return (
    <footer className="bg-slate-900 text-slate-100 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-8 md:grid-cols-4 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image src="/Logo.png" alt="Eco Forge Africa" width={40} height={40} className="h-10 w-auto" />
              <span className="font-semibold text-base text-white">
                Eco Forge Africa
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              Transforming what Africa discards into what Africa needs through climate and social innovation.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-slate-300 hover:bg-primary hover:text-white transition"
                  title={link.name}
                >
                  <span className="text-xs font-semibold">{link.icon}</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300 mb-4">Our Programs</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <a href="/programs" className="hover:text-white transition-colors">
                  Menstrual Health
                </a>
              </li>
              <li>
                <a href="/programs" className="hover:text-white transition-colors">
                  Clean Energy
                </a>
              </li>
              <li>
                <a href="/programs" className="hover:text-white transition-colors">
                  Waste Management
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300 mb-4">About</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <a href="/about" className="hover:text-white transition-colors">
                  Our Story
                </a>
              </li>
              <li>
                <a href="/#mission" className="hover:text-white transition-colors">
                  Mission & Vision
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-white transition-colors">
                  Impact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300 mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <a href="mailto:ecoforgeafrica@gmail.com" className="hover:text-white transition-colors">
                  ecoforgeafrica@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:08134443046" className="hover:text-white transition-colors">
                  +234 813 444 3046
                </a>
              </li>
              <li>
                <a href="https://wa.me/2348134443046" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Chat on WhatsApp
                </a>
              </li>
              <li className="text-slate-400">
                Sani Abacha Quarters<br />Azare, Bauchi State
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col gap-4 text-sm text-slate-500 md:flex-row md:justify-between md:items-center">
            <p>© 2026 Eco Forge Africa. All rights reserved.</p>
            <div className="flex flex-wrap gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
