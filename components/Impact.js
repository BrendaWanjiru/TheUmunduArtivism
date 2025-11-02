"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Impact() {
  const impacts = [
    {
      title: "Community Engagement & Advocacy",
      desc: "We organize dialogues, art exhibitions, school outreach programs, and workshops that encourage open conversations and community-driven solutions.",
      img: "/images/impact1.jpg",
    },
    {
      title: "Women & Girl Child Empowerment Wing",
      desc: "This special wing focuses on uplifting women and girls through targeted programs addressing period poverty, menstrual hygiene management, and gender-based violence (GBV) recovery.",
      img: "/images/impact2.jpg",
    },
    {
      title: "Art for Awareness",
      desc: "We create thought-provoking performances, short films, and visual art campaigns that shine a light on key social issues, from menstrual health to gender rights and environmental sustainability.",
      img: "/images/impact3.jpg",
    },
    {
      title: "Digital Empowerment Hub",
      desc: "Our Digital Hub equips young people with practical skills in graphic design, digital marketing, content creation, and photography—empowering them to become creators, freelancers, and changemakers in the digital economy.",
      img: "/images/impact4.jpg",
    },
  ];

  // Duplicate cards to create seamless looping effect
  const duplicatedImpacts = [...impacts, ...impacts];

  return (
    <section
      id="impact"
      className="relative py-24 px-6 md:px-20 bg-gradient-to-br from-[#E6D8C3] via-[#f3e8d1] to-[#E6D8C3] overflow-hidden"
    >
      {/* Soft glowing background light */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.5),transparent_70%)] pointer-events-none"></div>

      <h2 className="text-5xl font-extrabold text-[#4b2e2e] text-center mb-6 drop-shadow-md">
        🎭 What We Do
      </h2>

      <p className="text-center text-lg text-[#3E2723] max-w-4xl mx-auto mb-16 leading-relaxed">
        At The Umundu Artivism, we blend creativity with community impact through four main pillars:
      </p>

      {/* Continuous auto-scrolling carousel */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-10"
          animate={{
            x: ["0%", "-50%"], // Move left by half the width (since we duplicated)
          }}
          transition={{
            ease: "linear",
            duration: 25, // speed of movement
            repeat: Infinity,
          }}
        >
          {duplicatedImpacts.map((item, idx) => (
            <div
              key={idx}
              className="group relative bg-white rounded-3xl shadow-lg w-[300px] md:w-[280px] lg:w-[300px] p-6 text-center 
                         flex-shrink-0 hover:scale-105 transition-transform duration-500 ease-out"
            >
              {/* Image */}
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-6 border-4 border-[#D4A373] shadow-inner">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={128}
                  height={128}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500 ease-out"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-[#4b2e2e] mb-3 transition-colors duration-300 group-hover:text-[#D4A373]">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-[#3E2723] leading-relaxed text-sm">{item.desc}</p>

              {/* Glowing border on hover */}
              <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-[#D4A373]/60 group-hover:shadow-[0_0_25px_rgba(212,163,115,0.6)] transition-all duration-700 ease-out pointer-events-none"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
