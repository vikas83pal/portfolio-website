"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiX, HiDownload, HiCode, HiChip } from "react-icons/hi";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleDownload = (type: "sde" | "aiml") => {
    // Update these paths to your actual resume files
    const resumeFiles = {
      sde: "/Vikas_Pal_SDE.pdf",
      aiml: "/Vikas_Pal_AIML.pdf",
    };
    
    const link = document.createElement("a");
    link.href = resumeFiles[type];
    link.download = type === "sde" ? "Vikas_Pal_SDE_Resume.pdf" : "Vikas_Pal_AIML_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="resume-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleBackdropClick}
        >
          <motion.div
            className="resume-modal"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
            >
              <HiX className="w-6 h-6 text-gray-500 dark:text-gray-400" />
            </button>

            {/* Modal Header */}
            <div className="text-center mb-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-[#667eea] to-[#764ba2] mb-4"
              >
                <HiDownload className="w-8 h-8 text-white" />
              </motion.div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Download Resume
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Select the resume type based on your requirement
              </p>
            </div>

            {/* Resume Options */}
            <div className="space-y-4">
              {/* SDE Option */}
              <motion.button
                onClick={() => handleDownload("sde")}
                className="resume-option w-full text-left"
                whileHover={{ x: 8 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-r from-[#667eea] to-[#764ba2] flex items-center justify-center">
                  <HiCode className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white text-lg">
                    Software Development Engineer
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Backend, Full Stack, System Design focused
                  </p>
                </div>
                <motion.div
                  className="ml-auto"
                  whileHover={{ scale: 1.1 }}
                >
                  <HiDownload className="w-6 h-6 text-[#667eea]" />
                </motion.div>
              </motion.button>

              {/* AI/ML Option */}
              <motion.button
                onClick={() => handleDownload("aiml")}
                className="resume-option resume-option-aiml w-full text-left"
                whileHover={{ x: 8 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-r from-[#4facfe] to-[#00f2fe] flex items-center justify-center">
                  <HiChip className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white text-lg">
                    AI / Machine Learning Engineer
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Deep Learning, NLP, Computer Vision focused
                  </p>
                </div>
                <motion.div
                  className="ml-auto"
                  whileHover={{ scale: 1.1 }}
                >
                  <HiDownload className="w-6 h-6 text-[#4facfe]" />
                </motion.div>
              </motion.button>
            </div>

            {/* Footer Note */}
            <motion.p
              className="text-center text-sm text-gray-500 dark:text-gray-400 mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Both resumes highlight relevant skills and experience
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
