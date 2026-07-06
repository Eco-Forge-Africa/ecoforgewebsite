export default function SolutionSection() {
  return (
    <section className="py-24 px-4 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-1.5 h-7 bg-secondary rounded-full" />
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary">
            Our approach
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-10">
          Turning Discard Into Dignity
        </h2>

        <div className="grid gap-12 md:grid-cols-2">
          <div className="rounded-[1.75rem] bg-white p-10 border border-slate-200 shadow-sm">
            <h3 className="text-2xl font-semibold text-primary mb-6">Community-Centered Solutions</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              We work through community engagement and local partnerships that ensure sustainability beyond donor funding. Our market-driven models create lasting impact while respecting local knowledge and leadership.
            </p>
            <ul className="space-y-4">
              {[
                'Local partnerships and ownership',
                'Market-driven sustainability',
                'Women and youth empowerment',
                'Economic opportunity creation'
              ].map((item) => (
                <li key={item} className="flex gap-3 text-slate-600">
                  <span className="text-primary font-semibold mt-0.5">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            {[
              { label: 'Menstrual Health', text: 'Provide eco-friendly pads to thousands of women and girls' },
              { label: 'Clean Energy', text: 'Divert thousands of tonnes of agricultural waste from open burning' },
              { label: 'Waste Management', text: 'Establish recycling programs across multiple communities' },
              { label: 'Green Jobs', text: 'Create employment opportunities, especially for women and youth' }
            ].map((item) => (
              <div key={item.label} className="rounded-[1.5rem] bg-white p-6 border border-slate-200 shadow-sm">
                <p className="text-sm text-secondary font-semibold mb-2">{item.label}</p>
                <p className="text-slate-600 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
