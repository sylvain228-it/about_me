/** Profil central — mettre à jour les URL sociales et les coordonnées en production. */
export const profile = {
  name: 'ANANI Kokouvi Yovo',
  shortName: 'Kokouvi',
  role: 'Développeur full stack web & mobile',
  location: 'Lomé, Togo',
  tagline:
    'Je conçois des plateformes web et des produits mobiles évolutifs — et j’aide d’autres développeurs à livrer avec confiance.',
  email: 'hello@example.com',
  phone: '+228 XX XX XX XX',
  social: {
    github: 'https://github.com/',
    linkedin: 'https://www.linkedin.com/in/',
    /** E.164 sans + pour wa.me */
    whatsapp: 'https://wa.me/22800000000',
  },
  experience: {
    company: 'DTECH GROUP',
    role: 'Développeur & formateur',
    since: 'janvier 2023',
    summary:
      'Je développe des logiciels en production, j’accompagne des développeurs juniors et je crée des supports pédagogiques qui transforment des concepts complexes en pratique concrète.',
  },
  yearsExperience: '3+',
  skills: {
    frontend: ['React.js', 'Next.js', 'HTML', 'CSS', 'JavaScript', 'Tailwind CSS'],
    backend: ['PHP (Laravel)', 'Node.js (NestJS)'],
    mobile: ['Flutter'],
    databases: ['MySQL', 'MongoDB', 'PostgreSQL (Prisma)'],
    other: ['REST APIs', 'Git & GitHub', 'Docker (bases)', 'WordPress', 'Administration système'],
  },
  mission: `Je m’investis dans des logiciels qui tiennent le choc dans le réel : architecture claire, arbitrages assumés, interfaces qui respectent les utilisateurs. Autodidacte, je sais à quel point un bon mentorat accélère la montée en compétences — c’est pourquoi je consacre du temps à la formation, à la qualité du code et à une communication posée.`,
} as const
