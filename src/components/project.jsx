import React from 'react'

function projects() {
  return (
    <div className="px-10">

      <h1 className="text-3xl md:text-4xl font-bold mb-10 text-center">
        Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* PROJECT 1 */}
        <div className="bg-gray-800 p-6 rounded-xl shadow hover:scale-105 transition">
          <h2 className="text-xl font-semibold mb-2">Todo App</h2>
          
          <p className="text-gray-400 mb-3">
            A task manager built with React and LocalStorage to manage daily tasks.
          </p>

          <p className="text-sm text-green-400 mb-4">
            Tech: React, JavaScript, LocalStorage
          </p>

          <a
            href="https://github.com/yourusername/todo-app"
            className="text-blue-400"
          >
            View Code →
          </a>
        </div>

        {/* PROJECT 2 */}
        <div className="bg-gray-800 p-6 rounded-xl shadow hover:scale-105 transition">
          <h2 className="text-xl font-semibold mb-2">Short URL</h2>
          
          <p className="text-gray-400 mb-3">
            URL shortener using Node.js and MongoDB to convert long URLs into short links.
          </p>

          <p className="text-sm text-green-400 mb-4">
            Tech: Node.js, Express, MongoDB
          </p>

          <a
            href="https://github.com/yourusername/url-shortener"
            className="text-blue-400"
          >
            View Code →
          </a>
        </div>

      </div>
    </div>
  );
}

export default projects;
