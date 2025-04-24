import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import { StaticImageData } from "next/image";
import rmtdevImg from "@/public/rmtdev.png";
import women from "@/public/women.jpg";
import c from "@/public/college.png";
import bmi from "@/public/BMI.png";
import Todo from "@/public/todolist.png";
import cnn from "@/public/cnn.png";
import TCT from "@/public/tct.png";
import SPC from "@/public/spc.png";
import ChatApp from "@/public/chatApp.jpeg";
import PORTFOLIO from '@/public/portfolio.png';
import automated from "@/public/automated.png";

// Define the Project type to include siteLink, githubLink, and status
export interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl: StaticImageData | string; // Handle both static and external URLs
  siteLink?: string; // Optional property for project site link
  githubLink?: string; // Optional property for GitHub link
  status?: 'In Progress' | 'Completed'; // Optional status field for tracking project state
}

export const links = [
  { name: "Home", hash: "#home" },
  { name: "About", hash: "#about" },
  { name: "Projects", hash: "#projects" },
  { name: "Skills", hash: "#skills" },
  { name: "Education", hash: "#education" },
  { name: "Contact", hash: "#contact" },
];

export const educationsData = [
  {
    title: "B.Tech in Computer Science & Engineering",
    location: "JNTUH University College of Engineering, Sultanpur",
    description:
      "Currently pursuing my B.Tech in Computer Science & Engineering. I am in my 3rd year and actively exploring core subjects including software development, backend systems, and AI/ML.",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - Expected 2026",
  },
  {
    title: "Diploma in Computer Science & Engineering",
    location: "Quli Qutub Shah Government Polytechnic College, Hyderabad, Telangana",
    description:
      "Completed my Diploma in Computer Science & Engineering with a CGPA of 9.37. Gained foundational knowledge in programming, computer networks, and operating systems.",
    icon: React.createElement(LuGraduationCap),
    date: "2020 - 2023",
  },
  {
    title: "Secondary School Certificate (SSC)",
    location: "St. Ann's Grammar High School, Hyderabad, Telangana",
    description:
      "Completed SSC with a GPA of 10.0, focusing on mathematics and science subjects which laid the groundwork for my technical journey.",
    icon: React.createElement(LuGraduationCap),
    date: "2020",
  },
];

export const projectsData: Project[] = [
  {
    title: "Automated Script Generation (AI-Powered Chatbot)",
    description:
      "An AI-powered chatbot that generates contextual scripts based on user prompts using a fine-tuned GPT-2 model. Backend built in Flask and hosted on Hugging Face Spaces, with a React-based frontend.",
    tags: ["Python", "Flask", "Hugging Face", "Transformers", "React"],
    imageUrl: automated.src, // Convert StaticImageData to string
    siteLink: "https://github.com/vikas83pal/Automated-Script-Generation-ML",
    githubLink: "https://github.com/vikas83pal/Automated-Script-Generation-ML",
  },
  {
    title: "JNTU Result Analyzer",
    description:
      "A platform that automates result analysis and visualizes student performance using React and Redux, integrated with a RESTful API backend.",
    tags: ["React", "Redux", "REST API"],
    imageUrl: c.src, // Convert StaticImageData to string
    siteLink: "https://github.com/vikas83pal/jntuhresults",
    githubLink: "https://github.com/vikas83pal/jntuhresults",
  },
  {
    title: "Women Safety Application",
    description:
      "A safety alert app built in Java that sends live location and user details to emergency contacts. Integrated with Firebase for real-time updates and authentication.",
    tags: ["Java", "Firebase", "Geolocation"],
    imageUrl: women.src, // Convert StaticImageData to string
    siteLink: "https://github.com/vikas83pal/Women_Saftey_Application",
    githubLink: "https://github.com/vikas83pal/Women_Saftey_Application",
  },
  {
    title: "Brain Tumor Detection System",
    description:
      "A deep learning-based detection system using YOLO for identifying brain tumors in medical imagery. Achieved over 90% accuracy in detection.",
    tags: ["Python", "YOLO", "Deep Learning"],
    imageUrl: cnn.src, // Convert StaticImageData to string
    siteLink: "https://github.com/vikas83pal/Brain-Tumor-Detection",
    githubLink: "https://github.com/vikas83pal/Brain-Tumor-Detection",
  },
  {
    title: "Real-Time Chat Application",
    description:
      "A real-time messaging platform supporting multi-room chats, built using Spring Boot and React. Employs WebSockets for live communication.",
    tags: ["Spring Boot", "React", "WebSocket"],
    imageUrl: ChatApp.src, // Convert StaticImageData to string
    siteLink: "https://github.com/vikas83pal/chat-application",
    githubLink: "https://github.com/vikas83pal/chat-application",
  },
  {
    title: "DevMatch (In Progress)",
    description:
      "A collaborative platform for developers to find and join suitable projects based on skills. Features include project search, messaging, and profile-based suggestions. Currently under development.",
    tags: ["Spring Boot", "React", "MongoDB"],
    imageUrl: "", // Explicitly empty for in-progress projects
    siteLink: "https://github.com/vikas83pal/DevMatch",
    githubLink: "https://github.com/vikas83pal/DevMatch",
    status: "In Progress",
  },
];

export const skillsData = [
  // Programming Languages
  "C",
  "C++",
  "Java",
  "Python",
  "JavaScript",

  // Web Development
  "HTML",
  "CSS",
  "React",
  "Node.js",
  "Express.js",
  "Bootstrap",
  "Tailwind CSS",

  // Backend & Frameworks
  "Spring Boot",
  "WebSocket",
  "Firebase",

  // DevOps & Tools
  "Git",
  "GitHub",
  "Docker",
  "Kubernetes",
  "Jenkins",
  "Apache Kafka",

  // Database
  "SQL",
  "MongoDB",

  // Design & Prototyping
  "Figma",

  // AI / ML
  "AI/ML",
];