import { Button } from '@/components/ui/button'

export default function CTASection() {
  return (
    <section id="contact" className="py-24 px-4 bg-slate-50">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 mb-6">
          Join the Movement
        </h2>
        <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          We are seeking partners, investors, and supporters who believe that Africa&apos;s waste, women, and communities hold the solutions to Africa&apos;s future.
        </p>

        <div className="grid gap-6 md:grid-cols-3 mb-14">
          {[
            {
              icon: (
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-slate-100 text-slate-900 shadow-sm">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
                    <path d="M4 7h16M6 12h12M8 17h8" />
                  </svg>
                </div>
              ),
              title: 'Partners',
              text: 'Collaborate with us on community solutions and sustainable development initiatives.'
            },
            {
              icon: (
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-slate-100 text-slate-900 shadow-sm">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
                    <circle cx="12" cy="12" r="8" />
                    <path d="M8 12h8M12 8v8" />
                  </svg>
                </div>
              ),
              title: 'Investors',
              text: 'Support mission-driven enterprises that create impact and sustainable returns.'
            },
            {
              icon: (
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-slate-100 text-slate-900 shadow-sm">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
                    <circle cx="12" cy="12" r="8" />
                    <path d="M4 12h16M12 4c2 3 2 5 2 8s0 5-2 8" />
                  </svg>
                </div>
              ),
              title: 'Supporters',
              text: 'Be part of a movement transforming waste into opportunity and hope.'
            }
          ].map((item) => (
            <div key={item.title} className="rounded-[1.75rem] bg-white p-8 border border-slate-200 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-5">{item.icon}</div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" className="min-w-56">
            Get Involved Now
          </Button>
          <Button variant="outline" size="lg" className="min-w-56 border-primary text-primary hover:bg-primary/5">
            Learn More
          </Button>
        </div>

        <div className="mt-14 pt-8 border-t border-slate-200">
          <p className="text-slate-500 text-sm">
            <span className="font-semibold text-slate-700">Because</span> what Africa discards is exactly what Africa needs.
          </p>
        </div>
      </div>
    </section>
  )
}
