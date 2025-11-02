"use client";
import { useState } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function CTA() {
  const [modalType, setModalType] = useState(null); // "donate" | "volunteer" | "partnership"
  const [volunteerForm, setVolunteerForm] = useState({
    name: "",
    email: "",
    phone: "",
    interests: "",
  });

  const [partnershipForm, setPartnershipForm] = useState({
    orgName: "",
    contactPerson: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleCopy = () => {
    navigator.clipboard.writeText(
      "KCB Bank - The Umundu Artivism - 1282013424 (Embu Branch)"
    );
    alert("Account details copied to clipboard!");
  };

  const closeModal = () => setModalType(null);

  return (
    <section className="relative py-20 bg-gradient-to-br from-[#4b2e2e] via-[#5c3737] to-[#3a2323] text-white text-center px-10 md:px-20 rounded-lg mx-4 md:mx-20 mt-12 shadow-2xl overflow-hidden">
      <h2 className="text-4xl font-bold mb-6 drop-shadow-lg">
        🌍 Join Us
      </h2>
      <h4 className="text-1xl drop-shadow-lg">
        “Whether you’re a young creative, a woman seeking empowerment, or a partner looking to make an impact, you can be part of our journey to make change through creativity. 
        
        Together, we can continue empowering minds, uplifting voices, and transforming lives through Artivism.”
      </h4>

      <div className="flex justify-center gap-6">
        <button
          onClick={() => setModalType("getInvolved")}
          className="mt-6 px-8 py-3 bg-[#D4A373] text-[#4b2e2e] font-semibold rounded-lg shadow-xl hover:bg-[#e0b05f] transition-all"
        >
          Get Involved
        </button>

        <button
          onClick={() => setModalType("donate")}
          className="mt-6 px-8 py-3 bg-[#FFF8E7] text-[#4b2e2e] font-semibold rounded-lg shadow-xl hover:bg-[#e0b05f] transition-all"
        >
          Donate
        </button>
      </div>

      {/* MODALS */}
      <AnimatePresence>
        {modalType && (
          <motion.div
            key="modal"
            className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="bg-white text-[#4b2e2e] p-8 rounded-2xl shadow-2xl w-11/12 max-w-3xl relative overflow-y-auto max-h-[90vh]"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-[#4b2e2e] hover:text-[#D4A373] transition"
              >
                <X size={24} />
              </button>

              {/* DONATE MODAL */}
              {modalType === "donate" && (
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-center">
                    Mpesa Details (Bank Details Available Upon Request)
                  </h3>
                  <p className="mb-2">
                    <strong>Account Name:</strong> The Umundu Artivism
                  </p>
                  <p className="mb-2">
                    <strong>Phone Number:</strong> +254708598009
                  </p>

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
              )}

              {/* GET INVOLVED MODAL */}
              {modalType === "getInvolved" && (
                <div className="space-y-8">
                  <h3 className="text-3xl font-bold text-center mb-4">
                    Get Involved with Umundu Artivism
                  </h3>

                  <div className="grid md:grid-cols-2 gap-8">
                    {/* VOLUNTEER FORM */}
                    <div className="bg-[#FAF3E0] p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
                      <h4 className="text-xl font-semibold mb-3 text-[#4b2e2e]">
                        Volunteer Form
                      </h4>
                      <form className="space-y-3">
                        <input
                          type="text"
                          placeholder="Full Name"
                          className="w-full p-2 rounded border border-gray-300"
                          value={volunteerForm.name}
                          onChange={(e) =>
                            setVolunteerForm({
                              ...volunteerForm,
                              name: e.target.value,
                            })
                          }
                        />
                        <input
                          type="email"
                          placeholder="Email"
                          className="w-full p-2 rounded border border-gray-300"
                          value={volunteerForm.email}
                          onChange={(e) =>
                            setVolunteerForm({
                              ...volunteerForm,
                              email: e.target.value,
                            })
                          }
                        />
                        <input
                          type="text"
                          placeholder="Phone Number"
                          className="w-full p-2 rounded border border-gray-300"
                          value={volunteerForm.phone}
                          onChange={(e) =>
                            setVolunteerForm({
                              ...volunteerForm,
                              phone: e.target.value,
                            })
                          }
                        />
                        <textarea
                          placeholder="Your Interests (e.g., Art, Digital Skills, Advocacy)"
                          className="w-full p-2 rounded border border-gray-300"
                          value={volunteerForm.interests}
                          onChange={(e) =>
                            setVolunteerForm({
                              ...volunteerForm,
                              interests: e.target.value,
                            })
                          }
                        />
                        <button
                          type="button"
                          onClick={() =>
                            alert(
                              `Thank you, ${volunteerForm.name}! We’ll contact you soon.`
                            )
                          }
                          className="w-full bg-[#D4A373] text-[#4b2e2e] py-2 rounded font-semibold hover:bg-[#e0b05f] transition"
                        >
                          Submit
                        </button>
                      </form>
                    </div>

                    {/* PARTNERSHIP FORM */}
                    <div className="bg-[#F2E7D3] p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
                      <h4 className="text-xl font-semibold mb-3 text-[#4b2e2e]">
                        Partnership Form
                      </h4>
                      <form className="space-y-3">
                        <input
                          type="text"
                          placeholder="Organization Name"
                          className="w-full p-2 rounded border border-gray-300"
                          value={partnershipForm.orgName}
                          onChange={(e) =>
                            setPartnershipForm({
                              ...partnershipForm,
                              orgName: e.target.value,
                            })
                          }
                        />
                        <input
                          type="text"
                          placeholder="Contact Person"
                          className="w-full p-2 rounded border border-gray-300"
                          value={partnershipForm.contactPerson}
                          onChange={(e) =>
                            setPartnershipForm({
                              ...partnershipForm,
                              contactPerson: e.target.value,
                            })
                          }
                        />
                        <input
                          type="email"
                          placeholder="Email"
                          className="w-full p-2 rounded border border-gray-300"
                          value={partnershipForm.email}
                          onChange={(e) =>
                            setPartnershipForm({
                              ...partnershipForm,
                              email: e.target.value,
                            })
                          }
                        />
                        <input
                          type="text"
                          placeholder="Phone Number"
                          className="w-full p-2 rounded border border-gray-300"
                          value={partnershipForm.phone}
                          onChange={(e) =>
                            setPartnershipForm({
                              ...partnershipForm,
                              phone: e.target.value,
                            })
                          }
                        />
                        <textarea
                          placeholder="Message / Area of Partnership"
                          className="w-full p-2 rounded border border-gray-300"
                          value={partnershipForm.message}
                          onChange={(e) =>
                            setPartnershipForm({
                              ...partnershipForm,
                              message: e.target.value,
                            })
                          }
                        />
                        <button
                          type="button"
                          onClick={() =>
                            alert(
                              `Thank you, ${partnershipForm.contactPerson}! We’ll reach out to ${partnershipForm.orgName} soon.`
                            )
                          }
                          className="w-full bg-[#D4A373] text-[#4b2e2e] py-2 rounded font-semibold hover:bg-[#e0b05f] transition"
                        >
                          Submit
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
