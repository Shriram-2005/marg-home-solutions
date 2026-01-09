'use client'

import { useState, useEffect } from 'react'
import { MessageSquare, Clock, CheckCircle, XCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface Query {
  id: string
  source: string
  timestamp: string
  resolved: boolean
  notes?: string
}

export default function QueriesPage() {
  const [queries, setQueries] = useState<Query[]>([])

  useEffect(() => {
    const loadedQueries = JSON.parse(localStorage.getItem('customerQueries') || '[]')
    setQueries(loadedQueries)
  }, [])

  const toggleResolved = (id: string) => {
    const updated = queries.map(q => 
      q.id === id ? { ...q, resolved: !q.resolved } : q
    )
    setQueries(updated)
    localStorage.setItem('customerQueries', JSON.stringify(updated))
  }

  const pendingQueries = queries.filter(q => !q.resolved)
  const resolvedQueries = queries.filter(q => q.resolved)

  return (
    <div className="p-6 lg:p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Customer Queries</h1>
        <p className="text-gray-600">Track all customer interactions</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center gap-4">
            <div className="bg-blue-100 p-3 rounded-lg">
              <MessageSquare className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Queries</p>
              <p className="text-2xl font-bold text-gray-900">{queries.length}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center gap-4">
            <div className="bg-orange-100 p-3 rounded-lg">
              <Clock className="h-6 w-6 text-orange-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Pending</p>
              <p className="text-2xl font-bold text-gray-900">{pendingQueries.length}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center gap-4">
            <div className="bg-green-100 p-3 rounded-lg">
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Resolved</p>
              <p className="text-2xl font-bold text-gray-900">{resolvedQueries.length}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Pending Queries */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Pending Queries</h2>
        {pendingQueries.length === 0 ? (
          <p className="text-gray-500 text-center py-8">No pending queries</p>
        ) : (
          <div className="space-y-3">
            {pendingQueries.map(query => (
              <div key={query.id} className="flex items-center justify-between p-4 bg-orange-50 rounded-lg">
                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-2 rounded-full">
                    <MessageSquare className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{query.source}</p>
                    <p className="text-sm text-gray-600">
                      {new Date(query.timestamp).toLocaleString()}
                    </p>
                  </div>
                </div>
                <Button
                  onClick={() => toggleResolved(query.id)}
                  className="bg-green-600 hover:bg-green-700"
                >
                  Mark Resolved
                </Button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Resolved Queries */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Resolved Queries</h2>
        {resolvedQueries.length === 0 ? (
          <p className="text-gray-500 text-center py-8">No resolved queries yet</p>
        ) : (
          <div className="space-y-3">
            {resolvedQueries.map(query => (
              <div key={query.id} className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-2 rounded-full">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{query.source}</p>
                    <p className="text-sm text-gray-600">
                      {new Date(query.timestamp).toLocaleString()}
                    </p>
                  </div>
                </div>
                <Button
                  onClick={() => toggleResolved(query.id)}
                  variant="outline"
                >
                  Reopen
                </Button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
