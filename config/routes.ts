const PROJECT_URL: string = '/projects'
const ARTICLE_URL: string = '/articles'
const EXPERIENCE_URL: string = '/experience'
const TALK_URL: string = '/talks'
const ABOUT_URL: string = '/about'
const CONTACT_URL: string = '/contact'

const EMAIL: string = 'shaibfavour26@gmail.com'
const EMAIL_URL: string = `mailto:${EMAIL}`
const RESUME_URL: string = 'https://drive.google.com/file/d/1WWHiiylPHo9gaElH8ttyrgr4N1VS_1ys/view?usp=drive_link'

const LINKEDIN_URL: string = 'https://www.linkedin.com/in/shaibgodsfavour/'
const GITHUB_URL: string = 'https://github.com/Favou23'
// const TWITTER_URL: string = 'https://twitter.com/_iamclement_'
const MEDIUM_URL: string = "https://medium.com/@shaibfavour26"
// const HASHNODE_URL: string = 'https://iamclement.hashnode.dev/'

const DEFAULT_WHATSAPP_MESSAGE =
  'Hello Godsfavour, I came from your website and would like to talk.'

function normalizeWhatsAppPhone(phone: string): string {
  return phone.replace(/\D/g, '')
}

function buildWhatsAppUrl(phone: string, message = DEFAULT_WHATSAPP_MESSAGE): string {
  const digits = normalizeWhatsAppPhone(phone)
  if (!digits) return ''

  const query = [
    `phone=${encodeURIComponent(digits)}`,
    `text=${encodeURIComponent(message)}`,
    'type=phone_number',
    'app_absent=0',
  ].join('&')

  return `https://api.whatsapp.com/send/?${query}`
}

export {
  ABOUT_URL,
  ARTICLE_URL,
  CONTACT_URL,
  DEFAULT_WHATSAPP_MESSAGE,
  EMAIL,
  EMAIL_URL,
  EXPERIENCE_URL,
  GITHUB_URL,
  // HASHNODE_URL,
  LINKEDIN_URL,
  MEDIUM_URL,
  PROJECT_URL,
  RESUME_URL,
  TALK_URL,
  // TWITTER_URL,
  buildWhatsAppUrl,
  normalizeWhatsAppPhone,
}
