"use client";

import React, { useEffect, useRef, useState } from "react";

const predefinedCommands: Record<string, string[]> = {
  "uname -a": ["Linux quant-node 6.x x86_64 GNU/Linux"],
  "ps aux | grep engine": [
    "  PID  CMD",
    "  142  quant-engine",
    "  143  market-data",
    "  144  order-router",
    "  145  risk-service",
  ],
  top: [
    "┌─────────────────────────────┐",
    "│  CPU   31%  ████████░░░░░  │",
    "│  MEM   42%  ████████████░  │",
    "│  NET   18 MB/s             │",
    "└─────────────────────────────┘",
  ],
  "./matching_engine --mode=simulation": [
    "[OK]  Market feed connected",
    "[OK]  Order book initialized",
    "[OK]  Risk checks enabled",
    "[RUN] Matching engine active",
  ],
  whoami: ["vikas-pal"],
  "cat /proc/cpuinfo | head": [
    "processor : 0",
    "model name: Intel Core i7-12700K",
    "cpu MHz   : 3600.000",
    "cache size: 25600 KB",
  ],
  "ls -la ./projects": [
    "drwxr-xr-x  chat-app/",
    "drwxr-xr-x  script-gen/",
    "drwxr-xr-x  tumor-detect/",
    "drwxr-xr-x  devmatch/",
    "drwxr-xr-x  result-analyzer/",
  ],
  help: [
    "Available commands:",
    "  uname -a",
    "  ps aux | grep engine",
    "  top",
    '  ./matching_engine --mode=simulation',
    "  whoami",
    '  cat /proc/cpuinfo | head',
    "  ls -la ./projects",
    "  clear",
  ],
  clear: [],
};

export default function InteractiveTerminal() {
  const [history, setHistory] = useState<
    { type: "input" | "output"; text: string }[]
  >([
    { type: "output", text: 'Type "help" for available commands' },
  ]);
  const [currentInput, setCurrentInput] = useState("");
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    const newHistory = [
      ...history,
      { type: "input" as const, text: cmd.trim() },
    ];

    if (trimmed === "clear") {
      setHistory([]);
      return;
    }

    const output = predefinedCommands[trimmed];
    if (output) {
      output.forEach((line) => {
        newHistory.push({ type: "output" as const, text: line });
      });
    } else {
      newHistory.push({
        type: "output" as const,
        text: `command not found: ${cmd.trim()}. Type "help" for available commands.`,
      });
    }

    setHistory(newHistory);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentInput.trim()) return;
    handleCommand(currentInput);
    setCurrentInput("");
  };

  const handleQuickCommand = (cmd: string) => {
    handleCommand(cmd);
  };

  return (
    <section
      id="terminal-section"
      ref={sectionRef}
      className="relative border-t border-qd-border"
    >
      <div className="section-container">
        <div className="section-label">Section 06</div>
        <h2 className="section-title">Linux Terminal</h2>
        <p className="section-subtitle mb-8">
          Interactive terminal experience — click commands or type your own.
          Predefined responses only, no real shell execution.
        </p>

        <div className="grid lg:grid-cols-[1fr_240px] gap-4">
          {/* Terminal */}
          <div
            className={`terminal-window transition-all duration-500 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="terminal-header">
              <span className="terminal-dot terminal-dot-red" />
              <span className="terminal-dot terminal-dot-yellow" />
              <span className="terminal-dot terminal-dot-green" />
              <span className="ml-3 font-mono text-[0.65rem] text-qd-muted tracking-wider">
                vikas@quant-node:~/lab
              </span>
            </div>
            <div
              ref={terminalRef}
              className="terminal-body h-[350px] overflow-y-auto"
            >
              {history.map((entry, i) => (
                <div key={i} className="mb-1">
                  {entry.type === "input" ? (
                    <div>
                      <span className="terminal-prompt">$ </span>
                      <span className="text-qd-text">{entry.text}</span>
                    </div>
                  ) : (
                    <div className="text-qd-text/70 whitespace-pre">
                      {entry.text}
                    </div>
                  )}
                </div>
              ))}

              {/* Input line */}
              <form onSubmit={handleSubmit} className="flex items-center">
                <span className="terminal-prompt">$ </span>
                <input
                  ref={inputRef}
                  type="text"
                  value={currentInput}
                  onChange={(e) => setCurrentInput(e.target.value)}
                  className="flex-1 bg-transparent text-qd-text outline-none font-mono text-[0.85rem] ml-1"
                  placeholder=""
                  autoComplete="off"
                  spellCheck={false}
                  id="terminal-input"
                />
                <span className="terminal-cursor" />
              </form>
            </div>
          </div>

          {/* Quick Commands Sidebar */}
          <div
            className={`qd-panel transition-all duration-500 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: "150ms" }}
          >
            <div className="qd-panel-header">Quick Commands</div>
            <div className="qd-panel-body space-y-1">
              {Object.keys(predefinedCommands)
                .filter((c) => c !== "clear" && c !== "help")
                .map((cmd) => (
                  <button
                    key={cmd}
                    onClick={() => handleQuickCommand(cmd)}
                    className="w-full text-left font-mono text-xs text-qd-muted hover:text-qd-accent py-1.5 px-2 rounded hover:bg-qd-surface transition-all cursor-pointer"
                  >
                    $ {cmd}
                  </button>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
