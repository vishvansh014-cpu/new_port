import React from 'react'

const Highlights = () => {
    return (
        <div>
            <section className="min-h-screen px-10 py-20 bg-gradient-to-r from-black via-blue-900 to-black">

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
                        transition={{ duration: 1.5, ease: "easeOut" }}
                    >
                        <div className="bg-[#0B1A2A] border border-gray-800 p-6 rounded-2xl hover:scale-105 transition">


                            <p className="text-green-400 text-sm tracking-widest mb-3">
                                ACHIEVEMENT
                            </p>

                            <h2 className="text-2xl font-bold mb-4">
                                TCS Prime Offer
                            </h2>

                            <p className="text-gray-400 mb-6">
                                Secured offer through strong DSA and problem-solving skills.
                            </p>

                            <button className="px-4 py-2 border border-green-400 text-green-400 rounded-full">
                                TCS Prime
                            </button>

                        </div>
                    </motion.div>
                    {/* Card 2 */}
                    <div className="bg-[#0B1A2A] border border-gray-800 p-6 rounded-2xl hover:scale-105 transition">

                        <p className="text-green-400 text-sm tracking-widest mb-3">
                            ACHIEVEMENT
                        </p>

                        <h2 className="text-2xl font-bold mb-4">
                            TCS Prime Offer
                        </h2>

                        <p className="text-gray-400 mb-6">
                            Secured offer through strong DSA and problem-solving skills.
                        </p>

                        <button className="px-4 py-2 border border-green-400 text-green-400 rounded-full">
                            TCS Prime
                        </button>

                    </div>
                    {/* Card 3 */}
                    <div className="bg-[#0B1A2A] border border-gray-800 p-6 rounded-2xl hover:scale-105 transition">

                        <p className="text-green-400 text-sm tracking-widest mb-3">
                            ACHIEVEMENT
                        </p>

                        <h2 className="text-2xl font-bold mb-4">
                            TCS Prime Offer
                        </h2>

                        <p className="text-gray-400 mb-6">
                            Secured offer through strong DSA and problem-solving skills.
                        </p>

                        <button className="px-4 py-2 border border-green-400 text-green-400 rounded-full">
                            TCS Prime
                        </button>

                    </div>
                </div>

            </section>
        </div>
    )
}

export default Highlights
