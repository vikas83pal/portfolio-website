"use client";

import React, { useEffect, useRef, useState } from "react";
import { researchTimeline, experienceData, educationsData } from "@/lib/data";

/* ─── Research Section ─── */
export function ResearchSection() {
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
      id="research"
      ref={sectionRef}
      className="relative border-t border-qd-border"
    >
      <div className="section-container">
        <div className="section-label">Section 05</div>
        <h2 className="section-title">Research & Systems</h2>
        <p className="section-subtitle mb-12">
          Technical research and focused study over time.
        </p>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[18px] lg:left-[19px] top-0 bottom-0 w-px bg-qd-border" />

          <div className="space-y-8">
            {researchTimeline.map((entry, i) => (
              <div
                key={entry.year}
                className={`relative pl-12 transition-all duration-500 ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                {/* Dot */}
                <div className="absolute left-[14px] top-1 w-2.5 h-2.5 rounded-full bg-qd-accent border-2 border-qd-bg" />

                {/* Year */}
                <div className="font-mono text-xs text-qd-accent mb-2">
                  {entry.year}
                </div>

                <div className="qd-panel p-5">
                  <h3 className="font-display text-base font-semibold text-qd-text mb-1">
                    {entry.title}
                  </h3>
                  <div className="font-mono text-[0.65rem] text-qd-muted mb-2">
                    {entry.institution} — {entry.area}
                  </div>
                  <p className="text-sm text-qd-text/70 leading-relaxed mb-3">
                    {entry.contribution}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {entry.technologies.map((t) => (
                      <span key={t} className="tech-tag text-[0.55rem]">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {entry.concepts.map((c) => (
                      <span
                        key={c}
                        className="font-mono text-[0.55rem] text-qd-muted py-0.5 px-2 border border-qd-border/50 rounded"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Experience Section ─── */
export function ExperienceSection() {
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
    <section className="relative border-t border-qd-border">
      <div className="section-container">
        <div className="section-label">Section 12</div>
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle mb-12">
          Professional and academic milestones.
        </p>

        {/* Experience entries */}
        <div className="space-y-4 mb-12">
          {experienceData.map((exp, i) => (
            <div
              key={exp.id}
              className={`qd-panel p-5 transition-all duration-500 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="font-mono text-xs text-qd-accent bg-qd-surface px-3 py-1.5 rounded border border-qd-border">
                  [{exp.id}]
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-base font-semibold text-qd-text">
                    {exp.role}
                  </h3>
                  <div className="font-mono text-[0.65rem] text-qd-muted mt-0.5">
                    {exp.org} · {exp.duration}
                  </div>
                  <div className="font-mono text-[0.6rem] text-qd-accent mt-1">
                    {exp.focus}
                  </div>
                  <p className="text-sm text-qd-text/70 mt-2 leading-relaxed">
                    {exp.contribution}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Education */}
        <div className="section-label mt-8">Education</div>
        <div className="space-y-3 mt-4">
          {educationsData.map((edu, i) => (
            <div
              key={edu.title}
              className={`qd-panel p-4 transition-all duration-500 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${(experienceData.length + i) * 100}ms` }}
            >
              <div className="flex items-start gap-3">
                <div className="font-mono text-[0.6rem] text-qd-muted bg-qd-surface px-2 py-1 rounded border border-qd-border whitespace-nowrap">
                  {edu.date}
                </div>
                <div>
                  <h4 className="font-display text-sm font-semibold text-qd-text">
                    {edu.title}
                  </h4>
                  <div className="font-mono text-[0.6rem] text-qd-muted mt-0.5">
                    {edu.location}
                  </div>
                  <p className="text-xs text-qd-text/60 mt-1">{edu.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
