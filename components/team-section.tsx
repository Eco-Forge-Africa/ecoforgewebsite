export default function TeamSection() {
  const team = [
    {
      name: 'Mariya Dauda Kariya',
      role: 'Founder & CEO',
      avatar: 'MD'
    },
    {
      name: 'Alh. Aliyu Auwal',
      role: 'Programs & Partnerships Lead',
      avatar: 'AA'
    },
    {
      name: 'Mujahid Ahmad',
      role: 'Operations Lead',
      avatar: 'MA'
    },
    {
      name: 'Fatima Dauda',
      role: 'Marketing Lead',
      avatar: 'FD'
    }
  ]

  return (
    <section id="team" className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1.5 h-7 bg-secondary rounded-full" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary">
              Our team
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Driving Change Together
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
            A dedicated team of leaders committed to transforming waste into opportunity and dignity across Africa.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {team.map((member, idx) => (
            <div
              key={idx}
              className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl text-center"
            >
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold text-lg mb-4">
                {member.avatar}
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{member.name}</h3>
              <p className="text-sm text-slate-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
