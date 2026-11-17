import { getAsset } from '@/lib/images'
import { Haze, Sparkle } from '@/components/PosterDecor'

const sign634 = getAsset('dress-code-sign-634.webp')
const sign360 = getAsset('dress-code-sign-360.webp')

const STEPS = [
  {
    title: 'Pick your hostel',
    copy: 'Every Mad Monkey across Cambodia, Indonesia, Laos, the Philippines, Thailand and Vietnam is in. Find yours below.',
  },
  {
    title: 'Check the plan',
    copy: 'Your hostel page has the night: pub crawl or boat party, the free flow package and how to get on the list.',
  },
  {
    title: 'Turn up in white',
    copy: 'Head to toe. The neon paint shows up best on a clean canvas, and you will not leave as one.',
  },
]

const DressCodeSection = () => {
  return (
    <section id="dress-code" className="relative py-16 md:py-28 px-4 md:px-12 overflow-hidden sky">
      <Haze className="left-[-20%] right-[-20%] top-[10%] h-[80%] opacity-50" />

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-10 md:gap-16 items-center">
        <div className="relative flex justify-center lg:justify-start">
          {sign634 && (
            <img
              src={sign634}
              srcSet={sign360 ? `${sign360} 360w, ${sign634} 634w` : undefined}
              sizes="(min-width: 1024px) 380px, 60vw"
              alt="A-frame sign reading Dec 31, dress code: white"
              loading="lazy"
              width={634}
              height={1200}
              className="w-[60vw] max-w-[300px] lg:max-w-[380px] h-auto animate-float"
              style={{ filter: 'drop-shadow(0 24px 40px rgba(0,0,0,0.55))' }}
            />
          )}
          <Sparkle className="absolute top-6 right-[18%] lg:right-[8%] w-6 md:w-9 text-foreground animate-twinkle" />
          <Sparkle className="absolute bottom-12 left-[14%] lg:left-0 w-4 md:w-6 text-secondary animate-twinkle" style={{ animationDelay: '1.6s' }} />
        </div>

        <div>
          <p className="text-xs md:text-sm font-extrabold uppercase tracking-[0.35em] text-secondary mb-3 md:mb-4">The dress code</p>
          <h2 className="font-display uppercase text-extrude" style={{ fontSize: 'clamp(2.4rem, 7vw, 5.4rem)' }}>
            All white.
            <span className="block text-neon" style={{ textShadow: '0 0 26px hsla(178, 69%, 67%, 0.55)' }}>
              Neon paint.
            </span>
          </h2>
          <p className="mt-5 md:mt-7 text-sm md:text-lg font-medium text-foreground/80 leading-relaxed max-w-xl">
            White tee, white shorts, white whatever. It is the one rule of the night, and it is there so the neon paint
            has something to land on. Expect to go home a lot more colourful than you arrived.
          </p>

          <ol className="mt-8 md:mt-10 flex flex-col gap-4 md:gap-5">
            {STEPS.map((step, i) => (
              <li key={step.title} className="flex gap-4 md:gap-6 items-start bg-background/70 backdrop-blur-sm white-border border-foreground/15 p-4 md:p-6">
                <span className="font-display text-neon text-3xl md:text-4xl leading-none tabular shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="font-display uppercase text-lg md:text-2xl mb-1">{step.title}</h3>
                  <p className="text-sm md:text-base font-medium text-foreground/70 leading-relaxed">{step.copy}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

export default DressCodeSection
