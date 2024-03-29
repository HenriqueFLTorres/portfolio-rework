import { useEnglishLanguage } from '@hooks/LanguageContext';

import { BriefCase } from 'public/Emojis';

import englishList from '@data/ProfessionalExperience/en.json';
import portugueseList from '@data/ProfessionalExperience/pt.json';

import SmallLabel from '@components/Shared/SmallLabel';
import { Link } from '@remix-run/react';
import { cn } from '@utils/classNames';
import { technologiesList } from 'public/technologies';
import { useState } from 'react';

const ProfessionalExperience = () => {
  const [selectedIndex, setSelected] = useState(0);
  const { isEnglish } = useEnglishLanguage();

  const getListByLanguage = () => {
    if (isEnglish) return englishList;
    return portugueseList;
  };

  return (
    <section
      id='experience'
      className='relative flex flex-col w-full mx-auto max-w-[1200px] small:w-4/5 gap-4 small:px-0 mb-72'
    >
      <h3 className='flex flex-col items-center gap-4 md:gap-0 md:flex-row xl:h-52 justify-center font-bold text-center md:text-left text-4xl xl:text-5xl mb-20 text-primary mt-36 p-4'>
        <img
          src={BriefCase}
          alt=''
          className='h-12 w-12 xl:h-14 xl:w-14 md:mr-4 xl:mr-8 inline'
        />
        <p>
          {isEnglish ? 'Professional Experience' : 'Experiência Profissional'}
        </p>
      </h3>

      <div className='flex gap-4 items-center max-w-[600px] w-full mx-auto'>
        {getListByLanguage().map(({ company }: experienceType, idx) => (
          <button
            aria-label={company.name}
            key={company.name}
            onClick={() => setSelected(idx)}
            className={cn(
              'group w-40 xl:w-52 flex group text-primary/50 hover:text-primary flex-row items-center justify-center rounded bg-neutral-700/20 hover:bg-primary/10 px-4 py-3 cursor-pointer transition-[background-color] duration-400 select-none',
              { ['bg-primary/10 text-primary']: selectedIndex === idx }
            )}
          >
            <img
              src={company.logo}
              alt=''
              className='h-6 w-6 mr-4 inline group-first:invert'
            />
            <p className='mr-auto xl:text-xl font-semibold transition-[color,_filter] duration-400'>
              {company.name}
            </p>
          </button>
        ))}
      </div>

      <ul className='flex max-w-[600px] w-full mx-auto'>
        {getListByLanguage().map((experience: experienceType, idx) => {
          if (selectedIndex !== idx) return <></>;

          const {
            company,
            type,
            start,
            end,
            responsibilities,
            role,
            stackUsed
          } = experience;

          const renderList = technologiesList.filter((technology) =>
            stackUsed.includes(technology.name)
          );

          return (
            <li
              key={company.name}
              className='flex flex-col justify-between w-full h-max bg-neutral-800/50 rounded-lg px-6 py-4 gap-4 p-4'
            >
              <div className='flex flex-col sm:flex-row gap-4 justify-between'>
                <span className='text-white font-light text-xl'>
                  <h3 className='font-semibold'>{role}</h3>
                  <h5 className='text-secondary'>
                    <Link to={company.href} target='_blank'>
                      {company.name}
                    </Link>{' '}
                    · {type}
                  </h5>
                </span>
                <p className='text-secondary font-light text-lg'>
                  {start} · {end ? end : isEnglish ? 'Present' : 'Presente'}
                </p>
              </div>
              <div className='text-white font-light text-base'>
                {responsibilities.map((responsibility: string) => (
                  <p key={responsibility} className={'my-3'}>
                    · {responsibility}
                  </p>
                ))}
              </div>
              <footer className='flex flex-row justify-center gap-3 md:ml-auto flex-wrap'>
                {renderList.map(({ Icon, name }) => (
                  <span
                    key={name}
                    className='group relative flex items-center justify-center w-10 h-10 rounded-sm hover:bg-secondary/40 transition-[background-color]'
                  >
                    <Icon className='w-6 h-6' />
                    <SmallLabel
                      title={name}
                      additionalStyling='translate-y-[2.5rem] group-hover:translate-y-[3.2rem]'
                    />
                  </span>
                ))}
              </footer>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default ProfessionalExperience;

interface experienceType {
  company: { name: string; logo: string; href: string };
  role: string;
  type: string;
  start: string;
  end: string | null;
  responsibilities: string[];
  stackUsed: string[];
}
