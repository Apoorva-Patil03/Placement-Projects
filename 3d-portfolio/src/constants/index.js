import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
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
    title: "Certifications",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "C++ Developer",
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
    name: "TypeScript",
    icon: typescript,
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
    name: "MongoDB",
    icon: mongodb,
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
    name: "C++",
    icon: figma,
  },
  {
    name: "Next JS",
    icon: docker,
  },
];

const experiences = [
  {
    title: "HTML, CSS, and Javascript for Web Developers",
    company_name: "By Johns Hopkins University through Coursera",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Jan 2022 - Feb 2022",
    points: [
      "In this course, I learned the basic tools by learning how to implement modern web pages with HTML and CSS.",
      "Then advanced learning as making responsive webpages and intro of AJAX.",
      "I got a thorough introduction to the incredibly powerful language of the web Javascript.",
    ],
  },
  {
    title: "Java Programming: Solving Problems with Software",
    company_name: "By Duke University through Coursera",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Feb 2022",
    points: [
      "In this course I learned edit, compile, and run java programs using conditionals and loops and improved programming and problem-solving skills.",
      "Learned to design algorithms as well as develop and debug programs.",
      "Using custom open-source classes,I learned to write programs that access and transform  types of data.",
    ],
  },
  {
    title: "Getting Started with Git and Github",
    company_name: "By IBM",
    icon: shopify,
    iconBg: "#383E56",
    date: "Dec 2023 - Jan 2024",
    points: [
      "Description of version control and its place in social and collaborative coding and in DevOps. ",
      "Explain basic Git concepts such as repositories and branches used for distributed version control and social coding.",
      "Create GitHub repositories and branches, and perform pull requests (PRs) and merge operations, to collaborate on a team project.",
    ],
  },
  {
    title: "Introduction to Software Engineering",
    company_name: "By IBM",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Dec 2023 - Jan 2024",
    points: [
      "Describe software engineering, Software Development Lifecycle (SDLC), and software development tools, technologies and stacks.",
      "Outline approaches to application architecture and design, patterns, and deployment architectures.",
      "Summarize the skills required in software engineering and describe the career options it provides."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Teachnook",
    name: "This internship was about gaining skills in HTML, CSS, and JavaScript and making the website more interactive by using frameworks and libraries. By gaining this experience I feel confident about my skills.",
    designation: "Web Developer Intern",
    company: "01/08/2022 - 30/09/2022",
  },
  {
    testimonial:
      "Oasis Infobyte",
    name: "This internship was about gaining skills in Java and building programs by using Java basics like functions and many more things!",
    designation: "Java Developer Intern",
    company: "01/02/2023 - 01/03/2023",
  },
  {
    testimonial:
      "Nexus Infosec",
    name: "As a Cyber Data Analyst intern, I am working on data analysis, reporting, and research. Learning about various tools and technologies used in the industry of cyber-security.",
    designation: "Cyber Data Analyst Intern",
    company: "01/03/2023 - 04/05/2023",
  },
];

const projects = [
  {
    name: "BookTheCar",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
   // source_code_link: "https://github.com/",
  },
  {
    name: "PulsePalace",
    description:
      "Web-shop for the latest electronics on our easy-to-use website. Pick your favorite gadgets, place your order effortlessly, and get them delivered quickly to your door.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "nextjs14",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
   // source_code_link: "https://github.com/",
  },
  {
    name: "EchoBlend",
    description:
      "Experience the essence of social connectivity with a seamless platform. Share moments, connect with friends, and explore trends effortlessly in this user-friendly environment.",
    tags: [
      {
        name: "appwrite",
        color: "blue-text-gradient",
      },
      {
        name: "reactquery",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
   // source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };