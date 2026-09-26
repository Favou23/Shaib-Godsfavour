import {
  ARTICLE_URL,
  CONTACT_URL,
  EMAIL_URL,
  GITHUB_URL,
  LINKEDIN_URL,
  PROJECT_URL,
  RESUME_URL,
  // TWITTER_URL,
} from "@/config/routes";
import type { Article, NavLinks, PortfolioItem, ProjectDataType } from "@/lib/definitions";

type SeedFooterItem = {
  id: number
  title: string
  [key: string]: string | number | undefined
}

export const NavData: NavLinks[] = [
  {
    id: 1,
    name: "Projects",
    href: PROJECT_URL,
  },
  {
    id: 2,
    name: "Articles",
    href: ARTICLE_URL,
  },
  {
    id: 3,
    name: "Contact",
    href: CONTACT_URL,
  },
];

export const PortfolioData: PortfolioItem[] = [
  {
    id: 1,
    name: "Github",
    uri: GITHUB_URL,
  },
  // {
  //   id: 2,
  //   name: "Twitter",
  //   uri: TWITTER_URL,
  // },
  {
    id: 3,
    name: "LinkedIn",
    uri: LINKEDIN_URL,
  },
  {
    id: 4,
    name: "Resume/CV",
    uri: RESUME_URL,
  },
];

export const ProjectData: ProjectDataType[] = [
  {
    id: 1,
    name: 'Numoni',
    slug: 'numoni',
    proof:
      'Loyalty, rewards, and payments — merchant portal and admin platform in production.',
    problem:
      'Merchants and operators needed separate, reliable surfaces for the same loyalty ecosystem: merchants running branches, rewards, POS, and transactions day to day; admins overseeing KYC, customers, charities, roles, settlements, and support without sharing one overloaded UI.',
    role:
      'Architected and built both Next.js apps — merchant (merchant.numoni.io) and admin (admin.numoni.io) — including auth, dashboard UX, TanStack Query data layer, Zustand UI state, and form-heavy flows with React Hook Form + Zod.',
    outcome:
      'Two production portals: merchants manage branches (incl. maps), reward tables, deals, POS, and transaction history; admins run merchant/customer/charity ops, RBAC, bonuses, reports, alerts, support, and e-commerce admin.',
    decisions:
      'Split merchant and admin into dedicated apps that share the same frontend patterns (Next.js, TanStack Query for server state, Zustand for local UI) so each surface can evolve independently while staying consistent for the loyalty/rewards domain.',
    metrics: [
      { label: 'Surfaces', value: 'Merchant + Admin' },
      { label: 'Merchant', value: 'merchant.numoni.io' },
      { label: 'Admin', value: 'admin.numoni.io' },
      { label: 'Stack', value: 'Next.js · TanStack Query · Zustand' },
    ],
    desc: 'Merchant and admin platforms for Numoni’s loyalty, rewards, and payments ecosystem — Next.js, React, Zustand, TanStack Query, Tailwind CSS, and shadcn.',
    action: 'View Merchant',
    uri: 'https://merchant.numoni.io/',
    technologies: [
      'Zustand',
      'Next.js',
      'Tailwind CSS',
      'TanStack Query',
      'TypeScript',
      'React',
      'shadcn',
      'React Hook Form',
      'Zod',
    ],
  },
  {
    id: 2,
    name: 'MTN FibreX Portal',
    slug: 'mtn-fibrex-portal',
    proof: 'Self-service fibre plans and payments for thousands of MTN customers.',
    problem:
      'Fibre customers needed a seamless way to manage plans and payments without relying on assisted channels.',
    role: 'Senior Frontend Engineer and team lead — built the self-service UI, payment flows, and supported SIT/UAT/production environments.',
    outcome:
      'A live self-service fibre portal serving thousands of customers for plan management and payments.',
    decisions:
      'Led with a shared Next.js + Zustand + TanStack Query stack so plan and payment flows stayed consistent under team ownership. Prioritized responsive self-service journeys over assisted channels, with environment support across SIT, UAT, and production.',
    metrics: [
      { label: 'Customers', value: 'Thousands (self-service)' },
      { label: 'Team', value: 'Led 6 frontend engineers' },
      { label: 'Environments', value: 'SIT · UAT · Production' },
    ],
    desc: 'Led a team of 6 while shipping responsive Next.js interfaces with Zustand and TanStack Query.',
    action: 'View Project',
    uri: 'https://fibrex.mtn.ng/',
    technologies: [
      'Zustand',
      'Next.js',
      'Tailwind CSS',
      'TanStack Query',
      'TypeScript',
      'React',
      'shadcn',
    ],
  },
  {
    id: 3,
    name: 'MTN Self-Service Portal',
    slug: 'mtn-self-service-portal',
    proof: 'Airtime, data, bills, and account flows for 1M+ monthly users.',
    problem:
      'MTN needed a scalable self-service surface for high-volume airtime, data, billing, and account management.',
    role: 'Led frontend development, design-system adoption, and production support across SIT, UAT, and live environments.',
    outcome:
      'A large-scale React/Next.js portal serving 1M+ monthly users with measurable reliability expectations.',
    decisions:
      'Standardized on React/Next.js with a design-system-first approach so high-traffic journeys (airtime, data, bills, account) stayed consistent. Mixed Redux Toolkit and Zustand where each fit — shared app state vs localized UI — and kept production support in the same ownership loop as delivery.',
    metrics: [
      { label: 'Monthly users', value: '1M+' },
      { label: 'Scope', value: 'Airtime · data · bills · account' },
      { label: 'Environments', value: 'SIT · UAT · Production' },
    ],
    desc: 'Collaborated with backend teams on maintainable, accessible delivery for high-traffic journeys.',
    action: 'View Project',
    uri: 'https://selfservice.mtn.ng/',
    technologies: [
      'React',
      'Next.js',
      'Tailwind CSS',
      'TypeScript',
      'Redux Toolkit',
      'Zustand',
      'shadcn',
    ],
  },
  {
    id: 4,
    name: 'Weavii',
    slug: 'weavii',
    proof: 'Artist–fan platform for video, social interaction, and growth features.',
    problem:
      'Artists and fans needed a product surface for video uploads, likes, comments, and resharing that could grow without UI debt.',
    role: 'Senior Frontend Engineer — built reusable UI systems and feature flows with test coverage for critical paths.',
    outcome:
      'Shipped social media features and reusable component frameworks that improved maintainability and delivery speed.',
    decisions:
      'Invested in reusable UI systems and Jest/React Testing Library coverage on critical social paths (upload, like, comment, reshare) so feature velocity did not outrun regression risk.',
    metrics: [
      { label: 'Focus', value: 'Social + video features' },
      { label: 'Quality', value: 'Jest · React Testing Library' },
    ],
    desc: 'Included Jest and React Testing Library coverage for regressions in key user flows.',
    action: 'View Project',
    uri: 'https://weavii.io/',
    technologies: [
      'React',
      'Next.js',
      'Tailwind CSS',
      'TypeScript',
      'Jest',
      'React Testing Library',
    ],
  },
  {
    id: 5,
    name: 'MTN Bulk SMS',
    slug: 'mtn-bulk-sms',
    proof: 'Enterprise bulk SMS purchase and usage tracking for high-traffic business use.',
    problem:
      'Businesses needed a reliable way to buy and monitor bulk SMS at enterprise scale.',
    role: 'Frontend lead for purchase flows, usage dashboards, and environment support across SIT/UAT/production.',
    outcome:
      'An enterprise SMS platform with purchase, tracking, and delivery-status visibility in production.',
    action: 'View Project',
    uri: 'https://bulksms.mtn.ng/',
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Zustand', 'shadcn'],
  },
  {
    id: 6,
    name: 'Hyeameha',
    slug: 'hyeameha',
    proof: 'Travel services platform with booking and payment flows.',
    problem: 'Travel customers needed a clearer path from discovery to booking and payment.',
    role: 'Built responsive Next.js interfaces for booking, service discovery, and payments.',
    outcome: 'A complete travel management frontend ready for real customer journeys.',
    action: 'View Project',
    uri: 'https://www.hyeameha.com/',
    technologies: ['Next.js', 'Tailwind CSS', 'shadcn', 'TypeScript', 'React'],
  },
  {
    id: 7,
    name: 'Clouder',
    slug: 'clouder',
    proof: "E-portfolio platform for health sciences students and practitioners.",
    problem:
      'Health sciences students and practitioners lacked a dedicated way to present professional portfolios online.',
    role: 'Built portfolio creation and management features with React/Next.js and secure API integration.',
    outcome: "Nigeria's first e-portfolio platform for health sciences professionals.",
    action: 'View Project',
    uri: 'https://clouder-nu.vercel.app/',
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'],
  },
  {
    id: 8,
    name: 'Triple R Salon',
    slug: 'triple-r-salon',
    proof: 'Premium salon site with booking-focused UX and strong SEO performance.',
    problem: 'A full-service salon needed a luxury web presence that supported bookings and discovery.',
    role: 'Designed and built responsive layouts, booking interfaces, and performance/SEO foundations.',
    outcome: 'A production marketing and booking site for a high-end salon brand.',
    action: 'View Project',
    uri: 'https://www.triplerunisexsalon.com/',
    technologies: ['Next.js', 'Tailwind CSS', 'TypeScript', 'React'],
  },
  {
    id: 9,
    name: 'Hostelpaddy',
    slug: 'hostelpaddy',
    proof: 'Hostel search, listing, and booking flows for students.',
    problem: 'Students wasted time hunting hostels without reliable filters and booking flow.',
    role: 'Built search, filtering, listings, and booking interfaces with a mobile-first React/Next.js stack.',
    outcome: 'A live accommodation platform reducing hostel-hunting friction for students.',
    action: 'View Project',
    uri: 'https://hostelpaddy.netlify.app/',
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'],
  },
]

export const ArticlesData: Article[] = [
  {
    id: 1,
    date: "January 1, 2026",
    readTime: "7",
    title: "Setting Up ESLint, Prettier, Husky, and Commitlint in Your Expo React Native Project: A Complete Guide",
    desc: "Setting up ESLint, Prettier, Husky, and Commitlint in your Expo React Native project is a crucial step towards maintaining code quality and consistency across your development team. These tools help enforce coding standards, catch potential errors early, and ensure that your codebase remains clean and maintainable as your project grows.",
    readMore: "Read Articles",
    uri: "https://medium.com/@nnamdi-azubuike/setting-up-eslint-prettier-husky-and-commitlint-in-your-expo-react-native-project-a-complete-550bd225f879",
    image: "https://miro.medium.com/v2/resize:fit:1400/format:webp/0*E2x-uNjCNzkMEUot.png",
    category: ['mobile', 'development', 'security']
  },
  {
    id: 2,
    date: "February, 22, 2023",
    readTime: "10",
    title: "Version Control System -  Introduction to Git & GitHub for beginners",
    desc: "Teamwork and collaboration are core parts of being a developer.With the help of a version control system, this has been made easier.",
    readMore: "Read Articles",
    uri: "https://iamclement.hashnode.dev/version-control-system-introduction-to-git-github-for-beginners",
    image: "https://cdn.hashnode.com/res/hashnode/image/upload/v1677067733526/9596f4ef-a1f5-4e8b-9923-1a75f7825e9f.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
    category: ["Development"]
  },
  {
    id: 3,
    date: "February, 16, 2023",
    readTime: "2",
    title: "Firebase Cloud Storage",
    desc: "Firebase Cloud Storage is a service that developers can use to store and download files generated directly by clients.No server - side code is needed.",
    readMore: "Read Articles",
    uri: "https://iamclement.hashnode.dev/firebase-cloud-storage",
    image: "https://cdn.hashnode.com/res/hashnode/image/upload/v1676491396712/58d4f90e-7e04-4263-a693-193ead1dcd64.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
    category: ["Firebase"]
  },
  {
    id: 4,
    date: "February, 14, 2023",
    readTime: "3",
    title: "Firebase Authentication",
    readMore: "Read Articles",
    desc: "Google Firebase is a Google - backed application development software that enables developers to develop iOS, Android, and Web apps.",
    uri: "https://iamclement.hashnode.dev/firebase-google-authentication-in-react",
    image: "https://cdn.hashnode.com/res/hashnode/image/upload/v1676374457613/22ef4d3a-ce0a-4713-9672-08635781c99b.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
    category: ["Firebase"]
  },
  {
    id: 5,
    date: "October, 15 2022",
    readTime: "1",
    title: "How to send bearer token in header with Axios",
    uri: "https://iamclement.hashnode.dev/how-to-send-bearer-token-in-a-header-with-axios",
    image: "https://cdn.hashnode.com/res/hashnode/image/upload/v1665831450916/fMX8AtuCK.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
    category: ["API"]
  },
  {
    id: 6,
    date: "August, 27 2022",
    readTime: "3",
    title: "Deploy a Full-Stack Application with AWS",
    uri: "https://iamclement.hashnode.dev/deploy-a-full-stack-react-application-aws",
    image: "https://cdn.hashnode.com/res/hashnode/image/upload/v1661595560452/0SwqaZg_j.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
    category: ["DevOps"]
  },
  {
    id: 7,
    date: "August, 4 2022",
    readTime: "4",
    title: "Javascript Variable",
    uri: "https://iamclement.hashnode.dev/javascript-variables",
    image: "https://cdn.hashnode.com/res/hashnode/image/upload/v1661168848738/CHspYHa_l.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
    category: ["JavaScript"]
  },
  {
    id: 8,
    date: "May, 21 2022",
    readTime: "4",
    title: "HTML, and why it is a must for every website",
    uri: "https://iamclement.hashnode.dev/html-and-why-it-is-a-must-for-every-website",
    image: "https://cdn.hashnode.com/res/hashnode/image/upload/v1653134833768/2nusBVtgN.jpg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
    category: ["HTML"]
  },
  {
    id: 9,
    date: "May, 13 2022",
    readTime: "4",
    title: "Axios for API Call",
    uri: "https://iamclement.hashnode.dev/axios-for-api-call",
    image: "https://cdn.hashnode.com/res/hashnode/image/upload/v1652430698141/spGdpbGem.jpg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
    category: ["API"]
  }
];

export const FooterData: SeedFooterItem[] = [
  {
    id: 1,
    title: "Find Me Here",
    github: "GitHub",
    githubUri: "https://github.com/iamclement1",
    linkedIn: "LinkedIn",
    linkedInUri: "https://www.linkedin.com/in/clementnnamdi/",
    twitter: "Twitter",
    twitterUri: "https://twitter.com/_iamclement_",
    email: "Email",
    emailUri: EMAIL_URL,
  },
  {
    id: 2,
    title: "Communities",
    gdgIlorin: "GDG Ilorin",
    gdgIlorinUri: "https://gdg.community.dev/gdg-ilorin/",
    gdgIbadan: "GDG Ibadan",
    gdgIbadanUri: "https://gdg.community.dev/gdg-ibadan/",
    kwarabuild: "Kwarabuild",
    kwarabuildUri: "https://kwarabuild.com/",
    africa: "Africa's Talking",
    africaUri: "https://africastalking.com/",
  },
  {
    id: 3,
    title: "Quick Links",
    home: "Home",
    homeUri: "/",
    projects: "Projects",
    projectsUri: PROJECT_URL,
    articles: "Articles",
    articlesUri: ARTICLE_URL,
    contact: "Contact",
    contactUri: CONTACT_URL,
  },
];
