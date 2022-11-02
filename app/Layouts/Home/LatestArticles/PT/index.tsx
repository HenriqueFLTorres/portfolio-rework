import ArticleFragment from '@components/Shared/ArticleFragment';

const PortugueseArticles = () => (
  <>
    <ArticleFragment
      title={'Referência e Valor: Por que você deve saber a diferença'}
      date={'25 5 2022'}
      description={
        'Alguns tipos de dados no JavaScript têm comportamento diferente quando copiados e comparados entre si. Este post apresenta esses tipos de dados e como isso afeta nosso programa'
      }
      image={
        'https://images.unsplash.com/photo-1512998844734-cd2cca565822?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=721&q=80'
      }
      link={'https://simplifiedknowledge.vercel.app/blog/referencia-vs-valor'}
    ></ArticleFragment>
    <ArticleFragment
      title={'Middlewares no Express: Tudo que você precisa saber!'}
      date={'5 6 2022'}
      description={
        'Middlewares são funções interessantes fornecidas pelo Express. Este post apresenta-os e mostra algumas situações em que os utilizamos'
      }
      image={
        'https://images.unsplash.com/photo-1644136322465-fc1a30e444ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1968&q=80'
      }
      link={
        'https://simplifiedknowledge.vercel.app/blog/middlewares-no-express'
      }
    />
    <ArticleFragment
      title={'Notações Big O e algorítimos'}
      date={'26 10 2022'}
      description={
        'Você sabe o que é um algoritmo e qual é o seu poder? Eles são usados por muitas empresas e são muito comuns do que pensamos'
      }
      image={
        'https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'
      }
      link={'https://simplifiedknowledge.vercel.app/blog/big-o-e-algoritimos'}
    />
  </>
);

export default PortugueseArticles;
