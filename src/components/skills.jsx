import React from 'react'

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
            <li>C++</li>
            <li>Python</li>
            <li>JavaScript</li>
          </ul>
        </div>

        {/* WEB DEVELOPMENT */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Web Development</h2>
          <ul className="space-y-2 text-gray-400">
            <li>React</li>
            <li>Node.js</li>
            <li>Express</li>
          </ul>
        </div>

        {/* AIML */}
        <div>
          <h2 className="text-xl font-semibold mb-4">AIML</h2>
          <ul className="space-y-2 text-gray-400">
            <li>NumPy</li>
            <li>Pandas</li>
            <li>Matplotlib</li>
          </ul>
        </div>

        {/* TOOLS */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Tools</h2>
          <ul className="space-y-2 text-gray-400">
            <li>Git</li>
            <li>GitHub</li>
          </ul>
        </div>

      </div>
    </div>
  );
}
export default skills;
