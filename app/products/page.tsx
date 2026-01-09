import SectionHeader from '@/components/shared/SectionHeader'
import ProductCard from '@/components/shared/ProductCard'
import { Button } from '@/components/ui/button'
import { Phone, MessageCircle } from 'lucide-react'
import Link from 'next/link'

export default function ProductsPage() {
  const products = [
    {
      id: 'racold-omega-max-8',
      brand: 'Racold',
      model: 'Omega Max 8',
      category: 'Solar Water Heater',
      image: '/products/racold-omega.jpg',
      features: ['8 Bar Pressure Rated', '5 Year Warranty', 'Advanced Insulation', 'Energy Efficient'],
    },
    {
      id: 'grundfos-cm-booster',
      brand: 'Grundfos',
      model: 'CM Booster Pump',
      category: 'Pressure Pump',
      image: '/products/grundfos-cm.jpg',
      features: ['High Efficiency Motor', '3 Year Warranty', 'Whisper Quiet Operation', 'Corrosion Resistant'],
    },
    {
      id: '3m-water-softener',
      brand: '3M',
      model: 'Professional Water Softener',
      category: 'Water Solution',
      image: '/products/3m-softener.jpg',
      features: ['High Capacity Resin', 'Easy Installation', 'Low Maintenance', 'NSF Certified'],
    },
    {
      id: 'solahart-j302',
      brand: 'Solahart',
      model: 'J302 Solar Water Heater',
      category: 'Solar Water Heater',
      image: '/products/solahart-j302.jpg',
      features: ['302L Capacity', '10 Year Warranty', '600kPa Pressure', 'Premium Quality'],
    },
    {
      id: 'ao-smith-heatpump',
      brand: 'AO Smith',
      model: 'Heat Pump Water Heater',
      category: 'Heat Pump',
      image: '/products/ao-smith-hp.jpg',
      features: ['Energy Saving', '5 Year Warranty', 'Smart Technology', 'Eco-Friendly'],
    },
    {
      id: 'luminous-ups',
      brand: 'Luminous',
      model: 'Power Backup System',
      category: 'UPS & Batteries',
      image: '/products/luminous-ups.jpg',
      features: ['Long Battery Life', '3 Year Warranty', 'Overload Protection', 'Silent Operation'],
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-brand-navy text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
          <p className="text-xl text-brand-cream max-w-2xl mx-auto">
            Premium solutions from world-class manufacturers
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-brand-cream">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Explore Our Range"
            subtitle="Find the perfect solution for your home"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-brand-navy mb-4">
            Need Help Choosing the Right Product?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our experts will guide you to the perfect solution for your home based on your requirements and budget
          </p>
          <Link href="/contact">
            <Button className="bg-brand-gold text-brand-navy-dark hover:bg-brand-gold-light font-semibold text-lg px-8 py-6">
              Schedule FREE Consultation
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
