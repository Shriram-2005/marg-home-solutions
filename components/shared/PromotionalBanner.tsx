"use client"

import { Card } from '@/components/ui/card'
import { featuredOffers } from '@/config/promotions'
import Link from 'next/link'

export default function PromotionalBanner() {
  // Filter only active offers
  const activeOffers = featuredOffers.filter(offer => offer.active)

  if (activeOffers.length === 0) {
    return null
  }

  return (
    <section className="py-16 bg-gradient-to-br from-brand-cream to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-navy mb-3">
            Limited Time Offers
          </h2>
          <p className="text-gray-600 text-lg">
            Exclusive deals on premium solar and water solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeOffers.map((offer) => (
            <Link key={offer.id} href={offer.ctaLink || '#'}>
              <Card
                className="p-8 text-center hover:scale-105 transition-transform duration-300 cursor-pointer h-full"
                style={{
                  backgroundColor: offer.backgroundColor || '#1e3a5f',
                  color: offer.textColor || '#ffffff',
                  border: 'none',
                }}
              >
                <div className="mb-4">
                  <h3 className="text-4xl font-bold mb-2">
                    {offer.title}
                  </h3>
                  <p className="text-xl font-semibold opacity-90">
                    {offer.subtitle}
                  </p>
                </div>
                <p className="mb-6 opacity-80">
                  {offer.description}
                </p>
                <div
                  className="inline-block px-6 py-3 rounded-lg font-semibold"
                  style={{
                    backgroundColor: offer.textColor === '#ffffff' ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.1)',
                  }}
                >
                  {offer.ctaText || 'Learn More'}
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
