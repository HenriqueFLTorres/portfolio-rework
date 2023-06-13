import ArticleFragment from '@components/Shared/ArticleFragment';

const EnglishArticles = () => (
  <>
    <ArticleFragment
      title={'Boosting Code Readability'}
      date={'11 20 2022'}
      description={
        'In this article, I will show you my methods to make my JavaScript and React code more readable.'
      }
      image={
        'https://images.unsplash.com/photo-1619409437363-1b1d6e539836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80'
      }
      link={
        'https://simplifiedknowledge.vercel.app/blog/boost-code-readability'
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
