import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import type { Project } from '../types'
import { cn } from '../utils/cn'

type ProjectCardProps = {
  project: Project
  className?: string
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <motion.article
      layout
      className={cn(
        'group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm transition-shadow hover:shadow-lg dark:border-slate-800/90 dark:bg-slate-900/40',
        className,
      )}
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 400, damping: 28 }}
    >
      <div className="border-b border-slate-100 bg-gradient-to-br from-slate-50 to-white px-5 py-4 dark:border-slate-800 dark:from-slate-900 dark:to-slate-950">
        <p className="text-xs font-medium uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
          {project.year} · {project.role}
        </p>
        <h3 className="mt-2 text-lg font-semibold tracking-tight text-slate-900 dark:text-white">
          <Link
            to={`/projects/${project.id}`}
            className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500"
          >
            <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-[length:0%_2px] bg-bottom bg-no-repeat transition-all group-hover:bg-[length:100%_2px] dark:from-white dark:to-slate-300">
              {project.title}
            </span>
          </Link>
        </h3>
      </div>
      <div className="flex flex-1 flex-col px-5 py-4">
        <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">{project.shortDescription}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((t) => (
            <li
              key={t}
              className="rounded-full border border-slate-200/90 bg-slate-50 px-2.5 py-0.5 font-mono text-[11px] text-slate-700 dark:border-slate-700 dark:bg-slate-800/60 dark:text-slate-300"
            >
              {t}
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <Link
            to={`/projects/${project.id}`}
            className="inline-flex items-center gap-1 text-sm font-semibold text-cyan-600 hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300"
          >
            Voir l’étude de cas
            <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </Link>
        </div>
      </div>
    </motion.article>
  )
}
