import React from "react";
import Photo from "./photo_card.jsx";
import { motion } from "framer-motion";
import TextScramble from "./TextScramble.jsx";
// import ThreeScene from "./ThreeScene";

function Hero() {
  return (
    <section className="min-h-[100dvh] relative overflow-hidden bg-transparent flex items-center py-12 md:py-0">

      {/* 3D BACKGROUND */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {/* <ThreeScene /> */}
      </div>

      {/* MAIN CONTENT CONTAINER */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-10">

        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12">

          {/* LEFT: TEXT CONTENT */}
          <motion.div
            className="w-full max-w-xl text-center md:text-left flex flex-col items-center md:items-start"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <TextScramble />

            <p className="text-gray-300 mt-4 text-base sm:text-lg leading-relaxed max-w-lg">
              Aspiring AI/ML Engineer passionate about building real-world solutions.
            </p>

            <div className="flex gap-4 mt-6 flex-wrap justify-center md:justify-start">
              <a
                href="https://github.com/vishvansh014-cpu"
                className="px-5 py-2.5 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 hover:scale-105 active:scale-95 transition-all duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
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