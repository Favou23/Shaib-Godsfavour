# Shaib Godsfavour - Portfolio

Portfolio site powered by **Next.js** and **Payload CMS**. Projects, articles, and site settings are editable in the Payload admin.

## Stack

- Next.js 16 + React 19
- Payload CMS 3
- Neon Postgres
- Tailwind CSS + shadcn/ui

## Setup

### 1. Database (Neon)

1. Create a project at [console.neon.tech](https://console.neon.tech)
2. Copy the **pooled** connection string (`...-pooler...`, with `sslmode=verify-full`)
3. Use it as `DATABASE_URL` locally and in Vercel

### 2. Environment

```powershell
Copy-Item .env.example .env
```

Set:

- `DATABASE_URL` — Neon pooled Postgres URL
- `PAYLOAD_SECRET` — long random string
- `PAYLOAD_ADMIN_EMAIL` / `PAYLOAD_ADMIN_PASSWORD` — credentials for the first admin user
- `NEXT_PUBLIC_SITE_URL` — local URL for development; set the deployed public URL in production
- `GOOGLE_SITE_VERIFICATION` — optional Search Console HTML verification token

### 3. Install and run

```bash
corepack pnpm install
corepack pnpm dev
```

### 4. Initialize the CMS and admin user

```bash
corepack pnpm seed
```

The seed initializes Site Settings and creates the first admin user. It also replaces all Projects and Articles with the seed arrays; those arrays are intentionally empty until you add your own content. Do not run it against a database whose project/article content you want to keep.

### 5. Open

- Site: [http://localhost:3000](http://localhost:3000)
- Admin: [http://localhost:3000/admin](http://localhost:3000/admin)

After signing in, manage **Projects**, **Articles**, and **Site Settings** from the Payload dashboard. Add experience, navigation, social profiles, resume URL, and footer settings under **Site Settings**. Project detail links use each project's slug; leave the slug empty to generate it from the project name. Set `featured` on projects to show them on the homepage.

### Deploy on Vercel

1. Import the GitHub repo in Vercel
2. Add the same env vars (`DATABASE_URL`, `PAYLOAD_SECRET`) and set `NEXT_PUBLIC_SITE_URL` to `https://shaib-godsfavour-five.vercel.app`
3. Deploy
4. Visit `/admin` on the production URL

> Media uploads to disk will not persist on Vercel. Use external image URLs for now, or add blob storage later.

### Google Search Console

1. Set `NEXT_PUBLIC_SITE_URL` in Vercel to the canonical public site URL and redeploy.
2. In Search Console, add a URL-prefix property for that exact URL and choose HTML tag verification.
3. Copy only the verification token from the tag's `content` value into `GOOGLE_SITE_VERIFICATION` in Vercel, then redeploy.
4. Verify the property and submit `https://your-domain/sitemap.xml` in Search Console.

The site exposes `/robots.txt` and a sitemap containing its public pages and CMS project/full-article pages. Admin and API routes are disallowed for crawlers. Search Console submission requests indexing; Google decides when and whether to index pages.
## Useful scripts

| Script | Purpose |
| --- | --- |
| `corepack pnpm dev` | Next.js + Payload admin |
| `corepack pnpm seed` | Initialize site settings/admin; replace projects and articles from seed data |
| `corepack pnpm generate:types` | Regenerate `payload-types.ts` |
| `corepack pnpm generate:importmap` | Regenerate admin import map |

## Content model

- **Projects** — portfolio case studies
- **Articles** — `external` link cards or `full` in-site Lexical posts (`/articles/[slug]`)
- **Site Settings** (global) — nav, social links, footer columns
- **Media** — uploads for article images

## Connect

- LinkedIn: [linkedin.com/in/shaibgodsfavour](https://www.linkedin.com/in/shaibgodsfavour/)
- GitHub: [github.com/Favou23](https://github.com/Favou23)
- Medium: [medium.com/@shaibfavour26](https://medium.com/@shaibfavour26)
- Email: [shaibfavour26@gmail.com](mailto:shaibfavour26@gmail.com)
