import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About us", path: "/about" },
    { name: "Our stories", path: "/stories" },
    { name: "Our projects", path: "/projects" },
    { name: "Map", path: "/map" },
    { name: "Contact us", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-gradient-to-r from-neutral-900/40 via-neutral-800/30 to-neutral-900/40 text-gray-100 border-b border-white/10 shadow-[0_2px_20px_rgba(0,0,0,0.3)]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-xl md:text-2xl font-semibold tracking-wide flex items-center gap-2"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-pink-400">
            HeightAndDepth
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `relative transition-all duration-300 hover:text-blue-300 ${
                  isActive
                    ? "text-blue-300 after:absolute after:content-[''] after:left-0 after:bottom-[-2px] after:w-full after:h-[2px] after:bg-blue-300"
                    : ""
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}

          {/* Donate Button */}
          <Link
            to="/donate"
            className="ml-4 px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-orange-400 text-white font-semibold hover:opacity-90 transition"
          >
            Donate
          </Link>
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
        <div className="md:hidden flex flex-col space-y-3 px-6 py-4 backdrop-blur-lg bg-neutral-900/70 border-t border-white/10">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `transition hover:text-blue-300 ${
                  isActive ? "text-blue-300 font-semibold" : ""
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
          <Link
            to="/donate"
            onClick={() => setIsOpen(false)}
            className="mt-3 px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-orange-400 text-white font-semibold text-center hover:opacity-90 transition"
          >
            Donate
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
