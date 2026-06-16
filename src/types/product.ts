export interface Product {
  id: string;
  slug: string;
  name: string;
  price: number;
  images: string[];
  category: 'instan' | 'pashmina' | 'bergo';
  description: string;
  colors: string[];
  sizes: string[];
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
