# Implementation Roadmap — SEO Toko Online Hijab
**Tanggal:** 2026-06-18  
**Horizon:** 12 bulan

---

## Status Saat Ini (Hara — Juni 2026)
✅ SSG static site (Astro) — crawler-friendly  
✅ meta description semua halaman  
✅ OG tags + Twitter Card  
✅ JSON-LD: Organization, Product, Article, BreadcrumbList  
✅ sitemap.xml dengan lastmod  
✅ robots.txt + explicit AI crawler rules  
✅ llms.txt  
✅ canonical URL  
❌ Halaman kategori dedikasi (instan/pashmina/bergo)  
❌ FAQ section di artikel  
❌ FAQ schema  
❌ Panduan ukuran / size guide  
❌ Halaman Tentang + Kontak  
❌ Author schema (Person)  
❌ ItemList schema di homepage  

---

## Phase 1 — Foundation (Minggu 1–4)

### Minggu 1–2: Teknis
- [ ] Tambah FAQ section + FAQPage schema di 3 artikel paling ramai
- [ ] Tambah ItemList schema di homepage (6 featured products)
- [ ] Ganti author schema dari Organization → Person di artikel magazine
- [ ] Ubah H2 artikel magazine dari pernyataan → pertanyaan
- [ ] Tambah definisi "X adalah..." di intro semua artikel (AI citability)

### Minggu 3–4: Halaman Baru
- [ ] Buat `/tentang` — cerita brand, filosofi, tim
- [ ] Buat `/panduan-ukuran` — tabel dimensi per kategori hijab (HowTo schema)
- [ ] Buat halaman kategori dedikasi: `/koleksi/instan`, `/koleksi/pashmina`, `/koleksi/bergo`
- [ ] Setup Google Search Console — submit sitemap, monitoring indexing
- [ ] Setup Google Analytics 4

**KPI Check Phase 1:** Semua halaman terindex di GSC, 0 errors crawl

---

## Phase 2 — Content Expansion (Bulan 2–3)

### Bulan 2: Konten Tutorial (Volume Tertinggi)
- [ ] "Cara Pakai Pashmina 8 Gaya" — target 18.000/bln
- [ ] "Cara Merawat Hijab per Bahan" — update artikel existing + tabel
- [ ] "Panduan Memilih Bahan Hijab Cuaca Panas" — target 3.200/bln
- [ ] Submit artikel baru ke GSC untuk fast indexing

### Bulan 3: Konten Style + Seasonal
- [ ] "7 Outfit Hijab Minimalis untuk Kerja" — target 5.800/bln
- [ ] "Modest Fashion untuk Kondangan" — target 12.000/bln
- [ ] Internal linking audit — pastikan setiap artikel → minimal 1 produk
- [ ] Optimasi image alt text semua halaman produk

**KPI Check Phase 2:**
- 8–12 keyword mulai muncul di GSC (posisi 20–50)
- 5+ halaman terindex sempurna
- Average CTR homepage > 2%

---

## Phase 3 — Authority Building (Bulan 4–6)

### Bulan 4: Link Building Awal
- [ ] Submit ke direktori fashion Indonesia (femina.co.id, wolipop.detik.com)
- [ ] Guest post di blog modest fashion: pitch 5 media
- [ ] Mulai presence di Pinterest (image SEO — fashion sangat visual)
- [ ] Tambah "Hara" ke situs review: Google Business Profile

### Bulan 5: Content Depth
- [ ] "Review Jujur: Bahan Hijab Mahal vs Murah" — data-driven, citeable
- [ ] "10 Brand Hijab Lokal Premium" — list article, backlink magnet
- [ ] Tabel perbandingan: semua kategori hijab Hara dengan spec lengkap
- [ ] Mulai email newsletter — sinyal engagement ke Google

### Bulan 6: Technical Advanced
- [ ] Core Web Vitals audit — target LCP < 2.5s
- [ ] Optimize Unsplash images → WebP format untuk produk
- [ ] Tambah `dateModified` ke semua artikel yang diupdate
- [ ] Review + update artikel lama (freshness signal)

**KPI Check Phase 3:**
- 3–5 keyword di posisi 10–20
- Minimal 10 referring domain
- Organic traffic: 500+ visitors/bulan

---

## Phase 4 — Scale & Monetize (Bulan 7–12)

### Bulan 7–9: Expansion
- [ ] Launch YouTube channel: tutorial hijab (embed di artikel)
- [ ] Programmatic SEO: halaman per kombinasi warna × kategori
- [ ] Ekspansi keyword lokal: "hijab [kota]" (Jakarta, Bandung, Surabaya)
- [ ] Partnership dengan content creator modest fashion Indonesia

### Bulan 10–12: Dominasi Niche
- [ ] Original research: "Survey Kebiasaan Berkerudung Wanita Indonesia 2026"
- [ ] Annual "Tren Hijab [Tahun]" sebagai konten signature tahunan
- [ ] Halaman kolaborasi / limited edition (link bait)
- [ ] Evaluate: Tokopedia/Shopee presence vs direct checkout

**KPI Check Phase 4:**
- 10+ keyword di halaman 1 Google
- Organic traffic: 3.000–5.000 visitors/bulan
- Domain Authority: 20+ (dari 0)

---

## KPI Targets

| Metric | Baseline (Jun 2026) | 3 Bulan | 6 Bulan | 12 Bulan |
|--------|--------------------|---------|---------|-|
| Organic Traffic | ~0 | 200/bln | 800/bln | 4.000/bln |
| Keyword Rank Top 10 | 0 | 0–2 | 3–5 | 10–15 |
| Indexed Pages | 25 | 30 | 40 | 60+ |
| Referring Domains | 0 | 2 | 10 | 30+ |
| Core Web Vitals LCP | TBD | < 3s | < 2.5s | < 2s |
| GSC Impressions | 0 | 5.000 | 25.000 | 150.000 |

---

## Resource Requirements

| Kebutuhan | Estimasi | Prioritas |
|-----------|----------|-----------|
| Konten writer (BHS Indonesia, fashion background) | 2–4 artikel/bulan | Tinggi |
| Fotografer produk (lifestyle shot) | 1x/kuartal | Sedang |
| Graphic designer (infografis artikel) | On-demand | Sedang |
| Link building outreach | 5 jam/bulan | Sedang |

---

## Risk Mitigation

| Risiko | Mitigasi |
|--------|----------|
| Google algorithm update | Fokus E-E-A-T, hindari taktik shortcut |
| Kompetitor copy konten | Tambah unique data + author credibility |
| Traffic tergantung 1 keyword | Diversifikasi ke 20+ keyword clusters |
| Slow indexing (new domain) | GSC submit manual + IndexNow |

