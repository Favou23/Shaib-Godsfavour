import ExperienceLanding from '@/components/experience-landing'
import { getSiteSettings } from '@/lib/cms'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Experience',
  description: 'Professional experience of Shaib Godsfavour.',
  openGraph: {
    title: 'Experience | Shaib Godsfavour',
    description: 'Professional experience of Shaib Godsfavour.',
    url: '/experience',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Shaib Godsfavour' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Experience | Shaib Godsfavour',
    description: 'Professional experience of Shaib Godsfavour.',
    images: ['/og.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default async function Page() {
  const siteSettings = await getSiteSettings()

  return (
    <ExperienceLanding
      experience={siteSettings.experience}
      resumeUrl={siteSettings.resumeUrl}
    />
  )
}
