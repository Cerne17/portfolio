import React from "react";

const Navbar: React.FC = () => {
  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact me" },
  ];
  return (
    <nav className="bg-slate-800 text-slate-200 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center py-3 px-4">
        {/* <div className="text-lg font-semibold">My Portfolio</div> */}
        <a
          href="#home"
          className="text-xl font-bold hover:text-blue-400 transition-colors"
        >
          Welcome to my portfolio
        </a>
        <ul className="flex space-x-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`
                  px-3 py-2 rounded-md text-sm font-medium
                  hover:text-blue-400 hover:bg-slate-700
                  transform transition-all duration-300 ease-in-out
                  hover:scale-110 hover:-translate-y-0.5
                `}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
