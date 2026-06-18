# Site Structure — Toko Online Hijab (Hara)
**Tanggal:** 2026-06-18

---

## URL Hierarchy

```
/ (Homepage)
│
├── /products/                          # Koleksi semua produk
│   ├── /products?category=instan       # Filter instan
│   ├── /products?category=pashmina     # Filter pashmina
│   ├── /products?category=bergo        # Filter bergo
│   └── /products/[slug]               # Detail produk
│
├── /magazine/                          # Editorial & konten
│   ├── /magazine?category=style        # Filter style
│   ├── /magazine?category=tutorial     # Filter tutorial
│   ├── /magazine?category=trend        # Filter tren
│   ├── /magazine?category=tips         # Filter tips & perawatan
│   └── /magazine/[slug]               # Artikel detail
│
├── /tentang/                           # Tentang Hara (to-do)
├── /kontak/                            # Kontak & order (to-do)
└── /panduan-ukuran/                    # Size guide (to-do — SEO goldmine)
```

---

## Halaman Prioritas untuk SEO

### Tier 1 — Halaman Inti (sudah ada)
| Halaman | Target Keyword Utama | Status |
|---------|---------------------|--------|
| / (Homepage) | "toko hijab minimalis online" | ✅ Ada |
| /products | "beli hijab premium online" | ✅ Ada |
| /products?category=instan | "hijab instan premium" | ⚠️ Filter, perlu halaman dedikasi |
| /products?category=pashmina | "pashmina premium Indonesia" | ⚠️ Filter, perlu halaman dedikasi |
| /products?category=bergo | "bergo hijab berkualitas" | ⚠️ Filter, perlu halaman dedikasi |
| /magazine | "panduan hijab modest fashion" | ✅ Ada |

### Tier 2 — Halaman Tambahan (perlu dibuat)
| Halaman | Target Keyword | Estimasi Traffic |
|---------|---------------|-----------------|
| /koleksi/instan | "hijab instan terbaik 2025" | 8.000/bln |
| /koleksi/pashmina | "pashmina premium murah" | 6.500/bln |
| /koleksi/bergo | "bergo hijab nyaman" | 4.200/bln |
| /panduan-ukuran | "ukuran hijab pashmina" | 3.800/bln |
| /tentang | "brand hijab Indonesia" | Brand traffic |
| /perawatan-hijab | "cara merawat hijab" | 4.500/bln |

### Tier 3 — Konten Long-tail (magazine + landing pages)
| Topik | Keyword Target | Format |
|-------|---------------|--------|
| Capsule wardrobe hijab | "capsule wardrobe hijab minimalis" | Artikel panjang |
| Perbandingan bahan hijab | "bahan hijab terbaik untuk cuaca panas" | Artikel + tabel |
| Panduan warna hijab | "hijab warna apa yang cocok" | Artikel + visual |
| Hijab untuk aktivitas | "hijab olahraga terbaik" | Artikel |
| Tren hijab 2025 | "tren hijab 2025 Indonesia" | Artikel + data |

---

## Internal Linking Strategy

```
Homepage
  └── 6 produk featured → /products/[slug]
  └── 3 kategori → /koleksi/[kategori] (perlu dibuat)
  └── 3 artikel magazine → /magazine/[slug]

/products → /products/[slug] (semua produk)
           → /magazine/[artikel perawatan] (cross-link)

/magazine/[artikel] → /products/[produk relevan] (CTA kontekstual)
                    → /magazine/[artikel terkait] (related)
                    → /koleksi/[kategori] (sidebar)
```

**Prinsip:** Setiap artikel magazine harus punya setidaknya 1 internal link ke halaman produk relevan. Setiap halaman produk link ke artikel perawatan terkait.

---

## Schema per Halaman

| Halaman | Schema |
|---------|--------|
| Homepage | Organization, WebSite, ItemList (produk featured) |
| /products | CollectionPage, ItemList |
| /products/[slug] | Product, BreadcrumbList, Offer |
| /magazine | Blog, ItemList |
| /magazine/[slug] | Article, BreadcrumbList, Author |
| /panduan-ukuran | HowTo |
| /tentang | AboutPage, Organization |

---

## URL Conventions
- Lowercase selalu: `/products/hijab-instan-classic` ✓
- Separator: hyphen (-), bukan underscore
- Tanpa trailing slash di `<link rel="canonical">` — konsisten
- Bahasa Indonesia untuk slug produk & artikel
- Deskriptif, tidak pakai ID: `/products/HJB001` ✗

