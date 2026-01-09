'use client'

import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { 
  LayoutDashboard, 
  Users, 
  MessageSquare, 
  FileText, 
  Settings,
  LogOut,
  Menu,
  X,
  Megaphone,
  Home
} from 'lucide-react'
import Link from 'next/link'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    const auth = localStorage.getItem('adminAuth')
    if (!auth && pathname !== '/admin') {
      router.push('/admin')
    } else {
      setIsAuthenticated(true)
    }
  }, [pathname, router])

  const handleLogout = () => {
    localStorage.removeItem('adminAuth')
    router.push('/admin')
  }

  // Don't show sidebar on login page
  if (pathname === '/admin') {
    return <>{children}</>
  }

  if (!isAuthenticated) {
    return null
  }

  const navigation = [
    { name: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
    { name: 'Leads', href: '/admin/leads', icon: Users },
    { name: 'Queries', href: '/admin/queries', icon: MessageSquare },
    { name: 'Promotions', href: '/admin/promotions', icon: Megaphone },
    { name: 'Reports', href: '/admin/reports', icon: FileText },
    { name: 'Settings', href: '/admin/settings', icon: Settings },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile menu button */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-brand-navy text-white rounded-lg"
      >
        {sidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Sidebar */}
      <aside className={`
        fixed top-0 left-0 z-40 w-64 h-screen bg-gradient-to-b from-brand-navy-dark via-brand-navy to-brand-navy-light text-white transition-transform duration-300 shadow-2xl
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="h-full flex flex-col">
          {/* Logo */}
          <div className="p-6 border-b border-brand-gold/20 bg-brand-navy-dark/50">
            <h1 className="text-2xl font-bold text-brand-gold font-['var(--font-oswald)'] tracking-wide">Marg Admin</h1>
            <p className="text-sm text-brand-cream/70 mt-1">Control Center</p>
          </div>

          {/* Back to Website */}
          <Link
            href="/"
            className="mx-4 mt-4 flex items-center gap-3 px-4 py-3 rounded-xl bg-brand-gold/10 hover:bg-brand-gold/20 text-brand-gold hover:text-white transition-all border border-brand-gold/20"
          >
            <Home className="h-5 w-5" />
            <span className="font-medium">Back to Website</span>
          </Link>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2 mt-2">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              const Icon = item.icon
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className={`
                    flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium
                    ${isActive 
                      ? 'bg-gradient-to-r from-brand-gold to-yellow-500 text-brand-navy-dark shadow-lg transform scale-105' 
                      : 'hover:bg-white/10 text-brand-cream/80 hover:text-white hover:translate-x-1'
                    }
                  `}
                >
                  <Icon className="h-5 w-5" />
                  <span>{item.name}</span>
                </Link>
              )
            })}
          </nav>

          {/* Logout */}
          <div className="p-4 border-t border-brand-gold/20 bg-brand-navy-dark/50">
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-red-500/20 text-red-400 hover:text-red-300 transition-all border border-red-500/20 hover:border-red-500/40 font-medium"
            >
              <LogOut className="h-5 w-5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main className="lg:ml-64 min-h-screen bg-gradient-to-br from-brand-cream via-white to-brand-cream/50">
        {children}
      </main>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  )
}
