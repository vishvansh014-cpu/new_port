import React from 'react';
import python from "../assets/python.png";
import Cpp from "../assets/c++.png";
import JavaScript from "../assets/js.webp";
import ract from "../assets/r.png";
import node from "../assets/node.png";
import express from "../assets/ex.png";
import { motion } from "framer-motion";
import { MagicCard } from "./UI/magic-card";

function Skills() {
  return (
    <div className="px-0 sm:px-8 md:px-12 py-12 max-w-6xl mx-auto">
      {/* HEADING */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-center text-white mb-10">
          Skills
        </h2>
      </motion.div>

      {/* SKILLS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

        {/* 1. LANGUAGES */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <MagicCard gradientColor="#b5f44240" gradientSize={220} className="p-6 h-full">
            <h3 className="text-xl font-bold text-[#b5f442] mb-4 uppercase font-mono tracking-wider">
             Programming Languages
            </h3>
            <ul className="space-y-3 text-gray-300 font-medium">
              <li className="flex items-center gap-3">
                <img src={Cpp} alt="C++" className="w-8 h-8 object-contain" />
                <span>C++</span>
              </li>
              <li className="flex items-center gap-3">
                <img src={python} alt="python" className="w-8 h-8 object-contain" />
                <span>Python</span>
              </li>
              <li className="flex items-center gap-3">
                <img src={JavaScript} alt="JavaScript" className="w-8 h-8 object-contain" />
                <span>JavaScript</span>
              </li>
            </ul>
          </MagicCard>
        </motion.div>

        {/* 2. AIML */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <MagicCard gradientColor="#b5f44240" gradientSize={220} className="p-6 h-full">
            <h3 className="text-xl font-bold text-[#b5f442] mb-4 uppercase font-mono tracking-wider">
              AIML
            </h3>
            <div className="flex flex-wrap gap-2 text-sm">
              {["Machine Learning", "Deep Learning", "Natural Language Processing", "Keras", "Scikit-Learn"].map((skill) => (
                <span key={skill} className="px-3 py-1.5 border border-white/10 bg-white/5 rounded-lg text-gray-300">
                  {skill}
                </span>
              ))}
            </div>
          </MagicCard>
        </motion.div>

        {/* 3. WEB DEVELOPMENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <MagicCard gradientColor="#b5f44240" gradientSize={220} className="p-6 h-full">
            <h3 className="text-xl font-bold text-[#b5f442] mb-4 uppercase font-mono tracking-wider">
              Web Development
            </h3>
            <ul className="space-y-3 text-gray-300 font-medium">
              <li className="flex items-center gap-3">
                <img src={ract} alt="React" className="w-8 h-8 object-contain" />
                <span>React.js</span>
              </li>
              <li className="flex items-center gap-3">
                <img src={node} alt="Node.js" className="w-8 h-8 object-contain" />
                <span>Node.js</span>
              </li>
              <li className="flex items-center gap-3">
                <img src={express} alt="Express.js" className="w-8 h-8 object-contain filter invert" />
                <span>Express.js</span>
              </li>
            </ul>
          </MagicCard>
        </motion.div>

        {/* 4. TOOLS */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <MagicCard gradientColor="#b5f44240" gradientSize={220} className="p-6 h-full">
            <h3 className="text-xl font-bold text-[#b5f442] mb-4 uppercase font-mono tracking-wider">
              Tools & Platforms
            </h3>
            <div className="flex flex-wrap gap-2 text-sm">
              {["Git", "GitHub", "VS Code", "Jupyter Notebook", "Docker"].map((tool) => (
                <span key={tool} className="px-3 py-1.5 border border-white/10 bg-white/5 rounded-lg text-gray-300">
                  {tool}
                </span>
              ))}
            </div>
          </MagicCard>
        </motion.div>

      </div>
    </div>
  );
}

export default Skills;