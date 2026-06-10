"use client";

import AnimatedWords2 from "../animations/AnimatedWords2";
import AnimatedBody from "../animations/AnimatedBody";
import { monaSans } from "../fonts/monaSans";
import { motion } from "framer-motion";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export type PublicationProps = {
  id: number;
  title: string;
  journal: string;
  date: string;
  abstract: string;
  tags: string[];
  url: string;
  doi?: string;
};

const publications: PublicationProps[] = [
  {
    id: 0,
    title:
      "MindCare: AI-Powered Mental Wellness Companion",
    journal: " 6th Biennial International Conference on Nascent Technologies in Engineering (ICNTE)",
    date: "2026",
    abstract:
      "The global mental health crisis underscores the immediate necessity for scalable, accessible solutions, driven by a shortage of professionals, high costs, and stigma, as current approaches often fall short in meeting diverse individual needs of people. This paper introduces MindCare, which is an AI-driven platform that can process natural language, and also analyze sentiment, in addition to detecting emotion in order to assess and then respond to emotional states of users. Personalized care is certainly provided as peer connections are fully encouraged via the platform integrating an empathetic chatbot, community support forums, and multimodal therapies. The evaluation shows that MindCare's ef ectiveness and accuracy has reached up to 89.97% in the mental status detection, 96.85% in the emotion recognition, and 85.93% in the sentiment analysis, and it is showing its own precision in comprehension of and addressing of the user needs. Mental health includes emotional state with sentiment analysis. Chatbot conversational agents use both mobile platforms as well as natural language processing.",
    tags: ["AI", "NLP", "Sentiment Analysis", "Mental Health", "RAG"],
    url: "https://ieeexplore.ieee.org/document/11437489",
    doi: "10.1109/ICNTE66387.2026.11437489",
  },
  {
    id: 1,
    title:
      "Netra: Decentralized AI Content Ownership Registry",
    journal: "Not yet Published",
    date: "2026",
    abstract:
      "The proliferation of digital content has created unprecedented challenges in copyright protection, plagiarism detection, and intellectual property enforcement. Traditional centralized systems suffer from single points of failure, lack of transparency, and limited enforceability across jurisdictions. This study presents NETRA (Network for Enhanced Tracking, Rights Management, and Authentication), a unified decentralized architecture that incorporates hybrid blind watermarking for ownership embedding, blockchain-anchored provenance registration, AI-based plagiarism detection, NFT-enabled asset monetization, and automated enforcement of intellectual-property violations.",
    tags: ["Blockchain", "AI", "Digital Watermarking", "NFT", "IPFS"],
    url: "https://docs.google.com/document/d/1TGWaAEIDnHQ7gOFH6V9gEJk5k7N5OK007ZgpYu1cBQ4/edit?tab=t.0",
    doi: "",
  },
];

const Publications = () => {
  return (
    <section
      className="z-10 flex w-full flex-col items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-20 md:pb-16 lg:pb-24"
      id="publications"
    >
      <div
        className={`relative mb-16 flex w-full flex-col items-center justify-center gap-10 text-[#e4ded7] sm:items-center lg:max-w-[1440px]`}
      >
        <AnimatedWords2
          title={"Publications"}
          style={`flex max-w-[500px] flex-col items-start text-left pr-5 ${monaSans.className} font-extrabold uppercase leading-[0.9em] text-[#e4ded7] sm:max-w-full sm:flex-row sm:items-center sm:justify-center sm:text-center lg:text-center text-[clamp(70px,14vw,155.04px)]`}
        />
        <AnimatedBody
          text="Research papers exploring the intersection of AI, blockchain, and software engineering."
          className="w-[90%] text-center text-[14px] font-semibold uppercase sm:w-[500px] md:w-[550px] md:text-[16px]"
        />
      </div>

      <div className="grid w-[90%] max-w-[1345px] grid-cols-1 place-content-center place-items-stretch gap-x-6 gap-y-6 sm:grid-cols-2 lg:grid-cols-2">
        {publications.map((pub, index) => (
          <Link
            key={pub.id}
            href={pub.url}
            target="_blank"
            className="block"
            aria-label={`Read: ${pub.title}`}
          >
            <motion.div
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
              className="group relative flex h-full w-full cursor-pointer flex-col items-start justify-between rounded-[23px] border-[3px] border-[#212531] bg-transparent p-[28px] transition-all duration-300 hover:border-[#3a3f4b]"
            >
              {/* Date badge + arrow */}
              <div className="mb-5 flex w-full items-center justify-between">
                <span className="rounded-full bg-[#212531] px-4 py-1.5 text-[12px] font-bold uppercase tracking-wider text-[#95979D]">
                  {pub.date}
                </span>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="w-[16px] rounded-full bg-[#0E1016] p-3 text-[16px] text-[#fff] transition-transform duration-300 group-hover:translate-x-1 md:w-[20px] md:text-[20px] lg:w-[18px] lg:p-4 lg:text-[18px]"
                />
              </div>

              {/* Title — uses monaSans like the section heading */}
              <h3 className={`${monaSans.className} mb-3 text-[24px] font-extrabold uppercase leading-[0.95em] tracking-tight text-[#e4ded7] transition-colors duration-300 group-hover:text-white md:text-[28px]`}>
                {pub.title}
              </h3>

              {/* Journal */}
              <p className="mb-4 text-[14px] font-bold leading-relaxed tracking-wide text-[#95979D] md:text-[16px]">
                {pub.journal}
              </p>

              {/* Abstract */}
              <p className="mb-6 line-clamp-4 text-[14px] font-semibold leading-relaxed tracking-wide text-[#95979D]/80 md:text-[15px]">
                {pub.abstract}
              </p>

              {/* Tags */}
              <div className="mt-auto flex flex-wrap gap-2">
                {pub.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="rounded-full bg-[#212531] px-3 py-1 text-[12px] font-extrabold uppercase tracking-wide text-[#95979D]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Publications;
