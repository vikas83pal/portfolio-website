"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { useRef, useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string | StaticImageData;
  siteLink?: string;
  githubLink?: string;
  status?: "In Progress" | "Completed";
  index: number;
}

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  siteLink,
  githubLink,
  status,
  index,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse position for 3D tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth spring animation
  const springConfig = { stiffness: 150, damping: 15 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) / rect.width);
    y.set((e.clientY - centerY) / rect.height);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  const imageSrc = typeof imageUrl === "string" ? imageUrl : imageUrl?.src;
  const hasImage = imageSrc && imageSrc.length > 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="mb-8"
    >
      <motion.div
        className="project-card-3d"
        style={{
          rotateX: isHovered ? rotateX : 0,
          rotateY: isHovered ? rotateY : 0,
          transformStyle: "preserve-3d",
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        whileHover={{ z: 50 }}
      >
        <div className="project-card-inner rounded-2xl overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Image Section */}
            <div className="project-image-container relative lg:w-1/2 h-64 lg:h-80">
              {hasImage ? (
                <Image
                  src={imageSrc}
                  alt={title}
                  fill
                  quality={95}
                  className="object-cover transition-transform duration-500"
                  style={{
                    transform: isHovered ? "scale(1.05)" : "scale(1)",
                  }}
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-[#667eea] to-[#764ba2] flex items-center justify-center">
                  <div className="text-center text-white">
                    <HiSparkles className="w-16 h-16 mx-auto mb-4 opacity-80" />
                    <span className="text-lg font-medium opacity-90">Coming Soon</span>
                  </div>
                </div>
              )}
              
              {/* Status Badge */}
              {status === "In Progress" && (
                <motion.div
                  className="absolute top-4 left-4 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white text-sm font-medium shadow-lg"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  🚀 In Progress
                </motion.div>
              )}

              {/* Hover Overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 flex items-end justify-center pb-6"
                style={{ opacity: isHovered ? 1 : 0 }}
              >
                <div className="flex gap-4">
                  {siteLink && (
                    <motion.a
                      href={siteLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/20 backdrop-blur-sm text-white font-medium hover:bg-white/30 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaExternalLinkAlt className="w-4 h-4" />
                      Visit
                    </motion.a>
                  )}
                  {githubLink && (
                    <motion.a
                      href={githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/20 backdrop-blur-sm text-white font-medium hover:bg-white/30 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaGithub className="w-4 h-4" />
                      GitHub
                    </motion.a>
                  )}
                </div>
              </motion.div>
            </div>

            {/* Content Section */}
            <div className="lg:w-1/2 p-6 lg:p-8 flex flex-col justify-center">
              <motion.h3
                className="text-2xl lg:text-3xl font-bold mb-4 text-gray-900 dark:text-white"
                style={{
                  transform: isHovered ? "translateZ(30px)" : "translateZ(0)",
                  transition: "transform 0.3s ease",
                }}
              >
                {title}
              </motion.h3>

              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {tags.map((tag, tagIndex) => (
                  <motion.span
                    key={tagIndex}
                    className="project-tag"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: tagIndex * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>

              {/* Desktop Links */}
              <div className="hidden lg:flex gap-4">
                {siteLink && (
                  <motion.a
                    href={siteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white font-medium shadow-lg hover:shadow-xl transition-shadow"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaExternalLinkAlt className="w-4 h-4" />
                    Visit Project
                  </motion.a>
                )}
                {githubLink && (
                  <motion.a
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-900 dark:bg-white/10 text-white font-medium shadow-lg hover:shadow-xl transition-shadow"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaGithub className="w-5 h-5" />
                    View Code
                  </motion.a>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}