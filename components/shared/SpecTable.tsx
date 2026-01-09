interface SpecTableProps {
  title?: string
  headers: string[]
  data: Record<string, string | number>[]
}

export default function SpecTable({ title, headers, data }: SpecTableProps) {
  return (
    <div className="w-full">
      {title && (
        <h3 className="text-2xl font-bold mb-4 text-gray-800">{title}</h3>
      )}
      
      {/* Mobile Responsive: Horizontal Scroll Wrapper */}
      <div className="overflow-x-auto rounded-lg border border-gray-300 shadow-sm">
        <table className="w-full min-w-max border-collapse">
          {/* Header Row */}
          <thead>
            <tr className="bg-brand-navy text-white">
              {headers.map((header, index) => (
                <th
                  key={index}
                  className="px-4 py-3 text-left text-sm font-semibold uppercase tracking-wide border-r border-brand-navy-light last:border-r-0"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          
          {/* Body Rows - Zebra Striping */}
          <tbody>
            {data.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className="odd:bg-white even:bg-brand-cream hover:bg-brand-cream/70 transition-colors"
              >
                {headers.map((header, cellIndex) => (
                  <td
                    key={cellIndex}
                    className="px-4 py-3 text-sm text-gray-700 border-r border-gray-200 last:border-r-0 border-b border-gray-200"
                  >
                    {row[header] || '-'}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Mobile Scroll Hint */}
      <p className="text-xs text-gray-500 mt-2 md:hidden">
        ← Scroll horizontally to view all columns →
      </p>
    </div>
  )
}
