export default function About() {
  return (
    <div className="w-full text-white py-8">
      {/* Header */}
      <div className="mb-10 text-left">

        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          About Me
        </h2>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Terminal Bio Card */}
        <div className="lg:col-span-2 bg-slate-900/50 border border-slate-800 rounded-2xl p-6 backdrop-blur-md shadow-2xl">
          <div className="flex items-center gap-2 pb-4 mb-4 border-b border-slate-800/80 font-mono text-xs text-slate-400">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
            <span className="ml-2 text-slate-400 font-mono">
              vansh@system:~
            </span>
          </div>

          <div className="space-y-4 text-slate-300 text-base leading-relaxed">
            <p>
              I am an <span className="text-cyan-400 font-semibold">AIML & Software Engineer</span> passionate about building intelligent, real-world applications. My technical background spans Machine Learning, Deep Learning, and Full-Stack Web Development using React and Node.js.
            </p>
            <p>
              Currently, I am heavily focused on strengthening my <span className="text-purple-400 font-mono font-semibold">Data Structures & Algorithms (C++)</span> and backend system architecture to solve complex engineering problems.
            </p>
          </div>

          {/* Social Links */}
          <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/vansh-vishwakarma-a833843b9"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 rounded-lg text-xs font-mono hover:bg-cyan-500/20 transition-all"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/vishvansh014-cpu"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-slate-800 border border-slate-700 text-slate-300 rounded-lg text-xs font-mono hover:bg-slate-700 transition-all"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Right Stats Column */}
        <div className="flex flex-col gap-4">
          
          <div className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-5 backdrop-blur-md flex items-center gap-4">
            <div className="px-3 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-xl text-cyan-400 font-mono text-xs font-bold">
              DSA
            </div>
            <div>
              <h3 className="text-2xl font-extrabold text-white">150+</h3>
              <p className="text-xs text-slate-400 font-mono">Problems Solved</p>
            </div>
          </div>

          <div className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-5 backdrop-blur-md flex items-center gap-4">
            <div className="px-3 py-2 bg-purple-500/10 border border-purple-500/20 rounded-xl text-purple-400 font-mono text-xs font-bold">
              AI/ML
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">Focus Area</h3>
              <p className="text-xs text-slate-400 font-mono">Python, PyTorch, ML Models</p>
            </div>
          </div>

          <div className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-5 backdrop-blur-md">
            <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold mb-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              CURRENT STATUS
            </div>
            <p className="text-xs text-slate-300">
              Open to Software Engineering & AI/ML Opportunities.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}