import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="py-20 px-10 md:px-20 bg-[#FAF9F6]">
      <h1 className="text-5xl font-extrabold text-[#4b2e2e] mb-12 text-center">
        About Umundu Artivism
      </h1>

      {/* Mission & Vision */}
      <section className="mb-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-[#4b2e2e] mb-4">Our Mission</h2>
          <p className="text-lg text-[#3E2723] leading-relaxed">
            To transform lives through art, awareness, and collective action,
            empowering individuals and fostering inclusive communities.
          </p>
          <h2 className="mt-10 text-3xl font-bold text-[#4b2e2e] mb-4">
            Our Vision
          </h2>
          <p className="text-lg text-[#3E2723] leading-relaxed">
            A world where creativity drives unity, healing, and sustainable
            solutions.
          </p>
        </div>
        <Image
          src="/images/mission.jpg"
          alt="Mission vision"
          width={600}
          height={400}
          className="rounded-3xl shadow-2xl"
        />
      </section>

      {/* Our Impact */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-[#4b2e2e] mb-8 text-center">
          Our Impact
        </h2>
        <p className="text-lg text-[#3E2723] text-center max-w-3xl mx-auto">
          We believe in the power of art to spark conversations and drive
          change. Through campaigns, workshops, safe havens, and talent
          programs, we reach communities with hope, healing, and opportunity.
        </p>
        <div className="grid md:grid-cols-3 gap-10 mt-12">
          {[
            { title: "Community Engagement", img: "/images/engagement.jpg" },
            { title: "Safe Haven", img: "/images/safehaven.jpg" },
            { title: "Talent Search", img: "/images/talent.jpg" },
          ].map((item, i) => (
            <div key={i} className="relative group overflow-hidden rounded-3xl shadow-xl">
              <Image
                src={item.img}
                alt={item.title}
                width={400}
                height={300}
                className="object-cover w-full h-64 transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#4b2e2e]/50 flex items-center justify-center text-white text-xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Partners */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-[#4b2e2e] mb-8 text-center">
          Partners & Collaborations
        </h2>
        <p className="text-center text-lg text-[#3E2723] mb-8">
          We collaborate with universities, colleges, and community groups to
          create lasting impact.
        </p>
        <div className="flex flex-wrap justify-center gap-8">
          {["/images/partner1.png", "/images/partner2.png", "/images/partner3.png"].map(
            (logo, i) => (
              <Image
                key={i}
                src={logo}
                alt={`Partner ${i}`}
                width={150}
                height={80}
                className="grayscale hover:grayscale-0 transition-all"
              />
            )
          )}
        </div>
      </section>
    </div>
  );
}