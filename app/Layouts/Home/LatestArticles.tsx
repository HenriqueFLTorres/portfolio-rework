import ArticleFragment from "~/components/Shared/ArticleFragment";

import { useEnglishLanguage } from "~/hooks/LanguageContext";

const LatestArticles = () => {
  const [isEnglish] = useEnglishLanguage()!;

  return (
    <section id="projects" className="relative w-max mx-auto mb-72">
      <h3 className="flex flex-row justify-center font-bold text-3xl xl:text-5xl mb-24 text-primary p-4">
        { isEnglish ? "Check out my latest articles!" : "Artigos mais recentes!"}
      </h3>
      <div className="grid grid-cols-3 gap-x-24 gap-y-16 justify-center mask">
        <ArticleFragment
          title={"Reference and Value: Why you should know the difference"}
          date={"08 04 22"}
          description={
            "If for some reason you've tried comparing objects or arrays in JavaScript, you probably went..."
          }
          image={"https://i.imgur.com/kFUrjL9.png"}
        />
        <ArticleFragment
          title={"Reference and Value: Why you should know the difference"}
          date={"08 04 22"}
          description={
            "If for some reason you've tried comparing objects or arrays in JavaScript, you probably went..."
          }
          image={"https://i.imgur.com/kFUrjL9.png"}
        />
        <ArticleFragment
          title={"Reference and Value: Why you should know the difference"}
          date={"08 04 22"}
          description={
            "If for some reason you've tried comparing objects or arrays in JavaScript, you probably went..."
          }
          image={"https://i.imgur.com/kFUrjL9.png"}
        />
        <ArticleFragment
          title={"Reference and Value: Why you should know the difference"}
          date={"08 04 22"}
          description={
            "If for some reason you've tried comparing objects or arrays in JavaScript, you probably went..."
          }
          image={"https://i.imgur.com/kFUrjL9.png"}
        />
        <ArticleFragment
          title={"Reference and Value: Why you should know the difference"}
          date={"08 04 22"}
          description={
            "If for some reason you've tried comparing objects or arrays in JavaScript, you probably went..."
          }
          image={"https://i.imgur.com/kFUrjL9.png"}
        />
        <ArticleFragment
          title={"Reference and Value: Why you should know the difference"}
          date={"08 04 22"}
          description={
            "If for some reason you've tried comparing objects or arrays in JavaScript, you probably went..."
          }
          image={"https://i.imgur.com/kFUrjL9.png"}
        />
      </div>
      <p className="w-max text-neutral-400 mx-auto mt-12 mb-4">
        { isEnglish ? "Want to see more?" : "Quer ver mais?" }
      </p>
      <a
        href={"https://simplifiedknowledge.vercel.app/"}
        target="_blank"
        rel="noreferrer"
        className={`flex items-center justify-center w-full rounded-full mx-auto bg-white text-neutral-800 hover:bg-neutral-400 font-bold py-3 cursor-pointer transition-colors`}
      >
        { isEnglish ? "Find more awesome articles!" : "Encontre mais artigos incríveis!" }
      </a>
    </section>
  );
};

export default LatestArticles;
