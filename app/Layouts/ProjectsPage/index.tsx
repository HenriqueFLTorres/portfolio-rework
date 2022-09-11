import ProjectCarrousel from 'app/components/Shared/ProjectCarrousel';
import { useEnglishLanguage } from '~/hooks/LanguageContext';

import GreenParticle from 'public/SVG/GreenParticle.png';
import RedParticle from 'public/SVG/RedParticle.png';
import PurpleParticle from 'public/SVG/PurpleParticle.png';

import GitHub from 'public/SocialLinks/GitHub';
import LinkIcon from 'public/Icons/Link';

import {
  HandWriting,
  BuildingConstruction,
  Mountain,
  Brain
} from 'public/Emojis';

type Props = {
  title: string;
  images: Array<string>;
  shortDescription: string;
  technologies: Array<any>;
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

  return (
    <div className='h-[1800px] relative overflow-hidden'>
      <div className='absolute flex flex-col items-center w-[1920px] 2xl:w-screen h-auto -z-10 opacity-50 blur-md'>
        <img src={images[0]} alt='' className='absolute w-full h-auto' />
        <img
          src={images[0]}
          alt=''
          className='absolute w-full h-auto translate-y-full'
        />
      </div>
      <img src={RedParticle} alt='' className='absolute left-[-50rem] top-30' />
      <img
        src={GreenParticle}
        alt=''
        className='absolute right-[-12rem] top-0'
      />
      <img
        src={PurpleParticle}
        alt=''
        className='absolute left-[12rem] top-[50rem]'
      />
      <main className='relative z-10 pt-20 md:pt-44 w-screen md:w-[800px] mx-auto'>
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
              <div className='flex flex-row justify-between md:justify-center gap-6 md:gap-12'>
                {technologies.map((Tool) => (
                  <Tool
                    key={Tool}
                    className='h-6 mr-auto md:mr-0 md:h-10 drop-shadow-[0_0_4px_#ffffffae]'
                  />
                ))}
                <a href={link} target='_blank' rel='noreferrer'>
                  <div className='block md:hidden group w-6 cursor-pointer'>
                    <span className='absolute block w-6 h-6 bg-primary/60 group-hover:bg-primary rounded-full blur-lg group-hover:-translate-y-1 group-hover:scale-110 transition-[background-color,_transform] duration-200'></span>
                    <GitHub className='fill-primary group-hover:-translate-y-1 group-hover:scale-110 transition-transform' />
                  </div>
                </a>
                <a href={link} target='_blank' rel='noreferrer'>
                  <div className='block md:hidden group w-6 cursor-pointer'>
                    <span className='absolute block w-6 h-6 bg-primary/60 group-hover:bg-primary rounded-full rotate-45 blur-lg group-hover:-translate-y-1 group-hover:scale-110 transition-[background-color,_transform] duration-200'></span>
                    <LinkIcon className='fill-primary group-hover:-translate-y-1 group-hover:scale-110 transition-transform' />
                  </div>
                </a>
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
              <h3>{isEnglish ? 'What I\'ve learned' : 'Oque eu aprendi'}</h3>
            </span>
            <p className='text-primary font-light text-sm'>{learned}</p>
          </div>
        </div>
        <ProjectCarrousel images={images} />
      </main>
    </div>
  );
}
