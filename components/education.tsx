"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { educationsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { LuGraduationCap } from "react-icons/lu";

export default function Education() {
  const { ref } = useSectionInView("Education");

  return (
    <section id="education" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40 max-w-4xl mx-auto px-4">
      <SectionHeading>My Education</SectionHeading>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
        My academic journey that shaped my technical foundation
      </p>

      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#667eea] via-[#764ba2] to-[#f093fb]" />

        {educationsData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className={`relative flex items-start gap-8 mb-12 last:mb-0 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Timeline Dot */}
            <motion.div
              className="absolute left-4 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-to-r from-[#667eea] to-[#764ba2] flex items-center justify-center text-white shadow-lg z-10"
              whileHover={{ scale: 1.2 }}
            >
              <LuGraduationCap className="w-5 h-5" />
            </motion.div>

            {/* Content Card */}
            <motion.div
              className={`ml-16 md:ml-0 md:w-[calc(50%-40px)] ${
                index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8 md:text-left"
              }`}
              whileHover={{ y: -5 }}
            >
              <div className="glass rounded-2xl p-6 border border-gray-200/50 dark:border-white/10 hover:shadow-xl transition-all duration-300">
                {/* Date Badge */}
                <motion.span
                  className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-[#667eea]/20 to-[#764ba2]/20 text-sm font-medium text-[#667eea] dark:text-[#a5b4fc] mb-4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.2 }}
                >
                  {item.date}
                </motion.span>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>

                <p className="text-[#667eea] dark:text-[#a5b4fc] font-medium mb-3">
                  {item.location}
                </p>

                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
