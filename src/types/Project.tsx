interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl?: string; // Optional image URL
  tags: string[];
  liveUrl?: string; // Optional link to live project
  repoUrl?: string; // Optional link to GitHub repo
}

export type { Project };
