import type { ComponentType, SVGProps } from 'react'
import { getAsset } from '@/lib/images'
import { BoatCrawl, Decks, Flutes } from '@/components/NeonIcons'
import { Sparkle } from '@/components/PosterDecor'

type Card = {
  title: string
  badge: string
  description: string
  /** drop card-<key>.webp into src/assets and it replaces the neon drawing */
  image?: string
  Icon: ComponentType<SVGProps<SVGSVGElement>>
  tone: 'cyan' | 'pink' | 'yellow'
  rotate: string
}

const CARDS: Card[] = [
  {
    title: 'Free Flow',
    badge: 'Bar is open',
    description:
      'Free flow at the bar to see 2026 out properly. Each hostel sets its own package, so check your hostel page for what is pouring and for how long.',
    image: getAsset('card-freeflow.webp'),
    Icon: Flutes,
    tone: 'yellow',
    rotate: '-rotate-2',
  },
  {
    title: 'Live DJ',
    badge: 'Through the countdown',
    description:
      'A live DJ running the night, from the warm up, through the ten second countdown and on into 2027. Bring your loudest "Happy New Year".',
    image: getAsset('card-dj.webp'),
    Icon: Decks,
    tone: 'cyan',
    rotate: 'rotate-2',
  },
  {
    title: 'Pub Crawl or Boat Party',
    badge: 'Depends where you are',
    description:
      'Some hostels take the night out bar to bar, some take it out on the water. Your hostel page says which one you are getting.',
    image: getAsset('card-crawl.webp'),
    Icon: BoatCrawl,
    tone: 'pink',
    rotate: '-rotate-1',
  },
]

const TONE = {
  cyan: { text: 'text-primary', glow: 'hsla(178, 69%, 67%, 0.55)', badge: 'bg-primary text-primary-foreground' },
  pink: { text: 'text-secondary', glow: 'hsla(329, 83%, 55%, 0.6)', badge: 'bg-secondary text-secondary-foreground' },
  yellow: { text: 'text-bulb', glow: 'hsla(62, 95%, 75%, 0.55)', badge: 'bg-bulb text-marquee' },
}

const LineupCard = ({ card }: { card: Card }) => {
  const tone = TONE[card.tone]
  return (
    <article className="marquee-box marquee-sm p-5 md:p-7 flex flex-col group card-hover neon-shadow">
      <div className="relative aspect-[4/3] mb-5 md:mb-6 overflow-hidden bg-background">
        {card.image ? (
          <img
            src={card.image}
            alt={card.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div
            className="sky w-full h-full flex items-center justify-center"
            style={{ boxShadow: `inset 0 0 80px ${tone.glow}` }}
          >
            <card.Icon
              className={`w-[46%] ${tone.text} transition-transform duration-500 group-hover:scale-110`}
              style={{ filter: `drop-shadow(0 0 6px ${tone.glow}) drop-shadow(0 0 18px ${tone.glow})` }}
            />
          </div>
        )}
        <span
          className={`absolute top-2 left-2 md:top-3 md:left-3 ${tone.badge} font-extrabold uppercase text-[10px] md:text-xs tracking-wider px-2 py-1 ${card.rotate}`}
        >
          {card.badge}
        </span>
      </div>

      <h3 className="font-display uppercase text-2xl md:text-[1.9rem] mb-2 md:mb-3 text-foreground">{card.title}</h3>
      <p className="text-sm md:text-base font-medium leading-relaxed text-foreground/75">{card.description}</p>
    </article>
  )
}

const LineupSection = () => {
  return (
    <section id="lineup" className="sky relative py-16 md:py-28 px-4 md:px-12 overflow-hidden">
      <Sparkle className="absolute top-14 left-[8%] w-5 md:w-8 text-bulb animate-twinkle" />
      <Sparkle className="absolute top-24 right-[10%] w-4 md:w-6 text-primary animate-twinkle" style={{ animationDelay: '1.2s' }} />

      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="font-display uppercase text-center text-extrude mb-4 md:mb-5" style={{ fontSize: 'clamp(2.2rem, 7.5vw, 6rem)' }}>
          What is <span className="text-neon" style={{ textShadow: '0 0 24px hsla(178, 69%, 67%, 0.5)' }}>going down</span>
        </h2>
        <p className="text-center text-xs md:text-base font-extrabold uppercase tracking-[0.25em] text-foreground/55 mb-10 md:mb-16">
          Same three as always. Bigger night.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 md:gap-10">
          {CARDS.map((card) => (
            <LineupCard key={card.title} card={card} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default LineupSection
