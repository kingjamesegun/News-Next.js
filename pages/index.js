import Head from "next/head";
import ArticleList from "../componets/Article";

export default function Home({articles}) {
  return (
    <div>
      <Head>
        <title>Kings News</title>
        <meta name="keyword" content="Learning Basics of Nextjs"/>
      </Head>
      <h1>Nice one going</h1>
      <ArticleList articles={articles}/>
    </div>
  );
}

export async function getStaticProps(context) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
  const articles = await res.json()

  return {
    props: {
      articles
    }
  }
}