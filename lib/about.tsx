import Link from 'next/link'
import type { ReactNode } from 'react'

export type CmsAbout = {
  role: string
  title: string
  intro: string
  body: string
  highlights: string[]
}

export const defaultAbout: CmsAbout = {
  role: 'AI Engineer',
  title: 'Backend dev',
  intro:
    "I build backend systems and AI-powered applications, with a focus on APIs, intelligent workflows, and the systems that make AI products reliable and useful.",
  body:
    "My work sits at the intersection of backend engineering and AI. I've built APIs, integrated LLMs, worked with retrieval systems and vector databases, and explored how architectural decisions affect the reliability, scalability, and performance of AI applications. I'm especially interested in building practical systems that turn AI capabilities into useful products.",
  highlights: ['backend systems', 'AI-powered applications', 'LLM systems'],
}

/** Emphasize highlight terms in plain text (longest match first). */
export function renderHighlightedText(text: string, highlights: string[]): ReactNode[] {
  const terms = [...highlights]
    .map((term) => term.trim())
    .filter(Boolean)
    .sort((a, b) => b.length - a.length)

  if (terms.length === 0) return [text]

  const pattern = new RegExp(`(${terms.map(escapeRegExp).join('|')})`, 'g')
  return text.split(pattern).map((part, index) => {
    if (terms.includes(part)) {
      return (
        <span key={`${part}-${index}`} className="text-mark">
          {part}
        </span>
      )
    }
    return part
  })
}

/** Render [[label|/href]] tokens as soft links. */
export function renderLinkedText(text: string): ReactNode[] {
  const nodes: ReactNode[] = []
  const pattern = /\[\[([^\]|]+)\|([^\]]+)\]\]/g
  let lastIndex = 0
  let match: RegExpExecArray | null

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index))
    }

    const label = match[1].trim()
    const href = match[2].trim()
    nodes.push(
      <Link key={`${href}-${match.index}`} href={href} className="soft-link">
        {label}
      </Link>,
    )
    lastIndex = match.index + match[0].length
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex))
  }

  return nodes.length > 0 ? nodes : [text]
}

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}
