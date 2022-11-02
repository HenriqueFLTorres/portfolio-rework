import { useEnglishLanguage } from '@hooks/LanguageContext';

import GitHub from 'public/SocialLinks/GitHub';
import LinkIcon from 'public/Icons/Link';

import {
  HandWriting,
  BuildingConstruction,
  Mountain,
  Brain
} from 'public/Emojis';
import React from 'react';
import { technologiesList } from 'public/technologies';

import SmallLabel from '@components/Shared/SmallLabel';
import ProjectCarrousel from '@components/Shared/ProjectCarrousel';

type Props = {
  title: string;
  images: string[];
  shortDescription: string;
  technologies: string[];
  github: string;
  link: string;
  about: string;
  buildWith: string;
  challenges: string;
  learned: string;
};

export default function ProjectsPage({
  title,
  images,
  shortDescription,
  technologies,
  github,
  link,
  about,
  buildWith,
  challenges,
  learned
}: Props) {
  const { isEnglish } = useEnglishLanguage();

  const renderList = technologiesList.filter((technology) =>
    technologies.includes(technology.name)
  );

  return (
    <div className='min-h-screen h-[1800px] relative overflow-hidden -top-20'>
      <div className='absolute flex flex-col items-center w-[1920px] 2xl:w-screen h-auto -z-10 opacity-20 blur-lg select-none'>
        <img src={images[0]} alt='' className='absolute w-full h-auto' />
        <img
          src={images[1]}
          alt=''
          className='absolute w-full h-auto translate-y-full'
        />
      </div>
      <main className='relative z-10 pt-20 md:pt-44 w-full max-w-[800px] mx-auto md:px-8'>
        <header className='flex flex-col w-screen p-4 md:w-full md:p-0'>
          <div className='flex flex-col md:flex-row items-center mb-8 md:mb-12 gap-6 md:gap-0'>
            <h1 className='text-primary font-bold md:mr-auto text-2xl md:text-3xl'>
              {title}
            </h1>
            <a href={github} target='_blank' rel='noreferrer'>
              <div className='hidden md:block group w-8 h-8 cursor-pointer'>
                <span className='absolute block w-8 h-8 bg-primary/60 group-hover:bg-primary rounded-full blur-lg group-hover:-translate-y-1 group-hover:scale-110 transition-[background-color,_transform] duration-200'></span>
                <GitHub className='fill-primary group-hover:-translate-y-1 group-hover:scale-110 transition-transform' />
              </div>
            </a>
            <a href={link} target='_blank' rel='noreferrer'>
              <div className='hidden md:block group w-8 cursor-pointer ml-8'>
                <span className='absolute block w-8 h-8 bg-primary/60 group-hover:bg-primary rounded-full rotate-45 blur-lg group-hover:-translate-y-1 group-hover:scale-110 transition-[background-color,_transform] duration-200'></span>
                <LinkIcon className='fill-primary group-hover:-translate-y-1 group-hover:scale-110 transition-transform' />
              </div>
            </a>
          </div>
          <div className='flex flex-col w-full md:w-auto md:flex-row gap-10 md:gap-20'>
            <div className='flex flex-col h-auto w-full md:w-3/5 gap-10'>
              <img
                src={images[0]}
                alt=''
                className='w-full h-auto rounded-lg'
              />
            </div>
            <div className='flex flex-col-reverse md:flex-col w-full md:w-2/5 justify-between gap-14 md:gap-0'>
              <p className='text-primary font-light text-sm'>
                {shortDescription}
              </p>
              <div className='flex flex-row flex-wrap justify-center md:justify-center gap-6 md:gap-12'>
                <div className='flex flex-row gap-6 mx-auto'>
                  {renderList.map(({ Icon, name }) => (
                    <span
                      key={name}
                      className='group relative flex items-center justify-center w-10 h-10 md:w-14 md:h-14 rounded-md hover:bg-secondary/40 transition-[background-color]'
                    >
                      <Icon className='h-6 md:mr-0 md:h-10 drop-shadow-[0_0_4px_#ffffffae]' />
                      <SmallLabel
                        title={name}
                        additionalStyling='translate-y-[2.8rem] group-hover:translate-y-[3.5rem]'
                      />
                    </span>
                  ))}
                </div>
                <div className='md:hidden flex flex-row gap-6  mx-auto'>
                  <a href={link} target='_blank' rel='noreferrer'>
                    <div className='block group w-6 cursor-pointer'>
                      <span className='absolute block w-6 h-6 bg-primary/60 group-hover:bg-primary rounded-full blur-lg group-hover:-translate-y-1 group-hover:scale-110 transition-[background-color,_transform] duration-200'></span>
                      <GitHub className='fill-primary group-hover:-translate-y-1 group-hover:scale-110 transition-transform' />
                    </div>
                  </a>
                  <a href={link} target='_blank' rel='noreferrer'>
                    <div className='blockgroup w-6 cursor-pointer'>
                      <span className='absolute block w-6 h-6 bg-primary/60 group-hover:bg-primary rounded-full rotate-45 blur-lg group-hover:-translate-y-1 group-hover:scale-110 transition-[background-color,_transform] duration-200'></span>
                      <LinkIcon className='fill-primary group-hover:-translate-y-1 group-hover:scale-110 transition-transform' />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className='w-screen md:w-full p-4 md:p-0 flex flex-col justify-center md:grid grid-flow-row grid-cols-2 gap-6 md:gap-12 my-12 md:my-24'>
          <div>
            <span className='flex flex-row items-center font-bold text-xl text-primary mb-4 md:mb-12 p-4'>
              <img src={HandWriting} alt='' className='h-12 mr-6 inline' />
              <h3>{isEnglish ? 'About the project' : 'Sobre o projeto'}</h3>
            </span>
            <p className='text-primary font-light text-sm'>{about}</p>
          </div>

          <div>
            <span className='flex flex-row items-center font-bold text-xl text-primary mb-4 md:mb-12 p-4'>
              <img
                src={BuildingConstruction}
                alt=''
                className='h-12 mr-6 inline'
              />
              <h3>{isEnglish ? 'Build with' : 'Desenvolvido com'}</h3>
            </span>
            <p className='text-primary font-light text-sm'>{buildWith}</p>
          </div>

          <div>
            <span className='flex flex-row items-center font-bold text-xl text-primary mb-4 md:mb-12 p-4'>
              <img src={Mountain} alt='' className='h-12 mr-6 inline' />
              <h3>{isEnglish ? 'The challenges' : 'Os desafios'}</h3>
            </span>
            <p className='text-primary font-light text-sm'>{challenges}</p>
          </div>

          <div>
            <span className='flex flex-row items-center font-bold text-xl text-primary  mb-12 p-4'>
              <img src={Brain} alt='' className='h-12 mr-6 inline' />
              <h3>{isEnglish ? "What I've learned" : 'Oque eu aprendi'}</h3>
            </span>
            <p className='text-primary font-light text-sm'>{learned}</p>
          </div>
        </div>
        <ProjectCarrousel images={images} />
      </main>
    </div>
  );
}
