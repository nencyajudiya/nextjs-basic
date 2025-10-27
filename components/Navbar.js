"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-indigo-600">MyPortfolio</h1>
        <div className="space-x-6">
          <Link href="/" className="text-gray-700 hover:text-indigo-600">
            Home
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-indigo-600">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}
