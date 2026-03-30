import type { Project } from '../types'

export const projects: Project[] = [
  {
    id: 'food-delivery-ecosystem',
    title: 'Écosystème de livraison de repas',
    shortDescription:
      'Parcours commande–livraison de bout en bout, suivi en temps réel et outils d’administration opérationnels.',
    description: `J’ai conçu et livré un système de livraison de repas qui couvre tout le cycle : consultation des menus, panier / paiement, remise au livreur, suivi des commandes. Côté administration, les opérateurs gardent une vision claire sur cuisines, livreurs et incidents pour faire grandir l’activité sans chaos.

La stack privilégie des APIs fiables, des frontières de domaine nettes et des choix de performance pragmatiques — afin que le produit reste rapide aux heures de pointe et facile à étendre avec de nouveaux partenaires.`,
    categoryIds: ['web-platform', 'marketplace'],
    technologies: ['Laravel', 'MySQL', 'REST APIs', 'React', 'Tailwind CSS'],
    highlights: [
      'Parcours par rôle : clients, restaurants et équipes opérationnelles',
      'Tableaux de bord pour suivre commandes et engagements de service',
      'Conception API-first pour le web et de futurs clients mobiles',
    ],
    year: '2023',
    role: 'Développeur full stack',
    featured: true,
  },
  {
    id: 'multi-vendor-restaurant-platform',
    title: 'Plateforme multi-restaurants',
    shortDescription:
      'Une place de marché où plusieurs restaurants cohabitent avec des catalogues isolés.',
    description: `Ce projet demandait d’allier souplesse pour les vendeurs et cohérence pour les clients. Chaque restaurant gère son catalogue, ses prix et ses disponibilités — tandis que l’acheteur profite d’une expérience unifiée : découverte, recherche et tunnel de commande unique.

J’ai mis l’accent sur un modèle de données scalable, des services bien découpés et des patterns UI qui limitent le support — pour que l’onboarding de nouveaux restaurants ne devienne pas un goulot côté développement.`,
    categoryIds: ['web-platform', 'marketplace'],
    technologies: ['PHP (Laravel)', 'MySQL', 'JavaScript', 'REST APIs'],
    highlights: [
      'Isolation des vendeurs avec une UX de marketplace partagée',
      'Recherche et filtres adaptés à de gros catalogues hétérogènes',
      'Flux opérationnels pour modération et onboarding',
    ],
    year: '2023',
    role: 'Développeur full stack',
    featured: true,
  },
  {
    id: 'worker-client-connect',
    title: 'Plateforme de mise en relation professionnels–clients',
    shortDescription:
      'Matching et messagerie entre clients et professionnels, avec une UX orientée confiance.',
    description: `Conçue pour structurer la mise en relation : profils, demandes, validations et échanges suivis. L’objectif n’était pas seulement des annonces, mais de réduire les frictions et l’ambiguïté dans des missions concrètes.

Côté technique : sécurité pragmatique, transitions d’état explicites et notifications qui gardent les deux parties alignées — sans saturer l’utilisateur.`,
    categoryIds: ['marketplace', 'web-platform'],
    technologies: ['NestJS', 'MongoDB', 'React', 'REST APIs'],
    highlights: [
      'UX centrée sur la conversation autour de vrais besoins et résultats',
      'Services backend prêts à faire évoluer les règles de matching',
      'Couche API propice à l’observabilité et aux futurs clients mobiles',
    ],
    year: '2024',
    role: 'Développeur full stack',
    featured: true,
  },
  {
    id: 'locafound',
    title: 'Locafound — location d’appartements',
    shortDescription:
      'Application Flutter pour parcourir et suivre des locations, où que vous soyez.',
    description: `Locafound propose une expérience mobile-first : parcourir les annonces, comparer et avancer dans les demandes avec des écrans lisibles. J’ai priorisé des mises en page adaptatives, une navigation prévisible et des performances sur appareils milieu de gamme — parce qu’une recherche de logement se fait aussi en mobilité, pas seulement au bureau.

L’app s’appuie sur des APIs backend et une structure qui permet d’ajouter des fonctionnalités sans transformer la base de code en empilement de rustines.`,
    categoryIds: ['mobile'],
    technologies: ['Flutter', 'Dart', 'REST APIs', 'PostgreSQL (Prisma)', 'Node.js'],
    highlights: [
      'UX mobile pensée pour le scan rapide et les recherches sauvegardées',
      'Séparation nette entre UI, état et couche réseau',
      'Contrats API compatibles avec une itération produit continue',
    ],
    year: '2024',
    role: 'Développeur mobile & API',
    featured: true,
  },
  {
    id: 'wordpress-showcase-sites',
    title: 'Sites vitrines (WordPress)',
    shortDescription:
      'Sites marketing soignés : typo, performances et maintenabilité au rendez-vous.',
    description: `Au-delà du sur-mesure, je livre des expériences WordPress premium : chargements rapides, balisage accessible et structures éditoriales simples à faire vivre. Souvent, ce sont les vitrines d’une marque — chaque détail compte, du SEO de base à l’homogénéité des espacements et de la typo.

J’aborde WordPress comme un produit : choix de thème pertinents, plugins maîtrisés, et passation que des profils non développeurs peuvent réellement assumer.`,
    categoryIds: ['wordpress'],
    technologies: ['WordPress', 'PHP', 'HTML/CSS', 'SEO de base'],
    highlights: [
      'Workflows éditoriaux qui débloquent les équipes marketing',
      'Choix d’assets et de cache orientés performance',
      'Modèles de contenu structurés pour des types de pages réutilisables',
    ],
    year: '2023',
    role: 'Développeur web',
    featured: false,
  },
]

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id)
}
