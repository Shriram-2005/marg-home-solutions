# 📢 Promotional Content Update Guide

This guide explains how to update festival offers, banners, and promotional content on your Marg Solutions website.

## 🎯 Quick Start

All promotional content is managed in one file:
**`config/promotions.ts`**

## 📋 Types of Promotions

### 1. **Announcement Bar** (Top of Website)
- Appears at the very top of all pages
- Great for: Flash sales, urgent offers, limited-time deals
- Users can dismiss it (won't show again in same session)

**How to Update:**
```typescript
export const announcementBar: Promotion = {
  active: true,  // ⚠️ Set to false to hide
  title: '🎉 Your promotional text here',
  ctaText: 'Shop Now',
  ctaLink: '/contact',
  validUntil: '2026-01-31',
  backgroundColor: '#d4af37',
  textColor: '#0f1f3d',
}
```

### 2. **Hero Promotion Banner** (Large Homepage Section)
- Big promotional section on homepage
- Great for: Major festivals, seasonal campaigns
- Can include images

**How to Update:**
```typescript
export const heroBanner: Promotion = {
  active: true,  // ⚠️ Set to false to hide
  title: 'Diwali Special Offer',
  subtitle: 'Festival of Lights',
  description: 'Get 30% OFF on all solar installations',
  image: '/images/promotions/diwali-2026.jpg',  // Add image to public/images/promotions/
  ctaText: 'Claim Offer',
  ctaLink: '/contact',
  validFrom: '2026-10-20',
  validUntil: '2026-11-05',
}
```

### 3. **Featured Offers** (3 Offer Cards)
- Grid of 3 promotional cards
- Great for: Multiple product offers

**How to Update:**
```typescript
export const featuredOffers: Promotion[] = [
  {
    active: true,  // ⚠️ Set to false to hide individual offer
    title: '50% OFF',
    subtitle: 'Solar Water Heaters',
    description: 'Limited time monsoon offer',
    ctaText: 'Shop Now',
    ctaLink: '/solar/water-heaters',
    backgroundColor: '#1e3a5f',
    textColor: '#ffffff',
  },
  // Add more offers...
]
```

## 🗓️ Monthly Update Template

Use this template for quick monthly updates:

```typescript
export const monthlyPromotion = {
  month: 'February',
  year: 2026,
  theme: 'Valentine\'s Week Special',
  offers: [
    'Buy 1 Get 1 Free on Water Softeners',
    'FREE Installation Worth ₹5,000',
    'Extended Warranty - 30 Years',
  ],
}
```

## 🎨 Festival Campaign Examples

### Diwali Campaign
```typescript
announcementBar.title = '🪔 Diwali Dhamaka: 40% OFF + FREE Gold Coins Worth ₹5,000!'
announcementBar.backgroundColor = '#ff6b35'  // Orange
heroBanner.title = 'Light Up Your Home with Solar This Diwali'
```

### Holi Campaign
```typescript
announcementBar.title = '🎨 Holi Special: Colors of Savings - Flat 35% OFF!'
announcementBar.backgroundColor = '#e63946'  // Red/Pink
heroBanner.image = '/images/promotions/holi-2026.jpg'
```

### Summer Sale
```typescript
heroBanner.title = 'Beat the Heat - Summer Cooling Sale'
featuredOffers[0].subtitle = 'Water Coolers & ACs'
featuredOffers[0].title = '₹15,000 OFF'
```

### Monsoon Offer
```typescript
announcementBar.title = '🌧️ Monsoon Special: Water Solutions at 30% OFF'
heroBanner.title = 'Prepare for Monsoon - Water Heater Sale'
```

## 🖼️ Adding Promotional Images

1. Create folder: `public/images/promotions/`
2. Add your images (JPG/PNG)
3. Recommended size: 1920x600px for hero banners
4. Update image path in config:
   ```typescript
   image: '/images/promotions/your-banner.jpg'
   ```

## 🎯 Color Combinations

### Premium Gold & Navy (Current)
```typescript
backgroundColor: '#d4af37'  // Gold
textColor: '#0f1f3d'        // Navy
```

### Festival Red & White
```typescript
backgroundColor: '#dc2626'  // Red
textColor: '#ffffff'        // White
```

### Green & White (Eco Theme)
```typescript
backgroundColor: '#059669'  // Green
textColor: '#ffffff'        // White
```

## ⏰ Setting Up Time-Limited Offers

```typescript
validFrom: '2026-01-26',     // Start date (optional)
validUntil: '2026-01-31',    // End date (required)
```

The promotion will automatically:
- Show only between these dates
- Hide after end date
- Not appear before start date

## 🔧 Common Updates

### Turn Off All Promotions
```typescript
announcementBar.active = false
heroBanner.active = false
featuredOffers[0].active = false
featuredOffers[1].active = false
featuredOffers[2].active = false
```

### Update Just the Announcement
```typescript
announcementBar.title = 'Your new announcement text'
announcementBar.validUntil = '2026-02-28'
```

### Change One Featured Offer
```typescript
featuredOffers[0] = {
  active: true,
  title: 'NEW OFFER',
  subtitle: 'Product Name',
  // ... rest of the config
}
```

## 📱 Where Content Appears

- **Announcement Bar**: Top of every page (dismissible)
- **Hero Promotion**: Homepage only, large banner section
- **Featured Offers**: Homepage only, 3 cards in grid
- **All promotions**: Automatically hidden when dates expire

## 💡 Best Practices

1. **Update at least 3-5 days before festival** to test
2. **Use countdown timers** in text: "Only 3 Days Left!"
3. **Keep announcement bar text short** (under 80 characters)
4. **Test on mobile** after updating
5. **Set end dates** to avoid outdated offers
6. **Use emojis** for visual appeal: 🎉 🔥 ⚡ 🎁
7. **Update monthly** even without festivals

## 🚀 Quick Deployment

After updating `config/promotions.ts`:
1. Save the file
2. Changes appear immediately (no build needed in dev)
3. For production: commit and deploy

## 📞 Support

For technical help updating promotions, contact your web developer.

---

**Last Updated:** January 2026
