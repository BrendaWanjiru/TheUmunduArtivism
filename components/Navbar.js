"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Home", "About", "Mission", "Vision", "Impact", "Talent", "Blog", "Contact"];

  return (
    <nav
      className={`fixed w-full z-50 px-6 py-4 flex justify-between items-center transition-all duration-300 ${
        scrolled ? "bg-white/90 shadow-md backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="flex items-center gap-4">
        <Image src="/images/logo1.png" alt="Umundu Logo" width={50} height={50} />
        <h1 className="text-2xl font-bold text-[#4b2e2e] tracking-wide">
          The Umundu Artivism
        </h1>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6">
        {navItems.map((item) => (
          <Link
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-[#4b2e2e] font-semibold px-3 py-2 rounded-md border-2 border-transparent hover:border-[#D4A373] hover:text-[#D4A373] transition-all"
          >
            {item}
          </Link>
        ))}
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex flex-col gap-1 w-6 h-6 justify-center items-center"
        >
          <span className={`h-0.5 w-full bg-[#4b2e2e] transition-transform ${menuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`h-0.5 w-full bg-[#4b2e2e] transition-opacity ${menuOpen ? "opacity-0" : ""}`}></span>
          <span className={`h-0.5 w-full bg-[#4b2e2e] transition-transform ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-6 md:hidden">
          {navItems.map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="text-[#4b2e2e] font-semibold px-3 py-2 rounded-md border-2 border-transparent hover:border-[#D4A373] hover:text-[#D4A373] transition-all"
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
