"use client";

import React, { useEffect, useRef, useState } from "react";
import { algoCategories, algoPlatforms } from "@/lib/data";

/* ─── Skill bar component ─── */
function SkillBar({
  name,
  level,
  visible,
  delay,
}: {
  name: string;
  level: number;
  visible: boolean;
  delay: number;
}) {
  return (
    <div
      className="transition-all duration-500"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(10px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      <div className="flex justify-between items-center mb-1">
        <span className="font-mono text-xs text-qd-text">{name}</span>
        <span className="font-mono text-[0.6rem] text-qd-accent">
          {level}%
        </span>
      </div>
      <div className="h-1.5 bg-qd-surface rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            width: visible ? `${level}%` : "0%",
            background: `linear-gradient(90deg, #3ecf8e ${100 - level}%, #14b8a6)`,
            transitionDelay: `${delay + 200}ms`,
          }}
        />
      </div>
    </div>
  );
}

/* ─── Canvas Radar Chart ─── */
function RadarChart({ visible }: { visible: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!visible) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const size = 280;
    canvas.width = size * 2;
    canvas.height = size * 2;
    ctx.scale(2, 2);

    const cx = size / 2;
    const cy = size / 2;
    const maxR = size / 2 - 40;
    const n = algoCategories.length;

    // Draw rings
    for (let r = 1; r <= 4; r++) {
      const radius = (maxR / 4) * r;
      ctx.beginPath();
      for (let i = 0; i <= n; i++) {
        const angle = (Math.PI * 2 * i) / n - Math.PI / 2;
        const x = cx + radius * Math.cos(angle);
        const y = cy + radius * Math.sin(angle);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.strokeStyle = "rgba(30, 42, 58, 0.4)";
      ctx.lineWidth = 0.5;
      ctx.stroke();
    }

    // Draw axes
    for (let i = 0; i < n; i++) {
      const angle = (Math.PI * 2 * i) / n - Math.PI / 2;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(cx + maxR * Math.cos(angle), cy + maxR * Math.sin(angle));
      ctx.strokeStyle = "rgba(30, 42, 58, 0.3)";
      ctx.lineWidth = 0.5;
      ctx.stroke();
    }

    // Draw data polygon
    ctx.beginPath();
    for (let i = 0; i <= n; i++) {
      const idx = i % n;
      const angle = (Math.PI * 2 * idx) / n - Math.PI / 2;
      const r = (algoCategories[idx].level / 100) * maxR;
      const x = cx + r * Math.cos(angle);
      const y = cy + r * Math.sin(angle);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.fillStyle = "rgba(62, 207, 142, 0.15)";
    ctx.fill();
    ctx.strokeStyle = "#3ecf8e";
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // Draw points and labels
    for (let i = 0; i < n; i++) {
      const angle = (Math.PI * 2 * i) / n - Math.PI / 2;
      const r = (algoCategories[i].level / 100) * maxR;
      const x = cx + r * Math.cos(angle);
      const y = cy + r * Math.sin(angle);

      // Point
      ctx.beginPath();
      ctx.arc(x, y, 3, 0, Math.PI * 2);
      ctx.fillStyle = "#3ecf8e";
      ctx.fill();

      // Label
      const lx = cx + (maxR + 20) * Math.cos(angle);
      const ly = cy + (maxR + 20) * Math.sin(angle);
      ctx.font = "9px JetBrains Mono, monospace";
      ctx.fillStyle = "#94a3b8";
      ctx.textAlign =
        angle > -Math.PI / 4 && angle < (Math.PI * 3) / 4
          ? "left"
          : angle < (-Math.PI * 3) / 4 || angle > (Math.PI * 3) / 4
          ? "right"
          : "center";
      ctx.textBaseline = angle < 0 ? "bottom" : "top";
      ctx.fillText(algoCategories[i].name, lx, ly);
    }
  }, [visible]);

  return (
    <canvas
      ref={canvasRef}
      className="w-[280px] h-[280px] mx-auto"
      style={{ imageRendering: "auto" }}
    />
  );
}

export default function AlgoPerformance() {
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

  return (
    <section
      id="algorithms"
      ref={sectionRef}
      className="relative border-t border-qd-border"
    >
      <div className="section-container">
        <div className="section-label">Section 10</div>
        <h2 className="section-title">Algorithmic Performance</h2>
        <p className="section-subtitle mb-12">
          Engineering capability profile across algorithm domains.
        </p>

        <div className="grid lg:grid-cols-[1fr_320px] gap-8">
          {/* Left: Skill bars */}
          <div className="qd-panel">
            <div className="qd-panel-header">
              <span className="status-dot status-dot-live" />
              Proficiency Breakdown
            </div>
            <div className="qd-panel-body space-y-4">
              {algoCategories.map((cat, i) => (
                <SkillBar
                  key={cat.name}
                  name={cat.name}
                  level={cat.level}
                  visible={visible}
                  delay={i * 80}
                />
              ))}
            </div>
          </div>

          {/* Right: Radar + Platforms */}
          <div className="space-y-4">
            <div className="qd-panel">
              <div className="qd-panel-header">Capability Map</div>
              <div className="qd-panel-body flex justify-center">
                <RadarChart visible={visible} />
              </div>
            </div>

            <div className="qd-panel">
              <div className="qd-panel-header">Platforms</div>
              <div className="qd-panel-body space-y-3">
                {algoPlatforms.map((p) => (
                  <div
                    key={p.name}
                    className="flex justify-between items-center py-2 border-b border-qd-border/50 last:border-0"
                  >
                    <span className="font-mono text-sm text-qd-text">
                      {p.name}
                    </span>
                    <span className="font-mono text-xs text-qd-accent">
                      {p.stat}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
