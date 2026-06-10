import ProjectCard from "./ProjectCard";
import { devProjects, ProjectProps } from "./projectDetails";
import Link from "next/link";

const ProjectGrid = () => {
  return (
    <>
      <div className="flex w-full flex-col gap-y-10 lg:max-w-[1400px]">
        {devProjects.map((project: ProjectProps) => (
          <div
            key={project.id}
            className={`flex w-full ${
              project.id % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            <div className="w-full lg:w-[75%]">
              <ProjectCard
                id={project.id}
                name={project.name}
                description={project.description}
                technologies={project.technologies}
                github={project.github}
                demo={project.demo}
                image={project.image}
                available={project.available}
              />
            </div>
          </div>
        ))}
      </div>

      {/* See More Button */}
      <div className="mt-14 flex w-full justify-center">
        <Link
          href="/projects"
          className="group relative inline-flex items-center gap-3 rounded-full border-2 border-[#e4ded7] bg-transparent px-8 py-4 text-[16px] font-bold uppercase tracking-wider text-[#e4ded7] transition-all duration-300 hover:bg-[#e4ded7] hover:text-[#0E1016] md:px-10 md:py-5 md:text-[18px]"
          data-blobity
          data-blobity-radius="40"
          data-blobity-offset-x="4"
          data-blobity-offset-y="4"
          data-blobity-magnetic="false"
        >
          See More
          <svg
            className="w-5 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </div>
    </>
  );
};

export default ProjectGrid;
