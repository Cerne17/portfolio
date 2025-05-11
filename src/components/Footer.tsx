import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 p-6 text-center">
      <p>© {new Date().getFullYear()} Miguel Cerne. All rights reserved.</p>
      <p className="text-sm mt-2">This is the Footer</p>
    </footer>
  );
};

export default Footer;
