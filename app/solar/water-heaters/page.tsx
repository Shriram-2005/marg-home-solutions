import SectionHeader from '@/components/shared/SectionHeader'
import ProductCard from '@/components/shared/ProductCard'

export default function SolarWaterHeatersPage() {
  return (
    <main className="min-h-screen">
      <section className="relative min-h-[400px] flex items-center justify-center bg-gradient-to-br from-brand-navy via-brand-navy-light to-brand-navy-dark">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 py-20 relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-['var(--font-oswald)'] uppercase tracking-tight">Solar Water Heaters</h1>
          <p className="text-lg md:text-xl text-brand-cream max-w-2xl mx-auto">
            Eco-friendly hot water solutions powered by solar energy
          </p>
        </div>
      </section>

      <section className="py-16 bg-brand-cream">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Solar Water Heating Systems"
            subtitle="Premium brands with long-lasting performance"
          />
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProductCard
              id="solahart-j181"
              brand="Solahart"
              model="J181EL Solar Water Heater"
              category="Solar Water Heater"
              image="/products/solahart-j181.jpg"
              features={['181L Capacity', '10 Year Warranty', '600kPa Pressure', 'Premium Build']}
            />
            <ProductCard
              id="racold-omega"
              brand="Racold"
              model="Omega Max 8"
              category="Solar Water Heater"
              image="/products/racold-omega.jpg"
              features={['8 Bar Pressure', '5 Year Warranty', 'Advanced Insulation', 'Energy Efficient']}
            />
          </div>
        </div>
      </section>
    </main>
  )
}
