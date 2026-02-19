"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-5 py-4 flex justify-between items-center">

        {/* LOGO */}
        <Link href="/" className="text-lg font-bold tracking-wide text-white">
          ARMOS SECURITY LTD
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <Link href="/" className="hover:text-yellow-500">Home</Link>
          <Link href="/services" className="hover:text-yellow-500">Services</Link>
          <Link href="/about" className="hover:text-yellow-500">About</Link>
          <Link href="/contact" className="hover:text-yellow-500">Contact</Link>
          <Link
            href="/quote"
            className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-black px-4 py-2 rounded-md font-semibold hover:from-yellow-500 hover:to-yellow-400"
          >
            Get Quote
          </Link>
        </nav>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl text-white"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-black border-t border-gray-800">
          <nav className="flex flex-col px-6 py-6 space-y-5 text-base">
            <Link onClick={() => setOpen(false)} href="/">Home</Link>
            <Link onClick={() => setOpen(false)} href="/services">Services</Link>
            <Link onClick={() => setOpen(false)} href="/about">About</Link>
            <Link onClick={() => setOpen(false)} href="/contact">Contact</Link>
            <Link
              onClick={() => setOpen(false)}
              href="/quote"
              className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-black text-center py-3 rounded-md font-semibold"
            >
              Get Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
