import type { Product } from '../types/product';

const BASE = 'fit=crop&crop=faces,center&q=80&w=800&h=1000';

function img(id: string): string {
  return `https://images.unsplash.com/photo-${id}?${BASE}`;
}

export const products: Product[] = [
  // ── INSTAN ──────────────────────────────────────────────────────────────
  {
    id: '1',
    slug: 'instan-hara-classic',
    name: 'Instan Hara Classic',
    price: 89000,
    images: [img('1585728748176-455ac5eed962'), img('1542380841-5eef57349ca1')],
    category: 'instan',
    description:
      'Hijab instan andalan sehari-hari dengan bahan jersey premium yang nyaman dan tidak mudah kusut. Desain simpel cocok untuk tampilan kasual maupun semi-formal.',
    colors: ['hitam', 'putih', 'navy', 'abu'],
    sizes: ['one size'],
    isNew: false,
    isFeatured: true,
  },
  {
    id: '2',
    slug: 'instan-hara-pima',
    name: 'Instan Hara Pima',
    price: 99000,
    images: [img('1613611864136-0ace2a3b9926'), img('1584339312444-6952d098e152')],
    category: 'instan',
    description:
      'Dibuat dari bahan pima cotton lembut yang menyerap keringat dengan baik. Pilihan sempurna untuk aktivitas harian di cuaca tropis.',
    colors: ['hitam', 'coklat', 'sage'],
    sizes: ['one size'],
    isNew: true,
    isFeatured: true,
  },
  {
    id: '3',
    slug: 'instan-hara-everyday',
    name: 'Instan Hara Everyday',
    price: 79000,
    images: [img('1650462167170-4cba33f8a24a'), img('1574297500578-afae55026ff3')],
    category: 'instan',
    description:
      'Seri entry-level Hara dengan kualitas terjangkau tanpa mengorbankan kenyamanan. Tersedia dalam pilihan warna netral yang mudah dipadukan.',
    colors: ['hitam', 'putih', 'krem'],
    sizes: ['one size'],
    isNew: false,
    isFeatured: false,
  },
  {
    id: '4',
    slug: 'instan-hara-sport',
    name: 'Instan Hara Sport',
    price: 109000,
    images: [img('1619545307432-9fc73f8135ff'), img('1558027309-0844844295f7')],
    category: 'instan',
    description:
      'Dirancang khusus untuk aktivitas fisik — bahan moisture-wicking yang cepat kering, elastis, dan tetap rapi meski bergerak aktif.',
    colors: ['hitam', 'abu', 'navy'],
    sizes: ['one size'],
    isNew: true,
    isFeatured: false,
  },
  {
    id: '5',
    slug: 'instan-hara-midi',
    name: 'Instan Hara Midi',
    price: 85000,
    images: [img('1613611927458-3ddd4b0afdb9'), img('1619545010907-ca2217d296ce')],
    category: 'instan',
    description:
      'Panjang midi yang lebih menutup dada, terbuat dari bahan viscose halus dengan jatuh yang elegan. Tampil anggun dalam satu langkah.',
    colors: ['hitam', 'putih', 'dusty pink'],
    sizes: ['one size'],
    isNew: false,
    isFeatured: true,
  },
  {
    id: '6',
    slug: 'instan-hara-volume',
    name: 'Instan Hara Volume',
    price: 95000,
    images: [img('1554255654-b9801ab54bd2'), img('1640154852340-9de73a0643a8')],
    category: 'instan',
    description:
      'Model instan dengan volume lebih di bagian belakang untuk tampilan penuh dan berkarakter. Cocok untuk acara semi-formal dan pesta.',
    colors: ['hitam', 'coklat tua', 'olive'],
    sizes: ['one size'],
    isNew: false,
    isFeatured: false,
  },

  // ── PASHMINA ─────────────────────────────────────────────────────────────
  {
    id: '7',
    slug: 'pashmina-hara-voile',
    name: 'Pashmina Hara Voile',
    price: 129000,
    images: [img('1626497361649-81cc097e9bfd'), img('1569245087840-dcf487ddbad5')],
    category: 'pashmina',
    description:
      'Pashmina berbahan voile ringan dengan tekstur semi-transparan yang elegan. Jatuh indah dan mudah dibentuk berbagai style.',
    colors: ['hitam', 'putih', 'navy', 'krem'],
    sizes: ['one size'],
    isNew: false,
    isFeatured: true,
  },
  {
    id: '8',
    slug: 'pashmina-hara-silk',
    name: 'Pashmina Hara Silk',
    price: 179000,
    images: [img('1661254601903-0edfe1cd736c'), img('1643458180338-02c4fa4be53c')],
    category: 'pashmina',
    description:
      'Kemewahan dalam setiap lipatan — dibuat dari satin silk premium dengan kilap alami yang halus di kulit. Pilihan terbaik untuk acara spesial.',
    colors: ['hitam', 'ivory', 'dusty rose'],
    sizes: ['one size'],
    isNew: true,
    isFeatured: true,
  },
  {
    id: '9',
    slug: 'pashmina-hara-rayon',
    name: 'Pashmina Hara Rayon',
    price: 119000,
    images: [img('1522219406764-db207f1f7640'), img('1585728748176-455ac5eed962')],
    category: 'pashmina',
    description:
      'Pilihan harian yang versatile dari bahan rayon lembut dan adem. Ringan di kepala dan tahan lama meski sering dicuci.',
    colors: ['hitam', 'putih', 'abu', 'sage'],
    sizes: ['one size'],
    isNew: false,
    isFeatured: false,
  },
  {
    id: '10',
    slug: 'pashmina-hara-sheer',
    name: 'Pashmina Hara Sheer',
    price: 149000,
    images: [img('1613447895817-e617a4093f50'), img('1684894059566-25ca8b8007bd')],
    category: 'pashmina',
    description:
      'Pashmina sheer dengan tekstur berkilau halus — tampil minimalis namun tetap mewah. Mudah dilipat dan dibawa bepergian.',
    colors: ['hitam', 'putih', 'caramel'],
    sizes: ['one size'],
    isNew: true,
    isFeatured: false,
  },
  {
    id: '11',
    slug: 'pashmina-hara-linen',
    name: 'Pashmina Hara Linen',
    price: 159000,
    images: [img('1662806407800-56793fa8e924'), img('1693985007521-e08e64770947')],
    category: 'pashmina',
    description:
      'Tekstur linen alami yang breathable dan ramah lingkungan. Tampilan earthy yang cocok untuk gaya kasual modern.',
    colors: ['hitam', 'putih', 'olive', 'krem'],
    sizes: ['one size'],
    isNew: false,
    isFeatured: false,
  },

  // ── BERGO ────────────────────────────────────────────────────────────────
  {
    id: '12',
    slug: 'bergo-hara-daily',
    name: 'Bergo Hara Daily',
    price: 99000,
    images: [img('1736342182213-6c037467cb38'), img('1736342182642-e2042084f47c')],
    category: 'bergo',
    description:
      'Bergo harian yang praktis dan nyaman, cocok untuk segala aktivitas. Bahan jersey stretch memastikan kenyamanan sepanjang hari.',
    colors: ['hitam', 'putih', 'navy'],
    sizes: ['one size'],
    isNew: false,
    isFeatured: true,
  },
  {
    id: '13',
    slug: 'bergo-hara-jersey',
    name: 'Bergo Hara Jersey',
    price: 89000,
    images: [img('1736342181249-9e81c11737b8'), img('1542380841-5eef57349ca1')],
    category: 'bergo',
    description:
      'Bergo jersey dengan bahan tebal berkualitas yang tidak menerawang. Jahitan rapi dan detail finishing yang presisi.',
    colors: ['hitam', 'abu', 'coklat'],
    sizes: ['one size'],
    isNew: false,
    isFeatured: false,
  },
  {
    id: '14',
    slug: 'bergo-hara-kaos',
    name: 'Bergo Hara Kaos',
    price: 79000,
    images: [img('1650462167170-4cba33f8a24a'), img('1619545307432-9fc73f8135ff')],
    category: 'bergo',
    description:
      'Bergo berbahan kaos katun combed 30s yang lembut dan menyerap keringat. Entry-level terbaik untuk bergo pertamamu.',
    colors: ['hitam', 'putih', 'dusty pink'],
    sizes: ['one size'],
    isNew: true,
    isFeatured: false,
  },
  {
    id: '15',
    slug: 'bergo-hara-premium',
    name: 'Bergo Hara Premium',
    price: 149000,
    images: [img('1613611864136-0ace2a3b9926'), img('1661254601903-0edfe1cd736c')],
    category: 'bergo',
    description:
      'Bergo premium dengan bahan wollycrepe mewah yang tidak mudah kusut. Detail bordir halus di tepi memberi kesan elegan untuk acara formal.',
    colors: ['hitam', 'putih', 'ivory'],
    sizes: ['one size'],
    isNew: true,
    isFeatured: true,
  },
  {
    id: '16',
    slug: 'bergo-hara-ruffle',
    name: 'Bergo Hara Ruffle',
    price: 119000,
    images: [img('1643458180338-02c4fa4be53c'), img('1574297500578-afae55026ff3')],
    category: 'bergo',
    description:
      'Sentuhan feminin dari detail ruffle di bagian depan. Tampil berbeda dari bergo biasa tanpa kehilangan kesan minimalis khas Hara.',
    colors: ['hitam', 'putih', 'sage'],
    sizes: ['one size'],
    isNew: false,
    isFeatured: false,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: Product['category']): Product[] {
  return products.filter((p) => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.isFeatured);
}
