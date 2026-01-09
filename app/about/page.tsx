import SectionHeader from '@/components/shared/SectionHeader'
import { CheckCircle, Award, Users, Target } from 'lucide-react'
import { Card } from '@/components/ui/card'

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[400px] flex items-center justify-center bg-gradient-to-br from-brand-navy via-brand-navy-light to-brand-navy-dark">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 py-20 relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-['var(--font-oswald)'] uppercase tracking-tight">About Marg Home Solutions</h1>
          <p className="text-lg md:text-xl text-brand-cream max-w-3xl mx-auto">
            Your trusted partner for premium sustainable home solutions since establishment
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-brand-cream">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8">
              <Target className="h-12 w-12 text-brand-gold mb-4" />
              <h2 className="text-2xl font-bold text-brand-navy mb-4">Our Mission</h2>
              <p className="text-gray-600">
                To provide innovative, sustainable, and energy-efficient solutions that enhance the quality of life 
                while reducing environmental impact. We strive to be the leading provider of premium water and solar 
                solutions in India.
              </p>
            </Card>

            <Card className="p-8">
              <Award className="h-12 w-12 text-brand-gold mb-4" />
              <h2 className="text-2xl font-bold text-brand-navy mb-4">Our Vision</h2>
              <p className="text-gray-600">
                To become India's most trusted name in sustainable home solutions, helping millions of families 
                transition to eco-friendly alternatives through quality products and exceptional service.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Why Choose Us"
            subtitle="What makes Marg Home Solutions stand out"
          />

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <CheckCircle className="h-16 w-16 text-brand-gold mx-auto mb-4" />
              <h3 className="text-xl font-bold text-brand-navy mb-3">Authorized Partners</h3>
              <p className="text-gray-600">
                We are authorized partners of world-renowned brands like Solahart, Grundfos, 
                Racold, and AO Smith.
              </p>
            </div>

            <div className="text-center">
              <Users className="h-16 w-16 text-brand-gold mx-auto mb-4" />
              <h3 className="text-xl font-bold text-brand-navy mb-3">Expert Team</h3>
              <p className="text-gray-600">
                Our certified technicians ensure professional installation and ongoing support 
                for all products.
              </p>
            </div>

            <div className="text-center">
              <Award className="h-16 w-16 text-brand-gold mx-auto mb-4" />
              <h3 className="text-xl font-bold text-brand-navy mb-3">Quality Assurance</h3>
              <p className="text-gray-600">
                All products come with comprehensive warranties and our commitment to 
                long-term customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-brand-cream">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Our Core Values"
            subtitle="The principles that guide everything we do"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <Card className="p-6 text-center hover:shadow-lg transition">
              <h3 className="text-lg font-bold text-brand-navy mb-2">Quality</h3>
              <p className="text-sm text-gray-600">Premium products that last</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition">
              <h3 className="text-lg font-bold text-brand-navy mb-2">Integrity</h3>
              <p className="text-sm text-gray-600">Honest and transparent service</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition">
              <h3 className="text-lg font-bold text-brand-navy mb-2">Innovation</h3>
              <p className="text-sm text-gray-600">Latest sustainable technologies</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition">
              <h3 className="text-lg font-bold text-brand-navy mb-2">Service</h3>
              <p className="text-sm text-gray-600">Customer satisfaction first</p>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
