"use client"

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const validatePhoneNumber = (phone: string): boolean => {
    // Remove all non-digit characters
    const cleaned = phone.replace(/\D/g, '')
    
    // Check if it's a valid Indian phone number (10 digits)
    // or international format (with country code)
    if (cleaned.length === 10) {
      // Indian mobile numbers start with 6-9
      return /^[6-9]\d{9}$/.test(cleaned)
    } else if (cleaned.length === 12 && cleaned.startsWith('91')) {
      // With +91 country code
      return /^91[6-9]\d{9}$/.test(cleaned)
    }
    return false
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate phone number
    if (!formData.phone) {
      alert('❌ Phone number is required')
      return
    }

    if (!validatePhoneNumber(formData.phone)) {
      alert('❌ Please enter a valid Indian phone number (10 digits starting with 6-9)')
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Submit to Web3Forms
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: 'YOUR_WEB3FORMS_ACCESS_KEY', // Replace with your actual key
          name: formData.name,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
          subject: `New Lead: ${formData.service || 'General Inquiry'}`,
          from_name: 'Marg Home Solutions Contact Form'
        })
      })

      const result = await response.json()

      if (result.success) {
        // Save to localStorage for admin panel
        const submission = {
          id: Date.now().toString(),
          name: formData.name,
          email: '',
          phone: formData.phone,
          product: formData.service,
          message: formData.message,
          timestamp: new Date().toISOString(),
          verified: true
        }
        
        const existing = JSON.parse(localStorage.getItem('contactSubmissions') || '[]')
        localStorage.setItem('contactSubmissions', JSON.stringify([...existing, submission]))

        setSubmitStatus('success')
        alert('✅ Thank you! Your inquiry has been submitted successfully. We\'ll contact you soon.')
        
        // Reset form
        setFormData({
          name: '',
          phone: '',
          service: '',
          message: '',
        })
      } else {
        setSubmitStatus('error')
        alert('❌ Something went wrong. Please try again or call us directly.')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
      alert('❌ Network error. Please check your connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="max-w-2xl mx-auto shadow-lg">
      <CardHeader className="bg-gradient-to-r from-brand-navy to-brand-navy-light text-white rounded-t-lg">
        <CardTitle className="text-2xl font-bold text-center">
          Get a Free Consultation
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Name
            </label>
            <Input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name"
              className="w-full"
            />
          </div>

          {/* Phone Number Field - Required */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 12345 67890"
              required
              className="w-full"
            />
          </div>

          {/* Service Needed Dropdown */}
          <div>
            <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
              Service Needed
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full h-10 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
            >
              <option value="">Select a service</option>
              <option value="Solar">Solar Solutions</option>
              <option value="Heat Pump">Heat Pump</option>
              <option value="Water Filter">Water Filter</option>
              <option value="UPS">UPS / Power Backup</option>
            </select>
          </div>

          {/* Message Textarea */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your requirements..."
              rows={5}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting}
            className="w-full bg-brand-sage hover:bg-brand-sage-light text-white font-semibold text-lg py-6 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
          </Button>

          <p className="text-xs text-gray-500 text-center mt-4">
            {submitStatus === 'success' && '✅ Submitted successfully!'}
            {submitStatus === 'error' && '❌ Failed. Please try again.'}
            {submitStatus === 'idle' && 'We\'ll get back to you within 24 hours'}
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
