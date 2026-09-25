import React from 'react';
import { motion } from 'framer-motion';
import { MagicCard } from './UI/magic-card';

const Highlights = () => {
  return (
    <section className="px-6 md:px-10 py-16 max-w-6xl mx-auto">
      {/* HEADING */}
      <div className="mb-12">
        <p className="text-[#b5f442] text-xs font-mono tracking-widest uppercase">
          CAREER HIGHLIGHTS
        </p>

        <h1 className="text-4xl md:text-6xl font-bold mt-2 text-white">
          Highlights
        </h1>

        <p className="text-gray-400 mt-3 max-w-2xl text-base leading-relaxed">
          A snapshot of my journey so far — building skills in software engineering, machine learning, and problem solving.
        </p>
      </div>

      {/* CARDS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Card 1: DSA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="h-full"
        >
          <MagicCard 
            gradientColor="#b5f44240" 
            gradientSize={150} 
            className="p-6 h-full flex flex-col justify-between"
          >
            <div>
              <p className="text-[#b5f442] text-xs font-mono tracking-widest mb-2 uppercase">
                ACHIEVEMENT
              </p>

              <h2 className="text-xl text-white font-bold mb-3">
                DSA Problem Solving
              </h2>

              <p className="text-white text-sm leading-relaxed mb-6">
                Practicing Data Structures & Algorithms in C++ with focus on arrays, recursion, and problem-solving for product-based companies.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 text-xs border border-[#b5f442]/40 text-[#63f468] rounded-full bg-[#b5f442]/5">
                150+ Problems
              </span>
              <span className="px-3 py-1 text-xs border border-[#b5f442]/40 text-[#63f468] rounded-full bg-white/5">
                LeetCode
              </span>
              <span className="px-3 py-1 text-xs border border-[#b5f442]/40 text-[#63f468] rounded-full bg-white/5">
                CodeForces
              </span>
            </div>
          </MagicCard>
        </motion.div>

        {/* Card 2: ML */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="h-full"
        >
          <MagicCard 
            gradientColor="#b5f44240" 
            gradientSize={150} 
            className="p-6 h-full flex flex-col justify-between"
          >
            <div>
              <p className="text-[#b5f442] text-xs font-mono tracking-widest mb-2 uppercase">
                ACHIEVEMENT
              </p>

              <h2 className="text-xl text-white font-bold mb-3">
                ML Sales Analysis
              </h2>

              <p className="text-white text-sm leading-relaxed mb-6">
                Built a machine learning project using NumPy, Pandas, and visualization libraries to analyze and extract insights from sales data.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 text-xs border border-[#b5f442]/40 text-[#63f468] rounded-full bg-[#b5f442]/5">
                Machine Learning
              </span>
              <span className="px-3 py-1 text-xs border border-[#b5f442]/40 text-[#63f468] rounded-full bg-white/5">
                Data Analysis
              </span>
            </div>
          </MagicCard>
        </motion.div>

        {/* Card 3: Backend */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="h-full"
        >
          <MagicCard 
            gradientColor="#b5f44240" 
            gradientSize={150} 
            className="p-6 h-full flex flex-col justify-between"
          >
            <div>
              <p className="text-[#b5f442] text-xs font-mono tracking-widest mb-2 uppercase">
                ACHIEVEMENT
              </p>

              <h2 className="text-xl text-white font-bold mb-3">
                Short URL Backend
              </h2>

              <p className="text-white text-sm leading-relaxed mb-6">
                Developed a URL shortening service using Node.js, Express, and MongoDB with unique short code generation.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 text-xs border border-[#b5f442]/40 text-[#63f468] rounded-full bg-[#b5f442]/5">
                MongoDB
              </span>
              <span className="px-3 py-1 text-xs border  border-[#b5f442]/40 text-[#63f468] rounded-full bg-white/5">
                React.js
              </span>
              <span className="px-3 py-1 text-xs border  border-[#b5f442]/40 text-[#63f468] rounded-full bg-white/5">
                Tailwind CSS
              </span>
            </div>
          </MagicCard>
        </motion.div>

      </div>
    </section>
  );
};

export default Highlights;