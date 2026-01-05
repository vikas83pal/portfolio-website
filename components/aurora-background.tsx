"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AuroraBackground() {
  return (
    <div className="aurora-bg">
      <motion.div
        className="aurora-blob aurora-blob-1"
        animate={{
          x: [0, 50, -30, 20, 0],
          y: [0, -50, 30, 20, 0],
          scale: [1, 1.1, 0.95, 1.05, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="aurora-blob aurora-blob-2"
        animate={{
          x: [0, -30, 50, -20, 0],
          y: [0, 30, -50, 20, 0],
          scale: [1, 0.95, 1.1, 1.05, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
          delay: 5,
        }}
      />
      <motion.div
        className="aurora-blob aurora-blob-3"
        animate={{
          x: [0, 40, -20, 30, 0],
          y: [0, -20, 40, -30, 0],
          scale: [1, 1.05, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
          delay: 10,
        }}
      />
    </div>
  );
}
