export const portfolioData = {
  personal: {
    name: "Mahima Kumari",
    title: "Software Developer | Full Stack Developer",
    location: "Kolkata, India",
    college: "Swami Vivekananda Institute of Modern Science, Kolkata",
    email: "mahimakumariydv2612@gmail.com",
    phone: "+91-6207006174",
    github: "https://github.com/Mahima-1008",
    linkedin: "https://www.linkedin.com/in/mahima1008/",
    year: "2026",
    status: "Available for Opportunities"
  },
  education: [
    {
      institution: "Swami Vivekananda Institute of Modern Science, Kolkata",
      degree: "B.Tech / Degree in Modern Science",
      duration: "2023 – Present",
      isCurrent: true
    },
    {
      institution: "Himalayan International School",
      degree: "CBSE - Class XII",
      duration: "2022",
      isCurrent: false
    },
    {
      institution: "Patmer School",
      degree: "CBSE - Class X",
      duration: "2020",
      isCurrent: false
    }
  ],
  experience: {
    role: "Frontend Developer Intern",
    company: "Encore Ascend",
    duration: "July 2026 – August 2026",
    techStack: "React, JavaScript, Tailwind CSS, MERN Stack",
    hasCertificate: true,
    highlights: [
      "Developed responsive and user-friendly web interfaces using React, JavaScript, and Tailwind CSS based on product requirements and UI/UX designs.",
      "Built reusable frontend components and integrated REST APIs to enhance application functionality and deliver seamless user experiences.",
      "Collaborated on frontend and backend feature implementation using the MERN Stack, while managing source code with Git and GitHub.",
      "Worked closely with the development team to build scalable, responsive, and maintainable web applications following modern development practices."
    ]
  },
  projects: [
    {
      id: "ailifeos",
      title: "AILifeOS",
      name: "AILifeOS — AI-Powered Personal Productivity Platform",
      tagline: "AI-Powered Personal Productivity Platform",
      category: "Full-Stack AI Platform",
      badge: "MERN • Groq LLM",
      stack: ["React", "Node.js", "Express.js", "MongoDB", "Groq LLM", "JWT Auth", "bcrypt", "Tailwind CSS"],
      description: "Full-stack AI productivity platform featuring 11 modular services and Groq LLMs delivering context-aware AI capabilities with structured JSON outputs and persistent personalized chat assistant.",
      bullets: [
        "Built a full-stack AI productivity platform with 11 feature modules including tasks, goals, calendar, notes, study, analytics, and AI assistant using React, Node.js/Express & MongoDB.",
        "Integrated Groq LLMs to deliver 5 AI capabilities: context-aware chat, goal-roadmap generation, note summarization, quiz generation, and flashcard creation with structured JSON outputs.",
        "Developed a personalized AI assistant with multi-turn conversation history, user-specific productivity context, and persistent chat sessions, secured through JWT authentication and bcrypt password hashing."
      ],
      github: "https://github.com/Mahima-1008",
      accent: "from-[#0F2D54] to-[#163D6F]"
    },
    {
      id: "ablespace",
      title: "Ablespace",
      name: "Ablespace — Task & Project Management Platform",
      tagline: "Task & Project Management Platform",
      category: "Task & Project Management",
      badge: "Next.js • TypeScript",
      stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Kanban Board", "Typed API Client", "Bearer Auth"],
      description: "Comprehensive task & project platform with 8+ routed pages, dual Kanban & list views, dynamic filtering, and a typed API client with 10 CRUD endpoints.",
      bullets: [
        "Built a task and project management platform using Next.js, React, and TypeScript, featuring 8+ routed pages for tasks, projects, dashboard, profile, settings, and authentication.",
        "Developed dual-view task management with Kanban and sortable list views, supporting priorities, labels, assignees, subtasks, threaded comments, search, and dynamic filtering.",
        "Engineered a typed API client with 10 CRUD endpoints, centralized error handling, request timeouts, and protected routes with persistent authentication using Bearer tokens and redirect-with-return-path support."
      ],
      github: "https://github.com/Mahima-1008",
      accent: "from-brand-100 to-white"
    },
    {
      id: "kidrove",
      title: "Kidrove",
      name: "Kidrove — AI & Robotics Workshop Landing Platform",
      tagline: "AI & Robotics Workshop Landing Platform",
      category: "Workshop & Landing Platform",
      badge: "React • Vite",
      stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "IntersectionObserver", "Node.js", "Express", "MongoDB", "Mongoose"],
      description: "Interactive workshop platform with 9 modular sections, custom scroll-triggered animations, and secure registration data processing.",
      bullets: [
        "Built a responsive workshop landing platform using React, TypeScript, Vite, and Tailwind CSS, with 9 modular sections covering workshop details, learning outcomes, instructors, testimonials, registration, FAQs, and more.",
        "Developed reusable UI components and a custom IntersectionObserver-based React hook for scroll-triggered animations, delivering a responsive and interactive experience across devices.",
        "Built a Node.js/Express + MongoDB enquiry service with a Mongoose model, server-side validation, structured error responses, and configurable CORS handling for secure registration data processing."
      ],
      github: "https://github.com/Mahima-1008",
      accent: "from-blue-600 to-[#194B8A]"
    }
  ],
  skills: {
    primary: [
      { name: "React.js", category: "Frontend", key: "react" },
      { name: "Next.js", category: "Frontend", key: "nextjs" },
      { name: "Node.js", category: "Backend", key: "nodejs" },
      { name: "TypeScript", category: "Languages", key: "typescript" },
      { name: "Tailwind CSS", category: "Frontend", key: "tailwind" },
      { name: "MongoDB", category: "Databases", key: "mongodb" }
    ],
    all: [
      { name: "React.js", category: "Frontend", key: "react" },
      { name: "Next.js", category: "Frontend", key: "nextjs" },
      { name: "HTML5", category: "Frontend", key: "html5" },
      { name: "CSS3", category: "Frontend", key: "css3" },
      { name: "Tailwind CSS", category: "Frontend", key: "tailwind" },
      { name: "Framer Motion", category: "Frontend", key: "framer" },
      { name: "Node.js", category: "Backend", key: "nodejs" },
      { name: "Express.js", category: "Backend", key: "express" },
      { name: "REST APIs", category: "Backend", key: "api" },
      { name: "MongoDB", category: "Databases", key: "mongodb" },
      { name: "MySQL", category: "Databases", key: "mysql" },
      { name: "DBMS", category: "Databases", key: "dbms" },
      { name: "TypeScript", category: "Languages", key: "typescript" },
      { name: "JavaScript", category: "Languages", key: "javascript" },
      { name: "Python", category: "Languages", key: "python" },
      { name: "C++", category: "Languages", key: "cplusplus" },
      { name: "SQL", category: "Languages", key: "sql" },
      { name: "Git", category: "Tools", key: "git" },
      { name: "GitHub", category: "Tools", key: "github" },
      { name: "Postman", category: "Tools", key: "postman" },
      { name: "Vite", category: "Tools", key: "vite" },
      { name: "npm", category: "Tools", key: "npm" },
      { name: "VS Code", category: "Tools", key: "vscode" },
      { name: "Groq LLM", category: "AI & Core", key: "groq" },
      { name: "Data Structures", category: "AI & Core", key: "dsa" },
      { name: "OOP", category: "AI & Core", key: "oop" }
    ]
  },
  services: [
    {
      id: "fullstack",
      title: "Full Stack",
      sub: "MERN & Next.js",
      desc: "End-to-end scalable web applications using React, Next.js, Node.js, and MongoDB."
    },
    {
      id: "uiux",
      title: "UI / UX",
      sub: "Tailwind & Motion",
      desc: "Pixel-perfect, accessible, and responsive user interfaces with fluid animations."
    },
    {
      id: "ai",
      title: "AI & LLMs",
      sub: "Groq, Chat & JSON",
      desc: "Integration of modern LLMs for context-aware chat, summarization & structured outputs."
    },
    {
      id: "apis",
      title: "REST APIs",
      sub: "Node, Express & Auth",
      desc: "Robust backend architectures with JWT authentication, CRUD services, and secure databases."
    }
  ]
};
