"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Partners() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null; // prevent hydration mismatch

  const partners = [
    "/images/partner1.jpg",
    "/images/partner2.png",
    "/images/partner3.jpg",
  ];

  return (
    <section id="partners" className="py-20 bg-[#E6D8C3] px-6 md:px-20 overflow-hidden">
      <h2 className="text-4xl font-bold text-[#4b2e2e] text-center mb-12">
        Our Partners
      </h2>

      <div className="relative w-full overflow-hidden">
        <div className="flex gap-10 animate-marquee whitespace-nowrap">
          {partners.concat(partners).map((logo, idx) => (
            <div key={idx} className="flex-shrink-0 flex items-center justify-center">
              <Image
                src={logo}
                width={150}
                height={100}
                alt={`Partner ${idx + 1}`}
                className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
