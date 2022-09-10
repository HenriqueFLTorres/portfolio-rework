import React, { useEffect, useState } from 'react';
import { Link } from '@remix-run/react';

import LinkIcon from 'public/Icons/Link';
import GitHub from 'public/SocialLinks/GitHub';

import {
  CSS,
  ExpressIcon,
  JavaScriptIcon,
  JestIcon,
  MongoDBIcon,
  MongooseIcon,
  NextJSIcon,
  NodeIcon,
  ReactIcon,
  RemixIcon,
  SASSIcon,
  TailwindCSSIcon,
  TestingLibraryIcon,
  TypeScriptIcon
} from 'public/technologies';

export type ProjectCardProps = {
  title: string;
  date: string;
  shortDescription: string;
  stackUsed: Array<TechnologyName>;
  github: string;
  link: string;
  images: Array<string>;
  order: number;
  index: number;
  orderLimit: number;
};

export type TechnologyName =
  | 'CSS'
  | 'Express'
  | 'JavaScript'
  | 'Jest'
  | 'MongoDB'
  | 'Mongoose'
  | 'NextJS'
  | 'Node'
  | 'React'
  | 'Remix'
  | 'SASS'
  | 'TailwindCSS'
  | 'TestingLibrary'
  | 'TypeScript';

const ProjectCard = ({
  title,
  shortDescription,
  date,
  github,
  images,
  order,
  link,
  stackUsed,
  index,
  orderLimit
}: ProjectCardProps) => {
  const [imageRotation, setImageRotation] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const TechnologiesNames = {
    CSS,
    Express: ExpressIcon,
    JavaScript: JavaScriptIcon,
    Jest: JestIcon,
    MongoDB: MongoDBIcon,
    Mongoose: MongooseIcon,
    NextJS: NextJSIcon,
    Node: NodeIcon,
    React: ReactIcon,
    Remix: RemixIcon,
    SASS: SASSIcon,
    TailwindCSS: TailwindCSSIcon,
    TestingLibrary: TestingLibraryIcon,
    TypeScript: TypeScriptIcon
  };

  // get style accoarding to the position of the carrousel
  const getPositionStyle = (cardPosition: number) => {
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

    return '-translate-y-16 z-0 opacity-0 transition-all duration-300';
  };

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

  return (
    <div
      className={`absolute w-64 h-max bg-neutral-700/70 rounded ${getPositionStyle(
        index
      )} hover:bg-neutral-600/70 z-20`}
      onMouseOver={() => setIsHovering(true)}
      onMouseEnter={() => setImageRotation((prev) => verifyRotation(prev + 1))}
      onMouseLeave={() => {
        setIsHovering(false);
        setImageRotation(0);
      }}
    >
      <Link to='/project/mir4cc' target={'_blank'}>
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
          <div className='flex flex-col justify-between items-center pt-2 px-2 h-1/2 '>
            <header className='flex flex-row justify-between items-center w-full'>
              <h4 className='font-bold text-sm text-primary'>{title}</h4>
              <p className='font-light text-xs text-secondary'>{date}</p>
            </header>
            <p className='font-light text-xs text-secondary py-1 pb-4'>
              {shortDescription.length > 65
                ? `${shortDescription.slice(0, 65)}...`
                : shortDescription}
            </p>
            <footer className='flex flex-row gap-6'>
              {stackUsed?.map((technology: TechnologyName) => {
                const Component = TechnologiesNames[technology];

                return (
                  <span key={technology} className='relative w-5 h-5'>
                    <Component className='absolute w-full h-full' />
                    <span className='block absolute w-full h-full bg-primary/60 rounded-full blur-[15px]'></span>
                  </span>
                );
              })}
            </footer>
          </div>
        </div>
      </Link>
      <span className='absolute flex flex-col justify-between w-10 h-20 rounded-r-md p-2 bg-[#e4e4e41a] shadow-[inset_0_0_8px_#00000078] top-4 -right-4 translate-x-6'>
        <a
          href={'https://github.com/HenriqueFLTorres/Mir4-CraftingCalculator'}
          target='_blank'
          rel='noreferrer'
        >
          <div className='group cursor-pointer'>
            <span className='block absolute w-6 h-6 bg-primary/60 group-hover:bg-primary rounded-full blur-lg group-hover:-translate-y-1 group-hover:scale-110 transition-all duration-200'></span>
            <GitHub className='fill-primary group-hover:-translate-y-1 group-hover:scale-110 transition-transform' />
          </div>
        </a>
        <a
          href={'https://github.com/HenriqueFLTorres/Mir4-CraftingCalculator'}
          target='_blank'
          rel='noreferrer'
        >
          <div className='group cursor-pointer'>
            <span className='block top-12 absolute w-6 h-8 bg-primary/60 group-hover:bg-primary rounded-full rotate-45 blur-lg group-hover:-translate-y-1 group-hover:scale-110 transition-all duration-200'></span>
            <LinkIcon className='fill-primary group-hover:-translate-y-1 group-hover:scale-110 transition-transform' />
          </div>
        </a>
      </span>
      <span className='absolute w-44 h-44 bg-black/60 translate-x-7 rounded-full scale-y-[0.2] blur-[70px] pointer-events-none'></span>
    </div>
  );
};

export default ProjectCard;
