import { getAsset } from '@/lib/images'
import Countdown from '@/components/Countdown'
import { DanceFloor, Haze, LightBeam, NeonBeams, Sparkle } from '@/components/PosterDecor'

const lockup760 = getAsset('nye-lockup-760.webp')
const lockup1400 = getAsset('nye-lockup-1400.webp')
const sign = getAsset('dress-code-sign-380.webp')
const roundel = getAsset('mad-monkey-roundel.webp')
const madMonkeyLogo = getAsset('mad-monkey-logo-white.webp')

const HeroSection = () => {
  return (
    <section className="sky relative min-h-[100svh] flex flex-col items-center px-4 md:px-8 pt-6 pb-16 md:pt-8 md:pb-20 overflow-hidden">
      <LightBeam className="-top-[10%] right-[2%] w-[38%] h-[95%]" style={{ transform: 'rotate(38deg)' }} />
      <Haze className="left-[-10%] right-[-10%] top-[30%] h-[46%]" />
      <DanceFloor className="h-[30%]" tile={64} />

      {/* way back to the main site: standard on every MM event page */}
      <a
        href="https://madmonkeyhostels.com"
        className="absolute z-20 top-[22px] right-4 md:top-7 md:right-8 inline-flex items-center gap-1.5 md:gap-2 bg-background/50 backdrop-blur-sm white-border font-display uppercase text-[10px] md:text-sm px-3 py-2 md:px-5 md:py-2.5 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
      >
        <svg viewBox="0 0 16 16" className="w-3 md:w-3.5" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
          <path d="M10 3 5 8l5 5" strokeLinecap="square" />
        </svg>
        Homepage
      </a>

      <div className="relative z-10 w-full max-w-6xl flex flex-col items-center text-center">
        {madMonkeyLogo && (
          <div className="w-full flex justify-start sm:justify-center mb-3 sm:mb-2 md:mb-4">
            <img src={madMonkeyLogo} alt="Mad Monkey Hostels" className="w-24 sm:w-28 md:w-40" width={640} height={186} />
          </div>
        )}

        {/* the lockup, lifted straight off the poster */}
        <div className="relative w-full max-w-[min(94vw,820px)]">
          <NeonBeams />
          <h1 className="relative">
            <img
              src={lockup1400 ?? lockup760}
              srcSet={lockup760 && lockup1400 ? `${lockup760} 760w, ${lockup1400} 1400w` : undefined}
              sizes="(min-width: 900px) 820px, 94vw"
              alt="New Year's Party"
              width={1400}
              height={1093}
              className="relative w-full h-auto select-none"
              style={{ filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.45))' }}
            />
          </h1>
        </div>

        {/* marquee panels overlap the bottom of the ball, like the poster */}
        <div className="relative z-10 -mt-[1.5%] md:-mt-[1.2%] w-full max-w-3xl flex flex-col sm:flex-row items-center sm:items-stretch justify-center gap-3 md:gap-5">
          <div className="marquee-box w-full sm:w-auto sm:flex-1 px-7 py-7 md:px-12 md:py-9 -rotate-[1.5deg]">
            <p className="font-display uppercase text-neon text-[1.3rem] sm:text-2xl md:text-[2rem] leading-[1.04] tracking-wide">
              Free flow
              <br />
              Live DJ
              <br />
              <span className="whitespace-nowrap">
                Pub crawl <span className="text-foreground/60 text-[0.6em] align-middle">or</span>
              </span>{' '}
              <span className="whitespace-nowrap">boat party</span>
            </p>
          </div>
          <div className="marquee-box marquee-sm w-full sm:w-auto px-7 py-6 md:px-8 md:py-7 rotate-[1.2deg] flex items-center justify-center gap-4">
            <p className="font-display uppercase text-neon text-xl md:text-[1.7rem] leading-[1] text-left">
              All
              <br />
              white
            </p>
            {roundel && (
              <img src={roundel} alt="" aria-hidden="true" className="w-16 md:w-20 shrink-0" width={296} height={297} />
            )}
          </div>
        </div>

        {/* date tape */}
        <div className="mt-6 md:mt-8 inline-flex items-center gap-2 md:gap-3 bg-foreground text-marquee font-display uppercase text-sm md:text-2xl px-5 py-2 md:px-8 md:py-3 -rotate-1 neon-shadow-pink">
          <Sparkle className="w-3 md:w-5 text-secondary" />
          Thursday 31 December
          <Sparkle className="w-3 md:w-5 text-secondary" />
        </div>

        <p className="mt-5 md:mt-7 max-w-2xl text-sm md:text-lg font-semibold leading-relaxed text-foreground/85">
          One last night of 2026, every Mad Monkey at once. Free flow at the bar, a live DJ through the
          countdown, and a pub crawl or boat party depending on where you are. Wear white. The neon paint
          does the rest.
        </p>

        <div className="mt-6 md:mt-8 w-full flex flex-col sm:flex-row gap-3 md:gap-5 justify-center">
          <a
            href="#hostels"
            className="bg-primary text-primary-foreground font-display uppercase text-base md:text-xl px-8 py-4 md:px-11 md:py-5 white-border lift-hover"
          >
            Find your party
          </a>
          <a
            href="#lineup"
            className="bg-background/40 backdrop-blur-sm text-foreground font-display uppercase text-base md:text-xl px-8 py-4 md:px-11 md:py-5 white-border hover:bg-foreground hover:text-marquee transition-colors"
          >
            What's on
          </a>
        </div>

        <Countdown className="mt-9 md:mt-12" />
      </div>

      {sign && (
        <img
          src={sign}
          alt=""
          aria-hidden="true"
          width={380}
          height={605}
          className="hidden lg:block absolute left-[2.5vw] bottom-8 z-[5] w-[11vw] max-w-[190px] select-none pointer-events-none"
          style={{ filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.5))' }}
        />
      )}
    </section>
  )
}

export default HeroSection
