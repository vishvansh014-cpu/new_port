import React from 'react'
import { motion } from "framer-motion";


function projects() {
    return (
        <div className="px-10">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div

                    initial={{ opacity: 0, scale: 0 }}          // starts invisible and shrunk to 0
                    whileInView={{ opacity: 1, scale: 1 }}      // grows to full size and visible
                    transition={{ duration: 1.5, ease: "easeOut" }}
                >

                    {/* PROJECT 1 */}
                    <div className="bg-gray-800  text-neutral-50 p-6 rounded-xl shadow hover:scale-105 transition">
                        <h2 className="text-xl font-semibold mb-2">Todo App</h2>

                        <p className="text-gray-400 mb-3">
                            A task manager built with React and LocalStorage to manage daily tasks.
                        </p>

                        <p className="text-sm text-green-400 mb-4">
                            Tech: React, JavaScript, LocalStorage
                        </p>

                        <a
                            href="https://github.com/vishvansh014-cpu/todo_webPage"
                            className="text-blue-400"
                        >
                            View Code →
                        </a>
                    </div>
                </motion.div>

                {/* PROJECT 2 */}
                <motion.div

                    initial={{ opacity: 0, scale: 0 }}          // starts invisible and shrunk to 0
                    whileInView={{ opacity: 1, scale: 1 }}      // grows to full size and visible
                    transition={{ duration: 3, ease: "easeOut" }}
                >
                    <div className="bg-gray-800 text-neutral-50 p-6 rounded-xl shadow hover:scale-105 transition">

                        <h2 className="text-xl font-semibold mb-2">Short URL</h2>

                        <p className="text-gray-400 mb-3">
                            URL shortener using Node.js and MongoDB to convert long URLs into short links.
                        </p>

                        <p className="text-sm text-green-400 mb-4">
                            Tech: Node.js, Express, MongoDB
                        </p>

                        <a
                            href="https://github.com/vishvansh014-cpu/CodeAlpha_ProjectName"
                            className="text-blue-400"
                        >
                            View Code →
                        </a>
                    </div>
                </motion.div>

            </div>
        </div >
    );
}

export default projects;
