"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { devProjects, moreProjects, ProjectProps } from "../work-section/projectDetails";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedTitle from "../animations/AnimatedTitle";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedWords2 from "../animations/AnimatedWords2";
import { monaSans } from "../fonts/monaSans";

const allProjects = [...devProjects, ...moreProjects];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  },
};

export default function ProjectsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-[#0E1016]">
      {/* Header */}
      <section className="relative flex w-full flex-col items-center justify-center pt-28 pb-10 md:pt-36 md:pb-16">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute top-8 left-6 md:left-12 lg:left-20"
        >
          <Link
            href="/"
            className="group flex items-center gap-2 rounded-full border-2 border-[#212531] px-5 py-2.5 text-[14px] font-bold uppercase tracking-wider text-[#e4ded7] transition-all duration-300 hover:border-[#e4ded7] hover:bg-[#e4ded7] hover:text-[#0E1016]"
          >
            <FontAwesomeIcon
              icon={faArrowLeft}
              className="w-3 transition-transform duration-300 group-hover:-translate-x-1"
            />
            Back
          </Link>
        </motion.div>

        <AnimatedWords2
          title={"All Projects"}
          style={`flex max-w-[500px] flex-col items-start text-left pr-5 ${monaSans.className} font-extrabold uppercase leading-[0.9em] text-[#e4ded7] sm:max-w-full sm:flex-row sm:items-center sm:justify-center sm:text-center lg:text-center text-[clamp(60px,12vw,140px)]`}
        />
        <AnimatedBody
          text="A collection of projects spanning full-stack development, AI/ML, blockchain, and distributed systems."
          className="mt-8 w-[90%] text-center text-[14px] font-semibold uppercase text-[#e4ded7] sm:w-[500px] md:w-[600px] md:text-[16px]"
        />
      </section>

      {/* Projects Grid */}
      <motion.section
        className="w-full px-6 pb-20 md:px-12 lg:px-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="mx-auto flex max-w-[1400px] flex-col gap-y-10">
          {allProjects.map((project: ProjectProps) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className={`flex w-full ${
                project.id % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              <div className="w-full lg:w-[75%]">
                <div
                  style={{
                    backgroundColor: "#212531",
                    position: "relative",
                  }}
                  className="relative z-10 h-[550px] w-full items-stretch justify-center overflow-hidden rounded-3xl bg-center py-0 sm:h-[700px] md:h-[650px] lg:h-[500px]"
                >
                  <Image
                    src={project.image}
                    alt={project.name}
                    className={`absolute -bottom-2 z-0 w-[50%] sm:w-[55%] md:w-[50%] lg:max-w-[45%] ${
                      project.id % 2 === 0 ? "right-0" : "left-0"
                    }`}
                  />
                  <div
                    className={`absolute top-0 text-[#0E1016] ${
                      project.id % 2 === 0
                        ? "left-0 ml-8 lg:ml-14"
                        : "right-0 mr-8 lg:mr-14"
                    } mt-6 flex items-center justify-center gap-4 lg:mt-10`}
                  >
                    <Link
                      href={project.github}
                      target="_blank"
                      className="rounded-full"
                      aria-label="Open GitHub Repository"
                    >
                      <FontAwesomeIcon
                        icon={faGithub}
                        className="w-[20px] rounded-full bg-white p-5 text-[20px] md:w-[25px] md:text-[24px] lg:w-[30px] lg:text-[28px]"
                      />
                    </Link>
                  </div>
                  <div
                    className={`absolute z-10 text-white ${
                      project.id % 2 === 0
                        ? "left-0 top-28 pl-10 text-left lg:top-40 lg:pl-14 w-[65%] sm:w-[55%] md:w-[55%] lg:w-[55%]"
                        : "right-0 top-28 pr-10 text-right lg:top-40 lg:pr-14 w-[65%] sm:w-[55%] md:w-[55%] lg:w-[55%]"
                    } mb-10 md:mb-16 lg:mb-14`}
                  >
                    <AnimatedTitle
                      text={project.name}
                      className={`max-w-full text-[40px] leading-none text-white md:text-[44px] md:leading-none lg:text-[48px] lg:leading-none ${
                        project.id % 2 === 0 ? "" : "ml-auto"
                      }`}
                      wordSpace="mr-[0.25em]"
                      charSpace="-mr-[0.01em]"
                    />
                    <AnimatedBody
                      text={project.description}
                      className={`mt-4 max-w-full text-[16px] font-semibold text-[#95979D] ${
                        project.id % 2 === 0 ? "" : "ml-auto"
                      }`}
                    />
                    <div
                      className={`mt-9 flex flex-wrap gap-4 ${
                        project.id % 2 === 0 ? "justify-start" : "justify-end"
                      }`}
                    >
                      {project.technologies.map((tech, i) => (
                        <AnimatedTitle
                          text={tech}
                          wordSpace="mr-[0.25em]"
                          charSpace="mr-[0.01em]"
                          key={i}
                          className="text-[14px] font-bold uppercase md:text-[16px] lg:text-[18px]"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </main>
  );
}
