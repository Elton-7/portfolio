// Edit this file to update everything on the site.

export const profile = {
  name: "Elton Otwori",
  role: "Full-Stack Developer",
  // Cycled through by the typing effect in the hero
  roles: ["Full-Stack Developer", "React & Node.js Engineer", "Data Analyst"],
  currently: { label: "Axis Learning", url: "https://axislearning.co.ke" },
  tagline:
    "I build fast, accessible web apps and enjoy turning messy problems into clean, simple software.",
  location: "Eldoret, Kenya",
  email: "eltonotwori44@gmail.com",
  phone: "+254 115 075 046", // set to "" to hide phone and WhatsApp
  resumeUrl: "/Elton_Karata_Otwori_CV.pdf", // file in /public; set to "" to hide the button
  socials: [
    { label: "GitHub", url: "https://github.com/Elton-7" },
    // { label: "LinkedIn", url: "https://linkedin.com/in/your-username" },
  ],
};

export const about = [
  "I'm an Informatics graduate from Moi University who loves building things for the web. I got hands-on IT experience as an intern at the Kenya Broadcasting Corporation (KBC), earned a certificate in Data Science with Python, and grew from Python scripts and Jupyter notebooks into building full-stack applications.",
  "Today I build full-stack apps with React, TypeScript, Node.js and PostgreSQL, like the website for Axis Learning, a homeschooling academy in Kenya. I still use Python and SQL for data analysis, and I care about code that's easy to read and interfaces that feel fast.",
];

export const skills: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["TypeScript", "JavaScript", "Python", "SQL", "HTML", "CSS"] },
  { group: "Frontend", items: ["React", "Next.js", "Vite", "Tailwind CSS", "React Router", "Framer Motion"] },
  { group: "Backend", items: ["Node.js", "Express", "PostgreSQL", "Sequelize", "REST APIs", "JWT auth"] },
  { group: "Data", items: ["pandas", "NumPy", "Matplotlib", "Jupyter", "SQLite"] },
  { group: "Tools", items: ["Git", "GitHub", "Docker", "Netlify", "Render", "VS Code", "Photoshop"] },
];

export type Project = {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  image?: string; // screenshot in /public
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Axis Learning",
    description:
      "Full-stack website for a Kenyan homeschooling and enrichment academy offering personalised learning pathways: CBC, Cambridge, IGCSE and IB, tuition, special needs education and exam prep. Families explore nine services across online, at-home, in-centre and blended formats, follow a step-by-step enrolment flow, and send enquiries or book consultations that the Express API validates, stores in PostgreSQL and emails to the team.",
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "Node.js", "Express", "PostgreSQL", "Sequelize", "JWT", "Docker"],
    github: "https://github.com/Elton-7/Axisacademy",
    live: "https://axislearning.co.ke",
    image: "/axis-learning.webp",
    featured: true,
  },
  {
    title: "Kenyan Retail Sales Analysis",
    description:
      "Cleaned and analysed a two-year, ~7,700-row retail transactions dataset to answer business questions on seasonality, top categories and regions, and weekday vs. weekend sales. Found that November–December drives a disproportionate share of revenue and that Electronics leads despite lower order volume.",
    tech: ["Python", "pandas", "NumPy", "Matplotlib", "Jupyter"],
    github: "https://github.com/Elton-7/retailsales-analysis",
  },
  {
    title: "SQL Inventory Database",
    description:
      "Designed a 6-table relational schema for a multi-warehouse inventory system (categories, suppliers, warehouses, products, stock and stock transactions) and wrote SQL queries for low-stock alerts, reorder recommendations and supplier performance tracking.",
    tech: ["SQL", "SQLite", "Python", "Database design"],
    github: "https://github.com/Elton-7/Sql-inventory-project",
  },
];

export const experience: {
  role: string;
  org: string;
  period: string;
  points: string[];
}[] = [
  {
    role: "Full-Stack Developer",
    org: "Axis Learning",
    period: "2026 — Present",
    points: [
      "Designed and built axislearning.co.ke end to end: React + TypeScript frontend and a Node.js/Express API backed by PostgreSQL.",
      "Built the enquiry and consultation booking flow with server-side validation, rate limiting and email notifications.",
      "Containerised the API with Docker and deployed the frontend and backend on Netlify and Render.",
    ],
  },
  {
    role: "IT Intern",
    org: "Kenya Broadcasting Corporation (KBC)",
    period: "Sep 2024 — Dec 2024 · Nairobi",
    points: [
      "Supported IT operations in a national public broadcasting environment.",
      "Assisted technical staff with day-to-day system maintenance, troubleshooting and digital operations.",
      "Applied data management, networking and IT support skills in a live professional setting.",
    ],
  },
  {
    role: "BSc Informatics",
    org: "Moi University",
    period: "Sep 2021 — Jul 2025",
    points: [
      "Relevant coursework: Database Systems, Software Engineering, Network Security, Data Analysis, Systems Analysis & Design.",
    ],
  },
  {
    role: "Certificate in Data Science with Python",
    org: "Sankhyana Consultancy Services, India",
    period: "Certification",
    points: ["Data analysis, cleaning and visualisation with Python, pandas, NumPy and Jupyter."],
  },
];
