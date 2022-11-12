import { useEnglishLanguage } from '@hooks/LanguageContext';

import type { projectPropTypes } from '@components/Projects/ProjectCard';
import ProjectSlider from '@components/Projects/ProjectsSlider';

import { Desktop } from 'public/Emojis';

const ProjectsSection = ({
  projects: { PT, EN }
}: {
  projects: {
    PT: Array<projectPropTypes>;
    EN: Array<projectPropTypes>;
  };
}) => {
  const { isEnglish } = useEnglishLanguage();

  return (
    <section
      id='projects'
      className='flex flex-col items-center mb-48 mt-32 xl:mt-60 h-[800px] xl:max-w-[1400px] xl:mx-auto scroll-mt-24 overflow-x-hidden overflow-y-visible'
    >
      <h3 className='flex flex-col w-full md:w-auto items-center text-center md:text-left gap-4 md:gap-0 md:flex-row font-bold text-4xl xl:text-5xl xl:mb-6 mx-8 text-primary p-4'>
        <img
          src={Desktop}
          alt=''
          className='h-12 w-12 xl:h-14 xl:w-14 md:mr-4 xl:mr-8 inline'
        />{' '}
        {isEnglish ? 'Some of my projects!' : 'Alguns dos meus projetos!'}
      </h3>

      <ProjectSlider projects={isEnglish ? EN : PT} />
    </section>
  );
};

export default ProjectsSection;
