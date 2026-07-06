"use client"

import Image from 'next/image'
import { useState } from 'react'

const galleryItems = [
  {
    title: 'Community Workshops',
    description: 'Training women and youth in eco-friendly manufacturing and circular design.',
    images: ['/1.jpg', '/2.jpg', '/placeholder.jpg', '/placeholder-user.jpg'],
    alt: 'Community workshop participants'
  },
  {
    title: 'Sustainable Fuel Production',
    description: 'Transforming agricultural waste into cleaner cooking fuel for local families.',
    images: ['/2.jpg', '/1.jpg', '/placeholder.jpg', '/placeholder-user.jpg'],
    alt: 'Sustainable fuel production'
  },
  {
    title: 'Plastic Upcycling',
    description: 'Turning plastic waste into usable products and income for communities.',
    images: ['/placeholder.jpg', '/placeholder-user.jpg', '/1.jpg', '/2.jpg'],
    alt: 'Plastic recycling and upcycling'
  },
  {
    title: 'Field Partnerships',
    description: 'Working with local leaders to scale impact across rural and urban areas.',
    images: ['/placeholder-user.jpg', '/1.jpg', '/2.jpg', '/placeholder.jpg'],
    alt: 'Local field partnership'
  }
]

export default function GallerySection() {
  const [currentSlide, setCurrentSlide] = useState(galleryItems.map(() => 0))
  const [lightbox, setLightbox] = useState({ open: false, galleryIndex: 0, imageIndex: 0 })

  const openLightbox = (galleryIndex: number, imageIndex: number) => {
    setLightbox({ open: true, galleryIndex, imageIndex })
  }

  const closeLightbox = () => {
    setLightbox({ open: false, galleryIndex: 0, imageIndex: 0 })
  }

  const nextSlide = (galleryIndex: number) => {
    setCurrentSlide((prev) =>
      prev.map((slide, idx) =>
        idx === galleryIndex ? (slide + 1) % galleryItems[galleryIndex].images.length : slide
      )
    )
  }

  const prevSlide = (galleryIndex: number) => {
    setCurrentSlide((prev) =>
      prev.map((slide, idx) =>
        idx === galleryIndex
          ? (slide - 1 + galleryItems[galleryIndex].images.length) % galleryItems[galleryIndex].images.length
          : slide
      )
    )
  }

  const nextLightbox = () => {
    setLightbox((prev) => ({
      ...prev,
      imageIndex:
        (prev.imageIndex + 1) % galleryItems[prev.galleryIndex].images.length
    }))
  }

  const prevLightbox = () => {
    setLightbox((prev) => ({
      ...prev,
      imageIndex:
        (prev.imageIndex - 1 + galleryItems[prev.galleryIndex].images.length) %
        galleryItems[prev.galleryIndex].images.length
    }))
  }

  return (
    <section id="gallery" className="py-24 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-1.5 h-7 bg-secondary rounded-full" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary">
              Gallery
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Real Stories from Our Impact
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            See how our programs bring clean energy, dignified menstrual care, and waste transformation to communities across Africa.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {galleryItems.map((item, idx) => (
            <div key={idx} className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="relative h-64 w-full bg-slate-100">
                <Image
                  src={item.images[currentSlide[idx]]}
                  alt={`${item.alt} ${currentSlide[idx] + 1}`}
                  fill
                  className="object-cover"
                />
                <button
                  onClick={() => prevSlide(idx)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white hover:bg-black/50"
                  aria-label="Previous image"
                >
                  ‹
                </button>
                <button
                  onClick={() => nextSlide(idx)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white hover:bg-black/50"
                  aria-label="Next image"
                >
                  ›
                </button>
                <button
                  onClick={() => openLightbox(idx, currentSlide[idx])}
                  className="absolute bottom-4 right-4 rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-slate-900 shadow-sm hover:bg-white"
                >
                  View
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">{item.description}</p>
                <div className="flex gap-2">
                  {item.images.map((_, imageIdx) => (
                    <button
                      key={imageIdx}
                      onClick={() => setCurrentSlide((prev) => prev.map((slide, sIdx) => sIdx === idx ? imageIdx : slide))}
                      className={`h-2.5 w-2.5 rounded-full ${currentSlide[idx] === imageIdx ? 'bg-slate-900' : 'bg-slate-300'}`}
                      aria-label={`Go to image ${imageIdx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightbox.open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
          <div className="relative w-full max-w-4xl rounded-[2rem] bg-slate-900 shadow-2xl">
            <button
              onClick={closeLightbox}
              className="absolute right-4 top-4 z-20 inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-sm font-semibold text-slate-900 shadow-lg hover:bg-white"
              aria-label="Close gallery lightbox"
            >
              <span className="text-xl leading-none">✕</span>
              <span>Close</span>
            </button>
            <div className="relative h-[min(80vh,600px)] w-full overflow-hidden rounded-[2rem] bg-slate-900">
              <Image
                src={galleryItems[lightbox.galleryIndex].images[lightbox.imageIndex]}
                alt={galleryItems[lightbox.galleryIndex].alt}
                fill
                className="object-cover"
              />
              <button
                onClick={prevLightbox}
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-3 py-2 text-slate-900 hover:bg-white"
                aria-label="Previous lightbox image"
              >
                ‹
              </button>
              <button
                onClick={nextLightbox}
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-3 py-2 text-slate-900 hover:bg-white"
                aria-label="Next lightbox image"
              >
                ›
              </button>
            </div>
            <div className="flex items-center justify-between gap-4 border-t border-slate-700 px-6 py-4 text-sm text-slate-300">
              <span>{galleryItems[lightbox.galleryIndex].title}</span>
              <span>{lightbox.imageIndex + 1} / {galleryItems[lightbox.galleryIndex].images.length}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
