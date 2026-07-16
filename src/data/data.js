// src/data/skillsData.js
// Extracted and updated from resume content
import { Code, Database, Terminal, Cpu, GitBranch, Palette, Mic, Users, Brain, Laptop, Workflow, Network } from "lucide-react";
import { Sparkles, Wrench } from "lucide-react";
import { Github, Linkedin, Mail, Twitter, Send } from "lucide-react";

export const navItems = ["About", "Projects", "Education and Experience", "Certificates", "Contact"];

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
  { name: "SQL", icon: Code },

  // Frameworks & Libraries
  { name: "React.js", icon: Laptop },
  { name: "Next.js", icon: Laptop },
  { name: "React Native", icon: Laptop },
  { name: "Express.js", icon: Laptop },
  { name: "Node.js", icon: Laptop },
  { name: "NumPy", icon: Brain },
  { name: "Pandas", icon: Brain },
  { name: "Matplotlib", icon: Brain },
  { name: "Seaborn", icon: Brain },
  { name: "Scikit-learn", icon: Brain },
  { name: "PyTorch (Basic)", icon: Brain },
  { name: "GSAP", icon: Cpu },
  { name: "Framer Motion", icon: Cpu },
  { name: "EJS", icon: Code },
  { name: "Tailwind CSS", icon: Palette },
  { name: "Bootstrap", icon: Palette },
  { name: "LangChain", icon: Brain },
  { name: "LangGraph", icon: Brain },

  // Databases
  { name: "MySQL", icon: Database },
  { name: "MongoDB", icon: Database },

  // Developer Tools & Platforms
  { name: "Git", icon: GitBranch },
  { name: "GitHub", icon: GitBranch },
  { name: "GitHub Pages", icon: GitBranch },
  { name: "VS Code", icon: Terminal },
  { name: "Jupyter Notebook", icon: Terminal },
  { name: "Tableau", icon: Cpu },
  { name: "Power BI", icon: Cpu },
  { name: "Microsoft Access", icon: Database },
  { name: "Excel", icon: Cpu },

  // AI Automation
  { name: "N8n", icon: Workflow },
  { name: "Neo4j", icon: Network },

  // Core CS Skills
  { name: "API Integration", icon: Cpu },
  { name: "Debugging", icon: Brain },
  { name: "Prompt Engineering", icon: Brain },
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
  { name: "Adaptability", icon: Sparkles },
];

export const categories = [
  "All",
  "Web Apps",
  "Machine Learning",
  "AI Automation",
  // "Open Source"
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
    title: "GoRide – Full-Stack Ride-Sharing Web App",
    description:
      "A real-time ride-sharing platform connecting drivers and riders with secure authentication and integrated payments, featuring live chat, maps, and driver/rider dashboards.",
    category: "Web Apps",
    tech: [
      "React",
      "Express.js",
      "MySQL",
      "Firebase",
      "SignalR",
      "Google Maps API",
      "Razorpay",
      "Bootstrap",
      "CSS"
    ],
    github: "#",
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
  },
  {
    title: "ThreatDetection – Insider Threat Analysis System",
    description:
      "A behavior-based insider threat detector using the CERT Insider Threat Dataset to flag anomalies like off-hour logins, abnormal file access, and non-HTTPS web activity, with engineered time/role-based features and behavioral trend visualizations.",
    category: "Machine Learning",
    tech: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Matplotlib",
      "Seaborn",
      "Jupyter Notebook"
    ],
    github: "#",
    demo: "#"
  },
  {
    title: "Navora AI – Smart Travel Safety & Trip Companion",
    description:
      "Built for Smart India Hackathon 2025, an AI-powered travel assistant creating personalized itineraries linked to a govt-verified Trip ID, with real-time tracking, SOS alerts, and geo-fencing for safe, adaptive travel.",
    category: "Machine Learning",
    tech: [
      "AI",
      "Geo-fencing",
      "Blockchain",
      "GPS",
      "Encryption",
      "Mobile App",
      "API Integration",
      "RAG"
    ],
    github: "#",
    demo: "#"
  },
  {
    title: "Future Me Advice Bot",
    description:
      "An AI chatbot built in n8n that roleplays as the user's older self, delivering short, emotionally aware advice based on present decisions and habits.",
    category: "AI Automation",
    tech: [
      "n8n",
      "Google Gemini Chat Model",
      "Prompt Engineering",
      "LLM Chains",
      "AI Chat Trigger Nodes"
    ],
    github: "#",
    demo: "#"
  },
  {
    title: "UKnowIT – Deep Research Location Intelligence",
    description:
      "An n8n-powered research engine that generates structured, in-depth JSON reports about places, covering history, folklore, controversies, archaeology, politics, and culture.",
    category: "AI Automation",
    tech: [
      "n8n",
      "Google Gemini Chat Model",
      "Webhooks",
      "Forms Trigger",
      "JavaScript",
      "JSON Processing",
      "Prompt Engineering"
    ],
    github: "#",
    demo: "#"
  },
  {
    title: "NLP Student Analytics Workflow",
    description:
      "An intelligent student data analysis workflow in n8n that answers natural language queries about academic performance and generates structured outputs with charts.",
    category: "AI Automation",
    tech: [
      "n8n",
      "Google Gemini Chat Model",
      "Ollama",
      "Webhooks",
      "Excel/XLSX Processing",
      "JavaScript",
      "QuickChart API",
      "JSON Parsing"
    ],
    github: "#",
    demo: "#"
  },
  {
    title: "KnowledgeBase Chatbot",
    description:
      "An intelligent chatbot workflow that scrapes data from Wikipedia, blogs, PDFs, and websites, then retrieves the most relevant information using TF-IDF and cosine similarity.",
    category: "AI Automation",
    tech: [
      "n8n",
      "Google Gemini Chat Model",
      "HTTP Request Nodes",
      "HTML Parsing",
      "PDF Extraction",
      "JavaScript",
      "TF-IDF",
      "Cosine Similarity"
    ],
    github: "#",
    demo: "#"
  },
  {
    title: "Neo4j Query Assistant",
    description:
      "An intelligent n8n workflow that converts natural language questions into Neo4j Cypher queries, retrieves graph data, and transforms results back into human-readable responses.",
    category: "AI Automation",
    tech: [
      "n8n",
      "Google Gemini Chat Model",
      "Neo4j",
      "Cypher Query Language",
      "HTTP Request Nodes",
      "JavaScript"
    ],
    github: "#",
    demo: "#"
  },
  {
    title: "Google Workspace AI Agent",
    description:
      "An AI-powered personal assistant built in n8n that understands user requests and intelligently interacts with Google Workspace tools to manage tasks, schedules, files, notes, spreadsheets, and emails.",
    category: "AI Automation",
    tech: [
      "n8n",
      "Google Gemini Chat Model",
      "Gmail API",
      "Google Calendar API",
      "Google Tasks API",
      "Google Docs API",
      "Google Sheets API",
      "Google Drive API",
      "AI Agents",
      "Memory Nodes"
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
      { name: "SQL", level: 85 },
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
      { name: "NumPy / Pandas / Matplotlib / Seaborn", level: 80 },
      { name: "Scikit-learn", level: 75 },
      { name: "PyTorch (Basic)", level: 60 },
      { name: "GSAP / Framer Motion", level: 85 },
      { name: "EJS", level: 80 },
      { name: "Tailwind CSS / Bootstrap", level: 90 },
      { name: "LangChain / LangGraph", level: 70 }
    ]
  },
  {
    title: "AI Automation & Machine Learning",
    icon: Workflow,
    skills: [
      { name: "N8n", level: 85 },
      { name: "Supervised & Unsupervised Learning", level: 75 },
      { name: "Anomaly Detection", level: 75 },
      { name: "NLP", level: 80 },
      { name: "Feature Engineering", level: 75 },
      { name: "Model Evaluation", level: 75 },
      { name: "Prompt Engineering", level: 85 }
    ]
  },
  {
    title: "Developer Tools & Platforms",
    icon: Wrench,
    skills: [
      { name: "Git / GitHub / GitHub Pages", level: 90 },
      { name: "VS Code", level: 95 },
      { name: "Jupyter Notebook", level: 80 },
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
    achievements: ["CGPA: 9.25 (up to 6th semester)"]
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
      "Built a data-driven book discovery application consuming the Google Books API, optimizing client-side data storage with 100% persistence.",
      "Improved application state efficiency by implementing Redux Toolkit, reducing redundant state logic by ~40%.",
      "Enhanced UI responsiveness and performance through optimized component design and async data handling, boosting responsiveness by ~50%.",
      "Collaborated in an agile team environment, following industry-standard Git workflows."
    ]
  },
  {
    role: "SAP Development SDE Intern",
    company: "Oil and Natural Gas Corporation (ONGC)",
    duration: "May 2026 – Jun 2026",
    description:
      "Completed an end-to-end SAP development internship covering ERP fundamentals, ABAP programming, database design, and SAP BTP cloud technologies, applying core CS concepts (OOP, RDBMS, client-server architecture) in an enterprise environment.",
    tech: [
      "ABAP",
      "Module Pool Programming",
      "SE11 Data Dictionary",
      "Open SQL",
      "SAP Fiori/SAPUI5",
      "SAP Business Application Studio",
      "SAP HANA Cloud",
      "SAP Build Process Automation"
    ],
    projects: [
      "Engineered a full-stack SAP business application with a normalized relational database (8+ entities) and Role-Based Access Control (RBAC) across Sales, Inventory, Production, and Dispatch modules.",
      "Developed backend logic with Open SQL and Internal Tables, building Object-Oriented ALV Reports and automating PDF generation via Adobe Forms/Smart Forms, cutting manual reporting effort by ~40%.",
      "Built a responsive SAP Fiori/SAPUI5 application using MVC architecture and two-way data binding, deployed on SAP HANA Cloud, improving data retrieval speed by ~30%.",
      "Automated multi-level approval workflows (leave request system with conditional routing) using SAP Build Process Automation, reducing manual approval steps by ~50%.",
      "Recognized in a formal letter of appreciation from the Manager (Programming), ABAP Team, for technical dedication and mentoring newer interns."
    ]
  }
];

export const socialLinks = [
  { icon: Github, href: "https://github.com/Akshat-Gupta-2005", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/akshatgupta2005/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:gemini.akshatgupta@gmail.com", label: "Email" }
];

export const hackathons = [
  {
    event: "Yantra Central Hackathon – Yantra 2025, VIT Vellore",
    project: "Gesture Recognition System using Sensor-based Hardware (no cameras, flex/motion sensors, Bluetooth transmission to mobile app)",
    position: "Top 10 (out of 100+ teams)",
    year: "2025"
  },
  {
    event: "Cook-Off 9.0 – DSA Hackathon, VIT Vellore",
    project: "Competitive programming hackathon on graph algorithms, recursion, dynamic programming, and greedy techniques (team of 3)",
    position: "Participant",
    year: "2024"
  },
  {
    event: "Smart India Hackathon 2025",
    project: "Navora AI – Smart Travel Safety & Trip Companion",
    position: "Top 10 (out of 100+ teams) from VIT",
    year: "2025"
  },
  {
    event: "Summer School on AI: Deep Dive into Deep Learning, DTU Delhi",
    project: "6-week program covering PyTorch, CNNs, RNNs/LSTMs, Transformers, and Generative AI (GPT-2, Autoencoders, Diffusion Models) — projects in Image Classification, NLP,   Fake News Detection, Image Captioning, and Vision-Language Models (CLIP)",
    position: "Participant",
    year: "2024"
  }
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
    title: "Frontend Intern",
    organization: "Nexgen Tech Solutions",
    date: "2025",
    category: "Web Development",
    link: "https://drive.google.com/file/d/1xoF8KpgUMCHUDNYFKsA_Ang86LHh8Xu3/view?usp=sharing",
    color: "from-orange-500 to-yellow-500"
  },
  {
    title: "SAP Development SDE Intern",
    organization: "Oil and Natural Gas Corporation (ONGC)",
    date: "2026",
    category: "Enterprise / SAP Development",
    link: "#",
    color: "from-red-500 to-orange-600"
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
    title: "Summer School on AI, DTU Delhi",
    organization: "Delhi Technological University",
    date: "2024",
    category: "AI & Machine Learning",
    link: "https://drive.google.com/file/d/1F0wYszl8cl1jRov60xSA4v5EYTme0twB/view?usp=sharing",
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Google Data Analytics: Foundations – Data, Data, Everywhere",
    organization: "Google (Coursera)",
    date: "2025",
    category: "Data Analytics",
    link: "#",
    color: "from-yellow-500 to-amber-600"
  },
  {
    title: "Microsoft Office Specialist: Excel 2016",
    organization: "Microsoft",
    date: "2019",
    category: "Productivity Tools",
    link: "#",
    color: "from-teal-500 to-green-600"
  }
];

export const extraCurricular = [
  {
    activity: "Publicity & Marketing Team, Riviera'25 (VIT Fest)",
    description: "Drove 1,000+ external registrations through strategic outreach and promotional campaigns.",
    year: "2025"
  },
  {
    activity: "Group Dance Competition, Primavera 2023–24 (VIT Freshers' Event)",
    description: "Achieved 1st place, showcasing strong teamwork, dance, creativity, and stage presence.",
    year: "2023-24"
  },
  {
    activity: "Deputy Head Boy, Student Council, Birla Vidya Niketan",
    description: "Demonstrated leadership, event coordination, and decision-making skills.",
    year: "2021-22"
  }
];