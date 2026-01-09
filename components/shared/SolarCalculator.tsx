"use client"

import { useState } from 'react'
import { Calculator } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function SolarCalculator() {
  const [monthlyBill, setMonthlyBill] = useState<string>('')
  const [results, setResults] = useState<any>(null)

  const calculateSavings = () => {
    const bill = parseFloat(monthlyBill)
    if (!bill || bill < 0) return

    // Assumptions based on typical Bengaluru rates
    const costPerUnit = 6.5 // Average ₹6.5 per unit
    const monthlyUnits = bill / costPerUnit
    const annualUnits = monthlyUnits * 12

    // System sizing (1kW produces ~120 units/month in Bengaluru)
    const systemSize = Math.ceil(monthlyUnits / 120)
    
    // Costs
    const costPerKW = 65000 // ₹65,000 per kW installed
    const systemCost = systemSize * costPerKW
    
    // Government subsidy (40% up to 3kW, 20% above)
    let subsidy = 0
    if (systemSize <= 3) {
      subsidy = systemCost * 0.40
    } else {
      subsidy = (3 * costPerKW * 0.40) + ((systemSize - 3) * costPerKW * 0.20)
    }
    
    const netCost = systemCost - subsidy
    
    // Savings calculations
    const monthlySavings = bill * 0.85 // 85% savings on average
    const annualSavings = monthlySavings * 12
    const paybackYears = (netCost / annualSavings).toFixed(1)
    const savings25Years = (annualSavings * 25) - netCost

    setResults({
      systemSize,
      systemCost,
      subsidy,
      netCost,
      monthlySavings: Math.round(monthlySavings),
      annualSavings: Math.round(annualSavings),
      paybackYears,
      savings25Years: Math.round(savings25Years),
      monthlyUnits: Math.round(monthlyUnits),
    })
  }

  return (
    <section className="py-20 bg-gradient-to-br from-brand-cream to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-gold/20 rounded-full mb-4">
            <Calculator className="h-8 w-8 text-brand-gold" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-navy mb-4">
            Solar Savings Calculator
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find out how much you can save with solar panels
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8">
            <div className="mb-6">
              <label className="block text-brand-navy font-semibold mb-2">
                Your Monthly Electricity Bill (₹)
              </label>
              <Input
                type="number"
                placeholder="e.g., 3000"
                value={monthlyBill}
                onChange={(e) => setMonthlyBill(e.target.value)}
                className="text-lg"
              />
            </div>

            <Button
              onClick={calculateSavings}
              className="w-full bg-brand-gold text-brand-navy-dark hover:bg-brand-gold-light font-semibold text-lg py-6"
            >
              Calculate Savings
            </Button>

            {results && (
              <div className="mt-8 space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-brand-navy text-white p-6 rounded-lg">
                    <div className="text-brand-cream text-sm mb-1">Recommended System</div>
                    <div className="text-3xl font-bold">{results.systemSize} kW</div>
                    <div className="text-brand-cream text-sm mt-1">
                      Produces ~{results.monthlyUnits} units/month
                    </div>
                  </div>

                  <div className="bg-brand-gold text-brand-navy-dark p-6 rounded-lg">
                    <div className="text-brand-navy-dark/70 text-sm mb-1">Monthly Savings</div>
                    <div className="text-3xl font-bold">₹{results.monthlySavings.toLocaleString()}</div>
                    <div className="text-brand-navy-dark/70 text-sm mt-1">
                      ₹{results.annualSavings.toLocaleString()}/year
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-brand-cream p-4 rounded-lg text-center">
                    <div className="text-gray-600 text-sm mb-1">System Cost</div>
                    <div className="text-xl font-bold text-brand-navy">
                      ₹{results.systemCost.toLocaleString()}
                    </div>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg text-center">
                    <div className="text-green-700 text-sm mb-1">Government Subsidy</div>
                    <div className="text-xl font-bold text-green-600">
                      - ₹{results.subsidy.toLocaleString()}
                    </div>
                  </div>

                  <div className="bg-brand-sage/20 p-4 rounded-lg text-center">
                    <div className="text-gray-600 text-sm mb-1">Your Net Cost</div>
                    <div className="text-xl font-bold text-brand-navy">
                      ₹{results.netCost.toLocaleString()}
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-brand-navy to-brand-navy-light text-white p-6 rounded-lg">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <div className="text-brand-cream text-sm mb-1">Payback Period</div>
                      <div className="text-2xl font-bold">{results.paybackYears} years</div>
                      <div className="text-brand-cream text-sm mt-1">
                        System pays for itself
                      </div>
                    </div>
                    <div>
                      <div className="text-brand-cream text-sm mb-1">25-Year Savings</div>
                      <div className="text-2xl font-bold">
                        ₹{(results.savings25Years / 100000).toFixed(1)} Lakhs
                      </div>
                      <div className="text-brand-cream text-sm mt-1">
                        Total lifetime savings
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center pt-4">
                  <p className="text-gray-600 mb-4">
                    Ready to start saving? Get a personalized quote with FREE site survey
                  </p>
                  <a
                    href="/contact"
                    className="inline-block bg-brand-navy text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-navy-light transition-colors"
                  >
                    Request Free Quote
                  </a>
                </div>
              </div>
            )}
          </Card>

          <p className="text-center text-sm text-gray-500 mt-6">
            * Calculations are estimates based on average Bengaluru electricity rates and solar production.
            Actual results may vary based on roof orientation, shading, and consumption patterns.
          </p>
        </div>
      </div>
    </section>
  )
}
