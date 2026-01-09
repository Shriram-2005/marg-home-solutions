"use client"

import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  const phoneNumber = "919876543210" // Replace with actual WhatsApp business number
  const message = "Hi! I'm interested in your solar and water solutions. Can you help me?"

  const handleClick = () => {
    // Track query in localStorage for admin panel
    const query = {
      id: Date.now().toString(),
      source: 'WhatsApp Button Click',
      timestamp: new Date().toISOString(),
      resolved: false
    }
    const existing = JSON.parse(localStorage.getItem('customerQueries') || '[]')
    localStorage.setItem('customerQueries', JSON.stringify([...existing, query]))

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 hidden md:flex items-center gap-3 bg-[#25D366] text-white px-6 py-4 rounded-full shadow-2xl hover:bg-[#20BA5A] transition-all duration-300 hover:scale-110 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-6 w-6 animate-pulse" />
      <span className="font-semibold">Chat with us</span>
    </button>
  )
}
