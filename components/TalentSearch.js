"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function TalentSearch() {
  const [showModal, setShowModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleOpenModal = (category) => {
    setSelectedCategory(category);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedCategory("");
  };

  const talents = [
    {
      title: "Acting & Performance",
      desc: "Expressing emotions and stories through captivating performances.",
      img: "/images/talent1.jpg",
    },
    {
      title: "Music & Instruments",
      desc: "Encouraging vocalists and instrumentalists to develop their craft.",
      img: "/images/talent2.jpg",
    },
    {
      title: "Dance & Creativity",
      desc: "Inspiring dancers to tell stories and connect through movement.",
      img: "/images/talent3.jpg",
    },
  ];

  return (
    <section id="talent" className="py-20 bg-[#FAF3E0] px-10 md:px-20 relative">
      <h2 className="text-4xl font-bold text-[#4b2e2e] text-center mb-8">
        Talent Search: Nurturing Talent
      </h2>

      <p className="text-center text-lg text-[#3E2723] max-w-3xl mx-auto mb-12 leading-relaxed">
        We are passionate about nurturing the creative talents of the individuals we
        work with. Our programs provide opportunities for artists and creatives to hone
        their skills and gain exposure in the broader creative world.
      </p>

      <p className="text-center text-md text-[#3E2723] max-w-3xl mx-auto mb-16 leading-relaxed">
        We are looking for persons who believe they can act, sing, paint, do make-up,
        play an instrument, or dance. If you fall under any of these, feel free to apply
        using the form below.
      </p>

      {/* Talent Cards */}
      <div className="grid md:grid-cols-3 gap-10">
        {talents.map((talent, idx) => (
          <motion.div
            key={idx}
            className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition-transform"
            whileHover={{ y: -5 }}
          >
            <div className="w-48 h-48 rounded-full overflow-hidden mb-6 bg-[#E6D8C3] flex items-center justify-center">
              <Image
                src={talent.img}
                width={192}
                height={192}
                alt={talent.title}
                className="object-contain w-full h-full"
              />
            </div>
            <h3 className="text-2xl font-semibold text-[#4b2e2e] mb-2">
              {talent.title}
            </h3>
            <p className="text-[#3E2723] text-sm mb-4">{talent.desc}</p>

            <motion.button
              onClick={() => handleOpenModal(talent.title)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="mt-auto bg-[#6B4226] text-white px-5 py-2 rounded-full text-sm font-medium shadow-md hover:bg-[#4b2e2e] transition"
            >
              Apply Now
            </motion.button>
          </motion.div>
        ))}
      </div>

      {/* Talent Sources */}
      <div className="mt-20 text-center">
        <h4 className="text-2xl font-bold text-[#4b2e2e] mb-6">
          Our Talents Come From
        </h4>
        <div className="flex flex-wrap justify-center gap-4 text-[#3E2723]">
          <div className="bg-white px-6 py-3 rounded-full shadow-md">🎓 University of Embu</div>
          <div className="bg-white px-6 py-3 rounded-full shadow-md">🏫 Embu County Colleges</div>
          <div className="bg-white px-6 py-3 rounded-full shadow-md">🏘️ Community Members</div>
          <div className="bg-white px-6 py-3 rounded-full shadow-md">👨‍👩‍👧 Family & Friends</div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-2xl p-10 w-[90%] max-w-lg relative border border-[#6B4226]"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <button
                onClick={handleCloseModal}
                className="absolute top-3 right-4 text-gray-500 hover:text-red-600 text-2xl"
              >
                ✕
              </button>
              <h3 className="text-2xl font-bold text-[#4b2e2e] mb-6 text-center">
                Apply for {selectedCategory}
              </h3>

              <form className="space-y-4">
                <div>
                  <label className="block text-[#3E2723] font-medium mb-1">Full Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full border border-[#D7CCC8] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#6B4226]"
                  />
                </div>
                <div>
                  <label className="block text-[#3E2723] font-medium mb-1">Email</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full border border-[#D7CCC8] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#6B4226]"
                  />
                </div>
                <div>
                  <label className="block text-[#3E2723] font-medium mb-1">
                    Talent Category
                  </label>
                  <select
                    defaultValue={selectedCategory}
                    className="w-full border border-[#D7CCC8] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#6B4226]"
                  >
                    <option value="">Select Category</option>
                    <option>Acting & Performance</option>
                    <option>Music & Instruments</option>
                    <option>Dance & Creativity</option>
                    <option>Painting / Makeup</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[#3E2723] font-medium mb-1">Message / Bio</label>
                  <textarea
                    rows="3"
                    placeholder="Tell us a bit about your talent..."
                    className="w-full border border-[#D7CCC8] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#6B4226]"
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-[#6B4226] text-white py-3 rounded-lg font-semibold hover:bg-[#4b2e2e] transition"
                >
                  Submit Application
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
