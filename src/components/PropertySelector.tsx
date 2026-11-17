import { useMemo, useState } from 'react'
import { PROPERTIES, COUNTRIES, type CountryFilter } from '@/data/properties'
import { DiscoBall, Sparkle } from '@/components/PosterDecor'

const PropertySelector = () => {
  const [filter, setFilter] = useState<CountryFilter>('All')
  const [search, setSearch] = useState('')

  const filtered = useMemo(() => {
    const term = search.trim().toLowerCase()
    return PROPERTIES.filter((p) => {
      const matchesCountry = filter === 'All' || p.country === filter
      const matchesSearch = !term || p.name.toLowerCase().includes(term) || p.country.toLowerCase().includes(term)
      return matchesCountry && matchesSearch
    })
  }, [filter, search])

  return (
    <section id="hostels" className="sky relative py-16 md:py-28">
      <Sparkle className="absolute top-16 right-[9%] w-5 md:w-8 text-secondary animate-twinkle" />

      <div className="relative z-10 px-4 md:px-12 max-w-7xl mx-auto">
        <h2 className="font-display uppercase text-center text-extrude mb-4 md:mb-5" style={{ fontSize: 'clamp(2.2rem, 7.5vw, 6rem)' }}>
          Pick your <span className="text-neon" style={{ textShadow: '0 0 24px hsla(178, 69%, 67%, 0.5)' }}>party</span>
        </h2>
        <p className="text-center text-xs md:text-base font-extrabold uppercase tracking-[0.25em] text-foreground/55 mb-8 md:mb-12">
          23 hostels. 6 countries. One countdown.
        </p>

        <div className="sticky top-0 z-20 -mx-4 px-4 md:mx-0 md:px-0 py-3 md:py-4 bg-background/90 backdrop-blur-md">
          <div className="flex flex-col gap-3 md:gap-5">
            <input
              type="text"
              placeholder="SEARCH LOCATION..."
              aria-label="Search location"
              className="w-full p-4 md:p-5 text-base md:text-xl font-extrabold uppercase white-border bg-card text-foreground placeholder:text-foreground/35 outline-none focus:border-primary transition-colors"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <div className="flex overflow-x-auto pb-1 gap-2 md:gap-3 no-scrollbar">
              {COUNTRIES.map((country) => (
                <button
                  key={country}
                  onClick={() => setFilter(country)}
                  aria-pressed={filter === country}
                  className={`whitespace-nowrap px-4 md:px-7 py-2 md:py-3 font-extrabold uppercase text-xs md:text-base white-border transition-all ${
                    filter === country ? 'bg-primary text-primary-foreground' : 'bg-card text-foreground hover:bg-muted'
                  }`}
                >
                  {country}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 md:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
          {filtered.length > 0 ? (
            filtered.map((prop) => (
              <div key={prop.id} className="marquee-box marquee-sm flex flex-col p-5 md:p-8 group card-hover neon-shadow">
                <div className="flex justify-between items-start mb-3 md:mb-8">
                  <span className="bg-secondary text-secondary-foreground px-2 md:px-3 py-1 text-[10px] md:text-xs font-extrabold uppercase tracking-wider">
                    {prop.country}
                  </span>
                  <DiscoBall className="w-9 md:w-11 text-foreground/45 group-hover:text-primary transition-colors" />
                </div>

                <h3 className="font-display uppercase text-2xl md:text-[2rem] mb-4 md:mb-9 flex-grow group-hover:text-primary transition-colors">
                  {prop.name}
                </h3>

                {prop.url ? (
                  <a
                    href={prop.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center bg-primary text-primary-foreground font-display uppercase py-3 md:py-4 white-border text-sm md:text-base hover:bg-foreground hover:text-marquee transition-colors"
                  >
                    Get on the list
                  </a>
                ) : (
                  <span className="block w-full text-center bg-background/60 text-foreground/50 font-display uppercase py-3 md:py-4 border-2 border-foreground/25 text-sm md:text-base cursor-not-allowed">
                    Coming soon
                  </span>
                )}
              </div>
            ))
          ) : (
            <p className="col-span-full text-center font-display uppercase text-xl md:text-3xl text-foreground/50 py-12">
              No party by that name. Try again.
            </p>
          )}
        </div>
      </div>
    </section>
  )
}

export default PropertySelector
