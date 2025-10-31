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
            To empower communities through art, awareness campaigns, and safe spaces,
            addressing social challenges with creativity and compassion.
          </p>
          <h3 className="text-3xl font-bold text-[#4b2e2e]">Our Vision</h3>
          <p className="text-[#3E2723]">
            A society where every individual feels supported, inspired, and able to contribute
            meaningfully to their communities through art and dialogue.
          </p>
        </div>
      </div>
    </section>
  );
}
