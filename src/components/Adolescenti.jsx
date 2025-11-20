import React from 'react'
import { motion } from 'framer-motion'

export default function Adolescenti() {
  const stats = [
    { label: 'Sonno insufficiente', value: '7-9h', desc: 'ore consigliate a notte per adolescenti' },
    { label: 'Idratazione', value: '1.5-2.5L', desc: 'acqua al giorno in base all’attività' },
    { label: 'Attività fisica', value: '60 min', desc: 'di movimento moderato-intenso al giorno' },
    { label: 'Stress', value: 'Mindfulness', desc: 'tecniche utili: respiro, journaling, pause digitali' },
  ]

  return (
    <section id="adolescenti" className="relative py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Impatto sulla salute degli adolescenti</h2>
          <p className="mt-3 text-blue-100/90 max-w-2xl mx-auto">Abitudini sane migliorano concentrazione, umore e performance scolastiche, riducendo rischi a lungo termine.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }} className="rounded-2xl border border-white/10 bg-slate-900/40 p-6 text-center">
              <div className="text-3xl font-extrabold bg-gradient-to-br from-emerald-400 to-blue-500 bg-clip-text text-transparent">{s.value}</div>
              <div className="mt-1 text-white font-semibold">{s.label}</div>
              <div className="mt-2 text-blue-100/80 text-sm">{s.desc}</div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mt-10 rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-6">
          <h3 className="text-white font-semibold">Consigli pratici per studenti</h3>
          <ul className="mt-3 grid sm:grid-cols-2 gap-3 text-blue-100/90">
            <li>Routine serale senza schermi 60 minuti prima di dormire</li>
            <li>Borraccia sempre con sé, sorseggiare durante la giornata</li>
            <li>Muoversi tra una lezione e l’altra: brevi camminate o stretching</li>
            <li>Calendarizzare lo studio in blocchi con pause regolari (tecnica del pomodoro)</li>
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
