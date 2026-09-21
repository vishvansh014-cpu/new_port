import React from 'react'

function about() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between px-10 gap-10">

            {/* LEFT SIDE (TEXT) */}
            <div className="max-w-xl">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                    About Me
                </h1>

                <p className="text-black mb-4">
                    I am an AIML student passionate about building real-world applications.

                    I have experience in Python, Machine Learning, and Web Development using React and Node.js.

                    I have built projects like a Todo App and a URL Shortener.

                    Currently, I am focusing on DSA and backend development to prepare for placements.
                </p>

                <p className="text-black mb-4">
                    I have worked on projects like a Todo App and a URL Shortener using React and Node.js.
                </p>

                <p className="text-black">
                    Currently, I am focusing on Data Structures and Algorithms and backend development.
                </p>
            </div>

            {/* RIGHT SIDE (OPTIONAL IMAGE OR CARD) */}
            <div>
                <img
                    src="/your-image.png"
                    alt="about"
                    className="w-64 h-64 rounded-xl object-cover"
                />
            </div>

        </div>
    );
}

export default about;
