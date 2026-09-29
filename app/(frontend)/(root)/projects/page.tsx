import ProjectLanding from '@/components/projects/project-landing'
import { getProjects } from '@/lib/cms'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Selected software projects by Shaib Godsfavour.',
  openGraph: {
    title: 'Projects | Shaib Godsfavour',
    description: 'Selected software projects by Shaib Godsfavour.',
    url: '/projects',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Shaib Godsfavour' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Projects | Shaib Godsfavour',
    description: 'Selected software projects by Shaib Godsfavour.',
    images: ['/og.png'],
  },
}

export default async function Page() {
  const projects = await getProjects()

  return <ProjectLanding projects={projects} />
}
