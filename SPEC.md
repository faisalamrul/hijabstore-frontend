# Spec: Hara — Hijab Store Frontend

## Objective

Build a performant, mobile-first e-commerce storefront for **Hara**, a minimalist hijab/Islamic fashion brand, using Astro + TypeScript + Tailwind CSS.

**Target user:** Shoppers browsing and discovering hijab products on mobile and desktop.

**MVP scope:** Three pages — Homepage, Product Listing, Product Detail — powered by static mock data. No auth, no cart, no checkout for this phase.

**Success looks like:** A fast, visually polished storefront that a developer can hand off to a designer or extend with a real API later.

---

## Tech Stack

| Tool | Version | Purpose |
|---|---|---|
| Astro | ^5.x | Framework — SSG, routing, components |
| TypeScript | ^5.x | Type safety, strict mode |
| Tailwind CSS | ^4.x | Utility-first styling |
| Node.js | >=20 | Runtime |

---

## Commands

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:4321)
npm run dev

# Type check
npm run type-check

# Build for production
npm run build

# Preview production build
npm run preview

# Lint
npm run lint
```

---

## Project Structure

```
hijabstore-frontend/
├── src/
│   ├── components/        # Reusable UI components (Header, Footer, ProductCard, etc.)
│   ├── layouts/           # Page layouts (BaseLayout.astro)
│   ├── pages/             # File-based routing
│   │   ├── index.astro           # Homepage
│   │   └── products/
│   │       ├── index.astro       # Product listing page
│   │       └── [slug].astro      # Product detail page
│   ├── data/              # Mock data (products.ts, categories.ts)
│   ├── types/             # TypeScript interfaces (product.ts, category.ts)
│   └── styles/            # Global styles (global.css)
├── public/                # Static assets (favicon, brand logo SVG)
├── astro.config.mjs
├── tsconfig.json
├── SPEC.md
└── package.json
```

---

## Brand Identity

**Brand name:** Hara
**Tagline:** *"Modest. Minimal. Timeless."*

### Color Palette

Strict monochromatic palette — black, white, and neutral grays. No color accents for MVP.

| Token | Hex | Usage |
|---|---|---|
| `stone-50` | `#FAFAF9` | Page background (warm off-white) |
| `white` | `#FFFFFF` | Cards, modals, navbar |
| `neutral-100` | `#F5F5F5` | Section backgrounds (alternating) |
| `neutral-200` | `#E5E5E5` | Borders, dividers |
| `neutral-400` | `#A3A3A3` | Placeholder text, badges |
| `neutral-600` | `#525252` | Body text, descriptions |
| `neutral-800` | `#262626` | Subheadings |
| `neutral-950` | `#0A0A0A` | Headings, CTA buttons, logo |

All Tailwind built-in classes — no custom color config needed.

### Typography
- Font: System font stack (no custom font for MVP — fast loading)
- Headings: `font-light tracking-widest uppercase` — luxury editorial feel
- Body: `font-normal` neutral-600
- Price: `font-medium` neutral-950

---

## Page Definitions

### 1. Homepage (`/`)
- Minimal hero: full-width image or clean type-only hero with brand name, tagline, and CTA "Shop Now"
- Featured products grid (6 products where `isFeatured: true`)
- Category cards — 3 cards: Instan, Pashmina, Bergo
- Header: logo left, nav links right (Products, About — placeholder)
- Footer: brand name, tagline, copyright

### 2. Product Listing (`/products`)
- Sticky header filter bar: All | Instan | Pashmina | Bergo (client-side `<script>`)
- Sort dropdown: Terbaru, Harga Terendah, Harga Tertinggi
- Product grid: 2 columns mobile → 3 columns tablet → 4 columns desktop
- Each card links to `/products/[slug]`

### 3. Product Detail (`/products/[slug]`)
- Left: image gallery (main image large, thumbnail row below)
- Right: product name, price, short description, color swatches, size badges
- "Hubungi Kami" CTA button (links to WhatsApp — placeholder URL for MVP)
- Related products row: ≤4 items from same category

---

## Data Model

```typescript
// src/types/product.ts
export interface Product {
  id: string;
  slug: string;
  name: string;
  price: number;        // IDR, e.g. 89000
  images: string[];     // Unsplash CDN URLs
  category: 'instan' | 'pashmina' | 'bergo';
  description: string;
  colors: string[];     // e.g. ["hitam", "putih", "navy"]
  sizes: string[];      // e.g. ["one size"] or ["S","M","L","XL"]
  isNew: boolean;
  isFeatured: boolean;
}

export interface Category {
  id: string;
  slug: 'instan' | 'pashmina' | 'bergo';
  name: string;
  description: string;
  image: string;
}
```

---

## Mock Data Plan

**16 products, 3 categories. All image URLs from Unsplash (free, no attribution required).**

### Image Pool (Unsplash CDN URLs)

Append `?w=800&h=1000&fit=crop&crop=faces,center&q=80` to all URLs for consistent sizing.

```
IMG_01  https://images.unsplash.com/photo-1585728748176-455ac5eed962
IMG_02  https://images.unsplash.com/photo-1542380841-5eef57349ca1
IMG_03  https://images.unsplash.com/photo-1613611864136-0ace2a3b9926
IMG_04  https://images.unsplash.com/photo-1584339312444-6952d098e152
IMG_05  https://images.unsplash.com/photo-1650462167170-4cba33f8a24a
IMG_06  https://images.unsplash.com/photo-1574297500578-afae55026ff3
IMG_07  https://images.unsplash.com/photo-1619545307432-9fc73f8135ff
IMG_08  https://images.unsplash.com/photo-1558027309-0844844295f7
IMG_09  https://images.unsplash.com/photo-1613611927458-3ddd4b0afdb9
IMG_10  https://images.unsplash.com/photo-1619545010907-ca2217d296ce
IMG_11  https://images.unsplash.com/photo-1554255654-b9801ab54bd2
IMG_12  https://images.unsplash.com/photo-1640154852340-9de73a0643a8
IMG_13  https://images.unsplash.com/photo-1626497361649-81cc097e9bfd
IMG_14  https://images.unsplash.com/photo-1569245087840-dcf487ddbad5
IMG_15  https://images.unsplash.com/photo-1661254601903-0edfe1cd736c
IMG_16  https://images.unsplash.com/photo-1643458180338-02c4fa4be53c
IMG_17  https://images.unsplash.com/photo-1522219406764-db207f1f7640
IMG_18  https://images.unsplash.com/photo-1613447895817-e617a4093f50
IMG_19  https://images.unsplash.com/photo-1684894059566-25ca8b8007bd
IMG_20  https://images.unsplash.com/photo-1662806407800-56793fa8e924
IMG_21  https://images.unsplash.com/photo-1693985007521-e08e64770947
IMG_22  https://images.unsplash.com/photo-1736342182213-6c037467cb38
IMG_23  https://images.unsplash.com/photo-1736342182642-e2042084f47c
IMG_24  https://images.unsplash.com/photo-1736342181249-9e81c11737b8
```

### Product List

**INSTAN (6 products)**
| # | Name | Slug | Price | Colors | Featured | New |
|---|---|---|---|---|---|---|
| 1 | Instan Hara Classic | instan-hara-classic | 89,000 | hitam, putih, navy, abu | ✓ | — |
| 2 | Instan Hara Pima | instan-hara-pima | 99,000 | hitam, coklat, sage | ✓ | ✓ |
| 3 | Instan Hara Everyday | instan-hara-everyday | 79,000 | hitam, putih, krem | — | — |
| 4 | Instan Hara Sport | instan-hara-sport | 109,000 | hitam, abu, navy | — | ✓ |
| 5 | Instan Hara Midi | instan-hara-midi | 85,000 | hitam, putih, dusty pink | ✓ | — |
| 6 | Instan Hara Volume | instan-hara-volume | 95,000 | hitam, coklat tua, olive | — | — |

**PASHMINA (5 products)**
| # | Name | Slug | Price | Colors | Featured | New |
|---|---|---|---|---|---|---|
| 7 | Pashmina Hara Voile | pashmina-hara-voile | 129,000 | hitam, putih, navy, krem | ✓ | — |
| 8 | Pashmina Hara Silk | pashmina-hara-silk | 179,000 | hitam, ivory, dusty rose | ✓ | ✓ |
| 9 | Pashmina Hara Rayon | pashmina-hara-rayon | 119,000 | hitam, putih, abu, sage | — | — |
| 10 | Pashmina Hara Sheer | pashmina-hara-sheer | 149,000 | hitam, putih, caramel | — | ✓ |
| 11 | Pashmina Hara Linen | pashmina-hara-linen | 159,000 | hitam, putih, olive, krem | — | — |

**BERGO (5 products)**
| # | Name | Slug | Price | Colors | Featured | New |
|---|---|---|---|---|---|---|
| 12 | Bergo Hara Daily | bergo-hara-daily | 99,000 | hitam, putih, navy | ✓ | — |
| 13 | Bergo Hara Jersey | bergo-hara-jersey | 89,000 | hitam, abu, coklat | — | — |
| 14 | Bergo Hara Kaos | bergo-hara-kaos | 79,000 | hitam, putih, dusty pink | — | ✓ |
| 15 | Bergo Hara Premium | bergo-hara-premium | 149,000 | hitam, putih, ivory | ✓ | ✓ |
| 16 | Bergo Hara Ruffle | bergo-hara-ruffle | 119,000 | hitam, putih, sage | — | — |

**isFeatured count: 9** (enough for homepage grid + overflow)

---

## Code Style

```astro
---
// src/components/ProductCard.astro
import type { Product } from '../types/product';

interface Props {
  product: Product;
}

const { product } = Astro.props;

function formatPrice(price: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(price);
}
---

<a href={`/products/${product.slug}`} class="group block">
  <div class="relative overflow-hidden bg-neutral-100 aspect-[4/5]">
    <img
      src={`${product.images[0]}?w=600&h=750&fit=crop&crop=faces,center&q=80`}
      alt={product.name}
      class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      loading="lazy"
    />
    {product.isNew && (
      <span class="absolute top-3 left-3 bg-neutral-950 text-white text-xs tracking-widest uppercase px-2 py-1">
        New
      </span>
    )}
  </div>
  <div class="mt-3 space-y-1">
    <p class="text-xs tracking-widest uppercase text-neutral-400">{product.category}</p>
    <h3 class="text-sm font-medium text-neutral-950">{product.name}</h3>
    <p class="text-sm text-neutral-600">{formatPrice(product.price)}</p>
  </div>
</a>
```

**Conventions:**
- Component files: `PascalCase.astro`
- Utility functions: `camelCase`, inline in frontmatter or `src/lib/`
- Types: `PascalCase` interfaces in `src/types/`
- CSS: Tailwind utility classes only — no custom CSS unless unavoidable
- No `any` types — use proper interfaces
- Prices in IDR via `Intl.NumberFormat('id-ID')`
- All Unsplash image URLs must append query params: `?w=800&h=1000&fit=crop&crop=faces,center&q=80`

---

## Testing Strategy

No automated tests for MVP. Verification is manual:

- Dev server renders all three pages without console errors
- TypeScript compiles with zero errors (`npm run type-check`)
- Production build succeeds (`npm run build`)
- All 16 product slugs resolve to valid detail pages

If/when tests are added: Vitest for unit, Playwright for e2e.

---

## Boundaries

**Always:**
- Run `npm run type-check` and `npm run build` before marking a task done
- TypeScript interfaces for all data shapes — no implicit `any`
- Mobile-first: design for 375px, scale up with `sm:` / `md:` / `lg:`
- `loading="lazy"` on all product images
- Unsplash image URLs must include size/crop query params

**Ask first:**
- Adding npm dependencies beyond the initial stack
- Changing the mock data schema after tasks have started
- Adding new pages beyond the 3 defined
- Integrating a real backend or CMS
- Adding a custom font (affects bundle size)

**Never:**
- Use `// @ts-ignore` or `as any`
- Commit `.env` files
- Use inline `style=""` attributes
- Use color classes outside the defined neutral/stone palette

---

## Success Criteria

- [ ] `npm run dev` starts, all three pages accessible at localhost:4321
- [ ] `npm run build` completes with zero TS errors and zero build errors
- [ ] Homepage: hero, 6 featured products, 3 category cards visible
- [ ] `/products`: all 16 products shown, category filter works client-side
- [ ] `/products/[slug]`: all 16 slugs resolve, images load from Unsplash CDN
- [ ] No broken images or console errors on any page
- [ ] Mobile (375px) and desktop (1280px) layouts render correctly
- [ ] Lighthouse Performance ≥ 90 on mobile (production build)
