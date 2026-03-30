import { useState, type FormEvent } from 'react'
import { ScrollReveal } from '../components/ScrollReveal'
import { SEO } from '../components/SEO'
import { profile } from '../data/profile'

export function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <>
      <SEO
        title="Contact"
        description={`Contacter ${profile.name} pour du web, du mobile, des APIs ou de la formation technique. Basé à ${profile.location}.`}
        path="/contact"
      />
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <ScrollReveal>
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">Contact</h1>
              <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
                Envoyez un court brief : le résultat visé, votre calendrier et ce qu’un « succès » représente pour vous. Je
                lis chaque message et réponds avec la suite logique — ou un « pas le bon profil » franc si c’est le cas.
              </p>
              <dl className="mt-10 space-y-4 text-sm">
                <div>
                  <dt className="font-semibold text-slate-500 dark:text-slate-500">E-mail</dt>
                  <dd>
                    <a
                      href={`mailto:${profile.email}`}
                      className="font-medium text-cyan-600 hover:text-cyan-700 dark:text-cyan-400"
                    >
                      {profile.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-slate-500 dark:text-slate-500">Téléphone</dt>
                  <dd className="font-medium text-slate-800 dark:text-slate-200">{profile.phone}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-slate-500 dark:text-slate-500">Localisation</dt>
                  <dd className="font-medium text-slate-800 dark:text-slate-200">{profile.location}</dd>
                </div>
              </dl>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <div className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm dark:border-slate-800/90 dark:bg-slate-900/40 sm:p-8">
              {sent ? (
                <div className="py-8 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">Message bien reçu</h2>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                    Ce formulaire de démo n’envoie pas encore d’e-mails — branchez-le à votre backend ou à un service de
                    formulaires au déploiement.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="mt-6 text-sm font-semibold text-cyan-600 dark:text-cyan-400"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                      Nom
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      autoComplete="name"
                      className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-slate-900 shadow-sm outline-none ring-cyan-500/30 placeholder:text-slate-400 focus:border-cyan-500 focus:ring-2 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                      E-mail
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-slate-900 shadow-sm outline-none ring-cyan-500/30 placeholder:text-slate-400 focus:border-cyan-500 focus:ring-2 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                      placeholder="vous@entreprise.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="mt-1.5 w-full resize-y rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-slate-900 shadow-sm outline-none ring-cyan-500/30 placeholder:text-slate-400 focus:border-cyan-500 focus:ring-2 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                      placeholder="Que construisez-vous ? Quel accompagnement cherchez-vous ?"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-xl bg-slate-900 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
                  >
                    Envoyer le message
                  </button>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </>
  )
}
