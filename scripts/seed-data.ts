import {
    ARTICLE_URL,
    CONTACT_URL,
    EMAIL_URL,
    EXPERIENCE_URL,
    GITHUB_URL,
    LINKEDIN_URL,
    MEDIUM_URL,
    PROJECT_URL,
    RESUME_URL,
} from '@/config/routes'
import type { Article, NavLinks, PortfolioItem, ProjectDataType } from '@/lib/definitions'

type SeedFooterItem = {
  id: number
  title: string
  [key: string]: string | number | undefined
}

export const NavData: NavLinks[] = [
  { id: 1, name: 'Projects', href: PROJECT_URL },
  { id: 2, name: 'Experience', href: EXPERIENCE_URL },
  { id: 3, name: 'Articles', href: ARTICLE_URL },
  { id: 4, name: 'Contact', href: CONTACT_URL },
]

export const PortfolioData: PortfolioItem[] = [
  { id: 1, name: 'GitHub', uri: GITHUB_URL },
  { id: 2, name: 'LinkedIn', uri: LINKEDIN_URL },
  { id: 3, name: 'Medium', uri: MEDIUM_URL },
  { id: 4, name: 'Resume/CV', uri: RESUME_URL },
]

// Add only projects you can publicly claim and describe accurately.
export const ProjectData: ProjectDataType[] = []

// Add only articles published under your own profile.
export const ArticlesData: Article[] = []

export const FooterData: SeedFooterItem[] = [
  {
    id: 1,
    title: 'Find Me Here',
    github: 'GitHub',
    githubUri: GITHUB_URL,
    linkedIn: 'LinkedIn',
    linkedInUri: LINKEDIN_URL,
    medium: 'Medium',
    mediumUri: MEDIUM_URL,
    email: 'Email',
    emailUri: EMAIL_URL,
  },
  {
    id: 2,
    title: 'Quick Links',
    home: 'Home',
    homeUri: '/',
    projects: 'Projects',
    projectsUri: PROJECT_URL,
    experience: 'Experience',
    experienceUri: EXPERIENCE_URL,
    articles: 'Articles',
    articlesUri: ARTICLE_URL,
    contact: 'Contact',
    contactUri: CONTACT_URL,
  },
]
