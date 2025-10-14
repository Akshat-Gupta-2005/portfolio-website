// src/data/skillsData.js
import { Code, Database, Terminal, Cpu, GitBranch, Palette, Mic, Users, Brain, Laptop } from "lucide-react";
import { Sparkles, Wrench } from "lucide-react";
import { Github, Linkedin, Mail, Twitter, Send } from "lucide-react";

export const navItems = ["About", "Projects", "Experience", "Certificates", "Contact"];

export const techStack = [
  // Programming Languages
  { name: "C", icon: Code },
  { name: "C++", icon: Code },
  { name: "Java", icon: Code },
  { name: "Python", icon: Code },
  { name: "TypeScript", icon: Code },
  { name: "JavaScript", icon: Code },
  { name: "HTML", icon: Code },
  { name: "CSS", icon: Code },

  // Frameworks & Libraries
  { name: "React.js", icon: Laptop },
  { name: "Next.js", icon: Laptop },
  { name: "React Native", icon: Laptop },
  { name: "Express.js", icon: Laptop },
  { name: "Node.js", icon: Laptop },
  { name: "NumPy", icon: Brain },
  { name: "Pandas", icon: Brain },
  { name: "Matplotlib", icon: Brain },
  { name: "PyTorch (Basic)", icon: Brain },
  { name: "GSAP", icon: Cpu },
  { name: "Framer Motion", icon: Cpu },
  { name: "EJS", icon: Code },
  { name: "Tailwind CSS", icon: Palette },
  { name: "Bootstrap", icon: Palette },
  { name: "LangChain", icon: Brain },

  // Databases
  { name: "MySQL", icon: Database },
  { name: "MongoDB", icon: Database },

  // Developer Tools & Platforms
  { name: "Git", icon: GitBranch },
  // { name: "GitHub", icon: GitBranch },
  // { name: "GitHub Pages", icon: GitBranch },
  // { name: "VS Code", icon: Terminal },
  { name: "Tableau", icon: Cpu },
  { name: "Power BI", icon: Cpu },
  { name: "Microsoft Access", icon: Database },
  { name: "Excel", icon: Cpu },

  // Core CS Skills
  { name: "API Integration", icon: Cpu },
  { name: "Debugging", icon: Brain },
  { name: "Data Structures & Algorithms (DSA)", icon: Brain },
  { name: "Object-Oriented Programming (OOP)", icon: Brain },
];

export const extraSkills = [
  { name: "Problem Solving", icon: Brain },
  { name: "Leadership", icon: Users },
  { name: "Team Collaboration", icon: Users },
  { name: "Public Speaking", icon: Mic },
  { name: "Event Management", icon: Users },
  { name: "Marketing Strategy", icon: Palette },
];

export const categories = [
  "All",
  "Web Apps",
  "Machine Learning",
  "Open Source"
];

export const projects = [
  {
    title: "BooksToDo Web App",
    description:
      "A scalable, interactive full-stack application integrating the Google Books API to let users search, manage, and track personal reading lists. Designed with a responsive UI, modular architecture, and API-driven development.",
    category: "Web Apps",
    tech: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "axios",
      "react-router-dom",
      "dotenv",
      "CSS",
      "MVC Pattern",
      "JWT (planned)"
    ],
    github: "https://github.com/Akshat-Gupta-2005/BooksToDo-App",
    demo: "#"
  },
  {
    title: "Smoothy Recipes Web App",
    description:
      "Full-stack recipe management platform with user authentication, JWT sessions, and role-based access. Implements secure CRUD operations, validation, and RESTful APIs within an MVC architecture.",
    category: "Web Apps",
    tech: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "EJS",
      "JWT",
      "cookie-parser",
      "validator",
      "dotenv",
      "CSS",
      "MVC Pattern"
    ],
    github: "https://github.com/Akshat-Gupta-2005/Smoothy-Receipies-App",
    demo: "#"
  },
  {
    title: "ShopSagaRedux Web App",
    description:
      "Modern e-commerce frontend demo built with React and Redux Toolkit, demonstrating scalable cart state management, real-time updates, and modular components for a smooth shopping experience.",
    category: "Web Apps",
    tech: [
      "React",
      "Redux Toolkit",
      "React-Redux",
      "React Router DOM",
      "CSS",
      "Create React App"
    ],
    github: "https://github.com/Akshat-Gupta-2005/ShopSageRedux-App",
    demo: "#"
  },
  {
    title: "NavBar Sidebar Web App",
    description:
      "Responsive React UI showcasing a dynamic navigation system with a collapsible sidebar and icon-based navbar. Built using modern layout principles, modular components, and testing setup.",
    category: "Web Apps",
    tech: [
      "React 19",
      "React Router DOM",
      "Lucide React",
      "CSS",
      "Jest",
      "React Testing Library"
    ],
    github: "https://github.com/Akshat-Gupta-2005/NavBarSideBar-App",
    demo: "#"
  },
  {
    title: "Redux Counter Web App",
    description:
      "A simple yet scalable Redux Toolkit demo app implementing counter functionality with global state management and UI-state synchronization — a foundation for larger applications.",
    category: "Web Apps",
    tech: [
      "React",
      "Redux Toolkit",
      "React-Redux",
      "Create React App",
      "CSS"
    ],
    github: "https://github.com/Akshat-Gupta-2005/ReduxCounter-App",
    demo: "#"
  },
  {
    title: "Review Analysis AI",
    description:
      "Python-based NLP application that performs sentiment analysis, ABSA, and summarization using LangChain and Hugging Face models. Designed for extracting insights from customer feedback.",
    category: "Machine Learning",
    tech: [
      "Python",
      "LangChain",
      "Hugging Face Transformers",
      "Torch",
      "NLTK",
      "SentencePiece",
      "Tiktoken",
      "Facebook BART"
    ],
    github: "#",
    demo: "#"
  },
  {
    title: "Summarise AI",
    description:
      "An intelligent NLP application generating age-specific summaries using Hugging Face Transformers and LangChain. Enables simplified, context-aware summaries for educational and content purposes.",
    category: "Machine Learning",
    tech: [
      "Python",
      "LangChain",
      "Hugging Face Transformers",
      "Facebook BART",
      "Torch",
      "Torchvision",
      "Torchaudio"
    ],
    github: "#",
    demo: "#"
  }
];

export const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: [
      { name: "C/C++", level: 80 },
      { name: "Java", level: 85 },
      { name: "Python", level: 90 },
      { name: "TypeScript/JavaScript", level: 88 },
      { name: "HTML/CSS", level: 95 },
      { name: "MySQL", level: 85 },
      { name: "MongoDB", level: 80 }
    ]
  },
  {
    title: "Frameworks & Libraries",
    icon: Sparkles,
    skills: [
      { name: "React.js / Next.js", level: 90 },
      { name: "React Native", level: 80 },
      { name: "Node.js / Express.js", level: 85 },
      { name: "NumPy / Pandas / Matplotlib", level: 75 },
      { name: "PyTorch (Basic)", level: 60 },
      { name: "GSAP / Framer Motion", level: 85 },
      { name: "EJS", level: 80 },
      { name: "Tailwind CSS / Bootstrap", level: 90 },
      { name: "LangChain", level: 70 }
    ]
  },
  {
    title: "Developer Tools & Platforms",
    icon: Wrench,
    skills: [
      { name: "Git / GitHub / GitHub Pages", level: 90 },
      { name: "VS Code", level: 95 },
      { name: "Tableau / Power BI", level: 75 },
      { name: "Microsoft Access / Excel", level: 80 }
    ]
  },
  {
    title: "Core CS Skills",
    icon: Code,
    skills: [
      { name: "Data Structures & Algorithms (DSA)", level: 85 },
      { name: "Object-Oriented Programming (OOP)", level: 90 },
      { name: "Problem Solving", level: 88 },
      { name: "Debugging", level: 80 },
      { name: "API Integration", level: 85 }
    ]
  }
];

export const education = [
  {
    degree: "B.Tech in Computer Science",
    institution: "Vellore Institute of Technology",
    duration: "Aug 2023 – Jul 2027",
    achievements: ["CGPA: 9.35 (up to 4th semester)"]
  },
  {
    degree: "Pre-University",
    institution: "Birla Vidya Niketan School, Delhi",
    duration: "Apr 2022 – May 2023",
    achievements: ["CBSE: 95.2%"]
  },
  {
    degree: "Secondary School",
    institution: "Birla Vidya Niketan School, Delhi",
    duration: "Apr 2020 – May 2021",
    achievements: ["CBSE: 99.6%"]
  }
];

export const workExperience = [
  {
    role: "Frontend Intern",
    company: "Nexgen Tech Solutions",
    duration: "May 2025 – Jun 2025",
    description:
      "Worked on multiple frontend projects, building scalable and responsive web applications with ReactJS, Redux, and Redux-Saga. Developed reusable UI components to improve code efficiency and application performance.",
    tech: [
      "ReactJS",
      "Google Books API",
      "Redux Toolkit",
      "Redux-Saga",
      "React Router",
      "Local Storage"
    ],
    projects: [
      "Bookmarked Books App – Built with ReactJS and Google Books API, enabling book search, bookmarking, and 100% persistent local storage for enhanced usability.",
      "Redux Counter App – Developed with Redux Toolkit, reducing state management boilerplate by 40% and ensuring scalable architecture.",
      "ShopSagaRedux – Created an e-commerce cart app using Redux-Saga for asynchronous operations, improving cart responsiveness by ~50%.",
      "Reusable UI Components – Engineered a responsive Navbar & Sidebar with React Router, achieving 100% mobile responsiveness and 30% code reduction."
    ]
  }
];

export const socialLinks = [
  { icon: Github, href: "https://github.com/Akshat-Gupta-2005", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/akshatgupta2005/", label: "LinkedIn" },
  // { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Mail, href: "mailto:gemini.akshatgupta@gmail.com", label: "Email" }
];

export const hackathons = [
  {
    event: "Yantra Central Hackathon – 2025, VIT Vellore",
    project: "Gesture Recognition System using Sensor-based Hardware",
    position: "Top 10 (out of 100+ teams)",
    year: "2025"
  },
  {
    event: "Summer School on AI , DTU Delhi",
    project: "Image Classification, NLP, Fake News Detection, Image Captioning, CLIP",
    position: "Participant",
    year: "2024"
  },
  {
    event: "Cook-Off 9.0 – DSA Hackathon, VIT Vellore",
    project: "Competitive Programming Hackathon on DSA",
    position: "Participant",
    year: "2024"
  },
];

export const workshops = [
  {
    event: "Summer School on AI: Deep Dive into Deep Learning, Delhi Technological University (DTU)",
    duration: "6 weeks",
    year: "2024",
    topics: [
      "PyTorch",
      "CNNs",
      "RNNs/LSTMs",
      "Transformers",
      "Generative AI (GPT-2, Autoencoders, Diffusion Models)"
    ],
    projects: [
      "Image Classification",
      "NLP",
      "Fake News Detection",
      "Image Captioning",
      "Vision-Language Models (CLIP)"
    ]
  }
];

export const certificates = [
  {
    title: "Internship at Nexgen Tech Solutions",
    organization: "Nexgen Tech Solutions",
    date: "2025",
    category: "Web Development",
    link: "https://drive.google.com/file/d/1xoF8KpgUMCHUDNYFKsA_Ang86LHh8Xu3/view?usp=sharing",
    color: "from-orange-500 to-yellow-500"
  },
  {
    title: "Cook-Off 9.0 – DSA Hackathon, VIT Vellore",
    organization: "Vellore Institute of Technology",
    date: "2024",
    category: "Competitive Programming",
    link: "https://drive.google.com/file/d/1M7aFgSmF-ysk9QADzM9LXnACf0vB8s6i/view?usp=sharing",
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Yantra Central Hackathon – 2025, VIT Vellore",
    organization: "Vellore Institute of Technology",
    date: "2025",
    category: "Product Hackathon",
    link: "https://drive.google.com/file/d/1pxlAVOVlpnaQ7y1nnJlI8LY8w7hIb_4C/view?usp=sharing",
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Summer School on AI , DTU Delhi",
    organization: "Delhi Technological University",
    date: "2024",
    category: "AI & Machine Learning",
    link: "https://drive.google.com/file/d/1F0wYszl8cl1jRov60xSA4v5EYTme0twB/view?usp=sharing",
    color: "from-green-500 to-emerald-500"
  },
]; 