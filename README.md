# Ventionz SaaS Web Application

A modern SaaS-style web app built with a PERN-friendly architecture:

- Frontend: Next.js (React, Pages Router)
- Styling: Tailwind CSS
- Animations: Framer Motion
- Backend layer: Next.js API routes + Supabase services
- Database: Supabase Postgres

## Step 1: Install dependencies

```bash
npm install
```

## Step 2: Configure environment variables

Copy `.env.example` into `.env.local` and fill in your Supabase values:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

## Step 3: Create Supabase table

Run SQL from `supabase/schema.sql` in Supabase SQL Editor.

This creates `contact_requests` and enables row-level security policy for contact form inserts.

## Step 4: Start the app

```bash
npm run dev
```

Open `http://localhost:3000`.

## Project Structure

```text
components/
	dashboard/
	layout/
	staff/
	ui/
data/
lib/
pages/
	api/
	business/
	dashboard/
styles/
supabase/
```

## Implemented Pages

- `/` Landing Page
- `/about`
- `/staff`
- `/contact`
- `/services`
- `/features`
- `/business`
- `/business/[type]` subpages (startups, ecommerce, enterprise)
- `/login`
- `/signup`
- `/dashboard` (protected)

## Authentication Flow

- Signup: `supabase.auth.signUp`
- Login: `supabase.auth.signInWithPassword`
- Protected dashboard checks session and redirects to `/login` if unauthenticated
- Logout via `supabase.auth.signOut`

## Scripts

```bash
npm run dev
npm run lint
npm run build
npm run start
```

## Deployment

Deploy to Vercel (recommended):

1. Import repository/project in Vercel.
2. Add `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` in project environment variables.
3. Build command: `npm run build`
4. Output: standard Next.js output

## Notes

- If Supabase env vars are missing, auth and contact form actions will not work.
- UI is fully responsive and built with reusable components.
