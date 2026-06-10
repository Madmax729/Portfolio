export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const devProjects = [
  {
    id: 0,
    name: "NETRA",
    description:
      "A blockchain-powered platform to mint, verify, and trade digital content as NFTs with AI fingerprinting, watermarking, and provenance tracking — built on Ethereum Sepolia Testnet.",
    technologies: ["React", "Solidity", "IPFS", "Web3.js", "Flask"],
    github: "https://github.com/Madmax729/NETRA-Decentralized-AI-Content-Ownership-Registry",
    demo: "",
    image: require("./../../public/projects/NetraBK.png"),
    available: true,
  },
  {
    id: 1,
    name: "MindCare",
    description:
      "An AI-powered mental health application with sentiment analysis, emotion detection, and conversational AI support for personalized mental wellness tracking and guidance.",
    technologies: ["Python", "React Native", "NLP", "TensorFlow", "FastAPI"],
    github: "https://github.com/Madmax729/TE-proj",
    demo: "",
    image: require("./../../public/projects/MindCare2BK.png"),
    available: true,
  },
  {
    id: 2,
    name: "NexBank",
    description:
      "A production-grade digital banking platform built on microservices with multi-currency accounts, UPI transfers, fraud detection, double-entry ledger accounting, and JWT authentication.",
    technologies: ["Spring Boot", "React", "PostgreSQL", "Kafka", "Docker"],
    github: "https://github.com/Madmax729/NexBank-Digital-Banking-Platform",
    demo: "",
    image: require("./../../public/projects/NexBank.png"),
    available: true,
  },
  {
    id: 3,
    name: "Distributed Auction System",
    description:
      "A distributed auction platform featuring Bully Algorithm leader election, Lamport Logical Clocks for bid ordering, real-time Socket.io broadcasts, NGINX load balancing, and fault tolerance.",
    technologies: ["Node.js", "React", "MongoDB", "Socket.io", "Docker"],
    github: "https://github.com/Madmax729/Distributed-Auction-System-",
    demo: "",
    image: require("./../../public/projects/propellent-new.png"),
    available: true,
  },
  {
    id: 4,
    name: "Aurum Escape",
    description:
      "A premium luxury travel booking platform with curated escape experiences, elegant UI, and Supabase-powered backend for seamless booking and user management.",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Supabase"],
    github: "https://github.com/Madmax729/aurum-escape-voyages",
    demo: "",
    image: require("./../../public/projects/flixify.png"),
    available: true,
  },
];

export const moreProjects = [
  {
    id: 5,
    name: "Vyapaar",
    description:
      "A comprehensive business management platform designed to streamline operations, track sales, manage inventory, and enhance decision-making with data-driven insights.",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/Madmax729/Vyapaar",
    demo: "",
    image: require("./../../public/projects/Vyapaar1.png"),
    available: true,
  },
  {
    id: 6,
    name: "PDF-s and More",
    description:
      "A versatile PDF utility application for managing, converting, and manipulating PDF documents with a clean and intuitive user interface.",
    technologies: ["Python", "Streamlit", "PyPDF2"],
    github: "https://github.com/Madmax729/PDF-s-and-more-",
    demo: "",
    image: require("./../../public/projects/synthetix.png"),
    available: true,
  },
  {
    id: 7,
    name: "Multiple PDF Reader",
    description:
      "An intelligent multi-PDF reader that enables users to upload multiple PDF documents and interact with their content using AI-powered question answering.",
    technologies: ["Python", "LangChain", "Streamlit", "FAISS"],
    github: "https://github.com/Madmax729/Multiple-Pdf-Reader",
    demo: "",
    image: require("./../../public/projects/alpaca-flip.png"),
    available: true,
  },
  {
    id: 8,
    name: "SnapNotes",
    description:
      "A smart note-taking application that allows users to quickly capture, organize, and retrieve notes with an efficient and streamlined workflow.",
    technologies: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/Madmax729/SnapNotes",
    demo: "",
    image: require("./../../public/projects/mlsc.png"),
    available: true,
  },
];

export const designProjects = [
  {
    id: 1,
    name: "Hebron Statup Lab Website",
    description:
      "SkyWatch is a convenient and user-friendly tool that allows you to quickly and easily check the current.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Fhsl.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 2,
    name: "RAGS Scrubs Website",
    description:
      "An image generator website that allows users to generate, combine, and download images.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Frags.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 3,
    name: "Crown Branding Agency Website",
    description:
      "A website that reduces the length of your URL using Bit.ly's API",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image:
      "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Fcrown.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 4,
    name: "Titi Mobile App",
    description:
      "TMTM helps you find people who are headed to the same location as you, so you can share a ride and split the cost with them.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Ftiti.webp&w=1920&q=75",
    available: false,
  },
];
