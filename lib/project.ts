import { encode } from 'qss';

export function slugify(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

/** Live screenshot of a project URL via Microlink (no stored PNG required). */
export function projectScreenshotFromUrl(
  uri: string,
  options?: { width?: number; height?: number },
): string | null {
  const url = uri.trim()
  if (!/^https?:\/\//i.test(url)) return null

  const width = options?.width ?? 1280
  const height = options?.height ?? 720
  const params = encode({
    url,
    screenshot: true,
    meta: false,
    embed: 'screenshot.url',
    colorScheme: 'light',
    'viewport.width': width,
    'viewport.height': height,
  })

  return `https://api.microlink.io/?${params}`
}

export function projectHref(project: { slug?: string | null; id: string | number }): string {
  if (project.slug) return `/projects/${project.slug}`
  return '/projects'
}

export function projectMetaDescription(project: {
  seoDescription?: string | null
  proof?: string | null
  outcome?: string | null
  desc?: string | null
  name: string
}): string {
  return (
    project.seoDescription?.trim() ||
    project.proof?.trim() ||
    project.outcome?.trim() ||
    project.desc?.trim() ||
    `${project.name} — project by Shaib Godsfavour`
  )
}
