import { getPayload } from 'payload'
import { slugify } from '../lib/project'
import config from '../payload.config'
import { ProjectData } from './seed-data'

async function main() {
  const payload = await getPayload({ config })

  console.log('Upserting project case-study fields...')

  for (const [index, project] of ProjectData.entries()) {
    const name = project.name.trim()
    const slug = project.slug || slugify(name)

    const existing = await payload.find({
      collection: 'projects',
      where: {
        or: [{ name: { equals: name } }, { slug: { equals: slug } }],
      },
      limit: 1,
      depth: 0,
    })

    const data = {
      name,
      slug,
      proof: project.proof,
      problem: project.problem,
      role: project.role,
      outcome: project.outcome,
      decisions: project.decisions,
      metrics: project.metrics,
      desc: project.desc,
      action: project.action,
      uri: project.uri,
      // Clear static overrides so live URL screenshots are used by default.
      imageUrl: project.imageUrl ?? null,
      seoDescription: project.seoDescription || project.proof,
      technologies: project.technologies.map((techName) => ({ name: techName })),
      order: index + 1,
      featured: index < 4,
    }

    if (existing.docs[0]) {
      await payload.update({
        collection: 'projects',
        id: existing.docs[0].id,
        data,
      })
      console.log(`  updated ${name}`)
    } else {
      await payload.create({
        collection: 'projects',
        data,
      })
      console.log(`  created ${name}`)
    }
  }

  console.log('Done.')
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
