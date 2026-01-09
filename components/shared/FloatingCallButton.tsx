"use client"

import { Phone } from 'lucide-react'

export default function FloatingCallButton() {
  const phoneNumber = "+919876543210"

  const handleClick = () => {
    // Track query in localStorage for admin panel
    const query = {
      id: Date.now().toString(),
      source: 'Call Button Click',
      timestamp: new Date().toISOString(),
      resolved: false
    }
    const existing = JSON.parse(localStorage.getItem('customerQueries') || '[]')
    localStorage.setItem('customerQueries', JSON.stringify([...existing, query]))
  }

  return (
    <a
      href={`tel:${phoneNumber}`}
      onClick={handleClick}
      className="fixed bottom-24 right-6 z-50 hidden md:flex items-center gap-3 bg-brand-navy text-white px-6 py-4 rounded-full shadow-2xl hover:bg-brand-navy-light transition-all duration-300 hover:scale-110 group"
      aria-label="Call us"
    >
      <Phone className="h-6 w-6 animate-pulse" />
      <span className="font-semibold">Call us now</span>
    </a>
  )
}
