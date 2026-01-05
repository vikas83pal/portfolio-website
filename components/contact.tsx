"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import { HiMail, HiLocationMarker, HiPhone } from "react-icons/hi";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";

const contactInfo = [
  {
    icon: HiMail,
    title: "Email",
    value: "Vikas83pal@gmail.com",
    href: "mailto:Vikas83pal@gmail.com",
  },
  {
    icon: HiLocationMarker,
    title: "Location",
    value: "Hyderabad, India",
    href: null,
  },
];

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 max-w-5xl mx-auto px-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Get In Touch</SectionHeading>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
        I'm currently open to new opportunities. Whether you have a question or
        just want to say hi, I'll get back to you as soon as possible!
      </p>

      <div className="grid lg:grid-cols-5 gap-8">
        {/* Contact Info */}
        <motion.div
          className="lg:col-span-2 space-y-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="glass rounded-2xl p-6 border border-gray-200/50 dark:border-white/10">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
              Contact Information
            </h3>

            {contactInfo.map((item, index) => (
              <motion.div
                key={item.title}
                className="flex items-start gap-4 mb-6 last:mb-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#667eea] to-[#764ba2] flex items-center justify-center text-white shadow-lg flex-shrink-0">
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {item.title}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-gray-900 dark:text-white font-medium hover:text-[#667eea] transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-gray-900 dark:text-white font-medium">
                      {item.value}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Social Links */}
            <div className="pt-6 border-t border-gray-200/50 dark:border-white/10">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                Connect with me
              </p>
              <div className="flex gap-4">
                <motion.a
                  href="https://www.linkedin.com/in/vikas-pal-b91067254/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link text-gray-700 dark:text-white/70"
                  whileHover={{ y: -3 }}
                >
                  <BsLinkedin className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="https://github.com/vikas83pal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link text-gray-700 dark:text-white/70"
                  whileHover={{ y: -3 }}
                >
                  <FaGithubSquare className="w-6 h-6" />
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="lg:col-span-3"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="glass rounded-2xl p-8 border border-gray-200/50 dark:border-white/10">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
              Send a Message
            </h3>

            <form
              className="space-y-4"
              action={async (formData) => {
                const { data, error } = await sendEmail(formData);

                if (error) {
                  toast.error(error);
                  return;
                }

                toast.success("Message sent successfully!");
              }}
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    className="contact-input w-full"
                    name="senderName"
                    type="text"
                    placeholder="John Doe"
                    maxLength={100}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Email *
                  </label>
                  <input
                    className="contact-input w-full"
                    name="senderEmail"
                    type="email"
                    required
                    placeholder="john@example.com"
                    maxLength={500}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  className="contact-input w-full"
                  name="subject"
                  type="text"
                  placeholder="What's this about?"
                  maxLength={200}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  className="contact-input w-full min-h-[150px] resize-none"
                  name="message"
                  placeholder="Your message here..."
                  required
                  maxLength={5000}
                />
              </div>

              <SubmitBtn />
            </form>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
