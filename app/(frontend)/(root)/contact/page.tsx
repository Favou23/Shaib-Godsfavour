import ContactPage from '@/components/contact/contact-page'
import { getSiteSettings } from '@/lib/cms'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Shaib Godsfavour for collaborations and work'
}

export default async function Page() {
  const { contact, resumeUrl } = await getSiteSettings()

  return (
    <ContactPage
      whatsappUrl={contact.whatsappUrl}
      whatsappPhone={contact.whatsappPhone}
      resumeUrl={resumeUrl}
    />
  )
}
