import React from 'react'
import Photo from './photo_card.jsx'

function Hero() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between w-full px-10">

            {/* LEFT SIDE */}
            <div className="max-w-xl">
                <h1 className="text-4xl font-bold">
                    Hi, I'm Vansh 👋
                </h1>

                <h2 className="text-2xl text-green-400 mt-4">
                    AIML + Backend Developer
                </h2>

                <p className="mt-4 text-gray-400">
                    I build real-world projects using ML and Web Dev.
                </p>

                <div className="mt-6 flex gap-4">
                    <a href="#projects" className="bg-green-500 px-5 py-2 rounded">
                        Projects
                    </a>
                </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="mt-10 md:mt-0">
                <Photo />
            </div>

        </div>
    );
}

export default Hero
