'use client'

import { useEffect, useState } from 'react'
import { 
  Users, 
  MessageSquare, 
  Phone, 
  TrendingUp,
  Calendar,
  Clock
} from 'lucide-react'

interface Stats {
  totalLeads: number
  newLeadsToday: number
  totalQueries: number
  pendingQueries: number
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats>({
    totalLeads: 0,
    newLeadsToday: 0,
    totalQueries: 0,
    pendingQueries: 0
  })
  const [recentLeads, setRecentLeads] = useState<any[]>([])

  useEffect(() => {
    // Load data from localStorage
    const leads = JSON.parse(localStorage.getItem('contactSubmissions') || '[]')
    const queries = JSON.parse(localStorage.getItem('customerQueries') || '[]')
    
    const today = new Date().toDateString()
    const leadsToday = leads.filter((lead: any) => 
      new Date(lead.timestamp).toDateString() === today
    ).length

    setStats({
      totalLeads: leads.length,
      newLeadsToday: leadsToday,
      totalQueries: queries.length,
      pendingQueries: queries.filter((q: any) => !q.resolved).length
    })

    // Get recent 5 leads
    setRecentLeads(leads.slice(-5).reverse())
  }, [])

  const statCards = [
    {
      title: 'Total Leads',
      value: stats.totalLeads,
      icon: Users,
      color: 'bg-blue-500',
      change: `+${stats.newLeadsToday} today`
    },
    {
      title: 'Total Queries',
      value: stats.totalQueries,
      icon: MessageSquare,
      color: 'bg-green-500',
      change: `${stats.pendingQueries} pending`
    },
    {
      title: 'Phone Calls',
      value: '24',
      icon: Phone,
      color: 'bg-purple-500',
      change: '+6 today'
    },
    {
      title: 'Conversion Rate',
      value: '32%',
      icon: TrendingUp,
      color: 'bg-orange-500',
      change: '+2.5% this week'
    }
  ]

  return (
    <div className="p-6 lg:p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-brand-navy mb-2 font-['var(--font-oswald)']">Dashboard</h1>
        <p className="text-gray-600 text-lg">Welcome back! Here's what's happening today.</p>
        <div className="w-24 h-1 bg-brand-gold mt-3 rounded-full"></div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {statCards.map((stat) => {
          const Icon = stat.icon
          return (
            <div key={stat.title} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all border border-brand-cream hover:border-brand-gold/30 hover:-translate-y-1">
              <div className="flex items-center justify-between mb-4">
                <div className={`${stat.color} p-4 rounded-xl shadow-md`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
              </div>
              <h3 className="text-gray-600 text-sm font-semibold mb-1 uppercase tracking-wide">{stat.title}</h3>
              <p className="text-4xl font-bold text-brand-navy mb-2">{stat.value}</p>
              <p className="text-sm text-green-600 font-medium">{stat.change}</p>
            </div>
          )
        })}
      </div>

      {/* Recent Leads */}
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-brand-cream">
          <h2 className="text-2xl font-bold text-brand-navy mb-4 font-['var(--font-oswald)']">Recent Leads</h2>
          <div className="space-y-4">
            {recentLeads.length === 0 ? (
              <p className="text-gray-500 text-center py-8">No leads yet</p>
            ) : (
              recentLeads.map((lead, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-gradient-to-r from-brand-cream to-white rounded-xl hover:shadow-md transition-all border border-brand-gold/10">
                  <div className="bg-gradient-to-br from-brand-navy to-brand-navy-light p-3 rounded-xl shadow-md">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-brand-navy">{lead.name}</h3>
                    <p className="text-sm text-gray-600">{lead.email}</p>
                    <p className="text-sm text-gray-600">{lead.phone}</p>
                    <p className="text-xs text-gray-500 mt-2 flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {new Date(lead.timestamp).toLocaleString()}
                    </p>
                  </div>
                  <span className="text-xs bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 py-1 rounded-full font-semibold shadow-sm">
                    New
                  </span>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-brand-cream">
          <h2 className="text-2xl font-bold text-brand-navy mb-4 font-['var(--font-oswald)']">Quick Actions</h2>
          <div className="space-y-3">
            <a
              href="/admin/leads"
              className="block p-5 bg-gradient-to-r from-brand-navy to-brand-navy-light text-white rounded-xl hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <h3 className="font-bold mb-1 text-lg">View All Leads</h3>
              <p className="text-sm text-brand-cream/90">Manage and respond to customer inquiries</p>
            </a>
            <a
              href="/admin/queries"
              className="block p-5 bg-gradient-to-r from-green-600 to-emerald-700 text-white rounded-xl hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <h3 className="font-bold mb-1 text-lg">Check Queries</h3>
              <p className="text-sm text-white/90">Review pending customer queries</p>
            </a>
            <a
              href="/admin/promotions"
              className="block p-5 bg-gradient-to-r from-purple-600 to-violet-700 text-white rounded-xl hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <h3 className="font-bold mb-1 text-lg">Update Promotions</h3>
              <p className="text-sm text-white/90">Manage offers and banners</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
