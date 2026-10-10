export type Category = {
  slug: string;
  name: string;
  summary: string;
  icon: 'printer' | 'toner' | 'ink' | 'copier' | 'ribbon' | 'drum' | 'fuser';
  subcategories?: { slug: string; name: string }[];
};

export const CATEGORIES: Category[] = [
  {
    slug: 'toner',
    name: 'Toner',
    summary: 'Lazer yazıcılar için orijinal ve muadil tonerler.',
    icon: 'toner',
    subcategories: [
      { slug: 'orijinal-toner', name: 'Orijinal toner' },
      { slug: 'muadil-toner', name: 'Muadil toner' },
    ],
  },
  {
    slug: 'kartus',
    name: 'Kartuş',
    summary: 'Mürekkep püskürtmeli yazıcılar için siyah ve renkli kartuşlar.',
    icon: 'ink',
  },
  {
    slug: 'fotokopi-tonerleri',
    name: 'Fotokopi tonerleri',
    summary: 'Ofis tipi fotokopi ve çok fonksiyonlu cihazlar için tonerler.',
    icon: 'copier',
  },
  {
    slug: 'drum',
    name: 'Drum',
    summary: 'Görüntüleme üniteleri ve drum kitleri.',
    icon: 'drum',
  },
  {
    slug: 'fuser',
    name: 'Fuser',
    summary: 'Isıtıcı üniteler ve fuser kitleri.',
    icon: 'fuser',
  },
  {
    slug: 'serit',
    name: 'Şerit',
    summary: 'Nokta vuruşlu yazıcılar ve yazar kasalar için şeritler.',
    icon: 'ribbon',
  },
  {
    slug: 'yazicilar',
    name: 'Yazıcılar',
    summary: 'Lazer, mürekkep püskürtmeli, nokta vuruşlu ve barkod yazıcılar.',
    icon: 'printer',
    subcategories: [
      { slug: 'lazer-yazicilar', name: 'Lazer yazıcılar' },
      { slug: 'murekkep-puskurtmeli-yazicilar', name: 'Mürekkep püskürtmeli yazıcılar' },
      { slug: 'nokta-vuruslu-yazicilar', name: 'Nokta vuruşlu yazıcılar' },
      { slug: 'barkod-yazicilar', name: 'Barkod yazıcılar' },
    ],
  },
];

export const categoryBySlug = (slug: string) => CATEGORIES.find((c) => c.slug === slug);
