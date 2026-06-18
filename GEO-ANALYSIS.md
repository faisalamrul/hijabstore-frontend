# GEO Analysis — Hara Hijab Store
**URL:** https://faisalamrul.github.io/hijabstore-frontend/  
**Date:** 2026-06-18  
**Auditor:** claude-seo:seo-geo

---

## GEO Readiness Score: 44/100

| Dimension | Weight | Score | Notes |
|-----------|--------|-------|-------|
| Citability | 25% | 8/25 | Konten ada, tapi tidak diformat untuk AI extraction |
| Structural Readability | 20% | 13/20 | H2 + paragraf pendek ✓, kurang FAQ & tabel |
| Multi-Modal Content | 15% | 5/15 | Hanya gambar statis, tanpa video/infografis |
| Authority & Brand Signals | 20% | 4/20 | Author generic, nol presence eksternal |
| Technical Accessibility | 20% | 14/20 | Static SSG ✓, llms.txt ✗, lastmod ✗ |

---

## Platform Breakdown

| Platform | Score | Barrier Utama |
|----------|-------|---------------|
| Google AI Overviews | 38/100 | Perlu ranking dulu; konten Indonesian kurang diindex AI |
| Google AI Mode | 35/100 | Freshness sinyal rendah (tidak ada lastmod) |
| ChatGPT | 22/100 | Nol presence Wikipedia/Reddit; bahasa Indonesia niche |
| Perplexity | 28/100 | Nol Reddit mentions; struktur kutipan lemah |
| Bing Copilot | 36/100 | Canonical + sitemap ada, tapi tidak ada IndexNow |

---

## AI Crawler Access Status

**robots.txt saat ini:**
```
User-agent: *
Allow: /
Sitemap: https://faisalamrul.github.io/hijabstore-frontend/sitemap-index.xml
```

**Status:** `User-agent: *` mengizinkan SEMUA crawler termasuk AI. ✓

Namun tidak ada explicit permission per crawler — beberapa sistem AI memprioritaskan situs yang secara eksplisit welcome mereka.

**Crawler yang perlu ditambahkan secara eksplisit:**
```
User-agent: GPTBot
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Googlebot
Allow: /
```

---

## llms.txt Status

**Status: TIDAK ADA** ❌  
`https://faisalamrul.github.io/hijabstore-frontend/llms.txt` → 404

> Catatan: Berdasarkan studi SE Ranking (300k domain) dan pernyataan Google's John Mueller, llms.txt saat ini bukan lever citation langsung untuk AI search major. Namun ini adalah signal aksesibilitas yang baik dan low-effort.

**Template siap pakai untuk Hara:**
```
# Hara
> Brand hijab premium Indonesia. Koleksi Instan, Pashmina, dan Bergo dengan filosofi Modest. Minimal. Timeless.

## Koleksi Produk
- [Semua Produk](/hijabstore-frontend/products): Koleksi hijab Instan, Pashmina, dan Bergo
- [Hijab Instan](/hijabstore-frontend/products?category=instan): Praktis untuk penggunaan sehari-hari
- [Pashmina](/hijabstore-frontend/products?category=pashmina): Elegan untuk semua momen
- [Bergo](/hijabstore-frontend/products?category=bergo): Nyaman dan kasual

## Magazine
- [Style Guide](/hijabstore-frontend/magazine/panduan-padu-padan-hijab-monokrom): Panduan padu padan monokrom
- [Tutorial](/hijabstore-frontend/magazine/tutorial-hijab-pashmina-5-gaya): 5 gaya pashmina
- [Perawatan](/hijabstore-frontend/magazine/cara-merawat-hijab-agar-tahan-lama): Cara merawat hijab

## Tentang Hara
- Brand hijab premium Indonesia
- Kategori: Instan, Pashmina, Bergo
- Filosofi: Modest. Minimal. Timeless.
```

---

## Brand Mention Analysis

| Platform | Status | Impact |
|----------|--------|--------|
| Wikipedia | ❌ Tidak ada | Tinggi — ChatGPT cite Wikipedia 47.9% |
| Reddit | ❌ Tidak ada | Tinggi — Perplexity cite Reddit 46.7% |
| YouTube | ❌ Tidak ada | Sangat tinggi — korelasi AI visibility 0.737 |
| LinkedIn | ❌ Tidak ada | Sedang |
| Instagram | Tidak terverifikasi | Sedang untuk brand fashion |

> Ini demo store, sehingga tidak ada real brand presence. Untuk situs production, brand mention adalah multiplier terbesar untuk AI visibility.

---

## Passage-Level Citability

**Target optimal: 134–167 kata per block yang bisa berdiri sendiri**

### Homepage — `Tentang Hara` section
```
"Kami percaya bahwa keindahan sejati hadir dari kesederhanaan. Setiap produk 
Hara dirancang dengan bahan terbaik, untuk wanita yang menghargai kualitas 
dan ketenangan dalam berpakaian."
```
**Word count: ~35 kata** ❌ Terlalu pendek, tidak bisa dikutip AI.

### Magazine Article — Intro
Artikel dimulai langsung dengan opini tanpa definisi:
> *"Monokrom bukan berarti membosankan..."*

❌ Tidak ada pola "X adalah..." / "X refers to..." yang diutamakan AI.

### Struktur artikel saat ini:
- ✓ H2 subheadings tiap seksi
- ✓ Paragraf 2-4 kalimat
- ✗ Tidak ada FAQ section
- ✗ Tidak ada tabel komparatif (misal: perbandingan bahan)
- ✗ Tidak ada statistik dengan sumber
- ✗ Heading berbasis pernyataan, bukan pertanyaan

### Contoh rewrite intro yang AI-citable (untuk artikel monokrom):
```
Hijab monokrom adalah gaya berpakaian yang menggunakan satu warna atau 
palet warna netral (hitam, putih, abu-abu, krem) dalam satu penampilan. 
Berbeda dengan anggapan umum, tampilan monokrom justru menonjolkan tekstur 
dan proporsi pakaian secara lebih efektif dibanding kombinasi warna mencolok. 
Di Indonesia, tren ini semakin populer sejak 2023 sebagai bagian dari gerakan 
modest fashion minimalis yang mendominasi pasar Asia Tenggara.
```
**Word count: ~72 kata** — lebih baik, tapi masih perlu diperluas ke 134-167.

---

## Server-Side Rendering Check

**Status: ✅ LULUS**

Site dibangun dengan **Astro 6 (SSG — Static Site Generation)**. Seluruh konten di-render saat build time menjadi HTML statis. AI crawler (yang tidak mengeksekusi JavaScript) dapat membaca **100% konten** tanpa hambatan.

```
Build output: dist/ (static HTML)
JavaScript: hanya untuk interaksi (carousel, filter) — bukan untuk konten
Content rendering: server-side (build time)
```

---

## Sitemap Analysis

**Status:** ✅ Ada | ⚠️ Tidak ada `lastmod`

```xml
<!-- Saat ini (semua URL tanpa lastmod) -->
<url>
  <loc>https://faisalamrul.github.io/hijabstore-frontend/magazine/...</loc>
  <!-- tidak ada <lastmod> -->
</url>
```

Tanpa `lastmod`, Google AI Mode tidak tahu kapan konten terakhir diupdate. Konten yang tidak punya sinyal freshness diprioritaskan lebih rendah oleh AI Mode.

---

## Top 5 Perubahan Tertinggi Dampaknya

### 1. 🔴 Tambah `lastmod` ke sitemap (Impact: Tinggi)
Aktifkan di `astro.config.mjs`:
```js
sitemap({
  lastmod: new Date(),
  changefreq: 'weekly',
  priority: 0.8,
})
```
Ini memberi sinyal freshness ke Google AI Mode.

### 2. 🔴 Buat `/llms.txt` (Impact: Sedang-Tinggi)
File statis di `public/llms.txt`. Template sudah disediakan di atas.

### 3. 🟠 Restrukturisasi intro artikel magazine (Impact: Tinggi)
- Tambah definisi "X adalah..." di paragraf pertama
- Blok 134-167 kata yang self-contained
- Ubah H2 dari pernyataan → pertanyaan:
  - "Mulai dari Fondasi" → "Bagaimana Memulai Tampilan Monokrom?"
  - "Permainkan Tekstur" → "Kenapa Tekstur Penting dalam Monokrom?"

### 4. 🟠 Explicit AI crawler rules di robots.txt (Impact: Sedang)
Tambahkan GPTBot, ClaudeBot, PerplexityBot secara eksplisit.

### 5. 🟡 Tambah Person/Author schema di artikel (Impact: Sedang)
Ganti `"@type": "Organization"` untuk author menjadi:
```json
"author": {
  "@type": "Person",
  "name": "Tim Editorial Hara",
  "jobTitle": "Fashion Editor",
  "worksFor": { "@type": "Organization", "name": "Hara" }
}
```

---

## Schema Recommendations

| Schema | Status | Prioritas |
|--------|--------|-----------|
| Organization | ✅ Ada (baru ditambahkan) | — |
| Product | ✅ Ada di halaman produk | — |
| Article | ✅ Ada di magazine detail | — |
| BreadcrumbList | ✅ Ada di produk & magazine | — |
| FAQPage | ❌ Tidak ada | Tinggi |
| Person (author) | ❌ Tidak ada | Sedang |
| ItemList (produk di homepage) | ❌ Tidak ada | Sedang |

---

## Kesimpulan

Hara saat ini memiliki **fondasi teknis yang solid** untuk GEO (SSG, JSON-LD baru, canonical, sitemap, robots.txt). Hambatan utama bukan teknis — melainkan:

1. **Konten belum diformat untuk AI extraction** (kurang definisi, FAQ, tabel)
2. **Brand presence nol di platform yang AI cite** (Wikipedia, Reddit, YouTube)
3. **Bahasa Indonesia** — corpus AI lebih kecil dibanding English, AI kurang familiar

Untuk demo portfolio, score 44/100 sudah baik. Untuk production real, fokus pada konten citability dan brand mention building.
