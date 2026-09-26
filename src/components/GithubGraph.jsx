"use client";

import React from "react";
import {GitHubCalendar} from "react-github-calendar";

export default function GithubGraph() {
  const customTheme = {
    light: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
    dark: ["#1e1e22", "#2e4a1c", "#4c7b2a", "#7cb342", "#a8ff35"],
  };

  return (
    <div className="relative overflow-hidden rounded-2xl border border-neutral-800 bg-[#0c0c0e] p-6 text-white shadow-xl">
      {/* Top Animated Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-lime-400 via-amber-400 to-orange-500 animate-pulse" />

      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xs font-mono tracking-widest text-neutral-400 uppercase">
            GitHub Activity
          </h2>
          <p className="mt-1 text-sm text-neutral-400">
            My coding journey, active projects, and contributions.
          </p>
        </div>

        <a
          href="https://github.com/vishvansh014-cpu"
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-fit items-center gap-2 rounded-full border border-neutral-700 bg-neutral-900/80 px-3 py-1.5 text-xs font-medium text-neutral-300 transition hover:bg-neutral-800 hover:text-white"
        >
          <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>
          VIEW ON GITHUB
        </a>
      </div>

      {/* Metrics Row */}
      <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-4">
        <div>
          <div className="text-3xl font-bold tracking-tight">45</div>
          <div className="text-xs text-neutral-400">Contributions (2026)</div>
        </div>
        <div>
          <div className="text-3xl font-bold tracking-tight">6</div>
          <div className="text-xs text-neutral-400">Public Repositories</div>
        </div>
        <div>
          <div className="text-3xl font-bold tracking-tight">JS / Python</div>
          <div className="text-xs text-neutral-400">Primary Languages</div>
        </div>
      </div>

      <hr className="my-6 border-neutral-800" />

      {/* Heatmap Graph */}
      <div className="flex justify-center overflow-x-auto py-2">
        <GitHubCalendar
          username="vishvansh014-cpu"
          blockSize={12}
          blockMargin={4}
          colorScheme="dark"
          theme={customTheme}
          fontSize={12}
        />
      </div>
    </div>
  );
}