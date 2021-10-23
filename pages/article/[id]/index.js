/* import { useRouter } from "next/router"
 */
import {server} from '../../../config/index'
import Link from "next/link"

const article = ({article}) => {
/* 	const router = useRouter()
	const {id} = router.query */
	return (
		<>
			<h1>{article.title}</h1>
			<p>{article.body}</p>
			<br />
			<Link href='/'>Go Back</Link>
		</>
	)
}

export const getStaticProps = async (context) => {
	const result = await fetch(`${server}/api/articles/${context.params.id}`)
	const article = await result.json ()
	return { 
		props: {
			article
		}
	}
}

export const getStaticPaths = async () => {
	const result = await fetch(`${server}/api/articles`)
	const articles = await result.json ()

	const ids = articles.map (article => article.id)

	const paths = ids.map (id => ({params: {id: id.toString()}}))

	return {
		paths,
		fallback: false 
	}
}

/* export const getServerSideProps = async (context) => {
	const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
	const article = await result.json ()
	return { 
		props: {
			article
		}
	}
} */

/* export const getStaticProps = async (context) => {
	const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
	const article = await result.json ()
	return { 
		props: {
			article
		}
	}
}

export const getStaticPaths = async () => {
	const result = await fetch(`https://jsonplaceholder.typicode.com/posts`)
	const articles = await result.json ()

	const ids = articles.map (article => article.id)

	const paths = ids.map (id => ({params: {id: id.toString()}}))

	return {
		paths,
		fallback: false 
	}
} */


export default article
