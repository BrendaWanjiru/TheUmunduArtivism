"use client";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#3E1F1F] text-white py-10 px-10 md:px-20 mt-12">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-4">
          <Image src="/images/logo.png" width={50} height={50} alt="Umundu Logo" />
          <p>Umundu Artivism</p>
        </div>
        <div className="flex gap-6">
          <a href="#about" className="hover:text-[#D4A373] transition">About</a>
          <a href="#impact" className="hover:text-[#D4A373] transition">Impact</a>
          <a href="#blog" className="hover:text-[#D4A373] transition">Blog</a>
          <a href="#contact" className="hover:text-[#D4A373] transition">Contact</a>
        </div>
        <div>
          <p className="text-sm">© {new Date().getFullYear()} Umundu Artivism. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
