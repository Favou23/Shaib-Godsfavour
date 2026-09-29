import { HomeArticles } from '@/components/article/home-articles'
import { getArticles } from '@/lib/cms'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Articles',
  description: 'Articles and technical writing by Shaib Godsfavour.',
  openGraph: {
    title: 'Articles | Shaib Godsfavour',
    description: 'Articles and technical writing by Shaib Godsfavour.',
    url: '/articles',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Shaib Godsfavour' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Articles | Shaib Godsfavour',
    description: 'Articles and technical writing by Shaib Godsfavour.',
    images: ['/og.png'],
  },
}

export default async function Page() {
  const articles = await getArticles()

  return (
    <div>
      <HomeArticles articles={articles} />
    </div>
  )
}
