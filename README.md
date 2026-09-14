# yihaodong.me

Personal academic website of Yihao Dong, PhD candidate in Human-Computer
Interaction at the University of Sydney. Redesigned in September 2026 around a
single idea, **Tactile**: the site borrows the electrode dot grid from Yihao's
own haptics research and lets visitors feel their way through it. The design
rationale, palette, type and page-by-page plan are in [`DESIGN.md`](DESIGN.md).

## Stack

- SvelteKit 2 with Svelte 5 runes, TypeScript, Tailwind CSS 3.4
- Vercel adapter (`card.yihaodong.me` rewrites to `/card` via `vercel.json`)
- Self-hosted fonts through `@fontsource`: Fraunces (display), Instrument Sans
  (body), IBM Plex Mono (metadata)
- Open Graph images rendered on demand with Satori + resvg (`/og-image?page=…`)

## Running it

```bash
npm install
npm run dev        # http://localhost:5173
npm run check      # svelte-check
npm run build
npm run preview
```

## Where things live

```
src/
├── app.css                  # design tokens, base styles, utilities
├── app.html                 # favicon, meta
├── lib/
│   ├── site.ts              # personal details, profiles, vCard builder
│   ├── actions/reveal.ts    # scroll-reveal action (reduced-motion aware)
│   ├── utils/
│   │   ├── braille.ts       # Grade 1 Braille cells for the Braille component
│   │   ├── haptics.ts       # navigator.vibrate helper
│   │   └── seo.ts           # schema.org objects
│   ├── components/
│   │   ├── Header.svelte / Footer.svelte / SectionHead.svelte
│   │   ├── Mark.svelte      # 3×3 dot mark (also the favicon)
│   │   ├── Braille.svelte   # renders a word as Braille dots
│   │   ├── DotField.svelte  # interactive hero canvas
│   │   ├── SemesterGrid.svelte
│   │   ├── Clock.svelte     # live Sydney time
│   │   └── demos/           # TactDeformDemo, JustBeforeTouchDemo
│   └── data/
│       ├── publications.ts  # papers + bibtex()
│       ├── news.ts
│       ├── courses.ts       # units, appointments, guest lectures
│       ├── awards.ts        # awards + service
│       └── skills.ts        # toolbox + research interests
└── routes/
    ├── +layout.svelte       # fonts, view transitions, header/footer
    ├── +page.svelte         # home
    ├── research/ publications/ teaching/ about/ contact/ card/
    ├── og-image/+server.ts
    └── sitemap.xml/+server.ts
```

## Updating content

Almost everything editable lives in `src/lib/data/*.ts` and `src/lib/site.ts`.

- **A new paper**: add an entry to `publications.ts`. `teaser` is a one- or
  two-sentence plain-language summary; `project` links it to a section id on
  `/research`; `code` and `award` are optional. For `bibtex`, paste the record
  from Crossref: `curl -LH "Accept: application/x-bibtex" https://doi.org/<DOI>`.
- **News**: prepend one line to `news.ts` (`date` as YYYY-MM,
  casual first-person `text` that may contain `<strong>`, `<em>` or `<a>`).
- **Teaching**: add rows to `courses.ts`; the semester grid, counts and legend
  update themselves. Appointments and guest lectures are in the same file.
- **Awards, service, toolbox, interests**: `awards.ts` and `skills.ts`.
- **Contact details / profiles / CV path / "last updated"**: `site.ts`.
- **CV**: replace `static/CV_Yihao_Dong.pdf`.
- **Photos**: `src/lib/assets/`. Poster images are the downscaled `.jpg` files
  in `assets/research/`; the original PNGs are kept as sources.

## Design tokens

Colours are CSS custom properties in `src/app.css` and are exposed to Tailwind
as `paper`, `paper-2`, `ink`, `ink-2`, `ink-3`, `line`, `dot`, `accent` and
`accent-ink` (e.g. `bg-paper`, `text-ink-2`, `border-line`). The site is
light-only by decision; there is no dark theme.

## Accessibility notes

- Every animation checks `prefers-reduced-motion` (hero field, reveals, view
  transitions, demos).
- Demos use native `<input type="range">` and radio groups; captions are
  `aria-live`.
- The semester grid is a real `<table>` with row/column headers.
- Braille ornaments are real Grade 1 Braille with an `aria-label`.
- Colour contrast: all text tokens meet WCAG AA on both paper tones in both
  themes; the bright `accent` is only used for marks, never for body text.
