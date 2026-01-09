import SectionHeader from '@/components/shared/SectionHeader'
import { Card } from '@/components/ui/card'

export default function PowerBackupPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[400px] flex items-center justify-center bg-gradient-to-br from-brand-navy via-brand-navy-light to-brand-navy-dark">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 py-20 relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-['var(--font-oswald)'] uppercase tracking-tight">Power Backup Solutions</h1>
          <p className="text-lg md:text-xl text-brand-cream max-w-2xl mx-auto">
            Uninterrupted power supply for your home and business
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-brand-cream">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="UPS & Battery Systems"
            subtitle="Reliable power backup solutions from leading brands"
          />

          <div className="mt-12">
            <Card className="p-8 max-w-4xl mx-auto">
              <p className="text-gray-600 text-center mb-6">
                Our power backup solutions ensure you never experience power interruptions. 
                We offer premium UPS systems and batteries from trusted brands like Luminous and more.
              </p>
              <div className="text-center">
                <p className="text-brand-navy font-semibold">Product catalog coming soon...</p>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
