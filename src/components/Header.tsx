import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom"; // Import Link
import logoSrc from "../assets/logo.svg"; // Adjust the path as necessary

const Header: React.FC = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100); // Delay to ensure initial styles are applied before transition starts
    return () => clearTimeout(timer);
  }, []);

  return (
    <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-4 shadow-lg">
      {" "}
      {/* Enhanced styling */}
      <div
        className={`
          container mx-auto flex justify-between items-center
          transition-all duration-700 ease-out // Transition properties
          ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"
          } // Dynamic classes
        `}
      >
        {" "}
        {/* You could put a logo here if you have one */}
        <RouterLink
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src={logoSrc} alt="My Portfolio Logo" className="h-10 w-auto" />
          <span className="self-center text-2xl font-bold tracking-tight whitespace-nowrap">
            {" "}
            {/* Keep text vertically centered */}
            Miguel Cerne
          </span>
        </RouterLink>
        {/* Or your brand/site name */}
        {/* Optional: Add a tagline or other small info on the right if needed */}
        <p className="text-sm">Full-Stack Developer & ML Enthusiast</p>
      </div>
    </header>
  );
};

export default Header;
