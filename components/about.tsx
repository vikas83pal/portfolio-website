"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { HiAcademicCap, HiBriefcase, HiCode, HiSparkles } from "react-icons/hi";

const highlights = [
  {
    icon: HiBriefcase,
    title: "IIT Hyderabad Intern",
    description: "Research & Development experience",
    gradient: "from-[#667eea] to-[#764ba2]",
  },
  {
    icon: HiCode,
    title: "GSoC'23 Contributor",
    description: "Open source with AboutCode",
    gradient: "from-[#4facfe] to-[#00f2fe]",
  },
  {
    icon: HiSparkles,
    title: "1st Prize Winner",
    description: "Surjana Tech Fest",
    gradient: "from-[#f093fb] to-[#f5576c]",
  },
  {
    icon: HiAcademicCap,
    title: "#2 GFG Rank",
    description: "Institute level ranking",
    gradient: "from-[#11998e] to-[#38ef7d]",
  },
];

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-5xl mx-auto scroll-mt-28 px-4 sm:mb-40"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>

      {/* Main Content */}
      <div className="grid lg:grid-cols-5 gap-8 items-start">
        {/* Text Content */}
        <motion.div
          className="lg:col-span-3 space-y-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="glass rounded-2xl p-8 border border-gray-200/50 dark:border-white/10">
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
              I'm a{" "}
              <span className="font-semibold gradient-text">
                final-year B.Tech CSE student
              </span>{" "}
              at{" "}
              <span className="font-semibold">
                JNTUH College of Engineering, Sultanpur
              </span>
              , passionate about{" "}
              <span className="font-semibold gradient-text-alt">
                backend development, system design, and AI/ML
              </span>
              .
            </p>

            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
              My experience spans{" "}
              <span className="font-medium">
                Java, Spring Boot, React, Docker, MySQL, and DevOps pipelines
              </span>
              . I've contributed to{" "}
              <span className="font-semibold gradient-text">
                Google Summer of Code 2023
              </span>{" "}
              with AboutCode and completed an impactful internship at{" "}
              <span className="font-semibold gradient-text-alt">
                IIT Hyderabad
              </span>
              .
            </p>

            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
              With{" "}
              <span className="font-semibold">400+ LeetCode problems solved</span>{" "}
              and strong foundations in DSA and OOP, I create robust, scalable
              solutions that merge intelligent systems with efficient architecture.
            </p>

            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              <span className="italic opacity-80">Outside of tech</span>, I enjoy
              video games, mobile tech, and exploring history, philosophy, and
              spirituality.
            </p>
          </div>
        </motion.div>

        {/* Highlights Cards */}
        <motion.div
          className="lg:col-span-2 grid grid-cols-2 gap-4"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass rounded-xl p-5 border border-gray-200/50 dark:border-white/10 hover:shadow-xl transition-all duration-300 cursor-default"
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-r ${item.gradient} flex items-center justify-center text-white mb-4 shadow-lg`}
              >
                <item.icon className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                {item.title}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
