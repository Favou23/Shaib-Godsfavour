import { getArticles, getProjects } from '@/lib/cms'
import type { MetadataRoute } from 'next'
import process from 'node:process'
import { URL } from 'node:url'

export const dynamic = 'force-dynamic'

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000')

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [projects, articles] = await Promise.all([getProjects(), getArticles()])
  const staticRoutes = ['', '/projects', '/experience', '/articles', '/contact']

  return [
    ...staticRoutes.map((route) => ({
      url: new URL(route, siteUrl).toString(),
    })),
    ...projects.map((project) => ({
      url: new URL(`/projects/${project.slug}`, siteUrl).toString(),
    })),
    ...articles
      .filter((article) => article.kind === 'full' && article.slug)
      .map((article) => ({
        url: new URL(`/articles/${article.slug}`, siteUrl).toString(),
      })),
  ]
}