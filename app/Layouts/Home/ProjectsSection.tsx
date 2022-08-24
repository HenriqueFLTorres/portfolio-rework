import React from "react";

import type { TechnologyName } from "~/components/Projects/ProjectCard";
import ProjectCard from "~/components/Projects/ProjectCard";

import Arrow from "public/Icons/Arrow";
import list from "app/components/TemporaryData.json";

import { useEnglishLanguage } from "~/hooks/LanguageContext";

let orderLimit = list.length - 1;

export interface ProjectProps {
  title: string
  githubLink: string
  liveLink: string
  date: string
  shortDescription: string
  technologies: Array<TechnologyName>
  images: Array<string>
}

const ProjectsSection = ({ projects }: { projects: Array<ProjectProps> }) => {
  const [order, setOrder] = React.useState<number>(0);

  const [isEnglish] = useEnglishLanguage()!;

  const checkOrder = (givenNumber: number) => {
    if (givenNumber < 0) {
      return orderLimit;
    } else if (givenNumber > orderLimit) {
      return 0;
    } else {
      return givenNumber;
    }
  };

  return (
    <section
      id="projects"
      className="flex flex-col items-center mb-16 mt-32 xl:mt-60 h-[600px] xl:w-[1400px] xl:mx-auto scroll-mt-24"
    >
      <h3 className="flex flex-row justify-center font-bold text-3xl xl:text-5xl xl:mb-6 text-primary p-4">
        <p>
          {isEnglish ? "Some of my projects!" : "Alguns dos meus projetos!"}
        </p>
      </h3>
      <div className="flex flex-row justify-between items-center w-full h-full px-[0px] sm:px-4">
        <Arrow
          onClick={() => setOrder(checkOrder(order - 1))}
          className="w-12 h-12 my-auto translate-y-16 sm:translate-y-0 -order-10 z-50 stroke-primary rotate-90 cursor-pointer hover:bg-primary/20 rounded transition-colors drop-shadow-[0_0_3px_rgba(255,255,255,0.8)]"
        />
        <div className="relative flex flex-row justify-center items-center gap-36">
          {projects.map(({ title, date, shortDescription, githubLink, liveLink, technologies, images }: ProjectProps, index: number) => (
            <ProjectCard
              key={index}
              order={order}
              index={index}
              orderLimit={orderLimit}
              title={title}
              date={date}
              shortDescription={shortDescription}
              github={githubLink}
              link={liveLink}
              stackUsed={technologies}
              images={images}
            />
          ))}
        </div>
        <Arrow
          onClick={() => setOrder(checkOrder(order + 1))}
          className="w-12 h-12 my-auto translate-y-16 sm:translate-y-0 order-10 z-50 stroke-primary -rotate-90 cursor-pointer hover:bg-primary/20 rounded transition-colors drop-shadow-[0_0_3px_rgba(255,255,255,0.8)]"
        />
      </div>
    </section>
  );
};

export default ProjectsSection;
