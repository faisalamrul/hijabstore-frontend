# SEO Content Quality & AI Citability

## Overview

Improve on-page SEO and AI search visibility across magazine articles and the homepage by adding structured FAQ sections, upgrading schema markup, rewriting headings to question format, and inserting definition-first introductions that AI systems can cite.

## Problem

The current site is missing several SEO-critical pages and schema signals:

- No FAQ sections → missing featured snippet opportunities
- No FAQPage schema → Google cannot surface Q&A rich results
- No ItemList schema on homepage → product list not machine-readable
- Author schema uses `Organization` instead of `Person` → weaker E-E-A-T signal
- H2 headings are declarative statements → not matched to question-based queries
- Article introductions have no definition sentence → AI systems cannot extract a citable answer
- No dedicated category pages → filter URLs (`?category=instan`) are not indexable landing pages
- No size guide page → missing high-intent keyword "ukuran hijab pashmina" (3.800/bln)
- No Tentang & Kontak pages → E-E-A-T and trust signals missing

## Goals

1. Add FAQ sections (visible UI) + FAQPage schema to the 3 highest-traffic magazine articles
2. Add ItemList schema to the homepage for the 6 featured products
3. Upgrade author schema from `Organization` to `Person` in all magazine article pages
4. Rewrite H2 headings in all 6 magazine articles from statements to questions
5. Add a definition sentence ("X adalah...") to the first paragraph of all 6 magazine articles
6. Create dedicated category landing pages: `/koleksi/instan`, `/koleksi/pashmina`, `/koleksi/bergo`
7. Create `/panduan-ukuran` — size guide page with HowTo schema
8. Create `/tentang` — brand story page
9. Create `/kontak` — contact page with WhatsApp CTA

## Scope

### In Scope

- `src/pages/magazine/[slug].astro` — author schema, FAQ section, FAQPage schema
- `src/data/posts.ts` — add `faqs` field to top 3 articles; update H2 headings and intro definitions for all 6
- `src/types/post.ts` — add optional `faqs?: FAQ[]` field
- `src/pages/index.astro` — ItemList schema for featured products section
- `src/pages/koleksi/instan.astro` — dedicated Instan category page
- `src/pages/koleksi/pashmina.astro` — dedicated Pashmina category page
- `src/pages/koleksi/bergo.astro` — dedicated Bergo category page
- `src/pages/panduan-ukuran.astro` — size guide with HowTo schema
- `src/pages/tentang.astro` — about brand page
- `src/pages/kontak.astro` — contact page
- `src/components/Header.astro` — update Tentang nav link to `/tentang`
- `src/components/Footer.astro` — add quick links to new pages

### Out of Scope

- New magazine articles
- Changes to product schema (already implemented)
- Backend or CMS changes
- Real contact form (placeholder WhatsApp CTA is sufficient)

## User Stories

- As a Google search user, I want to see Q&A rich results for hijab care and styling questions so I can get answers directly on the search results page.
- As a reader, I want to see a clear FAQ section at the bottom of tutorial articles so I can quickly find answers to common questions.
- As an AI assistant (Perplexity, ChatGPT), I want to find a clear definition in the first paragraph so I can cite the article accurately.
- As Google's structured data parser, I want to see FAQPage and ItemList schema so I can generate rich results.
- As a shopper searching "hijab instan premium", I want to land on a dedicated page for that category, not a generic filtered page.
- As a first-time buyer, I want a size guide so I know which hijab dimensions to buy.
- As a potential customer, I want to know the brand story and how to contact them.

## Acceptance Criteria

### FAQ & Schema
- [ ] `src/types/post.ts` has `FAQ` interface and optional `faqs?: FAQ[]` on `Post`
- [ ] Top 3 articles in `posts.ts` have at least 4 FAQ entries each
- [ ] 3 magazine articles render a visible FAQ section after the article body
- [ ] FAQPage JSON-LD injected into `<head>` of those 3 articles
- [ ] Homepage `<head>` includes ItemList schema with all 6 featured products
- [ ] All magazine article pages use `"@type": "Person"` for author in Article schema

### Content
- [ ] All 6 magazine articles have H2 headings rewritten as questions
- [ ] All 6 magazine articles begin with a "[Topik] adalah..." definition sentence

### New Pages
- [ ] `/koleksi/instan` renders Instan products with SEO-optimised H1 and description
- [ ] `/koleksi/pashmina` renders Pashmina products with SEO-optimised H1 and description
- [ ] `/koleksi/bergo` renders Bergo products with SEO-optimised H1 and description
- [ ] `/panduan-ukuran` renders a size guide table for all 3 hijab categories, with HowTo schema
- [ ] `/tentang` renders brand story with Organization schema
- [ ] `/kontak` renders contact info with WhatsApp CTA

### General
- [ ] Header "Tentang" nav link points to `/tentang` (not `#`)
- [ ] Footer includes quick links to new pages
- [ ] `npm run build` completes with 0 errors
- [ ] All new pages appear in the generated sitemap

## Design Notes

### FAQ Section UI
- Placed after the main article body, before the "Kembali ke Magazine" back link
- Accordion or static expand — static (always visible) preferred for SEO and simplicity
- Visual style consistent with existing `prose-hara` typography
- Heading: small eyebrow label "FAQ" + H2 "Pertanyaan yang Sering Ditanyakan"

### FAQ Content Guidelines (per article)
- Questions must match real user search queries (use question-based keywords)
- Answers: 40–80 words each — self-contained, no "as mentioned above"
- Minimum 4, maximum 7 questions per article

### Definition Sentence Guidelines
- Pattern: "[Kata kunci utama] adalah [penjelasan singkat, 1–2 kalimat]."
- Must appear in the first paragraph or as the first sentence of the article body
- Written in Indonesian, plain language, no jargon

### Author Schema Upgrade
- Current: `"author": { "@type": "Organization", "name": "Hara Editorial" }`
- Target: `"author": { "@type": "Person", "name": "Tim Editorial Hara", "jobTitle": "Fashion Editor", "worksFor": { "@type": "Organization", "name": "Hara" } }`

## Priority Articles for FAQ (Top 3 by keyword volume)

| Article | Target Keyword | Est. Volume |
|---------|---------------|-------------|
| `panduan-padu-padan-hijab-monokrom` | hijab monokrom minimalis | 3.200/bln |
| `tutorial-hijab-pashmina-5-gaya` | cara pakai pashmina hijab | 18.000/bln |
| `cara-merawat-hijab-agar-tahan-lama` | cara merawat hijab | 4.500/bln |

## New Pages Design Notes

### `/koleksi/[kategori]` — Category Landing Pages
- H1: keyword-rich, e.g. "Hijab Instan Premium — Koleksi Hara"
- Intro paragraph: 60–80 kata menjelaskan kategori + benefit utama
- Product grid: tampilan sama dengan `/products` tapi sudah difilter
- CTA: link ke artikel magazine yang relevan (cross-link)
- Schema: `CollectionPage` + `ItemList`

### `/panduan-ukuran` — Size Guide
- Tabel per kategori: Instan, Pashmina, Bergo
- Kolom tabel: Ukuran, Panjang, Lebar, Cocok untuk
- Accordion atau tab per kategori
- HowTo schema: langkah mengukur kepala + memilih ukuran
- Internal link ke masing-masing halaman kategori

### `/tentang` — Brand Story
- H1: "Tentang Hara"
- Seksi: Filosofi brand, Visi & Misi, Tim editorial
- Quote brand statement yang AI-citable
- Organization schema (sudah ada di BaseLayout, di sini bisa tambah `AboutPage`)

### `/kontak` — Contact
- H1: "Hubungi Kami"
- WhatsApp CTA (nomor placeholder)
- Email placeholder
- Jam operasional
- FAQ singkat (3–4 pertanyaan umum soal pembelian)
