import { useEffect, useState } from 'react';
import { Link } from '@remix-run/react';

import ProjectDescription from '@components/Projects/ProjectCard/Description';
import ProjectSideLinks from '@components/Projects/ProjectCard/SideLinks';
import { ProjectCardProps } from '@components/Projects/ProjectCard/ProjectCard';

const ProjectCard = ({
  order,
  index,
  orderLimit,
  project
}: ProjectCardProps) => {
  const [imageRotation, setImageRotation] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const { images, link } = project;

  const verifyRotation = (rotation: number) => {
    if (rotation > images.length - 1) return 0;
    else return rotation;
  };

  useEffect(() => {
    if (isHovering) {
      const timer = setTimeout(
        () => setImageRotation((prev) => verifyRotation(prev + 1)),
        1500
      );

      return () => {
        clearTimeout(timer);
      };
    }
  });

  const onMouseOver = () => setIsHovering(true);

  const onMouseEnter = () =>
    setImageRotation((prev) => verifyRotation(prev + 1));

  const onMouseLeave = () => {
    setIsHovering(false);
    setImageRotation(0);
  };

  return (
    <div
      className={`absolute w-64 h-max bg-neutral-700/70 rounded ${getPositionStyle(
        { cardPosition: index, order, orderLimit }
      )} hover:bg-neutral-600/70 z-20`}
      onMouseOver={onMouseOver}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Link to={link}>
        <div className='w-full h-full p-2 cursor-pointer'>
          <div
            className={
              'flex items-center justify-center relative h-[130px] max-h-[130px] rounded bg-neutral-900 text-2xl text-primary'
            }
          >
            <img
              src={images[imageRotation]}
              alt=''
              className='relative z-10 object-contain h-full'
            />
            <img
              src={images[imageRotation]}
              alt=''
              className='absolute object-contain h-full blur-[10px]'
            />
          </div>
          <ProjectDescription {...project} />
        </div>
      </Link>
      <ProjectSideLinks {...project} />
      <span className='absolute w-44 h-44 bg-black/60 translate-x-7 rounded-full scale-y-[0.2] blur-[70px] pointer-events-none'></span>
    </div>
  );
};

export default ProjectCard;

// get style accoarding to the position of the carrousel
const getPositionStyle = ({
  cardPosition,
  order,
  orderLimit
}: {
  cardPosition: number;
  order: number;
  orderLimit: number;
}) => {
  if (cardPosition === order) return 'center';

  if (
    cardPosition === order + 1 ||
    (cardPosition === 0 && order === orderLimit)
  )
    return 'left';

  if (
    cardPosition === order - 1 ||
    (order === 0 && cardPosition === orderLimit)
  )
    return 'right';

  return '-translate-y-16 z-0 opacity-0 transition-[background-color,_transform,_opacity] duration-[400ms] pointer-events-none';
};
