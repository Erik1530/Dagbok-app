'use client'

import { ThemeToggle } from '@/components/ThemeToggle'
import { EmergencyNumbers } from '@/components/EmergencyNumbers'

export default function InnstillingerPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
        Innstillinger
      </h1>

      <div className="space-y-8">
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
            Viktige telefonnumre
          </h2>
          <EmergencyNumbers />
        </div>

        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700">
          <h2 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
            Utseende
          </h2>
          <ThemeToggle />
        </div>

        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
            Personvern og sikkerhet
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-900 dark:text-white">Kode-beskyttelse</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Lås appen med en personlig kode</p>
              </div>
              <button className="bg-teal-600 text-white px-4 py-2 rounded-xl hover:bg-teal-700 transition-colors duration-200">
                Sett opp
              </button>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-900 dark:text-white">Ende-til-ende kryptering</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Sikre dine data med kryptering</p>
              </div>
              <button className="bg-green-600 text-white px-4 py-2 rounded-xl" disabled>
                Aktivert
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-900 dark:text-white">Automatisk utlogging</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Logg ut etter inaktivitet</p>
              </div>
              <select className="rounded-xl border-gray-200 shadow-sm focus:border-teal-500 focus:ring-teal-500 dark:bg-gray-700/50 dark:border-gray-600 dark:text-white">
                <option>Aldri</option>
                <option>5 minutter</option>
                <option>15 minutter</option>
                <option>30 minutter</option>
              </select>
            </div>
          </div>
        </div>

        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
            Påminnelser
          </h2>
          <div className="flex items-center space-x-2">
            <input type="checkbox" id="reminders" className="rounded border-gray-300" />
            <label htmlFor="reminders" className="text-sm text-gray-700 dark:text-gray-300">
              Aktiver daglige påminnelser
            </label>
          </div>
        </div>

        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
            Språk
          </h2>
          <select className="w-full rounded-xl border-gray-200 shadow-sm focus:border-teal-500 focus:ring-teal-500 dark:bg-gray-700/50 dark:border-gray-600 dark:text-white">
            <option>Norsk (Bokmål)</option>
            <option>Norsk (Nynorsk)</option>
            <option>English</option>
          </select>
        </div>

        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
            Datadeling
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Deling med helsepersonell</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                Velg hvilken informasjon som kan deles med din lege eller psykolog
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="share-mood" className="rounded border-gray-300" />
                  <label htmlFor="share-mood" className="text-sm text-gray-700 dark:text-gray-300">
                    Humør og følelser
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="share-journal" className="rounded border-gray-300" />
                  <label htmlFor="share-journal" className="text-sm text-gray-700 dark:text-gray-300">
                    Dagbokinnlegg
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="share-stats" className="rounded border-gray-300" />
                  <label htmlFor="share-stats" className="text-sm text-gray-700 dark:text-gray-300">
                    Statistikk og trender
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 