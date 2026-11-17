# Image prompts: Mad Monkey New Year's Party 2026

The look is taken from the poster set (`MM New Years White Party *.jpg`): a
black and white, high-contrast, grainy cut-out photo (the disco ball) set against
a starry night sky, with neon magenta and cyan light beams and a magenta to
yellow haze.

**The house style, in one line:** grainy black and white flash photography,
heavy film grain, crushed blacks, lit by neon magenta `#EC2A8E` and cyan
`#6EE7E2` beams with a hot yellow `#ECF131` glow, everyone dressed in all white
with neon paint splashes, collage poster energy, zero stock-photo smiles.

Paste each prompt straight into Higgsfield (GPT Image 2), Nano Banana, Midjourney
or similar, at **4:3**. Drop the result into `src/assets/` under the file name
shown and the card swaps from the neon drawing to the photo by itself.

Every card has a label in the top-left corner and a big number in the
bottom-right, so both corners are kept quiet in the prompts.

> **Status (17 Nov 2026):** cards 1, 2 and 3 (pub crawl version) are done and
> live in the repo, centre-cropped from 1536x1024 to 960x720 webp. The boat
> party alternative was not made.

---

## 1. Free Flow card: `src/assets/card-freeflow.webp` (4:3)

> Grainy black and white flash photograph, close up at a crowded hostel bar on
> New Year's Eve in Southeast Asia: a row of raised plastic cups and champagne
> flutes clinking mid-air, drinks spilling and splashing, hands and wrists
> dressed in white sleeves smeared with glowing neon paint. A magenta neon beam
> cuts across from the left and a cyan beam from the right, the only colour in
> the frame, with a hot yellow glow behind the glasses. Heavy film grain, crushed
> blacks, blown-out flash highlights on the liquid, collage poster energy. Keep the
> top-left and bottom-right corners dark and simple. No text, no logos, no brand
> labels on bottles, no watermarks.

## 2. Live DJ card: `src/assets/card-dj.webp` (4:3)

> Grainy black and white flash photograph of a DJ mid-set on New Year's Eve, shot
> from the crowd, one arm up and one hand on the mixer, a mirrored disco ball
> hanging above the booth throwing sparkles. The packed crowd in front is dressed
> all in white, arms in the air, neon paint glowing on their shirts and faces.
> Magenta and cyan neon beams sweep through haze above the crowd, the only colour
> in the frame. Heavy film grain, crushed blacks, smoke, flash falloff into black,
> 90s rave flyer energy. Keep the top-left and bottom-right corners dark and
> simple. No text, no logos, no readable screens, no watermarks.

## 3. Pub Crawl card: `src/assets/card-crawl.webp` (4:3)

> Grainy black and white flash night photograph from behind a crowd of
> backpackers in all white outfits spilling down a busy street between bars on
> New Year's Eve, neon paint splattered across their backs, one person turning
> back to the camera mid-shout, motion blur on the edges. Neon bar signs
> reflected on a wet road in magenta and cyan, the only colour in the frame, with
> fireworks bursting faintly in the sky above. Heavy film grain, crushed blacks,
> disposable camera feel. Keep the top-left and bottom-right corners dark and
> simple. No text, no readable signage, no logos, no watermarks.

### Boat party alternative for card 3 (same file name)

> Grainy black and white flash photograph on the deck of a party boat at night on
> New Year's Eve in Southeast Asia, a crowd dressed all in white dancing at the
> rail, neon paint glowing on their skin and clothes, dark sea and a distant
> island behind. Magenta and cyan neon light strips along the boat, the only
> colour in the frame, with fireworks over the water. Heavy film grain, crushed
> blacks, spray and motion in the air. Keep the top-left and bottom-right corners
> dark and simple. No text, no logos, no watermarks.

---

## Where the files go

| File | Path | Used by |
| --- | --- | --- |
| `card-freeflow.webp` | `src/assets/` | Free Flow card |
| `card-dj.webp` | `src/assets/` | Live DJ card |
| `card-crawl.webp` | `src/assets/` | Pub Crawl or Boat Party card |

PNG or JPG works too if you rename the import in `LineupSection.tsx`, or send the
originals over and they can be converted to webp at 4:3.
