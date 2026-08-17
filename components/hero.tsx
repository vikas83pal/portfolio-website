"use client";

import React, { useEffect, useRef, useState } from "react";
import { heroTerminalLines } from "@/lib/data";

/* ─── Animated background canvas ─── */
function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let points: { x: number; y: number; vx: number; vy: number; age: number }[] = [];
    const maxPoints = 60;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // create initial points
    for (let i = 0; i < maxPoints; i++) {
      points.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        age: Math.random() * 200,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // draw subtle grid lines
      ctx.strokeStyle = "rgba(30, 42, 58, 0.15)";
      ctx.lineWidth = 0.5;
      for (let x = 0; x < canvas.width; x += 80) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += 80) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // draw data points and connections
      points.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        p.age += 0.5;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        const alpha = Math.sin(p.age * 0.02) * 0.3 + 0.3;
        ctx.fillStyle = `rgba(62, 207, 142, ${alpha * 0.4})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2);
        ctx.fill();

        // connect nearby points
        for (let j = i + 1; j < points.length; j++) {
          const dx = p.x - points[j].x;
          const dy = p.y - points[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.strokeStyle = `rgba(62, 207, 142, ${(1 - dist / 120) * 0.08})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(points[j].x, points[j].y);
            ctx.stroke();
          }
        }
      });

      // draw subtle horizontal "tick" lines (market data feel)
      for (let i = 0; i < 5; i++) {
        const y = (canvas.height / 6) * (i + 1);
        const waveOffset = Math.sin(Date.now() * 0.001 + i) * 20;
        ctx.strokeStyle = "rgba(62, 207, 142, 0.04)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(0, y + waveOffset);
        for (let x = 0; x < canvas.width; x += 4) {
          const yOff = Math.sin(x * 0.01 + Date.now() * 0.002 + i) * 8;
          ctx.lineTo(x, y + waveOffset + yOff);
        }
        ctx.stroke();
      }

      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="hero-bg-canvas"
      aria-hidden="true"
    />
  );
}

/* ─── Terminal typing effect ─── */
function TerminalPanel() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleLines((prev) => {
        if (prev >= heroTerminalLines.length) {
          clearInterval(timer);
          return prev;
        }
        return prev + 1;
      });
    }, 600);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="terminal-window max-w-md w-full">
      <div className="terminal-header">
        <span className="terminal-dot terminal-dot-red" />
        <span className="terminal-dot terminal-dot-yellow" />
        <span className="terminal-dot terminal-dot-green" />
        <span className="ml-3 font-mono text-[0.65rem] text-qd-muted tracking-wider">
          vikas@quant-node:~
        </span>
      </div>
      <div className="terminal-body">
        {heroTerminalLines.slice(0, visibleLines).map((line, i) => (
          <div key={i} className="mb-3">
            <div className="terminal-prompt">{line.prompt}</div>
            {line.output.split("\n").map((out, j) => (
              <div
                key={j}
                className={`ml-0 ${
                  line.isStatus
                    ? "text-qd-accent font-semibold"
                    : "text-qd-text"
                }`}
              >
                {out}
              </div>
            ))}
          </div>
        ))}
        {visibleLines < heroTerminalLines.length && (
          <span className="terminal-prompt">
            ${" "}
            <span className="terminal-cursor" />
          </span>
        )}
        {visibleLines >= heroTerminalLines.length && (
          <span className="terminal-prompt">
            ${" "}
            <span className="terminal-cursor" />
          </span>
        )}
      </div>
    </div>
  );
}

/* ─── Ticker tape ─── */
function TickerTape() {
  const items = [
    { sym: "ALGO", val: "800+", dir: "up" },
    { sym: "GFG_RANK", val: "#3", dir: "up" },
    { sym: "CPP_STD", val: "C++17", dir: "up" },
    { sym: "LEETCODE", val: "ACTIVE", dir: "up" },
    { sym: "BACKEND", val: "SPRING", dir: "up" },
    { sym: "SYS_LAT", val: "< ms", dir: "up" },
    { sym: "LINUX", val: "DAILY", dir: "up" },
    { sym: "STATUS", val: "OPEN", dir: "up" },
  ];

  const duplicated = [...items, ...items];

  return (
    <div className="ticker-tape">
      <div className="ticker-content">
        {duplicated.map((item, i) => (
          <div key={i} className="ticker-item">
            <span className="text-qd-text">{item.sym}</span>
            <span className={item.dir === "up" ? "ticker-up" : "ticker-down"}>
              {item.val}
            </span>
            {item.dir === "up" && <span className="ticker-up text-[0.6rem]">▲</span>}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Main Hero ─── */
export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      <HeroBackground />

      <div className="section-container relative z-10 pt-20">
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-16 items-center">
          {/* Left: Text */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="status-dot status-dot-live" />
              <span className="font-mono text-xs text-qd-muted tracking-wider uppercase">
                Available for opportunities
              </span>
            </div>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-qd-text">
              Vikas Pal
            </h1>

            <p className="font-mono text-sm sm:text-base text-qd-accent tracking-wide">
              Quant Developer · Low-Latency Systems · Backend Engineering
            </p>

            <p className="text-qd-muted text-base sm:text-lg leading-relaxed max-w-xl">
              I build high-performance software at the intersection of
              algorithms, C++, backend systems, and quantitative trading
              infrastructure.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              <a href="#projects" className="qd-btn qd-btn-primary" id="btn-view-work">
                View Engineering Work
              </a>
              <a href="#contact" className="qd-btn qd-btn-outline" id="btn-contact-hero">
                Contact
              </a>
            </div>
          </div>

          {/* Right: Terminal */}
          <div className="w-full lg:w-auto">
            <TerminalPanel />
          </div>
        </div>
      </div>

      {/* Ticker tape at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <TickerTape />
      </div>
    </section>
  );
}
