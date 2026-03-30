import { Link } from 'react-router-dom'
import { ServiceCard } from '../components/ServiceCard'
import { ScrollReveal } from '../components/ScrollReveal'
import { SEO } from '../components/SEO'
import { services } from '../data/services'

export function Services() {
  return (
    <>
      <SEO
        title="Services"
        description="Développement web, apps mobiles, UI/UX et formation technique — avec une architecture pragmatique et une communication claire."
        path="/services"
      />
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">Services</h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            Du projet neuf au renforcement d’un existant : je travaille avec des équipes qui valorisent la clarté — boucles
            de feedback courtes, arbitrages transparents et livrables maintenables.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map((s, i) => (
            <ScrollReveal key={s.id} delay={i * 0.05}>
              <ServiceCard service={s} />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.15}>
          <div className="mt-14 rounded-2xl border border-slate-200/90 bg-gradient-to-br from-slate-900 to-slate-950 p-8 text-white dark:border-slate-800">
            <h2 className="text-xl font-semibold">Vous ne savez pas par où commencer ?</h2>
            <p className="mt-2 max-w-2xl text-slate-300">
              Décrivez vos objectifs, votre calendrier et vos contraintes. Je vous proposerai une trajectoire réaliste —
              prototype, mise en production ou montée en compétences de l’équipe.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              Contact
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </>
  )
}
