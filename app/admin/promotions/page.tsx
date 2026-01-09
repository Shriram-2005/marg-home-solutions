'use client'

import { useState, useEffect } from 'react'
import { Megaphone, Eye, Save, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function PromotionsPage() {
  const [announcement, setAnnouncement] = useState({
    text: "🎉 Republic Day Sale - Up to 40% OFF on All Solar Solutions!",
    link: "/products",
    active: true
  })

  const [heroBanner, setHeroBanner] = useState({
    title: "Republic Day Mega Sale",
    subtitle: "Get Up to 40% OFF + Government Subsidy",
    buttonText: "Claim Offer Now",
    validUntil: "2026-01-26",
    active: true
  })

  const [saved, setSaved] = useState(false)

  useEffect(() => {
    const savedAnnouncement = localStorage.getItem('promotionAnnouncement')
    const savedBanner = localStorage.getItem('promotionBanner')
    
    if (savedAnnouncement) setAnnouncement(JSON.parse(savedAnnouncement))
    if (savedBanner) setHeroBanner(JSON.parse(savedBanner))
  }, [])

  const saveChanges = () => {
    localStorage.setItem('promotionAnnouncement', JSON.stringify(announcement))
    localStorage.setItem('promotionBanner', JSON.stringify(heroBanner))
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  return (
    <div className="p-6 lg:p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Promotions Management</h1>
        <p className="text-gray-600">Update offers, banners, and promotional content</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <div className="flex items-center gap-3 mb-4">
          <Megaphone className="h-6 w-6 text-brand-navy" />
          <h2 className="text-xl font-bold text-gray-900">Announcement Bar</h2>
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Announcement Text</label>
            <Input value={announcement.text} onChange={(e) => setAnnouncement({ ...announcement, text: e.target.value })} />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Link URL</label>
            <Input value={announcement.link} onChange={(e) => setAnnouncement({ ...announcement, link: e.target.value })} />
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" checked={announcement.active} onChange={(e) => setAnnouncement({ ...announcement, active: e.target.checked })} className="rounded border-gray-300" />
            <label className="text-sm text-gray-700">Active</label>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <div className="flex items-center gap-3 mb-4">
          <Eye className="h-6 w-6 text-brand-navy" />
          <h2 className="text-xl font-bold text-gray-900">Hero Banner</h2>
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
            <Input value={heroBanner.title} onChange={(e) => setHeroBanner({ ...heroBanner, title: e.target.value })} />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Subtitle</label>
            <Input value={heroBanner.subtitle} onChange={(e) => setHeroBanner({ ...heroBanner, subtitle: e.target.value })} />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Button Text</label>
            <Input value={heroBanner.buttonText} onChange={(e) => setHeroBanner({ ...heroBanner, buttonText: e.target.value })} />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Valid Until</label>
            <Input type="date" value={heroBanner.validUntil} onChange={(e) => setHeroBanner({ ...heroBanner, validUntil: e.target.value })} />
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" checked={heroBanner.active} onChange={(e) => setHeroBanner({ ...heroBanner, active: e.target.checked })} className="rounded border-gray-300" />
            <label className="text-sm text-gray-700">Active</label>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Preview</h2>
        {announcement.active && (
          <div className="bg-brand-gold text-brand-navy-dark p-3 rounded-lg mb-4 text-center">{announcement.text}</div>
        )}
        {heroBanner.active && (
          <div className="bg-gradient-to-br from-brand-navy via-brand-navy-light to-brand-navy-dark p-8 rounded-lg text-white text-center">
            <h1 className="text-3xl font-bold mb-2">{heroBanner.title}</h1>
            <p className="text-xl mb-4">{heroBanner.subtitle}</p>
            <button className="bg-brand-gold text-brand-navy px-6 py-3 rounded-lg font-semibold">{heroBanner.buttonText}</button>
            <p className="text-sm mt-4 text-gray-300">Valid until: {new Date(heroBanner.validUntil).toLocaleDateString()}</p>
          </div>
        )}
      </div>

      <div className="flex justify-end gap-3 mb-6">
        {saved && (
          <div className="flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-lg font-semibold">
            <CheckCircle className="h-5 w-5" />
            Saved!
          </div>
        )}
        <Button onClick={saveChanges} className="bg-brand-navy hover:bg-brand-navy-light">
          <Save className="h-4 w-4 mr-2" />
          Save Changes
        </Button>
      </div>

      <div className="bg-blue-50 rounded-xl p-6">
        <h3 className="font-semibold text-brand-navy mb-2">💡 How It Works</h3>
        <ul className="text-sm text-gray-700 space-y-1">
          <li>✅ Changes apply to customer website immediately</li>
          <li>✅ Refresh homepage to see updates</li>
        </ul>
      </div>
    </div>
  )
}
