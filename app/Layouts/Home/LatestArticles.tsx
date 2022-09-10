import ArticleFragment from '~/components/Shared/ArticleFragment';

import { useEnglishLanguage } from '~/hooks/LanguageContext';

const LatestArticles = () => {
  const { isEnglish } = useEnglishLanguage();

  return (
    <section
      id='projects'
      className='relative w-full mx-auto px-8 max-w-[1200px] small:w-4/5 small:px-0  mb-72'
    >
      <h3 className='flex flex-row justify-center font-bold text-3xl xl:text-5xl mb-24 text-primary p-4'>
        {isEnglish ? 'Check out my latest articles!' : 'Artigos mais recentes!'}
      </h3>
      <div className='grid grid-cols-[repeat(1,_minmax(150px,_1fr))] small:grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] justify-items-center gap-x-14 gap-y-8 sm:gap-x-24 sm:gap-y-16'>
        <ArticleFragment
          title={'Reference and Value: Why you should know the difference'}
          date={'08 04 22'}
          description={
            "If for some reason you've tried comparing objects or arrays in JavaScript, you probably went..."
          }
          image={'https://i.imgur.com/kFUrjL9.png'}
        ></ArticleFragment>
        <ArticleFragment
          title={'Reference and Value: Why you should know the difference'}
          date={'08 04 22'}
          description={
            "If for some reason you've tried comparing objects or arrays in JavaScript, you probably went..."
          }
          image={'https://i.imgur.com/kFUrjL9.png'}
        />
        <ArticleFragment
          title={'Reference and Value: Why you should know the difference'}
          date={'08 04 22'}
          description={
            "If for some reason you've tried comparing objects or arrays in JavaScript, you probably went..."
          }
          image={'https://i.imgur.com/kFUrjL9.png'}
        />
      </div>
      <p className='w-max text-neutral-400 mx-auto mt-12 mb-4'>
        {isEnglish ? 'Want to see more?' : 'Quer ver mais?'}
      </p>
      <a
        href={'https://simplifiedknowledge.vercel.app/'}
        target='_blank'
        rel='noreferrer'
        className={
          'flex items-center justify-center w-full rounded-xl small:rounded-full mx-auto bg-white text-neutral-800 hover:bg-neutral-400 font-bold py-3 px-4 cursor-pointer text-center transition-colors'
        }
      >
        {isEnglish
          ? 'Find more awesome articles!'
          : 'Encontre mais artigos incríveis!'}
      </a>
    </section>
  );
};

export default LatestArticles;
