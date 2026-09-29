'use client'

import type { ProjectDataType } from '@/lib/definitions'
import { projectHref } from '@/lib/project'
import Link from 'next/link'

type ProjectLandingProps = {
  projects: ProjectDataType[]
}

function listBlurb(project: ProjectDataType) {
  return (
    project.proof?.trim() ||
    project.outcome?.trim() ||
    project.desc?.trim() ||
    'View case study'
  )
}

export default function ProjectLanding({ projects }: ProjectLandingProps) {
  if (projects.length === 0) {
    return (
      <div className="fade-up space-y-4">
        <header className="space-y-2">
          <h1 className="font-display text-3xl font-bold tracking-tight text-highlight sm:text-4xl">
            Projects
          </h1>
          <p className="max-w-xl text-base leading-7 text-muted-foreground">
            Project details coming soon.
          </p>
        </header>
      </div>
    )
  }

  return (
    <div className="fade-up space-y-8">
      <header className="space-y-2">
        <h1 className="font-display text-3xl font-bold tracking-tight text-highlight sm:text-4xl">
          Projects
        </h1>
        <p className="max-w-xl text-base leading-7 text-muted-foreground">
          Products and platforms I&apos;ve helped design and ship — with role, outcome, and stack.
        </p>
      </header>

      <ul className="space-y-6">
        {projects.map((project) => (
          <li key={project.id}>
            <Link
              href={projectHref(project)}
              className="group grid w-full grid-cols-1 gap-2 text-left sm:grid-cols-[minmax(8rem,12rem)_1fr] sm:gap-5"
            >
              <span className="font-display text-lg font-semibold text-highlight transition-colors group-hover:text-glow">
                {project.name.trim()}
              </span>
              <span>
                <span className="block text-[0.95rem] leading-7 text-muted-foreground transition-colors group-hover:text-foreground/85">
                  {listBlurb(project)}
                </span>
                <span className="mt-3 flex flex-wrap gap-2">
                  {project.technologies.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-border px-2 py-0.5 text-xs text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
