"use client"

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
  category: 'solar' | 'water' | 'general' | 'payment'
}

const faqs: FAQItem[] = [
  {
    category: 'solar',
    question: 'How much can I save with solar panels?',
    answer: 'Typically, homeowners save 70-90% on their electricity bills. A 3kW system can save ₹3,000-5,000 per month depending on your usage. The system pays for itself in 3-5 years.',
  },
  {
    category: 'solar',
    question: 'What is the lifespan of solar panels?',
    answer: 'Quality solar panels last 25-30 years with minimal maintenance. Most manufacturers provide a 25-year performance warranty guaranteeing at least 80% efficiency.',
  },
  {
    category: 'solar',
    question: 'Do solar panels work during monsoon or cloudy days?',
    answer: 'Yes, solar panels work in cloudy weather, though at reduced efficiency (10-25% of normal output). Your grid connection ensures uninterrupted power supply during low production periods.',
  },
  {
    category: 'solar',
    question: 'What size solar system do I need for my home?',
    answer: 'For an average 3BHK home consuming 500-800 units/month, a 3-5kW system is recommended. We provide free site surveys to calculate the exact requirement based on your consumption.',
  },
  {
    category: 'water',
    question: 'How long does a solar water heater last?',
    answer: 'Premium solar water heaters from brands like Solahart and Racold last 15-20 years. They require minimal maintenance - just annual cleaning of collectors and checking pressure valves.',
  },
  {
    category: 'water',
    question: 'What is the difference between a heat pump and solar water heater?',
    answer: 'Solar water heaters use direct sunlight, while heat pumps extract heat from air (work even at night). Heat pumps are 70% more efficient than electric geysers and work in all weather conditions.',
  },
  {
    category: 'water',
    question: 'How much electricity does a heat pump water heater save?',
    answer: 'Heat pumps save 60-75% on water heating costs compared to electric geysers. For a family of 4, this translates to ₹800-1,500 savings per month.',
  },
  {
    category: 'general',
    question: 'Do you provide installation services?',
    answer: 'Yes, we provide complete turnkey installation by certified technicians. Installation is included in the product price. We also handle all government subsidy paperwork.',
  },
  {
    category: 'general',
    question: 'What warranties do you offer?',
    answer: 'We provide manufacturer warranties (typically 5-25 years on products) plus 1-year installation warranty. Extended warranties are available for purchase.',
  },
  {
    category: 'general',
    question: 'How long does installation take?',
    answer: 'Rooftop solar: 2-3 days, Solar water heaters: 4-6 hours, Heat pumps: 3-4 hours, Water softeners: 2-3 hours. We complete most installations in a single day.',
  },
  {
    category: 'payment',
    question: 'Do you offer EMI or financing options?',
    answer: 'Yes, we offer 0% EMI options up to 12 months on credit cards. We also have tie-ups with banks for solar loans at competitive interest rates (8-10% per annum).',
  },
  {
    category: 'payment',
    question: 'Are there any government subsidies available?',
    answer: 'Yes! The government offers 40% subsidy on rooftop solar up to 3kW and 20% for systems above 3kW. We handle all subsidy applications and documentation for you.',
  },
  {
    category: 'general',
    question: 'Do you provide maintenance services?',
    answer: 'Yes, we offer Annual Maintenance Contracts (AMC) starting at ₹2,500/year. This includes cleaning, inspection, and minor repairs. Most products require minimal maintenance.',
  },
]

const categories = [
  { id: 'all', label: 'All Questions' },
  { id: 'solar', label: 'Solar Solutions' },
  { id: 'water', label: 'Water Solutions' },
  { id: 'payment', label: 'Payment & Financing' },
  { id: 'general', label: 'General' },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [activeCategory, setActiveCategory] = useState<string>('all')

  const filteredFAQs = activeCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory)

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-navy mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get answers to common questions about our solar and water solutions
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2 rounded-full font-medium transition-all ${
                activeCategory === category.id
                  ? 'bg-brand-navy text-white'
                  : 'bg-brand-cream text-gray-700 hover:bg-brand-gold/20'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto space-y-4">
          {filteredFAQs.map((faq, index) => (
            <div
              key={index}
              className="border border-brand-cream rounded-lg overflow-hidden hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between bg-white hover:bg-brand-cream/30 transition-colors"
              >
                <span className="font-semibold text-brand-navy pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 text-brand-navy flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-brand-cream/20 border-t border-brand-cream">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still have questions CTA */}
        <div className="text-center mt-12 p-8 bg-brand-cream rounded-lg">
          <h3 className="text-xl font-bold text-brand-navy mb-2">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-4">
            Our team is here to help you make the right choice
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919876543210"
              className="inline-block bg-brand-navy text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-navy-light transition-colors"
            >
              Call: +91 98765 43210
            </a>
            <a
              href="https://wa.me/919876543210?text=Hi! I have a question about your products"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#25D366] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#20BA5A] transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
