import ArticleFragment from "~/components/Shared/ArticleFragment";

const LatestArticles = () => {
  return (
    <section id="projects" className="relative w-max mx-auto">
      <div className="grid grid-cols-3 gap-x-24 gap-y-16 justify-center mask">
        <ArticleFragment />
        <ArticleFragment />
        <ArticleFragment />
        <ArticleFragment />
        <ArticleFragment />
        <ArticleFragment />
      </div>
      <button className="w-full rounded-full mx-auto bg-white text-neutral-800 font-bold mt-12 py-3 cursor-pointer">Find more useful Articles</button>
    </section>
  );
};

export default LatestArticles;
