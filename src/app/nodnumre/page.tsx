'use client'

import { EmergencyNumbers } from '@/components/EmergencyNumbers'

export default function NodnumrePage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
        Viktige telefonnumre
      </h1>
      <EmergencyNumbers />
    </div>
  )
} 