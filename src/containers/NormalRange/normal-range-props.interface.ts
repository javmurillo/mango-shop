import { Article, ArticleDispatchType } from '../../store/types/articles.types';

export interface NormalRangeProps {
  articles: Article[];
  error: boolean;
  onInitArticles: () => ArticleDispatchType;
  onFilterArticles: (min: number, max: number) => ArticleDispatchType;
}
