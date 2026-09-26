import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_6ycpdel", // Replace with your Service ID
        "template_id_here", // Replace with your Template ID
        e.target,
        "jTQHnvXEWtBcbyTcw" // Your Public Key
      )
      .then(() => {
        setLoading(false);
        setSuccess(true);
        e.target.reset();
        setTimeout(() => setSuccess(false), 5000);
      })
      .catch((error) => {
        setLoading(false);
        console.error("EmailJS Error:", error);
        alert("Failed to send message. Please try again.");
      });
  };

  return (
    <section className="min-h-screen bg-transparent text-white flex items-center justify-center p-6 md:p-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-5xl grid md:grid-cols-2 gap-12"
      >
        {/* LEFT SIDE: Heading & Direct Info */}
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2">
              Contact
            </h2>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
              Let’s Build <br />
              <span className="text-[#D4F23F]">Intelligent Solutions</span>
            </h1>
            <p className="text-neutral-400 mb-8 max-w-sm">
              Have a project, opportunity, or idea? Reach out directly or fill out the form.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-500">
              Direct Contact
            </span>
            <div className="bg-[#121214] border border-neutral-800 text-neutral-200 px-4 py-3 rounded-xl w-fit flex items-center gap-3 text-sm font-mono">
              <span className="h-2 w-2 rounded-full bg-[#D4F23F] animate-pulse" />
              vishvansh014@gmail.com
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: Styled Dark Form */}
        <div className="bg-[#0b0b0d] border border-neutral-800 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
          {/* Subtle Top Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-lime-400 via-amber-400 to-orange-500" />

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* NAME */}
            <div className="flex flex-col gap-2">
              <label className="text-[11px] font-mono tracking-widest text-neutral-400 uppercase">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="What's your name?"
                required
                className="w-full bg-[#141416] border border-neutral-800 rounded-lg p-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-[#D4F23F] transition"
              />
            </div>

            {/* EMAIL */}
            <div className="flex flex-col gap-2">
              <label className="text-[11px] font-mono tracking-widest text-neutral-400 uppercase">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="where.can.i@reach.you"
                required
                className="w-full bg-[#141416] border border-neutral-800 rounded-lg p-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-[#a8ff35] transition"
              />
            </div>

            {/* SUBJECT DROPDOWN */}
            <div className="flex flex-col gap-2">
              <label className="text-[11px] font-mono tracking-widest text-neutral-400 uppercase">
                Subject
              </label>
              <select
                name="subject"
                className="w-full bg-[#141416] border border-neutral-800 rounded-lg p-3 text-sm text-neutral-300 focus:outline-none focus:border-[#a8ff35] transition cursor-pointer"
              >
                <option value="General Inquiry">I need help with a project...</option>
                <option value="Job Opportunity">Full-time / Freelance role</option>
                <option value="Collaboration">Open Source / Collaboration</option>
              </select>
            </div>

            {/* MESSAGE */}
            <div className="flex flex-col gap-2">
              <label className="text-[11px] font-mono tracking-widest text-neutral-400 uppercase">
                Message
              </label>
              <textarea
                name="message"
                rows="4"
                placeholder="What's it about? A few sentences of context are plenty."
                required
                className="w-full bg-[#141416] border border-neutral-800 rounded-lg p-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-[#a8ff35] transition resize-none"
              />
            </div>

            {/* CONSENT CHECKBOX */}
            <div className="flex items-start gap-3 mt-1">
              <input
                type="checkbox"
                id="consent"
                required
                className="mt-1 accent-[#a8ff35] cursor-pointer"
              />
              <label htmlFor="consent" className="text-xs text-neutral-400 leading-relaxed cursor-pointer">
                I agree that Vishvansh may store my name and email address to reply to this message.
              </label>
            </div>

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="mt-2 w-full bg-[#D4F23F] text-black font-semibold py-3 px-6 rounded-lg hover:bg-[#b8ff52] transition-colors disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message ✈️"}
            </button>

            {/* SUCCESS MESSAGE */}
            {success && (
              <p className="text-center text-xs text-[#D4F23F] font-mono mt-1">
                ✓ Message sent successfully!
              </p>
            )}
          </form>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;