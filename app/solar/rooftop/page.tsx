import SectionHeader from '@/components/shared/SectionHeader'
import ProductCard from '@/components/shared/ProductCard'

export default function SolarRooftopPage() {
  return (
    <main className="min-h-screen">
      <section className="relative min-h-[400px] flex items-center justify-center bg-gradient-to-br from-brand-navy via-brand-navy-light to-brand-navy-dark">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 py-20 relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-['var(--font-oswald)'] uppercase tracking-tight">Rooftop Solar Solutions</h1>
          <p className="text-lg md:text-xl text-brand-cream max-w-2xl mx-auto">
            Harness the power of the sun for sustainable energy
          </p>
        </div>
      </section>

      <section className="py-16 bg-brand-cream">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Rooftop Solar Systems"
            subtitle="Premium solar panel installations for your home"
          />
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProductCard
              id="solar-panel-3kw"
              brand="Adani Solar"
              model="3kW Rooftop System"
              category="Solar Panels"
              image="/products/solar-3kw.jpg"
              features={['25 Year Warranty', 'High Efficiency', 'Easy Installation', 'Government Subsidy']}
            />
            <ProductCard
              id="solar-panel-5kw"
              brand="Panasonic"
              model="5kW Solar System"
              category="Solar Panels"
              image="/products/solar-5kw.jpg"
              features={['Premium Quality', '30 Year Warranty', 'Maximum Output', 'Weather Resistant']}
            />
          </div>
        </div>
      </section>
    </main>
  )
}
