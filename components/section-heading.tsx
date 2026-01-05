"use client";

import React from "react";
import { motion } from "framer-motion";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <motion.h2
      className="text-4xl sm:text-5xl font-bold mb-8 text-center text-gray-900 dark:text-white section-heading-animated"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <span className="gradient-text">{children}</span>
    </motion.h2>
  );
}
