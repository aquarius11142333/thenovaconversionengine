# The Nova Conversion Engine — Website

A premium, mobile-first Next.js + Tailwind CSS site for an AI video ads / AI UGC / creative
production studio. All page content — hero, services, portfolio, brands, process, about,
testimonials, and contact details — lives in **one structured file** so it can be updated
without touching any component code.

## 1. Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## 2. Where all the content lives

Everything editable is in:

```
src/content/site.json
```

This is your "CMS collection." Each section of the site (hero, services, portfolio, brands,
process, about, testimonials, contact, footer) is its own block of structured JSON. Components
in `src/components/*` simply read from this file — they never contain hardcoded copy.

### Add a new brand (logo wall)

Add an object to the `brands` array:

```json
{ "id": "brand-007", "name": "New Client Co.", "logo": "/logos/new-client.svg" }
```

Upload the logo file to `public/logos/` with the matching filename. There's no limit on how
many brands you add — the grid reflows automatically.

### Add / remove / replace portfolio (video ads, UGC, campaigns)

Add an object to the `portfolio` array:

```json
{
  "id": "proj-005",
  "title": "New Ad Campaign",
  "description": "One or two sentences about the work.",
  "client": "Client Name",
  "industry": "Industry",
  "category": "Video Ads",
  "featured": false,
  "media": {
    "type": "video",
    "src": "/uploads/videos/new-ad.mp4",
    "thumbnail": "/uploads/images/new-ad-thumb.jpg"
  }
}
```

- `category` must match one of the values in `portfolioCategories` (or add a new category
  there to create a new filter tab automatically).
- `media.type` is `"video"` or `"image"`.
- To **remove** a project, delete its object from the array.
- To **replace** media, just upload a new file to `public/uploads/...` with the same filename,
  or update the `src` / `thumbnail` path.
- Set `"featured": true` to pin a project to the top of the grid.

### Add a new service

Add to the `services` array (`icon` accepts `"play"`, `"spark"`, or `"layers"`).

### Edit text sections (hero, about, process, contact, footer)

Just edit the relevant strings in `site.json` — headline, subheadline, descriptions, CTA labels,
etc. No code changes needed.

### Update contact information

Edit the `contact.email` field. It automatically powers:
- the "Email [Name]" button
- the "Copy Email" button
- the contact form's mailto submission
- the footer email link

## 3. Uploading media

Put files here, then reference the path in `site.json`:

| Type | Folder |
|---|---|
| Ad / UGC videos | `public/uploads/videos/` |
| Project & section images | `public/uploads/images/` |
| Brand logos | `public/logos/` |
| Testimonial photos | `public/avatars/` |

This starter ships with placeholder SVG images and no real video files — swap them out with
your real assets before launch.

## 4. Editing content with zero code — two options

**Option A — GitHub web editor (fastest, no install):**
1. Push this project to a GitHub repository.
2. In GitHub, open `src/content/site.json`, click the pencil (✏️) icon, edit the JSON, and
   commit to the `main` branch.
3. Vercel automatically rebuilds and redeploys the live site within ~1 minute.

To add media this way, use GitHub's "Add file → Upload files" into the matching `public/...`
folder, then reference the new path in `site.json`.

**Option B — Vercel Visual Editing / Toolbar:**
This project's content layer is plain JSON, which is intentionally framework-agnostic so it
can be connected to Vercel's Visual Editing tools. To wire up the on-page Toolbar editing
experience:
1. Connect the GitHub repo to a Vercel project.
2. Enable the Vercel Toolbar for the project (Vercel dashboard → Project → Toolbar).
3. Because every section pulls from `src/content/site.json` via `src/lib/content.ts`, you can
   point Vercel's content/edit integration at that single file as the data source — no
   component changes required since content and presentation are already separated.

Either workflow lets a non-technical editor add brands, swap videos, or update text in a few
clicks, then watch the live site update automatically.

## 5. Deploying to Vercel

```bash
npm i -g vercel   # if you don't already have the CLI
vercel
```

Or, more simply: push to GitHub and click "Import Project" on https://vercel.com/new. No
environment variables are required for the base site.

## 6. Project structure

```
src/
  app/
    layout.tsx       — fonts, metadata
    page.tsx          — assembles all sections
    globals.css
  components/
    Header.tsx
    Hero.tsx
    Services.tsx
    Portfolio.tsx      — filterable video/image grid
    Brands.tsx         — logo wall, unlimited entries
    Process.tsx
    About.tsx
    Testimonials.tsx
    Contact.tsx        — form + email/copy buttons
    Footer.tsx
  content/
    site.json          — ALL editable content
  lib/
    content.ts          — typed loader for site.json
public/
  uploads/videos/       — ad & UGC videos
  uploads/images/       — project & section images
  logos/                — brand logos
  avatars/               — testimonial photos
```

## 7. Brand palette (already wired into Tailwind)

| Token | Hex | Use |
|---|---|---|
| `navy` | `#0F172A` | Primary background |
| `graphite` | `#111827` | Secondary background / cards |
| `cyan` | `#22D3EE` | Accent / primary CTA |
| `violet` | `#A78BFA` | Highlight / secondary CTA |
| `ink` | `#F8FAFC` | Text |
"# thenovaconversionengine" 
