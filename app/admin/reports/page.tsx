'use client'

import { useEffect, useState } from 'react'
import { BarChart3, TrendingUp, Calendar } from 'lucide-react'

export default function ReportsPage() {
  const [leadsBySource, setLeadsBySource] = useState({ contactForm: 0, whatsapp: 0, phone: 0 })
  const [productCounts, setProductCounts] = useState<Record<string, number>>({})
  const [weeklyData, setWeeklyData] = useState<number[]>([0, 0, 0, 0, 0, 0, 0])

  useEffect(() => {
    const leads = JSON.parse(localStorage.getItem('contactSubmissions') || '[]')
    const queries = JSON.parse(localStorage.getItem('customerQueries') || '[]')

    const contactFormCount = leads.length
    const whatsappCount = queries.filter((q: any) => q.source.includes('WhatsApp')).length
    const phoneCount = queries.filter((q: any) => q.source.includes('Call')).length
    const total = contactFormCount + whatsappCount + phoneCount || 1

    setLeadsBySource({
      contactForm: Math.round((contactFormCount / total) * 100),
      whatsapp: Math.round((whatsappCount / total) * 100),
      phone: Math.round((phoneCount / total) * 100)
    })

    const counts: Record<string, number> = {}
    leads.forEach((lead: any) => { counts[lead.product] = (counts[lead.product] || 0) + 1 })
    setProductCounts(counts)

    const now = new Date()
    const daily = [0, 0, 0, 0, 0, 0, 0]
    const allInteractions = [...leads, ...queries]
    
    allInteractions.forEach((item: any) => {
      const itemDate = new Date(item.timestamp)
      const daysAgo = Math.floor((now.getTime() - itemDate.getTime()) / (1000 * 60 * 60 * 24))
      if (daysAgo >= 0 && daysAgo < 7) daily[6 - daysAgo]++
    })
    
    setWeeklyData(daily)
  }, [])

  const topProducts = Object.entries(productCounts).sort(([, a], [, b]) => b - a).slice(0, 3)

  return (
    <div className="p-6 lg:p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Reports & Analytics</h1>
        <p className="text-gray-600">View performance metrics</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center gap-3 mb-4">
            <BarChart3 className="h-6 w-6 text-brand-navy" />
            <h2 className="text-xl font-bold">Lead Sources</h2>
          </div>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-gray-600">Contact Form</span>
                <span className="font-bold">{leadsBySource.contactForm}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${leadsBySource.contactForm}%` }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-gray-600">WhatsApp</span>
                <span className="font-bold">{leadsBySource.whatsapp}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full" style={{ width: `${leadsBySource.whatsapp}%` }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-gray-600">Phone</span>
                <span className="font-bold">{leadsBySource.phone}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-purple-600 h-2 rounded-full" style={{ width: `${leadsBySource.phone}%` }}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center gap-3 mb-4">
            <TrendingUp className="h-6 w-6 text-brand-navy" />
            <h2 className="text-xl font-bold">Popular Products</h2>
          </div>
          <div className="space-y-3">
            {topProducts.length === 0 ? (
              <p className="text-gray-500 text-center py-4">No data yet</p>
            ) : (
              topProducts.map(([product, count]) => (
                <div key={product} className="flex justify-between p-3 bg-gray-50 rounded-lg">
                  <span>{product}</span>
                  <span className="font-bold text-brand-navy">{count}</span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center gap-3 mb-6">
          <Calendar className="h-6 w-6 text-brand-navy" />
          <h2 className="text-xl font-bold">Weekly Trends</h2>
        </div>
        <div className="h-64 flex items-end justify-between gap-2">
          {weeklyData.map((value, index) => {
            const maxValue = Math.max(...weeklyData, 1)
            const height = (value / maxValue) * 100
            return (
              <div key={index} className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full bg-brand-navy rounded-t hover:bg-brand-navy-light transition-colors relative group" style={{ height: `${height}%` }}>
                  <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold opacity-0 group-hover:opacity-100">{value}</span>
                </div>
                <span className="text-xs text-gray-600">{['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][index]}</span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
