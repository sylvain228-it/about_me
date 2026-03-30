import type { Service } from '../types'
import { cn } from '../utils/cn'

function ServiceIcon({ icon }: { icon: Service['icon'] }) {
  const common = 'h-6 w-6'
  switch (icon) {
    case 'web':
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <path d="M4 7h16M4 12h10M4 17h16" strokeLinecap="round" />
          <rect x="2" y="3" width="20" height="18" rx="2" />
        </svg>
      )
    case 'mobile':
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <rect x="7" y="2" width="10" height="20" rx="2" />
          <path d="M10 18h4" strokeLinecap="round" />
        </svg>
      )
    case 'design':
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <path d="M12 3l6 6-6 6-6-6 6-6z" />
          <path d="M3 21h18" strokeLinecap="round" />
        </svg>
      )
    case 'training':
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <path d="M4 19V5l8-2 8 2v14" />
          <path d="M4 12h16" />
          <path d="M12 3v18" />
        </svg>
      )
    default:
      return null
  }
}

type ServiceCardProps = {
  service: Service
  className?: string
}

export function ServiceCard({ service, className }: ServiceCardProps) {
  return (
    <article
      className={cn(
        'flex h-full flex-col rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm dark:border-slate-800/90 dark:bg-slate-900/35',
        className,
      )}
    >
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-700 dark:bg-cyan-500/10 dark:text-cyan-300">
          <ServiceIcon icon={service.icon} />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{service.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{service.summary}</p>
        </div>
      </div>
      <ul className="mt-5 space-y-2 border-t border-slate-100 pt-5 text-sm text-slate-600 dark:border-slate-800 dark:text-slate-400">
        {service.details.map((d) => (
          <li key={d} className="flex gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500/80" aria-hidden />
            <span>{d}</span>
          </li>
        ))}
      </ul>
    </article>
  )
}
