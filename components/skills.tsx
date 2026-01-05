"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiCplusplus,
  SiC,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiSpringboot,
  SiTailwindcss,
  SiBootstrap,
  SiHtml5,
  SiCss3,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiDocker,
  SiKubernetes,
  SiJenkins,
  SiGit,
  SiGithub,
  SiApachekafka,
  SiFigma,
  SiFirebase,
  SiTensorflow,
  SiPytorch,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { HiChip, HiLightningBolt } from "react-icons/hi";

const skillCategories = [
  {
    title: "Languages",
    icon: HiLightningBolt,
    gradient: "from-[#667eea] to-[#764ba2]",
    skills: [
      { name: "Java", icon: FaJava },
      { name: "Python", icon: SiPython },
      { name: "JavaScript", icon: SiJavascript },
      { name: "C++", icon: SiCplusplus },
      { name: "C", icon: SiC },
    ],
  },
  {
    title: "Frontend",
    icon: SiReact,
    gradient: "from-[#4facfe] to-[#00f2fe]",
    skills: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss3 },
      { name: "Tailwind", icon: SiTailwindcss },
      { name: "Bootstrap", icon: SiBootstrap },
    ],
  },
  {
    title: "Backend",
    icon: SiSpringboot,
    gradient: "from-[#f093fb] to-[#f5576c]",
    skills: [
      { name: "Spring Boot", icon: SiSpringboot },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "Firebase", icon: SiFirebase },
      { name: "Kafka", icon: SiApachekafka },
    ],
  },
  {
    title: "Database",
    icon: SiMongodb,
    gradient: "from-[#11998e] to-[#38ef7d]",
    skills: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
      { name: "PostgreSQL", icon: SiPostgresql },
    ],
  },
  {
    title: "DevOps",
    icon: SiDocker,
    gradient: "from-[#fa709a] to-[#fee140]",
    skills: [
      { name: "Docker", icon: SiDocker },
      { name: "Kubernetes", icon: SiKubernetes },
      { name: "Jenkins", icon: SiJenkins },
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
    ],
  },
  {
    title: "AI / ML",
    icon: HiChip,
    gradient: "from-[#667eea] to-[#764ba2]",
    skills: [
      { name: "TensorFlow", icon: SiTensorflow },
      { name: "PyTorch", icon: SiPytorch },
      { name: "Deep Learning", icon: HiChip },
      { name: "NLP", icon: HiChip },
    ],
  },
];

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-6xl mx-auto scroll-mt-28 px-4 sm:mb-40"
    >
      <SectionHeading>Technical Skills</SectionHeading>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
        A comprehensive toolkit of technologies I use to bring ideas to life
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            className="group"
          >
            <div className="glass rounded-2xl p-6 h-full border border-gray-200/50 dark:border-white/10 hover:border-transparent transition-all duration-300 hover:shadow-2xl">
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.gradient} flex items-center justify-center text-white shadow-lg`}
                >
                  <category.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills Grid */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                    }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="skill-badge flex items-center gap-2 cursor-default"
                  >
                    <skill.icon className="w-4 h-4 text-gray-600 dark:text-gray-400 group-hover:text-current" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
