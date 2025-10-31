"use client";
import { useState } from "react";
import { X } from "lucide-react";

export default function CTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("KCB Bank - The Umundu Artivism - 1282013424 (Embu Branch)");
    alert("Account details copied to clipboard!");
  };

  return (
    <section className="relative py-20 bg-gradient-to-r from-[#4b2e2e] to-[#3a2323] text-white text-center px-10 md:px-20 rounded-lg mx-4 md:mx-20 mt-12 shadow-2xl">
      <h2 className="text-4xl font-bold mb-6 drop-shadow-lg">
        “The smallest act of kindness is worth more than the grandest intention.”
      </h2>
      <button
        onClick={() => setIsModalOpen(true)}
        className="mt-6 px-8 py-3 bg-[#D4A373] text-[#4b2e2e] font-semibold rounded-lg shadow-xl hover:bg-[#e0b05f] transition-all"
      >
        Donate / Get Involved
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/40 z-50"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-white text-[#4b2e2e] p-8 rounded-2xl shadow-2xl w-11/12 max-w-md relative animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-[#4b2e2e] hover:text-[#D4A373] transition"
            >
              <X size={24} />
            </button>

            <h3 className="text-2xl font-bold mb-4 text-center">Bank Donation Details</h3>
            <p className="mb-2"><strong>Bank Name:</strong> KCB Bank</p>
            <p className="mb-2"><strong>Account Name:</strong> The Umundu Artivism</p>
            <p className="mb-2"><strong>Account Number:</strong> 1282013424</p>
            <p className="mb-6"><strong>Branch:</strong> Embu Branch</p>

            <p className="text-sm italic mb-6 text-center">
              “Your support helps us keep creativity and community alive.”
            </p>

            <button
              onClick={handleCopy}
              className="px-6 py-3 bg-[#D4A373] text-[#4b2e2e] font-semibold rounded-lg hover:bg-[#e0b05f] transition-all w-full"
            >
              Copy Account Details
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
