import React from "react";
import ProjectCard from "~/components/Projects/ProjectCard";

import Desktop from "public/Emojis/Desktop.png";
import Arrow from "public/Icons/Arrow";
import list from "~/components/p.json";

import { useEnglishLanguage } from "~/hooks/LanguageContext";

let orderLimit = list.length - 1;

const ProjectsSection = ({ projects }: any) => {
  const [order, setOrder] = React.useState<any>(0);

  const isLanguageEnglish = useEnglishLanguage();

  const checkOrder = (givenNumber: Number) => {
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
      {/* <h3 className="flex flex-row justify-center font-bold text-3xl xl:text-5xl xl:mb-6 text-primary p-4">
        <p>{ isLanguageEnglish ? "Some of my projects!" : "Alguns dos meus projetos!" }</p>
      </h3> */}
      <div className="flex flex-row justify-between items-center w-full h-full px-4 overflow-hidden">
        <Arrow
          onClick={() => setOrder(checkOrder(order - 1))}
          className="w-12 h-12 my-auto -order-10 z-50 stroke-primary rotate-90 cursor-pointer hover:bg-primary/20 rounded transition-colors drop-shadow-[0_0_3px_rgba(255,255,255,0.8)]"
        />
        <div className="relative flex flex-row justify-center items-center gap-36">
          {projects.map((item: any, index: number) => (
            <ProjectCard
              key={index}
              order={order}
              index={index}
              orderLimit={orderLimit}
              title={item.title}
              date={item.date}
              // github={item['github-link']}
              // link={item['live-link']}
            />
          ))}
        </div>
        <Arrow
          onClick={() => setOrder(checkOrder(order + 1))}
          className="w-12 h-12 my-auto order-10 z-50 stroke-primary -rotate-90 cursor-pointer hover:bg-primary/20 rounded transition-colors drop-shadow-[0_0_3px_rgba(255,255,255,0.8)]"
        />
      </div>
    </section>
  );
};

export default ProjectsSection;