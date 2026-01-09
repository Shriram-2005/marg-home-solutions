"use client"

import { Phone, MessageCircle } from 'lucide-react'

export default function MobileContactBar() {
  const phoneNumber = "+919876543210"
  const whatsappNumber = "919876543210"
  const whatsappMessage = "Hi! I'm interested in your solar and water solutions."

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white border-t-2 border-brand-gold shadow-2xl">
      <div className="grid grid-cols-2 gap-0">
        {/* Call Button */}
        <a
          href={`tel:${phoneNumber}`}
          className="flex items-center justify-center gap-2 bg-brand-navy text-white py-4 hover:bg-brand-navy-light transition-colors"
        >
          <Phone className="h-5 w-5" />
          <span className="font-semibold">Call Now</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-4 hover:bg-[#20BA5A] transition-colors"
        >
          <MessageCircle className="h-5 w-5" />
          <span className="font-semibold">WhatsApp</span>
        </a>
      </div>
    </div>
  )
}
