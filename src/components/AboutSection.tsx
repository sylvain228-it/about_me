import { ScrollReveal } from "./ScrollReveal";
import { profile } from "../data/profile";

/** Biographie et positionnement — page À propos. */
export function AboutSection() {
  return (
    <section className="space-y-8">
      <div className="flex items-center justify-between gap-10 flex-col md:flex-row">
        <div className="md:flex-1/2">
          <ScrollReveal>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
              Parcours
            </h2>
            <div className="prose prose-slate mt-4 max-w-none dark:prose-invert">
              <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                Je suis développeur autodidacte avec une règle simple : livrer
                des logiciels qui tiennent lorsque de vraies personnes les
                utilisent. Depuis {profile.yearsExperience} ans d'expérience,
                cette exigence m'a mené des expérimentations solo aux
                plateformes en production — livraison de repas, marketplaces
                multi-vendeurs, mises en relation professionnels-clients, ou
                encore l'expérience mobile de location{" "}
                <strong className="font-semibold text-slate-900 dark:text-white">
                  Locafound
                </strong>
                .
              </p>
              <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-400">
                Aujourd'hui, je suis développeur et formateur chez{" "}
                <strong className="font-semibold text-slate-900 dark:text-white">
                  {profile.experience.company}
                </strong>{" "}
                (depuis {profile.experience.since}). J'écris du code,
                j'accompagne des profils juniors et je produis des supports qui
                transforment des concepts abstraits en habitudes répétables —
                parce que la voie la plus rapide pour faire progresser une
                équipe, c'est de rendre l'ingénierie lisible.
              </p>
              <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-400">
                Mon travail couvre Laravel et NestJS côté serveur, React et
                Next.js sur le web, et Flutter sur mobile — avec MySQL, MongoDB
                et PostgreSQL (Prisma) lorsque le modèle relationnel l'emporte.
                J'attache de l'importance à des contrats REST fiables, à un
                historique Git lisible et à des environnements Docker qui
                évitent le fameux « ça marche sur ma machine ».
              </p>
            </div>
          </ScrollReveal>
        </div>
        <div className="md:flex-1/2">
          <ScrollReveal>
            <img
              src="/src/assets/me_prof.jpeg"
              alt="ANANI Kokouvi Yovo"
              className="md:w-96 md:h-96 w-60 h-60 rounded-full object-cover object-top"
            />
          </ScrollReveal>
        </div>
      </div>

      <ScrollReveal delay={0.08}>
        <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
          Mission
        </h3>
        <p className="mt-3 max-w-3xl leading-relaxed text-slate-600 dark:text-slate-400">
          {profile.mission}
        </p>
      </ScrollReveal>
    </section>
  );
}
