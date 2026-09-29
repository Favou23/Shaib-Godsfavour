import Experience from '@/components/experience'
import {
    cvSummary,
    defaultEducation,
    defaultExpertise,
    type CmsExperienceItem,
} from '@/lib/experience'
import Link from 'next/link'

type ExperienceLandingProps = {
  experience: CmsExperienceItem[]
  resumeUrl: string
}

export default function ExperienceLanding({
  experience,
  resumeUrl,
}: ExperienceLandingProps) {
  return (
    <div className="space-y-12">
      <header className="space-y-3">
        <Link href="/" className="soft-link text-sm">
          ← home
        </Link>
        <h1 className="font-display text-3xl font-bold tracking-tight text-highlight sm:text-5xl">
          Experience
        </h1>
        {cvSummary ? (
          <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            {cvSummary}
          </p>
        ) : null}
        <p>
          <Link
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="soft-link text-sm"
          >
            Download CV →
          </Link>
        </p>
      </header>

      <Experience experience={experience} showHeading={false} />

      {defaultExpertise.length > 0 ? (
        <section className="space-y-4">
          <h2 className="section-label">expertise</h2>
          <ul className="space-y-3">
            {defaultExpertise.map((group) => (
              <li
                key={group.label}
                className="grid grid-cols-1 gap-1 sm:grid-cols-[minmax(9rem,13rem)_1fr] sm:items-baseline sm:gap-4"
              >
                <span className="text-sm text-muted-foreground">{group.label}</span>
                <span className="text-[0.95rem] leading-7 text-foreground/90">
                  {group.items}
                </span>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {defaultEducation.length > 0 ? (
        <section className="space-y-4">
          <h2 className="section-label">education</h2>
          <ul className="space-y-4">
            {defaultEducation.map((item) => (
              <li key={`${item.title}-${item.institution}`}>
                <p className="text-[0.95rem] font-medium leading-7 text-foreground">
                  {item.title}
                </p>
                <p className="text-[0.95rem] leading-7 text-muted-foreground">
                  {item.institution}
                  {item.detail ? ` · ${item.detail}` : ''}
                </p>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </div>
  )
}
