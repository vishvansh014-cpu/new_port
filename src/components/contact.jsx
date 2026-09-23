import React from 'react'
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

function Contact() {

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_6ycpdel",     // replace this
      "__ejs-test-mail-service__",    // replace this
      e.target,
      "jTQHnvXEWtBcbyTcw"      // replace this
    ).then(() => {
      alert("Message sent!");
    }).catch((error) => {
      console.log(error);
      
    });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-10 bg-gradient-to-r bg-violet-400 m-0 p-10">

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >

        <div className="grid md:grid-cols-2 gap-10 w-full max-w-6xl">

          {/* LEFT SIDE */}
          <div className="flex flex-col justify-center">
            <h1 className="text-black font-bold tracking-widest mb-2 text-2xl">
              CONTACT
            </h1>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Let’s Build <br />Intelligent Solutions
            </h1>

            <p className="text-gray-400 mb-6">
              Have a project, opportunity or idea? Let's talk.
            </p>

            <div className="bg-gray-800 text-red-50 px-5 py-3 rounded-lg w-fit flex items-center gap-2">
              vishvansh@gmail.com
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="bg-gray-900 p-8 rounded-2xl shadow-lg">

            {/* ✅ IMPORTANT: onSubmit added */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">

              {/* NAME + EMAIL */}
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  name="name"   // ✅ important
                  placeholder="Your name"
                  className="flex-1 p-3 rounded-lg bg-gray-800 text-white hover:scale-105 outline-none"
                  required
                />
                <input
                  type="email"
                  name="email"   // ✅ important
                  placeholder="you Email ID"
                  className="flex-1 p-3 rounded-lg bg-gray-800 text-white hover:scale-105 outline-none"
                  required
                />
              </div>

              {/* MESSAGE */}
              <textarea
                name="message"   // ✅ important
                placeholder="Message.."
                rows="5"
                className="p-3 rounded-lg bg-gray-800 resize-none overflow-y-scroll scrollbar-hide text-white hover:scale-105 outline-none "
                required
              ></textarea>

              {/* BUTTON */}
              <button
                type="submit"   // ✅ important
                className="bg-green-400 text-black py-3 rounded-full font-semibold hover:scale-105 transition"
              >
                Send Message ✈️
              </button>

            </form>

          </div>

        </div>
      </motion.div>
    </section>
  );
}

export default Contact; 