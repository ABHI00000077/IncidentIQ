"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-slate-800 bg-[#030712]/90 backdrop-blur-md sticky top-0 z-50">
      <div className="container flex items-center justify-between py-5">

        <Link
          href="/"
          className="text-2xl font-bold tracking-tight"
        >
          Incident<span className="text-blue-500">IQ</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm text-slate-300">

          <a href="#features" className="hover:text-white transition">
            Features
          </a>

          <a href="#preview" className="hover:text-white transition">
            Dashboard
          </a>

          <a href="#footer" className="hover:text-white transition">
            About
          </a>

        </div>

        <Link
          href="/login"
          className="primary-btn"
        >
          Login
        </Link>

      </div>
    </nav>
  );
}