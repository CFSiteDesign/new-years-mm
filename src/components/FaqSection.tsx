import { useState } from 'react'
import { Haze } from '@/components/PosterDecor'

const FAQS = [
  {
    q: 'When is it?',
    a: "Thursday 31 December 2026, New Year's Eve. Start times are set by each hostel and go up on its event page.",
  },
  {
    q: 'Which hostels are in?',
    a: 'All of them. Every Mad Monkey across Cambodia, Indonesia, Laos, the Philippines, Thailand and Vietnam. Pick yours in the list above.',
  },
  {
    q: 'What is included?',
    a: 'Free flow, a live DJ and neon paint, plus a pub crawl or a boat party depending on the hostel. The exact package and price sit on your hostel event page.',
  },
  {
    q: 'Pub crawl or boat party?',
    a: 'Depends where you are. Each hostel runs the version that suits its spot, and its event page tells you which.',
  },
  {
    q: 'What is the dress code?',
    a: 'White. All of it. The neon paint needs a clean canvas, so that is the deal.',
  },
  {
    q: 'How do I get on the list?',
    a: "Through your hostel's event page. The buttons above switch on as each hostel puts its New Year's page live.",
  },
]

const FaqSection = () => {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="relative py-16 md:py-28 px-4 md:px-12 overflow-hidden sky">
      <Haze className="left-[-30%] right-[-30%] bottom-[4%] h-[55%] opacity-40" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="font-display uppercase text-center text-extrude mb-9 md:mb-14" style={{ fontSize: 'clamp(2rem, 6.5vw, 4.6rem)' }}>
          Before <span className="text-neon" style={{ textShadow: '0 0 24px hsla(178, 69%, 67%, 0.5)' }}>midnight</span>
        </h2>

        <div className="flex flex-col gap-3 md:gap-4">
          {FAQS.map((faq, i) => {
            const isOpen = open === i
            return (
              <div key={faq.q} className={`bg-background white-border transition-colors ${isOpen ? 'border-primary' : 'border-foreground/25'}`}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 text-left p-4 md:p-6 hover:bg-muted transition-colors"
                >
                  <span className="font-display uppercase text-base md:text-2xl">{faq.q}</span>
                  <span
                    className={`shrink-0 font-display text-2xl md:text-4xl text-primary transition-transform duration-200 ${
                      isOpen ? 'rotate-45' : ''
                    }`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-4 md:px-6 pb-4 md:pb-6 text-sm md:text-lg font-medium text-foreground/75 leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FaqSection
