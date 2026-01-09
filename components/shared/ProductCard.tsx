import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

interface ProductProps {
  id: string
  brand: string // e.g., "Racold"
  model: string // e.g., "Omega Max 8"
  category: string // e.g., "Solar Water Heater"
  image: string
  features: string[] // e.g., ["8 Bar Pressure", "5 Year Warranty"]
}

export default function ProductCard({
  id,
  brand,
  model,
  category,
  image,
  features,
}: ProductProps) {
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
      {/* Image Area - Top 50% */}
      <div className="relative h-64 bg-gray-200">
        {/* Placeholder for image - will show gray bg until actual image is added */}
        <div className="w-full h-full flex items-center justify-center text-gray-400">
          {/* Future: <Image src={image} alt={model} fill className="object-cover" /> */}
          <span className="text-sm">Product Image</span>
        </div>
        
        {/* Brand Badge - Top Right */}
        <div className="absolute top-3 right-3 bg-brand-navy text-white px-3 py-1 rounded-md text-xs font-semibold shadow-md">
          {brand}
        </div>
      </div>

      {/* Content Area */}
      <CardHeader className="pb-3">
        <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
          {category}
        </p>
        <h3 className="text-xl font-bold text-brand-navy leading-tight">
          {model}
        </h3>
      </CardHeader>

      <CardContent className="flex-grow">
        {/* Feature Tags - First 2 features */}
        <div className="flex flex-wrap gap-2">
          {features.slice(0, 2).map((feature, index) => (
            <span
              key={index}
              className="bg-brand-cream text-brand-navy px-3 py-1 rounded-full text-xs font-medium border border-brand-navy/20"
            >
              {feature}
            </span>
          ))}
        </div>
      </CardContent>

      {/* Action Button */}
      <CardFooter className="pt-0">
        <Link href={`/products/${id}`} className="w-full">
          <Button className="w-full bg-brand-navy hover:bg-brand-navy-light text-white font-semibold">
            View Specifications
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
