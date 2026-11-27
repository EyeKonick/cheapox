---
name: CheaPOX Travel and Tours
description: Bold Barkada Pop. Loud yellow and orange fields, navy ink, condensed caps, and paper travel objects that carry the prices.
colors:
  navy: "#14204a"
  navy-2: "#24346b"
  yellow: "#ffc629"
  yellow-soft: "#ffe48a"
  orange: "#f2661a"
  orange-deep: "#a83800"
  sky: "#6cc7f0"
  white: "#ffffff"
  ink-soft: "#3d4770"
  on-navy-soft: "#d9ddef"
typography:
  display:
    fontFamily: "Bricolage Grotesque, Arial Narrow, system-ui, sans-serif"
    fontSize: "clamp(96px, 8.2vw, 132px)"
    fontWeight: 800
    lineHeight: 0.9
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 75, 'opsz' 96"
  display-footer:
    fontFamily: "Bricolage Grotesque, Arial Narrow, system-ui, sans-serif"
    fontSize: "150px"
    fontWeight: 800
    lineHeight: 0.9
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 75, 'opsz' 96"
  headline:
    fontFamily: "Bricolage Grotesque, Arial Narrow, system-ui, sans-serif"
    fontSize: "112px"
    fontWeight: 800
    lineHeight: 0.9
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 75, 'opsz' 96"
  headline-group:
    fontFamily: "Bricolage Grotesque, Arial Narrow, system-ui, sans-serif"
    fontSize: "64px"
    fontWeight: 800
    lineHeight: 0.9
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 75, 'opsz' 96"
  title:
    fontFamily: "Bricolage Grotesque, Arial Narrow, system-ui, sans-serif"
    fontSize: "42px"
    fontWeight: 800
    lineHeight: 0.9
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 75, 'opsz' 96"
  price:
    fontFamily: "Bricolage Grotesque, Arial Narrow, system-ui, sans-serif"
    fontSize: "34px"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 75, 'opsz' 96"
  lead:
    fontFamily: "Bricolage Grotesque, Arial Narrow, system-ui, sans-serif"
    fontSize: "21px"
    fontWeight: 600
    lineHeight: 1.5
  intro:
    fontFamily: "Bricolage Grotesque, Arial Narrow, system-ui, sans-serif"
    fontSize: "19px"
    fontWeight: 600
    lineHeight: 1.55
  body:
    fontFamily: "Bricolage Grotesque, Arial Narrow, system-ui, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.55
    fontVariation: "'wdth' 100"
  body-card:
    fontFamily: "Bricolage Grotesque, Arial Narrow, system-ui, sans-serif"
    fontSize: "16.5px"
    fontWeight: 400
    lineHeight: 1.5
  small:
    fontFamily: "Bricolage Grotesque, Arial Narrow, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 500
    lineHeight: 1.5
  label:
    fontFamily: "Bricolage Grotesque, Arial Narrow, system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 700
    lineHeight: 1.4
rounded:
  media: "18px"
  card: "28px"
  slab: "32px"
  pill: "999px"
spacing:
  gutter: "clamp(40px, 4.4vw, 80px)"
  grid-gap: "28px"
  head-gap: "72px"
  stagger: "72px"
  section-bottom: "120px"
  section-top: "128px"
components:
  button-primary:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.yellow}"
    rounded: "{rounded.pill}"
    padding: "18px 30px"
  button-primary-hover:
    backgroundColor: "{colors.navy-2}"
  button-primary-on-orange:
    backgroundColor: "{colors.yellow}"
    textColor: "{colors.navy}"
    rounded: "{rounded.pill}"
    padding: "18px 30px"
  button-primary-on-orange-hover:
    backgroundColor: "{colors.yellow-soft}"
  button-ghost:
    textColor: "{colors.navy}"
    rounded: "{rounded.pill}"
    padding: "15.5px 28px"
  nav-link:
    textColor: "{colors.navy}"
    rounded: "{rounded.pill}"
    padding: "10px 16px"
  nav-cta:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.yellow}"
    rounded: "{rounded.pill}"
    padding: "10px 16px"
  package-card:
    backgroundColor: "{colors.white}"
    textColor: "{colors.navy}"
    rounded: "{rounded.card}"
    padding: "12px 12px 28px"
  price-sticker:
    backgroundColor: "{colors.yellow}"
    textColor: "{colors.navy}"
    typography: "{typography.price}"
    rounded: "{rounded.pill}"
    size: "132px"
  price-tag:
    backgroundColor: "{colors.orange}"
    textColor: "{colors.navy}"
    width: "256px"
    padding: "46px 20px 26px"
  marquee-band:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.yellow}"
    height: "76px"
  ticket-stub:
    backgroundColor: "{colors.yellow}"
    textColor: "{colors.navy}"
    rounded: "{rounded.slab}"
    padding: "44px 44px 40px"
  info-pill:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.yellow}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "4px 12px"
---

# Design System: CheaPOX Travel and Tours

## Overview

**Creative North Star: "Bold Barkada Pop"**

The site is a promo flyer that learned restraint: whole sections are flooded in one loud colour (golden yellow, price-tag orange, night navy, plain white), and each section carries one physical travel object that does the selling. Prices hang on punched tags, sit on round dashed-ring stickers, ride on boarding passes, and get stamped like passport coins. The energy is barkada (friend-group) loud, but there is only ever one loud idea per field, so "affordable" still reads as trustworthy rather than cluttered.

Type is one family, Bricolage Grotesque, pushed to two extremes: an 800-weight, 75%-width, uppercase display set tight (line-height 0.9) for every headline, price and place name, and the same family at normal width for calm, readable body copy. Objects are slightly tilted, softly shadowed and spring back to rest when touched; nothing is flat-ruled or boxed like a dashboard. Real destination photos (white-framed, rounded) and the untouched logo on a white chip are the only imagery; where a package has no photo, a colour panel with the destination set in display type takes its place on purpose.

Density is generous: 120 to 128px section padding at desktop, big 112px section titles, four-up card grids with every second card dropped by 72px. The rhythm alternates full-bleed colour fields down the page: yellow hero, navy marquee band, orange packages, navy services, white how-to-book, yellow about, navy gallery, white contact, yellow footer and a navy bottom bar.

**Key Characteristics:**
- One colour per full-bleed section, alternating warm fields (yellow, orange) with navy and white.
- Condensed heavy uppercase display (wdth 75, weight 800) for every headline, price and place.
- Prices always live on a physical object: punched tag, round sticker, boarding pass, stamp.
- Objects tilt a few degrees and spring back on hover; reduced motion stops all of it.
- Dashed rules, dashed rings and punched holes are the only line work.
- Soft, colour-tinted drop shadows lift objects off their field; no hard offsets.

## Colors

A saturated tropical-signage palette: two warm fields and one deep navy ink, with sky blue as a rare cool relief.

### Primary
- **Night Ferry Navy** (navy): the ink. All body text on light fields, the primary button fill, the marquee band, Services and Gallery fields, the footer bar, coin units, stamps and info pills.
- **Deck Navy** (navy-2): hover state of every navy pill button and nav CTA. Never a field colour.

### Secondary
- **Fiesta Yellow** (yellow): the brand's loudest field. Hero, About and Footer backgrounds; price stickers; How to Book tags; the contact ticket; yellow text on navy (titles, route stops, button labels).
- **Soft Mango** (yellow-soft): hover tint only (contact channel rows, the yellow button on orange), plus the scrollbar track.

### Tertiary
- **Price-Tag Orange** (orange): the Packages field, the hero price tag, the hero headline highlight block, gallery caption tags, the Services spotlight card, link underlines, arrow icons and the scrollbar thumb.
- **Burnt Ember** (orange-deep): the orange that can be read. Second-line headline words on yellow, step numerals, footer stub labels, package subtitles, menu tagline.
- **Manila Bay Sky** (sky): cool relief only, on the fourth How to Book tag and the sky typographic package panel. Text on it is navy.

### Neutral
- **Clean Paper** (white): How to Book and Contact fields, card bodies, print frames, the logo chip, white display text on orange and navy.
- **Faded Ink** (ink-soft): secondary text on white and yellow (what's-included lines, addresses, channel labels).
- **Mist on Navy** (on-navy-soft): body and intro text on navy fields; footer bar text.

### Named Rules
**The One Field Rule.** Every full-bleed section is a single flat colour from the field set (yellow, orange, navy, white). Adjacent sections never share a field colour; no gradients, no photo backgrounds behind text sections.

**The Large-Only Orange Rule.** White on orange (3.14:1) and orange on white (3.14:1) are display-size only: headline highlights, section titles, the 112px step numeral. Burnt Ember on yellow (4.14:1) is likewise large only. Any body or label text on orange is navy (5.01:1); any small orange-family text on a light field is Burnt Ember on white (6.5:1).

**The Logo Chip Rule.** The logo sits only on a white rounded chip with padding (logo chip, badge chip, stub chip) and is never recoloured, cropped or placed directly on a colour field.

## Typography

**Display Font:** Bricolage Grotesque variable, self-hosted (with Arial Narrow, system-ui)
**Body Font:** Bricolage Grotesque at normal width (same family)

**Character:** One grotesque pushed to two registers: shouting condensed caps for anything a traveller should see from across the room (destinations, prices, section titles), and a warm, slightly quirky normal-width text face for the explaining.

### Hierarchy
- **Display** (800, clamp(96px, 8.2vw, 132px), 0.9): the hero headline only, with one phrase set on an orange highlight block in white.
- **Display Footer** (800, 150px, 0.9): the closing "Tara, let's go?" call; the largest type on the page.
- **Headline** (800, 112px, 0.9): section titles in the shared section head, two lines, the second line coloured (navy on orange, yellow on navy, orange on white, Burnt Ember on yellow).
- **Headline Group** (800, 64px): package group titles, paired with a coin unit (peso or dollar).
- **Title** (800, 42px): package card names; 40 to 52px for service rows, step titles, spotlight, ticket address and badge name.
- **Price** (800, 34px, 0.95): the number on price stickers; 62px on the hero tag.
- **Lead / Intro** (600, 21px / 19px): opening paragraphs and section-head intros beside the title, max 25 to 34em.
- **Body** (400, 18px, 1.55, wdth 100): about and footer copy; 16.5px/1.5 inside cards and boards, max about 30em.
- **Small** (500, 15px): fine print, what's-included lines, footer bar.
- **Label** (700, 13px): text inside pills (tagline pill, departure pill, payment chips).

All display roles share wdth 75, opsz 96, uppercase, letter-spacing -0.02em. Below 1279px section titles step down to 96px, at 900px to 80px, at 560px to 60px; footer display goes 124 / 96 / 72px; group titles 56 / 48 / 40px.

### Named Rules
**The Two Widths Rule.** Display is always 75% width, weight 800, uppercase; body is always 100% width and sentence case. Nothing sits in between except the contact channel values (wdth 80) where long phone numbers and emails must fit.

**The Price Is Display Rule.** A price is always set in display type on its object, preceded by a small "from" and followed by its unit (all-in, per pax). Prices are never set in body weight.

## Layout

Single-column story of full-bleed sections, each padded by the side gutter (clamp(40px, 4.4vw, 80px), 20px at phone) and by section-top / section-bottom (128 / 120px at 1440; 112 / 104 under 1279px; 88 / 88 under 900px; 72 / 72 under 560px). Every body section opens with the shared section head: display title on the left, a 19px semibold intro on the right, aligned to the baseline, then a 72px gap to content (48px under 900px, 40px under 560px, stacked).

Grids: packages run four columns at 1440 (three under 1279px, two under 900px, one under 560px) with a 28px gap, every even card dropped by the stagger (72px, 48px under 900px, removed on phone). The hero is a 46 / 54 split (photo left, yellow copy panel right) that stacks photo-over-panel under 900px with the price tag still overlapping the seam. Services is a 1.45 / 1 split (dashed-rule board beside an orange spotlight); About, Contact and Footer are 1.3 / 1-style splits of copy beside one object, all stacking under 1100px. The gallery is a hand-composed eight-print mosaic at desktop that becomes two columns under 1100px and one under 560px.

Breakpoints are 1279px, 1100px (navigation and two-column splits), 900px (hero stack, section-head stack) and 560px (phone). The 1440 design is the reference; everything below adapts it.

## Elevation & Depth

Depth comes from physical objects resting on flat colour fields. Fields themselves are always flat; only objects (cards, tags, stickers, tickets, prints, badges, chips) cast shadows, and those shadows are soft, large-blur and tinted toward the field they sit on (warm brown on yellow and orange, deep navy-black on navy). There are no hard offset shadows and no borders used for elevation. Inset ring shadows draw the punched holes and route dots.

### Shadow Vocabulary
- **Object lift, warm** (`box-shadow: 0 24px 50px rgba(120,40,0,.25)`): package cards and the all-in note on orange. On yellow the equivalent is `0 30px 60px rgba(120,80,0,.22)` (ticket, stub, badge).
- **Object lift, navy** (`box-shadow: 0 30px 60px rgba(5,10,30,.45)` for the spotlight; `0 24px 50px rgba(0,0,0,.4)` for gallery prints): objects on navy need a darker, denser shadow to read.
- **Sticker lift** (`box-shadow: 0 10px 22px rgba(20,32,74,.25)`): small stuck-on things: price stickers, coin units, flag stickers, caption tags.
- **Floating control** (`box-shadow: 0 10px 30px rgba(10,15,40,.3)`): logo chip and nav controls over a photo.
- **Punched hole** (`box-shadow: inset 0 0 0 4px var(--navy)`): the hole on tags; orange ring for boarding-pass route stops.

### Named Rules
**The Objects Float, Fields Don't Rule.** Shadows belong to things you could pick up. A section, band or bar never carries a shadow.

## Shapes

Rounded, friendly and physical. Cards round at 28px, larger slabs (ticket, stub, spotlight, payments strip) at 32px, photos inside frames at 18px (14px inside gallery prints), and every button, chip and info label is a full pill. Circles are reserved for price stickers, coin units, stamps, channel icons and punched holes.

The recurring silhouettes are travel paper: the **punched tag** (a rectangle with clipped top corners, `polygon(22% 0, 78% 0, 100% 15%, 100% 100%, 0 100%, 0 15%)`, with a ringed hole near the top and a 3px string above it), the **ticket stub** (a slab with two 36px half-circle punches on its sides, cut in the colour of the field behind), and the **dashed ring** (a 2px dashed circle inset 6 to 7px inside every sticker and stamp). Dashed lines (2 to 2.5px, navy or white at 20 to 50% alpha) are the only dividers: card included-lines, group separators, service rows, contact channels, the How to Book string.

Small rotations are part of the shape language: tags at -7deg, stickers +9deg, stamps -12deg, prints between -2.5 and +2.5deg, slabs about +/-1.2 to 1.5deg, pills in a row alternating -2 to +2deg. Tilt is never above 12deg.

## Components

### Buttons
Tactile pills that hop.
- **Shape:** full pill (999px), 18px 30px padding, 18px bold label, trailing 20px arrow icon on primary actions.
- **Primary:** Night Ferry Navy fill with Fiesta Yellow label; on the orange Packages field it inverts to a yellow fill with navy label.
- **Hover / Focus:** lifts 3px on the spring curve (.35s) and darkens to Deck Navy (Soft Mango for the yellow variant). Focus is a 3px navy outline at 3px offset (yellow outline on navy fields).
- **Ghost:** transparent with a 2.5px navy border, navy label; always the secondary of a pair.
- **Phone:** 17px, 16px 24px padding, buttons stretch full width.

### Text links
Quick links and card "Inquire" links are 16px bold navy with a 2px orange underline at 5px offset and a leading or trailing icon; the arrow gap widens on hover.

### Chips / Pills
- **Info pill:** navy with yellow 13px bold text (tagline pill), or white or yellow with navy text (departure pill, all-in list, boarding-pass header). Rows of pills alternate small tilts.
- **Payment chips:** outlined 2.5px yellow on navy, white text.

### Cards / Containers
- **Package card (photo):** white 28px card, 12px inner padding, a 4:5 photo at 18px radius, a yellow price sticker overlapping the photo's lower right, then display title, 16.5px description, dashed included-line in Faded Ink and an Inquire link. Hover lifts 8px and turns -0.6deg; the sticker swings from +9 to -4deg.
- **Package card (typographic panel):** same card, but the photo is a navy (yellow type) or sky (navy type) panel with a dashed inner frame, a white departure pill, the destination set in fitted display type and an optional "Covers" stop list. Used deliberately where no real photo exists.
- **Package card (cruise boarding pass):** spans two columns; a navy pass with a yellow departure pill, a dashed vertical route with orange-ringed stops in 40px display (endpoints white, middle yellow), and a navy stamped coin for the visa note.
- **Slabs:** 32px radius objects that hold a whole section's message (Services spotlight in orange, payments strip in navy, contact ticket in yellow, footer stub in white).

### Navigation
Right-aligned pill links (16px semibold, navy) with a 10% navy hover wash and a navy "Inquire Now" pill CTA. Under 1100px the links collapse into a white "Menu" pill that opens a full-screen yellow menu with 56 to 96px display links (hover to Burnt Ember), an Inquire Now pill and the tagline tilted -3deg; it opens with a circular clip reveal from the top right. Under 900px the CTA and Menu float over the hero photo.

### Price Tag (signature)
The hero's hanging tag: a 256px orange punched tag on a yellow string, destination (18px bold), "all-in from" (15px), a 62px white display price, and the tagline in a navy pill. It settles from -20 to -7deg on load with the spring curve and swings on hover. The same punched-tag shape, in yellow, orange and sky, becomes the four How to Book luggage tags hanging from a dashed string; and the lanyard ID badge in About (white card, slot hole, navy string) is its sibling.

### Price Sticker (signature)
A 132px yellow circle with a dashed inner ring, tilted +9deg: "FROM" in 13px tracked caps, the price in 34px display, the unit in 12.5px. It always overlaps the edge of the image it prices.

### Marquee Band (signature)
A 76px navy band (64px under 900px) directly under the hero, scrolling the tagline and package "from" prices in 40px yellow display caps separated by orange stars, 32s linear, pausing on hover.

### Ticket Stub (signature)
A slab with punched side holes in the field colour: the yellow contact ticket (tilted -1.2deg, address in display type, dashed hours line, directions and Messenger buttons) and the white footer stub (logo chip, name, dashed divider, label/value list with Burnt Ember labels).

### Gallery Print (signature)
White-framed photo print (10px frame, 22px radius, 14px image radius), tilted from the print's own tilt list, straightening and lifting 6px on hover or focus. Each carries an orange display caption tag (24px, tilted -4deg) hanging off its lower left edge that links to the matching package.

### Stamped Coin (signature)
A navy circle (coin unit next to group titles, the visa stamp on the cruise pass) with yellow display text, rotated -8 to -12deg, with a dashed yellow inner ring on the larger stamp.

## Do's and Don'ts

### Do:
- **Do** give each full-bleed section one field colour and keep the alternation (yellow, navy, orange, navy, white, yellow, navy, white, yellow + navy bar).
- **Do** put every price on a physical object (tag, sticker, boarding pass) in 800-weight wdth 75 display, with "from" and its unit.
- **Do** set every headline in uppercase Bricolage Grotesque at weight 800, wdth 75, opsz 96, line-height 0.9, letter-spacing -0.02em, with the second line in the section's accent colour.
- **Do** use dashed lines (2 to 2.5px, low-alpha navy or white) and punched holes as the only line work and dividers.
- **Do** tilt objects a few degrees and let them spring back with `cubic-bezier(.34, 1.56, .64, 1)`; ease non-bouncy reveals with `cubic-bezier(.16, 1, .3, 1)`.
- **Do** switch every animation and transition off under `prefers-reduced-motion: reduce`.
- **Do** use the typographic panel card (navy or sky) when a package has no real photo, rather than a weaker stock image.
- **Do** keep white-on-orange, orange-on-white and Burnt-Ember-on-yellow text at display size only.
- **Do** keep tilted and overhanging objects inside their section (sections clip horizontal overflow; no sideways scroll).

### Don't:
- **Don't** use gradients, glass, or photo backgrounds behind section text; fields are flat colour.
- **Don't** use hard offset (zero-blur) shadows or put shadows on sections and bands; only objects lift.
- **Don't** add a second typeface or a light or regular-width display; the system is one family in two registers.
- **Don't** set small body or label text in orange on any field, or in white on orange.
- **Don't** recolour, crop, stretch or place the logo outside its white chip.
- **Don't** show reviews, ratings, years in business, traveller counts, awards or departure dates in any component.
- **Don't** tilt anything past 12deg or tilt running body text blocks.
- **Don't** use icon fonts or emoji; icons are inline 24px-grid stroke SVGs (2px, 2.2 on arrows) plus the filled star.
