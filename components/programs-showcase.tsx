export default function ProgramsShowcase() {
  const programs = [
    {
      title: 'Menstrual Health',
      subtitle: 'Dignity & Access',
      description: 'We produce and distribute eco-friendly menstrual pads that are safe, affordable, and accessible. Our products end menstrual poverty and keep girls in school.',
      details: [
        
      ],
      color: 'from-rose-50 to-pink-50',
      accent: 'text-rose-600',
      icon: (
        <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-rose-100 text-rose-600 shadow-sm">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
            <path d="M12 2C9 7 7 11 7 14a5 5 0 0 0 10 0c0-3-2-7-5-12Z" />
            <path d="M12 8v3" />
          </svg>
        </div>
      )
    },
    {
      title: 'Clean Energy',
      subtitle: 'Burning Cleaner',
      description: 'We convert agricultural waste into eco-charcoal briquettes that burn cleaner and longer than wood charcoal, reducing deforestation and indoor air pollution.',
      details: [
        
      ],
      color: 'from-amber-50 to-orange-50',
      accent: 'text-amber-600',
      icon: (
        <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-amber-100 text-amber-600 shadow-sm">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
            <path d="M12 2 9 7h3l-2 7 5-5h-3l2-4-5 4Z" />
            <path d="M12 22V11" />
          </svg>
        </div>
      )
    },
    {
      title: 'Waste Management',
      subtitle: 'Waste to Wealth',
      description: 'Our community-based recycling programmes turn plastic and e-waste into economic opportunities, creating green jobs while protecting the environment.',
      details: [
       
      ],
      color: 'from-green-50 to-emerald-50',
      accent: 'text-green-600',
      icon: (
        <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-emerald-100 text-emerald-600 shadow-sm">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
            <path d="M3 12h6l-2 4" />
            <path d="M21 12h-6l2-4" />
            <path d="M7 16L3 12l4-4" />
            <path d="M17 8l4 4-4 4" />
          </svg>
        </div>
      )
    }
  ]

  return (
    <section id="programs" className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1.5 h-7 bg-secondary rounded-full" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary">
              What we do
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Three Interconnected Programs
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
            We address Africa&apos;s challenges through integrated solutions that restore dignity, clean air, and transform waste into opportunity.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {programs.map((program, idx) => (
            <div
              key={idx}
              className={`rounded-[2rem] border border-slate-200 bg-linear-to-br ${program.color} p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl`}
            >
              <div className="mb-5">
                <div className="mb-3">{program.icon}</div>
                <h3 className={`text-2xl font-semibold ${program.accent}`}>{program.title}</h3>
                <p className="text-sm text-slate-700/75 mt-2">{program.subtitle}</p>
              </div>

              <p className="text-slate-700/75 mb-6 leading-relaxed grow">{program.description}</p>

              <div className="space-y-3 pt-4 border-t border-slate-200/70">
                {program.details.map((detail, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <span className={`${program.accent} font-semibold mt-1`}>✓</span>
                    <span className="text-sm text-slate-700/70">{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
