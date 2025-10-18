import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Gallery", path: "/gallery" },
    { name: "Resources", path: "/resources" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="backdrop-blur-md bg-white/10 text-white sticky top-0 z-50 border-b border-white/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-teal-400"
        >
          Height&Depth
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `relative px-2 py-1 transition-all duration-300 hover:text-blue-300 ${
                  isActive
                    ? "text-blue-300 font-semibold after:absolute after:content-[''] after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-blue-300"
                    : ""
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-3 px-6 py-4 backdrop-blur-lg bg-white/10 border-t border-white/20">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `hover:text-blue-300 transition ${
                  isActive ? "text-blue-300 font-semibold" : ""
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
