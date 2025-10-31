"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutPreview() {
  return (
    <section
      id="about"
      className="relative py-20 bg-gradient-to-br from-[#FAF9F6] to-[#FFFFFF] px-10 md:px-20 overflow-hidden"
    >
      {/* Artistic floating shapes */}
      <motion.div
        className="absolute top-10 left-10 w-40 h-40 bg-[#D4A373]/20 rounded-full blur-3xl"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-52 h-52 bg-[#4b2e2e]/10 rounded-full blur-2xl"
        animate={{ y: [0, -40, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left"
        >
          <h2 className="text-5xl font-extrabold text-[#4b2e2e] mb-6 drop-shadow-lg">
            About Us
          </h2>
          <p className="text-lg text-[#3E2723] leading-relaxed mb-6">
            At Umundu Artivism, we use art, storytelling, and collective action
            to **inspire change**. Our work empowers communities, amplifies
            marginalized voices, and builds sustainable solutions through
            creativity and collaboration.
          </p>
          <Link
            href="/about"
            className="inline-block px-6 py-3 bg-[#4b2e2e] text-white font-semibold rounded-lg shadow-lg hover:bg-[#3a2323] hover:scale-105 transition-all"
          >
            Learn More →
          </Link>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 relative group"
        >
          <Image
            src="/images/about1.jpg"
            alt="Umundu community"
            width={700}
            height={500}
            className="rounded-3xl shadow-2xl transition-transform duration-500 group-hover:scale-105 group-hover:brightness-110"
          />
          {/* Backlight Glow */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-[#D4A373]/30 to-[#4b2e2e]/30 blur-2xl opacity-70 group-hover:opacity-100 transition-all"></div>
        </motion.div>
      </div>
    </section>
  );
}
