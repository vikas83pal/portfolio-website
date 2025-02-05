import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import women from "@/public/women.jpg";
import c from "@/public/college.png";
import bmi from "@/public/BMI.png";
import Todo from "@/public/todolist.png";
import cnn from "@/public/cnn.png";
import TCT from "@/public/tct.png";
import SPC from "@/public/spc.png";
import ChatApp from "@/public/chatApp.jpeg"
import PORTFOLIO from '@/public/portfolio.png';
import { StaticImageData } from "next/image"; // Import StaticImageData

// Define the Project type to include siteLink and githubLink
export interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl: StaticImageData; // Use StaticImageData for image URLs
  siteLink?: string; // Optional property for project site link
  githubLink?: string; // Optional property for GitHub link
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
    title: "B.Tech Pursuing",
    location: "JNTUH University College Of Engineering, Sultanpur",
    description: "I'm Currently Pursuing B.Tech In 2nd year Computer Science & Engineering",
    icon: React.createElement(LuGraduationCap),
    date: "2023 - Present",
  },
  {
    title: "Polytechnic",
    location: "Quli Qutub Shah Govt Polytechnic College, Telangana Hyderabad",
    description: "I Completed Diploma in Computer Science & Engineering From Quli Qutub Shah Government Polytechnic College Passed Out in 2023 With 9.37 CGPA",
    icon: React.createElement(LuGraduationCap),
    date: "2020 - 2023",
  },
  {
    title: "SSC",
    location: "St Ann's Grammar High School, Telangana Hyderabad",
    description: "I Completed SSC From St. Ann's Grammar High School in 2020 Passed Out With 10.0 GPA",
    icon: React.createElement(LuGraduationCap),
    date: "2020",
  },
];

export const projectsData: Project[] = [
  {
    title: "JNTU Result Analyzer",
    description: "An interactive React-based platform for automated analysis of student performance, providing detailed insights through reporting mechanisms.",
    tags: ["React", "Redux", "REST API"],
    imageUrl: c,
    siteLink: "https://github.com/vikas83pal/jntuhresults", // Add your site link here
    githubLink: "https://github.com/vikas83pal/jntuhresults", // Add your GitHub link here
  },
  {
    title: "Women Safety Application",
    description: "A real-time safety app that shares location and contact details with pre-selected contacts during emergencies, ensuring quick response.",
    tags: ["Java", "Firebase", "Geolocation"],
    imageUrl: women,
    siteLink: "https://github.com/vikas83pal/Women_Saftey_Application/tree/main", // Add your site link here
    githubLink: "https://github.com/vikas83pal/Women_Saftey_Application/tree/main", // Add your GitHub link here
  },
  {
    title: "Brain Tumor Detection",
    description: "A YOLO-based deep learning model for accurate brain tumor detection in medical images, leveraging automated preprocessing techniques.",
    tags: ["Python", "YOLO", "Deep Learning"],
    imageUrl: cnn,
    siteLink: "https://github.com/vikas83pal/Brain-Tumor-Detection", // Add your site link here
    githubLink: "https://www.kaggle.com/code/vikaspal004/tumor-classification-using-keras-for-beginners", // Add your GitHub link here
  },
  {
    title: "Real-Time Chat Application",
    description: "A WebSocket-based real-time chat app supporting multiple chat rooms, built with Spring Boot and React for seamless messaging.",
    tags: ["Spring Boot", "React", "WebSocket"],
    imageUrl: ChatApp, // Replace with the actual image import
    siteLink: "https://your-chat-app-link.com", // Add your site link here
    githubLink: "https://github.com/vikas83pal/chat-application", // Add your GitHub link here
  },
  {
    title: "TodoList",
    description: "This is a simple Todo List application built with React. It allows users to add, edit, and delete todo items with descriptions.",
    tags: ["React", "Routes", "Bootstrap"],
    imageUrl: Todo,
    siteLink: "https://vikas83pal.github.io/todo-list-js/", 
    githubLink: "https://github.com/vikas83pal/todo-list-js", 
  },


  {
    title: "BMI Application",
    description: "This is an Android application to calculate Body Mass Index (BMI). The app takes input for weight, height in feet, and height in inches to compute the BMI and display whether the user is underweight, healthy, or overweight.",
    tags: ["Java"],
    imageUrl: bmi,
    siteLink: "https://github.com/vikas83pal/BMI_APPLICATION/blob/master/apk/app-debug.apk", // Add your site link here
    githubLink: "https://github.com/vikas83pal/BMI_APPLICATION", // Add your GitHub link here
  },
  
  
  {
    title: "Tic Tac Toe",
    description: "A move is immediately registered on the game board, updating the current state and showing the player's symbol (X or O) at the chosen position until a player wins or the board is full, resulting in a draw.",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: TCT,
    siteLink: "https://vikas83pal.github.io/Tic-Tac-Toe/", // Add your site link here
    githubLink: "https://github.com/vikas83pal/Tic-Tac-Toe", // Add your GitHub link here
  },
  {
    title: "Rock Paper Scissors",
    description: "A move is instantly registered, revealing both the player's and the opponent's choices (rock, paper, or scissors). The system then evaluates the result, announces the winner, and updates the score.",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: SPC,
    siteLink: "https://vikas83pal.github.io/sps-game/", // Add your site link here
    githubLink: "https://github.com/vikas83pal/sps-game", // Add your GitHub link here
  },
  {
    title: "Personal WebSite - Portfolio ",
    description: "This portfolio showcases my projects and skills in web development.",
    tags: ["TypeScript","JavaScript","CSS","React"],
    imageUrl: PORTFOLIO,
    siteLink: "https://vikas83.netlify.app/", // Add your site link here
    githubLink: "https://github.com/vikas83pal/portfolio-website", // Add your GitHub link here
  },
  
];

export const skillsData = [
  "C",
  "C++",
  "Java",
  "Python",
  "JavaScript",
  "HTML",
  "CSS",
  "React",
  "Next.js",
  "Spring Boot",
  "Bootstrap",
  "Tailwind CSS",
  "Git",
  "GitHub",
  "Docker",
  "Kubernetes",
  "Jenkins",
  "Apache Kafka",
  "SQL",
  "MongoDB",
  "Node.js",
  "Express.js",
  "Figma",
  "Firebase",
  "WebSocket",
  "AI/ML",
];
