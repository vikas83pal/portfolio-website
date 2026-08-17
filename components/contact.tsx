"use client";

import React, { useRef, useState, useEffect } from "react";

export default function Contact() {
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

  const roles = [
    "Quant Developer",
    "Backend Engineer",
    "Low-Latency Engineer",
    "Systems Engineer",
    "Software Engineer",
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative border-t border-qd-border"
    >
      <div className="section-container">
        <div className="section-label">Section 06</div>
        <h2 className="section-title">Establish Connection</h2>

        <div
          className={`max-w-2xl mx-auto mt-12 transition-all duration-500 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {/* Terminal-style contact */}
          <div className="terminal-window">
            <div className="terminal-header">
              <span className="terminal-dot terminal-dot-red" />
              <span className="terminal-dot terminal-dot-yellow" />
              <span className="terminal-dot terminal-dot-green" />
              <span className="ml-3 font-mono text-[0.65rem] text-qd-muted tracking-wider">
                connect@vikas-pal
              </span>
            </div>
            <div className="terminal-body">
              <div className="mb-3">
                <span className="terminal-prompt">$ </span>
                <span className="text-qd-text">connect --with vikas</span>
              </div>

              <div className="mb-4 text-qd-text/70">
                Connection established. Available channels:
              </div>

              {/* Links */}
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-3">
                  <span className="text-qd-muted font-mono text-xs w-16">
                    Email
                  </span>
                  <a
                    href="mailto:vikas83pal@gmail.com"
                    className="font-mono text-sm text-qd-accent hover:underline"
                    id="contact-email"
                  >
                    vikas83pal@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-qd-muted font-mono text-xs w-16">
                    GitHub
                  </span>
                  <a
                    href="https://github.com/vikas83pal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-sm text-qd-accent hover:underline"
                    id="contact-github"
                  >
                    github.com/vikas83pal
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-qd-muted font-mono text-xs w-16">
                    LinkedIn
                  </span>
                  <a
                    href="https://linkedin.com/in/vikas83pal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-sm text-qd-accent hover:underline"
                    id="contact-linkedin"
                  >
                    linkedin.com/in/vikas83pal
                  </a>
                </div>
              </div>

              {/* Open To */}
              <div className="mb-3">
                <span className="terminal-prompt">$ </span>
                <span className="text-qd-text">cat open_to.txt</span>
              </div>
              <div className="space-y-1 mb-4">
                {roles.map((role) => (
                  <div key={role} className="text-qd-text/70 font-mono text-sm">
                    → {role}
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-qd-border">
                <span className="terminal-prompt">$ </span>
                <span className="terminal-cursor" />
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-8">
            <a
              href="mailto:vikas83pal@gmail.com"
              className="qd-btn qd-btn-primary"
              id="btn-contact-send"
            >
              Send Message
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
