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
