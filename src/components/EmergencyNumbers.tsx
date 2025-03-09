'use client'

export function EmergencyNumbers() {
  const emergencyContacts = [
    {
      name: 'Medisinsk nødhjelp',
      number: '113',
      description: 'Ring ved akutt behov for ambulanse',
      icon: '🚑',
      color: 'bg-red-500 hover:bg-red-600'
    },
    {
      name: 'Mental Helse',
      number: '116 123',
      description: 'Døgnåpen hjelpetelefon for alle som trenger noen å snakke med',
      icon: '🧠',
      color: 'bg-purple-500 hover:bg-purple-600'
    },
    {
      name: 'Alarmtelefonen for barn og unge',
      number: '116 111',
      description: 'Ring hvis du er under 18 år og trenger hjelp',
      icon: '👶',
      color: 'bg-blue-500 hover:bg-blue-600'
    },
    {
      name: 'Legevakt',
      number: '116 117',
      description: 'Ring ved behov for øyeblikkelig legehjelp',
      icon: '👨‍⚕️',
      color: 'bg-green-500 hover:bg-green-600'
    }
  ]

  const handleCall = (number: string) => {
    window.location.href = `tel:${number.replace(/\s/g, '')}`
  }

  return (
    <div className="space-y-4">
      <div className="bg-gradient-to-r from-red-500 to-red-600 p-6 rounded-2xl shadow-lg">
        <div className="flex items-center gap-4">
          <div className="text-4xl">🚨</div>
          <div>
            <h2 className="text-xl font-bold text-white mb-1">Nødnumre</h2>
            <p className="text-red-100">
              Ved akutt fare for liv og helse, ring alltid 113
            </p>
          </div>
        </div>
      </div>
      
      <div className="grid gap-4 sm:grid-cols-2">
        {emergencyContacts.map((contact) => (
          <div
            key={contact.number}
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow duration-200"
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="text-3xl">{contact.icon}</div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {contact.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {contact.description}
                  </p>
                </div>
              </div>
              <button
                onClick={() => handleCall(contact.number)}
                className={`w-full flex items-center justify-center gap-3 px-6 py-3 ${contact.color} text-white rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] font-medium text-lg`}
              >
                <span className="text-2xl">📞</span>
                <span>{contact.number}</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 