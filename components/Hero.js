"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-[90vh] w-full flex items-center justify-center text-center"
    >
      {/* Background image */}
      <Image
        src="/images/hero1.jpg"
        alt="Umundu community work"
        fill
        className="object-cover"
        priority
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#4b2e2e]/70 to-[#FAF3E0]/40"></div>

      {/* Text */}
      <div className="relative z-10 max-w-3xl text-white px-6">
        <h1 className="text-5xl md:text-7xl font-extrabold drop-shadow-lg">
          The Spirit of Togetherness
        </h1>
        <p className="mt-6 text-lg md:text-xl drop-shadow-md">
          Using art to touch hearts, change minds, and spur action across communities.
        </p>
        <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
          <button className="px-6 py-3 bg-[#D4A373] text-[#3E2723] font-semibold rounded-lg shadow-lg hover:bg-[#c48f5a] transition-all">
            Get Involved
          </button>
          <button className="px-6 py-3 bg-white text-[#4b2e2e] font-semibold rounded-lg shadow-lg hover:bg-[#f5f2eb] transition-all">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
