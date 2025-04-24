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
        I’m currently a 3rd-year B.Tech student in{" "}
        <span className="font-medium">Computer Science & Engineering</span> at{" "}
        <span className="font-medium">
          JNTUH University College of Engineering, Sultanpur
        </span>
        . With a strong interest in software development, I’ve built a solid
        foundation in{" "}
        <span className="font-medium">Java, Spring Boot, and DevOps</span>{" "}
        through structured learning, hands-on projects, and continuous
        exploration.
        <br />
        <br />
        What draws me to programming is the{" "}
        <span className="italic">problem-solving aspect</span>—the process of
        analyzing, debugging, and arriving at innovative solutions is something
        I truly enjoy. My core technology stack revolves around{" "}
        <span className="font-medium">Java</span>, and I’m also proficient with{" "}
        <span className="font-medium">Applets, JDBC, and Servlets</span>. I'm
        committed to staying current with industry trends and continuously
        learning emerging technologies. I’m currently seeking a{" "}
        <span className="font-medium">full-time opportunity</span> as a Software
        Developer where I can apply my skills, grow as a professional, and
        contribute meaningfully to impactful projects.
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
