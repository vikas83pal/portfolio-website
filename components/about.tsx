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
  I’m currently a <span className="font-medium">final year B.Tech student</span> in{" "}
  <span className="font-medium">Computer Science & Engineering</span> at{" "}
  <span className="font-medium">JNTUH University College of Engineering, Sultanpur</span>. 
  I’m deeply passionate about <span className="font-medium">software engineering</span>, 
  with a strong focus on <span className="font-medium">backend development, system design, and DevOps</span>. 
  My technical foundation has been shaped through structured learning, hands-on projects, and industry experience.
</p>

<p className="mb-3">
  I recently completed an internship at <span className="font-medium">IIT Hyderabad</span>, 
  where I contributed to advanced AI-driven systems and research-based software development. 
  I was also selected as a contributor for <span className="font-medium">Google Summer of Code 2023 </span> 
  with the <span className="italic">AboutCode</span> organization, where I enhanced open-source 
  security tools used in large-scale software analysis.
</p>

<p className="mb-3">
  My core interests lie at the intersection of{" "}
  <span className="font-medium">Artificial Intelligence, Machine Learning, and Scalable System Design</span>. 
  I’ve developed intelligent systems involving <span className="italic">computer vision, predictive modeling, 
  and automation</span>. My research on <span className="font-medium">Women Safety Solutions </span> 
  was published and recognized at a state level, earning me the <span className="font-medium">1st Prize </span> 
  at the <span className="italic"> Surjana Tech Fest</span>.
</p>

<p className="mb-3">
  I specialize in technologies like <span className="font-medium">Java, Spring Boot, REST APIs, 
  React, MySQL, Docker, and GitHub Actions</span>. I'm also focused on building high-performance, 
  scalable backend systems with solid <span className="font-medium">system design principles </span> 
  and deployment automation using <span className="font-medium">DevOps pipelines</span>.
</p>

<p className="mb-3">
  With over a year of project experience and open-source involvement, I’ve solved{" "}
  <span className="font-medium">300+ LeetCode problems</span>, ranked{" "}
  <span className="font-medium">#2 institute-wide</span> on{" "}
  <span className="font-medium">GeeksforGeeks</span>, and consistently refined my problem-solving abilities 
  across domains like DSA, OOP, and backend architecture.
</p>

<p className="mb-3">
  I’m actively seeking <span className="font-medium">full-time software development roles </span> 
  where I can work on <span className="font-medium">robust backend systems, intelligent applications</span>, 
  and bring ideas to life using <span className="italic">scalable system architecture and AI-powered solutions</span>.
</p>

<p>
  <span className="italic">Beyond the screen</span>, I enjoy video games, and mobile tech. 
  I’m also fascinated by <span className="font-medium">history, philosophy, and spirituality</span>, 
  which help me think critically and stay grounded in an ever-changing world.
</p>


      <p>
        <span className="italic">Outside of my technical interests</span>, I
        enjoy playing video games, watching films, and experimenting with mobile
        tech. I also have a passion for expanding my worldview—currently
        exploring topics in{" "}
        <span className="font-medium">
          history, philosophy, and spirituality
        </span>
        , which help me stay grounded and curious beyond the code.
      </p>
    </motion.section>
  );
}
