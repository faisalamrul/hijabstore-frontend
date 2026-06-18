# SEO Content Quality & AI Citability

## Overview

Improve on-page SEO and AI search visibility across magazine articles and the homepage by adding structured FAQ sections, upgrading schema markup, rewriting headings to question format, and inserting definition-first introductions that AI systems can cite.

## Problem

The current magazine articles and homepage lack several signals that improve both traditional SEO (featured snippets, rich results) and AI search visibility (Google AI Overviews, ChatGPT, Perplexity). Specifically:

- No FAQ sections → missing featured snippet opportunities
- No FAQPage schema → Google cannot surface Q&A rich results
- No ItemList schema on homepage → product list not machine-readable
- Author schema uses `Organization` instead of `Person` → weaker E-E-A-T signal
- H2 headings are declarative statements → not matched to question-based queries
- Article introductions have no definition sentence → AI systems cannot extract a citable answer

## Goals

1. Add FAQ sections (visible UI) + FAQPage schema to the 3 highest-traffic magazine articles
2. Add ItemList schema to the homepage for the 6 featured products
3. Upgrade author schema from `Organization` to `Person` in all magazine article pages
4. Rewrite H2 headings in all 6 magazine articles from statements to questions
5. Add a definition sentence ("X adalah...") to the first paragraph of all 6 magazine articles

## Scope

### In Scope

- `src/pages/magazine/[slug].astro` — author schema, H2 headings, article intro definition
- `src/data/posts.ts` — content updates (H2 text, intro paragraph) for all 6 posts
- `src/pages/index.astro` — ItemList schema for featured products section
- FAQ content for top 3 articles: `panduan-padu-padan-hijab-monokrom`, `tutorial-hijab-pashmina-5-gaya`, `cara-merawat-hijab-agar-tahan-lama`

### Out of Scope

- New magazine articles or product pages
- Changes to product schema
- Changes to the visual design of article pages (except adding FAQ section UI)
- Backend or CMS changes

## User Stories

- As a Google search user, I want to see Q&A rich results for hijab care and styling questions so I can get answers directly on the search results page.
- As a reader, I want to see a clear FAQ section at the bottom of tutorial articles so I can quickly find answers to common questions.
- As an AI assistant (Perplexity, ChatGPT), I want to find a clear definition in the first paragraph so I can cite the article accurately.
- As Google's structured data parser, I want to see FAQPage and ItemList schema so I can generate rich results.

## Acceptance Criteria

- [ ] 3 magazine articles have a visible FAQ section with minimum 4 Q&A pairs each
- [ ] FAQPage JSON-LD is injected into the `<head>` of those 3 articles via the `head` slot
- [ ] Homepage `<head>` includes ItemList schema with all 6 featured product names, URLs, and images
- [ ] All magazine article pages use `"@type": "Person"` (not `"Organization"`) for the author field in Article schema
- [ ] All 6 magazine articles have H2 headings rewritten as questions (e.g. "Mulai dari Fondasi" → "Bagaimana Cara Memulai Tampilan Monokrom?")
- [ ] All 6 magazine articles begin with a sentence matching the pattern "[Topik] adalah..." within the first 80 words
- [ ] `npm run build` completes with 0 errors
- [ ] Google Rich Results Test passes for at least one FAQ article URL

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
