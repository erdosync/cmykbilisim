export const SITE = {
  name: 'CMYK Bilişim',
  legalName: 'CMYK Bilişim İnşaat Otomotiv Ltd. Şti.',
  tagline: 'Toner, kartuş ve yazıcı sarf malzemeleri',
  phone: '0 (312) 390 80 41',
  phoneHref: 'tel:+903123908041',
  mobile: '0 (533) 614 98 19',
  whatsapp: '905336149819',
  email: 'dursun@cmykbilisim.com.tr',
  emails: ['dursun@cmykbilisim.com.tr', 'aysegul@cmykbilisim.com.tr'],
  address: 'Korkutreis Mah. Sezenler Cad. Güneş Apt. No:1 İç Kapı No:15',
  district: 'Çankaya / Ankara',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Korkutreis+Mah.+Sezenler+Cad.+No%3A1+%C3%87ankaya+Ankara',
};

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${SITE.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
