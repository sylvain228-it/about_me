import { Link, useParams } from 'react-router-dom'
import { ScrollReveal } from '../components/ScrollReveal'
import { SEO } from '../components/SEO'
import { categories } from '../data/categories'
import { getProjectById } from '../data/projects'

export function ProjectDetail() {
  const { id } = useParams()
  const project = id ? getProjectById(id) : undefined

  if (!project) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <SEO
          title="Projet introuvable"
          description="Le projet demandé est introuvable."
          path={`/projects/${id ?? ''}`}
        />
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Projet introuvable</h1>
        <p className="mt-2 text-slate-600 dark:text-slate-400">Cette étude de cas n’existe pas ou a été déplacée.</p>
        <Link to="/projects" className="mt-6 inline-block font-semibold text-cyan-600 dark:text-cyan-400">
          ← Retour aux projets
        </Link>
      </div>
    )
  }

  const categoryLabels = project.categoryIds
    .map((cid) => categories.find((c) => c.id === cid)?.label)
    .filter(Boolean)
    .join(' · ')

  return (
    <>
      <SEO
        title={project.title}
        description={project.shortDescription}
        path={`/projects/${project.id}`}
      />
      <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
        <ScrollReveal>
          <Link to="/projects" className="text-sm font-semibold text-cyan-600 hover:text-cyan-700 dark:text-cyan-400">
            ← Tous les projets
          </Link>
          <p className="mt-6 text-sm font-medium text-cyan-700 dark:text-cyan-400">
            {project.year} · {project.role}
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            {project.title}
          </h1>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-500">{categoryLabels}</p>
          <p className="mt-6 text-lg leading-relaxed text-slate-600 dark:text-slate-400">{project.shortDescription}</p>
        </ScrollReveal>

        <ScrollReveal delay={0.06}>
          <div className="prose prose-slate mt-10 max-w-none dark:prose-invert">
            {project.description.split('\n\n').map((para, idx) => (
              <p key={idx} className="leading-relaxed text-slate-700 dark:text-slate-300">
                {para}
              </p>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="mt-12 text-lg font-semibold text-slate-900 dark:text-white">Points clés</h2>
          <ul className="mt-4 space-y-3">
            {project.highlights.map((h) => (
              <li key={h} className="flex gap-3 text-slate-600 dark:text-slate-400">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500" aria-hidden />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </ScrollReveal>

        <ScrollReveal delay={0.12}>
          <h2 className="mt-12 text-lg font-semibold text-slate-900 dark:text-white">Technologies</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.technologies.map((t) => (
              <span
                key={t}
                className="rounded-lg border border-slate-200/90 bg-slate-50 px-3 py-1 font-mono text-xs text-slate-800 dark:border-slate-700 dark:bg-slate-800/50 dark:text-slate-200"
              >
                {t}
              </span>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.14}>
          <div className="mt-14 rounded-2xl border border-slate-200/90 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900/40">
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Un besoin comparable — ou totalement différent ?{' '}
              <Link to="/contact" className="font-semibold text-cyan-600 dark:text-cyan-400">
                Parlons-en
              </Link>
              .
            </p>
          </div>
        </ScrollReveal>
      </article>
    </>
  )
}
