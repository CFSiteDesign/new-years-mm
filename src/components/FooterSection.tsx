import { getAsset } from '@/lib/images'
import { DanceFloor, Haze, Sparkle } from '@/components/PosterDecor'

const madMonkeyLogo = getAsset('mad-monkey-logo-white.webp')
const lockup = getAsset('nye-lockup-760.webp')
const lockup1400 = getAsset('nye-lockup-1400.webp')

const SOCIALS = [
  { name: 'Instagram', url: 'https://www.instagram.com/madmonkeyhostels/' },
  { name: 'TikTok', url: 'https://www.tiktok.com/@madmonkeyhostels' },
  { name: 'Facebook', url: 'https://www.facebook.com/MadMonkeyHostels' },
  { name: 'YouTube', url: 'https://www.youtube.com/channel/UCkUGlFdhp5Ndk68j_QRS1kw' },
  { name: 'Website', url: 'https://madmonkeyhostels.com' },
]

const FooterSection = () => {
  return (
    <footer className="relative overflow-hidden">
      {/* last call */}
      <div className="sky relative pt-16 pb-28 md:pt-24 md:pb-40 px-4 md:px-12 text-center">
        <Haze className="left-[-10%] right-[-10%] top-[35%] h-[55%] opacity-80" />
        <DanceFloor className="h-[38%]" tile={84} />

        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
          {lockup && (
            <img
              src={lockup}
              srcSet={lockup1400 ? `${lockup} 760w, ${lockup1400} 1400w` : undefined}
              sizes="(min-width: 640px) 480px, 80vw"
              alt="New Year's Party"
              width={760}
              height={594}
              className="w-full max-w-[min(80vw,480px)] h-auto"
              style={{ filter: 'drop-shadow(0 16px 32px rgba(0,0,0,0.5))' }}
            />
          )}
          <div className="marquee-box -mt-[2%] px-7 py-6 md:px-12 md:py-8 -rotate-1">
            <p className="font-display uppercase text-neon text-base sm:text-xl md:text-4xl leading-[1.08]">
              Thursday 31 December
              <span className="block text-foreground" style={{ textShadow: 'none' }}>
                Every Mad Monkey
              </span>
            </p>
          </div>
          <a
            href="#hostels"
            className="mt-8 md:mt-10 inline-flex items-center gap-3 bg-primary text-primary-foreground font-display uppercase text-base md:text-xl px-9 py-4 md:px-12 md:py-5 white-border lift-hover"
          >
            <Sparkle className="w-4 md:w-5" />
            Find your party
          </a>
        </div>
      </div>

      {/* footer proper */}
      <div className="border-t-2 border-foreground/15 py-9 md:py-12 px-4 md:px-12 bg-[#040910]">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-6 md:gap-8">
          {madMonkeyLogo ? (
            <img src={madMonkeyLogo} alt="Mad Monkey Hostels" width={640} height={186} className="w-36 md:w-48" />
          ) : (
            <span className="font-display uppercase text-2xl">Mad Monkey</span>
          )}

          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {SOCIALS.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-extrabold uppercase text-[11px] md:text-sm px-3 md:px-4 py-1.5 border-2 border-foreground/30 hover:border-primary hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] text-foreground/40 text-center">
            © 2026 Mad Monkey Hostels · New Year's Party · 31 December
          </p>
        </div>
      </div>
    </footer>
  )
}

export default FooterSection
