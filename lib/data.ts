import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import women from "@/public/women.jpg";
import c from "@/public/college.png";
import bmi from "@/public/BMI.png";
import Todo from "@/public/todolist.png"
import TCT from "@/public/tct.png";
import SPC from "@/public/spc.png";

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
  {
    title: "TodoList",
    description:
      "This is a simple Todo List application built with React. It allows users to add, edit, and delete todo items with descriptions.",
    tags: ["React","Routes","BootStrap"],
    imageUrl: Todo,
  },
  {
    title: "BMI Application",
    description:
      "This is an Android application to calculate Body Mass Index (BMI). The app takes input for weight, height in feet, and height in inches to compute the BMI and display whether the user is underweight, healthy, or overweight.",
    tags: ["Java"],
    imageUrl: bmi,
  },
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
  {
    title: "Tic Tac Toe",
    description:
      "A move is immediately registered on the game board, updating the current state and showing the player's symbol (X or O) at the chosen position. A notification is sent to the opponent, informing them of their turn, and the game progresses automatically until a player wins, or the board is full, resulting in a draw.",
    tags: ["Html", "CSS", "Javascript"],
    imageUrl: TCT,
  },
  {
    title: "Rock Paper Scissor",
    description:
     "A move is instantly registered, revealing both the player's and the opponent's choices (rock, paper, or scissors). The system then evaluates the result, announces the winner, and updates the score. If it's a tie, both players are prompted to play again until a winner is determined or the game ends.",
    tags: ["Html", "Css", "Javascript"],
    imageUrl: SPC,
  },
] as const;

export const skillsData = [
  "Bootstrap",
  "C",
  "C++",
  "Java",
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Git",
  "Github",
  "Python",
  "DSA",
  "SQL",
 
] as const;
