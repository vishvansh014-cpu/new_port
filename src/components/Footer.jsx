import React, { useState } from 'react';
import In from "../assets/in.png"
import Git from "../assets/Git.png"
import Tw from "../assets/tw.webp"

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
    <footer className="bg-transparent text-zinc-100 pt-16 pb-8 px-6 md:px-12 border-t border-zinc-800">
      <div className="max-w-6xl mx-auto">

        {/* Top Call To Action Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-12 border-b border-zinc-800">
          <div>
            {/* Availability Indicator */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-medium mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Available for freelance & full-time work
            </div>

            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Let's create something together.
            </h2>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3">
            <a
              href={`mailto:${email}`}
              className="px-5 py-2.5 bg-white text-zinc-900 rounded-lg font-medium text-sm hover:bg-zinc-200 transition-colors"
            >
              Connect
            </a>

            <button
              onClick={handleCopyEmail}
              className="px-4 py-2.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-300 rounded-lg font-medium text-sm transition-colors flex items-center gap-2"
            >
              {copied ? 'Copied!' : 'Copy Email'}
            </button>
          </div>
        </div>

        {/* Middle Navigation & Socials Section */}
        <div className="py-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

          {/* Brand Info */}
          <div>
            <span className="text-lg font-semibold tracking-wide">Vansh Vishwakarma</span>
            <p className="text-sm text-zinc-400 mt-1">
              Frontend Developer/UI/UX Designer & Backend Developer
            </p>
          </div>


          {/* Social Links */}
          <div className="flex items-center gap-4 text-sm text-zinc-400 md:justify-end">
            <a
              href="https://github.com/vishvansh014-cpu"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <img src={Git} alt="Linkedin" className='w-8 h-8 rounded-full' />
            </a>
            <a
              href="https://www.linkedin.com/in/vansh-vishwakarma-a833843b9/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <img src={In} alt="Linkedin" className='w-10 h-10' />
            </a>
            <a
              href="https://x.com/vanshvish1412"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <img src={Tw} alt="Linkedin" className='w-8 h-8 rounded-full' />
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-zinc-900 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-zinc-500">
          <p>&copy; {currentYear} All rights reserved.</p>
          <p>Designed and developed with React & Tailwind CSS.</p>
        </div>

      </div>
    </footer>
  );
}