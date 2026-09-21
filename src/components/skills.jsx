import React from 'react'
import python from "../assets/python.png"
import Cpp from "../assets/c++.jpg"
import JavaScript from "../assets/js.webp"
import ract from "../assets/new.jpg"
import node from "../assets/OIP.webp"
import express from "../assets/exprees.webp"

function skills() {
    return (
        <div className="px-10">

            <h1 className="text-3xl md:text-4xl font-bold mb-10 text-center">
                Skills
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                {/* LANGUAGES */}
                <div>
                    <h2 className="text-xl font-semibold mb-4">Languages</h2>
                    <ul className="space-y-2 text-gray-400">
                        <li className="flex items-center gap-2">
                            <img src={Cpp} alt="C++" className="w-9 h-9" />
                            C++
                        </li>
                        <li className="flex items-center gap-2">
                            <img src={python} alt="python" className="w-9 h-9" />
                            Python
                        </li>
                        <li className="flex items-center gap-2">
                            <img src={JavaScript} alt="Js" className="w-9 h-9" />
                            JavaScript
                        </li>
                        
                    </ul>
                </div>

                {/* WEB DEVELOPMENT */}
                <div>
                    <h2 className="text-xl font-semibold mb-4">Web Development</h2>
                    <ul className="space-y-2 text-gray-400">
                        <li className="flex items-center gap-2">
                            <img src={ract} alt="React" className="w-9 h-9x" />
                            React.js
                        </li>
                        <li className="flex items-center gap-2">
                            <img src={node} alt="node" className="w-15 h-9" />
                            Node.js
                        </li>
                        <li className="flex items-center gap-2">
                            <img src={express} alt="node" className="w-15 h-11" />
                            Express.js
                        </li>
                    </ul>
                </div>

                {/* AIML */}
                <div>
                    <h2 className="text-xl font-semibold mb-4">AIML</h2>
                    <ul className="space-y-2 text-gray-400">
                        <li>Machine Learning</li>
                        <li>Deep Learning</li>
                        <li>Natural Language Processing</li>
                        <li>Keras</li>
                        <li>Sciket Learn</li>
                    </ul>
                </div>

                {/* TOOLS */}
                <div>
                    <h2 className="text-xl font-semibold mb-4">Tools</h2>
                    <ul className="space-y-2 text-gray-400">
                        <li>Git</li>
                        <li>GitHub</li>
                        <li>VS Code</li>
                        <li>Jupyter NoteBook</li>
                        <li>Docker</li>
                    </ul>
                </div>

            </div>
        </div>
    );
}
export default skills;
