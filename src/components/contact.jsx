import React from 'react'
import { motion } from "framer-motion";


function contact() {
    return (
        <section className="min-h-screen flex items-center justify-center px-10 bg-gradient-to-r bg-violet-400 m-0 p-10">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >

                <div className="grid md:grid-cols-2 gap-10 w-full max-w-6xl">

                    {/* LEFT SIDE */}
                    <div className="flex flex-col justify-center">
                        <p className="text-black font-bold tracking-widest mb-2 text-2xl "><h1>CONTACT</h1></p>

                        <h1 className="text-4xl md:text-6xl font-bold mb-4">
                            Let's Build <br /> Something Great
                        </h1>

                        <p className="text-gray-400 mb-6">
                            Have a project, opportunity or idea? Let's talk.
                        </p>

                        <div className="bg-gray-800 text-red-50 px-5 py-3 rounded-lg w-fit flex items-center gap-2">
                            vishvansh@gmail.com
                        </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="bg-gray-900 p-8 rounded-2xl shadow-lg">

                        <form className="flex flex-col gap-6    ">

                            {/* NAME + EMAIL */}
                            <div className="flex flex-col md:flex-row gap-4">
                                <input

                                    type="text"
                                    placeholder="Your name"
                                    className="flex-1 p-3 rounded-lg bg-gray-800 outline-none"
                                />
                                <input
                                    type="email"
                                    placeholder="you@example.com"
                                    className="flex-1 p-3 rounded-lg bg-gray-800 outline-none"
                                />
                            </div>

                            {/* MESSAGE */}
                            <textarea
                                placeholder="Tell me about the role, project or idea..."
                                rows="5"
                                className="p-3 rounded-lg bg-gray-800 outline-none "
                            ></textarea>

                            {/* BUTTON */}
                            <button className="bg-green-400 text-black py-3 rounded-full font-semibold hover:scale-105 transition">
                                Send Message ✈️
                            </button>

                        </form>

                    </div>

                </div>
            </motion.div>
        </section>
    );
}


export default contact;