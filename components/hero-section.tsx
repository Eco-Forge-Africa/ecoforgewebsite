import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-4 relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white min-h-[90vh] flex items-center">
      <div className="absolute -top-32 -right-32 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-1.5 h-7 bg-secondary rounded-full" />
          <span className="text-xs font-semibold uppercase tracking-[0.32em] text-secondary">
            Climate & social innovation
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-slate-900 mb-6 leading-tight">
          Transforming What Africa Discards Into What Africa Needs
        </h1>

        <p className="text-base sm:text-lg text-slate-600 mb-10 leading-relaxed max-w-2xl">
          We address Africa&apos;s most urgent environmental and social challenges through three interconnected programs: eco-friendly menstrual health, clean energy, and sustainable waste management.
        </p>

        <div className="flex flex-wrap gap-4">
          <Link
            href="/about"
            className="inline-flex min-w-[12rem] items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-white transition hover:bg-primary/90"
          >
            Learn More
          </Link>
          <Link
            href="/programs"
            className="inline-flex min-w-[12rem] items-center justify-center rounded-lg border border-primary bg-white px-6 py-3 text-sm font-medium text-primary transition hover:bg-primary/5"
          >
            Our Impact
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-16 pt-10 border-t border-slate-200">
          <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm">
            <p className="text-3xl font-semibold text-primary mb-2">500M</p>
            <p className="text-sm text-slate-600">Women and girls lacking menstrual access</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm">
            <p className="text-3xl font-semibold text-secondary mb-2">80%</p>
            <p className="text-sm text-slate-600">Sub-Saharan Africa relies on wood fuel</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm">
            <p className="text-3xl font-semibold text-primary mb-2">Millions</p>
            <p className="text-sm text-slate-600">Tonnes of plastic waste annually</p>
          </div>
        </div>
      </div>
    </section>
  )
}
