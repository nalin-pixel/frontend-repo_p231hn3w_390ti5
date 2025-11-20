import React from 'react'
import { motion } from 'framer-motion'

export default function Section({ id, icon: Icon, title, color = 'emerald', points = [], tips = [] }) {
  const colorMap = {
    emerald: 'from-emerald-400 to-emerald-600',
    blue: 'from-blue-400 to-blue-600',
    amber: 'from-amber-400 to-amber-600',
    rose: 'from-rose-400 to-rose-600',
    violet: 'from-violet-400 to-violet-600',
  }

  return (
    <section id={id} className="relative py-20">
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className={`absolute inset-x-0 top-1/2 -translate-y-1/2 h-64 blur-3xl bg-gradient-to-r ${colorMap[color]}`} />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/10 border border-white/20">
            {Icon && <Icon className="w-7 h-7 text-white" />}
          </div>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white">{title}</h2>
          {points?.length > 0 && (
            <p className="mt-3 text-blue-100/90 max-w-2xl mx-auto">
              {points.join(' • ')}
            </p>
          )}
        </motion.div>

        {tips?.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tips.map((tip, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }} className="rounded-2xl border border-white/10 bg-slate-900/40 p-6 hover:bg-slate-900/60 transition">
                <div className={`w-10 h-1 rounded-full bg-gradient-to-r ${colorMap[color]}`} />
                <p className="mt-3 text-blue-50/90">{tip}</p>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
