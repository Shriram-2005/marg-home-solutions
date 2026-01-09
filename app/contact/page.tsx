import ContactForm from '@/components/shared/ContactForm'
import SectionHeader from '@/components/shared/SectionHeader'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-brand-cream">
      {/* Hero Section */}
      <section className="relative min-h-[400px] flex items-center justify-center bg-gradient-to-br from-brand-navy via-brand-navy-light to-brand-navy-dark">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 py-20 relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-['var(--font-oswald)'] uppercase tracking-tight">Get In Touch</h1>
          <p className="text-lg md:text-xl text-brand-cream max-w-2xl mx-auto">
            Ready to transform your home with sustainable solutions? Contact us today.
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <SectionHeader
                title="Contact Information"
                subtitle="Reach out to us through any of these channels"
                centered={false}
              />
              
              <div className="space-y-6 mt-8">
                <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                  <MapPin className="h-6 w-6 text-brand-gold flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-brand-navy mb-1">Address</h3>
                    <p className="text-gray-600">
                      Bengaluru, Karnataka<br />
                      India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                  <Phone className="h-6 w-6 text-brand-gold flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-brand-navy mb-1">Phone</h3>
                    <a href="tel:+911234567890" className="text-gray-600 hover:text-brand-navy">
                      +91 12345 67890
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                  <Mail className="h-6 w-6 text-brand-gold flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-brand-navy mb-1">Email</h3>
                    <a href="mailto:info@marghomesolutions.com" className="text-gray-600 hover:text-brand-navy">
                      info@marghomesolutions.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                  <Clock className="h-6 w-6 text-brand-gold flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-brand-navy mb-1">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Saturday: 9:00 AM - 6:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="py-0">
        <div className="w-full h-[400px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.90089943405!2d77.46612499453124!3d12.954294299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1704710400000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Marg Solutions Location - Bengaluru"
          ></iframe>
        </div>
      </section>
    </main>
  )
}
