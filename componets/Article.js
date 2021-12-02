import articleStyles from "../styles/Article.module.css"
import ArticleItem from "./ArticleItem"


function Article({articles}) {
    return (
        <div className={articleStyles.grid}>
        {articles.map(article=> (
          <ArticleItem article= {article}/>
          ))
        }
        </div>
    )
}

export default Article
