"use client";
import Image from "next/image";

export default function MissionVision() {
  return (
    <section id="mission" className="py-20 bg-[#FAF3E0] px-10 md:px-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <Image
            src="/images/mission.jpg"
            alt="Mission"
            width={500}
            height={350}
            className="rounded-xl shadow-lg"
          />
        </div>
        <div className="space-y-6">
          <h3 className="text-3xl font-bold text-[#4b2e2e]">Our Mission</h3>
          <p className="text-[#3E2723]">
            To use art and digital innovation as tools for youth and women empowerment, mental wellness, 
            and social transformation in underserved communities.
          </p>
          <h3 className="text-3xl font-bold text-[#4b2e2e]">Our Vision</h3>
          <p className="text-[#3E2723]">
            A society where creativity drives equality, mental well-being, and sustainable 
            empowerment for youth and women through the power of art and technology.
          </p>
        </div>
      </div>
    </section>
  );
}
