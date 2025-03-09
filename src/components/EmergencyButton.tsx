'use client'

import { useRouter } from 'next/navigation'

export function EmergencyButton() {
  const router = useRouter()

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button 
        className="group bg-red-500/80 hover:bg-red-600 text-white p-3 rounded-full shadow-md hover:shadow-lg transition-all duration-200"
        onClick={() => router.push('/nodnumre')}
      >
        <span className="sr-only">Nødnumre</span>
        <span className="text-xl">🚨</span>
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-red-500/90 text-white px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap text-sm">
          Viktige telefonnumre
        </div>
      </button>
    </div>
  )
} 