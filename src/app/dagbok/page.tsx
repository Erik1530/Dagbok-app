'use client'

import { useState } from 'react'

export default function DagbokPage() {
  const [content, setContent] = useState('')
  const [aiResponse, setAiResponse] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleGetAIResponse = async () => {
    if (!content.trim()) return
    
    setIsLoading(true)
    try {
      const response = await fetch('/api/ai-response', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content }),
      })
      
      const data = await response.json()
      setAiResponse(data.response)
    } catch (error) {
      console.error('Feil ved henting av AI-respons:', error)
      setAiResponse('Beklager, kunne ikke generere svar akkurat nå. Prøv igjen senere.')
    }
    setIsLoading(false)
  }

  return (
    <div className="max-w-4xl mx-auto relative">
      {/* Dekorative elementer */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-teal-50 rounded-full blur-3xl opacity-30" />
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-50 rounded-full blur-3xl opacity-30" />
      
      <div className="relative">
        <div className="flex items-center gap-3 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Min Dagbok
          </h1>
          <span className="text-sm bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 px-3 py-1 rounded-full">
            Privat og trygt 🔒
          </span>
        </div>
        
        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl shadow-xl p-8 mb-8 border border-gray-100 dark:border-gray-700">
          <div className="mb-6">
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Dette er ditt trygge rom for å uttrykke tanker og følelser. 
              Alt du skriver her er privat og bare for deg. 💭
            </p>
          </div>
          
          <form className="space-y-6">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Tittel på innlegget
              </label>
              <input
                type="text"
                name="title"
                id="title"
                className="mt-1 block w-full rounded-xl border-gray-200 shadow-sm focus:border-teal-500 focus:ring-teal-500 dark:bg-gray-700/50 dark:border-gray-600 dark:text-white"
                placeholder="Gi innlegget ditt en tittel"
              />
            </div>
            
            <div>
              <label htmlFor="content" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Del tankene dine
              </label>
              <textarea
                id="content"
                name="content"
                rows={6}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="mt-1 block w-full rounded-xl border-gray-200 shadow-sm focus:border-teal-500 focus:ring-teal-500 dark:bg-gray-700/50 dark:border-gray-600 dark:text-white"
                placeholder="Dette er ditt trygge rom. Skriv fritt om det du tenker på..."
              />
            </div>
            
            <div>
              <label htmlFor="mood" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Hvordan har du det i dag?
              </label>
              <select
                id="mood"
                name="mood"
                className="mt-1 block w-full rounded-xl border-gray-200 shadow-sm focus:border-teal-500 focus:ring-teal-500 dark:bg-gray-700/50 dark:border-gray-600 dark:text-white"
              >
                <option value="">Velg humør</option>
                <option value="glad">😊 Glad og fornøyd</option>
                <option value="rolig">😌 Rolig og avslappet</option>
                <option value="energisk">⚡ Full av energi</option>
                <option value="trist">😢 Litt nedfor</option>
                <option value="frustrert">😤 Frustrert</option>
                <option value="sliten">😴 Trenger hvile</option>
              </select>
            </div>
            
            <div className="flex justify-between items-center space-x-4 pt-4">
              <button
                type="button"
                onClick={handleGetAIResponse}
                disabled={!content.trim() || isLoading}
                className="px-5 py-2.5 text-sm font-medium text-teal-700 bg-teal-50 hover:bg-teal-100 dark:bg-teal-900/30 dark:text-teal-300 dark:hover:bg-teal-900/50 rounded-xl transition-colors duration-200 disabled:opacity-50 flex items-center gap-2"
              >
                {isLoading ? (
                  <>
                    <span className="animate-pulse">💭</span> 
                    Tenker...
                  </>
                ) : (
                  <>
                    <span>🤝</span>
                    Få støttende tilbakemelding
                  </>
                )}
              </button>
              
              <div className="flex space-x-4">
                <button
                  type="button"
                  className="px-5 py-2.5 text-sm font-medium text-gray-700 bg-gray-50 hover:bg-gray-100 dark:bg-gray-700/50 dark:text-gray-300 dark:hover:bg-gray-700 rounded-xl transition-colors duration-200"
                >
                  Lagre kladd
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 rounded-xl transition-colors duration-200"
                >
                  Lagre innlegg
                </button>
              </div>
            </div>
          </form>
        </div>
        
        {aiResponse && (
          <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl shadow-xl p-8 mb-8 border border-gray-100 dark:border-gray-700">
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
              <span>🤝</span> Støttende tilbakemelding
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300">{aiResponse}</p>
            </div>
          </div>
        )}

        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
            <span>📚</span> Dine tidligere innlegg
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Her vil du finne alle dine tidligere innlegg når du begynner å skrive.
          </p>
        </div>
      </div>
    </div>
  )
} 