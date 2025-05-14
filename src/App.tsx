import { useState, useEffect } from "react";
import { Routes, Route, Link as RouterLink } from "react-router-dom";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectCard from "./components/ProjectCard";

import BlogListPage from "./pages/BlogListPage";
import BlogPostPage from "./pages/BlogPostPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 text-gray-800">
      <Header />
      <Navbar /> {/* Ensure Navbar links point to new routes like /blog */}
      <main className="flex-grow">
        {" "}
        {/* Removed container mx-auto from here directly */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogListPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          {/* Add other routes here if needed, e.g., for a dedicated projects page */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
