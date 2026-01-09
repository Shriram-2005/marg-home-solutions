/**
 * PROMOTIONAL CONTENT CONFIGURATION
 * 
 * Update this file to change festival offers, banners, and promotional content
 * Last Updated: January 2026
 */

export interface Promotion {
  id: string
  active: boolean
  type: 'banner' | 'hero' | 'popup' | 'announcement'
  title: string
  subtitle?: string
  description?: string
  image?: string
  ctaText?: string
  ctaLink?: string
  validFrom?: string
  validUntil?: string
  backgroundColor?: string
  textColor?: string
}

// TOP ANNOUNCEMENT BAR - Appears at very top of website
export const announcementBar: Promotion = {
  id: 'announcement-jan-2026',
  active: true, // Set to false to hide
  type: 'announcement',
  title: '🎉 Republic Day Sale: Get Up to 25% OFF on Solar Installations + FREE Site Survey!',
  ctaText: 'Claim Offer',
  ctaLink: '/contact',
  validUntil: '2026-01-31',
  backgroundColor: '#d4af37', // brand-gold
  textColor: '#0f1f3d', // brand-navy-dark
}

// HERO BANNER - Large promotional section on homepage
export const heroBanner: Promotion = {
  id: 'hero-jan-2026',
  active: true, // Set to false to hide
  type: 'hero',
  title: 'Republic Day Special Offer',
  subtitle: 'Celebrate with Sustainable Energy',
  description: 'Get flat 25% OFF on all solar installations. Limited time offer valid till January 31st, 2026.',
  image: '/images/promotions/republic-day-sale.jpg', // Add your image to public/images/promotions/
  ctaText: 'Get Quote Now',
  ctaLink: '/contact',
  validFrom: '2026-01-15',
  validUntil: '2026-01-31',
}

// FEATURED OFFERS - Multiple offers shown in grid
export const featuredOffers: Promotion[] = [
  {
    id: 'solar-discount',
    active: true,
    type: 'banner',
    title: '25% OFF',
    subtitle: 'Rooftop Solar Systems',
    description: 'Complete installation with 25-year warranty',
    ctaText: 'Learn More',
    ctaLink: '/solar/rooftop',
    backgroundColor: '#1e3a5f',
    textColor: '#ffffff',
  },
  {
    id: 'water-heater-offer',
    active: true,
    type: 'banner',
    title: 'FREE Installation',
    subtitle: 'Solar Water Heaters',
    description: 'Premium Solahart & Racold models',
    ctaText: 'View Products',
    ctaLink: '/solar/water-heaters',
    backgroundColor: '#d4af37',
    textColor: '#0f1f3d',
  },
  {
    id: 'heat-pump-discount',
    active: true,
    type: 'banner',
    title: '₹10,000 OFF',
    subtitle: 'Heat Pump Water Heaters',
    description: 'Save up to 70% on electricity bills',
    ctaText: 'Explore',
    ctaLink: '/water/heat-pumps',
    backgroundColor: '#8b9d83',
    textColor: '#ffffff',
  },
]

// MONTHLY UPDATES - Easy template for monthly promotional changes
export const monthlyPromotion = {
  month: 'January',
  year: 2026,
  theme: 'Republic Day Sale',
  offers: [
    '25% OFF on Solar Installations',
    'FREE Site Survey Worth ₹2,500',
    'Extended Warranty Options',
    'EMI Starting at ₹2,999/month',
  ],
  festivalBannerText: '🇮🇳 Republic Day Special: Celebrate with Clean Energy & Big Savings!',
}

/**
 * HOW TO UPDATE PROMOTIONS:
 * 
 * 1. ANNOUNCEMENT BAR (Top of website):
 *    - Edit 'announcementBar' object above
 *    - Set active: true/false to show/hide
 *    - Update title, ctaText, ctaLink
 * 
 * 2. HERO BANNER (Homepage large banner):
 *    - Edit 'heroBanner' object
 *    - Add promotional image to: public/images/promotions/
 *    - Update dates in validFrom and validUntil
 * 
 * 3. FEATURED OFFERS (3 offer cards):
 *    - Edit items in 'featuredOffers' array
 *    - Set active: false to hide any offer
 *    - Change title, subtitle, description, colors
 * 
 * 4. MONTHLY UPDATES:
 *    - Update 'monthlyPromotion' object each month
 *    - Change month, theme, and offers list
 * 
 * EXAMPLES:
 * - Diwali: Update theme to 'Diwali Festival of Lights'
 * - Holi: Change colors to vibrant hues
 * - Summer Sale: Update offers for cooling solutions
 * - Monsoon Offer: Promote water solutions
 */
