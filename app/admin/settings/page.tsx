'use client'

import { useState, useEffect } from 'react'
import { Settings as SettingsIcon, Bell, Database, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function SettingsPage() {
  const [businessInfo, setBusinessInfo] = useState({
    name: 'Marg Home Solutions',
    phone: '+91 98765 43210',
    whatsapp: '+91 98765 43210',
    email: 'info@marghomesolutions.com'
  })

  const [notifications, setNotifications] = useState({
    emailLeads: true,
    smsAlerts: true,
    dailyReports: false
  })

  const [saved, setSaved] = useState(false)

  useEffect(() => {
    const savedInfo = localStorage.getItem('businessInfo')
    const savedNotifications = localStorage.getItem('notificationSettings')
    
    if (savedInfo) setBusinessInfo(JSON.parse(savedInfo))
    if (savedNotifications) setNotifications(JSON.parse(savedNotifications))
  }, [])

  const saveSettings = () => {
    localStorage.setItem('businessInfo', JSON.stringify(businessInfo))
    localStorage.setItem('notificationSettings', JSON.stringify(notifications))
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  const clearAllLeads = () => {
    if (confirm('⚠️ Delete ALL leads and queries permanently?')) {
      localStorage.removeItem('contactSubmissions')
      localStorage.removeItem('customerQueries')
      alert('All data cleared!')
      window.location.reload()
    }
  }

  const exportAllData = () => {
    const leads = localStorage.getItem('contactSubmissions') || '[]'
    const queries = localStorage.getItem('customerQueries') || '[]'
    const data = { leads: JSON.parse(leads), queries: JSON.parse(queries), exportDate: new Date().toISOString() }
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `marg-data-${new Date().toISOString().split('T')[0]}.json`
    a.click()
  }

  return (
    <div className="p-6 lg:p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Settings</h1>
        <p className="text-gray-600">Manage preferences</p>
      </div>

      <div className="space-y-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center gap-3 mb-4">
            <SettingsIcon className="h-6 w-6 text-brand-navy" />
            <h2 className="text-xl font-bold">Business Information</h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Business Name</label>
              <Input value={businessInfo.name} onChange={(e) => setBusinessInfo({...businessInfo, name: e.target.value})} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Contact Phone</label>
              <Input value={businessInfo.phone} onChange={(e) => setBusinessInfo({...businessInfo, phone: e.target.value})} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">WhatsApp Number</label>
              <Input value={businessInfo.whatsapp} onChange={(e) => setBusinessInfo({...businessInfo, whatsapp: e.target.value})} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <Input value={businessInfo.email} onChange={(e) => setBusinessInfo({...businessInfo, email: e.target.value})} />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center gap-3 mb-4">
            <Bell className="h-6 w-6 text-brand-navy" />
            <h2 className="text-xl font-bold">Notifications</h2>
          </div>
          <div className="space-y-3">
            <label className="flex items-center gap-3">
              <input type="checkbox" checked={notifications.emailLeads} onChange={(e) => setNotifications({...notifications, emailLeads: e.target.checked})} className="rounded border-gray-300" />
              <span className="text-gray-700">Email notifications for new leads</span>
            </label>
            <label className="flex items-center gap-3">
              <input type="checkbox" checked={notifications.smsAlerts} onChange={(e) => setNotifications({...notifications, smsAlerts: e.target.checked})} className="rounded border-gray-300" />
              <span className="text-gray-700">SMS alerts for urgent queries</span>
            </label>
            <label className="flex items-center gap-3">
              <input type="checkbox" checked={notifications.dailyReports} onChange={(e) => setNotifications({...notifications, dailyReports: e.target.checked})} className="rounded border-gray-300" />
              <span className="text-gray-700">Daily summary reports</span>
            </label>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center gap-3 mb-4">
            <Database className="h-6 w-6 text-brand-navy" />
            <h2 className="text-xl font-bold">Data Management</h2>
          </div>
          <div className="space-y-3">
            <Button onClick={exportAllData} variant="outline" className="w-full justify-start">Export All Data</Button>
            <Button onClick={clearAllLeads} variant="outline" className="w-full justify-start text-red-600 hover:text-red-700">Clear All Leads (Dangerous)</Button>
          </div>
        </div>

        <div className="flex justify-end gap-3">
          {saved && (
            <div className="flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-lg font-semibold">
              <CheckCircle className="h-5 w-5" />
              Saved!
            </div>
          )}
          <Button onClick={saveSettings} className="bg-brand-navy hover:bg-brand-navy-light">Save Settings</Button>
        </div>
      </div>
    </div>
  )
}
