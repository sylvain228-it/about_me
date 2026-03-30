import { ScrollReveal } from './ScrollReveal'
import { profile } from '../data/profile'

const groups = [
  { title: 'Front-end', items: profile.skills.frontend },
  { title: 'Back-end', items: profile.skills.backend },
  { title: 'Mobile', items: profile.skills.mobile },
  { title: 'Bases de données', items: profile.skills.databases },
  { title: 'Plateforme & delivery', items: profile.skills.other },
] as const

type SkillsSectionProps = {
  heading?: string
  description?: string
  /** When false, omit outer border/background (e.g. nested on About). */
  framed?: boolean
}

export function SkillsSection({
  heading = 'Stack et outils',
  description = 'Une stack pragmatique : écosystèmes JavaScript modernes côté web, backends solides là où ils ont leur place, et Flutter lorsque le produit vit dans la poche.',
  framed = true,
}: SkillsSectionProps) {
  const shell = framed
    ? 'border-y border-slate-200/80 bg-slate-50/50 py-16 dark:border-slate-800/80 dark:bg-slate-900/20'
    : 'py-4'

  return (
    <section className={shell}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white">{heading}</h2>
            <p className="mt-3 text-slate-600 dark:text-slate-400">{description}</p>
          </div>
        </ScrollReveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((g, i) => (
            <ScrollReveal key={g.title} delay={i * 0.05}>
              <div className="h-full rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm dark:border-slate-800/90 dark:bg-slate-900/40">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-cyan-700 dark:text-cyan-400">
                  {g.title}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {g.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-lg border border-slate-200/80 bg-slate-50 px-2.5 py-1 font-mono text-xs text-slate-800 dark:border-slate-700 dark:bg-slate-800/50 dark:text-slate-200"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
