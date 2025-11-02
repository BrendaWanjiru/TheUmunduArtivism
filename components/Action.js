"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Action() {
  const actions = [
    "Empowered youth and women through creative and digital skills training.",
    "Produced community stage plays and short films tackling period poverty, mental health, and reproductive rights.",
    "Rescued and supported GBV survivors through counseling, mentorship, and skills training.",
    "Created safe spaces for youth expression, healing, and collaboration through art and digital creativity.",
    "Fostered digital literacy and employability, enabling youth to earn through creative entrepreneurship.",
    "Built a growing community of changemakers using art and storytelling to inspire positive behavior in their communities.",
  ];

  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    if (visibleCount < actions.length) {
      const timer = setTimeout(() => {
        setVisibleCount((prev) => prev + 1);
      }, 700); // Delay between card appearances
      return () => clearTimeout(timer);
    }
  }, [visibleCount]);

  return (
    <section
      id="action"
      className="relative py-24 px-6 bg-gradient-to-br from-[#FAF3E0] via-[#EBDCC2] to-[#D7BFA4] overflow-hidden flex flex-col items-center justify-center text-center"
    >
      {/* Animated gradient background orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-80 h-80 bg-[#D4A373]/30 blur-3xl rounded-full top-10 left-10"
          animate={{ y: [0, 30, 0], opacity: [0.7, 1, 0.7] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        ></motion.div>
        <motion.div
          className="absolute w-96 h-96 bg-[#4b2e2e]/25 blur-3xl rounded-full bottom-10 right-10"
          animate={{ y: [0, -40, 0], opacity: [0.6, 0.9, 0.6] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        ></motion.div>
      </div>

      {/* Title */}
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-[#4b2e2e] mb-16 relative z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        💫 Our Impact
      </motion.h2>

      {/* Cards Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">
        {actions.slice(0, visibleCount).map((action, index) => (
          <motion.div
            key={index}
            className="relative backdrop-blur-lg bg-white/20 border border-[#ffffff44] shadow-xl rounded-3xl p-8 flex items-center justify-center min-h-[180px]"
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
          >
            <p className="text-lg md:text-xl font-medium text-[#3E2723] leading-relaxed">
              {action}
            </p>

            {/* Soft glowing border animation */}
            <motion.div
              className="absolute inset-0 rounded-3xl border-2 border-transparent"
              animate={{
                boxShadow: [
                  "0 0 10px rgba(212,163,115,0.3)",
                  "0 0 20px rgba(212,163,115,0.5)",
                  "0 0 10px rgba(212,163,115,0.3)",
                ],
              }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            ></motion.div>
          </motion.div>
        ))}
      </div>

      {/* Decorative line */}
      <motion.div
        className="w-32 h-1 bg-[#D4A373] rounded-full mt-16"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
    </section>
  );
}
