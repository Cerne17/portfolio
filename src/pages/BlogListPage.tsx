import React, { useEffect, useState } from "react";
import type { Post } from "../types/Post";
import { Link as RouterLink } from "react-router-dom"; // For linking to individual posts

const BlogListPage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        // Fetch only published posts for the public blog list
        const response = await fetch(
          `${
            import.meta.env.VITE_API_BASE_URL || "http://localhost:3001"
          }/posts?published=true`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setPosts(data);
      } catch (e: any) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading)
    return (
      <div className="container mx-auto p-6 text-center">Loading posts...</div>
    );
  if (error)
    return (
      <div className="container mx-auto p-6 text-red-500 text-center">
        Error loading posts: {error}
      </div>
    );
  if (posts.length === 0)
    return (
      <div className="container mx-auto p-6 text-center">
        No posts found. Check back soon!
      </div>
    );

  return (
    <div className="container mx-auto p-6 md:p-8">
      <h1 className="text-4xl md:text-5xl font-bold text-slate-700 mb-10 text-center">
        My Blog
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          // Replace with BlogPostCard component later
          <div key={post.id} className="bg-white p-6 rounded-lg shadow-lg">
            {post.imageUrl && (
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
            )}
            <h2 className="text-2xl font-semibold text-slate-800 mb-2 hover:text-blue-600">
              <RouterLink to={`/blog/${post.slug}`}>{post.title}</RouterLink>
            </h2>
            {post.excerpt && (
              <p className="text-slate-600 text-sm mb-3">{post.excerpt}</p>
            )}
            <div className="text-xs text-slate-500 mb-1">
              <span>
                Published: {new Date(post.createdAt).toLocaleDateString()}
              </span>
              <span className="mx-2">|</span>
              <span>Views: {post.views}</span>
            </div>
            <RouterLink
              to={`/blog/${post.slug}`}
              className="text-blue-600 hover:underline text-sm font-medium"
            >
              Read more →
            </RouterLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogListPage;
