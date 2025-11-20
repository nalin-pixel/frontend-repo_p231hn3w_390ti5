import React from 'react'
import { Heart, Droplet, Dumbbell, Moon, Brain, Users } from 'lucide-react'

const links = [
  { href: '#sonno', label: 'Sonno', icon: Moon },
  { href: '#idratazione', label: 'Idratazione', icon: Droplet },
  { href: '#attivita', label: 'Attività fisica', icon: Dumbbell },
  { href: '#stress', label: 'Stress', icon: Brain },
  { href: '#adolescenti', label: 'Adolescenti', icon: Users },
]

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/40 border-b border-white/10">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 text-white font-semibold">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 to-blue-500">
            <Heart className="w-5 h-5 text-white" />
          </span>
          Vita Sana
        </a>
        <ul className="hidden md:flex items-center gap-4">
          {links.map(({ href, label, icon: Icon }) => (
            <li key={href}>
              <a href={href} className="text-blue-100/90 hover:text-white transition inline-flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/5">
                <Icon className="w-4 h-4" />
                <span className="text-sm">{label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
