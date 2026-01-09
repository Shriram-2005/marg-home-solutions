"use client"

export default function TrustBar() {
  // Brand names - placeholders until actual logos are added
  const brands = [
    'Panasonic',
    'Adani Solar',
    'Grundfos',
    'Solahart',
    'A.O. Smith',
    'Luminous',
  ]

  // Duplicate brands for seamless infinite scroll
  const duplicatedBrands = [...brands, ...brands]

  return (
    <section className="w-full bg-brand-cream py-8 overflow-hidden">
      <div className="container mx-auto px-4 mb-6">
        <h3 className="text-center text-sm font-semibold text-brand-navy uppercase tracking-wide">
          Trusted Partner Brands
        </h3>
      </div>
      
      {/* Infinite Scroll Container */}
      <div className="relative flex overflow-hidden">
        {/* Scrolling wrapper */}
        <div className="flex animate-scroll hover:pause-animation">
          {duplicatedBrands.map((brand, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-8 w-40 h-24 flex items-center justify-center bg-white rounded-lg shadow-sm border border-gray-200 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 hover:shadow-md"
            >
              {/* Placeholder - replace with actual images */}
              <span className="text-sm font-semibold text-gray-700">
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
