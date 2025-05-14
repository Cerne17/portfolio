import React, { useEffect, useState } from "react";
import { useParams, Link as RouterLink } from "react-router-dom";
import type { Post } from "../types/Post";

// Define the full Post type matching your backend entity

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>(); // Get slug from URL
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;

    const fetchPost = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `${
            import.meta.env.VITE_API_BASE_URL || "http://localhost:3001"
          }/posts/${slug}`
        );
        if (!response.ok) {
          if (response.status === 404) throw new Error("Post not found.");
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setPost(data);
      } catch (e: any) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading)
    return (
      <div className="container mx-auto p-6 text-center">Loading post...</div>
    );
  if (error)
    return (
      <div className="container mx-auto p-6 text-red-500 text-center">
        Error: {error}
      </div>
    );
  if (!post)
    return (
      <div className="container mx-auto p-6 text-center">Post not found.</div>
    );

  // Basic rendering of HTML content (ensure it's sanitized if coming from a rich text editor)
  // For Markdown, you'd use a library like 'react-markdown'.
  // For now, assuming content is safe HTML or plain text.
  const renderContent = () => {
    // If your content is HTML and you trust its source:
    // return { __html: post.content };
    // For plain text that might have newlines:
    return post.content.split("\n").map((paragraph, index) => (
      <p key={index} className="mb-4 leading-relaxed">
        {paragraph}
      </p>
    ));
  };

  return (
    <article className="container mx-auto p-6 md:p-8 max-w-3xl">
      {" "}
      {/* Max width for readability */}
      {post.imageUrl && (
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-auto md:h-96 object-cover rounded-lg mb-8 shadow-lg"
        />
      )}
      <h1 className="text-3xl md:text-5xl font-bold text-slate-800 mb-4">
        {post.title}
      </h1>
      <div className="text-sm text-slate-500 mb-6 border-b pb-4">
        <span>Published: {new Date(post.createdAt).toLocaleDateString()}</span>
        <span className="mx-2">|</span>
        <span>Views: {post.views}</span>
        {post.updatedAt !== post.createdAt && (
          <>
            <span className="mx-2">|</span>
            <span>
              Updated: {new Date(post.updatedAt).toLocaleDateString()}
            </span>
          </>
        )}
      </div>
      {/* Content - Be careful with dangerouslySetInnerHTML if content is user-generated or rich HTML */}
      <div className="prose lg:prose-xl max-w-none text-slate-700">
        {" "}
        {/* Tailwind Typography for nice article styling */}
        {/* <div dangerouslySetInnerHTML={renderContent()} /> */}{" "}
        {/* If content is trusted HTML */}
        {renderContent()} {/* If content is plain text with newlines */}
      </div>
      <div className="mt-12 pt-6 border-t">
        <RouterLink to="/blog" className="text-blue-600 hover:underline">
          ← Back to Blog
        </RouterLink>
      </div>
    </article>
  );
};

export default BlogPostPage;
