"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import ResumeModal from "./resume-modal";

const roles = [
  "Software Development Engineer",
  "Backend Developer",
  "AI/ML Enthusiast",
  "Full Stack Developer",
  "GSoC'23 Contributor",
];

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < role.length) {
            setDisplayText(role.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentRole((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  return (
    <>
      <div className="min-h-screen flex items-center justify-center relative">
        <section
          ref={ref}
          id="home"
          className="mb-28 max-w-[75rem] text-center sm:mb-0 scroll-mt-[100rem] px-4"
        >
          {/* Profile Image with Pulse Ring */}
          <div className="flex items-center justify-center mb-8">
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 200, duration: 0.5 }}
                className="pulse-ring"
              >
                <div className="relative w-32 h-32 sm:w-40 sm:h-40">
                  <Image
                    src="/logo.jpg"
                    alt="Vikas Pal"
                    fill
                    quality={95}
                    priority={true}
                    className="rounded-full object-cover border-4 border-white shadow-2xl"
                    style={{ boxShadow: "0 0 40px rgba(102, 126, 234, 0.4)" }}
                  />
                </div>
              </motion.div>
              <motion.span
                className="absolute bottom-2 right-2 text-4xl"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 125,
                  delay: 0.3,
                  duration: 0.7,
                }}
              >
                👋
              </motion.span>
            </div>
          </div>

          {/* Name with Gradient */}
          <motion.h1
            className="text-4xl sm:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Hi, I'm{" "}
            <span className="gradient-text">Vikas Pal</span>
          </motion.h1>

          {/* Typing Animation */}
          <motion.div
            className="text-xl sm:text-2xl font-medium text-gray-600 dark:text-gray-300 mb-6 h-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <span>{displayText}</span>
            <span className="typing-cursor"></span>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="stat-card text-center px-6 py-4">
              <div className="stat-number">400+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">LeetCode Problems</div>
            </div>
            <div className="stat-card text-center px-6 py-4">
              <div className="stat-number">GSoC'23</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Contributor</div>
            </div>
            <div className="stat-card text-center px-6 py-4">
              <div className="stat-number">#2</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">GFG Institute Rank</div>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            Software Engineer specializing in{" "}
            <span className="font-semibold gradient-text">Spring Boot</span>,{" "}
            <span className="font-semibold gradient-text-alt">AI/ML</span>, and scalable
            backend systems. IIT Hyderabad intern & passionate about delivering
            clean, modular, and impactful solutions.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <Link
              href="#contact"
              className="glow-button flex items-center gap-2 group"
              onClick={() => {
                setActiveSection("Contact");
                setTimeOfLastClick(Date.now());
              }}
            >
              Contact Me
              <BsArrowRight className="opacity-80 group-hover:translate-x-1 transition" />
            </Link>

            <button
              onClick={() => setIsModalOpen(true)}
              className="glow-button glow-button-secondary flex items-center gap-2 group"
            >
              Download Resume
              <HiDownload className="opacity-80 group-hover:translate-y-1 transition" />
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex items-center justify-center gap-4 mt-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <a
              href="https://www.linkedin.com/in/vikas-pal-b91067254/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link text-gray-700 dark:text-white/70"
            >
              <BsLinkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/vikas83pal"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link text-gray-700 dark:text-white/70"
            >
              <FaGithubSquare className="w-6 h-6" />
            </a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="scroll-indicator hidden sm:flex"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <div className="scroll-indicator-mouse">
              <div className="scroll-indicator-wheel"></div>
            </div>
            <span className="text-xs text-gray-500 dark:text-gray-400">Scroll</span>
          </motion.div>
        </section>
      </div>

      {/* Resume Modal */}
      <ResumeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
