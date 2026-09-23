import React from "react";
import Photo from "./photo_card.jsx";
import { motion } from "framer-motion";
import TextScramble from "./TextScramble.jsx";


function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-[#020617]">

      {/* CARD CONTAINER */}
      <div className="w-full min-h-19 bg-[#0B1A2A] rounded-2xl p-10 shadow-xl from-blue-700 via-blue-500 to-blue-300">

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
              Aspiring AI/ML Engineer passionate about building real-world solutions using data and technology.
              Currently pursuing B.Tech in Artificial Intelligence & Machine Learning, with strong foundations in DSA, Web Development, and Machine Learning.
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
              <p className="text-white text-xl hover:font-bold hover:text-2xl">
                <h1 >#OPEN TO WORK
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