"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-black text-white fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

        <Link href="/" className="text-xl font-bold text-yellow-500">
          ARMOS
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-sm">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/quote" className="text-yellow-500 font-semibold">
            Get Quote
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black border-t border-gray-800 px-4 py-6 space-y-4">
          <Link onClick={() => setOpen(false)} href="/">Home</Link>
          <Link onClick={() => setOpen(false)} href="/services">Services</Link>
          <Link onClick={() => setOpen(false)} href="/about">About</Link>
          <Link onClick={() => setOpen(false)} href="/contact">Contact</Link>
          <Link
            onClick={() => setOpen(false)}
            href="/quote"
            className="block text-yellow-500 font-semibold"
          >
            Get Quote
          </Link>
        </div>
      )}
    </nav>
  );
}