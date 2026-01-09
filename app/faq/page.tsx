import FAQSection from '@/components/shared/FAQSection'
import SectionHeader from '@/components/shared/SectionHeader'

export default function FAQPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[400px] flex items-center justify-center bg-gradient-to-br from-brand-navy via-brand-navy-light to-brand-navy-dark">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 py-20 relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-['var(--font-oswald)'] uppercase tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-lg md:text-xl text-brand-cream max-w-3xl mx-auto">
            Everything you need to know about our solar and water solutions
          </p>
        </div>
      </section>

      <FAQSection />
    </main>
  )
}
