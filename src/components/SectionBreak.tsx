import { Sparkle } from '@/components/PosterDecor'

type Props = {
  /** background of the strip, so it blends with the sections either side */
  className?: string
}

/** A thin dashed strip between sections, with a few sparkles. */
const SectionBreak = ({ className = 'sky' }: Props) => (
  <div className={`relative h-14 md:h-20 overflow-hidden ${className}`} aria-hidden="true">
    <div className="absolute inset-0 flex items-center">
      <div className="w-full border-t-2 border-dashed border-foreground/15" />
    </div>
    <Sparkle className="absolute top-3 left-[22%] w-3 md:w-5 text-primary animate-twinkle" />
    <Sparkle className="absolute bottom-3 left-[64%] w-4 md:w-6 text-secondary animate-twinkle" style={{ animationDelay: '1.4s' }} />
    <Sparkle className="absolute top-5 left-[86%] w-3 md:w-4 text-bulb animate-twinkle" style={{ animationDelay: '2.2s' }} />
  </div>
)

export default SectionBreak
