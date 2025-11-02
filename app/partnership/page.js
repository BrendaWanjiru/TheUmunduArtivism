// app/partnership/page.js
"use client";

import { motion } from "framer-motion";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function PartnershipPage() {
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
            Partner With Us 🤝
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Collaborate with Umundu Artivism to empower youth and transform communities through creativity.
          </p>
          <form className="space-y-5">
            <div>
              <label className="block font-medium mb-1">Organization / Individual Name</label>
              <input type="text" className="w-full border rounded-md p-3 focus:ring-2 focus:ring-amber-600" placeholder="Your organization name" required />
            </div>
            <div>
              <label className="block font-medium mb-1">Email Address</label>
              <input type="email" className="w-full border rounded-md p-3 focus:ring-2 focus:ring-amber-600" placeholder="contact@organization.org" required />
            </div>
            <div>
              <label className="block font-medium mb-1">Phone Number</label>
              <input type="tel" className="w-full border rounded-md p-3 focus:ring-2 focus:ring-amber-600" placeholder="+254..." required />
            </div>
            <div>
              <label className="block font-medium mb-1">Type of Partnership</label>
              <select className="w-full border rounded-md p-3 focus:ring-2 focus:ring-amber-600">
                <option>Funding / Sponsorship</option>
                <option>Creative Collaboration</option>
                <option>Community Outreach</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block font-medium mb-1">Message</label>
              <textarea className="w-full border rounded-md p-3 h-28 focus:ring-2 focus:ring-amber-600" placeholder="Tell us about your collaboration idea..." required></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-amber-700 text-white px-6 py-3 rounded-lg w-full font-semibold shadow-md hover:bg-amber-800"
              type="submit"
            >
              Send Proposal
            </motion.button>
          </form>
        </motion.div>
      </main>
      <Footer />
    </>
  );
}
