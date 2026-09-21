import React from "react";
import Photo from "./photo_card.jsx";
import { motion } from "framer-motion";

function Hero() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between w-full px-10 min-h-screen">

      {/* LEFT SIDE */}
      <motion.div
        className="max-w-xl"
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold">
          Hi, I'm Vansh 👋
        </h1>

        <h2 className="text-2xl text-green-400 mt-4">
          AIML + Backend Developer
        </h2>

        <p className="mt-4 text-gray-400">
          I build real-world projects using Machine Learning and Web Development.
        </p>

        <div className="mt-6 flex gap-4">
          <a
            href="#projects"
            className="bg-green-500 px-5 py-2 rounded hover:scale-105 transition"
          >
            View Projects
          </a>
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
  );
}

export default Hero;