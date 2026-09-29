import { EXPERIENCE_URL } from '@/config/routes'
import type { CmsExperienceItem } from '@/lib/experience'
import Link from 'next/link'

type ExperienceProps = {
  experience: CmsExperienceItem[]
  /** Homepage preview: show only the first N roles. */
  limit?: number
  /** Cap bullets per role (0 hides bullets). */
  highlightLimit?: number
  showViewMore?: boolean
  /** Hide the section label when the page already has an h1. */
  showHeading?: boolean
}

function ExperienceList({
  items,
  highlightLimit,
}: {
  items: CmsExperienceItem[]
  highlightLimit?: number
}) {
  return (
    <ul className="space-y-8">
      {items.map((item) => {
        const highlights =
          typeof highlightLimit === 'number'
            ? item.highlights.slice(0, highlightLimit)
            : item.highlights

        return (
          <li key={`${item.company}-${item.role}-${item.period ?? ''}`}>
            <div className="grid grid-cols-1 gap-1 sm:grid-cols-[minmax(7rem,11rem)_1fr] sm:items-baseline sm:gap-4">
              <div>
                <p className="font-display text-base font-semibold text-highlight sm:text-lg">
                  {item.company}
                </p>
                {item.period ? (
                  <p className="mt-0.5 text-sm text-muted-foreground">{item.period}</p>
                ) : null}
              </div>
              <div className="space-y-3">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="text-[0.95rem] font-medium leading-7 text-foreground">
                      {item.role}
                    </p>
                    {item.badge ? (
                      <span className="inline-flex items-center rounded-sm bg-highlight px-2 py-0.5 font-mono text-[0.65rem] font-semibold uppercase tracking-wide text-[#0b0e0b]">
                        {item.badge}
                      </span>
                    ) : null}
                  </div>
                  {item.summary ? (
                    <p className="mt-1 text-[0.95rem] leading-7 text-muted-foreground">
                      {item.summary}
                    </p>
                  ) : null}
                </div>
                {highlights.length > 0 ? (
                  <ul className="space-y-2 text-[0.95rem] leading-7 text-muted-foreground">
                    {highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-2">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-highlight/70" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default function Experience({
  experience,
  limit,
  highlightLimit,
  showViewMore = false,
  showHeading = true,
}: ExperienceProps) {
  if (experience.length === 0) {
    return (
      <section className="fade-up space-y-3">
        {showHeading ? <h2 className="section-label">experience</h2> : null}
        <p className="text-sm text-muted-foreground">Experience details coming soon.</p>
      </section>
    )
  }

  const items =
    typeof limit === 'number' && limit > 0 ? experience.slice(0, limit) : experience
  const hasMore = showViewMore && experience.length > items.length

  return (
    <section className="fade-up" style={{ animationDelay: '180ms' }}>
      {showHeading ? (
        <>
          <div className="mb-2 flex items-baseline justify-between gap-4">
            <h2 className="section-label">experience</h2>
            {hasMore ? (
              <Link
                href={EXPERIENCE_URL}
                className="text-sm text-muted-foreground transition-colors hover:text-highlight"
              >
                view more
              </Link>
            ) : null}
          </div>
          <p className="mb-5 max-w-xl text-sm leading-6 text-muted-foreground">
            Roles where I owned delivery, not just tickets.
          </p>
        </>
      ) : null}

      <ExperienceList items={items} highlightLimit={highlightLimit} />

      {hasMore ? (
        <div className="mt-6">
          <Link href={EXPERIENCE_URL} className="soft-link text-sm">
            view full experience →
          </Link>
        </div>
      ) : null}
    </section>
  )
}
