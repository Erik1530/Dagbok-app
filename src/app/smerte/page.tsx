export default function SmertePage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
        Smertedagbok
      </h1>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
        <form className="space-y-6">
          <div>
            <label htmlFor="painLevel" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Smertenivå (1-10)
            </label>
            <input
              type="range"
              min="1"
              max="10"
              id="painLevel"
              className="w-full mt-2"
            />
            <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mt-1">
              <span>Lite</span>
              <span>Moderat</span>
              <span>Sterkt</span>
            </div>
          </div>

          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Hvor har du smerter?
            </label>
            <input
              type="text"
              name="location"
              id="location"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="F.eks. rygg, nakke, hode"
            />
          </div>

          <div>
            <label htmlFor="type" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Type smerte
            </label>
            <select
              id="type"
              name="type"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            >
              <option value="">Velg type</option>
              <option value="stikkende">Stikkende</option>
              <option value="verkende">Verkende</option>
              <option value="brennende">Brennende</option>
              <option value="dunkende">Dunkende</option>
              <option value="krampaktig">Krampaktig</option>
            </select>
          </div>

          <div>
            <label htmlFor="triggers" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Utløsende faktorer
            </label>
            <textarea
              id="triggers"
              name="triggers"
              rows={3}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="Hva kan ha utløst smertene?"
            />
          </div>

          <div>
            <label htmlFor="relief" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Lindrende tiltak
            </label>
            <textarea
              id="relief"
              name="relief"
              rows={3}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="Hva hjelper mot smertene?"
            />
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              Lagre som utkast
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Lagre registrering
            </button>
          </div>
        </form>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
          Tidligere registreringer
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Ingen registreringer enda. Start med å registrere dine smerter for å få en oversikt over tid.
        </p>
      </div>
    </div>
  )
} 