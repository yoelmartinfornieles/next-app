import {server} from '../config'
import ArticleList from '../components/ArticleList'
export default function Home({articles}) {
  console.log(articles)
  return (
    <div>
      <h1>Home</h1>
      <ArticleList articles = {articles}/>
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(server+'/api/articles')
  const articles = await res.json ()

  return {
    props: {
      articles
    }
  }
}

/* export const getStaticProps = async () => {
  const res = await fetch('http://jsonplaceholder.typicode.com/posts?_limit=6')
  const articles = await res.json ()

  return {
    props: {
      articles
    }
  }
} */

