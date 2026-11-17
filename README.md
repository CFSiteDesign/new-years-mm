# Mad Monkey New Year's Party 2026

Landing page for the New Year's Party running at every Mad Monkey hostel on
**Thursday 31 December 2026**. Free flow, live DJ, pub crawl or boat party,
neon paint, dress code all white.

Vite + React + Tailwind (same stack as the Halloween page it was cloned from).

```
npm install
npm run dev -- --port 5202
```

## The page

Hero → ticker → what is going down (3 cards) → dress code → ticker → hostel
selector → FAQ → footer.

The look is lifted from the poster set (`MM New Years White Party *.jpg`):
night sky with stars, the magenta / yellow / cyan haze, a checkered dance floor,
and the purple marquee panels with chasing yellow bulbs (`.marquee-box` in
`src/index.css`). Haze, light beams and the floor are CSS in
`src/components/PosterDecor.tsx`, so they scale to any section. The hero has a
live countdown to midnight in the visitor's own time zone
(`src/components/Countdown.tsx`).

## Artwork

- `src/assets/nye-lockup-{760,1400}.webp`: the NEW YEAR'S PARTY disco ball
  lockup, cut out of the A4 poster (macOS Vision subject lift for the ball,
  colour key for the 3D letters, light beam masked out). Its bottom edge is flat
  where the poster's frame cut it, so it always sits on a marquee panel.
- `src/assets/dress-code-sign-{360,634}.webp`: the DEC 31 / DRESS CODE: WHITE
  A-frame sign, cut out of the A4 poster.
- `src/assets/mad-monkey-roundel.webp`: the roundel from the poster.
- `src/assets/stars-tile.webp`: seamless generated star tile.
- `public/og-new-years.jpg`: share card, cropped from the TV poster.

The three highlight cards use neon line drawings (`src/components/NeonIcons.tsx`).
Drop `card-freeflow.webp`, `card-dj.webp` or `card-crawl.webp` (4:3) into
`src/assets/` and that card switches to the photo automatically.

## Turning the hostel links on

All 23 cards show **COMING SOON**. On 17 Nov 2026 madmonkeyhostels.com had no
New Year's event pages yet. In `src/data/properties.ts` either paste each page
into `EVENT_PAGES` against the hostel id, or, if the pages share one slug
pattern, set `EVENT_SLUG` and every hostel is built from
`/tours-events/<EVENT_SLUG>-mad-monkey-<slug>`. Uluwatu's slug is `ulu-watu`.
