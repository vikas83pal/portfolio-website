"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  systemArchNodes,
  engineeringConcepts,
  latencyBudget,
  backendArchNodes,
  backendConcepts,
} from "@/lib/data";

/* ─── Architecture Diagram ─── */
function ArchDiagram({
  nodes,
  title,
}: {
  nodes: string[];
  title: string;
}) {
  const [activeNode, setActiveNode] = useState(-1);

  return (
    <div className="qd-panel">
      <div className="qd-panel-header">
        <span className="status-dot status-dot-live" />
        {title}
      </div>
      <div className="qd-panel-body">
        <div className="flex flex-col items-center gap-0">
          {nodes.map((node, i) => (
            <React.Fragment key={node}>
              <div
                className={`arch-node w-full max-w-[200px] cursor-pointer ${
                  activeNode === i ? "active" : ""
                }`}
                onClick={() =>
                  setActiveNode(activeNode === i ? -1 : i)
                }
                onMouseEnter={() => setActiveNode(i)}
              >
                {node}
              </div>
              {i < nodes.length - 1 && <div className="arch-connector" />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Latency Budget ─── */
function LatencyBudgetViz() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="qd-panel" ref={ref}>
      <div className="qd-panel-header justify-between">
        <div className="flex items-center gap-2">
          <span className="status-dot status-dot-live" />
          Latency Budget
        </div>
        <span className="sim-badge">◆ Conceptual</span>
      </div>
      <div className="qd-panel-body space-y-2">
        {latencyBudget.map((item) => (
          <div key={item.label} className="latency-bar-container">
            <span className="latency-bar-label">{item.label}</span>
            <div className="latency-bar-track">
              <div
                className="latency-bar-fill"
                style={{ width: visible ? `${item.width}%` : "0%" }}
              />
            </div>
            <span className="latency-bar-value">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Engineering Concepts Grid ─── */
function ConceptsGrid({
  concepts,
  title,
}: {
  concepts: string[];
  title: string;
}) {
  return (
    <div className="qd-panel">
      <div className="qd-panel-header">{title}</div>
      <div className="qd-panel-body">
        <div className="grid grid-cols-2 gap-2">
          {concepts.map((concept) => (
            <div
              key={concept}
              className="font-mono text-xs text-qd-muted py-2 px-3 bg-qd-surface rounded border border-qd-border hover:border-qd-accent/30 hover:text-qd-accent transition-all"
            >
              {concept}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Low-Latency Systems Section ─── */
export function LowLatencySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="systems"
      ref={sectionRef}
      className="relative border-t border-qd-border"
    >
      <div className="section-container">
        <div className="section-label">Section 07</div>
        <h2 className="section-title">Low-Latency Systems</h2>
        <p className="section-subtitle mb-12">
          Architecture diagrams and engineering concepts for high-performance
          trading infrastructure.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div
            className={`transition-all duration-500 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <ArchDiagram nodes={systemArchNodes} title="System Architecture" />
          </div>
          <div
            className={`transition-all duration-500 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            <LatencyBudgetViz />
          </div>
          <div
            className={`transition-all duration-500 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <ConceptsGrid
              concepts={engineeringConcepts}
              title="Engineering Concepts"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Backend Systems Section ─── */
export function BackendSystemsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative border-t border-qd-border">
      <div className="section-container">
        <div className="section-label">Section 08</div>
        <h2 className="section-title">Backend Systems</h2>
        <p className="section-subtitle mb-12">
          Backend architecture patterns used in engineering projects.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          <div
            className={`transition-all duration-500 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <ArchDiagram nodes={backendArchNodes} title="Backend Architecture" />
          </div>
          <div
            className={`transition-all duration-500 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            <ConceptsGrid
              concepts={backendConcepts}
              title="Backend Technologies"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
