export type Country = 'Cambodia' | 'Indonesia' | 'Laos' | 'Philippines' | 'Thailand' | 'Vietnam'

export type CountryFilter = 'All' | Country

export interface Property {
  id: string
  name: string
  country: Country
  /** New Year's event page for this hostel. Empty string shows COMING SOON. */
  url: string
}

export const COUNTRIES: CountryFilter[] = ['All', 'Cambodia', 'Indonesia', 'Laos', 'Philippines', 'Thailand', 'Vietnam']

/**
 * ── TURNING THE LINKS ON ───────────────────────────────────────────────
 * Every card reads COMING SOON until its hostel has a URL here. On 17 Nov 2026
 * madmonkeyhostels.com had no New Year's event pages yet, so this starts empty.
 * Paste each page against the hostel id as it goes up, e.g.
 *   'siem-reap': 'https://madmonkeyhostels.com/tours-events/...',
 *
 * If the pages follow one slug pattern (Halloween was
 * /tours-events/halloween-party-mad-monkey-<slug>), set EVENT_SLUG and every
 * hostel without an entry in EVENT_PAGES is built from it. Watch the old
 * traps: Uluwatu's slug is "ulu-watu", Siargao has used a different prefix.
 */
const EVENT_PAGES: Partial<Record<string, string>> = {}

/** e.g. 'new-years-eve-party' once the pattern is confirmed. Empty = off. */
const EVENT_SLUG = ''

const RAW: Array<[id: string, name: string, country: Country, slug: string]> = [
  ['koh-rong', 'Koh Rong', 'Cambodia', 'koh-rong'],
  ['koh-sdach', 'Koh Sdach', 'Cambodia', 'koh-sdach'],
  ['phnom-penh', 'Phnom Penh', 'Cambodia', 'phnom-penh'],
  ['siem-reap', 'Siem Reap', 'Cambodia', 'siem-reap'],
  ['kampot', 'Kampot', 'Cambodia', 'kampot'],
  ['gili-t', 'Gili T', 'Indonesia', 'gili-trawangan'],
  ['kuta-lombok', 'Kuta Lombok', 'Indonesia', 'kuta-lombok'],
  ['nusa-lembongan', 'Nusa Lembongan', 'Indonesia', 'nusa-lembongan'],
  ['uluwatu', 'Uluwatu', 'Indonesia', 'ulu-watu'],
  ['luang-prabang', 'Luang Prabang', 'Laos', 'luang-prabang'],
  ['vang-vieng', 'Vang Vieng', 'Laos', 'vang-vieng'],
  ['dumaguete', 'Dumaguete', 'Philippines', 'dumaguete'],
  ['manila', 'Manila', 'Philippines', 'manila'],
  ['nacpan-beach', 'Nacpan Beach', 'Philippines', 'nacpan'],
  ['panglao', 'Panglao', 'Philippines', 'panglao'],
  ['siargao', 'Siargao', 'Philippines', 'siargao'],
  ['siquijor', 'Siquijor', 'Philippines', 'siquijor'],
  ['bangkok', 'Bangkok', 'Thailand', 'bangkok'],
  ['chiang-mai', 'Chiang Mai', 'Thailand', 'chiang-mai'],
  ['pai', 'Pai', 'Thailand', 'pai'],
  ['phuket', 'Phuket', 'Thailand', 'phuket'],
  ['hanoi', 'Hanoi', 'Vietnam', 'hanoi'],
  ['hoi-an', 'Hoi An', 'Vietnam', 'hoi-an'],
]

export const PROPERTIES: Property[] = RAW.map(([id, name, country, slug]) => ({
  id,
  name,
  country,
  url:
    EVENT_PAGES[id] ??
    (EVENT_SLUG ? `https://madmonkeyhostels.com/tours-events/${EVENT_SLUG}-mad-monkey-${slug}` : ''),
}))
