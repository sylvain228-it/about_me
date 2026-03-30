import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { ProjectCard } from '../components/ProjectCard'
import { ScrollReveal } from '../components/ScrollReveal'
import { SEO } from '../components/SEO'
import { categories } from '../data/categories'
import { projects } from '../data/projects'
import { cn } from '../utils/cn'

export function Projects() {
  const [active, setActive] = useState<string>('all')

  const filtered = useMemo(() => {
    if (active === 'all') return projects
    return projects.filter((p) => p.categoryIds.includes(active))
  }, [active])

  const filterIds = useMemo(() => {
    const ids = new Set<string>()
    projects.forEach((p) => p.categoryIds.forEach((c) => ids.add(c)))
    return categories.filter((c) => ids.has(c.id))
  }, [])

  return (
    <>
      <SEO
        title="Projets"
        description="Réalisations en production : livraison de repas, multi-restaurants, plateformes de mise en relation, app Flutter, sites WordPress."
        path="/projects"
      />
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">Projets</h1>
          <p className="mt-3 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            Des systèmes pour de vraies opérations — avec des APIs évolutives, des interfaces compréhensibles et une
            architecture qui tient quand on enchaîne les fonctionnalités.
          </p>
        </ScrollReveal>

        <div className="mt-8 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setActive('all')}
            className={cn(
              'rounded-full px-4 py-2 text-sm font-semibold transition',
              active === 'all'
                ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700',
            )}
          >
            Tous
          </button>
          {filterIds.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setActive(c.id)}
              className={cn(
                'rounded-full px-4 py-2 text-sm font-semibold transition',
                active === c.id
                  ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700',
              )}
            >
              {c.label}
            </button>
          ))}
        </div>

        <motion.div layout className="mt-10 grid gap-6 md:grid-cols-2">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>

        {filtered.length === 0 && (
          <p className="mt-10 text-slate-600 dark:text-slate-400">Aucun projet dans cette catégorie pour le moment.</p>
        )}
      </div>
    </>
  )
}
