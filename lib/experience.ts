export type CmsExperienceItem = {
  company: string
  role: string
  /** Short promotion / status chip, e.g. "Promoted to Team Lead" */
  badge?: string
  period?: string
  summary?: string
  highlights: string[]
}

export type CmsEducationItem = {
  title: string
  institution: string
  detail?: string
}

export type CmsExpertiseGroup = {
  label: string
  items: string
}

/** Verified experience is managed in the Payload Site Settings global. */
export const defaultExperience: CmsExperienceItem[] = []

export const defaultEducation: CmsEducationItem[] = []

export const defaultExpertise: CmsExpertiseGroup[] = []

export const cvSummary = ''
