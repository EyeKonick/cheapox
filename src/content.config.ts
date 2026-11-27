// Content collections: every price, label and line of copy on the page comes from src/data/*.json.
// https://docs.astro.build/en/guides/content-collections/
import { defineCollection } from 'astro:content';
import { file } from 'astro/loaders';
import { z } from 'astro/zod';

/** Path of a photo inside src/assets/images, e.g. "packages/hong-kong-peak-sunset.jpg". */
const imagePath = z.string().regex(/^[a-z0-9-]+\/[a-z0-9-]+\.(jpe?g|png|webp|avif)$/i, 'Use "folder/file.jpg" inside src/assets/images');

const photo = z.object({
  src: imagePath,
  alt: z.string().min(8),
  /** CSS object-position, e.g. "70% 50%". */
  position: z.string().optional(),
});

const packages = defineCollection({
  loader: file('src/data/packages.json'),
  schema: z.object({
    order: z.number().int(),
    group: z.enum(['asia', 'longhaul']),
    kind: z.enum(['tour', 'cruise']).default('tour'),
    name: z.string(),
    subtitle: z.string().optional(),
    currency: z.enum(['PHP', 'USD']),
    /** The "from" price exactly as printed on the current flyer, as a plain number. */
    price: z.number().int().positive(),
    duration: z.string().optional(),
    departs: z.string().optional(),
    visa: z.string().optional(),
    stops: z.array(z.string()).optional(),
    blurb: z.string().max(160),
    included: z.string(),
    /** Leave out when there is no real photo: the card renders as a typographic price-tag card. */
    photo: photo.optional(),
  }),
});

const services = defineCollection({
  loader: file('src/data/services.json'),
  schema: z.object({
    order: z.number().int(),
    name: z.string(),
    line: z.string(),
    feature: z.object({ places: z.array(z.string()), points: z.array(z.string()) }).optional(),
  }),
});

const gallery = defineCollection({
  loader: file('src/data/gallery.json'),
  schema: z.object({
    order: z.number().int(),
    place: z.string(),
    /** id of the package this photo links to */
    package: z.string(),
    src: imagePath,
    alt: z.string().min(8),
  }),
});

/** Multi-day guided tours with a day-by-day itinerary, transcribed from the tour flyers. */
const tours = defineCollection({
  loader: file('src/data/tours.json'),
  schema: z.object({
    order: z.number().int(),
    name: z.string(),
    /** id of the matching card in packages.json, when there is one */
    packageId: z.string().optional(),
    duration: z.string(),
    currency: z.enum(['PHP', 'USD']),
    /** "For as low as" price exactly as printed on the flyer */
    price: z.number().int().positive(),
    departs: z.string(),
    countries: z.array(z.string()).min(1),
    note: z.string().optional(),
    photo,
    days: z.array(z.object({
      /** "3", or a range such as "10–11" */
      day: z.string(),
      route: z.array(z.string()).min(1),
      meals: z.string().optional(),
      highlights: z.array(z.string()).min(1),
      optional: z.string().optional(),
    })).min(2),
    included: z.array(z.string()).min(1),
    excluded: z.array(z.string()).min(1),
  }),
});

/** Traveler quotes. `sample: true` marks placeholder copy (not shown on the page) to replace with real reviews before launch. */
const testimonials = defineCollection({
  loader: file('src/data/testimonials.json'),
  schema: z.object({
    order: z.number().int(),
    sample: z.boolean().default(false),
    name: z.string(),
    from: z.string(),
    trip: z.string(),
    group: z.string().optional(),
    quote: z.string().max(240),
  }),
});

const titled = z.object({ titleTop: z.string(), titleBottom: z.string(), intro: z.string() });

const site = defineCollection({
  loader: file('src/data/site.json', { parser: (text) => [{ id: 'site', ...JSON.parse(text) }] }),
  schema: z.object({
    name: z.string(),
    shortName: z.string(),
    tagline: z.literal('Cheap Na, Oks Na Oks Pa!'),
    seo: z.object({ title: z.string().max(70), description: z.string().max(170) }),
    owner: z.object({ name: z.string(), role: z.string() }),
    address: z.object({ line: z.string(), street: z.string(), locality: z.string(), region: z.string(), postalCode: z.string(), country: z.string() }),
    contact: z.object({
      mobile: z.string(),
      mobileE164: z.string().regex(/^\+\d{10,15}$/),
      landline: z.string(),
      landlineE164: z.string().regex(/^\+\d{9,15}$/),
      email: z.email(),
      hours: z.string(),
      facebookUrl: z.string(),
      facebookName: z.string(),
      instagramHandle: z.string(),
      instagramUrl: z.url(),
      mapsUrl: z.string(),
    }),
    hero: z.object({
      packageId: z.string(),
      photo: photo.extend({ caption: z.string() }),
      headlineBefore: z.string(),
      headlineHighlight: z.string(),
      headlineAfter: z.string(),
      sub: z.string(),
    }),
    marquee: z.array(z.string()),
    packagesSection: z.object({
      titleTop: z.string(), titleBottom: z.string(), intro: z.string(),
      asiaTitle: z.string(), asiaUnit: z.string(), asiaNote: z.string(), asiaNoteTitle: z.string(), asiaIncludes: z.array(z.string()),
      panelCoversLabel: z.string(),
      longhaulTitle: z.string(), longhaulUnit: z.string(), longhaulNote: z.string(),
      footCta: z.string(), footNote: z.string(), confirmNote: z.string(),
    }),
    servicesSection: titled,
    howToBook: z.object({
      titleTop: z.string(), titleBottom: z.string(),
      steps: z.array(z.object({ title: z.string(), text: z.string() })).length(4),
      cards: z.array(z.string()),
      cardsLabel: z.string(),
      installmentNote: z.string(),
    }),
    about: z.object({ titleTop: z.string(), titleBottom: z.string(), paragraphs: z.array(z.string()) }),
    gallerySection: titled,
    toursSection: titled.extend({ daysLabel: z.string(), includedLabel: z.string(), excludedLabel: z.string(), cta: z.string() }),
    testimonialsSection: titled,
    contactSection: titled,
    footer: z.object({ titleTop: z.string(), titleBottom: z.string(), lead: z.string(), installments: z.string() }),
  }),
});

export const collections = { packages, services, gallery, tours, testimonials, site };
