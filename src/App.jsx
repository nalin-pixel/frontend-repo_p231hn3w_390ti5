import React from 'react'
import { Moon, Droplet, Dumbbell, Brain } from 'lucide-react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Section from './components/Section'
import Adolescenti from './components/Adolescenti'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-blue-50">
      <Navbar />
      <Hero />

      <main>
        <Section
          id="sonno"
          icon={Moon}
          title="1. Sonno di qualità"
          color="violet"
          points={[
            'Regola orari costanti',
            'Ambiente buio e fresco',
            'Riduci gli schermi prima di dormire',
          ]}
          tips={[
            'Vai a letto e svegliati alla stessa ora, anche nel weekend.',
            'Mantieni la stanza tra 17-19°C e limita rumori e luci.',
            'Evita caffeina dopo il primo pomeriggio; crea un rituale rilassante.',
          ]}
        />

        <Section
          id="idratazione"
          icon={Droplet}
          title="2. Idratazione"
          color="blue"
          points={[
            'Acqua sempre con te',
            'Più attività = più liquidi',
            'Attenzione a zuccheri e caffeina',
          ]}
          tips={[
            'Bevi a piccoli sorsi durante il giorno, non tutto insieme.',
            'Aumenta l’introito in giornate calde o con sport intenso.',
            'Preferisci acqua, tisane e frutta ricca d’acqua come arance o anguria.',
          ]}
        />

        <Section
          id="attivita"
          icon={Dumbbell}
          title="3. Attività fisica"
          color="emerald"
          points={[
            'Almeno 150 min/sett. moderata',
            'Forza 2-3 volte a settimana',
            'Muoviti ogni ora',
          ]}
          tips={[
            'Scegli attività che ti piacciono: bici, danza, sport di squadra.',
            'Inserisci esercizi a corpo libero per forza e postura.',
            'Usa le scale, cammina mentre telefoni, micro-pause attive.',
          ]}
        />

        <Section
          id="stress"
          icon={Brain}
          title="4. Gestione dello stress"
          color="rose"
          points={[
            'Respirazione e mindfulness',
            'Routine e priorità chiare',
            'Comunità e supporto',
          ]}
          tips={[
            'Pratica 4-7-8 o box breathing per calmare il sistema nervoso.',
            'Pianifica la settimana, spezza i compiti in passi piccoli.',
            'Parla con amici, famiglia o un professionista quando serve.',
          ]}
        />

        <Adolescenti />
      </main>

      <footer className="py-10 text-center text-blue-200/70">
        Creato con passione per il benessere — Rimani in movimento, idratato e sereno.
      </footer>
    </div>
  )
}

export default App
