import React from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-24 pb-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-[600px] h-[600px] rounded-full bg-blue-500/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
              Stili di vita sani, animati al meglio
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="mt-6 text-lg md:text-xl text-blue-100/90">
              Scopri come sonno, idratazione, attività fisica e gestione dello stress migliorano il benessere — con un focus speciale sugli adolescenti.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.6 }} className="mt-8 flex items-center gap-4">
              <a href="#sonno" className="px-5 py-3 rounded-xl bg-gradient-to-br from-emerald-400 to-blue-500 text-white font-semibold shadow-lg shadow-emerald-500/20 hover:scale-[1.02] transition">
                Inizia il viaggio
              </a>
              <a href="#adolescenti" className="px-5 py-3 rounded-xl bg-white/10 text-white font-semibold hover:bg-white/20 transition">
                Focus adolescenza
              </a>
            </motion.div>
          </div>
          <div className="relative">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="relative aspect-[4/3] rounded-3xl border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900 p-1">
              <div className="w-full h-full rounded-[22px] bg-[radial-gradient(circle_at_30%_30%,rgba(16,185,129,0.15),transparent_40%),radial-gradient(circle_at_70%_70%,rgba(59,130,246,0.15),transparent_40%)]" />
              <motion.div animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 6 }} className="absolute -top-6 -right-6 w-28 h-28 rounded-2xl bg-emerald-400/20 border border-emerald-400/40 blur-md" />
              <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 6, delay: 0.6 }} className="absolute -bottom-8 -left-8 w-40 h-40 rounded-full bg-blue-400/20 border border-blue-400/40 blur-md" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
