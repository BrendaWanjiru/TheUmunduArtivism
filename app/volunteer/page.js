// app/volunteer/page.js
"use client";

import { motion } from "framer-motion";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function VolunteerPage() {
  return (
    <>
      <Header />
      <main className="bg-amber-50 min-h-screen py-10">
        <motion.div
          className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-bold text-center text-brown-800 mb-6">
            Become a Volunteer 🌻
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Join our movement to inspire change through art and storytelling.
          </p>
          <form className="space-y-5">
            <div>
              <label className="block font-medium mb-1">Full Name</label>
              <input type="text" className="w-full border rounded-md p-3 focus:ring-2 focus:ring-amber-600" placeholder="Your name" required />
            </div>
            <div>
              <label className="block font-medium mb-1">Email Address</label>
              <input type="email" className="w-full border rounded-md p-3 focus:ring-2 focus:ring-amber-600" placeholder="you@example.com" required />
            </div>
            <div>
              <label className="block font-medium mb-1">Phone Number</label>
              <input type="tel" className="w-full border rounded-md p-3 focus:ring-2 focus:ring-amber-600" placeholder="+254..." required />
            </div>
            <div>
              <label className="block font-medium mb-1">Why do you want to volunteer?</label>
              <textarea className="w-full border rounded-md p-3 h-28 focus:ring-2 focus:ring-amber-600" placeholder="Tell us what motivates you..." required></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-amber-700 text-white px-6 py-3 rounded-lg w-full font-semibold shadow-md hover:bg-amber-800"
              type="submit"
            >
              Submit Application
            </motion.button>
          </form>
        </motion.div>
      </main>
      <Footer />
    </>
  );
}
