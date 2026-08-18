"use client";

import React, { useState, useEffect } from "react";
import { links } from "@/lib/data";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    
  }, []);

  return (
    <header
      id="header-nav"
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        scrolled
          ? "bg-[#080a0f]/90 backdrop-blur-md border-b border-qd-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="font-mono text-sm font-semibold text-qd-accent tracking-wider"
          onClick={() => {
            setActiveSection("Home");
            setTimeOfLastClick(Date.now());
          }}
        >
          <span className="text-qd-muted">~/</span>vikas-pal
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1" role="navigation" aria-label="Main navigation">
          {links.map((link, i) => (
            <React.Fragment key={link.hash}>
              <a
                href={link.hash}
                className={`nav-link px-3 py-2 ${
                  activeSection === link.name ? "active text-qd-accent" : ""
                }`}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}
              </a>
              {i < links.length - 1 && (
                <span className="text-qd-dim text-[0.6rem] mx-1 select-none">|</span>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          id="mobile-menu-toggle"
          className="lg:hidden flex flex-col gap-1 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span
            className={`w-5 h-[1.5px] bg-qd-text transition-all duration-300 ${
              mobileMenuOpen ? "rotate-45 translate-y-[3.5px]" : ""
            }`}
          />
          <span
            className={`w-5 h-[1.5px] bg-qd-text transition-all duration-300 ${
              mobileMenuOpen ? "-rotate-45 -translate-y-[2.5px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-qd-panel border-t border-qd-border">
          <nav className="flex flex-col p-4 gap-1" role="navigation" aria-label="Mobile navigation">
            {links.map((link) => (
              <a
                key={link.hash}
                href={link.hash}
                className={`nav-link px-4 py-3 rounded ${
                  activeSection === link.name
                    ? "active text-qd-accent bg-qd-surface"
                    : ""
                }`}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                  setMobileMenuOpen(false);
                }}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
