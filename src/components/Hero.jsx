import React from "react";
import Photo from "./photo_card.jsx";
import { motion } from "framer-motion";
import TextScramble from "./TextScramble.jsx";
// import ThreeScene from "./ThreeScene";

function Hero() {
  return (
    <section className="h-screen relative overflow-hidden bg-transparent">

      {/* 🔥 3D BACKGROUND */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {/* <ThreeScene /> */}
      </div>

      {/* 🔥 MAIN CONTENT */}
      <div className="relative z-10 h-full flex items-center justify-center px-6 ">

          <div className="flex flex-col md:flex-row items-center justify-between gap-10">

            {/* LEFT */}
            <motion.div
              className="max-w-xl"
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >


              <TextScramble />

              <p className="text-white mt-4">
                Aspiring AI/ML Engineer passionate about building real-world solutions.
              </p>

              <div className="flex gap-4 mt-6 flex-wrap">
                <a
                  href="https://github.com/vishvansh014-cpu"
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:scale-110"
                  target="_blank"
                >
                  GitHub
                </a>

                
              </div>
            </motion.div>

            {/* RIGHT */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
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