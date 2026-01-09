"use client"

import Link from 'next/link'
import { Menu, ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null)

  const navItems = [
    { href: '/', label: 'Home' },
    {
      label: 'Solar Solutions',
      dropdown: [
        { href: '/solar/rooftop', label: 'Rooftop Solar' },
        { href: '/solar/water-heaters', label: 'Solar Water Heaters' },
      ],
    },
    {
      label: 'Water Solutions',
      dropdown: [
        { href: '/water/heat-pumps', label: 'Heat Pumps' },
        { href: '/water/pressure-pumps', label: 'Pressure Pumps' },
        { href: '/water/softeners', label: 'Water Softeners' },
      ],
    },
    { href: '/power-backup', label: 'Power Backup' },
    { href: '/about', label: 'About Us' },
    { href: '/faq', label: 'FAQ' },
  ]

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-brand-cream bg-white/95 backdrop-blur-md supports-[backdrop-filter]:bg-white/90 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between gap-8">
          {/* Logo */}
          <Link href="/" className="text-xl lg:text-2xl font-bold text-brand-navy whitespace-nowrap flex-shrink-0">
            Marg Home Solutions
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex items-center space-x-2 flex-1 justify-center">
            {navItems.map((item, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => item.dropdown && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {item.dropdown ? (
                  <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors hover:text-brand-navy text-gray-700">
                    {item.label}
                    <ChevronDown className="h-4 w-4" />
                  </button>
                ) : (
                  <Link
                    href={item.href || '#'}
                    className="px-3 py-2 text-sm font-medium transition-colors hover:text-brand-navy text-gray-700"
                  >
                    {item.label}
                  </Link>
                )}

                {/* Dropdown Menu */}
                {item.dropdown && openDropdown === item.label && (
                  <div className="absolute left-0 top-full mt-1 w-56 rounded-lg border border-brand-cream bg-white shadow-xl">
                    <div className="py-2">
                      {item.dropdown.map((dropItem) => (
                        <Link
                          key={dropItem.href}
                          href={dropItem.href}
                          className="block px-4 py-2 text-sm hover:bg-brand-cream transition-colors text-gray-700"
                        >
                          {dropItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Get Quote Button */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            <Link href="/contact">
              <Button
                size="sm"
                className="bg-brand-gold text-brand-navy-dark hover:bg-brand-gold-light font-semibold whitespace-nowrap"
              >
                Get Quote
              </Button>
            </Link>
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden flex-shrink-0">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <div className="flex flex-col space-y-1 mt-8">
                {navItems.map((item, index) => (
                  <div key={index}>
                    {item.dropdown ? (
                      <div>
                        <button
                          onClick={() =>
                            setMobileDropdown(
                              mobileDropdown === item.label ? null : item.label
                            )
                          }
                          className="flex items-center justify-between w-full px-2 py-3 text-base font-medium transition-colors hover:text-brand-navy text-gray-700"
                        >
                          {item.label}
                          <ChevronDown
                            className={`h-4 w-4 transition-transform ${
                              mobileDropdown === item.label ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                        {mobileDropdown === item.label && (
                          <div className="ml-4 space-y-1 pb-2">
                            {item.dropdown.map((dropItem) => (
                              <Link
                                key={dropItem.href}
                                href={dropItem.href}
                                onClick={() => setIsOpen(false)}
                                className="block px-2 py-2 text-sm text-gray-600 hover:text-brand-navy transition-colors"
                              >
                                {dropItem.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={item.href || '#'}
                        onClick={() => setIsOpen(false)}
                        className="block px-2 py-3 text-base font-medium transition-colors hover:text-brand-navy text-gray-700"
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  <Button
                    className="mt-4 w-full bg-brand-gold text-brand-navy-dark hover:bg-brand-gold-light font-semibold"
                  >
                    Get Quote
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
