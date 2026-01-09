"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function HeroPromotion() {
  const [heroBanner, setHeroBanner] = useState({
    title: "",
    subtitle: "",
    buttonText: "",
    validUntil: "",
    active: false
  })

  useEffect(() => {
    const savedBanner = localStorage.getItem('promotionBanner')
    if (savedBanner) {
      setHeroBanner(JSON.parse(savedBanner))
    }
  }, [])

  const isValidPromotion = () => {
    if (!heroBanner.validUntil) return true
    const endDate = new Date(heroBanner.validUntil)
    return new Date() <= endDate
  }

  if (!heroBanner.active || !isValidPromotion() || !heroBanner.title) {
    return null
  }

  return (
    <section className="relative py-16 bg-gradient-to-br from-brand-navy via-brand-navy-light to-brand-navy-dark overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          {heroBanner.subtitle && (
            <div className="inline-block mb-6 px-4 py-2 bg-brand-gold/20 backdrop-blur-sm border border-brand-gold rounded-full">
              <p className="text-brand-gold font-semibold text-sm">
                {heroBanner.subtitle}
              </p>
            </div>
          )}

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {heroBanner.title}
          </h2>

          {heroBanner.buttonText && (
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-brand-gold text-brand-navy-dark hover:bg-brand-gold-light font-semibold text-lg px-10 py-6"
              >
                {heroBanner.buttonText}
              </Button>
            </Link>
          )}

          {heroBanner.validUntil && (
            <p className="mt-6 text-brand-cream/80 text-sm">
              Valid until: {new Date(heroBanner.validUntil).toLocaleDateString('en-IN', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
