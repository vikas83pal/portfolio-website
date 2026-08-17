"use client";

import React, { useEffect, useRef, useState } from "react";
import { techStack } from "@/lib/data";

export default function TechStack() {
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

  const categories = Object.entries(techStack);
  const categoryColors: Record<string, string> = {
    systems: "border-l-red-500/50",
    backend: "border-l-blue-500/50",
    dataQuant: "border-l-qd-accent/50",
    mlResearch: "border-l-purple-500/50",
    devtools: "border-l-qd-amber/50",
  };

  return (
    <section
      id="stack"
      ref={sectionRef}
      className="relative border-t border-qd-border"
    >
      <div className="section-container">
        <div className="section-label">Section 02</div>
        <h2 className="section-title">Engineering Stack</h2>
        <p className="section-subtitle mb-12">
          Technologies organized by purpose — systems, backend, data, and research.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map(([key, category], catIndex) => (
            <div
              key={key}
              className={`qd-panel border-l-2 ${
                categoryColors[key] || "border-l-qd-border"
              } transition-all duration-500 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${catIndex * 100}ms` }}
            >
              <div className="qd-panel-header">
                <span className="font-mono text-qd-text text-xs uppercase">
                  {category.label}
                </span>
              </div>
              <div className="qd-panel-body">
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item, i) => (
                    <span
                      key={item}
                      className="tech-tag"
                      style={{
                        animationDelay: `${i * 50}ms`,
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
