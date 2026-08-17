"use client";

import React, { useEffect, useRef, useState } from "react";
import { engineeringMetrics } from "@/lib/data";

function AnimatedCounter({ value, visible }: { value: string; visible: boolean }) {
  const [display, setDisplay] = useState("");
  const isNumeric = /^\d+/.test(value);
  const numMatch = value.match(/^(\d+)(.*)$/);

  useEffect(() => {
    if (!visible) return;

    if (isNumeric && numMatch) {
      const target = parseInt(numMatch[1]);
      const suffix = numMatch[2] || "";
      const duration = 1500;
      const startTime = Date.now();

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
        const current = Math.floor(eased * target);
        setDisplay(`${current}${suffix}`);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      animate();
    } else {
      setDisplay(value);
    }
  }, [visible, value, isNumeric, numMatch]);

  return <span>{visible ? display : "—"}</span>;
}

export default function EngineeringMetrics() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="engineering"
      ref={sectionRef}
      className="relative border-t border-qd-border"
    >
      <div className="section-container">
        <div className="section-label">Section 02</div>
        <h2 className="section-title">Engineering Snapshot</h2>
        <p className="section-subtitle mb-12">
          Performance counters across algorithms, platforms, and engineering focus areas.
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
          {engineeringMetrics.map((metric, i) => (
            <div
              key={metric.label}
              className={`qd-panel overflow-hidden transition-all duration-500 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="qd-panel-header">
                <span className="status-dot status-dot-live" />
                {metric.sub}
              </div>
              <div className="qd-panel-body">
                <div className="metric-value">
                  <AnimatedCounter value={metric.value} visible={visible} />
                </div>
                <div className="metric-label mt-2">{metric.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
