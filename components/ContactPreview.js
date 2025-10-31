"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaInstagram, FaTwitter, FaLinkedin, FaYoutube, FaWhatsapp, FaPhone } from "react-icons/fa";

export default function ContactPreview() {
  return (
    <section
      id="contact"
      className="relative py-20 bg-gradient-to-br from-[#FAF3E0] to-[#F5F2EB] overflow-hidden"
    >
      {/* Background artistic lights */}
      <div className="absolute -top-10 left-10 w-40 h-40 bg-[#d7ccc8] rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-10 w-56 h-56 bg-[#a1887f] rounded-full blur-3xl opacity-20"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        className="relative max-w-5xl mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center gap-10 z-10"
      >
        {/* Left text */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-4xl font-extrabold text-[#4b2e2e] mb-4 drop-shadow-lg">
            Let’s Connect
          </h2>
          <p className="text-lg text-[#3E2723] mb-6 leading-relaxed">
            Have questions, want to collaborate, or wish to support our work?
            Reach out to us today and be part of <b>“The Spirit of Togetherness.”</b>
          </p>

          {/* Contact buttons */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href="tel:+254708598009"
              className="flex items-center gap-2 px-5 py-3 bg-[#4b2e2e] text-white rounded-lg shadow-md hover:bg-[#3a2323] transition-all"
            >
              <FaPhone /> Call Us
            </a>
            <a
              href="https://wa.me/254708598009"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition-all"
            >
              <FaWhatsapp /> WhatsApp
            </a>
          </div>

          {/* Social media icons */}
          <div className="flex gap-6 mt-6 justify-center md:justify-start">
            <a
              href="https://instagram.com/theumunduartivism"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4b2e2e] text-2xl hover:text-pink-600 transition-all"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com/theumunduartivism"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4b2e2e] text-2xl hover:text-blue-400 transition-all"
            >
              <FaTwitter />
            </a>
            <a
              href="https://linkedin.com/company/theumunduartivism"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4b2e2e] text-2xl hover:text-blue-700 transition-all"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://youtube.com/@theumunduartivism"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4b2e2e] text-2xl hover:text-red-600 transition-all"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Right side decorative card */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex-1 bg-white shadow-2xl rounded-2xl p-8 hover:shadow-[#4b2e2e]/50 transition-all"
        >
          <h3 className="text-2xl font-semibold text-[#4b2e2e] mb-4">
            Quick Info
          </h3>
          <p className="text-[#3E2723]">
            📍 Embu, Kenya <br />
            📧 info@theumunduartivism.org <br />
            📞 +254 708 598 009 <br />
        
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
