"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import blogs from "../data/blogs";

export default function BlogPreview() {
  const [selectedBlog, setSelectedBlog] = useState(null);
  const modalRef = useRef(null);

  // Close modal when clicking outside content
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setSelectedBlog(null);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  // Convert plain URLs in content to clickable links
  const formatContent = (text) =>
    text.replace(
      /(https?:\/\/[^\s]+)/g,
      (url) =>
        `<a href="${url}" target="_blank" rel="noopener noreferrer" class="text-[#6f4b3e] font-medium underline hover:text-[#4b2e2e]">${url}</a>`
    );

  return (
    <section id="blog" className="py-20 bg-[#FAF3E0] px-6 md:px-20">
      <h2 className="text-4xl font-bold text-[#4b2e2e] text-center mb-14">
        Our Blog
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogs.map((blog) => (
          <motion.div
            key={blog.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300 group"
            whileHover={{ y: -6 }}
            onClick={() => setSelectedBlog(blog)}
          >
            <div className="relative w-full aspect-[16/10] overflow-hidden">
              <Image
                src={blog.img}
                alt={blog.title}
                fill
                className="object-cover object-center group-hover:scale-110 transition-transform duration-500 ease-in-out"
              />
            </div>

            <div className="p-6">
              {blog.category && (
                <span className="inline-block bg-[#D7C3A3]/50 text-[#4b2e2e] text-xs uppercase font-semibold tracking-wider px-3 py-1 rounded-full mb-3">
                  {blog.category}
                </span>
              )}
              <h3 className="text-2xl font-semibold text-[#4b2e2e] mb-1 group-hover:text-[#6f4b3e] transition-colors">
                {blog.title}
              </h3>
              <p className="text-gray-500 text-sm mb-3">
                {blog.date} • By{" "}
                <span className="font-medium text-[#4b2e2e]">
                  {blog.author}
                </span>
              </p>
              <p className="text-gray-700 mb-4 line-clamp-3">{blog.excerpt}</p>
              <span className="mt-3 block text-[#4b2e2e] font-medium hover:underline">
                Read More →
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedBlog && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              ref={modalRef}
              className="bg-white max-w-4xl w-full rounded-2xl shadow-2xl overflow-y-auto max-h-[90vh] p-8 relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <div className="relative w-full aspect-[16/9] mb-6 rounded-lg overflow-hidden">
                <Image
                  src={selectedBlog.img}
                  alt={selectedBlog.title}
                  fill
                  className="object-cover object-center"
                />
              </div>

              {selectedBlog.category && (
                <span className="inline-block bg-[#D7C3A3]/50 text-[#4b2e2e] text-xs uppercase font-semibold tracking-wider px-3 py-1 rounded-full mb-4">
                  {selectedBlog.category}
                </span>
              )}
              <h1 className="text-4xl font-bold text-[#4b2e2e] mb-2">
                {selectedBlog.title}
              </h1>
              <p className="text-gray-600 mb-6">
                {selectedBlog.date} • By{" "}
                <span className="font-medium text-[#4b2e2e]">
                  {selectedBlog.author}
                </span>
              </p>

              <div
                className="text-lg text-gray-800 leading-relaxed whitespace-pre-line"
                dangerouslySetInnerHTML={{
                  __html: formatContent(selectedBlog.content),
                }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
