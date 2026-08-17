"use client";

import React, { useState, useRef, useEffect } from "react";

const archNodes = [
  {
    label: "User",
    latency: "—",
    responsibility: "Initiates requests to the system",
    technology: "Browser / Mobile / API Client",
    failureMode: "Client-side timeout, network failure",
    scaling: "Client-side caching, CDN",
  },
  {
    label: "API Gateway",
    latency: "~5ms",
    responsibility: "Route requests, rate limiting, auth",
    technology: "Nginx / Kong / Spring Cloud Gateway",
    failureMode: "Circuit breaker, fallback responses",
    scaling: "Horizontal scaling, load balancing",
  },
  {
    label: "Service Layer",
    latency: "~10ms",
    responsibility: "Business logic, orchestration",
    technology: "Spring Boot / Node.js",
    failureMode: "Retry with backoff, graceful degradation",
    scaling: "Stateless replicas, container orchestration",
  },
  {
    label: "Message Queue",
    latency: "~2ms",
    responsibility: "Async processing, event sourcing",
    technology: "Apache Kafka / RabbitMQ",
    failureMode: "Dead letter queue, message replay",
    scaling: "Partition scaling, consumer groups",
  },
  {
    label: "Worker",
    latency: "~50ms",
    responsibility: "Background processing, data pipeline",
    technology: "Java Workers / Python",
    failureMode: "Idempotent processing, DLQ",
    scaling: "Auto-scaling consumer instances",
  },
  {
    label: "Database",
    latency: "~5ms",
    responsibility: "Persistent storage, ACID transactions",
    technology: "PostgreSQL / MongoDB",
    failureMode: "Read replicas, failover",
    scaling: "Sharding, read replicas, connection pooling",
  },
];

export default function SystemDesign() {
  const [selectedNode, setSelectedNode] = useState<number | null>(null);
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

  const selected = selectedNode !== null ? archNodes[selectedNode] : null;

  return (
    <section ref={sectionRef} className="relative border-t border-qd-border">
      <div className="section-container">
        <div className="section-label">Section 14</div>
        <h2 className="section-title">System Design</h2>
        <p className="section-subtitle mb-4">
          Interactive architecture playground. Click components to explore.
        </p>
        <p className="text-[0.7rem] font-mono text-qd-amber mb-12">
          Simulated values for educational purposes only.
        </p>

        <div
          className={`grid lg:grid-cols-[280px_1fr] gap-6 transition-all duration-500 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {/* Left: Architecture */}
          <div className="qd-panel">
            <div className="qd-panel-header">
              <span className="status-dot status-dot-live" />
              Architecture
            </div>
            <div className="qd-panel-body">
              <div className="flex flex-col items-center gap-0">
                {archNodes.map((node, i) => (
                  <React.Fragment key={node.label}>
                    <button
                      className={`arch-node w-full cursor-pointer ${
                        selectedNode === i ? "active" : ""
                      }`}
                      onClick={() =>
                        setSelectedNode(selectedNode === i ? null : i)
                      }
                    >
                      {node.label}
                    </button>
                    {i < archNodes.length - 1 && (
                      <div className="arch-connector" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Details */}
          <div className="qd-panel">
            <div className="qd-panel-header">
              {selected ? (
                <>
                  <span className="status-dot status-dot-live" />
                  {selected.label} — Details
                </>
              ) : (
                <>
                  <span className="text-qd-muted">
                    ← Click a component to explore
                  </span>
                </>
              )}
            </div>
            <div className="qd-panel-body">
              {selected ? (
                <div className="space-y-4">
                  {[
                    { label: "Latency", value: selected.latency },
                    {
                      label: "Responsibility",
                      value: selected.responsibility,
                    },
                    { label: "Technology", value: selected.technology },
                    { label: "Failure Mode", value: selected.failureMode },
                    {
                      label: "Scaling Strategy",
                      value: selected.scaling,
                    },
                  ].map((item) => (
                    <div key={item.label}>
                      <div className="font-mono text-[0.6rem] uppercase tracking-wider text-qd-muted mb-1">
                        {item.label}
                      </div>
                      <div className="text-sm text-qd-text/80">
                        {item.value}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 text-qd-muted">
                  <div className="font-mono text-3xl mb-4">🏗️</div>
                  <p className="text-sm">
                    Select a component from the architecture diagram to view
                    its details — latency, technology, failure modes, and
                    scaling strategy.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
