import { useEnglishLanguage } from '@hooks/LanguageContext';

import ArticleFragment from '@components/Shared/ArticleFragment';
import { OpenBook } from 'public/Emojis';

const LatestArticles = () => {
  const { isEnglish } = useEnglishLanguage();

  return (
    <section
      id='projects'
      className='relative w-full mx-auto max-w-[1200px] small:w-4/5 small:px-0 mb-72'
    >
      <h3 className='flex flex-col items-center gap-4 md:gap-0 md:flex-row xl:h-52 justify-center font-bold text-center md:text-left text-4xl xl:text-5xl mb-20 text-primary mt-36 p-4'>
        <img
          src={OpenBook}
          alt=''
          className='h-12 w-12 xl:h-14 xl:w-14 md:mr-4 xl:mr-8 inline'
        />
        <p>
          {isEnglish
            ? 'Check out my latest articles!'
            : 'Artigos mais recentes!'}
        </p>
      </h3>
      <div className='grid grid-cols-[repeat(1,_minmax(150px,_1fr))] sm:grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] justify-items-center gap-x-14 gap-y-8 sm:gap-x-24 sm:gap-y-16 px-4'>
        <ArticleFragment
          title={'Reference and Value: Why you should know the difference'}
          date={'5 25 2022'}
          description={
            'Some data types in JavaScript have different behavior when copied and compared with each other. This post introduces these data types and how this affects our program'
          }
          image={
            'https://images.unsplash.com/photo-1512998844734-cd2cca565822?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=721&q=80'
          }
          link={
            'https://simplifiedknowledge.vercel.app/blog/reference-vs-value'
          }
        ></ArticleFragment>
        <ArticleFragment
          title={'Express Middlewares: Everything you need to know!'}
          date={'6 5 2022'}
          description={
            'Middlewares are interesting functions provided by Express. This post introduce you to them and show some situations where we use them'
          }
          image={
            'https://images.unsplash.com/photo-1644136322465-fc1a30e444ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1968&q=80'
          }
          link={
            'https://simplifiedknowledge.vercel.app/blog/express-middlewares'
          }
        />
        <ArticleFragment
          title={'Big O notations and algorithms'}
          date={'10 26 2022'}
          description={
            "Do you know what's an algorithm and what it's power? They are used by many companies and are much common than we think"
          }
          image={
            'https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'
          }
          link={
            'https://simplifiedknowledge.vercel.app/blog/algorithms-and-big-o'
          }
        />
      </div>
      <div className='flex flex-col px-4'>
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
      </div>
    </section>
  );
};

export default LatestArticles;
