import SpecTable from '@/components/shared/SpecTable'

export default function TestTablePage() {
  // Solahart J Series Technical Data from brochure
  const solahart_JSeriesHeaders = [
    'Model',
    'Capacity (Liters)',
    'Collector Area (m²)',
    'Tank Diameter (mm)',
    'Tank Height (mm)',
    'Weight Empty (kg)',
    'Weight Full (kg)',
    'Max Pressure (kPa)',
    'Max Temperature (°C)',
    'Warranty (Years)',
  ]

  const solahart_JSeriesData = [
    {
      'Model': 'J181EL',
      'Capacity (Liters)': '181',
      'Collector Area (m²)': '2.6',
      'Tank Diameter (mm)': '540',
      'Tank Height (mm)': '1110',
      'Weight Empty (kg)': '65',
      'Weight Full (kg)': '246',
      'Max Pressure (kPa)': '600',
      'Max Temperature (°C)': '90',
      'Warranty (Years)': '10',
    },
    {
      'Model': 'J302EL',
      'Capacity (Liters)': '302',
      'Collector Area (m²)': '3.5',
      'Tank Diameter (mm)': '630',
      'Tank Height (mm)': '1520',
      'Weight Empty (kg)': '92',
      'Weight Full (kg)': '394',
      'Max Pressure (kPa)': '600',
      'Max Temperature (°C)': '90',
      'Warranty (Years)': '10',
    },
    {
      'Model': 'J315EL',
      'Capacity (Liters)': '315',
      'Collector Area (m²)': '4.2',
      'Tank Diameter (mm)': '630',
      'Tank Height (mm)': '1590',
      'Weight Empty (kg)': '99',
      'Weight Full (kg)': '414',
      'Max Pressure (kPa)': '600',
      'Max Temperature (°C)': '90',
      'Warranty (Years)': '10',
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-4 text-gray-900">
            SpecTable Component Test
          </h1>
          <p className="text-center text-gray-600 mb-12">
            Testing mobile responsiveness with wide technical data tables
          </p>

          {/* Test: Solahart J Series Technical Data */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <SpecTable
              title="Solahart J Series - Technical Specifications"
              headers={solahart_JSeriesHeaders}
              data={solahart_JSeriesData}
            />
          </div>

          {/* Instructions */}
          <div className="mt-8 bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
            <h3 className="font-semibold text-blue-900 mb-2">
              Testing Instructions:
            </h3>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>✓ Resize browser to mobile width (&lt;768px)</li>
              <li>✓ Verify horizontal scroll works smoothly</li>
              <li>✓ Check that all 10 columns are visible when scrolling</li>
              <li>✓ Verify zebra striping (alternating row colors)</li>
              <li>✓ Check header stays blue with white text</li>
              <li>✓ Verify hover effect on rows</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
