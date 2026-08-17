"use client";

import React, { useEffect, useRef, useState } from "react";
import { projectsData } from "@/lib/data";

function ProjectCard({
  project,
  index,
  visible,
}: {
  project: (typeof projectsData)[0];
  index: number;
  visible: boolean;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`qd-panel overflow-hidden transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Header */}
      <div className="qd-panel-header justify-between">
        <div className="flex items-center gap-2">
          <span className={`status-dot ${project.status === "In Progress" ? "status-dot-warn" : "status-dot-live"}`} />
          <span>Project {String(index + 1).padStart(2, "0")}</span>
        </div>
        {project.status && (
          <span className="text-qd-amber text-[0.6rem]">{project.status}</span>
        )}
      </div>

      {/* Body */}
      <div className="qd-panel-body">
        <h3 className="font-display text-lg font-semibold text-qd-text mb-1">
          {project.title}
        </h3>
        <p className="font-mono text-xs text-qd-accent mb-4">
          {project.tagline}
        </p>

        {/* Case study sections */}
        <div className="space-y-3">
          <div>
            <div className="font-mono text-[0.6rem] uppercase tracking-wider text-qd-muted mb-1">
              Problem
            </div>
            <p className="text-sm text-qd-text/80 leading-relaxed">
              {project.problem}
            </p>
          </div>

          {expanded && (
            <>
              <div>
                <div className="font-mono text-[0.6rem] uppercase tracking-wider text-qd-muted mb-1">
                  Approach
                </div>
                <p className="text-sm text-qd-text/80 leading-relaxed">
                  {project.approach}
                </p>
              </div>

              <div>
                <div className="font-mono text-[0.6rem] uppercase tracking-wider text-qd-muted mb-1">
                  Engineering
                </div>
                <p className="text-sm text-qd-text/80 leading-relaxed">
                  {project.engineering}
                </p>
              </div>

              <div>
                <div className="font-mono text-[0.6rem] uppercase tracking-wider text-qd-muted mb-1">
                  Result
                </div>
                <p className="text-sm text-qd-text/80 leading-relaxed">
                  {project.result}
                </p>
              </div>
            </>
          )}
        </div>

        {/* Toggle */}
        <button
          className="font-mono text-xs text-qd-accent mt-4 hover:underline cursor-pointer"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "— collapse" : "+ expand case study"}
        </button>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-qd-border">
          {project.technologies.map((tech) => (
            <span key={tech} className="tech-tag text-[0.55rem]">
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3 mt-4">
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="qd-btn qd-btn-outline text-[0.6rem] py-2 px-3"
            >
              ↗ GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
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
      id="projects"
      ref={sectionRef}
      className="relative border-t border-qd-border"
    >
      <div className="section-container">
        <div className="section-label">Section 04</div>
        <h2 className="section-title">Featured Engineering</h2>
        <p className="section-subtitle mb-12">
          Each project is presented as an engineering case study — problem,
          approach, implementation, and result.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          {projectsData.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={i}
              visible={visible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
