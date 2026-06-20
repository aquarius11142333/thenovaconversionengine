# The Nova Conversion Engine — Website

A stripped-down, conversion-focused one-pager:

1. **VSL** — a 9:16 intro video at the top (you, on camera, saying what you do and who it's for)
2. **One-liner** — a single sentence under the video stating your specialty
3. **Portfolio** — a clean grid of your video ads, 9:16, click to play
4. **Book a Call** — embedded Calendly

Nothing else. No nav, no about page, no services list, no testimonials.

## 1. Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## 2. Where everything lives

All content is in one file:

```
src/content/site.json
```

```json
{
  "vsl": {
    "video": { "src": "/uploads/videos/vsl.mp4", "poster": "/uploads/images/vsl-poster.svg" },
    "oneLiner": "I create AI Video Ads & AI UGC Content for ...",
    "bookCallCta": { "label": "Book a Call", "calendlyUrl": "https://calendly.com/..." }
  },
  "portfolioCategories": ["All", "Video Ads", "AI UGC Videos"],
  "portfolio": [ ... ],
  "contact": { "email": "you@example.com", "calendlyUrl": "https://calendly.com/..." }
}
```

### Swap the VSL

Upload your video to `public/uploads/videos/vsl.mp4` (or change the `src` path), and replace
the poster image in `public/uploads/images/`. Keep it 9:16 (vertical) — the player is locked
to that aspect ratio.

### Edit the one-liner

Change `vsl.oneLiner` to whatever single sentence best states who you help and what you make.

### Add / remove / replace a portfolio ad

Add an object to the `portfolio` array:

```json
{
  "id": "proj-005",
  "title": "New Ad",
  "category": "Video Ads",
  "featured": false,
  "media": {
    "type": "video",
    "src": "/uploads/videos/new-ad.mp4",
    "thumbnail": "/uploads/images/new-ad-thumb.jpg"
  }
}
```

- Keep all portfolio video files **9:16** (vertical) — the grid cards are locked to that ratio.
- `category` must match a value in `portfolioCategories`, or add a new category there to get
  a new filter tab automatically.
- Set `"featured": true` to pin it to the front of the grid.
- To remove an ad, delete its object. To replace one, overwrite the file at the same path or
  update `src`.
- Clicking a card plays/pauses that video in place.

### Update Calendly / contact info

Both the hero "Book a Call" button and the embedded calendar at the bottom read from
`contact.calendlyUrl` (and `vsl.bookCallCta.calendlyUrl` for the top button) — update those to
your real Calendly scheduling link. Update `contact.email` for the fallback email link.

## 3. Uploading media

| Type | Folder |
|---|---|
| VSL + ad videos | `public/uploads/videos/` |
| Thumbnails / poster images | `public/uploads/images/` |

This starter ships with placeholder SVG thumbnails and no real video files — add your real
9:16 video assets before launch.

## 4. Editing content with zero code

**GitHub web editor (fastest, no install):**
1. Push this project to a GitHub repo connected to Vercel.
2. Open `src/content/site.json` on GitHub, click the pencil (✏️) icon, edit, and commit to
   `main`.
3. Vercel auto-rebuilds and redeploys within about a minute.
4. To swap videos/thumbnails, use GitHub's "Add file → Upload files" into the matching
   `public/uploads/...` folder, then point the JSON `src` at the new path.

**Vercel Visual Editing / Toolbar:**
Content and presentation are fully separated — every section reads from
`src/content/site.json` via `src/lib/content.ts` — so you can connect Vercel's Visual Editing
Toolbar to that single file as the data source without touching component code.

## 5. Deploying to Vercel

```bash
npm i -g vercel
vercel
```

Or push to GitHub and "Import Project" at https://vercel.com/new.

## 6. Project structure

```
src/
  app/
    layout.tsx
    page.tsx          — VSL → Portfolio → Book a Call → Footer
    globals.css
  components/
    Hero.tsx           — VSL video + one-liner + Book a Call button
    Portfolio.tsx       — 9:16 click-to-play ad grid, category filter
    BookCall.tsx        — embedded Calendly
    Footer.tsx          — one line, copyright only
  content/
    site.json           — ALL editable content
  lib/
    content.ts           — typed loader for site.json
public/
  uploads/videos/        — VSL + ad videos (9:16)
  uploads/images/        — thumbnails / poster images
```

## 7. Brand palette (wired into Tailwind)

| Token | Hex | Use |
|---|---|---|
| `navy` | `#0F172A` | Background |
| `graphite` | `#111827` | Cards |
| `cyan` | `#22D3EE` | Accent / CTA |
| `violet` | `#A78BFA` | Highlight |
| `ink` | `#F8FAFC` | Text |
