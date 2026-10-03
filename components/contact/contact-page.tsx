import {
  EMAIL_URL,
  LINKEDIN_URL,
} from '@/config/routes'
import { MessageCircle } from 'lucide-react'
import Link from 'next/link'

type ContactPageProps = {
  whatsappUrl?: string
  resumeUrl: string
}

export default function ContactPage({
  whatsappUrl = '',
  resumeUrl,
}: ContactPageProps) {
  return (
    <div className="fade-up space-y-10">
      <header className="space-y-3">
        <h1 className="font-display text-3xl font-bold tracking-tight text-highlight sm:text-4xl">
          Contact
        </h1>
        <p className="max-w-xl text-base leading-7 text-muted-foreground">
          Interested in backend systems and AI-powered applications, from APIs and LLM
          integrations to practical intelligent workflows? Reach out to discuss a collaboration
          or opportunity.
        </p>
      </header>

      <div className="flex flex-wrap gap-3">
        <Link
          href={EMAIL_URL}
          className="inline-flex items-center rounded-full border border-highlight bg-highlight/10 px-4 py-2 text-sm font-medium text-highlight transition-colors hover:bg-highlight/20"
        >
          Email me
        </Link>
        {whatsappUrl ? (
          <Link
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-chip inline-flex items-center gap-1.5"
          >
            <MessageCircle className="size-3.5" aria-hidden />
            WhatsApp
          </Link>
        ) : null}
        <Link
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="nav-chip"
        >
          LinkedIn
        </Link>
      </div>

      {/* <section className="border-t border-border pt-6">
        <h2 className="section-label mb-3">Resume</h2>
        <Link
          href={resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="soft-link text-[0.95rem]"
        >
          View CV →
        </Link>
      </section> */}
    </div>
  )
}
