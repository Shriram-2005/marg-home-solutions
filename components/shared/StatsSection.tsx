"use client"

import { Users, Award, CheckCircle, TrendingUp } from 'lucide-react'

const stats = [
  {
    icon: Users,
    number: '5000+',
    label: 'Happy Customers',
    color: 'text-brand-gold',
  },
  {
    icon: CheckCircle,
    number: '8000+',
    label: 'Installations Completed',
    color: 'text-brand-sage',
  },
  {
    icon: Award,
    number: '15+',
    label: 'Years of Excellence',
    color: 'text-brand-navy',
  },
  {
    icon: TrendingUp,
    number: '98%',
    label: 'Customer Satisfaction',
    color: 'text-brand-gold',
  },
]

export default function StatsSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-brand-navy via-brand-navy-light to-brand-navy-dark">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-white/10 backdrop-blur-sm group-hover:bg-white/20 transition-colors">
                  <Icon className={`h-8 w-8 ${stat.color}`} />
                </div>
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-brand-cream text-sm lg:text-base font-medium">
                  {stat.label}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
