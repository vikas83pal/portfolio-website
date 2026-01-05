"use client";

import React from "react";
import { motion } from "framer-motion";
import { BsLinkedin, BsGithub, BsInstagram, BsYoutube } from "react-icons/bs";
import { HiHeart } from "react-icons/hi";

const socialLinks = [
  {
    icon: BsLinkedin,
    href: "https://www.linkedin.com/in/vikas-pal-b91067254/",
    label: "LinkedIn",
    color: "#0077b5",
  },
  {
    icon: BsGithub,
    href: "https://github.com/vikas83pal",
    label: "GitHub",
    color: "#333",
  },
  {
    icon: BsInstagram,
    href: "https://www.instagram.com/mr_maddy.786/",
    label: "Instagram",
    color: "#e4405f",
  },
  {
    icon: BsYoutube,
    href: "https://www.youtube.com/channel/UCfkhHDrlxcZF6Q-MtkNq-eA",
    label: "YouTube",
    color: "#ff0000",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 px-4">
      {/* Gradient Top Border */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-[#667eea] to-transparent" />

      <div className="max-w-5xl mx-auto">
        {/* Logo & Tagline */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold gradient-text mb-2">Vikas Pal</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Building the future, one line of code at a time.
          </p>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex justify-center gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link text-gray-600 dark:text-gray-400"
              whileHover={{ y: -4, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5" />
            </motion.a>
          ))}
        </motion.div>

        {/* Quick Links */}
        <motion.div
          className="flex flex-wrap justify-center gap-6 mb-8 text-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {["Home", "About", "Projects", "Skills", "Contact"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-gray-600 dark:text-gray-400 hover:text-[#667eea] dark:hover:text-[#667eea] transition-colors"
            >
              {link}
            </a>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent mb-6" />

        {/* Copyright */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-sm text-gray-500 dark:text-gray-500 flex items-center justify-center gap-1">
            © {currentYear} Vikas Pal. Made with{" "}
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <HiHeart className="w-4 h-4 text-red-500" />
            </motion.span>{" "}
            using Next.js & Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
