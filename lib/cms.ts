import {
    DEFAULT_WHATSAPP_MESSAGE,
    RESUME_URL,
    buildWhatsAppUrl,
} from '@/config/routes'
import { defaultAbout, type CmsAbout } from '@/lib/about'
import { defaultExperience, type CmsExperienceItem } from '@/lib/experience'
import { projectScreenshotFromUrl } from '@/lib/project'
import config from '@payload-config'
import { getPayload } from 'payload'

export type CmsProject = {
  id: string
  name: string
  slug: string
  proof?: string | null
  problem?: string | null
  role?: string | null
  outcome?: string | null
  decisions?: string | null
  metrics: Array<{ label: string; value: string }>
  desc?: string | null
  action: string
  uri: string
  image?: string | null
  seoDescription?: string | null
  technologies: string[]
  order: number
  featured: boolean
}

export type CmsArticle = {
  id: string
  title: string
  kind: 'external' | 'full'
  slug?: string | null
  externalUrl?: string | null
  publishedAt: string
  date: string
  readTime: string
  summary?: string | null
  desc?: string
  categories: string[]
  category: string[]
  image?: string
  href: string
  uri: string
  order: number
  content?: unknown
}

export type CmsFooterColumn = {
  id: string
  title: string
  links: Array<{
    id: string
    label: string
    url: string
    isEmail?: boolean | null
  }>
}

export type { CmsAbout, CmsExperienceItem }

export type CmsContact = {
  whatsappPhone: string
  whatsappMessage: string
  whatsappUrl: string
}

export type CmsFooterBrand = {
  copyrightName: string
  location: string
  timezone: string
}

export const defaultFooterBrand: CmsFooterBrand = {
  copyrightName: 'Shaib Godsfavour',
  location: 'LAGOS, NIGERIA',
  timezone: 'Africa/Lagos',
}

export type CmsSiteSettings = {
  about: CmsAbout
  contact: CmsContact
  resumeUrl: string
  experience: CmsExperienceItem[]
  footer: CmsFooterBrand
  navLinks: Array<{ id: string; name: string; href: string }>
  socialLinks: Array<{ id: string; name: string; uri: string }>
  footerColumns: CmsFooterColumn[]
}

type ProjectDoc = {
  id: string | number
  name: string
  slug?: string | null
  proof?: string | null
  problem?: string | null
  role?: string | null
  outcome?: string | null
  decisions?: string | null
  metrics?: Array<{ label: string; value: string }> | null
  desc?: string | null
  action: string
  uri: string
  image?: number | string | MediaDoc | null
  imageUrl?: string | null
  seoDescription?: string | null
  technologies?: Array<{ name: string }> | null
  order?: number | null
  featured?: boolean | null
}

type MediaDoc = {
  url?: string | null
}

type ArticleDoc = {
  id: string | number
  title: string
  kind: 'external' | 'full'
  slug?: string | null
  externalUrl?: string | null
  publishedAt: string
  readTime: string
  summary?: string | null
  categories?: Array<{ name: string }> | null
  image?: number | string | MediaDoc | null
  imageUrl?: string | null
  order?: number | null
  content?: unknown
}

type SiteSettingsDoc = {
  about?: {
    role?: string | null
    title?: string | null
    intro?: string | null
    body?: string | null
    highlights?: Array<{ id?: string | null; term: string }> | null
  } | null
  contact?: {
    whatsappPhone?: string | null
    whatsappMessage?: string | null
  } | null
  resume?: {
    url?: string | null
  } | null
  experience?: Array<{
    id?: string | null
    company: string
    role: string
    badge?: string | null
    period?: string | null
    summary?: string | null
    highlights?: Array<{ id?: string | null; text: string }> | null
  }> | null
  navLinks?: Array<{ id?: string | null; name: string; href: string }> | null
  socialLinks?: Array<{ id?: string | null; name: string; uri: string }> | null
  footer?: {
    copyrightName?: string | null
    location?: string | null
    timezone?: string | null
  } | null
  footerColumns?: Array<{
    id?: string | null
    title: string
    links?: Array<{
      id?: string | null
      label: string
      url: string
      isEmail?: boolean | null
    }> | null
  }> | null
}

async function getPayloadClient() {
  return getPayload({ config })
}

function formatArticleDate(value: string) {
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return value
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

function mapProject(doc: ProjectDoc): CmsProject {
  const imageFromUpload =
    doc.image && typeof doc.image === 'object' && 'url' in doc.image && doc.image.url
      ? doc.image.url
      : undefined

  return {
    id: String(doc.id),
    name: doc.name,
    slug: doc.slug?.trim() || String(doc.id),
    proof: doc.proof,
    problem: doc.problem,
    role: doc.role,
    outcome: doc.outcome,
    decisions: doc.decisions,
    metrics: (doc.metrics ?? [])
      .map((metric) => ({
        label: metric.label.trim(),
        value: metric.value.trim(),
      }))
      .filter((metric) => metric.label && metric.value),
    desc: doc.desc,
    action: doc.action,
    uri: doc.uri,
    image:
      imageFromUpload ||
      doc.imageUrl?.trim() ||
      projectScreenshotFromUrl(doc.uri) ||
      null,
    seoDescription: doc.seoDescription,
    technologies: (doc.technologies ?? []).map((tech) => tech.name),
    order: doc.order ?? 0,
    featured: Boolean(doc.featured),
  }
}

function mapArticle(doc: ArticleDoc): CmsArticle {
  const imageFromUpload =
    doc.image && typeof doc.image === 'object' && 'url' in doc.image && doc.image.url
      ? doc.image.url
      : undefined
  const image = imageFromUpload || doc.imageUrl || undefined
  const categories = (doc.categories ?? []).map((category) => category.name)
  const href =
    doc.kind === 'full' && doc.slug
      ? `/articles/${doc.slug}`
      : doc.externalUrl || '#'

  return {
    id: String(doc.id),
    title: doc.title,
    kind: doc.kind,
    slug: doc.slug,
    externalUrl: doc.externalUrl,
    publishedAt: doc.publishedAt,
    date: formatArticleDate(doc.publishedAt),
    readTime: doc.readTime,
    summary: doc.summary,
    desc: doc.summary ?? undefined,
    categories,
    category: categories,
    image,
    href,
    uri: href,
    order: doc.order ?? 0,
    content: doc.content,
  }
}

function mapSiteSettings(doc: SiteSettingsDoc): CmsSiteSettings {
  const about = doc.about
  const highlights = (about?.highlights ?? [])
    .map((item) => item.term.trim())
    .filter(Boolean)

  const whatsappMessage =
    doc.contact?.whatsappMessage?.trim() || DEFAULT_WHATSAPP_MESSAGE
  const whatsappPhone = doc.contact?.whatsappPhone?.trim() || ''
  const whatsappUrl = buildWhatsAppUrl(whatsappPhone, whatsappMessage)

  const experienceFromCms = (doc.experience ?? [])
    .map((item) => ({
      company: item.company.trim(),
      role: item.role.trim(),
      badge: item.badge?.trim() || undefined,
      period: item.period?.trim() || undefined,
      summary: item.summary?.trim() || undefined,
      highlights: (item.highlights ?? [])
        .map((highlight) => highlight.text.trim())
        .filter(Boolean),
    }))
    .filter((item) => item.company && item.role)

  const resumeFromSocial = (doc.socialLinks ?? []).find((link) =>
    /resume|cv/i.test(link.name),
  )?.uri
  const resumeUrl = doc.resume?.url?.trim() || resumeFromSocial?.trim() || RESUME_URL

  return {
    about: {
      role: about?.role?.trim() || defaultAbout.role,
      title: about?.title?.trim() || defaultAbout.title,
      intro: about?.intro?.trim() || defaultAbout.intro,
      body: about?.body?.trim() || defaultAbout.body,
      highlights: highlights.length > 0 ? highlights : defaultAbout.highlights,
    },
    contact: {
      whatsappPhone,
      whatsappMessage,
      whatsappUrl,
    },
    resumeUrl,
    experience: experienceFromCms.length > 0 ? experienceFromCms : defaultExperience,
    footer: {
      copyrightName: doc.footer?.copyrightName?.trim() || defaultFooterBrand.copyrightName,
      location: doc.footer?.location?.trim() || defaultFooterBrand.location,
      timezone: doc.footer?.timezone?.trim() || defaultFooterBrand.timezone,
    },
    navLinks: (doc.navLinks ?? []).map((link, index) => ({
      id: link.id ?? String(index),
      name: link.name,
      href: link.href,
    })),
    socialLinks: (doc.socialLinks ?? []).map((link, index) => ({
      id: link.id ?? String(index),
      name: link.name,
      uri: /resume|cv/i.test(link.name) ? resumeUrl : link.uri,
    })),
    footerColumns: (doc.footerColumns ?? []).map((column, index) => ({
      id: column.id ?? String(index),
      title: column.title,
      links: (column.links ?? []).map((link, linkIndex) => ({
        id: link.id ?? String(linkIndex),
        label: link.label,
        url: link.url,
        isEmail: link.isEmail,
      })),
    })),
  }
}

export async function getProjects(options?: { featured?: boolean; limit?: number }) {
  const payload = await getPayloadClient()
  const where =
    options?.featured === undefined
      ? undefined
      : {
          featured: {
            equals: options.featured,
          },
        }

  const result = await payload.find({
    collection: 'projects',
    where,
    sort: 'order',
    limit: options?.limit ?? 100,
    depth: 1,
  })

  return result.docs.map((doc) => mapProject(doc as ProjectDoc))
}

export async function getProjectBySlug(slug: string) {
  const payload = await getPayloadClient()
  const result = await payload.find({
    collection: 'projects',
    where: {
      slug: {
        equals: slug,
      },
    },
    limit: 1,
    depth: 1,
  })

  const doc = result.docs[0] as ProjectDoc | undefined
  if (doc) return mapProject(doc)

  if (!/^\d+$/.test(slug)) return null

  const legacyDoc = await payload.findByID({
    collection: 'projects',
    id: Number(slug),
    depth: 1,
  })

  return mapProject(legacyDoc as ProjectDoc)
}

export async function getArticles(options?: { limit?: number }) {
  const payload = await getPayloadClient()
  const result = await payload.find({
    collection: 'articles',
    sort: 'order',
    limit: options?.limit ?? 100,
    depth: 1,
  })

  return result.docs.map((doc) => mapArticle(doc as ArticleDoc))
}

export async function getArticleBySlug(slug: string) {
  const payload = await getPayloadClient()
  const result = await payload.find({
    collection: 'articles',
    where: {
      and: [{ slug: { equals: slug } }, { kind: { equals: 'full' } }],
    },
    limit: 1,
    depth: 1,
  })

  const doc = result.docs[0] as ArticleDoc | undefined
  if (!doc) return null

  return mapArticle(doc)
}

export async function getSiteSettings(): Promise<CmsSiteSettings> {
  const payload = await getPayloadClient()
  const doc = await payload.findGlobal({
    slug: 'site-settings',
    depth: 0,
  })

  return mapSiteSettings(doc as SiteSettingsDoc)
}
