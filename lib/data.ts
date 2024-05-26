import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import women from "@/public/women.jpg";
import c from "@/public/college.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Education",
    hash: "#education",
  },
 
  {
    name: "Contact",
    hash: "#contact",
  },
  
  
] as const;

export const educationsData = [
  {
    title: "B.Tech Pursing",
    location: "JNTUH University College Of Engineering, Sultanpur",
    description:
      "I'm Currently Pursing B.Tech In 2nd year Computer Scieence & Engineering",
    icon: React.createElement(LuGraduationCap),
    date: "2023 - Present",
  },
  {
    title: "Polytechnic",
    location: "Quli Qutub Shah Govt Polytechnic College, Telangana Hyderabad",
    description:
      "I Completed Diploma in Computer Science & Engineering From Quli Qutub Shah Government Polytechnic College Passed Out in 2023 With 9.37 CGPA",
    icon: React.createElement(LuGraduationCap),
    date: "2020 - 2023",
  },
  {
    title: "SSC",
    location: "St Ann's Grammar High School, Telangana Hyderabad",
    description:
      "I Completed SSC Form St. Ann's Grammar High School in 2020 Passed Out With 10.0 GPA",
    icon: React.createElement(LuGraduationCap),
    date: "2020",
  },
] as const;

export const projectsData = [
  // {
  //   title: "CorpComment",
  //   description:
  //     "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
  //   tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
  //   imageUrl: corpcommentImg,
  // },
  {
    title: "Result Analyzier Local",
    description:
      "A Result Analyzier Model Which Accept a Excel File As Input and it process and display the results of a student for indiviual branch.",
    tags: ["Next.js", "Redux"],
    imageUrl: c,
  },
  {
    title: "Women Safety Application",
    description:
      "A message is immediate sent to the register number, containing the user's geographical location as well as the contact details of a pre-selected list of contacts and call is going to be connected.",
    tags: ["Java", "Firebase", "XML"],
    imageUrl: women,
  },
] as const;

export const skillsData = [
  "C",
  "C++",
  "Java",
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Git",
  "Python",
  "DSA",
  "SQL",
 
] as const;
