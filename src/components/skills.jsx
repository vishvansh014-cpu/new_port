import React from 'react'
import python from "../assets/python.png"
import Cpp from "../assets/c++.jpg"
import JavaScript from "../assets/js.webp"
import ract from "../assets/new.jpg"
import node from "../assets/OIP.webp"
import express from "../assets/exprees.webp"
import { motion } from "framer-motion";

function Skills() {
    return (
        <div className="px-10">
            {/* Heading */}
            <motion.div
                initial={{ opacity: 0, y: -80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-3xl md:text-4xl font-bold mb-10 text-center">
                    Skills
                </h1>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                
                {/* LANGUAGES - from left */}
                <motion.div
                    initial={{ opacity: 0, x: -80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-xl font-semibold mb-4">Languages</h2>
                    <ul className="space-y-2 text-gray-400">
                        <li className="flex items-center gap-2">
                            <img src={Cpp} alt="C++" className="w-9 h-9" /> C++
                        </li>
                        <li className="flex items-center gap-2">
                            <img src={python} alt="python" className="w-9 h-9" /> Python
                        </li>
                        <li className="flex items-center gap-2">
                            <img src={JavaScript} alt="Js" className="w-9 h-9" /> JavaScript
                        </li>
                    </ul>
                </motion.div>

                {/* AIML - from right */}
                <motion.div
                    initial={{ opacity: 0, x: 80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-xl font-semibold mb-4">AIML</h2>
                    <ul className="space-y-2 text-gray-400">
                        <li>Machine Learning</li>
                        <li>Deep Learning</li>
                        <li>Natural Language Processing</li>
                        <li>Keras</li>
                        <li>Scikit Learn</li>
                    </ul>
                </motion.div>

                {/* WEB DEVELOPMENT - from left */}
                <motion.div
                    initial={{ opacity: 0, x: -80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-xl font-semibold mb-4">Web Development</h2>
                    <ul className="space-y-2 text-gray-400">
                        <li className="flex items-center gap-2">
                            <img src={ract} alt="React" className="w-9 h-9" /> React.js
                        </li>
                        <li className="flex items-center gap-2">
                            <img src={node} alt="node" className="w-15 h-9" /> Node.js
                        </li>
                        <li className="flex items-center gap-2">
                            <img src={express} alt="express" className="w-15 h-11" /> Express.js
                        </li>
                    </ul>
                </motion.div>

                {/* TOOLS - from right */}
                <motion.div
                    initial={{ opacity: 0, x: 80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-xl font-semibold mb-4">Tools</h2>
                    <ul className="space-y-2 text-gray-400">
                        <li>Git</li>
                        <li>GitHub</li>
                        <li>VS Code</li>
                        <li>Jupyter Notebook</li>
                        <li>Docker</li>
                    </ul>
                </motion.div>
            </div>
        </div>
    );
}

export default Skills;
