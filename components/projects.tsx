"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.2);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28 max-w-6xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <SectionHeading>Featured Projects</SectionHeading>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          A showcase of my best work, featuring full-stack applications, AI/ML projects,
          and innovative solutions built with modern technologies.
        </p>
      </motion.div>

      <div className="space-y-8">
        {projectsData.map((project, index) => (
          <Project key={index} {...project} index={index} />
        ))}
      </div>
    </section>
  );
}
