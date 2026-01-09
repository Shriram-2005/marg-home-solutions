"use client"

import { useState, useEffect } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Phone, Gift, X } from 'lucide-react'

export default function ExitIntentPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasShown, setHasShown] = useState(false)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // Check if user has already seen the popup in this session
    const popupShown = sessionStorage.getItem('exitPopupShown')
    if (popupShown) {
      setHasShown(true)
      return
    }

    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger if mouse leaves from the top of the page (towards address bar/close button)
      if (e.clientY <= 0 && !hasShown) {
        setIsOpen(true)
        setHasShown(true)
        sessionStorage.setItem('exitPopupShown', 'true')
      }
    }

    // Add event listener after 3 seconds (to avoid immediate trigger)
    const timer = setTimeout(() => {
      document.addEventListener('mouseleave', handleMouseLeave)
    }, 3000)

    return () => {
      clearTimeout(timer)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [hasShown])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!phone || phone.length < 10) {
      alert('Please enter a valid phone number')
      return
    }

    setLoading(true)
    // Simulate API call
    setTimeout(() => {
      console.log('Free consultation requested:', { name, phone })
      alert('Thank you! Our team will call you within 24 hours.')
      setLoading(false)
      setIsOpen(false)
      setName('')
      setPhone('')
    }, 1000)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-md">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-offset-2"
        >
          <X className="h-4 w-4" />
        </button>

        <DialogHeader>
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-gold/10">
            <Gift className="h-8 w-8 text-brand-gold" />
          </div>
          <DialogTitle className="text-center text-2xl font-bold text-brand-navy">
            Wait! Don't Miss This Offer
          </DialogTitle>
          <DialogDescription className="text-center text-base">
            Get a <span className="font-bold text-brand-gold">FREE Site Survey & Consultation</span> worth ₹2,500!
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div>
            <Input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full"
            />
          </div>

          <div>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="tel"
                placeholder="Mobile Number *"
                value={phone}
                onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                className="w-full pl-10"
                required
                maxLength={10}
              />
            </div>
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-brand-gold text-brand-navy-dark hover:bg-brand-gold-light font-semibold text-lg py-6"
          >
            {loading ? 'Sending...' : 'Claim FREE Consultation Now!'}
          </Button>

          <div className="space-y-2 text-center text-sm text-gray-600">
            <p>✓ No obligations • No hidden charges</p>
            <p>✓ Expert guidance • Custom solutions</p>
            <p className="text-xs mt-3">Limited slots available this week!</p>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
