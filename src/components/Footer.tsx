import { Link } from 'react-router-dom'
import { profile } from '../data/profile'

const footerLinks = [
  { to: '/projects', label: 'Projets' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'À propos' },
  { to: '/contact', label: 'Contact' },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-200/80 bg-slate-50/80 dark:border-slate-800/80 dark:bg-slate-950/80">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 sm:grid-cols-2 lg:grid-cols-3 lg:px-8">
        <div>
          <p className="text-sm font-semibold text-slate-900 dark:text-white">{profile.name}</p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            {profile.role} · {profile.location}
          </p>
          <p className="mt-3 text-xs text-slate-500 dark:text-slate-500">
            Code propre, architecture évolutive, produits qui partent en production.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-500">
            Explorer
          </p>
          <ul className="mt-3 space-y-2">
            {footerLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-sm text-slate-700 transition hover:text-cyan-600 dark:text-slate-300 dark:hover:text-cyan-400"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-500">
            Réseaux
          </p>
          <ul className="mt-3 flex flex-wrap gap-4">
            <li>
              <a
                href={profile.social.github}
                target="_blank"
                rel="noreferrer noopener"
                className="text-sm text-slate-700 hover:text-cyan-600 dark:text-slate-300 dark:hover:text-cyan-400"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="text-sm text-slate-700 hover:text-cyan-600 dark:text-slate-300 dark:hover:text-cyan-400"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href={profile.social.whatsapp}
                target="_blank"
                rel="noreferrer noopener"
                className="text-sm text-slate-700 hover:text-cyan-600 dark:text-slate-300 dark:hover:text-cyan-400"
              >
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200/80 py-6 text-center text-xs text-slate-500 dark:border-slate-800/80 dark:text-slate-500">
        © {year} {profile.name}. Tous droits réservés.
      </div>
    </footer>
  )
}
