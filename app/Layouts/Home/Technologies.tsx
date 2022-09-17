import { useEnglishLanguage } from '~/hooks/LanguageContext';

import { HeartFace } from 'public/Emojis';
import { technologiesList } from 'public/technologies';

const Technologies = () => {
  const { isEnglish } = useEnglishLanguage();

  return (
    <div className='xl:w-[1200px] xl:mx-auto'>
      <h3 className='flex flex-col items-center gap-4 md:gap-0 md:flex-row xl:h-52 justify-center font-bold text-center md:text-left text-4xl xl:text-5xl xl:mb-6 text-primary mt-36 p-4'>
        <img
          src={HeartFace}
          alt=''
          className='h-12 w-12 xl:h-14 xl:w-14 md:mr-4 xl:mr-8 inline'
        />
        <p>
          {isEnglish ? 'Technologies that i use!' : 'Tecnologias que eu uso!'}
        </p>
      </h3>
      <div className='flex flex-wrap justify-center gap-6 my-12 p-4 md:p-12'>
        {technologiesList.map(({ name, Icon }) => (
          <TechnologyIcon key={name} name={name} Icon={Icon} />
        ))}
      </div>
    </div>
  );
};

const TechnologyIcon = ({
  name,
  Icon
}: {
  name: string;
  Icon: (props: any) => JSX.Element;
}) => (
  <div className={'flex flex-col items-center group gap-3'}>
    <Icon className='group h-16 w-16 drop-shadow-[0_0__2px_rgba(255,255,255,0.8)] group-hover:scale-125 cursor-pointer bg-terciary/40 rounded p-2 transition-transform duration-200' />
    <span
      className={
        'absolute rounded opacity-0 group-hover:opacity-100 px-2 py-1 bg-secondary/40 translate-y-20 text-sm text-primary z-20 backdrop-blur-sm text-center pointer-events-none'
      }
    >
      {name}
    </span>
  </div>
);

export default Technologies;
