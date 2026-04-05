import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { profile } from "../data/profile";

export function HeroSection() {
  const [firstName, ...restParts] = profile.name.split(" ");
  const restName = restParts.join(" ");

  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-40 dark:opacity-30"
        aria-hidden
      >
        <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-cyan-500/30 blur-3xl" />
        <div className="absolute right-0 top-24 h-80 w-80 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-slate-400/20 blur-3xl dark:bg-slate-600/20" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-14 sm:px-6 sm:pb-20 sm:pt-20 lg:px-8 lg:pt-24">
        <div className="flex items-center justify-between flex-col md:flex-row gap-10">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-3xl"
            >
              <p className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/60 px-3 py-1 text-xs font-medium text-slate-600 backdrop-blur dark:border-slate-700/80 dark:bg-slate-900/50 dark:text-slate-300">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                {profile.location} · Ouvert aux collaborations à fort impact
              </p>
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
                {firstName}{" "}
                <span className="bg-gradient-to-r from-cyan-600 to-emerald-500 bg-clip-text text-transparent dark:from-cyan-400 dark:to-emerald-400">
                  {restName}
                </span>
              </h1>
              <p className="mt-4 text-lg font-medium text-slate-700 sm:text-xl dark:text-slate-200">
                {profile.role}
              </p>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                {profile.tagline}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.55,
                delay: 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 transition hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:shadow-white/10 dark:hover:bg-slate-100"
              >
                Démarrer un échange
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center justify-center rounded-full border border-slate-300/90 bg-white/70 px-6 py-3 text-sm font-semibold text-slate-800 backdrop-blur transition hover:border-slate-400 dark:border-slate-600 dark:bg-slate-900/50 dark:text-slate-100 dark:hover:border-slate-500"
              >
                Voir les projets
              </Link>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.55,
              delay: 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <img
              src={profile.avatar}
              alt={profile.name}
              className="sm:w-96 sm:h-96 w-60 h-60 rounded-full object-cover object-top"
            />
          </motion.div>
        </div>

        <motion.dl
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="mt-14 grid gap-6 sm:grid-cols-3"
        >
          <div className="rounded-2xl border border-slate-200/80 bg-white/60 p-5 backdrop-blur dark:border-slate-800/80 dark:bg-slate-900/40">
            <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-500">
              Expérience
            </dt>
            <dd className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">
              {profile.yearsExperience}
            </dd>
            <dd className="mt-1 text-sm text-slate-600 dark:text-slate-400">
              Production logicielle au quotidien
            </dd>
          </div>
          <div className="rounded-2xl border border-slate-200/80 bg-white/60 p-5 backdrop-blur dark:border-slate-800/80 dark:bg-slate-900/40">
            <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-500">
              Poste actuel
            </dt>
            <dd className="mt-2 text-sm font-semibold leading-snug text-slate-900 dark:text-white">
              {profile.experience.company}
            </dd>
            <dd className="mt-1 text-sm text-slate-600 dark:text-slate-400">
              Depuis {profile.experience.since}
            </dd>
          </div>
          <div className="rounded-2xl border border-slate-200/80 bg-white/60 p-5 backdrop-blur dark:border-slate-800/80 dark:bg-slate-900/40">
            <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-500">
              Focus
            </dt>
            <dd className="mt-2 text-sm font-semibold text-slate-900 dark:text-white">
              Full stack · Flutter · APIs · Mentorat
            </dd>
            <dd className="mt-1 text-sm text-slate-600 dark:text-slate-400">
              Architecture propre, utilisateurs réels
            </dd>
          </div>
        </motion.dl>
      </div>
    </section>
  );
}
