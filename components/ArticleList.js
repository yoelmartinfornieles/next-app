import articleStyles from '../styles/Article.module.css'
import ArticleCard from './ArticleItem'

const ArticleList = ({articles}) => {
	return (
		<div className={articleStyles.grid}>
			      {articles.map(article => <ArticleCard key={article.id} article= {article}/>)}
		</div>
	)
}

export default ArticleList
