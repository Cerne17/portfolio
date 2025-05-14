interface Post {
  id: number;
  title: string;
  content: string;
  slug: string;
  createdAt: string; // Or Date
  updatedAt: string; // Or Date
  imageUrl?: string;
  views: number;
  isPublished: boolean;
  excerpt?: string;
}
export type { Post };
