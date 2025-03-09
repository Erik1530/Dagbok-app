import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center relative">
      {/* Dekorative elementer */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-blue-100 rounded-full blur-3xl opacity-60" />
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-indigo-100 rounded-full blur-3xl opacity-60" />
      <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-sky-100 rounded-full blur-3xl opacity-40" />
      
      <div className="relative bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm rounded-3xl p-8 shadow-xl max-w-2xl mx-4">
        <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-transparent bg-clip-text">
          Din Digitale Dagbok
        </h1>
        <p className="text-xl mb-8 text-gray-600 dark:text-gray-300 leading-relaxed">
          Et trygt sted for dine tanker, følelser og daglige refleksjoner
        </p>
        <div className="space-y-4">
          <Link 
            href="/dagbok"
            className="inline-block bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105"
          >
            Begynn å skrive
          </Link>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-6 flex items-center justify-center space-x-2">
            <span>🔒</span>
            <span>Din personvern er vår høyeste prioritet</span>
          </p>
        </div>
      </div>

      {/* Dekorative ikoner */}
      <div className="absolute left-10 top-1/4 text-4xl animate-bounce-slow">📝</div>
      <div className="absolute right-10 bottom-1/4 text-4xl animate-bounce-slow delay-300">💫</div>
      <div className="absolute left-1/4 bottom-10 text-4xl animate-bounce-slow delay-150">📖</div>
    </div>
  )
}
