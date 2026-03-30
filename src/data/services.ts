import type { Service } from '../types'

export const services: Service[] = [
  {
    id: 'web-development',
    title: 'Développement web',
    summary: 'Produits web full stack, architecture maintenable et interface soignée.',
    details: [
      'Frontends React / Next.js avec design system porté par Tailwind',
      'Backends Laravel et NestJS, avec des APIs pragmatiques',
      'MySQL, MongoDB et PostgreSQL (Prisma) selon le besoin',
      'Workflows compatibles Docker pour des environnements reproductibles',
    ],
    icon: 'web',
  },
  {
    id: 'mobile-development',
    title: 'Développement d’applications mobiles',
    summary: 'Applications Flutter cross-plateforme : claires, rapides, ancrées dans le terrain.',
    details: [
      'Découpage fonctionnel qui tient quand le produit grossit',
      'Patterns UI et navigation pensés pour la performance',
      'Intégration avec des backends REST et des contrats API évolutifs',
    ],
    icon: 'mobile',
  },
  {
    id: 'ui-ux-design',
    title: 'Design UI / UX',
    summary: 'Interfaces qui réduisent la charge cognitive et hiérarchisent l’information sans bruit.',
    details: [
      'Mises en page modernes, typo et espacements maîtrisés',
      'Responsive mobile-first et contrastes accessibles',
      'Alignement design ↔ implémentation (fini les écarts « mystère »)',
    ],
    icon: 'design',
  },
  {
    id: 'technical-training',
    title: 'Formation technique',
    summary: 'Mentorat terrain et supports pour développeurs juniors.',
    details: [
      'Explications structurées, reliées à du code livré en production',
      'Revues de code qui enseignent des patterns, pas seulement des correctifs',
      'Ateliers et contenus calibrés sur les contraintes de projet réelles',
    ],
    icon: 'training',
  },
]
