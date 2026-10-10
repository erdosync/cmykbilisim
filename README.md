# CMYK Bilişim

Toner, kartuş ve yazıcı sarf malzemeleri için firma ve katalog sitesi. [Astro](https://astro.build) ile statik olarak üretilir; veritabanı ve sunucu tarafı kod yoktur. `main` dalına yapılan her push Hostinger'da otomatik yayınlanır.

```bash
npm install
npm run dev      # geliştirme sunucusu
npm run build    # dist/ klasörüne üretim çıktısı
npm run preview  # üretim çıktısını yerelde önizleme
```

## İçerik nerede?

| Ne | Dosya |
|---|---|
| Ürünler | `src/data/products.json` |
| Markalar | `src/data/brands.ts` (logolar: `public/brands/<slug>.svg`) |
| Ürün grupları | `src/data/categories.ts` |
| Telefon, adres, e-posta, WhatsApp | `src/data/site.ts` |

## Ürün eklemek

`src/data/products.json` dizisine yeni bir kayıt ekleyin:

```json
{
  "slug": "brother-tn-1040-orijinal-toner",
  "name": "Brother TN-1040 Orijinal Toner",
  "brand": "brother",
  "category": "toner",
  "subcategory": "orijinal-toner",
  "code": "TN-1040",
  "type": "orijinal",
  "color": "siyah",
  "capacity": "1.000 sayfa",
  "compatible": [{ "series": "HL", "models": ["HL-1111", "HL-1211W"] }],
  "specs": {},
  "description": "Kısa açıklama.",
  "featured": false
}
```

- `slug`: adresde kullanılır, küçük harf ve Türkçe karaktersiz (`/urun/<slug>`).
- `brand`: `brands.ts` içindeki slug.
- `category`: `toner`, `kartus`, `fotokopi-tonerleri`, `drum`, `fuser`, `serit`, `yazicilar`.
- `type`: `orijinal`, `muadil` ya da `null`.
- `color`: `siyah`, `cyan`, `magenta`, `sari`, `renkli`, `uc-renk` ya da `null`.
- `compatible`: yazıcı modellerinde marka adını tekrar etmeyin; arama bu listeyi kullanır.
- `featured: true` olan ürünler ana sayfada görünür.

Ürün sayfası, kategori/marka listeleri, arama dizini (`/arama.json`) ve site haritası derleme sırasında otomatik oluşur.
