import { BRANDS, brandBySlug } from '../data/brands';
import { CATEGORIES, categoryBySlug } from '../data/categories';
import products from '../data/products.json';

export type Product = {
  slug: string;
  name: string;
  brand: string;
  category: string;
  subcategory: string | null;
  code: string;
  type: 'orijinal' | 'muadil' | null;
  color: string | null;
  capacity: string | null;
  compatible: { series: string; models: string[] }[];
  specs: Record<string, string>;
  description: string;
  featured?: boolean;
};

// Katalog: src/data/products.json (kaynak ve notlar için README-veri.md)
export const PRODUCTS: Product[] = [...(products as Product[])].sort((a, b) => a.name.localeCompare(b.name, 'tr'));

export const COLORS: Record<string, { name: string; swatch: string }> = {
  siyah: { name: 'Siyah', swatch: '#1A1A1A' },
  cyan: { name: 'Mavi (cyan)', swatch: '#00AEEF' },
  magenta: { name: 'Kırmızı (magenta)', swatch: '#EC008C' },
  sari: { name: 'Sarı', swatch: '#FFD200' },
  renkli: { name: 'Renkli', swatch: 'conic-gradient(#00AEEF 0 33%, #EC008C 0 66%, #FFD200 0)' },
  'uc-renk': { name: 'Üç renk', swatch: 'conic-gradient(#00AEEF 0 33%, #EC008C 0 66%, #FFD200 0)' },
};

export const TYPES = { orijinal: 'Orijinal', muadil: 'Muadil' } as const;

export const productBySlug = (slug: string) => PRODUCTS.find((p) => p.slug === slug);
export const productsInCategory = (slug: string) => PRODUCTS.filter((p) => p.category === slug);
export const productsOfBrand = (slug: string) => PRODUCTS.filter((p) => p.brand === slug);
export const modelCount = (p: Product) => p.compatible.reduce((n, s) => n + s.models.length, 0);

export const brandName = (slug: string) => brandBySlug(slug)?.name ?? slug.toUpperCase();
export const categoryName = (slug: string) => categoryBySlug(slug)?.name ?? slug;

/** Tüm markalar ürün sayılarıyla; ürünü olanlar önce */
export const brandsWithCounts = () =>
  BRANDS.map((b) => ({ ...b, count: productsOfBrand(b.slug).length })).sort(
    (a, b) => b.count - a.count,
  );

/** Tüm kategoriler ürün sayısı ve ürünü olan markalarla */
export const categoriesWithCounts = () =>
  CATEGORIES.map((c) => ({
    ...c,
    count: productsInCategory(c.slug).length,
    brands: [...new Set(productsInCategory(c.slug).map((p) => p.brand))],
  }));

export function relatedProducts(p: Product, limit = 4) {
  const score = (o: Product) =>
    (o.brand === p.brand ? 2 : 0) + (o.category === p.category ? 1 : 0);
  return PRODUCTS.filter((o) => o.slug !== p.slug && score(o) > 0)
    .sort((a, b) => score(b) - score(a))
    .slice(0, limit);
}

/** İstemci tarafı arama dizini (küçük tutulur) */
export function searchIndex() {
  return PRODUCTS.map((p) => ({
    s: p.slug,
    n: p.name,
    b: brandName(p.brand),
    c: p.code,
    k: categoryName(p.category),
    m: p.compatible.flatMap((g) => g.models),
  }));
}
