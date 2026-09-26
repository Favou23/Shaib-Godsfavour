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

```bash
cp .env.example .env
```

Set:

- `DATABASE_URL` — Neon pooled Postgres URL
- `PAYLOAD_SECRET` — long random string
- Optional: `PAYLOAD_ADMIN_EMAIL` / `PAYLOAD_ADMIN_PASSWORD` for the first admin user (seed defaults)

### 3. Install and run

```bash
pnpm install
pnpm dev
```

### 4. Seed content (one-time)

```bash
pnpm seed
```

### 5. Open

- Site: [http://localhost:3000](http://localhost:3000)
- Admin: [http://localhost:3000/admin](http://localhost:3000/admin)

### Deploy on Vercel

1. Import the GitHub repo in Vercel
2. Add the same env vars (`DATABASE_URL`, `PAYLOAD_SECRET`)
3. Deploy
4. Visit `/admin` on the production URL

> Media uploads to disk will not persist on Vercel. Use external image URLs for now, or add blob storage later.
## Useful scripts

| Script | Purpose |
| --- | --- |
| `pnpm dev` | Next.js + Payload admin |
| `pnpm seed` | Upsert projects, articles, site settings |
| `pnpm generate:types` | Regenerate `payload-types.ts` |
| `pnpm generate:importmap` | Regenerate admin import map |

## Content model

- **Projects** — portfolio case studies
- **Articles** — `external` link cards or `full` in-site Lexical posts (`/articles/[slug]`)
- **Site Settings** (global) — nav, social links, footer columns
- **Media** — uploads for article images

## Connect

- LinkedIn: [linkedin.com/in/nnamdiazubuike](https://linkedin.com/in/nnamdiazubuike)
- GitHub: [github.com/nnamdiazubuike](https://github.com/nnamdiazubuike)
- Email: [acu.nnamdi@gmail.com](mailto:acu.nnamdi@gmail.com)
