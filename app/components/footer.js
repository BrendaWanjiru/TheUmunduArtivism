// components/Footer.js
"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-amber-100 text-center text-brown-700 py-6 mt-10">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        © {new Date().getFullYear()} The Umundu Artivism. All Rights Reserved.
      </motion.p>
    </footer>
  );
}
