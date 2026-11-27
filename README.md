# CheaPOX Travel and Tours: website

One-page site for CheaPOX Travel and Tours, Mendez, Cavite. *Cheap Na, Oks Na Oks Pa!*

Built with [Astro](https://docs.astro.build) 7: static output, TypeScript strict, no UI framework.
The design is the approved "Bold Barkada Pop" direction.

## Run it locally

Needs Node.js 22.23.4 or newer.

```bash
npm install                 # once
npx astro dev --background  # start the dev server in the background → http://localhost:4321
npx astro dev status        # is it running? which URL / PID?
npx astro dev logs          # show the server log (add -f to follow it)
npx astro dev stop          # stop it
```

Production check:

```bash
npm run build               # runs `astro check` (types + diagnostics), then builds to dist/
npx astro preview           # serve dist/ at http://localhost:4321 to test the real build
```

## Edit prices and text

All text, prices and links live in `src/data/`. Change them there, not in the components.
Every file is validated by the schema in `src/content.config.ts`, so a typo (a missing field, a price written as
text, a bad email) stops the build with a clear message instead of shipping a broken page.

| File | What's in it |
|---|---|
| `src/data/packages.json` | All 16 packages: name, group (`asia` or `longhaul`), currency (`PHP` or `USD`), `price`, blurb, "what's included", duration, departure city, stops, photo |
| `src/data/services.json` | The services list and the Da Nang transfers spotlight |
| `src/data/site.json` | Contact details, address, hours, Facebook/Instagram/Maps links, SEO title and description, hero copy, section headings, How to Book steps, About text, footer |
| `src/data/gallery.json` | Gallery photos, captions and which package each one links to |

Examples:

- **Change a price:** in `packages.json`, edit `"price": 27999` (a plain number, no ₱ or comma). The ₱ or $ sign,
  the comma and "all-in" / "per pax" are added automatically from `currency`. The hero tag, the marquee band
  and the card all update together.
- **Change the hero's featured package:** in `site.json`, set `hero.packageId` to another package `id`.
- **Fill in a placeholder:** in `site.json` → `contact`, set `facebookUrl`, `hours` and `mapsUrl`.
- **Add a package:** copy an entry in `packages.json`, give it a unique `id` and the next `order`.
  Leave out `photo` and it renders as a bold typographic card automatically.
- **Add or replace a photo:** put the file in `src/assets/images/<folder>/` and set
  `"photo": { "src": "<folder>/<file>.jpg", "alt": "…what is in the photo…" }`.
  Astro resizes it and converts it to WebP at build time. Update `src/assets/images/CREDITS.md` too.

After editing, run `npm run build` (or just look at the dev server, which reloads on save).

## Deploy to Vercel

1. Push this folder to a GitHub, GitLab or Bitbucket repository. `.gitignore` already leaves out `node_modules/`,
   `dist/` and `.astro/`. `_originals/` holds the client's flyers and photos; it is never part of the website build,
   so commit it or keep it elsewhere, whichever you prefer.
2. In Vercel: **Add New → Project → Import** the repository. Vercel detects Astro automatically.
3. Check the settings:
   - Framework preset: **Astro**
   - Build command: **`npm run build`**
   - Output directory: **`dist`**
   - Install command: `npm install` (default)
   - Node.js version (Project Settings → General): **22.x or newer**
4. Click **Deploy**. Every push to the main branch redeploys.
5. Custom domain: Project → Settings → Domains → add the domain and follow the DNS steps shown.
   Then make sure `site` in `astro.config.mjs` and the URLs in `public/robots.txt` and `public/sitemap.xml` match it.

No adapter is needed: the site is fully static.

## Project map

```
src/
  assets/images/   photos by section (hero/, packages/, gallery/), with CREDITS.md
  assets/logo/     the client logo, untouched
  components/      Header, Hero, PriceTag, Packages, PackageCard, Services, HowToBook, About,
                   Gallery, LocationContact, Footer, SEO, Icon
  data/            packages.json, services.json, gallery.json, site.json   ← edit content here
  layouts/BaseLayout.astro
  lib/             data and image helpers
  pages/index.astro
  styles/global.css  design tokens (colours, type scale, spacing, motion) + shared styles
  content.config.ts  schemas for the data files
public/            self-hosted fonts, favicons, og-image.jpg, robots.txt, sitemap.xml
scripts/           make-favicons.mjs (npm run favicons), og-image.html (source of public/og-image.jpg)
_originals/        client originals (flyers, logo, screenshots). Not part of the build. Do not delete.
```

## Regenerating assets

- Favicons: `npm run favicons` (pads the logo to a square with its own white background and resizes it; no other changes).
- Share image (`public/og-image.jpg`, 1200×630): open `scripts/og-image.html` in Chrome at a 1200×630 viewport and
  take a screenshot, or swap in a new real photo there first.

## Fonts and licences

Bricolage Grotesque (SIL Open Font License 1.1) is self-hosted from `public/fonts/`. No request goes to Google Fonts.
The photos are licensed Unsplash stand-ins until CheaPOX supplies its own; see `src/assets/images/CREDITS.md`.
