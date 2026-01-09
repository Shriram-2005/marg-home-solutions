'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Lock, User, Shield, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'

export default function AdminLogin() {
  const router = useRouter()
  const [credentials, setCredentials] = useState({ username: '', password: '' })
  const [error, setError] = useState('')

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Simple authentication - replace with real auth in production
    if (credentials.username === 'admin' && credentials.password === 'marg@2026') {
      localStorage.setItem('adminAuth', 'true')
      router.push('/admin/dashboard')
    } else {
      setError('Invalid credentials')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-navy via-brand-navy-light to-brand-navy-dark flex items-center justify-center p-4 relative">
      {/* Back to Home */}
      <Link 
        href="/"
        className="absolute top-6 left-6 flex items-center gap-2 text-white hover:text-brand-gold transition-colors"
      >
        <ArrowLeft className="h-5 w-5" />
        <span className="font-medium">Back to Home</span>
      </Link>

      <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-10 w-full max-w-md border border-brand-gold/20">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-brand-navy to-brand-navy-light rounded-2xl mb-4 shadow-lg">
            <Shield className="h-10 w-10 text-brand-gold" />
          </div>
          <h1 className="text-4xl font-bold text-brand-navy mb-2 font-['var(--font-oswald)']">Admin Portal</h1>
          <p className="text-gray-600 text-lg">Marg Home Solutions</p>
          <div className="w-20 h-1 bg-brand-gold mx-auto mt-3 rounded-full"></div>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Username
            </label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-brand-navy/50" />
              <Input
                type="text"
                value={credentials.username}
                onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                className="pl-12 h-12 border-brand-navy/20 focus:border-brand-gold focus:ring-brand-gold"
                placeholder="Enter username"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-brand-navy/50" />
              <Input
                type="password"
                value={credentials.password}
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                className="pl-12 h-12 border-brand-navy/20 focus:border-brand-gold focus:ring-brand-gold"
                placeholder="Enter password"
                required
              />
            </div>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 p-4 rounded-xl text-sm font-medium">
              {error}
            </div>
          )}

          <Button type="submit" className="w-full h-12 bg-gradient-to-r from-brand-navy to-brand-navy-light hover:from-brand-navy-light hover:to-brand-navy text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all">
            Sign In to Dashboard
          </Button>
        </form>

        <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-brand-gold/20">
          <p className="text-sm text-gray-700 text-center font-medium">
            🔐 Demo: <span className="text-brand-navy font-bold">admin</span> / <span className="text-brand-navy font-bold">marg@2026</span>
          </p>
        </div>
      </div>
    </div>
  )
}
