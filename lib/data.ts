// Portfolio data — single source of truth
// Edit this file to update everything on the site

export const PERSONAL = {
  name: "Garvit Magoo",
  title: "Frontend Technical Architect",
  email: "garvit.magoo@gmail.com",
  phone: "+91 750 318 3674",
  github: "https://github.com/garvitmagoo",
  linkedin: "https://linkedin.com/in/garvitmagoo",
  location: "Delhi, India",
  bio: "Building systems that scale — React, Next.js, NX Monorepos & Micro-Frontend architectures. 9 years turning complexity into high-performance web products.",
  available: true,
} as const;

export const STATS = [
  { value: "9+", label: "Years Exp" },
  { value: "5", label: "Companies" },
  { value: "90%", label: "Test Coverage" },
  { value: "40%", label: "Build Faster" },
] as const;

export const SKILLS = [
  {
    icon: "⚛",
    name: "Frontend Core",
    tags: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Redux",
      "HTML5",
      "CSS3",
    ],
  },
  {
    icon: "🏗",
    name: "Architecture",
    tags: ["Monorepo", "Micro-Frontend", "Atomic Design", "Storybook", "AEM"],
  },
  {
    icon: "⚡",
    name: "Build Tools",
    tags: ["Vite", "Webpack", "NX 19", "Tailwind CSS", "Bootstrap"],
  },
  {
    icon: "🛡",
    name: "Engineering",
    tags: ["Performance", "Accessibility", "CI/CD", "Jest", "RTL", "Git"],
  },
  {
    icon: "🖥",
    name: "Backend / CMS",
    tags: ["Node.js", "Laravel", "WordPress", "Core PHP", "REST APIs"],
  },
  {
    icon: "🛒",
    name: "E-Commerce",
    tags: ["Shopify", "Custom Liquid", "Subscriptions", "Cashback Apps"],
  },
] as const;

export const EXPERIENCE = [
  {
    company: "Perficient",
    role: "Technical Architect",
    period: "May 2025 — Present",
    current: true,
    impact: "MFE Platform",
    bullets: [
      "Designed scalable Monorepo supporting multiple Next.js MFEs ensuring modularity across teams.",
      "Established Atomic Design system and shared utilities reducing duplicate code significantly.",
      "Implemented SSR across MFEs improving SEO rankings and Core Web Vitals measurably.",
      "Delivered theme consistency via Tailwind and Storybook-based component documentation.",
    ],
  },
  {
    company: "Altimetrik",
    role: "Senior Engineer — Product & Platform",
    period: "Apr 2022 — May 2025",
    current: false,
    impact: "40% faster builds",
    bullets: [
      "Reduced build time ~40% by leading Webpack → Vite migration across a large product suite.",
      "Led engineering team building and maintaining multiple React and Next.js apps at scale.",
      "Achieved 90%+ test coverage with Jest and RTL, setting new quality benchmarks.",
      "Architected MFE system and drove comprehensive UI revamp with reusable component library.",
    ],
  },
  {
    company: "eSoft Technologies",
    role: "Senior Software Developer",
    period: "Mar 2021 — Apr 2022",
    current: false,
    impact: "CMS from scratch",
    bullets: [
      "Built a full CMS from scratch — React frontend, Laravel backend, serving multiple client portals.",
      "Developed marker-based map navigation with rich contextual layers via JavaScript APIs.",
      "Designed RBAC system serving differentiated interfaces to distinct user roles.",
    ],
  },
  {
    company: "IonSoft Solutions",
    role: "Senior Developer",
    period: "May 2019 — Mar 2021",
    current: false,
    impact: "Shopify wallet app",
    bullets: [
      "Built a Shopify wallet app delivering cashback rewards based on custom business conditions.",
      "Reduced initial load times significantly via code splitting and lazy loading techniques.",
    ],
  },
  {
    company: "Hok Beauty",
    role: "Shopify Expert",
    period: "Feb 2017 — May 2019",
    current: false,
    impact: "Custom Shopify modules",
    bullets: [
      'Built "Build Your Own Box" — customers bundle 5 custom products as a single order.',
      "Created Subscription Module enabling long-term subscriptions with monthly product updates.",
    ],
  },
] as const;

export const EDUCATION = {
  degree: "B.Tech — Computer Science & Engineering",
  institution: "GGSIPU New Delhi",
  score: "79.8%",
  year: "2012–2016",
} as const;

export const CERTIFICATION = {
  name: "Salesforce Certified JavaScript Developer I",
  issuer: "Salesforce",
} as const;

export const TICKER_ITEMS = [
  "React.js",
  "Next.js 15",
  "TypeScript",
  "Micro-Frontend",
  "NX Monorepo",
  "Tailwind CSS",
  "Storybook 8",
  "Node.js",
  "Vite",
  "Jest + RTL",
  "SSR",
  "Core Web Vitals",
  "Atomic Design",
  "CI/CD",
  "Module Federation",
] as const;
