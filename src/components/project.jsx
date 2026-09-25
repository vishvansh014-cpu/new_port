import React from 'react';
import { motion } from 'framer-motion';
import { MagicCard } from './UI/magic-card';

function Projects() {
  return (
    // EDITED LINE: Standardized section container with responsive padding (px-4 sm:px-8 md:px-12) & max width
    <section id="projects" className="px-4 sm:px-8 md:px-12 py-12 md:py-20 max-w-6xl mx-auto">
      
      {/* SECTION HEADING */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* EDITED LINE: Responsive headline scaling (text-3xl -> sm:text-4xl -> md:text-5xl) with adjusted bottom margin */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-center mb-10 md:mb-14 text-white">
          Projects
        </h2>
      </motion.div>

      {/* RESPONSIVE GRID */}
      {/* EDITED LINE: Mobile-first 1-column layout scaling to 2-columns on tablet/desktop (grid-cols-1 md:grid-cols-2) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        
        {/* PROJECT 1 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          // EDITED LINE: Added h-full to motion wrapper so card stretches to full height in grid
          className="h-full"
        >
          <MagicCard 
            gradientColor="#b5f442" 
            gradientSize={220} 
            // EDITED LINE: Added responsive internal card padding (p-5 sm:p-6)
            className="p-5 sm:p-6 h-full flex flex-col justify-between"
          >
            <div>
              {/* Header Badge */}
              {/* EDITED LINE: Flex-wrap header allows long title or badge to drop down on small screens without overlapping */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <h3 className="text-xl sm:text-2xl font-bold text-white">Todo App</h3>
                <span className="text-xs font-mono text-[#b5f442] border border-[#b5f442]/30 bg-[#b5f442]/10 px-2.5 py-1 rounded-full uppercase tracking-wider">
                  FRONTEND
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-300 mb-6 text-sm sm:text-base leading-relaxed">
                A task manager built with React and LocalStorage to manage daily tasks seamlessly.
              </p>
            </div>

            {/* Footer Tech Stack & Link */}
            <div className="pt-2 border-t border-white/5">
              {/* EDITED LINE: Converted text list into responsive tech pill tags matching Skills section style */}
              <div className="mb-5">
                <span className="text-xs font-mono text-gray-400 block mb-2">Technologies Used:</span>
                <div className="flex flex-wrap gap-1.5 text-xs">
                  {["React", "JavaScript", "LocalStorage"].map((tech) => (
                    <span key={tech} className="px-2.5 py-1 border border-white/10 bg-white/5 rounded-md text-gray-300 font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* EDITED LINE: Touch-friendly CTA button with clear hit box and hover animations */}
              <a
                href="https://github.com/vishvansh014-cpu/todo_webPage"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#b5f442] hover:text-[#a1e32d] hover:translate-x-1 transition-all duration-200 focus:outline-none"
              >
                <span>View Source Code</span>
                <span>&rarr;</span>
              </a>
            </div>
          </MagicCard>
        </motion.div>

        {/* PROJECT 2 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          // EDITED LINE: Added h-full to motion wrapper so card stretches to full height in grid
          className="h-full"
        >
          <MagicCard 
            gradientColor="#b5f442" 
            gradientSize={220} 
            // EDITED LINE: Added responsive internal card padding (p-5 sm:p-6)
            className="p-5 sm:p-6 h-full flex flex-col justify-between"
          >
            <div>
              {/* Header Badge */}
              {/* EDITED LINE: Flex-wrap header allows long title or badge to drop down on small screens without overlapping */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <h3 className="text-xl sm:text-2xl font-bold text-white">Short URL</h3>
                <span className="text-xs font-mono text-[#b5f442] border border-[#b5f442]/30 bg-[#b5f442]/10 px-2.5 py-1 rounded-full uppercase tracking-wider">
                  BACKEND
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-300 mb-6 text-sm sm:text-base leading-relaxed">
                URL shortener using Node.js and MongoDB to convert long URLs into fast short links.
              </p>
            </div>

            {/* Footer Tech Stack & Link */}
            <div className="pt-2 border-t border-white/5">
              {/* EDITED LINE: Converted text list into responsive tech pill tags matching Skills section style */}
              <div className="mb-5">
                <span className="text-xs font-mono text-gray-400 block mb-2">Technologies Used:</span>
                <div className="flex flex-wrap gap-1.5 text-xs">
                  {["Node.js", "Express", "MongoDB"].map((tech) => (
                    <span key={tech} className="px-2.5 py-1 border border-white/10 bg-white/5 rounded-md text-gray-300 font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* EDITED LINE: Touch-friendly CTA button with clear hit box and hover animations */}
              <a
                href="https://github.com/vishvansh014-cpu/CodeAlpha_ProjectName"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#b5f442] hover:text-[#a1e32d] hover:translate-x-1 transition-all duration-200 focus:outline-none"
              >
                <span>View Source Code</span>
                <span>&rarr;</span>
              </a>
            </div>
          </MagicCard>
        </motion.div>

      </div>
    </section>
  );
}

export default Projects;