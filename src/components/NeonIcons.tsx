import type { SVGProps } from 'react'

/** Line drawings that glow like neon tubes. Stroke follows text colour. */

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 3,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
}

/** two champagne flutes clinking */
export const Flutes = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 120 120" {...base} {...props}>
    <g transform="rotate(-14 42 60)">
      <path d="M30 18h22l-2 34a9 9 0 0 1-18 0Z" />
      <path d="M41 61v34M31 96h20" />
      <path d="M33 34h16" opacity="0.7" />
    </g>
    <g transform="rotate(14 78 60)">
      <path d="M68 18h22l-2 34a9 9 0 0 1-18 0Z" />
      <path d="M79 61v34M69 96h20" />
      <path d="M71 34h16" opacity="0.7" />
    </g>
    <path d="M60 6v8M50 9l4 6M70 9l-4 6" />
    <circle cx="44" cy="44" r="1.6" fill="currentColor" />
    <circle cx="77" cy="40" r="1.6" fill="currentColor" />
    <circle cx="80" cy="30" r="1.2" fill="currentColor" />
  </svg>
)

/** turntable with the tone arm down */
export const Decks = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 120 120" {...base} {...props}>
    <rect x="10" y="22" width="100" height="76" rx="6" />
    <circle cx="52" cy="60" r="28" />
    <circle cx="52" cy="60" r="18" opacity="0.6" />
    <circle cx="52" cy="60" r="4" />
    <path d="M94 32v30l-14 14" />
    <circle cx="94" cy="32" r="4" />
    <path d="M96 84h6M96 90h6" opacity="0.8" />
  </svg>
)

/** a party boat on the swell, with a pin trail for the crawl */
export const BoatCrawl = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 120 120" {...base} {...props}>
    <path d="M18 70h84l-12 18H30Z" />
    <path d="M40 70V52h34v18M48 52v-8h16v8" />
    <path d="M57 44V22l16 8-16 8" />
    <path d="M8 98c8 0 8-5 16-5s8 5 16 5 8-5 16-5 8 5 16 5 8-5 16-5 8 5 16 5" />
    <path d="M14 30c6-10 18-12 26-4" strokeDasharray="2 7" opacity="0.8" />
    <path d="M14 34a5 5 0 1 1 0-.1Z" />
  </svg>
)
