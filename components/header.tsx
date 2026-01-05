"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import { HiMenu, HiX } from "react-icons/hi";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="z-[999] relative">
      {/* Desktop Navigation */}
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white/20 bg-white/70 shadow-lg shadow-black/[0.03] backdrop-blur-xl sm:top-6 sm:h-[3.5rem] sm:w-auto sm:rounded-full dark:bg-gray-900/70 dark:border-white/10"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        {/* Gradient Border Effect */}
        <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none opacity-0 hover:opacity-100 transition-opacity duration-300">
          <div className="absolute inset-[-2px] bg-gradient-to-r from-[#667eea] via-[#764ba2] to-[#f093fb] rounded-full animate-spin-slow opacity-30" />
        </div>
      </motion.div>

      {/* Desktop Links */}
      <nav className="hidden sm:flex fixed top-[1.7rem] left-1/2 h-[initial] -translate-x-1/2 py-0">
        <ul className="flex items-center justify-center gap-1 text-[0.9rem] font-medium text-gray-600">
          {links.map((link, index) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.05 }}
            >
              <Link
                className={clsx(
                  "flex w-full items-center justify-center px-4 py-2 rounded-full transition-all duration-300",
                  "hover:text-gray-900 dark:hover:text-white",
                  {
                    "text-gray-900 dark:text-white font-semibold":
                      activeSection === link.name,
                    "dark:text-gray-400": activeSection !== link.name,
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}

                {link.name === activeSection && (
                  <motion.span
                    className="bg-gradient-to-r from-[#667eea]/20 to-[#764ba2]/20 rounded-full absolute inset-0 -z-10 dark:from-[#667eea]/30 dark:to-[#764ba2]/30"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>

      {/* Mobile Menu Button */}
      <motion.button
        className="fixed top-4 right-4 z-[1000] sm:hidden w-12 h-12 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-lg border border-gray-200/50 dark:bg-gray-900/80 dark:border-white/10 shadow-lg"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
      >
        {isMobileMenuOpen ? (
          <HiX className="w-6 h-6 text-gray-700 dark:text-white" />
        ) : (
          <HiMenu className="w-6 h-6 text-gray-700 dark:text-white" />
        )}
      </motion.button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-[998] sm:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Menu Panel */}
            <motion.nav
              className="absolute top-0 right-0 h-full w-72 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-2xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="pt-24 px-6">
                <ul className="space-y-2">
                  {links.map((link, index) => (
                    <motion.li
                      key={link.hash}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={link.hash}
                        onClick={() => {
                          setActiveSection(link.name);
                          setTimeOfLastClick(Date.now());
                          setIsMobileMenuOpen(false);
                        }}
                        className={clsx(
                          "flex items-center px-4 py-3 rounded-xl font-medium transition-all duration-300",
                          {
                            "bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white shadow-lg":
                              activeSection === link.name,
                            "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10":
                              activeSection !== link.name,
                          }
                        )}
                      >
                        {link.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
