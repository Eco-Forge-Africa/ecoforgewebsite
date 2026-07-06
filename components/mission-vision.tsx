export default function MissionVision() {
  return (
    <section id="mission" className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-10 shadow-sm">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-1.5 h-7 bg-primary rounded-full" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-700">
                Mission
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-6 leading-tight">
              Transform What Africa Discards Into What Africa Needs
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              To provide dignified menstrual health for every woman and girl, clean energy for every community, and recycling systems that turn waste into economic opportunity across the continent.
            </p>
          </div>

          <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-10 shadow-sm">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-1.5 h-7 bg-primary rounded-full" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-700">
                Vision
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-6 leading-tight">
              An Africa Where Sustainability &amp; Dignity Go Hand In Hand
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              An Africa where no woman or girl is held back by her period, where communities breathe clean air, and where waste is not a burden but a resource powering livelihoods and restoring environments.
            </p>
          </div>
        </div>

        <div className="mt-16 pt-12 border-t border-slate-200">
          <p className="text-center text-lg font-semibold text-slate-700 max-w-3xl mx-auto">
            We believe sustainability and dignity are not luxuries—they are rights. And we are building the systems to make them real across Africa.
          </p>
        </div>
      </div>
    </section>
  )
}
