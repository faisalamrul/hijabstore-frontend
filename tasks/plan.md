# Implementation Plan — SEO Content Quality & AI Citability
**Spec:** `_specs/seo-content-quality-ai.md`  
**Branch:** `claude/feature/seo-content-quality-ai`

---

## Dependency Graph

```
Task 1: Post type + data (FAQ, H2, definitions)
    └── Task 2: magazine/[slug].astro (FAQ UI + FAQPage schema + Person author)
            └── depends on Task 1 (faqs field on Post)

Task 3: ItemList schema di homepage
    └── independent — only touches index.astro

Task 4: Halaman kategori /koleksi/*
    └── independent — imports products.ts + ProductCard (already exist)

Task 5: /panduan-ukuran
    └── independent — new page, no dependencies

Task 6: /tentang + /kontak
    └── independent — new pages

Task 7: Header + Footer nav update
    └── depends on Task 6 (/tentang must exist before linking)

Task 8: Final build + sitemap verify
    └── depends on all tasks
```

---

## Phase 1 — Data & Type Foundation

### Task 1 · Post Type + Content Update
**Files:** `src/types/post.ts`, `src/data/posts.ts`  
**Why first:** Tasks 2 depends on `faqs` field being on the Post type.

**Steps:**
1. Add `FAQ` interface and `faqs?: FAQ[]` to `src/types/post.ts`
2. Update all 6 article bodies — prepend "X adalah..." definition sentence to first paragraph
3. Rewrite all H2 headings in content strings from statement → question
4. Add `faqs` array (≥4 items) to the top 3 articles:
   - `panduan-padu-padan-hijab-monokrom`
   - `tutorial-hijab-pashmina-5-gaya`
   - `cara-merawat-hijab-agar-tahan-lama`

**Acceptance:**
- TypeScript compiles — no `tsc` errors on `post.ts` / `posts.ts`
- Each FAQ entry has non-empty `question` and `answer`
- Definition sentence starts each article body (matches `/^[A-Z].+ adalah .+/`)
- H2 lines in content strings end with `?`

**Verify:** `npm run build` — no TypeScript errors

---

## Phase 1 Checkpoint ✓
> Before continuing: confirm `npm run build` passes and `posts.ts` compiles cleanly.

---

## Phase 2 — Schema & Article Upgrades (parallel-safe)

### Task 2 · Magazine Article — FAQ UI + FAQPage Schema + Person Author
**Files:** `src/pages/magazine/[slug].astro`  
**Depends on:** Task 1 (faqs field)

**Steps:**
1. Update `articleSchema` — change author from `Organization` to `Person`:
   ```
   "author": { "@type": "Person", "name": "Tim Editorial Hara",
     "jobTitle": "Fashion Editor",
     "worksFor": { "@type": "Organization", "name": "Hara" } }
   ```
2. When `post.faqs` exists: inject `FAQPage` JSON-LD via `<Fragment slot="head">`
3. Add FAQ section UI after `<div class="prose-hara">` body, before back link:
   - Eyebrow "FAQ" label
   - H2 "Pertanyaan yang Sering Ditanyakan"
   - Static list of Q&A pairs (always visible)
   - Style consistent with `prose-hara` (neutral tones, thin borders)

**Acceptance:**
- `/magazine/tutorial-hijab-pashmina-5-gaya` renders FAQ section visually
- `<script type="application/ld+json">` contains `"@type": "FAQPage"` on those 3 articles
- All article pages have `"@type": "Person"` in Article schema (not `"Organization"`)

**Verify:** `npm run build` — inspect generated HTML of one FAQ article

---

### Task 3 · ItemList Schema on Homepage
**Files:** `src/pages/index.astro`  
**Independent** — can be done in parallel with Task 2

**Steps:**
1. Build `itemListSchema` from the `featured` array (6 products):
   ```json
   { "@type": "ItemList", "name": "Koleksi Hijab Premium Hara",
     "itemListElement": [ { "@type": "ListItem", "position": 1,
       "name": "...", "url": "...", "image": "..." }, ... ] }
   ```
2. Inject via `<Fragment slot="head">` in `<BaseLayout>`

**Acceptance:**
- Homepage `<head>` contains `"@type": "ItemList"` with 6 `ListItem` entries
- Each entry has `name`, `url` (absolute), `image`

**Verify:** `npm run build` — check `dist/index.html` for ItemList JSON

---

## Phase 2 Checkpoint ✓
> Confirm: FAQ renders in browser on article page, ItemList visible in homepage HTML source.

---

## Phase 3 — New Pages (all independent, can build in any order)

### Task 4 · Category Pages — `/koleksi/instan`, `/koleksi/pashmina`, `/koleksi/bergo`
**Files:** `src/pages/koleksi/instan.astro`, `pashmina.astro`, `bergo.astro`  
**Imports:** `products.ts`, `ProductCard.astro`, `BaseLayout.astro`, `url()`

**Each page must have:**
- Keyword-rich `<title>` and `<meta description>`
- H1 targeting category keyword (e.g. "Hijab Instan Premium")
- Intro paragraph 60–80 kata
- Product grid (filtered by category) using `ProductCard`
- `CollectionPage` + `ItemList` JSON-LD schema
- Internal link to relevant magazine article (cross-link)

**Acceptance:**
- 3 new routes render without error
- Each shows only products of its category
- Schema includes `"@type": "CollectionPage"` and `"@type": "ItemList"`

**Verify:** `npm run build` — all 3 pages in `dist/koleksi/`

---

### Task 5 · Size Guide — `/panduan-ukuran`
**Files:** `src/pages/panduan-ukuran.astro`

**Page must have:**
- H1: "Panduan Ukuran Hijab — Instan, Pashmina, Bergo"
- Table per category: kolom Tipe, Dimensi, Cocok untuk
- HowTo JSON-LD schema: langkah memilih ukuran
- Internal links to `/koleksi/instan`, `/koleksi/pashmina`, `/koleksi/bergo`

**Acceptance:**
- Page renders at `/panduan-ukuran`
- Contains `"@type": "HowTo"` in JSON-LD
- 3 tables (Instan, Pashmina, Bergo) with at least 2 rows each

**Verify:** `npm run build` — page in `dist/panduan-ukuran/index.html`

---

### Task 6 · Brand Pages — `/tentang` + `/kontak`
**Files:** `src/pages/tentang.astro`, `src/pages/kontak.astro`

**`/tentang` must have:**
- H1: "Tentang Hara"
- Sections: Filosofi, Visi & Misi, Tim Editorial
- Brand quote (AI-citable, self-contained, ~60 kata)
- `AboutPage` JSON-LD

**`/kontak` must have:**
- H1: "Hubungi Kami"
- WhatsApp CTA link (`https://wa.me/...`)
- Email placeholder
- Mini FAQ (3–4 Q&A tentang pembelian)

**Acceptance:**
- Both pages render without error
- `/kontak` has a functional `wa.me` link
- `/tentang` has `"@type": "AboutPage"` in JSON-LD

**Verify:** `npm run build` — both pages in `dist/`

---

## Phase 3 Checkpoint ✓
> Confirm: 5 new pages render. `npm run build` passes. Check `dist/sitemap-0.xml` — all new URLs present.

---

## Phase 4 — Navigation & Final Wiring

### Task 7 · Header + Footer Update
**Files:** `src/components/Header.astro`, `src/components/Footer.astro`  
**Depends on:** Task 6 (pages must exist)

**Header:**
- Change `{ label: 'Tentang', href: '#' }` → `href: url('/tentang')`

**Footer:**
- Add a two-column quick links section:
  - Kolom 1: Produk (Instan, Pashmina, Bergo → `/koleksi/*`)
  - Kolom 2: Info (Tentang, Kontak, Panduan Ukuran, Magazine)

**Acceptance:**
- Header "Tentang" links to `/hijabstore-frontend/tentang` (with base prefix)
- Footer quick links render and are correct absolute paths via `url()`

**Verify:** `npm run build` — inspect generated HTML for correct hrefs

---

### Task 8 · Final Build + Sitemap Audit
**Files:** none (verification only)

**Steps:**
1. `npm run build` — must complete with 0 errors
2. Count URLs in `dist/sitemap-0.xml` — expect 25 + 5 new = **30+ URLs**
3. Spot-check JSON-LD on: homepage, one FAQ article, one koleksi page
4. Confirm `<title>` tags on new pages are not generic

**Acceptance:**
- Build succeeds, 0 errors
- Sitemap has ≥30 URLs
- No page has `<title>undefined — Hara</title>`

---

## Estimated Effort

| Task | Complexity | Est. Time |
|------|-----------|-----------|
| 1 — Post type + content | Medium (6 articles to edit) | 30 min |
| 2 — Magazine FAQ UI + schema | Medium | 20 min |
| 3 — ItemList homepage | Low | 10 min |
| 4 — 3 Category pages | Low (repetitive) | 25 min |
| 5 — Size guide page | Low | 15 min |
| 6 — Tentang + Kontak | Low | 20 min |
| 7 — Header + Footer | Low | 15 min |
| 8 — Final verify | Low | 10 min |
| **Total** | | **~2.5 jam** |

---

## Risk Notes

- **H2 rewrite in `posts.ts`**: content is a raw string with `## Heading` markers. The `renderContent()` function in `[slug].astro` parses `## ` prefix. Ensure new question H2s still use `## ` prefix format.
- **`faqs` as optional field**: `renderContent()` does not touch FAQs — they are rendered separately in the template, not part of the `content` string.
- **Base URL on new pages**: all `href` values must use `url()` helper from `src/lib/url.ts`, not bare paths.
- **Sitemap auto-includes new pages**: `@astrojs/sitemap` scans all static routes, so new pages auto-appear — no manual sitemap update needed.
