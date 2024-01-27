import Link from "next/link";
import React from "react";
import DarkModeToggle from "./DarkModeToggle";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const Navbar: React.FC = () => {
  return (
    <nav id="nav-main" className="bg-gray-800 text-white shadow-lg">
      <div className="container mx-auto px-4 py-5 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="text-xl font-bold">
            Matt Brevetti
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition duration-300"
            >
              {item.name}
            </Link>
          ))}
          <DarkModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
