import SectionHeader from '@/components/shared/SectionHeader'
import ProductCard from '@/components/shared/ProductCard'

export default function WaterSoftenersPage() {
  return (
    <main className="min-h-screen">
      <section className="relative min-h-[400px] flex items-center justify-center bg-gradient-to-br from-brand-navy via-brand-navy-light to-brand-navy-dark">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 py-20 relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-['var(--font-oswald)'] uppercase tracking-tight">Water Softeners</h1>
          <p className="text-lg md:text-xl text-brand-cream max-w-2xl mx-auto">
            Pure, soft water for healthier living
          </p>
        </div>
      </section>

      <section className="py-16 bg-brand-cream">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Water Softening Systems"
            subtitle="Remove hardness and impurities from your water"
          />
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProductCard
              id="3m-water-softener"
              brand="3M"
              model="Professional Water Softener"
              category="Water Solution"
              image="/products/3m-softener.jpg"
              features={['High Capacity', 'Easy Installation', 'Low Maintenance', 'NSF Certified']}
            />
          </div>
        </div>
      </section>
    </main>
  )
}
