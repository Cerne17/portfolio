import React from "react";
import { Link as RouterLink, NavLink } from "react-router-dom"; // Import Link (aliased) and NavLink

const Navbar: React.FC = () => {
  // If you want to keep same-page hash links for sections on the HomePage:
  // You'd need a way to know if you are on the HomePage.
  // For simplicity, let's assume these now also navigate to the root and rely on IDs.
  // Or, you can make dedicated pages if preferred.
  // For now, let's treat "Home", "About", "Projects", "Contact" as sections on the HomePage (`/`)
  // and "Blog" as a separate page.

  const navItems = [
    {
      label: "Home",
      path: "/",
      isPageLink: true,
      isHashLink: true,
      hash: "#home",
    },
    {
      label: "About",
      path: "/",
      isPageLink: true,
      isHashLink: true,
      hash: "#about",
    }, // Assuming #about is on HomePage
    {
      label: "Projects",
      path: "/",
      isPageLink: true,
      isHashLink: true,
      hash: "#projects",
    }, // Assuming #projects is on HomePage
    { label: "Blog", path: "/blog", isPageLink: true, isHashLink: false },
    {
      label: "Contact",
      path: "/",
      isPageLink: true,
      isHashLink: true,
      hash: "#contact",
    }, // Assuming #contact is on HomePage
  ];

  // Common styling for nav links
  const linkClasses =
    "px-3 py-2 rounded-md text-sm font-medium transform transition-all duration-300 ease-in-out hover:scale-110 hover:-translate-y-0.5";
  const activeLinkClasses = "text-blue-400 bg-slate-700"; // Example active style
  const inactiveLinkClasses = "hover:text-blue-400 hover:bg-slate-700";

  return (
    <nav className="bg-slate-800 text-slate-200 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center py-3 px-4">
        <RouterLink
          to="/"
          className="text-xl font-bold hover:text-blue-400 transition-colors"
        >
          MySite {/* Or your name/logo component */}
        </RouterLink>
        <ul className="flex space-x-2 md:space-x-6">
          {navItems.map((item) => (
            <li key={item.label}>
              {item.isPageLink && !item.isHashLink ? (
                // Use NavLink for page links to get active styling
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `${linkClasses} ${
                      isActive ? activeLinkClasses : inactiveLinkClasses
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ) : item.isHashLink ? (
                // For same-page hash links, react-router's Link can handle scrolling
                // if the target IDs are present on the page rendered at item.path.
                // Or, use a custom scroll handler if needed for more complex scenarios.
                <RouterLink
                  to={`${item.path}${item.hash || ""}`} // e.g. to="/#about"
                  className={`${linkClasses} ${inactiveLinkClasses}`} // NavLink active state less relevant for hash links usually
                  // You might need a custom solution to highlight active hash link
                  // based on scroll position if that's desired.
                >
                  {item.label}
                </RouterLink>
              ) : (
                // Fallback for other types or plain <a> tags if necessary (e.g. external)
                <a
                  href={item.path}
                  className={`${linkClasses} ${inactiveLinkClasses}`}
                >
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
