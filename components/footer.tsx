import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaBlogger, FaGithubSquare, FaInstagramSquare, FaPhone, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; 2024 Vikas Pal. All rights reserved.
      </small>
      <p className="text-xs">
        {/* <span className="font-semibold">About this website:</span> built with
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, React Email & Resend, Vercel hosting. */}
      </p>
      <div className="flex justify-center space-x-6">
    <a
      className="text-gray-600 hover:text-gray-900 transition"
      href="https://www.linkedin.com/in/vikas-pal-b91067254/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <BsLinkedin style={{ fontSize: "1.25rem" }} />
    </a>
    <a
      className="text-gray-600 hover:text-gray-900 transition"
      href="https://github.com/vikas83pal"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaGithubSquare style={{ fontSize: "1.25rem" }} />
    </a>
    <a
      className="text-gray-600 hover:text-gray-900 transition"
      href="https://www.instagram.com/mr_maddy.786/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaInstagramSquare style={{ fontSize: "1.25rem" }} />
    </a>
    <a
          className="text-gray-600 hover:text-gray-900 transition"
          href="YOUR_BLOG_URL"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaBlogger style={{ fontSize: "1.25rem" }} />
        </a>
        <a
          className="text-gray-600 hover:text-gray-900 transition"
          href="https://www.youtube.com/channel/UCfkhHDrlxcZF6Q-MtkNq-eA"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube style={{ fontSize: "1.25rem" }} />
        </a>
        
  </div>
    </footer>
  );
}
