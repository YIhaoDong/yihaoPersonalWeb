# Design brief — yihaodong.me redesign (September 2026)

## 1. Diagnosis of the current site

The current site is competent but anonymous. It reads as a template because it
uses every default of the "Tailwind academic portfolio" genre at once:

- Centred hero, rounded photo, blue gradient, three pill buttons.
- Alternating white / gray-50 / blue-50 full-width bands with a centred H2 each.
- White cards with drop shadows for every list item; pill tags for every keyword.
- Filler copy that could belong to anyone ("passionate educator", "Adaptability
  and Flexibility", "Working in High Performing Teams", "4+ students mentored").
- Nothing on any page can be *done*. The only interactions are two `<select>`
  filters and a BibTeX button.
- The research itself, which is unusually visual and physical (electro-tactile
  arrays on the finger pad, vibration cues timed 100 ms before contact), is
  reduced to two poster thumbnails and generic icon cards.

The content underneath is strong: two CHI '26 papers, a CHI '25 Honorable
Mention, a Best Early PhD Project award, a real teaching record that has grown
into an Associate Lecturer role, and a research theme with a clear human purpose.
The redesign's job is to let that content carry the site.

## 2. Concept: **Tactile**

Yihao's work is about making the invisible perceivable through touch. The site
borrows that idea literally: it is a site you *feel your way through*.

The signature motif is the **electrode dot grid** from the TactDeform work: a
lattice of small dots, some of which light up in warm orange to encode a shape.
It is authentically his (it is drawn straight from his own poster), it echoes
Braille (which ties to the vision-impairment purpose of the PhD), and it gives
us a graphic language that no template has.

Story arc across the pages:

| Page | Role in the story | One line the page must land |
|---|---|---|
| Home | **Touch** | "I make things you can feel." The thesis in one sentence, felt through the interactive dot field. |
| Research | **What I'm making** | Two projects you can try in the browser, then the PhD question they lead to. |
| Publications | **The record** | The paper trail, easy to cite, honest about first-author vs collaboration. |
| Teaching | **Passing it on** | Six semesters visualised as a grid; from tutor to Associate Lecturer. |
| About | **The person** | The path 2019 → 2028, the awards, the service, the why. |
| Contact | **Reach out** | Closing the loop: touch again, this time between people. |

## 3. Visual system

**Palette.** Cool paper instead of white, ink instead of gray-900, one orange
accent taken from the TactDeform electrode dots, one hairline grey. The ground
started warm cream and was moved to a cool grey-white on review, keeping the
orange; neutrals shifted cool with it. A dark theme was added in November 2026
(see "Dark theme" below).
Accent text uses a darker burnt orange so it passes WCAG AA on paper; the bright
orange is reserved for dots, rules and large marks.

| Token | Light | Dark |
|---|---|---|
| paper | `#F5F5F7` | `#E2E3E7` |
| paper-2 (raised) | `#E9EBEF` | `#D5D7DC` |
| ink | `#1D1D1F` | `#1D1D1F` |
| ink-2 (secondary) | `#454A56` | `#3E424D` |
| ink-3 (muted) | `#646976` | `#565A66` |
| line | `#D3D6DD` | `#BFC2CA` |
| dot (unlit electrode) | `#C7CBD4` | `#B2B6C0` |
| accent (dots, marks) | `#F08A24` | `#E87F17` |
| accent-ink (text) | `#A8480A` | `#933D05` |

**Dark theme.** Deliberately *not* an inverted page: it is the light theme
turned down a notch. Same dark ink, on a paper about 8% dimmer, with the
neutrals and the orange deepened just enough to keep the same contrast. A
first, true-dark version (near-black paper, light ink) was built on
17 November 2026 and rejected by Yihao the same day: the site should look like
itself at night. The reason a dark theme exists at all is that some browsers
darken sites automatically and do it badly; shipping our own keeps control.
Decisions:

- *Always follows the system.* No switch anywhere on the site (a footer
  Auto / Light / Dark control was tried and removed): the theme is a pure
  `prefers-color-scheme` media query, so it needs no JavaScript and no storage.
  The colophon line in the footer was removed at the same time.
- *Keeping browsers' auto-dark out.* The page declares dark support
  (`<meta name="color-scheme" content="light dark">` plus a
  `prefers-color-scheme: dark` stylesheet), and `:root` sets
  `color-scheme: only light`, which is Chrome's documented opt-out from Auto
  Dark Theme and keeps scrollbars and form controls light to match the page.
- *Text tokens darken with the paper*, so every pairing still passes WCAG AA
  (ink-3 5.4:1, accent-ink 5.6:1 on paper).
- *Images dim slightly* (93% brightness, `--img-rest` / `--img-lit`) so a
  white poster does not outshine the dimmer page.
- *The canvas repaints.* `DotField` reads its colours from the tokens and
  listens for the system scheme changing (`onThemeChange` in
  `src/lib/theme.ts`).
- *Browser chrome matches.* Two `theme-color` metas follow the system.
- The Open Graph image and the PDF CV stay light: they are seen out of context.

**Type.** Three self-hosted families, chosen for character rather than
neutrality:

- Display: **Fraunces** (variable; soft, slightly wonky old-style serif). Used
  for the name, page titles and pull quotes, with italics for emphasis.
- Body/UI: **Instrument Sans** (variable). Clean but not Inter.
- Meta: **IBM Plex Mono** for dates, DOIs, course codes, section eyebrows. Gives
  the "lab instrument readout" feel.

**Layout.** Editorial rather than "landing page":

- One wide column with a strong left edge and generous top margins; no centred
  H2s; section eyebrows are numbered (`01 — Research`) in mono.
- Hairline rules instead of card shadows. No rounded white cards.
- Asymmetric two-column splits on desktop (label rail on the left, content on
  the right) that stack on mobile.
- Every page has exactly one "object" that is not text: the dot field (home),
  the two demos (research), the timeline rail (publications), the semester grid
  (teaching), the path (about), the card (contact).

**Motion.** Small and purposeful; every animation checks `prefers-reduced-motion`:

- View Transitions API cross-fade between pages.
- IntersectionObserver reveal (8 px rise, 400 ms) on sections.
- The dot field reacts to pointer/touch; on touch devices a press gives a 10 ms
  `navigator.vibrate` pulse (the only place vibration is used).

## 4. Page-by-page plan

### Home
- Full-viewport hero: the interactive **dot field** as the background, the name
  set huge in Fraunces, a one-sentence thesis, and a Braille rendering of the
  word "touch" as an ornament (real Grade 1 Braille, with a footnote).
- "Now" block: the news log, dates in mono, most recent first; past tense for
  events that have happened (CHI '26 was in April).
- "Selected work": the two first-author projects as wide rows with poster art,
  linking to the research demos.
- "In numbers" is dropped. Numbers are not the story.
- Footer with live Sydney time.

### Research
- Opening question in large serif: what the PhD is trying to answer.
- **TactDeform demo**: an SVG of a 5×6 electrode grid next to a finger over a
  cube. A range slider moves the finger toward a face, edge or corner; the grid
  pattern re-renders the way the poster's legend describes it.
- **Just Before Touch demo**: a timeline with a "lead time" slider (0–200 ms).
  Press play; a vibration cue fires before the visual contact, and the perceived
  material label shifts along soft → hard. Explains proactive haptics in ten
  seconds.
- Thesis card rewritten as a short paragraph plus objectives; methodology list
  folded in.
- Collaboration strand: the supernumerary-limbs work with Hongyu Zhou, framed
  honestly as co-authored.

### Publications
- Year rail on the left, entries on the right, first-author entries marked with
  a filled dot, co-authored with a hollow one.
- Awards shown inline (CHI '25 Honorable Mention, from the CV; missing today).
- One-line teaser per paper (from the posters and titles; nothing invented).
- Filter chips (All / First author / Year) instead of two selects.
- Cite drawer: BibTeX shown in a `<pre>`, copy and download buttons, keyboard
  reachable.
- Links: DOI, arXiv when preprint, code repository where it exists (Just Before
  Touch has a public repo on the poster).

### Teaching
- **Semester grid**: columns 2023 S2 → 2026 S1, rows are units, cells filled by
  role (tutor / head TA / examiner / associate lecturer). Hover or focus shows the
  cell details. This replaces the stat cards, role cards *and* the table.
- The current role (Associate Lecturer / PhD Teaching Fellow, Oct 2025 →) leads.
- Guest lectures listed as in the CV (Usability Engineering 2026, HCI 2025).
- Philosophy cut to three sentences in Yihao's voice.
- "Students mentored: 4+" and the responsibilities list are removed.

### About
- Short bio in first person, three paragraphs, no "passionate".
- **Path**: a vertical timeline 2019 → 2028 with degrees, the switch to research,
  and the expected PhD end.
- **Awards & service** section from the CV (currently absent from the site):
  Honorable Mention CHI 2025, Best Early PhD Project 2025, Faculty of
  Engineering Research Scholarship 2024–28, High Honour Roll 2024; external
  reviewer CHI 2026 and ISMAR 2026; student volunteer AHs 2025.
- "Toolbox": a compact two-column list of what he actually builds with. The
  "professional skills" list is dropped.
- Languages kept as one line.

### Contact
- Written as a short letter: what to write about, how fast he replies.
- Three channels (email, phone, office) and the academic profiles as a plain
  list with hairlines; vCard download kept.
- Live Sydney time so a visitor knows whether to expect a same-day reply.

### Card (card.yihaodong.me)
- Same content as today, restyled with the new tokens so a scanned QR code
  lands somewhere that matches the site.

## 5. Engineering notes

- Stack unchanged: SvelteKit 2, Svelte 5 runes, Tailwind 3.4, Vercel adapter.
- Design tokens are CSS custom properties on `:root`, redefined for dark under
  `prefers-color-scheme`; Tailwind maps them so
  utilities like `text-ink` and `bg-paper` work. Opacity modifiers
  (`bg-paper/85`) compile to `color-mix()` (see `tailwind.config.js`). Never
  hard-code a hex in a component: use a token so both themes are covered.
- Fonts self-hosted through `@fontsource*` packages (no Google Fonts request).
- New data files: `news.ts`, `awards.ts` (awards + service), publications gain
  `teaser`, `award`, `code` fields.
- OG image regenerated in the new palette with the dot motif.
- All interactive pieces are keyboard operable (`<input type=range>`, real
  buttons) and carry text alternatives.
