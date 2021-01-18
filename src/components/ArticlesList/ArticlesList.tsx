import * as ArticleTypes from '../../store/types/articles.types';
import { Article } from '../Article/Article';
import { ArticlesListProps } from './articles-list-props.interface';

export const ArticlesList = (props: ArticlesListProps) => {
  return (
    <div className="row" style={{ justifyContent: 'center' }}>
      {props.articlesList.map((article: ArticleTypes.Article) => {
        return <Article article={article} key={article.id} />;
      })}
    </div>
  );
};
