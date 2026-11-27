import type { ImageMetadata } from 'astro';

// Every photo under src/assets/images, keyed by its path relative to that folder ("packages/x.jpg").
const files = import.meta.glob<{ default: ImageMetadata }>('/src/assets/images/**/*.{jpg,jpeg,png,webp,avif}', { eager: true });

const byPath = new Map(Object.entries(files).map(([key, mod]) => [key.replace('/src/assets/images/', ''), mod.default]));

/** Resolve a data-file photo path to an optimizable image. Fails the build if the file is missing. */
export function photo(path: string): ImageMetadata {
  const img = byPath.get(path);
  if (!img) throw new Error(`Photo "${path}" not found in src/assets/images. Check the path in src/data/*.json.`);
  return img;
}
