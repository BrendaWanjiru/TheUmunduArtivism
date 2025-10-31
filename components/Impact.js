"use client";
import Image from "next/image";

export default function Impact() {
  const impacts = [
    {
      title: "Community Engagement",
      desc: "We actively engage with communities and schools through awareness campaigns focusing on crucial topics like Sexual and Gender-based Violence, Menstrual Hygiene, and Sexual and Reproductive Health and Rights. Through interactive sessions, we provide education and resources to empower individuals and promote healthier practices.",
      img: "/images/impact1.jpg",
    },
    {
      title: "Safe Haven",
      desc: "In cases of extreme gender-based violence, we offer a secure and supportive environment at our center. Victims can reside with us for up to six months while receiving counseling and vocational training, ensuring they gain the tools needed for self-sufficiency.",
      img: "/images/impact2.jpg",
    },
    {
      title: "Art Awareness",
      desc: "We use compelling artistic creations, such as skits and performances, to spark conversations within communities. These thought-provoking pieces serve as a springboard for discussions on important social issues, using art as a catalyst for change.",
      img: "/images/impact3.jpg",
    },
  ];

  return (
    <section id="impact" className="py-20 bg-[#E6D8C3] px-6 md:px-20">
      <h2 className="text-4xl font-bold text-[#4b2e2e] text-center mb-6">
        Our Impact
      </h2>

      <p className="text-center text-lg text-[#3E2723] max-w-4xl mx-auto mb-12 leading-relaxed">
        At Umundu Artivism, we firmly believe in the transformative potential of art to
        touch hearts, change minds, and spur action. Our multifaceted approach involves
        the following key components:
      </p>

      <div className="grid md:grid-cols-3 gap-10">
        {impacts.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
          >
            <div className="w-40 h-40 rounded-full overflow-hidden flex items-center justify-center bg-[#FAF3E0] mb-6">
              <Image
                src={item.img}
                alt={item.title}
                width={160}
                height={160}
                className="object-cover w-full h-full"
              />
            </div>

            <h3 className="text-2xl font-semibold text-[#4b2e2e] mb-3">
              {item.title}
            </h3>
            <p className="text-[#3E2723] leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
