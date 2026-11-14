# Yisak Asrat Indale — Portfolio
React + TypeScript + Vite. Run: `npm install && npm run dev`. Build: `npm run build`.

## Deploy (Vercel)
Push to GitHub → vercel.com → Import repo → Deploy (settings auto-detected via vercel.json). Add a custom domain later in Project → Domains.

## After first deploy
1. In `index.html`, change `og:image` / `twitter:image` to the absolute URL, e.g. `https://YOUR-SITE.vercel.app/og-image.jpg` (social sites require absolute URLs).
2. Update the domain in `public/robots.txt` and `public/sitemap.xml`.

## Edit content
- `src/data.ts`: projects, skills, services, journey (dates blank by default).
- Screenshots: put images in `public/projects/` and set `image: '/projects/name.png'`.
- Live demos: set `live: 'https://...'` on a project; the button appears automatically.

## Logo
`public/logo.jpg` is your original image. Favicons, Apple icon and `og-image.jpg` (1200x630 share card) are generated from it.
