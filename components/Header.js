"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-[#4b2e2e] text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <Link href="/" className="text-2xl font-extrabold tracking-wide">
          The Umundu Artivism
        </Link>
        <nav className="flex space-x-6 text-lg">
          <Link href="/" className="hover:text-[#D7CCC8] transition-colors">
            Home
          </Link>
          <Link href="/about" className="hover:text-[#D7CCC8] transition-colors">
            About
          </Link>
          <Link href="/projects" className="hover:text-[#D7CCC8] transition-colors">
            Projects
          </Link>
          <Link href="/contact" className="hover:text-[#D7CCC8] transition-colors">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
