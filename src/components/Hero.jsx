import React from "react";
import Photo from "./photo_card.jsx";
import { motion } from "framer-motion";
import TextScramble from "./TextScramble.jsx";

function Hero() {
  return (
    // EDITED LINE: Added id="home", replaced min-h-[100dvh] with fit-content, and added pt-24 md:pt-28 to offset fixed navbar
    <section id="home" className="relative w-full overflow-hidden bg-transparent pt-2 md:pt-5 pb-12 ">

      {/* 3D BACKGROUND */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {/* <ThreeScene /> */}
      </div>

      {/* MAIN CONTENT CONTAINER */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-10">

        {/* EDITED LINE: Reduced column layout gap (gap-6 md:gap-10) */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-6 md:gap-10">

          {/* LEFT: TEXT CONTENT */}
          <motion.div
            className="w-full max-w-xl text-center md:text-left flex flex-col items-center md:items-start"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <TextScramble />

            {/* EDITED LINE: Reduced top margin from mt-4 to mt-3 */}
            <p className="text-gray-300 mt-3 text-base sm:text-lg leading-relaxed max-w-lg">
              AIML Engineer focused on building scalable backend systems and solving real-world problems using machine learning.
            </p>
            <p className="text-gray-300 mt-3 text-base sm:text-lg leading-relaxed max-w-lg">
              I build practical projects combining AI/ML and backend development — from data-driven insights to full-stack applications. Currently focused on Data Structures & Algorithms and production-ready projects to prepare for top tech roles.
            </p>

            {/* EDITED LINE: Updated CTA button to match lime accent theme (#b5f442) & reduced top margin to mt-5 */}
            <div className="flex gap-4 mt-5 flex-wrap justify-center md:justify-start">
              <a
                href="https://github.com/vishvansh014-cpu"
                className="px-5 py-2.5 bg-[#D4F23F] text-black font-semibold rounded-lg hover:bg-[#D4F23F] active:scale-95 transition-all duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
              href="/new_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              
              className="ml-2 px-4 py-2.5 border-2 border-[#D4F23F] text-[#D4F23F] hover:bg-[#D4F23F] hover:text-black rounded-full transition-all duration-300 text-sm font-semibold inline-block"
            >
              Resume
            </a>
            </div>
          </motion.div>

          {/* RIGHT: PHOTO CARD */}
          <motion.div
            className="w-full flex justify-center md:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Photo />
          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Hero;