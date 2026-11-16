# QA record — redesign, 14 September 2026

Run against the production build (`npm run build` + `npm run preview`) with
Playwright (Chromium) and axe-core 4.x.

## Static checks

| Check | Result |
|---|---|
| `svelte-check` | 0 errors, 0 warnings (was 6 errors before the redesign) |
| `vite build` (adapter-vercel) | clean |
| Console errors / page errors across all pages, both themes, two viewports | none |
| Failed requests / HTTP ≥ 400 | none |
| Horizontal overflow at 390 px | none (one defect found and fixed, see below) |

## Interaction tests (26/26 pass)

- Skip link is the first tab stop.
- Theme toggle flips `.dark`, persists to `localStorage`, survives reload.
- Hero dot field canvas renders at full size.
- TactDeform demo: feature radios change the caption and pattern; slider
  relabels for sliding features; Home/End keys work on the slider.
- Just Before Touch demo: play runs to completion and reports a verdict; the
  lead-time label tracks the slider.
- Publications: filters return the right counts; BibTeX drawer opens with a
  well-formed `@inproceedings` entry using `and` separators; `#pub-N` hash
  navigation highlights the entry.
- Teaching grid: 7 units × 6 semesters as a real table; exactly one
  co-coordinator mark.
- Contact: vCard downloads with the expected fields.
- Sydney clock renders.
- Mobile menu opens, closes on Escape, closes on navigation.
- Reduced motion: no reveal hiding is applied.

## Accessibility (axe, WCAG 2.1 AA + best practice)

All seven pages pass in light and dark themes. One run flagged colour
contrast on `/about`; re-running after the reveal transitions finished showed
no violations, so it was the fade-in being sampled mid-animation.

Palette contrast (computed):

| Token on paper | Light | Dark |
|---|---|---|
| ink | 16.0 | 15.3 |
| ink-2 | 8.2 | 8.6 |
| ink-3 (after darkening) | ≥ 5.0 | ≥ 5.0 |
| accent-ink (link/label text) | 5.2 | 10.4 |
| accent (marks only, not text) | 2.2 | 8.8 |

## Defects found and fixed during QA

1. Author lists on `/publications` lost the space after commas (Svelte trims
   whitespace at block boundaries). Fixed with an explicit `{', '}`.
2. `/teaching` overflowed horizontally on phones. Chromium counts table cell
   content inside a non-positioned scroll container toward page overflow;
   giving the scroll container `position: relative` fixed it.
3. The OG image mark used CSS grid, which Satori does not support. Rewritten
   with flex-wrap.
4. `bibtex()` had a possibly-undefined surname; guarded.

## Not covered

- The `card.yihaodong.me` host rewrite is Vercel configuration and was not
  exercised locally.
- `navigator.vibrate` was not exercised (no vibration hardware in headless
  Chromium); the calls are wrapped in try/catch and no-op elsewhere.
- Real screen-reader testing (VoiceOver/NVDA) was not performed; semantics
  were checked with axe and by inspection only.

---

# QA record — dark theme, 17 November 2026

Run against the production build with Playwright (Chromium) and axe-core,
system colour scheme emulated as light and as dark, at 1280 px and 390 px.

| Check | Result |
|---|---|
| `svelte-check` | 0 errors, 0 warnings |
| `vite build` | clean |
| axe (WCAG 2.1 AA + best practice), 7 pages × 2 themes | no violations |
| Console / page errors | none |
| Horizontal overflow at 390 px, both themes | none |

Theme behaviour: the page follows the system colour scheme through a media
query only, and switches live when the system setting changes, including the
hero canvas dots. A manual control (first a header button, then a footer
Auto / Light / Dark group) was built and removed the same day at Yihao's
request; nothing is stored in `localStorage`.

The dark palette was then replaced the same day with a dimmed-light one (see
DESIGN.md); the checks above were re-run.

Palette contrast (computed, text on paper / on the paper-2 band):

| Token | Light | Dark (dimmed) |
|---|---|---|
| ink | 15.5 / 14.6 | 13.1 / 12.3 |
| ink-2 | 8.2 / 7.7 | 7.8 / 7.3 |
| ink-3 | 5.0 / 4.8 | 5.4 / 5.0 |
| accent-ink | 5.4 / 5.1 | 5.6 / 5.3 |
| accent (marks only) | 2.3 | 2.2 |

## Defect found and fixed

Tailwind was silently dropping every colour utility with an opacity modifier
(`bg-paper/85`, `bg-paper-2/60`, `bg-paper-2/70`, `bg-paper/90`,
`border-line/80`), because the tokens are opaque `var()` values. In practice
the header and the publications filter bar had no background tint, the
"paper-2" section bands were not drawn, and the header's bottom border fell
back to Tailwind's light grey. The tokens now compile
to `color-mix()` when a modifier is used, and the default border colour is the
`line` token. This also slightly changes the light theme: the bands and the
header tint that were designed are now actually visible.

## Not covered

- Whether Chrome for Android's Auto Dark Theme, Samsung Internet and similar
  browsers actually leave the page alone was not tested on a device; the
  opt-outs used are the documented ones.
- Safari and Firefox were not exercised; `color-mix()` needs Safari 16.2+,
  Chrome 111+, Firefox 113+ (already relied on by the teaching grid).
