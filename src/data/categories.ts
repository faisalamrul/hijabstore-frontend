import type { Category } from '../types/product';

const BASE = 'fit=crop&crop=faces,center&q=80&w=900&h=1100';

function img(id: string): string {
  return `https://images.unsplash.com/photo-${id}?${BASE}`;
}

export const categories: Category[] = [
  {
    id: 'instan',
    slug: 'instan',
    name: 'Instan',
    description: 'Praktis tanpa ribet — pakai langsung, tampil sempurna.',
    image: img('1585728748176-455ac5eed962'),
  },
  {
    id: 'pashmina',
    slug: 'pashmina',
    name: 'Pashmina',
    description: 'Versatile dan elegan untuk berbagai kesempatan.',
    image: img('1626497361649-81cc097e9bfd'),
  },
  {
    id: 'bergo',
    slug: 'bergo',
    name: 'Bergo',
    description: 'Nyaman sepanjang hari, dari pagi hingga malam.',
    image: img('1736342182213-6c037467cb38'),
  },
];
