import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ScrollReveal } from "../components/ScrollReveal";
import { SEO } from "../components/SEO";
import { profile } from "../data/profile";

export function About() {
  return (
    <>
      <SEO
        title="À propos"
        description={`${profile.name} : développeur full stack, ingénieur Flutter et formateur chez ${profile.experience.company} à ${profile.location}.`}
        path="/about"
      />
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            À propos
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            La crédibilité se gagne dans les commits, en salle et en production
            — pas dans les adjectifs. Voici la personne derrière le travail.
          </p>
        </ScrollReveal>

        <div className="mt-12 space-y-16">
          <AboutSection />

          <ScrollReveal>
            <section className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm dark:border-slate-800/90 dark:bg-slate-900/35 sm:p-8">
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
                Expérience
              </h2>
              <div className="mt-6 border-l-2 border-cyan-500/80 pl-5">
                <p className="text-sm font-semibold uppercase tracking-wider text-cyan-700 dark:text-cyan-400">
                  {profile.experience.since} — aujourd'hui
                </p>
                <h3 className="mt-1 text-lg font-semibold text-slate-900 dark:text-white">
                  {profile.experience.company}
                </h3>
                <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                  {profile.experience.role}
                </p>
                <p className="mt-3 leading-relaxed text-slate-600 dark:text-slate-400">
                  {profile.experience.summary}
                </p>
              </div>
            </section>
          </ScrollReveal>

          <SkillsSection
            framed={false}
            heading="Compétences par domaine"
            description="Ma façon d’aborder la stack : choisir les bons outils pour le problème, puis garder une architecture honnête quand les besoins évoluent."
          />

          <ScrollReveal>
            <section>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
                Contact
              </h2>
              <p className="mt-2 max-w-xl text-slate-600 dark:text-slate-400">
                Email, WhatsApp ou message LinkedIn — selon ce qui vous convient
                le mieux.
              </p>
              <ul className="mt-6 flex flex-wrap gap-4">
                <li>
                  <a
                    href={profile.social.github}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-800 transition hover:border-cyan-500/50 hover:text-cyan-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-cyan-500/40 dark:hover:text-cyan-300"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href={profile.social.linkedin}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-800 transition hover:border-cyan-500/50 hover:text-cyan-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-cyan-500/40 dark:hover:text-cyan-300"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href={profile.social.whatsapp}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-800 transition hover:border-cyan-500/50 hover:text-cyan-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-cyan-500/40 dark:hover:text-cyan-300"
                  >
                    WhatsApp
                  </a>
                </li>
              </ul>
            </section>
          </ScrollReveal>
        </div>
      </div>
    </>
  );
}
