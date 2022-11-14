/* eslint-disable react/no-unknown-property */
import { TouchEvent, useState } from 'react';
import Arrow from 'public/Icons/Arrow';
import list from 'app/components/TemporaryData.json';

import ProjectCard from '@components/Projects/ProjectCard';
import { projectPropTypes } from '@components/Projects/ProjectCard/ProjectCard';
import SliderListIndex from '@components/Projects/ProjectsSlider/ListIndex';

const ProjectSlider = ({ projects }: { projects: projectPropTypes[] }) => {
  const [order, setOrder] = useState(0);
  const [touchStart, setTouchStart] = useState(0);

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) =>
    setTouchStart(event.targetTouches[0].clientX);

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    const clientX = event?.changedTouches[0]?.clientX;

    if (clientX === touchStart) return;
    if (clientX < touchStart) return setOrder((prev) => checkOrder(prev - 1));
    if (clientX > touchStart) return setOrder((prev) => checkOrder(prev + 1));
  };

  return (
    <>
      <SliderListIndex projects={projects} order={order} />
      <div
        className='flex flex-row justify-center sm:justify-between items-center w-full h-full px-[0px] sm:px-4 disable-ghost'
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <Arrow
          onClick={() => setOrder(checkOrder(order - 1))}
          className='hidden sm:block w-12 h-12 my-auto translate-y-16 sm:translate-y-0 -order-10 z-50 stroke-primary rotate-90 cursor-pointer hover:bg-primary/20 rounded transition-colors drop-shadow-[0_0_3px_rgba(255,255,255,0.8)]'
        />
        <div className='relative flex flex-row justify-center items-center gap-36'>
          {projects.map((project, index: number) => (
            <ProjectCard
              key={index}
              order={order}
              index={index}
              orderLimit={orderLimit}
              project={project}
            />
          ))}
        </div>
        <Arrow
          onClick={() => setOrder(checkOrder(order + 1))}
          className='hidden sm:block w-12 h-12 my-auto translate-y-16 sm:translate-y-0 order-10 z-50 stroke-primary -rotate-90 cursor-pointer hover:bg-primary/20 rounded transition-colors drop-shadow-[0_0_3px_rgba(255,255,255,0.8)]'
        />
      </div>
    </>
  );
};

export default ProjectSlider;

const orderLimit = list.length - 1;

const checkOrder = (givenNumber: number) => {
  if (givenNumber < 0) return orderLimit;
  else if (givenNumber > orderLimit) return 0;

  else return givenNumber;
};
