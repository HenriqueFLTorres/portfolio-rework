import { useEnglishLanguage } from '~/hooks/LanguageContext';

import { HeartFace } from 'public/Emojis';
import { technologiesList } from 'public/technologies';

import SmallLabel from '~/components/Shared/SmallLabel';

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
      <div className='flex flex-wrap gap-6 justify-center my-12 p-6 md:p-12'>
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
  Icon: (
    props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
  ) => JSX.Element;
}) => (
  <div className={'flex flex-col items-center group gap-3 w-16 h-16'}>
    <Icon className='absolute origin-center group h-16 w-16 drop-shadow-[0_0__2px_rgba(255,255,255,0.8)] group-hover:h-24 group-hover:w-24 group-hover:translate-y-[-1rem] cursor-pointer bg-terciary/40 rounded p-2 transition-[height,_width,_transform] duration-200' />
    <SmallLabel title={name} />
  </div>
);

export default Technologies;
