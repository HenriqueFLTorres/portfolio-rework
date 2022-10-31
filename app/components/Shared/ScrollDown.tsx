import Arrow from 'public/Icons/Arrow';

import { useEnglishLanguage } from '@hooks/LanguageContext';

const ScrollDown = () => {
  const { isEnglish } = useEnglishLanguage();

  return (
    <div className='absolute flex flex-col w-24 right-0 justify-center items-center text-primary mr-8 pt-28 opacity-0 animate-[reveal_1.5s_ease-out_2.5s_forwards]'>
      <div className='h-8 w-8 flex justify-center items-center bg-primary rounded-full mb-2 drop-shadow-[0_0_5px_rgba(255,255,255,0.8)] animate-bounceAndLight cursor-pointer'>
        <Arrow className='stroke-terciary' />
      </div>
      <p className='text-xs'>{isEnglish ? 'Scroll Down!' : 'Desça a página'}</p>
    </div>
  );
};

export default ScrollDown;
