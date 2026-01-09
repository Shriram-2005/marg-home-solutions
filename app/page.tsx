import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle, Award, Users, Target, Phone, MessageCircle } from 'lucide-react'
import ProductCard from '@/components/shared/ProductCard'
import TrustBar from '@/components/shared/TrustBar'
import SectionHeader from '@/components/shared/SectionHeader'
import StatsSection from '@/components/shared/StatsSection'
import TestimonialsSection from '@/components/shared/TestimonialsSection'
import HeroPromotion from '@/components/shared/HeroPromotion'
import PromotionalBanner from '@/components/shared/PromotionalBanner'
import FAQSection from '@/components/shared/FAQSection'
import SolarCalculator from '@/components/shared/SolarCalculator'
import TrustBadges from '@/components/shared/TrustBadges'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center bg-gradient-to-br from-brand-navy via-brand-navy-light to-brand-navy-dark">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            {/* Urgency Badge */}
            <div className="inline-block mb-6 px-4 py-2 bg-brand-gold/20 backdrop-blur-sm border border-brand-gold rounded-full">
              <p className="text-brand-gold font-semibold text-sm">
                ⚡ Limited Time: FREE Site Survey Worth ₹2,500
              </p>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-['var(--font-oswald)'] uppercase tracking-tight">
              Complete Sustainable Home Solutions
            </h1>
            <p className="text-lg md:text-xl mb-8 text-brand-cream leading-relaxed">
              Premium Solar Power Systems, Water Heaters, Heat Pumps & Energy Storage Solutions for Modern Homes
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/919876543210?text=Hi! I want a FREE site survey for solar/water solutions"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white hover:bg-[#20BA5A] font-semibold text-lg px-8 py-4 rounded-lg transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
                Get FREE Consultation on WhatsApp
              </a>
              <Link href="/contact">
                <button className="bg-brand-gold text-brand-navy-dark hover:bg-brand-gold-light font-semibold text-lg px-8 py-4 rounded-lg transition-colors w-full sm:w-auto">
                  Schedule Site Visit
                </button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-brand-cream">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-brand-gold" />
                <span>5000+ Installations</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-brand-gold" />
                <span>15+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-brand-gold" />
                <span>Authorized Dealers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <TrustBar />

      {/* Stats Section */}
      <StatsSection />

      {/* Trust Badges */}
      <TrustBadges />

      {/* Hero Promotion - Festival/Seasonal Offers */}
      <HeroPromotion />

      {/* Promotional Offers */}
      <PromotionalBanner />

      {/* Solar Calculator */}
      <SolarCalculator />

      {/* Featured Products Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Featured Products" 
            subtitle="Premium solutions from world-class manufacturers"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <ProductCard 
              id="racold-omega-max-8"
              brand="Racold"
              model="Omega Max 8"
              category="Solar Water Heater"
              image="/products/racold-omega.jpg"
              features={[
                "8 Bar Pressure Rated",
                "5 Year Warranty",
                "Advanced Insulation",
                "Energy Efficient"
              ]}
            />
            <ProductCard 
              id="grundfos-cm-booster"
              brand="Grundfos"
              model="CM Booster Pump"
              category="Pressure Pump"
              image="/products/grundfos-cm.jpg"
              features={[
                "High Efficiency Motor",
                "3 Year Warranty",
                "Whisper Quiet Operation",
                "Corrosion Resistant"
              ]}
            />
            <ProductCard 
              id="3m-water-softener"
              brand="3M"
              model="Professional Water Softener"
              category="Water Solution"
              image="/products/3m-softener.jpg"
              features={[
                "High Capacity Resin",
                "Easy Installation",
                "Low Maintenance",
                "NSF Certified"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Why Choose Us" 
            subtitle="Leading brands and premium quality products"
          />
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <Card className="p-6 text-center">
              <h3 className="text-xl font-bold mb-3">Premium Quality</h3>
              <p className="text-gray-600">Top-tier products from world-class manufacturers</p>
            </Card>
            <Card className="p-6 text-center">
              <h3 className="text-xl font-bold mb-3">Expert Support</h3>
              <p className="text-gray-600">Professional installation and maintenance services</p>
            </Card>
            <Card className="p-6 text-center">
              <h3 className="text-xl font-bold mb-3">Warranty Backed</h3>
              <p className="text-gray-600">Comprehensive warranty coverage on all products</p>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-brand-navy via-brand-navy-light to-brand-navy-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Save on Your Energy Bills?
          </h2>
          <p className="text-brand-cream text-lg mb-8 max-w-2xl mx-auto">
            Get a personalized quote for your home. Our experts will design the perfect solution for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+919876543210"
              className="inline-flex items-center gap-2 bg-brand-gold text-brand-navy-dark hover:bg-brand-gold-light font-semibold text-lg px-8 py-4 rounded-lg transition-colors"
            >
              <Phone className="h-5 w-5" />
              Call: +91 98765 43210
            </a>
            <Link href="/contact">
              <button className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-brand-navy font-semibold text-lg px-8 py-4 rounded-lg transition-colors">
                Request Free Quote
              </button>
            </Link>
          </div>
          <p className="text-brand-cream text-sm mt-6">
            ✓ No obligations • ✓ Free site survey • ✓ Custom solutions • ✓ Expert guidance
          </p>
        </div>
      </section>
    </main>
  )
}
