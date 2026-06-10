"use client";

import AnimatedWords2 from "../animations/AnimatedWords2";
import AnimatedBody from "../animations/AnimatedBody";
import { monaSans } from "../fonts/monaSans";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Full-Stack Development",
    icon: "💻",
    skills: [
      "Java",
      "Python",
      "JavaScript",
      "Spring Boot",
      "React.js",
      "React Native",
      "Node.js",
      "Express.js",
      "Flask",
      "FastAPI",
    ],
  },
  {
    title: "AI & Machine Learning",
    icon: "🧠",
    skills: [
      "NLP",
      "Generative AI",
      "LLMs",
      "BERT",
      "RoBERTa",
      "TensorFlow",
      "Hugging Face",
      "Sentiment Analysis",
      "Emotion Detection",
      "RAG Systems",
    ],
  },
  {
    title: "Blockchain & Web3",
    icon: "⛓️",
    skills: [
      "Hyperledger Fabric",
      "Ethereum",
      "Smart Contracts",
      "Web3.js",
      "IPFS",
      "Cryptographic Hashing",
      "Digital Watermarking",
    ],
  },
  {
    title: "Databases & Cloud",
    icon: "☁️",
    skills: [
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "Firebase",
      "Supabase",
      "Docker",
      "Cloud Technologies",
    ],
  },
  {
    title: "Software Engineering",
    icon: "⚙️",
    skills: [
      "Distributed Systems",
      "REST APIs",
      "Git",
      "CI/CD",
      "Microservices",
      "Security",
      "Research-Driven Development",
    ],
  },
];

const Skills = () => {
  return (
    <section
      className="z-10 flex w-full flex-col items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-20 md:pb-16 lg:pb-24"
      id="skills"
    >
      <div
        className={`relative mb-16 flex w-full flex-col items-center justify-center gap-10 text-[#e4ded7] sm:items-center lg:max-w-[1440px]`}
      >
        <AnimatedWords2
          title={"Skills & Expertise"}
          style={`flex max-w-[500px] flex-col items-start text-left pr-5 ${monaSans.className} font-extrabold uppercase leading-[0.9em] text-[#e4ded7] sm:max-w-full sm:flex-row sm:items-center sm:justify-center sm:text-center lg:text-center text-[clamp(70px,14vw,155.04px)]`}
        />
        <AnimatedBody
          text="Full-Stack Developer with experience in building scalable web and mobile applications, AI/ML systems, blockchain solutions, and distributed architectures."
          className="w-[90%] text-center text-[14px] font-semibold uppercase sm:w-[500px] md:w-[600px] md:text-[16px]"
        />
      </div>

      <motion.div className="grid w-[90%] max-w-[1345px] grid-cols-1 place-content-center place-items-center gap-x-6 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.7,
                delay: 0.1 * index,
                ease: [0.44, 0, 0.22, 0.99],
              },
            }}
            viewport={{
              amount: "some",
              once: true,
            }}
            className="relative flex h-auto min-h-[280px] w-full flex-col items-start justify-start rounded-[23px] border-[3px] border-[#212531] bg-transparent p-[28px] sm:min-h-[300px] lg:max-w-[438px]"
          >
            {/* Icon & Title */}
            <div className="mb-5 flex items-center gap-3">
              <span className="text-[28px]">{category.icon}</span>
              <h3 className="text-[20px] font-bold uppercase leading-tight tracking-tight text-[#e4ded7] md:text-[23px]">
                {category.title}
              </h3>
            </div>

            {/* Skill pills */}
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="rounded-full bg-[#212531] px-3 py-1.5 text-[12px] font-bold uppercase tracking-wide text-[#95979D] transition-colors duration-300 hover:text-[#e4ded7] md:text-[13px]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
