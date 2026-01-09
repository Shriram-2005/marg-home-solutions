"use client"

import { Star, Quote } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const testimonials = [
  {
    name: 'Rajesh Kumar',
    location: 'Indiranagar, Bengaluru',
    rating: 5,
    text: 'Excellent service! They installed a Solahart solar water heater at my home. Professional team and the after-sales support is outstanding. Highly recommend!',
    solution: 'Solar Water Heater',
  },
  {
    name: 'Priya Sharma',
    location: 'Koramangala, Bengaluru',
    rating: 5,
    text: 'We got a complete rooftop solar solution for our home. The team was knowledgeable and completed the installation in just 3 days. Our electricity bills have reduced by 70%!',
    solution: 'Rooftop Solar - 5kW',
  },
  {
    name: 'Anil Reddy',
    location: 'Whitefield, Bengaluru',
    rating: 5,
    text: 'Best decision to go with Marg for our water softener. The Grundfos system works perfectly. No more hard water issues. Professional installation and fair pricing.',
    solution: 'Water Softener System',
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-brand-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-navy mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from homeowners who have transformed their homes with our solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-white border-brand-cream hover:shadow-xl transition-shadow duration-300"
            >
              <CardContent className="p-6">
                <Quote className="h-10 w-10 text-brand-gold/20 mb-4" />
                
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-brand-gold text-brand-gold" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Customer Info */}
                <div className="border-t border-brand-cream pt-4">
                  <p className="font-semibold text-brand-navy">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                  <p className="text-xs text-brand-sage mt-2 font-medium">
                    {testimonial.solution}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Join 5000+ satisfied customers across Bengaluru</p>
          <a
            href="/contact"
            className="inline-block bg-brand-gold text-brand-navy-dark px-8 py-4 rounded-lg font-semibold hover:bg-brand-gold-light transition-colors"
          >
            Get Your Free Consultation
          </a>
        </div>
      </div>
    </section>
  )
}
