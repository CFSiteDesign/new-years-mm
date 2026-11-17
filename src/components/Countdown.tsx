import { useEffect, useState } from 'react'

/** Midnight on 1 January 2027 in the visitor's own time zone. */
const TARGET = new Date(2027, 0, 1, 0, 0, 0)

function remaining(now: number) {
  const ms = Math.max(0, TARGET.getTime() - now)
  const s = Math.floor(ms / 1000)
  return {
    done: ms === 0,
    days: Math.floor(s / 86400),
    hours: Math.floor((s % 86400) / 3600),
    mins: Math.floor((s % 3600) / 60),
    secs: s % 60,
  }
}

const pad = (n: number) => String(n).padStart(2, '0')

type Props = { className?: string }

const Countdown = ({ className = '' }: Props) => {
  const [now, setNow] = useState(() => Date.now())

  useEffect(() => {
    const id = window.setInterval(() => setNow(Date.now()), 1000)
    return () => window.clearInterval(id)
  }, [])

  const t = remaining(now)

  if (t.done) {
    return (
      <p className={`font-display uppercase text-neon text-2xl md:text-4xl ${className}`}>
        Happy New Year, monkeys
      </p>
    )
  }

  const units = [
    { v: String(t.days), l: t.days === 1 ? 'Day' : 'Days' },
    { v: pad(t.hours), l: 'Hrs' },
    { v: pad(t.mins), l: 'Min' },
    { v: pad(t.secs), l: 'Sec' },
  ]

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <span className="text-[10px] md:text-xs font-extrabold uppercase tracking-[0.35em] text-foreground/60 mb-2 md:mb-3">
        Countdown to midnight
      </span>
      <div className="flex items-stretch gap-1.5 md:gap-2.5" role="timer" aria-live="off">
        {units.map((u) => (
          <div
            key={u.l}
            className="bg-marquee white-border border-foreground/15 min-w-[62px] md:min-w-[86px] px-2 py-2 md:px-3 md:py-3 flex flex-col items-center"
          >
            <span className="font-display tabular text-neon text-2xl md:text-4xl leading-none">{u.v}</span>
            <span className="mt-1 text-[9px] md:text-[11px] font-extrabold uppercase tracking-[0.25em] text-foreground/55">
              {u.l}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Countdown
