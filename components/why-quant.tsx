"use client";

import React, { useEffect, useRef, useState } from "react";
import { pipelineNodes } from "@/lib/data";

function PipelineVisualization() {
  const [activeNode, setActiveNode] = useState(-1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % pipelineNodes.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center gap-0">
      {pipelineNodes.map((node, i) => (
        <React.Fragment key={node}>
          <div
            className={`pipeline-node w-full max-w-[220px] ${
              activeNode === i
                ? "!border-qd-accent !text-qd-accent !shadow-[0_0_20px_rgba(62,207,142,0.15)]"
                : ""
            }`}
          >
            {activeNode === i && (
              <span className="absolute -left-2 top-1/2 -translate-y-1/2 w-1 h-4 bg-qd-accent rounded-full" />
            )}
            {node}
          </div>
          {i < pipelineNodes.length - 1 && (
            <div className="pipeline-connector">
              <div
                className={`absolute top-0 left-1/2 -translate-x-1/2 w-[3px] rounded-full transition-all duration-500 ${
                  activeNode === i
                    ? "h-full bg-qd-accent shadow-[0_0_8px_rgba(62,207,142,0.5)]"
                    : "h-0 bg-transparent"
                }`}
              />
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

export default function WhyQuant() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const qualities = [
    {
      icon: "⚡",
      title: "Performance-Critical Thinking",
      desc: "Strong foundation in C++ and systems programming. Interested in building software where every microsecond counts.",
    },
    {
      icon: "🧮",
      title: "Algorithmic Problem Solving",
      desc: "800+ problems solved across platforms. Deep understanding of data structures, DP, graphs, and optimization techniques.",
    },
    {
      icon: "🏗️",
      title: "Backend Infrastructure",
      desc: "Experience building distributed backend systems with Spring Boot, Kafka, and microservice architectures.",
    },
    {
      icon: "📊",
      title: "Quantitative Curiosity",
      desc: "Interest in market-making, electronic trading, and building systems where performance and correctness both matter.",
    },
    {
      icon: "🐧",
      title: "Linux & Systems",
      desc: "Daily Linux user. Understanding of system calls, memory management, concurrency, and kernel-level concepts.",
    },
    {
      icon: "🧠",
      title: "Mathematical Mindset",
      desc: "Strong problem-solving orientation. Approaching engineering challenges with mathematical precision.",
    },
  ];

  return (
    <section
      id="why-quant"
      ref={sectionRef}
      className="relative border-t border-qd-border"
    >
      <div className="section-container">
        <div className="section-label">Section 01</div>
        <h2 className="section-title">Why Quant?</h2>
        <p className="section-subtitle mb-12">
          My interest in quantitative development comes from engineering —
          algorithms, performance, and building systems where precision matters.
        </p>

        <div className="grid lg:grid-cols-[1fr_280px] gap-16">
          {/* Left: Qualities grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {qualities.map((q, i) => (
              <div
                key={q.title}
                className={`qd-panel p-5 transition-all duration-500 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="text-2xl mb-3">{q.icon}</div>
                <h3 className="font-display text-sm font-semibold text-qd-text mb-2">
                  {q.title}
                </h3>
                <p className="text-xs text-qd-muted leading-relaxed">
                  {q.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Right: Pipeline */}
          <div>
            <div className="qd-panel sticky top-20">
              <div className="qd-panel-header">
                <span className="status-dot status-dot-live" />
                Trading Pipeline
              </div>
              <div className="qd-panel-body">
                <PipelineVisualization />
                <div className="mt-4">
                  <span className="sim-badge">
                    ◆ Illustrative Visualization
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
