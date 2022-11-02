import ArticleFragment from '@components/Shared/ArticleFragment';

const EnglishArticles = () => (
  <>
    <ArticleFragment
      title={'Reference and Value: Why you should know the difference'}
      date={'5 25 2022'}
      description={
        'Some data types in JavaScript have different behavior when copied and compared with each other. This post introduces these data types and how this affects our program'
      }
      image={
        'https://images.unsplash.com/photo-1512998844734-cd2cca565822?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=721&q=80'
      }
      link={'https://simplifiedknowledge.vercel.app/blog/reference-vs-value'}
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
      link={'https://simplifiedknowledge.vercel.app/blog/express-middlewares'}
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
      link={'https://simplifiedknowledge.vercel.app/blog/algorithms-and-big-o'}
    />
  </>
);

export default EnglishArticles;
