import { getCollection, getEntry, type CollectionEntry } from 'astro:content';

export type Package = CollectionEntry<'packages'>;

export async function getSite() {
  const entry = await getEntry('site', 'site');
  if (!entry) throw new Error('src/data/site.json could not be loaded: it is missing or does not match the schema in src/content.config.ts. Run `npx astro dev logs` to see which field is wrong.');
  return entry.data;
}

export async function getPackages() {
  return (await getCollection('packages')).sort((a, b) => a.data.order - b.data.order);
}

export async function getPackage(id: string) {
  const p = await getEntry('packages', id);
  if (!p) throw new Error(`Package "${id}" referenced in site.json does not exist in packages.json`);
  return p;
}

const peso = new Intl.NumberFormat('en-PH', { maximumFractionDigits: 0 });

/** "₱19,999" or "$1,388", exactly as printed on the flyers. */
export function formatPrice(currency: 'PHP' | 'USD', price: number) {
  return (currency === 'PHP' ? '₱' : '$') + peso.format(price);
}

/** Small line under the price: Asia trips are all-in, long-haul prices are per pax. */
export function priceUnit(p: Package['data']) {
  return p.currency === 'PHP' ? 'all-in' : 'per pax';
}
