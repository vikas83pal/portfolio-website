"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-qd-border bg-qd-panel/50">
      <div className="max-w-[1200px] mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left */}
          <div>
            <div className="font-display text-lg font-semibold text-qd-text">
              Vikas Pal
            </div>
            <div className="font-mono text-xs text-qd-muted mt-1">
              Quant Development · Backend Systems · C++
            </div>
          </div>

          {/* Center Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/vikas83pal"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-qd-muted hover:text-qd-accent transition-colors"
              id="footer-github"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/vikas-pal-b91067254/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-qd-muted hover:text-qd-accent transition-colors"
              id="footer-linkedin"
            >
              LinkedIn
            </a>
            <a
              href="mailto:vikas83pal@gmail.com"
              className="font-mono text-xs text-qd-muted hover:text-qd-accent transition-colors"
              id="footer-email"
            >
              Email
            </a>
          </div>

          {/* Right */}
          <div className="text-center md:text-right">
            <div className="font-mono text-[0.6rem] text-qd-dim leading-relaxed">
              Built with curiosity, algorithms,
              <br />
              and too many terminal windows.
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-qd-border/50 text-center">
          <span className="font-mono text-[0.55rem] text-qd-dim">
            © {new Date().getFullYear()} Vikas Pal · All rights reserved
          </span>
        </div>
      </div>
    </footer>
  );
}
