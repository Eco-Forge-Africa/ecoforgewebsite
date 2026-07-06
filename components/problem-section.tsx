"use client"

import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function ProblemSection() {
  const problems = [
    {
      title: 'Menstrual Poverty',
      description: 'Millions of women and girls across Africa lack adequate access to menstrual health products. They miss school and work, perpetuating cycles of poverty and inequality.',
      icon: (
        <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-rose-50 text-rose-600 shadow-sm">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
            <path d="M12 21c3-4 5-8 5-11a5 5 0 0 0-10 0c0 3 2 7 5 11Z" />
            <path d="M12 11.5v-5" />
          </svg>
        </div>
      )
    },
    {
      title: 'Deforestation & Air Pollution',
      description: 'Over 80% of sub-Saharan Africa relies on wood fuel for cooking. This drives rapid deforestation, ecosystem degradation, and dangerous indoor air pollution.',
      icon: (
        <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-slate-100 text-emerald-600 shadow-sm">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
            <path d="M6 21c2-4 4-7 6-9 1.7-1.7 3.6-3.5 5-5C14 8 10 10 6 7c3 1 5-1 6-3 1.7 2 4.3 5 7 9" />
          </svg>
        </div>
      )
    },
    {
      title: 'Plastic & E-Waste Crisis',
      description: 'Millions of tonnes of plastic and electronic waste overwhelm communities without recycling infrastructure, poisoning waterways and wasting economic potential.',
      icon: (
        <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-slate-100 text-sky-600 shadow-sm">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
            <path d="M21 12a9 9 0 1 1-3-6.8" />
            <path d="M13 6l3-3v3h-3Zm5 8l3 3h-3v-3Zm-8 5l-3 3v-3h3Zm-5-8l-3-3h3v3Z" />
          </svg>
        </div>
      )
    }
  ]

  const images = ['/1.jpg', '/2.jpg']
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setCurrent((c) => (c + 1) % images.length), 2000)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="about" className="py-24 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 grid gap-8 md:grid-cols-2 items-center">
          <div className="text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-left">About Us</h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed text-left">
              Across Africa, millions of women and girls manage their periods with rags, leaves, or nothing at all. Farmers burn crop waste in open fields, choking communities with smoke and accelerating climate change. Plastic and e-waste pile up in communities with no infrastructure to handle them. We are a climate and social innovation enterprise that turns what Africa discards into what Africa needs. Through three interconnected programmes, we address some of the continent&apos;s most urgent environmental and social challenges, restoring dignity, cleaning the air, and transforming waste into opportunity.
            </p>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative w-full max-w-sm md:max-w-md lg:max-w-lg h-64 md:h-72 lg:h-80 rounded-2xl overflow-hidden shadow-sm">
              {images.map((src, i) => (
                <Image
                  key={src}
                  src={src}
                  alt={i === 0 ? 'Community' : 'Impact'}
                  fill
                  sizes="(max-width: 640px) 100vw, 33rem"
                  className={`object-cover transition-opacity duration-700 ${i === current ? 'opacity-100' : 'opacity-0'}`}
                  style={{ position: 'absolute' }}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {problems.map((problem, idx) => (
            <div
              key={idx}
              className="rounded-[1.75rem] bg-white p-8 border border-slate-200 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="text-5xl mb-5">{problem.icon}</div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">{problem.title}</h3>
              <p className="text-slate-600 leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
