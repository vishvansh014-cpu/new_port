import React, { useState } from 'react';
import In from "../assets/in.png";
import Git from "../assets/Git.png";
import Tw from "../assets/tw.webp";

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const email = "vishvansh014@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-transparent text-zinc-100 pt-12 md:pt-20 pb-8 px-4 sm:px-8 md:px-12 border-t border-zinc-800/80">
      <div className="max-w-6xl mx-auto">

        {/* Top Call To Action Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-10 border-b border-zinc-800/60">
          <div>
            {/* Availability Indicator */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#b5f442]/10 border border-[#b5f442]/30 text-[#b5f442] text-xs font-mono mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#b5f442] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#b5f442]"></span>
              </span>
              Available for freelance & full-time work
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Let's create something together.
            </h2>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 w-full sm:w-auto">
            <a
              href={`mailto:${email}`}
              className="flex-1 sm:flex-initial text-center px-5 py-2.5 bg-[#b5f442] text-black font-semibold rounded-xl text-sm hover:bg-[#a1e32d] active:scale-95 transition-all duration-200"
            >
              Connect
            </a>

            <button
              onClick={handleCopyEmail}
              className="flex-1 sm:flex-initial justify-center px-4 py-2.5 bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-700/80 text-zinc-200 rounded-xl font-medium text-sm transition-all duration-200 flex items-center gap-2 active:scale-95"
            >
              {copied ? 'Copied!' : 'Copy Email'}
            </button>
          </div>
        </div>

        {/* Middle Navigation & Socials Section */}
        <div className="py-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">

          {/* Brand Info */}
          <div>
            <span className="text-lg font-bold tracking-wide text-white">Vansh Vishwakarma</span>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1 leading-relaxed">
              Frontend Developer / UI/UX Designer & Backend Developer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 text-sm text-zinc-400 md:justify-end">
            <a
              href="https://github.com/vishvansh014-cpu"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-200"
            >
              <img src={Git} alt="GitHub" className="w-8 h-8 rounded-full object-cover border border-white/10" />
            </a>
            <a
              href="https://www.linkedin.com/in/vansh-vishwakarma-a833843b9/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-200"
            >
              <img src={In} alt="LinkedIn" className="w-11 h-11 rounded-full object-cover border border-white/10" />
            </a>
            <a
              href="https://x.com/vanshvish1412"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-200"
            >
              <img src={Tw} alt="Twitter" className="w-8 h-8 rounded-full object-cover border border-white/10" />
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-zinc-900/80 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-zinc-500 text-center sm:text-left">
          <p>&copy; {currentYear} Vansh Vishwakarma. All rights reserved.</p>
          <p>Designed and developed with React & Tailwind CSS.</p>
        </div>

      </div>
    </footer>
  );
}