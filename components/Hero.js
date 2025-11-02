"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();

  const images = [
    "/images/hero1.jpeg",
    "/images/hero2.jpeg",
    "/images/hero3.jpeg",
    "/images/hero4.jpeg",
    "/images/hero5.jpeg",
  ];

  const lines = [
    "The Umundu Artivism is a youth-led community-based organization that uses the power of art, storytelling, and innovation to spark social change.",
    "Rooted in rural Embu, Kenya, we bring together young people to express, heal, and transform their communities through creative activism.",
    "We believe that art is more than expression—it is a catalyst for awareness, empowerment, and mental well-being.",
    "Through theatre, film, digital creativity, and social advocacy, The Umundu Artivism gives voice to the issues that matter most to young people,",
    "from sexual and reproductive health to environmental consciousness and gender equality.",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentLine, setCurrentLine] = useState(0);

  // Smooth background transitions
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Line-by-line fade effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentLine((prev) => (prev + 1) % lines.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [lines.length]);

  return (
    <section
      id="home"
      className="relative h-[90vh] w-full flex items-center justify-center text-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <AnimatePresence>
          <motion.div
            key={currentIndex}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
          >
            <Image
              src={images[currentIndex]}
              alt="Umundu community"
              fill
              priority
              className="object-cover transition-all duration-1000"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#4b2e2e]/70 to-[#FAF3E0]/40"></div>

      {/* Hero Text */}
      <div className="relative z-10 max-w-3xl text-white px-6">
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold mb-6 drop-shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          The Spirit of Togetherness
        </motion.h1>

        <AnimatePresence mode="wait">
          <motion.p
            key={currentLine}
            className="text-lg md:text-xl leading-relaxed drop-shadow-md"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 1.5 }}
          >
            {lines[currentLine]}
          </motion.p>
        </AnimatePresence>

        {/* Buttons */}
        <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-[#D4A373] text-[#3E2723] font-semibold rounded-lg shadow-lg hover:bg-[#c48f5a] transition-all"
            onClick={() => router.push("#get-involved")}
          >
            
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push("/about")}
            className="px-6 py-3 bg-white text-[#4b2e2e] font-semibold rounded-lg shadow-lg hover:bg-[#f5f2eb] transition-all"
          >
            Learn More
          </motion.button>
        </div>
      </div>
    </section>
  );
}
