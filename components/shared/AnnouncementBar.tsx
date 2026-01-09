"use client"

import { X } from 'lucide-react'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(false)
  const [announcement, setAnnouncement] = useState({
    text: "",
    link: "/products",
    active: false
  })

  useEffect(() => {
    // Load announcement from localStorage (admin-updated)
    const savedAnnouncement = localStorage.getItem('promotionAnnouncement')
    if (savedAnnouncement) {
      const data = JSON.parse(savedAnnouncement)
      setAnnouncement(data)
      
      // Check if user has dismissed the announcement
      const dismissed = sessionStorage.getItem('announcementDismissed')
      if (!dismissed && data.active) {
        setIsVisible(true)
      }
    }
  }, [])

  const handleDismiss = () => {
    setIsVisible(false)
    sessionStorage.setItem('announcementDismissed', 'true')
  }

  if (!isVisible || !announcement.active || !announcement.text) {
    return null
  }

  return (
    <div
      className="relative z-50 py-3 px-4 text-center bg-brand-gold text-brand-navy-dark"
    >
      <div className="container mx-auto flex items-center justify-center gap-4">
        <p className="text-sm md:text-base font-semibold flex-1 text-center">
          {announcement.text}
        </p>
        {announcement.link && (
          <Link
            href={announcement.link}
            className="hidden sm:inline-block px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg font-semibold text-sm transition-colors"
          >
            Learn More
          </Link>
        )}
        <button
          onClick={handleDismiss}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-1 hover:bg-white/20 rounded transition-colors"
          aria-label="Dismiss announcement"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
