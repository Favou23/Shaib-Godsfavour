'use client'

import type { Article } from '@/lib/definitions'
import Link from 'next/link'
import { useState } from 'react'

type HomeArticlesProps = {
  articles: Article[]
}

function formatShortDate(date: string) {
  const parsed = new Date(date)
  if (Number.isNaN(parsed.getTime())) return date
  return parsed.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })
}

export const HomeArticles = ({ articles }: HomeArticlesProps) => {
  const [visibleCount, setVisibleCount] = useState(8)
  const visibleArticles = articles.slice(0, visibleCount)

  if (articles.length === 0) {
    return (
      <div className="fade-up space-y-3 py-8 text-muted-foreground">
        <p>Articles coming soon.</p>
      </div>
    )
  }

  return (
    <div className="fade-up space-y-8">
      <header className="space-y-2">
        <h1 className="font-display text-3xl font-bold tracking-tight text-highlight sm:text-4xl">
          Articles
        </h1>
        <p className="max-w-xl text-base leading-7 text-muted-foreground">
          Notes on frontend engineering, tooling, and the things I learn while building.
        </p>
      </header>

      <ul className="space-y-7">
        {visibleArticles.map((article) => {
          const href = article.href || article.uri || '#'
          const isExternal = article.kind !== 'full'
          const categories = article.category ?? []

          return (
            <li key={article.id}>
              <Link
                href={href}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
                className="group block"
              >
                <div className="mb-1.5 flex flex-wrap items-center gap-x-2 text-xs text-muted-foreground">
                  <span>{article.readTime} min read</span>
                  <span className="opacity-40">|</span>
                  <span>{formatShortDate(article.date)}</span>
                </div>
                <h2 className="font-display text-lg font-semibold tracking-tight transition-colors group-hover:text-highlight sm:text-xl">
                  {article.title}
                </h2>
                {article.desc ? (
                  <p className="mt-1.5 max-w-2xl text-[0.95rem] leading-7 text-muted-foreground">
                    {article.desc}
                  </p>
                ) : null}
                {categories.length > 0 ? (
                  <div className="mt-2 flex flex-wrap gap-x-2 text-sm text-glow/90">
                    {categories.map((category) => (
                      <span key={category}>#{category.toLowerCase()}</span>
                    ))}
                  </div>
                ) : null}
              </Link>
            </li>
          )
        })}
      </ul>

      {visibleCount < articles.length ? (
        <button
          type="button"
          onClick={() => setVisibleCount((count) => count + 6)}
          className="text-sm text-muted-foreground transition-colors hover:text-highlight"
        >
          load more
        </button>
      ) : null}
    </div>
  )
}
