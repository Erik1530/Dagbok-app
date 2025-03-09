import { NextResponse } from 'next/server'

// Hjelpefunksjon for å finne nøkkelord i teksten
function findKeywords(text: string): string[] {
  const lowercaseText = text.toLowerCase()
  const keywords = []

  // Følelser og tilstander
  if (lowercaseText.match(/trist|lei|deprimert|ensom|alene/)) keywords.push('negative_emotions')
  if (lowercaseText.match(/glad|lykkelig|fornøyd|bra|fantastisk/)) keywords.push('positive_emotions')
  if (lowercaseText.match(/sliten|utmattet|trøtt|utslitt/)) keywords.push('tired')
  if (lowercaseText.match(/bekymret|redd|nervøs|angst|stress/)) keywords.push('anxiety')
  if (lowercaseText.match(/motivert|inspirert|energisk|ivrig/)) keywords.push('motivated')
  
  // Relasjoner
  if (lowercaseText.match(/venn|venner|familie|kjæreste|forhold/)) keywords.push('relationships')
  
  // Aktiviteter
  if (lowercaseText.match(/jobb|arbeid|skole|studier/)) keywords.push('work')
  if (lowercaseText.match(/trening|løping|gym|sport/)) keywords.push('exercise')
  
  return keywords
}

// Database med reflekterende svar
const responses = {
  negative_emotions: [
    "Jeg ser at du går gjennom en utfordrende tid. Det er helt normalt og ok å kjenne på disse følelsene. Husk at vanskelige perioder også går over, og at det er styrke i å være åpen om hvordan du har det.",
    "Det høres ut som en tung periode. Noen ganger er det viktig å gi seg selv rom til å kjenne på disse følelsene. Har du vurdert å snakke med noen du stoler på om dette?",
  ],
  positive_emotions: [
    "Det er virkelig flott å høre om de positive opplevelsene dine! Disse øyeblikkene er verdifulle, og det er fint at du tar deg tid til å sette pris på dem.",
    "Din positive innstilling er inspirerende! Det er så viktig å anerkjenne og feire de gode stundene i livet.",
  ],
  tired: [
    "Det er helt naturlig å kjenne seg sliten iblant. Kanskje dette er kroppens måte å si at du trenger å ta litt ekstra vare på deg selv nå?",
    "Å være sliten kan være et tegn på at du har gitt mye av deg selv. Husk å ta pauser og gjøre ting som gir deg ny energi.",
  ],
  anxiety: [
    "Bekymringer og nervøsitet er følelser vi alle kjenner på. Det kan hjelpe å bryte ned store utfordringer i mindre, håndterbare deler.",
    "Det er forståelig å kjenne på uro. Har du prøvd å skrive ned konkret hva som bekymrer deg? Noen ganger kan det hjelpe å få tankene ned på papiret.",
  ],
  motivated: [
    "Det er inspirerende å se din motivasjon! Dette er et flott utgangspunkt for å nå målene dine.",
    "Din energi og iver er bemerkelsesverdig! Prøv å holde fast ved denne følelsen og bruk den som drivkraft fremover.",
  ],
  relationships: [
    "Relasjoner er en viktig del av livet vårt. Det er fint at du reflekterer over disse forbindelsene og hva de betyr for deg.",
    "Mennesker i livene våre kan både støtte og utfordre oss. Det er verdifullt at du tar deg tid til å tenke gjennom disse relasjonene.",
  ],
  work: [
    "Arbeid og studier kan være både givende og krevende. Det er bra at du tar deg tid til å reflektere over denne delen av livet.",
    "Det er imponerende hvordan du håndterer dine forpliktelser. Husk å også ta pauser og feire fremgangene dine, store som små.",
  ],
  exercise: [
    "Fysisk aktivitet er en flott måte å ta vare på både kropp og sinn. Det er inspirerende å se hvordan du prioriterer dette.",
    "Det er imponerende at du tar vare på helsen din gjennom aktivitet. Dette kan ha positive ringvirkninger på mange områder i livet.",
  ],
}

// Generell respons hvis ingen spesifikke nøkkelord blir funnet
const generalResponses = [
  "Takk for at du deler tankene dine. Det er verdifullt å ta seg tid til å reflektere over dagen og følelsene sine.",
  "Det er fint at du tar deg tid til å skrive ned tankene dine. Denne typen refleksjon kan være veldig hjelpsom for å forstå seg selv bedre.",
  "Å føre dagbok er en fin måte å bearbeide tanker og følelser på. Fortsett å være åpen og ærlig med deg selv.",
]

export async function POST(request: Request) {
  try {
    const { content } = await request.json()
    const keywords = findKeywords(content)
    
    let response = ""
    
    // Hvis vi fant nøkkelord, kombiner relevante svar
    if (keywords.length > 0) {
      const relevantResponses = keywords
        .map(keyword => responses[keyword as keyof typeof responses])
        .filter(Boolean)
        .map(responseArray => responseArray[Math.floor(Math.random() * responseArray.length)])
        .slice(0, 2) // Maks 2 svar for å unngå for lang respons
      
      response = relevantResponses.join("\n\n")
    } else {
      // Hvis ingen nøkkelord ble funnet, bruk en generell respons
      response = generalResponses[Math.floor(Math.random() * generalResponses.length)]
    }

    return NextResponse.json({ response })
  } catch (error) {
    console.error('Feil i respons-generering:', error)
    return NextResponse.json(
      { error: 'Kunne ikke generere svar' },
      { status: 500 }
    )
  }
} 