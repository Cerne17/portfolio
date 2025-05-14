interface Post {
  id: number;
  title: string;
  slug: string;
  excerpt?: string;
  createdAt: string; // Or Date
  imageUrl?: string;
  views: number;
}

export type { Post };
