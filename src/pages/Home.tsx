import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HeroSection } from '../components/HeroSection'
import { SkillsSection } from '../components/SkillsSection'
import { ProjectCard } from '../components/ProjectCard'
import { ScrollReveal } from '../components/ScrollReveal'
import { SEO } from '../components/SEO'
import { projects } from '../data/projects'
import { profile } from '../data/profile'

const featured = projects.filter((p) => p.featured).slice(0, 3)

export function Home() {
  return (
    <>
      <SEO
        title="ANANI Kokouvi Yovo — Développeur full stack web & mobile"
        description={`${profile.role} basé à ${profile.location}. Laravel, NestJS, React, Next.js, Flutter. Développeur & formateur chez ${profile.experience.company}.`}
        path="/"
      />
      <HeroSection />

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
              Des produits qui méritent la confiance
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
              Résoudre des problèmes concrets : je traduis des processus métier parfois brouillons en frontières logicielles
              claires — puis je les implémente avec une architecture tenable, une UX réfléchie et la rigueur qu’exige la
              mise en production. Quand je ne code pas, je forme : j’accompagne des juniors et je rédige des contenus qui
              font progresser les équipes plus vite que la seule documentation.
            </p>
          </div>
        </ScrollReveal>
      </section>

      <SkillsSection />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
                Projets en avant
              </h2>
              <p className="mt-2 max-w-xl text-slate-600 dark:text-slate-400">
                Une sélection : livraison, marketplaces, mises en relation, mobile — pensée pour la montée en charge et la
                lisibilité.
              </p>
            </div>
            <Link
              to="/projects"
              className="text-sm font-semibold text-cyan-600 hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300"
            >
              Tous les projets →
            </Link>
          </div>
        </ScrollReveal>

        <motion.div layout className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </section>

      <section className="border-t border-slate-200/80 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 py-16 text-white dark:border-slate-800/80">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
              <div className="max-w-2xl">
                <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Un défi produit ?</h2>
                <p className="mt-3 text-slate-300">
                  Parlez-moi du contexte, du calendrier et des contraintes. Je réponds avec franchise — que le besoin soit
                  web, mobile, APIs ou formation.
                </p>
              </div>
              <Link
                to="/contact"
                className="inline-flex shrink-0 items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-slate-900 shadow-lg transition hover:bg-slate-100"
              >
                Me contacter
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
