export interface ProjectCategory {
  id: string
  label: string
  description: string
}

export interface Project {
  id: string
  title: string
  shortDescription: string
  description: string
  categoryIds: string[]
  technologies: string[]
  highlights: string[]
  year: string
  role: string
  featured?: boolean
}

export type ServiceIcon = 'web' | 'mobile' | 'design' | 'training'

export interface Service {
  id: string
  title: string
  summary: string
  details: string[]
  icon: ServiceIcon
}
