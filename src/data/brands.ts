export type Brand = { slug: string; name: string; about: string };

// Logolar public/brands/<slug>.svg altında
export const BRANDS: Brand[] = [
  { slug: 'hp', name: 'HP', about: 'LaserJet ve DeskJet serileriyle ofis yazıcılarının en yaygın markası.' },
  { slug: 'canon', name: 'Canon', about: 'i-SENSYS lazer ve PIXMA mürekkep püskürtmeli yazıcıların üreticisi.' },
  { slug: 'brother', name: 'Brother', about: 'Küçük ve orta ölçekli ofisler için kompakt lazer ve çok fonksiyonlu yazıcılar.' },
  { slug: 'epson', name: 'Epson', about: 'Mürekkep tanklı yazıcılar, nokta vuruşlu yazıcılar ve şeritler.' },
  { slug: 'lexmark', name: 'Lexmark', about: 'Kurumsal lazer yazıcılar ve yüksek kapasiteli tonerler.' },
  { slug: 'samsung', name: 'Samsung', about: 'Xpress ve ProXpress serisi lazer yazıcılar.' },
  { slug: 'xerox', name: 'Xerox', about: 'Fotokopi makineleri, çok fonksiyonlu cihazlar ve yazıcılar.' },
  { slug: 'kyocera', name: 'Kyocera', about: 'Uzun ömürlü ECOSYS lazer yazıcılar ve fotokopi cihazları.' },
  { slug: 'konica-minolta', name: 'Konica Minolta', about: 'bizhub serisi ofis fotokopi ve çok fonksiyonlu cihazlar.' },
  { slug: 'ricoh', name: 'Ricoh', about: 'Ofis tipi çok fonksiyonlu cihazlar ve fotokopi makineleri.' },
  { slug: 'oki', name: 'OKI', about: 'LED teknolojili renkli yazıcılar ve nokta vuruşlu yazıcılar.' },
  { slug: 'utax', name: 'Utax', about: 'Kyocera altyapılı ofis yazıcıları ve fotokopi cihazları.' },
  { slug: 'panasonic', name: 'Panasonic', about: 'Faks cihazları ve kompakt lazer yazıcılar.' },
  { slug: 'develop', name: 'Develop', about: 'Konica Minolta altyapılı ofis fotokopi ve çok fonksiyonlu cihazlar.' },
  { slug: 'gestetner', name: 'Gestetner', about: 'Ricoh altyapılı ofis fotokopi makineleri.' },
  { slug: 'riso', name: 'Riso', about: 'Yüksek hacimli baskı için risograph ve inkjet baskı makineleri.' },
  { slug: 'printronix', name: 'Printronix', about: 'Endüstriyel satır yazıcıları ve barkod yazıcıları.' },
  { slug: 'siemens', name: 'Siemens', about: 'Endüstriyel ve ofis ekipmanları.' },
  { slug: 'zebra', name: 'Zebra', about: 'Barkod ve etiket yazıcılarının dünya lideri.' },
  { slug: 'argox', name: 'Argox', about: 'Ekonomik masaüstü barkod ve etiket yazıcıları.' },
  { slug: 'brady', name: 'Brady', about: 'Endüstriyel etiket yazıcıları ve etiket malzemeleri.' },
  { slug: 'fargo', name: 'Fargo', about: 'Kimlik ve kart yazıcıları.' },
  { slug: 'evolis', name: 'Evolis', about: 'Plastik kart ve kimlik kartı yazıcıları.' },
  { slug: 'entrust', name: 'Entrust', about: 'Kart basım sistemleri ve kart yazıcıları.' },
];

export const brandBySlug = (slug: string) => BRANDS.find((b) => b.slug === slug);
