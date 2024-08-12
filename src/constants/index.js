import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  ExpressJs,
  SQL,
  Firebase,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  sage,
  biharboard,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "MERN Stack Developer",
    icon: web,
  },
  {
    title: "Web Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "ExpressJs",
    icon: ExpressJs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "SQL",
    icon: SQL,
  },
  {
    name: "Firebase",
    icon: Firebase,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const educations = [
  {
    title: "Bachelor of Technology ( CSE )",
    company_name: "SAGE University Bhopal",
    icon: sage,
    iconBg: "#383E56",
    date: "August 2022 - Current",
    points: ["Semester 1st - SGPA - 7.9", "Semester 2nd - SGPA - 8.54"],
  },
  {
    title: "Public High School",
    company_name: "biharboard",
    icon: biharboard,
    iconBg: "#E6DEDD",
    date: "June 2020 - March 2022",
    points: ["Class 12th - 83.80%", "Class 10th - 79.75%"],
  },
];

const projects = [
  {
    name: "Subscription Plan Mgmt.",
    description:
      "Successfully completed subscription management project with seamless payment, user-friendly frontend, and a coupon code system for enhanced user satisfaction and engagement.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/suman987654432/Subscription-plan",
  },
  {
    name: "User Authentication",
    description:
      "Implemented robust user authentication with Gmail, emphasizing security through salting, session cookies, and OAuth 2.0. Highlights include unique salting and seamless user experience.",
    tags: [
      {
        name: "ejs",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "google-Oauth",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/suman987654432/User-Authentication",
  },
  {
    name: "Tinder Clone",
    description:
      "Created a MERN Stack Tinder-Clone, honing skills in MongoDB, Express.js, React, and Node.js. Built a seamless user experience, gaining practical insights for dynamic applications. Ready for new challenges!",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/suman987654432/Tinder-clone",
  },
];

export { services, technologies, educations, projects };
