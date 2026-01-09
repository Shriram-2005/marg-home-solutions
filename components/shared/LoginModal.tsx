"use client"

import { useState } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Phone, KeyRound } from 'lucide-react'

interface LoginModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function LoginModal({ open, onOpenChange }: LoginModalProps) {
  const [step, setStep] = useState<'phone' | 'otp'>('phone')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [otp, setOtp] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSendOTP = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (phoneNumber.length < 10) {
      alert('Please enter a valid phone number')
      return
    }

    setLoading(true)
    // Simulate OTP sending
    setTimeout(() => {
      console.log('OTP sent to:', phoneNumber)
      alert(`OTP sent to ${phoneNumber}`)
      setStep('otp')
      setLoading(false)
    }, 1000)
  }

  const handleVerifyOTP = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (otp.length !== 6) {
      alert('Please enter a valid 6-digit OTP')
      return
    }

    setLoading(true)
    // Simulate OTP verification
    setTimeout(() => {
      console.log('OTP verified:', otp)
      alert('Login successful!')
      setLoading(false)
      onOpenChange(false)
      // Reset form
      setStep('phone')
      setPhoneNumber('')
      setOtp('')
    }, 1000)
  }

  const handleBack = () => {
    setStep('phone')
    setOtp('')
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-brand-navy">
            {step === 'phone' ? 'Sign In' : 'Verify OTP'}
          </DialogTitle>
          <DialogDescription>
            {step === 'phone'
              ? 'Enter your mobile number to receive an OTP'
              : `Enter the 6-digit OTP sent to ${phoneNumber}`}
          </DialogDescription>
        </DialogHeader>

        {step === 'phone' ? (
          <form onSubmit={handleSendOTP} className="space-y-4">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Mobile Number
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="pl-10"
                  required
                  maxLength={10}
                />
              </div>
              <p className="text-xs text-gray-500 mt-1">
                We'll send you a one-time password
              </p>
            </div>

            <Button
              type="submit"
              className="w-full bg-brand-navy hover:bg-brand-navy-light text-white font-semibold"
              disabled={loading}
            >
              {loading ? 'Sending OTP...' : 'Send OTP'}
            </Button>
          </form>
        ) : (
          <form onSubmit={handleVerifyOTP} className="space-y-4">
            <div>
              <label htmlFor="otp" className="block text-sm font-medium text-gray-700 mb-2">
                Enter OTP
              </label>
              <div className="relative">
                <KeyRound className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  id="otp"
                  type="text"
                  placeholder="123456"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                  className="pl-10 text-center text-2xl tracking-widest"
                  required
                  maxLength={6}
                />
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Didn't receive? <button type="button" onClick={handleSendOTP} className="text-brand-navy font-semibold">Resend OTP</button>
              </p>
            </div>

            <div className="flex gap-3">
              <Button
                type="button"
                variant="outline"
                className="flex-1"
                onClick={handleBack}
              >
                Back
              </Button>
              <Button
                type="submit"
                className="flex-1 bg-brand-navy hover:bg-brand-navy-light text-white font-semibold"
                disabled={loading}
              >
                {loading ? 'Verifying...' : 'Verify & Login'}
              </Button>
            </div>
          </form>
        )}

        <div className="text-center text-xs text-gray-500 mt-4">
          By continuing, you agree to our Terms of Service and Privacy Policy
        </div>
      </DialogContent>
    </Dialog>
  )
}
