'use client'

import { useTheme } from '@/components/ThemeProvider'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
      <div className="flex flex-col space-y-2">
        <button
          onClick={() => setTheme('light')}
          className={`px-4 py-2 rounded-md ${
            theme === 'light'
              ? 'bg-gray-100 text-gray-900'
              : 'hover:bg-gray-100 dark:hover:bg-gray-700'
          }`}
        >
          🌞 Lyst tema
        </button>
        <button
          onClick={() => setTheme('dark')}
          className={`px-4 py-2 rounded-md ${
            theme === 'dark'
              ? 'bg-gray-700 text-white'
              : 'hover:bg-gray-100 dark:hover:bg-gray-700'
          }`}
        >
          🌙 Mørkt tema
        </button>
        <button
          onClick={() => setTheme('system')}
          className={`px-4 py-2 rounded-md ${
            theme === 'system'
              ? 'bg-gray-100 dark:bg-gray-700'
              : 'hover:bg-gray-100 dark:hover:bg-gray-700'
          }`}
        >
          💻 Systemvalg
        </button>
      </div>
    </div>
  )
} 