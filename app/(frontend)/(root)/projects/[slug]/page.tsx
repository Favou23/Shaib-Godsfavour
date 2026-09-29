import ProjectCaseStudy from '@/components/projects/project-case-study'
import { getProjectBySlug } from '@/lib/cms'
import { projectMetaDescription } from '@/lib/project'
import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

type PageProps = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const project = await getProjectBySlug(slug)

  if (!project) {
    return { title: 'Project not found' }
  }

  const description = projectMetaDescription(project)
  const images = project.image
    ? [{ url: project.image, width: 1200, height: 630, alt: project.name }]
    : [{ url: '/og.png', width: 1200, height: 630, alt: project.name }]

  return {
    title: project.name,
    description,
    openGraph: {
      title: project.name,
      description,
      url: `/projects/${project.slug}`,
      type: 'article',
      images,
    },
    twitter: {
      card: 'summary_large_image',
      title: project.name,
      description,
      images: images.map((image) => image.url),
    },
  }
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params
  const project = await getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  return (
    <article className="fade-up mx-auto max-w-2xl">
      <Link href="/projects" className="soft-link text-sm">
        ← projects
      </Link>

      <header className="mt-8 mb-10 space-y-3">
        <h1 className="font-display text-3xl font-bold tracking-tight text-highlight sm:text-5xl">
          {project.name}
        </h1>
      </header>

      <ProjectCaseStudy project={project} />
    </article>
  )
}
