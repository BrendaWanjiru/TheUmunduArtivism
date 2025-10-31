"use client";

export default function MediaSection() {
  const videos = [
    { id: "nzzRyEjdw7s", title: "The Umundu Artivism Dance Session" },
    { id: "LAXeeuI1ACI", title: "Film Title: Anga - Climate Change Impact" },
    { id: "rqE-L3evBFA", title: "Part 1: Raped at Age 9 / Escaped FGM" },
    { id: "kxjUimZpWGo", title: "COVID-19 Response - The Umundu Artivism" },
    { id: "gmgelDhl0fA", title: "Stage Play - HIV & AIDS / Teenage Pregnancies" },
  ];

  return (
    <section
      id="media"
      className="relative py-20 bg-[#F4E6D0] px-4 sm:px-8 md:px-12 lg:px-20 text-center overflow-hidden"
    >
      {/* subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#EAD8C0]/80 via-[#F4E6D0]/95 to-[#EAD8C0]/80 pointer-events-none"></div>

      <h2 className="relative text-4xl font-bold text-[#4b2e2e] mb-12 z-10">
        Watch Us in Action
      </h2>

      {/* Video Grid */}
      <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 justify-items-center z-10">
        {videos.map((video) => (
          <div
            key={video.id}
            className="w-full max-w-[260px] bg-white overflow-hidden rounded-2xl shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-500 border border-[#E8D2B0]/60"
          >
            {/* video frame */}
            <div className="relative pb-[56.25%] bg-[#EAD8C0]">
              <iframe
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full rounded-t-2xl"
              ></iframe>
            </div>

            {/* footer */}
            <div className="p-3 bg-[#4b2e2e] text-white text-sm font-semibold transition-colors duration-300">
              {video.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
