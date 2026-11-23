import type { ImageMetadata } from 'astro';

/**
 * Every image placed anywhere under src/assets/images/ is registered here
 * at build time. Data files refer to images by their path inside that folder.
 */
const files = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/images/**/*.{jpg,jpeg,png,webp,avif,gif,JPG,JPEG,PNG,WEBP}',
  { eager: true },
);

export function findImage(src: string | undefined): ImageMetadata | undefined {
  if (!src) return undefined;
  return files['/src/assets/images/' + src.replace(/^\//, '')]?.default;
}

export function imageExists(src: string | undefined): boolean {
  return Boolean(findImage(src));
}
