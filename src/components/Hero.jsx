import React from "react";
import Photo from "./photo_card.jsx";
import { motion } from "framer-motion";
import TextScramble from "./TextScramble.jsx";


function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-[#020617]">

      {/* CARD CONTAINER */}
      <div className="w-full max-w-6xl bg-[#0B1A2A] rounded-2xl p-10 shadow-xl border border-gray-800">

        <div className="flex flex-col md:flex-row items-center justify-between gap-10">

          {/* LEFT SIDE */}
          <motion.div
            className="max-w-xl"
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <TextScramble />

            <p className="text-white
            ">
              AIML student focused on Machine Learning, problem solving, and building real-world applications.
            </p>

            <div className="flex gap-4 mt-6">
              <a href="https://github.com/vishvansh014-cpu" className="px-4 py-2 bg-blue-500 text-white rounded" target="_blank">
                <button>View GitHub</button>
              </a>

              <a
                href="/new_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-500 text-white rounded"
              >
                View Resume
              </a>
              <br />
              <p className="text-white">

                <h1>Open to internships • AIML • Problem Solving
                </h1>
              </p>

            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            className="mt-10 md:mt-0"
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Photo />
          </motion.div>

        </div>
      </div>
    </div>
  );
}

export default Hero;