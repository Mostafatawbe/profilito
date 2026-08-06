export const profile = {
  name: "Mostafa Ali Tawbe",
  title: "Computer Science Student · Aspiring Power Platform Developer",
  location: "Beirut, Lebanon",
  phone: "+961 81 019 783",
  email: "mostafatawbe17@gmail.com",
  // Placeholder — exact profile URL not provided in the CV
  linkedin: "https://www.linkedin.com/",
  github: "https://github.com/",
  cvUrl: "/files/Mostafa_Tawbe_CV.docx",
  intro:
    "I build web and mobile applications end-to-end — from relational data models and server-side logic to responsive interfaces — with a growing focus on cloud infrastructure and low-code automation.",
  languages: ["Arabic (Native)", "English (Fluent)"],
};

export const about = {
  summary: [
    "I'm a Computer Science student at the Lebanese University, driven by a genuine passion for building software that solves real problems. Most of my work so far has lived on the backend: designing relational schemas, writing advanced SQL, and wiring reliable CRUD and validation workflows behind e-commerce, booking, and mobile shopping applications.",
    "Completing the 400-hour AWS re/Start program gave me a practical foundation in cloud infrastructure, IAM, networking, and deployment. Alongside that, I'm learning the Microsoft Power Platform to pair traditional development with rapid, low-code automation.",
    "I use AI-assisted development to prototype and debug faster, and I treat continuous learning as part of the job — every project is an excuse to pick up a new tool, tighten my problem-solving, and ship something cleaner than the last one.",
  ],
  highlights: [
    {
      title: "Backend Development",
      body: "Relational design, data modeling, advanced queries, and secure server-side validation across PHP, Java, and SQL projects.",
    },
    {
      title: "Cloud Technologies",
      body: "AWS re/Start graduate — hands-on with IAM, networking, security fundamentals, Linux CLI, and deployment workflows.",
    },
    {
      title: "Problem Solving",
      body: "Competitive problem-solving experience sharpening algorithmic thinking, debugging efficiency, and optimization under time pressure.",
    },
    {
      title: "Continuous Learning",
      body: "Currently deepening Microsoft Power Platform skills (Power Apps, Power Automate, Dataverse) and AI-assisted development practices.",
    },
  ],
};

export const skillGroups: { category: string; icon: string; items: string[] }[] = [
  { category: "Programming Languages", icon: "Code2", items: ["Java", "JavaScript", "PHP", "C", "SQL"] },
  {
    category: "Frontend",
    icon: "LayoutTemplate",
    items: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "UI/UX"],
  },
  {
    category: "Backend",
    icon: "Server",
    items: ["PHP", "Java", "CRUD Operations", "Form & Server-Side Validation", "Session Management"],
  },
  {
    category: "Databases",
    icon: "Database",
    items: ["MySQL", "SQLite", "Relational Design", "Data Modeling", "Entity Relationships", "Advanced Queries"],
  },
  { category: "Cloud", icon: "Cloud", items: ["AWS", "IAM", "Networking", "Cloud Security", "Deployment"] },
  { category: "Tools", icon: "Wrench", items: ["Git", "GitHub", "VS Code", "Android Studio", "Linux CLI"] },
  {
    category: "Frameworks & Platforms",
    icon: "Boxes",
    items: [
      "Android Development",
      "XML Layouts",
      "Power Apps (learning)",
      "Power Automate (learning)",
      "Dataverse (learning)",
    ],
  },
  { category: "Operating Systems", icon: "Terminal", items: ["Linux", "Windows"] },
];

export const concepts = [
  "AI-Assisted Development",
  "E-Commerce Systems",
  "Rapid Prototyping",
  "Agile Basics",
  "Low-Code Development",
];

// The CV lists no professional employment history yet.
export const experience: {
  company: string;
  position: string;
  dates: string;
  description: string;
  tech: string[];
}[] = [
  {
    company: "AWS re/Start Program",
    position: "Cloud Trainee (400 Hours)",
    dates: "Completed",
    description:
      "Intensive, full-time cloud training covering infrastructure, identity and access management, networking, security, and deployment — combining labs, Linux command-line work, and applied cloud exercises.",
    tech: ["AWS", "IAM", "Networking", "Linux CLI", "Security", "Deployment"],
  },
  {
    company: "Independent Projects",
    position: "Full-Stack & Mobile Developer",
    dates: "2023 — Present",
    description:
      "Designed and shipped e-commerce, booking, and Android applications end-to-end: relational schemas, server-side logic, validation, and responsive interfaces, accelerated with AI-assisted prototyping and debugging.",
    tech: ["PHP", "SQL", "Java", "SQLite", "JavaScript", "XML"],
  },
];

export const experienceNote =
  "Professional employment history is not yet listed on the CV — this section reflects verified training and project work. Add roles here as they arrive.";

export const education = [
  {
    school: "Lebanese University",
    degree: "Bachelor of Science in Computer Science",
    dates: "2023 — Expected 2026",
    location: "Beirut, Lebanon",
    coursework: [
      "Databases & Relational Design",
      "Data Modeling",
      "Web Development",
      "Android Development",
      "Programming in Java & C",
    ],
  },
];

export const certifications = [
  {
    name: "AWS re/Start Graduate",
    issuer: "Amazon Web Services",
    detail: "400-hour program covering cloud infrastructure, IAM, networking, security, and deployment.",
    tags: ["Cloud", "IAM", "Networking", "Security"],
  },
  {
    name: "Machine Learning Certificate",
    issuer: "Issuer not specified on CV",
    detail: "Foundations of machine learning concepts and applied practice.",
    tags: ["Machine Learning"],
  },
];

export const projects = [
  {
    title: "Android Shopping Application",
    description:
      "Mobile commerce app with inventory management, a persistent shopping cart, and local database storage. Implemented full CRUD operations and real-time catalog updates.",
    tech: ["Java", "XML", "SQLite", "Android Studio"],
    featured: true,
    github: "",
    demo: "",
  },
  {
    title: "Online Shop / E-Commerce System",
    description:
      "Web-based e-commerce platform with user sessions, product catalogs, category management, database integration, and secure form validation.",
    tech: ["PHP", "SQL", "MySQL", "HTML5", "CSS3"],
    featured: true,
    github: "",
    demo: "",
  },
  {
    title: "Booking Platform",
    description:
      "Service-booking system built around structured form processing, server-side validation, reliable database workflows, and interactive user feedback.",
    tech: ["PHP", "SQL", "JavaScript"],
    featured: false,
    github: "",
    demo: "",
  },
  {
    title: "Netflix Clone Web Application",
    description:
      "Responsive frontend clone optimized for cross-browser compatibility and mobile responsiveness, focused on layout fidelity and interaction polish.",
    tech: ["HTML", "CSS", "JavaScript"],
    featured: false,
    github: "",
    demo: "",
  },
  {
    title: "AI-Assisted Development Portfolio",
    description:
      "A body of work using AI tooling to accelerate prototyping, debugging, and testing — including AI-assisted diagnostics for runtime issues and database logic optimization.",
    tech: ["AI Tooling", "Debugging", "Prototyping"],
    featured: false,
    github: "",
    demo: "",
  },
];

export const achievements = [
  {
    icon: "Trophy",
    title: "Problem Solving Competition Participant",
    body: "Competed in time-constrained coding challenges, strengthening algorithmic thinking, debugging efficiency, and optimization skills.",
    tag: "Competition",
  },
  {
    icon: "Cloud",
    title: "AWS re/Start Graduate",
    body: "Completed the full 400-hour AWS cloud program spanning infrastructure, IAM, networking, security, and deployment.",
    tag: "Certification",
  },
  {
    icon: "BrainCircuit",
    title: "Machine Learning Certificate",
    body: "Earned a certificate covering core machine learning concepts and applied fundamentals.",
    tag: "Certification",
  },
  {
    icon: "GraduationCap",
    title: "BSc Computer Science in Progress",
    body: "On track to graduate from the Lebanese University in 2026 with a focus on databases, web, and mobile development.",
    tag: "Academic",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];
