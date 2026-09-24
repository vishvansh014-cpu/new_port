import React from 'react'
import { motion } from 'framer-motion'

const Highlights = () => {
    return (
        <div>
            <section className="min-h-screen px-10 py-20 bg-gradient-to-r">

                {/* HEADING */}
                <div className="mb-16">
                    <p className="text-green-400 tracking-widest">CAREER HIGHLIGHTS</p>

                    <h1 className="text-5xl text-zinc-50 md:text-6xl font-bold mt-4">
                        Highlights
                    </h1>

                    <p className="text-gray-400 mt-4 max-w-2xl">
                        A snapshot of my journey so far — building skills in software engineering and problem solving.
                    </p>
                </div>

                {/* CARDS */}
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <motion.div

                        initial={{ opacity: 0, scale: 0 }}          // starts invisible and shrunk to 0
                        whileInView={{ opacity: 1, scale: 1 }}      // grows to full size and visible
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <div className="bg-slate-900/40 backdrop-blur-md border border-slate-800/60 rounded-2xl p-6">


                            <p className="text-green-400 text-sm tracking-widest mb-3">
                                ACHIEVEMENT
                            </p>

                            <h2 className="text-2xl text-white font-bold mb-4">
                                DSA Problem Solving
                            </h2>

                            <p className="text-gray-400 mb-6">
                                Practicing Data Structures & Algorithms in C++ with focus on arrays, recursion, and problem-solving for product-based companies.
                            </p>

                            <button className="px-4 py-2 border border-green-400 text-green-400 rounded-full">
                                150+ <br /> Problem
                            </button>

                        </div>
                    </motion.div>
                    {/* Card 2 */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}          // starts invisible and shrunk to 0
                        whileInView={{ opacity: 1, scale: 1 }}      // grows to full size and visible
                        transition={{ duration: 2, ease: "easeOut" }}
                    >
                        <div className="bg-slate-900/40 backdrop-blur-md border border-slate-800/60 rounded-2xl p-6">



                            <p className="text-green-400 text-sm tracking-widest mb-3">
                                ACHIEVEMENT
                            </p>

                            <h2 className="text-2xl text-white font-bold mb-4">
                                ML Sales Analysis
                            </h2>

                            <p className="text-gray-400 mb-6">
                                Built a machine learning project using NumPy, Pandas, and visualization libraries to analyze and extract insights from sales data.
                            </p>

                            <button className="px-4 py-2 border border-green-400 text-green-400 rounded-full">
                                TCS Prime
                            </button>

                        </div>
                    </motion.div>
                    {/* Card 3 */}
                    <motion.div

                        initial={{ opacity: 0, scale: 0 }}          // starts invisible and shrunk to 0
                        whileInView={{ opacity: 1, scale: 1 }}      // grows to full size and visible
                        transition={{ duration: 3, ease: "easeOut" }}
                    >
                        <div className="bg-slate-900/40 backdrop-blur-md border border-slate-800/60 rounded-2xl p-6">

                            <p className="text-green-400 text-sm tracking-widest mb-3">
                                ACHIEVEMENT
                            </p>

                            <h2 className="text-2xl text-white font-bold mb-4">
                                Short URL Backend
                            </h2>

                            <p className="text-gray-400 mb-6">
                                Developed a URL shortening service using Node.js, Express, and MongoDB with unique short code generation.
                            </p>

                            <button className="px-4 py-2 border border-green-400 text-green-400 rounded-full">
                                TCS Prime
                            </button>

                        </div>
                    </motion.div>
                </div>

            </section >
        </div >
    )
}

export default Highlights
