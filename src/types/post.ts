export interface Post {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'Style' | 'Tutorial' | 'Trend' | 'Tips';
  image: string;
  author: string;
  publishedAt: string; // ISO date string
  readTime: number;    // minutes
  isFeatured: boolean;
}
