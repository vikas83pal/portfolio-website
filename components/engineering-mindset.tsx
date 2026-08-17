"use client";

import React, { useEffect, useRef, useState } from "react";
import { mindsetPrinciples } from "@/lib/data";

export default function EngineeringMindset() {
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

  return (
    <section ref={sectionRef} className="relative border-t border-qd-border">
      <div className="section-container">
        <div className="section-label">Section 13</div>
        <h2 className="section-title">Engineering Mindset</h2>
        <p className="section-subtitle mb-12">
          Principles that guide how I think about systems, performance, and
          engineering trade-offs.
        </p>

        <div className="space-y-3">
          {mindsetPrinciples.map((principle, i) => (
            <div
              key={principle.id}
              className={`qd-panel p-5 group transition-all duration-500 ${
                visible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-6"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex items-start gap-6">
                <div className="font-mono text-2xl font-bold text-qd-accent/30 group-hover:text-qd-accent transition-colors flex-shrink-0">
                  {principle.id}
                </div>
                <div>
                  <h3 className="font-display text-base font-semibold text-qd-text group-hover:text-qd-accent transition-colors">
                    {principle.title}
                  </h3>
                  <p className="text-sm text-qd-muted mt-1 leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
