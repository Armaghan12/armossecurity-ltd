"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/70 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold tracking-widest hover:text-gray-300 transition"
        >
          ARMOS SECURITY LTD
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10 text-sm tracking-wide">

          <Link href="/" className="hover:text-gray-300 transition">
            Home
          </Link>

          <Link href="/services" className="hover:text-gray-300 transition">
            Services
          </Link>

          <Link href="/about" className="hover:text-gray-300 transition">
            About
          </Link>

          <Link href="/contact" className="hover:text-gray-300 transition">
            Contact
          </Link>
          
          <Link
          href="/quote"
          className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-black px-6 py-2 rounded-md font-semibold hover:from-yellow-500 hover:to-yellow-400 transition"
          >
          Get Quote
           </Link>

        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-black border-t border-gray-800 px-6 py-6 space-y-6 text-center">

          <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/services" onClick={() => setMenuOpen(false)}>Services</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>

          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="block bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-5 py-2 rounded-md font-semibold shadow-lg"
          >
            Get Quote
          </Link>
        </div>
      )}
    </nav>
  );
}
