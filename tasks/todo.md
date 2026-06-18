# Todo — SEO Content Quality & AI Citability
**Branch:** `claude/feature/seo-content-quality-ai`

---

## Phase 1 — Data & Type Foundation

- [ ] **T1** · Tambah `FAQ` interface + `faqs?: FAQ[]` ke `src/types/post.ts`
- [ ] **T1** · Update 6 artikel: tambah kalimat "X adalah..." di awal setiap konten
- [ ] **T1** · Rewrite semua H2 di `posts.ts` dari pernyataan → pertanyaan (`?`)
- [ ] **T1** · Tambah `faqs` (≥4 entri) ke artikel `panduan-padu-padan-hijab-monokrom`
- [ ] **T1** · Tambah `faqs` (≥4 entri) ke artikel `tutorial-hijab-pashmina-5-gaya`
- [ ] **T1** · Tambah `faqs` (≥4 entri) ke artikel `cara-merawat-hijab-agar-tahan-lama`
- [ ] **T1** · `npm run build` — 0 TypeScript errors ✓

---

## Phase 2 — Schema & Article Upgrades

- [ ] **T2** · Update `articleSchema` author → `"@type": "Person"` di `magazine/[slug].astro`
- [ ] **T2** · Inject `FAQPage` JSON-LD via head slot jika `post.faqs` ada
- [ ] **T2** · Render FAQ section UI di article page (setelah body, sebelum back link)
- [ ] **T3** · Tambah `ItemList` JSON-LD ke `src/pages/index.astro` (6 featured products)
- [ ] **T2+T3** · `npm run build` — cek HTML article + homepage ✓

---

## Phase 3 — New Pages

- [ ] **T4** · Buat `src/pages/koleksi/instan.astro` (H1, intro, product grid, schema)
- [ ] **T4** · Buat `src/pages/koleksi/pashmina.astro`
- [ ] **T4** · Buat `src/pages/koleksi/bergo.astro`
- [ ] **T5** · Buat `src/pages/panduan-ukuran.astro` (tabel ukuran + HowTo schema)
- [ ] **T6** · Buat `src/pages/tentang.astro` (brand story + AboutPage schema)
- [ ] **T6** · Buat `src/pages/kontak.astro` (WhatsApp CTA + mini FAQ)
- [ ] **T4-6** · `npm run build` — semua halaman baru muncul di `dist/` ✓

---

## Phase 4 — Navigation & Final Wiring

- [ ] **T7** · Update `Header.astro` — "Tentang" href → `url('/tentang')`
- [ ] **T7** · Update `Footer.astro` — tambah quick links ke semua halaman baru
- [ ] **T8** · `npm run build` — 0 errors ✓
- [ ] **T8** · Sitemap `dist/sitemap-0.xml` punya ≥30 URL
- [ ] **T8** · Spot-check JSON-LD: homepage, 1 FAQ article, 1 koleksi page
- [ ] **T8** · Commit semua perubahan ke branch `claude/feature/seo-content-quality-ai`

---

## Done ✓

_(diisi saat task selesai)_
