"use client";

import React from "react";
import type {} from "react-dom/experimental";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <motion.button
      type="submit"
      className="glow-button w-full sm:w-auto flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
      disabled={pending}
      whileHover={{ scale: pending ? 1 : 1.02 }}
      whileTap={{ scale: pending ? 1 : 0.98 }}
    >
      {pending ? (
        <>
          <motion.div
            className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          Sending...
        </>
      ) : (
        <>
          Send Message
          <FaPaperPlane className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </>
      )}
    </motion.button>
  );
}
