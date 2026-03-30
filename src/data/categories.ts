import type { ProjectCategory } from '../types'

export const categories: ProjectCategory[] = [
  {
    id: 'web-platform',
    label: 'Plateformes web',
    description: 'Applications web full stack, tableaux de bord et systèmes multi-tenant.',
  },
  {
    id: 'mobile',
    label: 'Applications mobiles',
    description: 'Apps Flutter cross-plateforme, centrées sur l’ergonomie et les performances.',
  },
  {
    id: 'marketplace',
    label: 'Places de marché & mises en relation',
    description: 'Plateformes qui connectent particuliers, vendeurs et prestataires.',
  },
  {
    id: 'wordpress',
    label: 'WordPress',
    description: 'Sites vitrines à fort impact et expériences pilotées par le contenu.',
  },
]
