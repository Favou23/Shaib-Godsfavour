import LandingPage from '@/components/landing-page'
import { GITHUB_URL, LINKEDIN_URL, MEDIUM_URL } from '@/config/routes'
import { getArticles, getProjects, getSiteSettings } from '@/lib/cms'
import process from 'node:process'
import { URL } from 'node:url'

export default async function Page() {
  const [projects, articles, siteSettings] = await Promise.all([
    getProjects({ featured: true, limit: 4 }),
    getArticles({ limit: 4 }),
    getSiteSettings(),
  ])

  const featuredProjects =
    projects.length > 0 ? projects : await getProjects({ limit: 4 })
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : 'http://localhost:3000')
  const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': new URL('/#person', siteUrl).toString(),
    name: 'Shaib Godsfavour',
    url: new URL('/', siteUrl).toString(),
    jobTitle: [siteSettings.about.role, siteSettings.about.title]
      .filter(Boolean)
      .join(' and '),
    description: siteSettings.about.intro,
    sameAs: [LINKEDIN_URL, GITHUB_URL, MEDIUM_URL],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personJsonLd).replace(/</g, '\\u003c'),
        }}
      />
      <LandingPage
        projects={featuredProjects}
        articles={articles}
        about={siteSettings.about}
        experience={siteSettings.experience}
        whatsappUrl={siteSettings.contact.whatsappUrl}
      />
    </>
  )
}
