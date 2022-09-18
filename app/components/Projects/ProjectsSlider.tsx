/* eslint-disable react/no-unknown-property */
import Arrow from 'public/Icons/Arrow';
import { Dispatch, TouchEvent, useState } from 'react';

import list from 'app/components/TemporaryData.json';
import ProjectCard, { projectPropTypes } from './ProjectCard';

const ProjectSlider = ({ projects }: { projects: Array<projectPropTypes> }) => {
  const [order, setOrder] = useState<number>(0);
  const [touchStart, setTouchStart] = useState(0);

  return (
    <>
      <div className='flex flex-row gap-4 translate-y-48'>
        {projects.map((_, index) => (
          <span
            key={index}
            className={`block w-3 h-3 rounded-full bg-white ${
              index === order
                ? 'opactiy-80 drop-shadow-[0_0_3px_rgba(255,255,255,0.8)]'
                : 'opacity-10'
            } transition-[opacity,_filter]`}
          ></span>
        ))}
      </div>
      <div
        className='flex flex-row justify-center sm:justify-between items-center w-full h-full px-[0px] sm:px-4 disable-ghost'
        onTouchStart={(event) => handleTouchStart(event, setTouchStart)}
        onTouchEnd={(event) => handleTouchEnd(event, touchStart, setOrder)}
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
  if (givenNumber < 0) {
    return orderLimit;
  } else if (givenNumber > orderLimit) {
    return 0;
  } else {
    return givenNumber;
  }
};

const handleTouchStart = (
  event: TouchEvent<HTMLDivElement>,
  setTouchStart: Dispatch<React.SetStateAction<number>>
) => setTouchStart(event.targetTouches[0].clientX);

const handleTouchEnd = (
  event: TouchEvent<HTMLDivElement>,
  touchStart: number,
  setOrder: Dispatch<React.SetStateAction<number>>
) => {
  const clientX = event?.changedTouches[0]?.clientX;
  console.log(clientX, touchStart);

  if (clientX === touchStart) return;
  if (clientX < touchStart) return setOrder((prev) => checkOrder(prev - 1));
  if (clientX > touchStart) return setOrder((prev) => checkOrder(prev + 1));
};
