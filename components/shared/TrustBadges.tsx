"use client"

import { Shield, Award, CheckCircle, FileCheck } from 'lucide-react'

const certifications = [
  {
    icon: Shield,
    title: 'ISO Certified',
    description: 'ISO 9001:2015 certified for quality management',
  },
  {
    icon: Award,
    title: 'Authorized Dealer',
    description: 'Official partners of Solahart, Grundfos, Racold',
  },
  {
    icon: FileCheck,
    title: 'BIS Approved',
    description: 'All products meet Bureau of Indian Standards',
  },
  {
    icon: CheckCircle,
    title: 'MNRE Empanelled',
    description: 'Registered with Ministry of New & Renewable Energy',
  },
]

export default function TrustBadges() {
  return (
    <section className="py-12 bg-white border-y border-brand-cream">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => {
            const Icon = cert.icon
            return (
              <div
                key={index}
                className="text-center group hover:scale-105 transition-transform"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 mb-3 rounded-full bg-brand-gold/10 group-hover:bg-brand-gold/20 transition-colors">
                  <Icon className="h-6 w-6 text-brand-gold" />
                </div>
                <h3 className="font-bold text-brand-navy text-sm mb-1">
                  {cert.title}
                </h3>
                <p className="text-xs text-gray-600">
                  {cert.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
