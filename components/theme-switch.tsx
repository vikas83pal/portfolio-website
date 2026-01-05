"use client";

import { useTheme } from "@/context/theme-context";
import React from "react";
import { motion } from "framer-motion";
import { BsSun, BsMoon } from "react-icons/bs";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      className="fixed bottom-5 right-5 w-14 h-14 flex items-center justify-center rounded-full shadow-xl backdrop-blur-lg z-[999] transition-all duration-300"
      onClick={toggleTheme}
      whileHover={{ scale: 1.1, rotate: 15 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      style={{
        background:
          theme === "light"
            ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
            : "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
        boxShadow:
          theme === "light"
            ? "0 8px 30px rgba(102, 126, 234, 0.4)"
            : "0 8px 30px rgba(79, 172, 254, 0.4)",
      }}
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === "dark" ? 180 : 0 }}
        transition={{ duration: 0.5 }}
      >
        {theme === "light" ? (
          <BsMoon className="w-6 h-6 text-white" />
        ) : (
          <BsSun className="w-6 h-6 text-white" />
        )}
      </motion.div>
    </motion.button>
  );
}
