import type { CSSProperties, SVGProps } from 'react'

/**
 * Background pieces lifted from the New Year's poster: the white spotlight,
 * the magenta / yellow / cyan haze, the neon tube beams and the checkered
 * dance floor. All CSS, no bitmaps, so they scale to any section.
 */

type DivProps = { className?: string; style?: CSSProperties }

/** soft white spotlight raking in from the top right */
export const LightBeam = ({ className = '', style }: DivProps) => (
  <div
    aria-hidden="true"
    className={`pointer-events-none absolute animate-beam-pulse ${className}`}
    style={{
      background:
        'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.10) 22%, rgba(255,255,255,0.38) 50%, rgba(255,255,255,0.10) 78%, transparent 100%)',
      filter: 'blur(22px)',
      transformOrigin: 'top center',
      ...style,
    }}
  />
)

/** the rainbow haze band behind the disco ball */
export const Haze = ({ className = '', style }: DivProps) => (
  <div
    aria-hidden="true"
    className={`pointer-events-none absolute ${className}`}
    style={{
      background: [
        'radial-gradient(42% 60% at 0% 62%, hsl(63 87% 56%) 0%, hsl(13 83% 67%) 30%, hsl(329 83% 55%) 55%, transparent 78%)',
        'radial-gradient(40% 62% at 100% 64%, hsl(178 69% 67%) 0%, hsl(197 63% 51%) 38%, transparent 72%)',
        'radial-gradient(30% 34% at 50% 56%, rgba(255,255,255,0.45) 0%, transparent 70%)',
        'linear-gradient(180deg, transparent 0%, hsla(329, 83%, 55%, 0.18) 45%, transparent 100%)',
      ].join(', '),
      filter: 'blur(28px)',
      // fade top and bottom so the band never ends on a hard line
      WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, #000 22%, #000 70%, transparent 100%)',
      maskImage: 'linear-gradient(to bottom, transparent 0%, #000 22%, #000 70%, transparent 100%)',
      ...style,
    }}
  />
)

/** pink and cyan light tubes shooting out from under the ball */
export const NeonBeams = ({ className = '' }: { className?: string }) => (
  <div aria-hidden="true" className={`pointer-events-none absolute inset-0 ${className}`}>
    <div
      className="absolute"
      style={{
        right: '58%',
        bottom: '14%',
        width: '70vw',
        height: 'clamp(14px, 2.2vw, 30px)',
        transform: 'rotate(-14deg)',
        transformOrigin: 'right center',
        borderRadius: '999px',
        background:
          'linear-gradient(90deg, transparent 0%, hsla(329, 83%, 55%, 0.55) 30%, hsl(329 90% 70%) 80%, #fff 100%)',
        boxShadow: '0 0 28px 8px hsla(329, 83%, 55%, 0.55)',
        filter: 'blur(1.5px)',
      }}
    />
    <div
      className="absolute"
      style={{
        left: '56%',
        bottom: '6%',
        width: '75vw',
        height: 'clamp(40px, 7vw, 110px)',
        transform: 'rotate(12deg)',
        transformOrigin: 'left center',
        background:
          'linear-gradient(90deg, rgba(255,255,255,0.95) 0%, hsla(178, 75%, 75%, 0.75) 22%, hsla(178, 69%, 67%, 0.35) 60%, transparent 100%)',
        filter: 'blur(10px)',
        clipPath: 'polygon(0 35%, 100% 0, 100% 100%, 0 65%)',
      }}
    />
  </div>
)

/** checkered dance floor in perspective, lit pink and cyan */
export const DanceFloor = ({ className = '', tile = 96 }: { className?: string; tile?: number }) => (
  <div
    aria-hidden="true"
    className={`pointer-events-none absolute inset-x-0 bottom-0 overflow-hidden ${className}`}
    style={{
      perspective: '520px',
      WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, #000 38%)',
      maskImage: 'linear-gradient(to bottom, transparent 0%, #000 38%)',
    }}
  >
    <div
      className="absolute"
      style={{
        left: '-60%',
        right: '-60%',
        top: 0,
        height: '260%',
        transform: 'rotateX(64deg)',
        transformOrigin: 'top center',
        background: `repeating-conic-gradient(#0d0919 0 25%, #3d2170 0 50%) 50% 0 / ${tile}px ${tile}px`,
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          mixBlendMode: 'screen',
          background: [
            'radial-gradient(16% 14% at 40% 3%, hsla(329, 90%, 60%, 0.95), transparent 70%)',
            'radial-gradient(16% 16% at 60% 5%, hsla(197, 75%, 55%, 0.95), transparent 70%)',
            'radial-gradient(10% 8% at 50% 0%, rgba(255,255,255,0.7), transparent 70%)',
            'radial-gradient(14% 12% at 25% 8%, hsla(0, 85%, 55%, 0.6), transparent 70%)',
            'radial-gradient(14% 12% at 76% 7%, hsla(178, 69%, 67%, 0.7), transparent 70%)',
          ].join(', '),
        }}
      />
    </div>
  </div>
)

/** four point sparkle */
export const Sparkle = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M12 0c.9 6.4 4.6 10.6 12 12-7.4 1.4-11.1 5.6-12 12-.9-6.4-4.6-10.6-12-12C7.4 10.6 11.1 6.4 12 0Z" />
  </svg>
)

/** tiny disco ball, used as the hostel card mark */
export const DiscoBall = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 64 72" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true" {...props}>
    <path d="M32 0v8" strokeLinecap="round" />
    <rect x="27" y="7" width="10" height="5" rx="1" fill="currentColor" stroke="none" />
    <circle cx="32" cy="40" r="27" />
    <ellipse cx="32" cy="40" rx="12" ry="27" />
    <path d="M5.5 40h53M9 26.5h46M9 53.5h46M17 17.5h30M17 62.5h30" />
    <path d="M32 13v54" />
    <path d="M44 22l3 3M41 30l4 1" strokeLinecap="round" opacity="0.9" />
  </svg>
)
