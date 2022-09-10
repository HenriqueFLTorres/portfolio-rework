import { useEnglishLanguage } from '~/hooks/LanguageContext';

import {
  WavingHand,
  Globe,
  CrystalBall,
  HandWriting,
  HandPointingRight
} from 'public/Emojis';

const AboutMe = () => {
  const { isEnglish } = useEnglishLanguage();

  return (
    <div
      id='about-me'
      className='xl:flex xl:flex-wrap xl:justify-center xl:mx-auto xl:max-w-[1400px] scroll-mt-28'
    >
      <div className='flex flex-col xl:w-1/2 text-primary font-display text-2xl my-auto xl:my-0 xl:px-8'>
        <h3 className='flex flex-col items-center gap-4 md:gap-0 md:flex-row font-bold text-3xl xl:text-5xl xl:mb-6 mx-8'>
          <img
            src={WavingHand}
            alt=''
            className='h-8 w-8 xl:h-12 xl:w-12 md:mr-4 xl:mr-8 inline'
          />{' '}
          {isEnglish ? 'Who am I?' : 'Quem sou eu?'}
        </h3>
        <p className='font-light text-base text-center md:text-left xl:text-lg p-6'>
          {isEnglish
            ? 'Hello, I am Henrique Torres, a passionate developer who has dreamed for decades about being a Software Developer. With the first console.log(), I fell in love with programming, and since then, I have been studying and practicing hard to show my skills to the'
            : 'Olá, sou Henrique Torres, um desenvolvedor apaixonado que sonhou por décadas sobre ser um desenvolvedor de software. Com o primeiro console.log(), me apaixonei por programação e, desde então, tenho estudando e praticando muito para mostrar minhas habilidades para o '}{' '}
          <img src={Globe} alt='' className='h-4 inline mr-1' />!
        </p>
      </div>
      <div className='flex flex-col xl:w-1/2 text-primary font-display text-2xl my-auto xl:my-0 xl:px-8 mt-12'>
        <h3 className='flex flex-col items-center gap-4 md:gap-0 md:flex-row font-bold text-center md:text-left text-3xl xl:text-5xl xl:mb-6 mx-8'>
          <img
            src={CrystalBall}
            alt=''
            className='h-8 w-8 xl:h-12 xl:w-12 md:mr-4 xl:mr-8 inline'
          />{' '}
          {isEnglish
            ? 'Where do I see myself in 5 years?'
            : 'Onde eu me vejo em 5 anos?'}
        </h3>
        <p className='font-light text-base text-center md:text-left xl:text-lg p-6'>
          {isEnglish
            ? 'I want to financially stabilize myself and my family, providing them with a safer and healthier place. I will also expand my knowledge of software engineering, computer security, ethical hacking, and design with a dream to become a modern world polymath!'
            : 'Quero estabilizar financeiramente a família e a mim, proporcionando a eles um lugar mais seguro e saudável. Também expandirei meu conhecimento de engenharia de software, segurança de computadores, hacking ético e design com um sonho de me tornar um polímata do mundo moderno!'}
        </p>
      </div>
      <div className='flex flex-col xl:w-1/2 text-primary font-display text-2xl my-auto xl:mt-32 xl:px-8 mt-12'>
        <h3 className='flex flex-col items-center gap-4 md:gap-0 md:flex-row font-bold text-3xl xl:text-5xl xl:mb-6 mx-8'>
          <img
            src={HandWriting}
            alt=''
            className='h-8 w-8 xl:h-12 xl:w-12 md:mr-4 xl:mr-8 inline'
          />{' '}
          {isEnglish ? 'Check out my Blog' : 'Dê uma olhada no meu Blog'}
        </h3>
        <p className='font-light text-base text-center xl:text-lg p-6'>
          {isEnglish
            ? 'Read articles about diverse content in software development. I am constantly updating it with new knowledge that I acquire!'
            : 'Leia artigos sobre diversos conteúdos envolvendo o desenvolvimento de software. Estou constantemente atualizando-o com novos conhecimentos que adquiro!'}
          <br />
          <br />
          <img
            src={HandPointingRight}
            alt=''
            className='h-4 inline mr-1'
          />{' '}
          <a
            href='https://simplifiedknowledge.vercel.app/'
            target='_blank'
            rel='noreferrer'
            className='underline font-semibold'
          >
            Simplified Knowledge Blog
          </a>
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
