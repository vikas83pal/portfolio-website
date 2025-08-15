"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>

      <p className="mb-3">
        I’m a <span className="font-medium">final-year B.Tech CSE student</span> at{" "}
        <span className="font-medium">JNTUH College of Engineering, Sultanpur</span>, 
        passionate about <span className="font-medium">backend development, system design, and AI/ML</span>. 
        My experience spans <span className="font-medium">Java, Spring Boot, React, Docker, MySQL, and DevOps pipelines</span>.
      </p>

      <p className="mb-3">
        I’ve interned at <span className="font-medium">IIT Hyderabad</span>, 
        contributed to <span className="font-medium">Google Summer of Code 2023</span> with{" "}
        <span className="italic">AboutCode</span>, and built AI-driven, scalable applications. 
        My work has earned me <span className="font-medium">1st Prize</span> at{" "}
        <span className="italic">Surjana Tech Fest</span> and a{" "}
        <span className="font-medium">#2 rank</span> on GeeksforGeeks at the institute level.
      </p>

      <p className="mb-3">
        With <span className="font-medium">300+ LeetCode problems solved</span> 
        and strong foundations in DSA and OOP, I aim to create robust, scalable solutions 
        that merge <span className="font-medium">intelligent systems and efficient architecture</span>.
      </p>

      <p>
        <span className="italic">Outside of tech</span>, I enjoy video games, mobile tech, 
        and exploring <span className="font-medium">history, philosophy, and spirituality</span>.
      </p>
    </motion.section>
  );
}
