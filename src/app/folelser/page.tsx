export default function FolelserPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
        Mine Følelser
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
            Registrer følelse
          </h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Hvordan føler du deg akkurat nå?
              </label>
              <div className="grid grid-cols-3 gap-3">
                {['😊 Glad', '😌 Rolig', '⚡ Energisk', '😢 Trist', '😤 Frustrert', '😴 Sliten'].map((feeling) => (
                  <button
                    key={feeling}
                    type="button"
                    className="p-3 text-center border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                  >
                    {feeling}
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <label htmlFor="intensity" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Intensitet
              </label>
              <input
                type="range"
                id="intensity"
                min="1"
                max="5"
                className="w-full mt-2"
              />
              <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
                <span>Svak</span>
                <span>Moderat</span>
                <span>Sterk</span>
              </div>
            </div>

            <div>
              <label htmlFor="note" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Notat (valgfritt)
              </label>
              <textarea
                id="note"
                rows={3}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="Skriv en kort kommentar..."
              />
            </div>

            <button
              type="submit"
              className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Lagre
            </button>
          </form>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
            Dagens oversikt
          </h2>
          <div className="space-y-4">
            <p className="text-gray-600 dark:text-gray-400">
              Ingen registrerte følelser i dag. Start med å registrere hvordan du har det!
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
          Ukentlig oversikt
        </h2>
        <div className="h-64 flex items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg">
          <p className="text-gray-500 dark:text-gray-400">
            Her kommer det en graf over dine følelser denne uken
          </p>
        </div>
      </div>
    </div>
  )
} 