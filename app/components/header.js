// components/Header.js
"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="bg-amber-50 text-brown-800 shadow-sm py-4">
      <div className="container mx-auto flex justify-between items-center px-6">
        <motion.h1
          className="text-2xl font-bold tracking-wide"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          The Umundu Artivism 🌿
        </motion.h1>
        <nav className="space-x-6">
          <Link href="/" className="hover:text-amber-700">Home</Link>
          <Link href="/about" className="hover:text-amber-700">About</Link>
          <Link href="/volunteer" className="hover:text-amber-700">Volunteer</Link>
          <Link href="/partnership" className="hover:text-amber-700">Partnerships</Link>
        </nav>
      </div>
    </header>
  );
}
