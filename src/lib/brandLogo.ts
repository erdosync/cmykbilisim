import { existsSync } from 'node:fs';
import { join } from 'node:path';

/** public/brands/<slug>.svg varsa yolunu döner (derleme anında kontrol edilir) */
export function brandLogo(slug: string): string | null {
  return existsSync(join(process.cwd(), 'public', 'brands', `${slug}.svg`)) ? `/brands/${slug}.svg` : null;
}

/** public/urunler/<slug>.webp varsa yolunu döner */
export function productPhoto(slug: string): string | null {
  return existsSync(join(process.cwd(), 'public', 'urunler', `${slug}.webp`)) ? `/urunler/${slug}.webp` : null;
}
