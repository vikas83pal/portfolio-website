"use client";

import React, { useEffect, useState } from "react";
import { terminalCommands } from "@/lib/data";

const sectionIds = [
  "home",
  "why-quant",
  "stack",
  "projects",
  "research",
  "contact",
];

export default function EngineeringTerminal() {
  const [currentSection, setCurrentSection] = useState("home");
  const [collapsed, setCollapsed] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight / 3;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollY) {
          setCurrentSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isMounted) return null;

  const cmd = terminalCommands[currentSection] || terminalCommands["home"];

  if (collapsed) {
    return (
      <button
        onClick={() => setCollapsed(false)}
        className="eng-terminal bg-qd-panel border border-qd-border rounded-full w-12 h-12 flex items-center justify-center hover:border-qd-accent transition-all group"
        aria-label="Open engineering terminal"
        id="eng-terminal-toggle"
      >
        <span className="font-mono text-xs text-qd-accent group-hover:scale-110 transition-transform">
          &gt;_
        </span>
      </button>
    );
  }

  return (
    <div className="eng-terminal" id="eng-terminal-panel">
      <div className="terminal-window shadow-2xl shadow-black/30">
        <div className="terminal-header">
          <span className="terminal-dot terminal-dot-red" />
          <span className="terminal-dot terminal-dot-yellow" />
          <span className="terminal-dot terminal-dot-green" />
          <span className="ml-auto font-mono text-[0.55rem] text-qd-muted">
            eng_terminal
          </span>
          <button
            onClick={() => setCollapsed(true)}
            className="ml-2 text-qd-muted hover:text-qd-text transition-colors text-xs"
            aria-label="Minimize terminal"
          >
            ─
          </button>
        </div>
        <div className="terminal-body py-3 px-4">
          <div className="font-mono text-[0.6rem] text-qd-muted mb-2 uppercase tracking-wider">
            section: {currentSection}
          </div>
          <div>
            <span className="terminal-prompt text-xs">{cmd.command}</span>
          </div>
          <div className="text-qd-text/70 text-xs mt-1 whitespace-pre-wrap">
            {cmd.output}
          </div>
          <div className="mt-2">
            <span className="terminal-prompt text-xs">$ </span>
            <span className="terminal-cursor !h-3 !w-1.5" />
          </div>
        </div>
      </div>
    </div>
  );
}
