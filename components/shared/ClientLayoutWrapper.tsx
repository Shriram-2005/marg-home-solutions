'use client'

import { usePathname } from 'next/navigation'
import AnnouncementBar from '@/components/shared/AnnouncementBar'
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import WhatsAppButton from '@/components/shared/WhatsAppButton'
import FloatingCallButton from '@/components/shared/FloatingCallButton'
import MobileContactBar from '@/components/shared/MobileContactBar'
import ExitIntentPopup from '@/components/shared/ExitIntentPopup'

export default function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isAdminPage = pathname?.startsWith('/admin')

  // For admin pages, only render children (admin has its own layout)
  if (isAdminPage) {
    return <>{children}</>
  }

  // For customer-facing pages, render all components
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      {children}
      <Footer />
      <WhatsAppButton />
      <FloatingCallButton />
      <MobileContactBar />
      <ExitIntentPopup />
    </>
  )
}
