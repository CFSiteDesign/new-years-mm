const WORDS = ['Free Flow', 'Live DJ', 'Pub Crawl', 'Boat Party', 'Neon Paint', 'All White', '31 December', 'Every Mad Monkey']

type Props = {
  reverse?: boolean
}

/** a strip of bulbs top and bottom, cyan type rolling through the middle */
const bulbRow = {
  backgroundImage: 'radial-gradient(circle, hsl(var(--bulb)) 0 2.6px, transparent 3.6px)',
  backgroundSize: '18px 12px',
  backgroundRepeat: 'repeat-x',
  filter: 'drop-shadow(0 0 3px hsla(62, 95%, 75%, 0.8))',
} as const

const TickerBar = ({ reverse = false }: Props) => {
  const strip = [...WORDS, ...WORDS, ...WORDS]

  return (
    <div className="relative w-full bg-marquee overflow-hidden py-4 md:py-5 border-y-2 border-foreground/10">
      <div aria-hidden="true" className="absolute inset-x-0 top-1 h-3" style={bulbRow} />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-1 h-3" style={bulbRow} />
      <div className={`flex w-max ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`} aria-hidden="true">
        {[0, 1].map((half) => (
          <div key={half} className="flex shrink-0">
            {strip.map((word, i) => (
              <span
                key={`${half}-${i}`}
                className="font-display uppercase text-neon text-base md:text-2xl px-4 md:px-7 whitespace-nowrap"
              >
                {word}
                <span className="ml-4 md:ml-7 text-secondary" style={{ textShadow: 'none' }}>
                  ✦
                </span>
              </span>
            ))}
          </div>
        ))}
      </div>
      <span className="sr-only">Free flow, live DJ, pub crawl or boat party, neon paint and an all white dress code on 31 December</span>
    </div>
  )
}

export default TickerBar
