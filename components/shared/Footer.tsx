import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-brand-navy-dark text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Column 1: Company Info & Address */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Marg Home Solutions</h3>
            <p className="text-sm mb-4">
              Your trusted partner for premium solar, water, and power backup solutions.
            </p>
            <div className="flex items-start gap-2 text-sm">
              <MapPin className="h-5 w-5 text-brand-gold flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-white">Bengaluru Office</p>
                <p className="text-gray-400">Karnataka, India</p>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Our Solutions</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/solar/rooftop" className="hover:text-white transition">
                  Solar Solutions
                </Link>
              </li>
              <li>
                <Link href="/water/heat-pumps" className="hover:text-white transition">
                  Water Solutions
                </Link>
              </li>
              <li>
                <Link href="/power-backup" className="hover:text-white transition">
                  Power Backup
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Brands We Trust */}
          <div>
            <h4 className="text-white font-semibold mb-4">Brands We Trust</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-brand-gold rounded-full"></span>
                Racold
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-brand-gold rounded-full"></span>
                Grundfos
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-brand-gold rounded-full"></span>
                Solahart
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-brand-gold rounded-full"></span>
                AO Smith
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Get In Touch</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-brand-gold" />
                <a href="tel:+911234567890" className="hover:text-white transition">
                  +91 12345 67890
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-brand-gold" />
                <a href="mailto:info@marghomesolutions.com" className="hover:text-white transition">
                  info@marghomesolutions.com
                </a>
              </li>
              <li className="mt-4">
                <Link 
                  href="/contact"
                  className="inline-block bg-brand-gold text-brand-navy-dark px-4 py-2 rounded-md hover:bg-brand-gold-light transition text-sm font-semibold"
                >
                  Request a Quote
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {currentYear} Marg Home Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
